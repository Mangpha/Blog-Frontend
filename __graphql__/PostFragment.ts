/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostFragment
// ====================================================

export interface PostFragment_author {
  __typename: "User";
  username: string;
}

export interface PostFragment_category {
  __typename: "Category";
  id: number;
  name: string;
}

export interface PostFragment {
  __typename: "Post";
  id: number;
  title: string;
  content: string;
  author: PostFragment_author | null;
  category: PostFragment_category | null;
  createdAt: any;
}
