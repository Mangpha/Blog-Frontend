import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { authTokenVar, isLoginVar } from '../../apollo';
import { Button } from '../../components/Button';
import { ErrorMessage } from '../../components/ErrorMessage';
import { SEO } from '../../components/SEO';
import { LOCALSTORAGE_TOKEN } from '../../constants';
import { LOGIN_MUTATION, MY_DATA_QUERY } from '../api/gql';
import { LoginMutation, LoginMutationVariables } from '../api/__graphql__/LoginMutation';

interface ILoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<ILoginForm>({ mode: 'onChange' });

  const onSubmit = () => {
    if (!loading) {
      const { email, password } = getValues();
      loginMutation({
        variables: {
          input: { email, password },
        },
      });
    }
  };
  const onCompleted = (data: LoginMutation) => {
    const { success, token } = data.login;
    if (success && token) {
      localStorage.setItem(LOCALSTORAGE_TOKEN, token);
      authTokenVar(token);
      isLoginVar(true);
      router.push('/');
    }
  };

  const [loginMutation, { loading, data }] = useMutation<LoginMutation, LoginMutationVariables>(LOGIN_MUTATION, {
    onCompleted,
    refetchQueries: [
      {
        query: MY_DATA_QUERY,
      },
    ],
  });

  return (
    <div className="main_section justify-center">
      <SEO title="Login" />
      <div className="w-full px-[35vw]">
        <div className="text-3xl font-bold text-center mb-7">Login</div>

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-3">
            <label htmlFor="email" className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-300">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              type="email"
              id="email"
              className="px-5 py-3 input"
              placeholder="example@email.com"
            />
            {errors.email?.message && <ErrorMessage error={errors.email.message} />}
            {errors.email?.type === 'pattern' && <ErrorMessage error="Please enter a valid email." />}
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="password" className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-300">
              Password
            </label>
            <input
              {...register('password', {
                required: 'Password is required.',
                minLength: 8,
              })}
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className="px-5 py-3 input"
            />
            {errors.password?.message && <ErrorMessage error={errors.password.message} />}
            {errors.password?.type === 'minLength' && <ErrorMessage error="Password must be more than 8 chars." />}
          </div>
          <Button canClick={isValid} loading={false} text="Login" />
          {data?.login.error && <ErrorMessage error={data.login.error} />}
        </form>
      </div>
    </div>
  );
};

export default Login;
