import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BlogInteractions } from "@/components/blog-interactions";
import { readFileSync } from "fs";
import { join } from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { cache } from "react";

const getBlogContent = cache(async (slug: string) => {
  try {
    const filePath = join(process.cwd(), "content", `${slug}.mdx`);
    const source = readFileSync(filePath, "utf8");
    const { content } = await compileMDX({
      source,
      options: { parseFrontmatter: true }
    });
    return content;
  } catch (error) {
    console.error(`Error loading blog content for slug: ${slug}`, error);
    return null;
  }
});

export function generateStaticParams() {
  return DATA.blogs.map((blog) => ({ slug: blog.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata | undefined {
  const blog = DATA.blogs.find(
    (b) => b.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") === params.slug
  );
  if (!blog) return;
  let ogImage = `${DATA.url}/og?title=${blog.title}`;
  return {
    title: blog.title,
    description: blog.summary,
    openGraph: {
      title: blog.title,
      description: blog.summary,
      type: "article",
      publishedTime: blog.date,
      url: `${DATA.url}/blog/${params.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.summary,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const blog = DATA.blogs.find(
    (b) => b.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") === params.slug
  );
  if (!blog) {
    notFound();
  }

  const content = await getBlogContent(params.slug);

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            datePublished: blog.date,
            dateModified: blog.date,
            description: blog.summary,
            image: `${DATA.url}/og?title=${blog.title}`,
            url: `${DATA.url}/blog/${params.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {blog.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(blog.date)}
          </p>
        </Suspense>
      </div>
      <div className="prose dark:prose-invert max-w-[650px]">
        {content ? (
          <div className="blog-content">
            {content}
          </div>
        ) : (
          <p className="text-muted-foreground">Content loading...</p>
        )}
      </div>
      <BlogInteractions slug={params.slug} />
    </section>
  );
}
