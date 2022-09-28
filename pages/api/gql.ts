import { gql } from "@apollo/client";
import { CATEGORY_FRAGMENT, POST_FRAGMENT } from "./fragment";

export const LOGIN_MUTATION = gql`
	mutation LoginMutation($input: LoginInput!) {
		login(input: $input) {
			success
			error
			token
		}
	}
`;

export const FIND_POST_BY_ID = gql`
	query FindPostByIdQuery($input: FindPostByIdInput!) {
		findPostById(input: $input) {
			success
			error
			post {
				...PostFragment
			}
		}
	}
	${POST_FRAGMENT}
`;

export const CREATE_POST_MUTATION = gql`
	mutation CreatePostMutation($input: CreatePostInput!) {
		createPost(input: $input) {
			success
			error
			postId
		}
	}
`;

export const FIND_POSTS_BY_CATEGORY_QUERY = gql`
	query FindPostsByCategoryQuery($input: FindPostByCategoryInput!) {
		findPostByCategory(input: $input) {
			success
			error
			totalPages
			totalResults
			posts {
				...PostFragment
			}
		}
	}
	${POST_FRAGMENT}
`;

export const FIND_POSTS_QUERY = gql`
	query FindPostsQuery($input: FindAllPostsInput!) {
		findAllPosts(input: $input) {
			success
			error
			totalResults
			totalPages
			posts {
				...PostFragment
			}
		}
	}
	${POST_FRAGMENT}
`;

export const FIND_ALL_CATEGORY_QUERY = gql`
	query FindAllCategoryQuery {
		findAllCategories {
			success
			error
			categories {
				...CategoryFragment
			}
		}
	}
	${CATEGORY_FRAGMENT}
`;

export const ADMIN_FIND_ALL_POSTS = gql`
	query AdminFindAllPosts($input: FindAllPostsInput!) {
		findAllPosts(input: $input) {
			success
			error
			totalResults
			totalPages
			posts {
				...PostFragment
				updatedAt
			}
		}
	}
	${POST_FRAGMENT}
`;

export const MY_DATA_QUERY = gql`
	query MyDataQuery {
		myData {
			id
			verified
			email
			role
			username
		}
	}
`;

export const CREATE_CATEGORY_MUTATION = gql`
	mutation CreateCategoryMutation($input: CreateCategoryInput!) {
		createCategory(input: $input) {
			success
			error
			categoryId
		}
	}
`;

export const DELETE_POST_MUTATION = gql`
	mutation DeletePostMutation($input: DeletePostInput!) {
		deletePost(input: $input) {
			success
			error
		}
	}
`;

export const EDIT_POST_MUTATION = gql`
	mutation EditPostMutation($input: EditPostInput!) {
		editPost(input: $input) {
			success
			error
		}
	}
`;

export const EDIT_CATEGORY_MUTATION = gql`
	mutation EditCategoryMutation($input: EditCategoryInput!) {
		editCategory(input: $input) {
			success
			error
		}
	}
`;

export const DELETE_CATEGORY_MUTATION = gql`
	mutation DeleteCategoryMutation($input: DeleteCategoryInput!) {
		deleteCategory(input: $input) {
			success
			error
		}
	}
`;
