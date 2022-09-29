/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindAllCategoryQuery
// ====================================================

export interface FindAllCategoryQuery_findAllCategories_categories_posts_author {
  __typename: "User";
  username: string;
}

export interface FindAllCategoryQuery_findAllCategories_categories_posts_category {
  __typename: "Category";
  id: number;
  name: string;
}

export interface FindAllCategoryQuery_findAllCategories_categories_posts {
  __typename: "Post";
  id: number;
  title: string;
  content: string;
  author: FindAllCategoryQuery_findAllCategories_categories_posts_author | null;
  category: FindAllCategoryQuery_findAllCategories_categories_posts_category | null;
  createdAt: any;
}

export interface FindAllCategoryQuery_findAllCategories_categories {
  __typename: "Category";
  id: number;
  name: string;
  posts: FindAllCategoryQuery_findAllCategories_categories_posts[] | null;
  createdAt: any;
}

export interface FindAllCategoryQuery_findAllCategories {
  __typename: "FindAllCategoriesOutput";
  success: boolean;
  error: string | null;
  categories: FindAllCategoryQuery_findAllCategories_categories[] | null;
}

export interface FindAllCategoryQuery {
  findAllCategories: FindAllCategoryQuery_findAllCategories;
}
