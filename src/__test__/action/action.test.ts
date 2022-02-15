import { setLoading } from '../../redux/action/userPage';
import { EUserPageAction } from '../../types/userPage';

describe('UserPage Action', () => {
  it('setLoading should return the payload', () => {
    expect(setLoading(true)).toMatchObject({
      type: EUserPageAction.SET_LOADING,
      payload: { isLoading: true },
    });
  });
});
