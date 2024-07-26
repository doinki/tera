import { memo } from 'react';

export interface PostProps {
  company: string;
  date: string;
  description: string | null;
  title: string;
}

export const Post = memo(({ company, date, description, title }: PostProps) => {
  return (
    <article className="py-[1em]">
      <h2 className="mt-0">{title}</h2>
      <p>{description}</p>
      <time dateTime={date}>{new Date(date).toLocaleDateString('ko')}</time>
      <br />
      <cite>{company}</cite>
    </article>
  );
});
