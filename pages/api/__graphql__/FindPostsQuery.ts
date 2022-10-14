/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindAllPostsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: FindPostsQuery
// ====================================================

export interface FindPostsQuery_findAllPosts_posts_author {
  __typename: "User";
  username: string;
}

export interface FindPostsQuery_findAllPosts_posts_category {
  __typename: "Category";
  id: number;
  name: string;
}

export interface FindPostsQuery_findAllPosts_posts {
  __typename: "Post";
  id: number;
  title: string;
  content: string;
  author: FindPostsQuery_findAllPosts_posts_author | null;
  category: FindPostsQuery_findAllPosts_posts_category | null;
  createdAt: any;
}

export interface FindPostsQuery_findAllPosts {
  __typename: "FindAllPostsOutput";
  success: boolean;
  error: string | null;
  totalResults: number | null;
  totalPages: number | null;
  posts: FindPostsQuery_findAllPosts_posts[] | null;
}

export interface FindPostsQuery {
  findAllPosts: FindPostsQuery_findAllPosts;
}

export interface FindPostsQueryVariables {
  input: FindAllPostsInput;
}
