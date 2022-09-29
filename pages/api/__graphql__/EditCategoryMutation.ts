/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EditCategoryInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: EditCategoryMutation
// ====================================================

export interface EditCategoryMutation_editCategory {
  __typename: "EditCategoryOutput";
  success: boolean;
  error: string | null;
}

export interface EditCategoryMutation {
  editCategory: EditCategoryMutation_editCategory;
}

export interface EditCategoryMutationVariables {
  input: EditCategoryInput;
}
