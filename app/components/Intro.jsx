import dynamic from "next/dynamic";

const IconCloud = dynamic(() => import("./icon-cloud"), { ssr: false });

const IntroSection = () => {
  const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "vercel",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "figma",
  ];

  return (
    <div className="bg-black relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default IntroSection;
