import { useApolloClient } from '@apollo/client';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { authTokenVar, client, isLoginVar } from '../../apollo';
import { LOCALSTORAGE_TOKEN } from '../../constants';
import { MY_DATA_QUERY } from '../api/gql';
import { UserRoles } from '../api/__graphql__/globalTypes';
import { MyDataQuery } from '../api/__graphql__/MyDataQuery';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data: myData } = await client.query<MyDataQuery>({
      query: MY_DATA_QUERY,
    });
    console.log(myData.myData.role);
    if (myData.myData.role !== UserRoles.Admin) {
      return {
        redirect: {
          permanent: false,
          destination: '/404',
        },
      };
    }
  } catch {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };
  }

  return {
    props: {},
  };
};

const Logout = () => {
  const router = useRouter();
  const client = useApolloClient();

  React.useEffect(() => {
    localStorage.removeItem(LOCALSTORAGE_TOKEN);
    isLoginVar(false);
    authTokenVar('');
    client.cache.reset();
    router.push('/');
  });
  return <></>;
};

export default Logout;
