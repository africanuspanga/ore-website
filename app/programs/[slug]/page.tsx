import { notFound } from "next/navigation";
import { programs, getProgramBySlug } from "../../lib/programs-data";
import ProgramDetailClient from "./program-detail-client";

export function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export default function ProgramDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const program = getProgramBySlug(params.slug);

  if (!program) {
    notFound();
  }

  return <ProgramDetailClient program={program} />;
}
