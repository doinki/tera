import { memo } from 'react';

export interface PostProps {
  company: string;
  date: string;
  description: string | null;
  title: string;
  url: string;
}

export const Post = memo(
  ({ company, date, description, title, url }: PostProps) => {
    return (
      <article className="py-[1em]">
        <h2 className="mt-0">
          <a href={url} rel="noreferrer" target="_blank">
            {title}
          </a>
        </h2>
        <p>{description}</p>
        <time dateTime={date}>{new Date(date).toLocaleDateString('ko')}</time>
        <br />
        <cite>{company}</cite>
      </article>
    );
  },
);
