/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EditPostInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: EditPostMutation
// ====================================================

export interface EditPostMutation_editPost {
  __typename: "EditPostOutput";
  success: boolean;
  error: string | null;
}

export interface EditPostMutation {
  editPost: EditPostMutation_editPost;
}

export interface EditPostMutationVariables {
  input: EditPostInput;
}
