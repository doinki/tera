import { POSTS_DEFAULT_SIZE } from '~/constants/post';
import { supabase } from '~/supabase.server';

export interface GetPostsParams {
  page?: number;
  size?: number;
}

export function getPosts({
  page = 0,
  size = POSTS_DEFAULT_SIZE,
}: GetPostsParams = {}) {
  return supabase
    .from('post')
    .select('*', { count: 'exact' })
    .order('date', { ascending: false })
    .range(page * size, (page + 1) * size - 1);
}
