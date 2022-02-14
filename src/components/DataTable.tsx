import React, { ReactNode, useCallback } from 'react';
import { Spinner, Table, Card } from 'react-bootstrap';
import { FaSort } from 'react-icons/fa';
import styles from '../styles/DataTable.module.scss';

interface IDataTableProps<T> {
  headers: string[];
  data: T[];
  isLoading: boolean;
}

// Reusable data table
const DataTable = <T extends object>({
  headers,
  data,
  isLoading,
}: IDataTableProps<T>) => {
  const renderHeader = useCallback((): ReactNode[] => headers.map((item, index) => (
    <th key={`${item}-${index}`}>
      {item}
      &nbsp;
      <FaSort className={styles['data-table-icon']} />
    </th>
  )), [headers]);

  const renderData = useCallback((): ReactNode[] => data.map((row, index) => (
    <tr key={`tr-${index}`}>
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
          <Spinner animation="border" variant="primary" />
        </Card.Body>
      </Card>
    );
  }

  return (
    <Table striped bordered responsive>
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

export default DataTable;
