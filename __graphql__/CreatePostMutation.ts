/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreatePostInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreatePostMutation
// ====================================================

export interface CreatePostMutation_createPost {
  __typename: "CreatePostOutput";
  success: boolean;
  error: string | null;
  postId: number | null;
}

export interface CreatePostMutation {
  createPost: CreatePostMutation_createPost;
}

export interface CreatePostMutationVariables {
  input: CreatePostInput;
}
