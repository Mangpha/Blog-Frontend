import { NextPage } from 'next';

interface IPaginationProps {
  page: number;
  totalPages: number | null | undefined;
  onPrev: () => void;
  onNext: () => void;
}

export const Pagination: NextPage<IPaginationProps> = ({ page, onNext, onPrev, totalPages }) => {
  return (
    <div className="mb-10 grid grid-cols-3 text-center max-w-md items-center mx-auto gap-7">
      {page > 1 ? (
        <div onClick={onPrev} className="cursor-pointer">
          <i className="fa-solid fa-angles-left focus:outline-none text-xl"></i>
        </div>
      ) : (
        <div></div>
      )}
      <span>
        Page {page} of {totalPages}
      </span>
      {page !== totalPages ? (
        <div onClick={onNext} className="cursor-pointer">
          <i className="fa-solid fa-angles-right focus:outline-none text-xl"></i>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
