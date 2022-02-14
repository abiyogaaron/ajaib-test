import userPageReducer, { INITIAL_STATE as UserInitState } from '../../redux/reducer/userPage';
import { IUserPageAction, EUserPageAction } from '../../types/userPage';

describe('UserPage Reducer', () => {
  it('UserPage Reducer -- INIT STATE', () => {
    expect(userPageReducer(undefined, {} as IUserPageAction)).toEqual(UserInitState);
  });

  it('DriverManagement Reducer -- Should handle isLoading', () => {
    const action: IUserPageAction = {
      type: EUserPageAction.SET_LOADING,
      payload: { isLoading: true },
    };

    const reducerReturnVal = userPageReducer(UserInitState, action);
    expect(reducerReturnVal.isLoading).toBe(true);
  });

  // and so on (others case action type)
});
