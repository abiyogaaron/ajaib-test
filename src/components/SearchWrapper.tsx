import React, {
  FC, useCallback, memo, useEffect,
} from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import styles from '../styles/SearchWrapper.module.scss';
import { ISearchForm } from '../types/userPage';

interface ISearchWrapperProps {
  filterOpt: string[];
  form: ISearchForm;
  handleInputChange(value: string): void;
  handleFilterChange(event: React.FormEvent<HTMLSelectElement>): void;
  handleClickReset(): void;
}

const SearchWrapper: FC<ISearchWrapperProps> = ({
  filterOpt,
  form,
  handleInputChange,
  handleFilterChange,
  handleClickReset,
}) => {
  let timeout: number;

  useEffect(() => () => window.clearTimeout(timeout), []);

  const renderOpt = useCallback(() => filterOpt.map((opt, index) => (
    <option
      value={opt}
      key={`${opt}-${index}`}
    >
      {opt}
    </option>
  )), [form]);

  const searchKeyWord = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      handleInputChange(e.target.value);
    }, 1000);
  }, [handleInputChange]);

  return (
    <Form className="mb-4">
      <Row>
        <Col>
          <Form.Group className="d-flex">
            <Form.Control placeholder="Search..." name="searchKey" onChange={(e) => searchKeyWord(e as any)} />
            <div className="input-group-prepend">
              <div className={`input-group-text ${styles['search-wrapper-search-icon']}`}>
                <FaSearch />
              </div>
            </div>
          </Form.Group>
        </Col>
        <Col>
          <Form.Select
            as="select"
            name="filterType"
            onChange={(e) => handleFilterChange(e)}
            value={form.filter}
          >
            {renderOpt()}
          </Form.Select>
        </Col>
        <Col>
          <Button
            variant="outline-primary"
            onClick={handleClickReset}
          >
            Reset Filter
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default memo(SearchWrapper);
