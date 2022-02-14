import React, {
  FC, ReactNode, useCallback, memo,
} from 'react';
import { Pagination } from 'react-bootstrap';
import styles from '../styles/PaginationWrapper.module.scss';

interface IPaginationWrapperProps {
  currentPage: number;
  pageSize: number;
  isLoading: boolean;
  handleClickPage(page: number): void;
}

const PaginationWrapper: FC<IPaginationWrapperProps> = ({
  currentPage,
  pageSize,
  isLoading,
  handleClickPage,
}) => {
  const renderPaginationItem = useCallback((): ReactNode[] => {
    const paginationItem: ReactNode[] = [];

    for (let number = 1; number <= pageSize; number++) {
      paginationItem.push(
        <Pagination.Item
          key={`paginationItem-${number}`}
          active={number === currentPage}
          onClick={() => handleClickPage(number)}
          disabled={isLoading}
        >
          {number}
        </Pagination.Item>,
      );
    }
    return paginationItem;
  }, [currentPage, isLoading, handleClickPage, pageSize]);

  return (
    <Pagination className={styles['pagination-wrapper']}>
      {renderPaginationItem()}
    </Pagination>
  );
};

export default memo(PaginationWrapper);
