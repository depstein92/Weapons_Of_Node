import { combineReducers } from 'redux';
import { items, itemsHaveError, itemsAreLoading } from './SearchBar_Reducers';
import { packageName, libraryIsImported } from './JSPlayGround_Reducers';

  export default combineReducers({
      items,
      itemsHaveError,
      itemsAreLoading,
      packageName,
      libraryIsImported
  });
