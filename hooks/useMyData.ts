import { useQuery } from "@apollo/client";
import { MY_DATA_QUERY } from "../pages/api/gql";
import { MyDataQuery } from "../pages/api/__graphql__/MyDataQuery";

export const useMyData = () => useQuery<MyDataQuery>(MY_DATA_QUERY);
