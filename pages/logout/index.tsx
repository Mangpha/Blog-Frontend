import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import { authTokenVar, isLoginVar } from '../../apollo';
import { LOCALSTORAGE_TOKEN } from '../../constants';

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
