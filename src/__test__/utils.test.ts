import {
  reformatDate,
} from '../utils';

describe('utils reformatDate to dd/mm/yyyy', () => {
  test('test case: "1973-10-30T16:57:20.422Z"', () => {
    const inputDate = '1973-10-30T16:57:20.422Z';
    expect(reformatDate(inputDate)).toBe('30/10/1973 23:57');
  });

  test('test case: ""', () => {
    const inputDate = '';
    expect(reformatDate(inputDate)).toBe(inputDate);
  });
});

// assume theres others utils
