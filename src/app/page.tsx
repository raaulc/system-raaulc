import dynamic from 'next/dynamic';
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { VideoCard } from "@/components/video-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PersonSchema } from "@/components/schema/person-schema";
import { Metadata } from 'next';
import { Icons } from "@/components/icons";
import ShinyButton from "@/components/ui/shiny-button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { SocialIconLink } from "@/components/social-icon-link";
import { BlogSkeleton } from "@/components/skeletons/blog-skeleton";
import { GithubSkeleton } from "@/components/skeletons/github-skeleton";
import { ProjectSkeleton } from "@/components/skeletons/project-skeleton";
import { HackathonSkeleton } from "@/components/skeletons/hackathon-skeleton";
import { BorderBeam } from "@/components/magicui/border-beam";
import { GhibliSkyBackground } from "@/components/ghibli-elements";
import { InteractiveGhost } from "@/components/interactive-ghost";
const BLUR_FADE_DELAY = 0.04;
export const metadata: Metadata = {
  title: "Rahul Rathod | Lead Backend Engineer — Python | FastAPI | AWS",
  description: "Lead Backend Engineer with 14+ years experience building scalable microservices using Python/FastAPI, AWS, Kafka, Redis, and PostgreSQL. Expert in distributed systems, observability, and production-ready architectures.",
  openGraph: {
    title: "Rahul Rathod | Lead Backend Engineer — Python | FastAPI | AWS",
    description: "Lead Backend Engineer specializing in Python/FastAPI, AWS, and cloud-native microservices. Expert in distributed systems, observability, and scalable architectures.",
    url: DATA.url,
    siteName: "Rahul Rathod - Lead Backend Engineer",
    images: [
      {
        url: 'https://prasen.dev/portfolio.png',
        width: 1200,
        height: 630,
        alt: `${DATA.name} - Lead Backend Engineer`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Rathod | Lead Backend Engineer — Python | FastAPI | AWS',
    description: 'Lead Backend Engineer specializing in Python/FastAPI, AWS, and cloud-native microservices',
    creator: '@' + 'Star_Knight12',
    images: ['https://prasen.dev/portfolio.png'],
  },
};

const BlogCard = dynamic(() => import("@/components/blog-card").then(mod => mod.BlogCard), {
  ssr: true,
  loading: () => <BlogSkeleton />
});

const GithubContributions = dynamic(() => import("@/components/github-calendar").then(mod => mod.GithubContributions), {
  ssr: false,
  loading: () => <GithubSkeleton />
});

const ProjectCardDynamic = dynamic(() => import("@/components/project-card").then(mod => mod.ProjectCard), {
  ssr: true,
  loading: () => <ProjectSkeleton />
});

const HackathonCardDynamic = dynamic(() => import("@/components/hackathon-card").then(mod => mod.HackathonCard), {
  ssr: true,
  loading: () => <HackathonSkeleton />
});

export default function Page() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <GhibliSkyBackground />
      </div>
      
      <InteractiveGhost />
      
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <PersonSchema />
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👨🏻‍💻`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
                <BlurFadeText
                  className="max-w-[600px] text-sm text-muted-foreground"
                  delay={BLUR_FADE_DELAY * 1.5}
                  text="I design and lead cloud-native microservices that are secure, observable, and built for scale."
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="profile-wrapper">
                  <Avatar className="size-28 relative z-10">
                    <AvatarImage
                      alt={DATA.name}
                      src="/favicons/profile-pic.jpeg"
                      width={112}
                      height={112}
                      loading="eager"
                    />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </div>
              </BlurFade>
            </div>
            
          </div>
        </section>
        
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                I design and lead cloud-native microservices that are secure, observable, and built for scale. With 14+ years of experience, I specialize in Python/FastAPI, distributed systems, and production-ready architectures that handle millions of requests.
              </p>
              <p>
                I'm passionate about clean code, system design, and mentoring teams to deliver reliable, scalable solutions. My expertise spans event-driven architectures, performance tuning, and implementing robust observability patterns.
              </p>
              <p>
                Currently leading backend development at Sky Betting & Gaming, where I've built high-traffic APIs serving 10M+ daily requests with 99.9% uptime, implemented FastAPI experimentation tooling that reduced rollout time by 60%, and improved incident response by 40% through enhanced observability.
              </p>
            </div>
          </BlurFade>
        </section>



        <section id="connect">
          <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Let's collaborate 🤝🏻</h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                {Object.entries(DATA.contact.social).map(([name, social], idx) => (
                  <SocialIconLink
                    key={name}
                    name={name}
                    url={social.url}
                    icon={<social.icon />}
                    delay={BLUR_FADE_DELAY * 5 + idx * 0.05}
                  />
                ))}
              </div>
            </div>
          </BlurFade>
        </section>

        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="contributions">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">GitHub Contributions</h2>
            <GithubContributions />
          </BlurFade>
        </section>

        <section id="projects">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Backend Projects</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <div className="grid gap-4 sm:grid-cols-2">
                {DATA.showAllProjects 
                  ? DATA.projects.map((project) => (
                      <div key={project.title} className="relative overflow-hidden rounded-xl">
                        <ProjectCard
                          {...project}
                          tags={Array.from(project.technologies)}
                        />
                      </div>
                    ))
                  : DATA.projects.filter(project => !project.active).map((project) => (
                      <div key={project.title} className="relative overflow-hidden rounded-xl">
                        <ProjectCard
                          {...project}
                          tags={Array.from(project.technologies)}
                        />
                      </div>
                    ))
                }
              </div>
              <Link
                href="/projects"
                className="mt-4 block"
              >
                <ShinyButton
                  className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] font-semibold"
                >
                  View All Projects →
                </ShinyButton>
              </Link>
            </BlurFade>
          </div>
        </section>

        <section id="blogs">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Backend Engineering Blog</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="flex flex-col space-y-4">
                {DATA.blogs.map((blog, idx) => (
                  <BlogCard
                    key={blog.title}
                    post={{
                      title: blog.title,
                      publishedAt: blog.date,
                      summary: blog.summary,
                      slug: blog.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
                    }}
                  />
                ))}
                <Link
                  href="/blog"
                  className="mt-4 block"
                >
                  <RainbowButton
                    className="w-full sm:w-[160px] px-4 py-2 group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] font-bold text-sm"
                  >
                    Read More Blogs
                  </RainbowButton>
                </Link>
              </div>
            </BlurFade>
          </div>
        </section>

        <section id="youtube">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <h2 className="text-xl font-bold">YouTube</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <div className="flex flex-col space-y-4">
                {DATA.youtube && DATA.youtube.map((video, idx) => (
                  <a
                    key={video.url}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted transition"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-24 h-16 object-cover rounded"
                    />
                    <div>
                      <div className="font-semibold">{video.title}</div>
                      <div className="text-sm text-muted-foreground">{video.description}</div>
                      <div className="text-xs text-muted-foreground mt-1">{video.date}</div>
                    </div>
                  </a>
                ))}
              </div>
            </BlurFade>
          </div>
        </section>

        <section id="likes-building">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Backend Engineering Philosophy
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {DATA.likesBuilding}
                </h2>
              </div>
            </div>
          </BlurFade>
        </section>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Contact</h2>
              
              <p className="text-muted-foreground">
                Always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
              </p>
              

            </div>
          </BlurFade>
        </section>
        <footer className="mt-20 border-t py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
                  <p>
                    Open source under{' '}
                    <a 
                      href="https://opensource.org/licenses/MIT" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-foreground"
                    >
                      MIT License
                    </a>
                    {' '}and available on{' '}
                    <a 
                      href="https://github.com/StarKnightt/prasendev" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-foreground"
                    >
                      GitHub
                    </a>
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Link href="/sitemap.xml" className="text-sm text-muted-foreground hover:text-foreground">
                    Sitemap
                  </Link>
                  <Link href="/rss.xml" className="text-sm text-muted-foreground hover:text-foreground">
                    RSS
                  </Link>
                </div>
              </div>
            </div>
          </BlurFade>
        </footer>
      </main>
    </>
  );
}