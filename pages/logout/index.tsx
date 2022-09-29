import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import { authTokenVar, isLoginVar } from '../../apollo';
import { LOCALSTORAGE_TOKEN } from '../../constants';

const Logout = () => {
  const navigate = useRouter();
  const client = useApolloClient();
  React.useEffect(() => {
    localStorage.removeItem(LOCALSTORAGE_TOKEN);
    isLoginVar(false);
    authTokenVar('');
    client.cache.reset();
    navigate.push('/');
  });
  return <></>;
};

export default Logout;
