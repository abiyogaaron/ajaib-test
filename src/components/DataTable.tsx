import React, {
  ReactNode, useCallback, memo, useState,
} from 'react';
import { Spinner, Table, Card } from 'react-bootstrap';
import { FaSort } from 'react-icons/fa';
import styles from '../styles/DataTable.module.scss';
import { IHeaderTable } from '../types';

interface IDataTableProps<T> {
  headers: IHeaderTable[];
  data: T[];
  isLoading: boolean;
  handleSort(key: string, isAscend: boolean): void;
}

// Reusable data table
const DataTable = <T extends object>({
  headers,
  data,
  isLoading,
  handleSort,
}: IDataTableProps<T>) => {
  const [sortObj, setSortObj] = useState(() => {
    const obj: Record<string, boolean> = {};
    const objAscend = headers.reduce((prev, currValue) => {
      if (!prev[currValue.key]) {
        // eslint-disable-next-line no-param-reassign
        prev[currValue.key] = false;
      }
      return prev;
    }, obj);

    return objAscend;
  });

  const handleClickSort = useCallback((key: string) => {
    setSortObj({ ...sortObj, [key]: !sortObj[key] });
    handleSort(key, sortObj[key]);
  }, [sortObj, handleSort]);

  const renderHeader = useCallback((): ReactNode[] => headers.map((item, index) => (
    <th key={`${item}-${index}`} data-testid="table-th">
      {item.title}
      &nbsp;
      <FaSort className={styles['data-table-icon']} onClick={() => handleClickSort(item.key)} />
    </th>
  )), [headers, handleClickSort]);

  const renderData = useCallback((): ReactNode[] => data.map((row, index) => (
    <tr key={`tr-${index}`} data-testid="table-tr">
      {renderFields(row, index)}
    </tr>
  )), [data, isLoading]);

  const renderFields = useCallback((row, index): ReactNode[] => {
    const fields: ReactNode[] = [];

    for (const key in row) {
      if (key in row) {
        fields.push(
          <td key={`td-${key}-${index}`}>{row[key]}</td>,
        );
      }
    }
    return fields;
  }, [renderData]);

  if (isLoading) {
    return (
      <Card className="d-flex align-items-center justify-content-center mb-5">
        <Card.Body>
          <Spinner animation="border" variant="primary" data-testid="loading-spinner" />
        </Card.Body>
      </Card>
    );
  }

  return (
    <Table striped bordered responsive role="table">
      <thead>
        <tr>
          {renderHeader()}
        </tr>
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </Table>
  );
};

export default memo(DataTable);
