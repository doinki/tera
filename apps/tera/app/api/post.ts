import { DEFAULT_SIZE } from '~/constants/post';
import { supabase } from '~/supabase.server';

export interface GetPostsParams {
  page?: number;
  size?: number;
}

export async function getPosts({
  page = 0,
  size = DEFAULT_SIZE,
}: GetPostsParams = {}) {
  const data = await supabase
    .from('post')
    .select('*', { count: 'exact' })
    .order('date', { ascending: false })
    .range(page * size, (page + 1) * size - 1);

  if (data.error) {
    throw data.error;
  }

  if (data.count === null) {
    throw new Error('Count is null.');
  }

  return data;
}
