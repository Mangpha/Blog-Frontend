/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteCategoryInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteCategoryMutation
// ====================================================

export interface DeleteCategoryMutation_deleteCategory {
  __typename: "DeleteCategoryOutput";
  success: boolean;
  error: string | null;
}

export interface DeleteCategoryMutation {
  deleteCategory: DeleteCategoryMutation_deleteCategory;
}

export interface DeleteCategoryMutationVariables {
  input: DeleteCategoryInput;
}
