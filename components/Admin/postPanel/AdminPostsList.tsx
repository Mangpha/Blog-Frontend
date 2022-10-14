import { NextPage } from 'next';
import { AdminFindAllPosts } from '../../../pages/api/__graphql__/AdminFindAllPosts';
import { AdminPostsTable } from './AdminPostsTable';

interface IAdminPostListProps {
  posts: AdminFindAllPosts | undefined;
}

export const AdminPostsList: NextPage<IAdminPostListProps> = ({ posts }) => {
  const sortedPosts = posts?.findAllPosts.posts?.map((el) => el);
  sortedPosts?.sort((a, b) => b.id - a.id);
  return (
    <tbody>
      {sortedPosts?.map((post) => (
        <AdminPostsTable key={post.id} sortedPost={post} />
      ))}
    </tbody>
  );
};
