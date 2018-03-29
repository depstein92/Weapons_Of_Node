import { combineReducers } from 'redux';
import { items, itemsHaveError, itemsAreLoading } from './SearchBar_Reducers';

  export default combineReducers({
      items,
      itemsHaveError,
      itemsAreLoading
  });
