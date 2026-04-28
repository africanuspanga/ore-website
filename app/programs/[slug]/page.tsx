import { notFound } from "next/navigation";
import { programs, getProgramBySlug } from "../../lib/programs-data";
import ProgramDetailClient from "./program-detail-client";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return <ProgramDetailClient program={program} />;
}
