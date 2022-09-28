/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindPostByCategoryInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: FindPostsByCategoryQuery
// ====================================================

export interface FindPostsByCategoryQuery_findPostByCategory_posts_author {
  __typename: "User";
  username: string;
}

export interface FindPostsByCategoryQuery_findPostByCategory_posts_category {
  __typename: "Category";
  id: number;
  name: string;
}

export interface FindPostsByCategoryQuery_findPostByCategory_posts {
  __typename: "Post";
  id: number;
  title: string;
  content: string;
  author: FindPostsByCategoryQuery_findPostByCategory_posts_author | null;
  category: FindPostsByCategoryQuery_findPostByCategory_posts_category | null;
  createdAt: any;
}

export interface FindPostsByCategoryQuery_findPostByCategory {
  __typename: "FindPostByCategoryOutput";
  success: boolean;
  error: string | null;
  totalPages: number | null;
  totalResults: number | null;
  posts: FindPostsByCategoryQuery_findPostByCategory_posts[] | null;
}

export interface FindPostsByCategoryQuery {
  findPostByCategory: FindPostsByCategoryQuery_findPostByCategory;
}

export interface FindPostsByCategoryQueryVariables {
  input: FindPostByCategoryInput;
}
