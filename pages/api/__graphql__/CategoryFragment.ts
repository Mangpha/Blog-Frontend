/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CategoryFragment
// ====================================================

export interface CategoryFragment_posts_author {
  __typename: "User";
  username: string;
}

export interface CategoryFragment_posts_category {
  __typename: "Category";
  id: number;
  name: string;
}

export interface CategoryFragment_posts {
  __typename: "Post";
  id: number;
  title: string;
  content: string;
  author: CategoryFragment_posts_author | null;
  category: CategoryFragment_posts_category | null;
  createdAt: any;
}

export interface CategoryFragment {
  __typename: "Category";
  id: number;
  name: string;
  posts: CategoryFragment_posts[] | null;
  createdAt: any;
}
