import { invariant } from '@mado/invariant';
import { type LoaderFunction } from '@remix-run/node';
import { json, useLoaderData } from '@remix-run/react';

import { PostApi } from '~/api';
import { Post } from '~/components/Post';
import { POSTS_DEFAULT_SIZE } from '~/constants/post';

export const loader = (async (request) => {
  const page = request.params.page ? Number(request.params.page) : 1;

  invariant(page > 0, 'Bad Request');

  const res = await PostApi.getPosts({ page });

  invariant(!res.error, 'Something went wrong.');
  invariant(res.count !== null, 'Something went wrong.');

  invariant(page <= Math.ceil(res.count / POSTS_DEFAULT_SIZE), 'Bad Request');

  return json({
    data: res.data,
  });
}) satisfies LoaderFunction;

export default function Page() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <main className="prose dark:prose-invert max-w-none divide-y px-4">
      {data.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </main>
  );
}
