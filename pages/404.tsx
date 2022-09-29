import { useRouter } from 'next/router';
import { SEO } from '../components/SEO';

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="main_section">
      <SEO title="404 Page Not Found" />
      <div className="flex flex-col mt-20 mx-auto">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold">Sorry, we couldn't find this page.</p>
          <button onClick={() => router.push('/')} className="mt-8 px-8 py-3 font-semibold rounded bg-sky-400 dark:bg-sky-300 dark:text-gray-900">
            Back to homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
