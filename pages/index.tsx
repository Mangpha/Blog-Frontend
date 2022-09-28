import { ApolloProvider } from "@apollo/client";
import type { NextPage } from "next";
import { client } from "../apollo";

const Home: NextPage = () => {
	return (
		<ApolloProvider client={client}>
			<div></div>
		</ApolloProvider>
	);
};

export default Home;
// "tailwind:build": "NODE_ENV=production npx tailwindcss -i styles/tailwind.css -o styles/global.css --minify",
// 		"tailwind:dev": "npx tailwindcss -i styles/tailwind.css -o styles/global.css --minify --watch",
