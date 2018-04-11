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

const isObjectEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

export const itemsFetchData = (word) => {
  return (dispatch) => {

  dispatch(itemsAreLoading(true));

  api.getdetails(word, function(data){

      if(data.readme === "ERROR: No README data found!" ||
         isObjectEmpty(data) === true){ /*ERROR IS HERE*/

        dispatch(itemsHaveError(true));
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

/*====ACTIONS FOR IMPORT IN JSPLAYGROUND===*/

export const packageNameSuccess = (packageName) => {
  return {
    type: "PACKAGE_FETCH_SUCCESS",
    packageName
  }
}


export const addImport = (obj) => {

  return (dispatch) => {

   const addExpToPackage = (...obj) => {
     let item = `const ${obj} = require(${obj})`
     return item;
    }

   let expression = addExpToPackage`${obj}`;

   let packageAssign = expression.replace(/,/ig, '');

   dispatch(packageNameSuccess(packageAssign));

  }

}
