export default function ArticleByline({
  published,
  readMinutes,
}: {
  published: string;
  readMinutes: number;
}) {
  return (
    <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
      <span>
        By the <strong className="text-ink">Stride Team</strong> · Beginner fitness guides
      </span>
      <span aria-hidden="true">·</span>
      <span>Published {published}</span>
      <span aria-hidden="true">·</span>
      <span>{readMinutes} min read</span>
    </p>
  );
}
