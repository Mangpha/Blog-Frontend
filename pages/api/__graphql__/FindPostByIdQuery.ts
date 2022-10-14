/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindPostByIdInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: FindPostByIdQuery
// ====================================================

export interface FindPostByIdQuery_findPostById_post_author {
  __typename: "User";
  username: string;
}

export interface FindPostByIdQuery_findPostById_post_category {
  __typename: "Category";
  id: number;
  name: string;
}

export interface FindPostByIdQuery_findPostById_post {
  __typename: "Post";
  id: number;
  title: string;
  content: string;
  author: FindPostByIdQuery_findPostById_post_author | null;
  category: FindPostByIdQuery_findPostById_post_category | null;
  createdAt: any;
}

export interface FindPostByIdQuery_findPostById {
  __typename: "FindPostByIdOutput";
  success: boolean;
  error: string | null;
  post: FindPostByIdQuery_findPostById_post | null;
}

export interface FindPostByIdQuery {
  findPostById: FindPostByIdQuery_findPostById;
}

export interface FindPostByIdQueryVariables {
  input: FindPostByIdInput;
}
