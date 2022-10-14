/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateCategoryInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateCategoryMutation
// ====================================================

export interface CreateCategoryMutation_createCategory {
  __typename: "CreateCategoryOutput";
  success: boolean;
  error: string | null;
  categoryId: number | null;
}

export interface CreateCategoryMutation {
  createCategory: CreateCategoryMutation_createCategory;
}

export interface CreateCategoryMutationVariables {
  input: CreateCategoryInput;
}
