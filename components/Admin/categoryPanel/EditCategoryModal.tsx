import { useMutation } from '@apollo/client';
import { Dialog, Transition } from '@headlessui/react';
import { NextPage } from 'next';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { EDIT_CATEGORY_MUTATION, FIND_ALL_CATEGORY_QUERY } from '../../../pages/api/gql';
import { EditCategoryMutation, EditCategoryMutationVariables } from '../../../pages/api/__graphql__/EditCategoryMutation';
import { ErrorMessage } from '../../ErrorMessage';
import { Loading } from '../../Loading';

interface IEditCategoryModalProps {
  isOpen: boolean;
  closeModal: () => void;
  categoryId: number;
}

interface IEditCategoryForm {
  categoryName: string;
}

export const EditCategoryModal: NextPage<IEditCategoryModalProps> = ({ isOpen, closeModal, categoryId }) => {
  const {
    formState: { errors },
    register,
    getValues,
    handleSubmit,
  } = useForm<IEditCategoryForm>({ mode: 'onChange' });
  const [editCategoryMutation, { loading, data }] = useMutation<EditCategoryMutation, EditCategoryMutationVariables>(EDIT_CATEGORY_MUTATION, {
    onCompleted: (data) => {
      if (data.editCategory.success) {
        closeModal();
        window.location.replace('/admin/categories');
      }
    },
    refetchQueries: [
      {
        query: FIND_ALL_CATEGORY_QUERY,
      },
    ],
  });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-2xl font-medium leading-6 text-gray-900 dark:text-gray-100">
                  Input new Category name
                </Dialog.Title>
                <form
                  onSubmit={handleSubmit(() =>
                    editCategoryMutation({
                      variables: {
                        input: {
                          id: categoryId,
                          name: getValues().categoryName,
                        },
                      },
                    }),
                  )}
                  className="my-5"
                >
                  <label htmlFor="categoryName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Category name
                  </label>
                  <input
                    {...register('categoryName', {
                      required: 'Category name is required.',
                      minLength: 3,
                    })}
                    type="text"
                    id="categoryName"
                    className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="category name"
                    required
                  />
                  {errors.categoryName?.type === 'minLength' && <ErrorMessage error="Category name must be more than 4 chars." />}
                  {errors.categoryName?.message && <ErrorMessage error={errors.categoryName.message} />}
                  {data?.editCategory.error && <ErrorMessage error={data.editCategory.error} />}
                  <div className="flex">
                    <div className="mt-4 mr-5">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="mt-4">
                      <div
                        className="inline-flex cursor-pointer justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Close
                      </div>
                    </div>
                  </div>
                </form>
                {loading && <Loading />}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
