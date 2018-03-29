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
    dispatch(itemsAreLoading(false));
    dispatch(itemsFetchDataSuccess(details));
  });

  sendData();
 }
}
/*    return (dispatch) => {
        dispatch(itemsAreLoading(true));

        axios.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(itemsAreLoading(false));

                return response;
            })
            .then((response) => dispatch(itemsFetchDataSuccess(response.data)))
            .catch(() => dispatch(itemsHaveError(true)));
    };*/
