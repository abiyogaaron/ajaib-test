import {
  IUserPageAction,
  IUserPageSetLoadingAction,
  IUserPageSetCurrPageAction,
  IUserPageSetDataAction,
  IUserPageSetErrorAction,
  IUserPageState,
  EUserPageAction,
} from '../../types/userPage';

const INITIAL_STATE: IUserPageState = {
  isLoading: false,
  data: [],
  currentPage: 1,
  error: {
    message: '',
    status: -1,
  },
};

const userPageReducer = (state = INITIAL_STATE, action: IUserPageAction): IUserPageState => {
  switch (action.type) {
    case EUserPageAction.SET_LOADING: {
      const { isLoading } = action.payload as IUserPageSetLoadingAction;
      return { ...state, isLoading };
    }
    case EUserPageAction.SET_DATA: {
      const { data } = action.payload as IUserPageSetDataAction;
      return { ...state, data };
    }
    case EUserPageAction.SET_CURRPAGE: {
      const { currentPage } = action.payload as IUserPageSetCurrPageAction;
      return { ...state, currentPage };
    }
    case EUserPageAction.SET_ERROR: {
      const { error } = action.payload as IUserPageSetErrorAction;
      return { ...state, error };
    }
    default:
      return state;
  }
};

export default userPageReducer;
