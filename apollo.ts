import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
	makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { LOCALSTORAGE_TOKEN } from "./constants";

const token =
	typeof window !== "undefined" &&
	window.localStorage.getItem(LOCALSTORAGE_TOKEN);

export const isLoginVar = makeVar(Boolean(token));
export const authTokenVar = makeVar(token);

const httpLink = createHttpLink({
	uri: process.env.NEXT_PUBLIC_END_POINT,
});
const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			token: authTokenVar() || "",
		},
	};
});

export const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					isLogin: {
						read() {
							return isLoginVar();
						},
					},
					token: {
						read() {
							return authTokenVar();
						},
					},
				},
			},
		},
	}),
});
