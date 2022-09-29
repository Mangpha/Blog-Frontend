/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeletePostInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: DeletePostMutation
// ====================================================

export interface DeletePostMutation_deletePost {
  __typename: "DeletePostOutput";
  success: boolean;
  error: string | null;
}

export interface DeletePostMutation {
  deletePost: DeletePostMutation_deletePost;
}

export interface DeletePostMutationVariables {
  input: DeletePostInput;
}
