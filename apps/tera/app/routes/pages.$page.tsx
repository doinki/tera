import { invariantResponse } from '@mado/invariant';
import { type LoaderFunction } from '@remix-run/node';
import { json, useLoaderData } from '@remix-run/react';

import { PostApi } from '~/api';
import { Post } from '~/components/Post';
import { DEFAULT_PAGE, DEFAULT_SIZE } from '~/constants/post';
import { getTotalPages, isValidPage } from '~/utils/post';

export const loader = (async (request) => {
  const page = request.params.page
    ? Number(request.params.page) - 1
    : DEFAULT_PAGE;

  invariantResponse(isValidPage(page, DEFAULT_PAGE), 'Bad Request', {
    status: 404,
  });

  const data = await PostApi.getPosts({ page });

  invariantResponse(
    isValidPage(page, DEFAULT_PAGE, getTotalPages(data.count!, DEFAULT_SIZE)),
    'Bad Request',
    { status: 404 },
  );

  return json({
    data: data.data,
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
