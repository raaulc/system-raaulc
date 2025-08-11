export function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rahul Rathod',
    givenName: 'Rahul',
    familyName: 'Rathod',
    url: 'https://rahul.dev',
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Self-Employed'
    },
    sameAs: [
      'https://github.com/Star-Knight',
      'https://twitter.com/Star_Knight12'
    ],
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Full Stack Development'
    ],
    description: 'Rahul Rathod is a Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js. Creating modern web applications with clean, efficient code.'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
