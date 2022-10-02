import { useMutation } from '@apollo/client';
import { Dialog, Transition } from '@headlessui/react';
import { NextPage } from 'next';
import { Fragment } from 'react';
import { DELETE_CATEGORY_MUTATION, FIND_ALL_CATEGORY_QUERY } from '../../../pages/api/gql';
import { DeleteCategoryMutation, DeleteCategoryMutationVariables } from '../../../pages/api/__graphql__/DeleteCategoryMutation';
import { Loading } from '../../Loading';

interface IDeleteCategoryModalProps {
  isOpen: boolean;
  closeModal: () => void;
  categoryId: number;
}

export const DeleteCategoryModal: NextPage<IDeleteCategoryModalProps> = ({ isOpen, closeModal, categoryId }) => {
  const [deleteCategoryMutation, { loading }] = useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DELETE_CATEGORY_MUTATION, {
    onCompleted: (data) => {
      if (data.deleteCategory.success) {
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
                <div className="my-3">
                  <Dialog.Title as="h3" className="text-2xl font-medium leading-6 text-gray-900 dark:text-gray-100 mb-6">
                    Are you sure you want to delete it?
                  </Dialog.Title>
                  <div className="flex">
                    <div className="mt-4 mr-5">
                      <button
                        type="submit"
                        onClick={() => {
                          deleteCategoryMutation({
                            variables: {
                              input: {
                                id: categoryId,
                              },
                            },
                          });
                        }}
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Delete
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
                </div>
                {loading && <Loading />}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
