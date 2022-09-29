/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindAllPostsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: AdminFindAllPosts
// ====================================================

export interface AdminFindAllPosts_findAllPosts_posts_author {
  __typename: "User";
  username: string;
}

export interface AdminFindAllPosts_findAllPosts_posts_category {
  __typename: "Category";
  id: number;
  name: string;
}

export interface AdminFindAllPosts_findAllPosts_posts {
  __typename: "Post";
  id: number;
  title: string;
  content: string;
  author: AdminFindAllPosts_findAllPosts_posts_author | null;
  category: AdminFindAllPosts_findAllPosts_posts_category | null;
  createdAt: any;
  updatedAt: any;
}

export interface AdminFindAllPosts_findAllPosts {
  __typename: "FindAllPostsOutput";
  success: boolean;
  error: string | null;
  totalResults: number | null;
  totalPages: number | null;
  posts: AdminFindAllPosts_findAllPosts_posts[] | null;
}

export interface AdminFindAllPosts {
  findAllPosts: AdminFindAllPosts_findAllPosts;
}

export interface AdminFindAllPostsVariables {
  input: FindAllPostsInput;
}
