import { gql } from "@apollo/client";

export const POST_FRAGMENT = gql`
	fragment PostFragment on Post {
		id
		title
		content
		author {
			username
		}
		category {
			id
			name
		}
		createdAt
	}
`;

export const CATEGORY_FRAGMENT = gql`
	fragment CategoryFragment on Category {
		id
		name
		posts {
			...PostFragment
		}
		createdAt
	}
	${POST_FRAGMENT}
`;
