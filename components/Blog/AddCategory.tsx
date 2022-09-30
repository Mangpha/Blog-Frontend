import { useMutation } from '@apollo/client';
import React from 'react';
import { CREATE_CATEGORY_MUTATION, FIND_ALL_CATEGORY_QUERY } from '../../pages/api/gql';
import { CreateCategoryMutation, CreateCategoryMutationVariables } from '../../pages/api/__graphql__/CreateCategoryMutation';
import { ErrorMessage } from '../ErrorMessage';

export const AddCategory = () => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');
  const [successCode, setSuccessCode] = React.useState<string>('');

  const [createCategoryMutation, { loading, data: categoryData }] = useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CREATE_CATEGORY_MUTATION, {
    onCompleted: () => {
      setSuccessCode('Category Created!');
    },
    refetchQueries: [
      {
        query: FIND_ALL_CATEGORY_QUERY,
      },
    ],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    if (!loading) {
      createCategoryMutation({
        variables: {
          input: { name: value },
        },
      });
    }
  };

  return (
    <div className="flex justify-between mt-3">
      <div className="btn py-3 w-full mr-5 flex items-center justify-center cursor-pointer" onClick={() => setVisible(true)}>
        Add Category
      </div>
      <div className={`w-full ${visible ? 'visible' : 'invisible'}`}>
        <input name="category" className="input px-4 py-2 mb-2" placeholder="New Category" onChange={handleChange} />
        {!value ? <ErrorMessage error="Category name must be provided." /> : value.length < 2 && <ErrorMessage error="Category name must be more than 2 chars." />}
        <div className="flex mt-1">
          <div className="py-2 px-5 mr-3 bg-red-400 rounded text-black hover:bg-red-300 transition cursor-pointer" onClick={() => setVisible(false)}>
            Cancel
          </div>
          <div className={`${!loading ? 'btn' : 'btn_loading'} py-2 px-5 flex items-center justify-center cursor-pointer`} onClick={handleSubmit}>
            Submit
          </div>
          <p className="py-2 ml-3">{categoryData?.createCategory.error || successCode}</p>
        </div>
      </div>
    </div>
  );
};
