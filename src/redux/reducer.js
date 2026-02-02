import { 
  FETCH_BOOKS_REQUEST, 
  FETCH_BOOKS_SUCCESS, 
  FETCH_BOOKS_FAILURE, 
  SET_SORT_CRITERIA 
} from './actions';

const initialState = {
  books: [],
  loading: false,
  error: null,
  sortBy: 'title',
  order: 'asc'
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return { ...state, loading: true };
    case FETCH_BOOKS_SUCCESS:
      return { ...state, loading: false, books: action.payload };
    case FETCH_BOOKS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SET_SORT_CRITERIA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};