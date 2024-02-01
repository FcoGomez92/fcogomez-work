import type { Metadata } from 'next'
import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import { Carousel } from "@/app/components/carousel"

// export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {

  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);
 
  if (!project) {
    return {}
  }

  return {
    title: project.title,
  }
}
const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .map((p) => ({
      slug: p.slug,
    }));
}

const generateSlidesUrl = (slug: string, qty: number): string[] | null => {
  if (qty <= 0) {
    return null;
  }

  return Array.from({ length: qty }, (_, i) => `/${slug}-${i}.webp`);
};


export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);
  
  if (!project) {
    notFound();
  }
  const slides = generateSlidesUrl(slug, project.slides)

  const views = 
    (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} />
      {/* <ReportView slug={project.slug} /> */}

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        {slides && <Carousel slides={slides}/>}
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}
