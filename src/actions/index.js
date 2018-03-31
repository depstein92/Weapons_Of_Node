import api from 'api-npm';
import _ from 'lodash';

export const itemsHaveError = (bool) => {
    return {
        type: 'ITEMS_HAVE_ERROR',
        hasError: bool
    };
}

export const itemsAreLoading = (bool) => {
    return {
        type: 'ITEMS_ARE_LOADING',
        isLoading: bool
    };
}

export const itemsFetchDataSuccess = (items) => {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export const itemsFetchData = (word) => {
  return (dispatch) => {
  dispatch(itemsAreLoading(true));

  api.getdetails(word, function(data){
      if(!data){
        throw new Error('there is an error in getdetails');
      }
      sendData({ details: data}, dispatch)
    });


  let sendData = _.after(2, ({ details }, dispatch) => {
    dispatch(itemsFetchDataSuccess(details));
    dispatch(itemsAreLoading(false));
  });

  sendData();
 }
}
