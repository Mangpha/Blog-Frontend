/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserRoles } from "./globalTypes";

// ====================================================
// GraphQL query operation: MyDataQuery
// ====================================================

export interface MyDataQuery_myData {
  __typename: "User";
  id: number;
  verified: boolean;
  email: string;
  role: UserRoles;
  username: string;
}

export interface MyDataQuery {
  myData: MyDataQuery_myData;
}
