/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindPostByTitleInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: FindPostsByTitleQuery
// ====================================================

export interface FindPostsByTitleQuery_findPostByTitle_posts_category {
  __typename: "Category";
  id: number;
  name: string;
}

export interface FindPostsByTitleQuery_findPostByTitle_posts {
  __typename: "Post";
  id: number;
  createdAt: any;
  title: string;
  content: string;
  category: FindPostsByTitleQuery_findPostByTitle_posts_category | null;
}

export interface FindPostsByTitleQuery_findPostByTitle {
  __typename: "FindPostByTitleOutput";
  success: boolean;
  error: string | null;
  posts: FindPostsByTitleQuery_findPostByTitle_posts[] | null;
}

export interface FindPostsByTitleQuery {
  findPostByTitle: FindPostsByTitleQuery_findPostByTitle;
}

export interface FindPostsByTitleQueryVariables {
  input: FindPostByTitleInput;
}
