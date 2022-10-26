/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserRoles {
  Admin = "Admin",
  Guest = "Guest",
  User = "User",
}

export interface CategoryInputType {
  name: string;
  posts?: PostInputType[] | null;
}

export interface CreateCategoryInput {
  name: string;
}

export interface CreatePostInput {
  title: string;
  content: string;
  category?: CategoryInputType | null;
}

export interface DeleteCategoryInput {
  id: number;
}

export interface DeletePostInput {
  id: number;
}

export interface EditCategoryInput {
  id: number;
  name: string;
}

export interface EditPostInput {
  title?: string | null;
  content?: string | null;
  category?: CategoryInputType | null;
  postId: number;
}

export interface FindAllPostsInput {
  page?: number | null;
  take?: number | null;
}

export interface FindPostByCategoryInput {
  page?: number | null;
  categoryId: number;
}

export interface FindPostByIdInput {
  id: number;
}

export interface FindPostByTitleInput {
  page?: number | null;
  query: string;
}

export interface LoginInput {
  password: string;
  email: string;
}

export interface PostInputType {
  title: string;
  content: string;
  author?: UserInputType | null;
  category?: CategoryInputType | null;
}

export interface UserInputType {
  username: string;
  password: string;
  email: string;
  role?: UserRoles | null;
  verified: boolean;
  posts?: PostInputType[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
