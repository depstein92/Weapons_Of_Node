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
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }


export const itemsFetchData = (word) => {
  return (dispatch) => {

  dispatch(itemsAreLoading(true));

    api.getdetails(word, async function(data){

      if(data.readme === "ERROR: No README data found!" ||
         isObjectEmpty(data) === true){ /*ERROR IS HERE*/

        dispatch(itemsHaveError(true));
        dispatch(itemsAreLoading(false));
      } else {
        await sendData({ details: data }, dispatch);
    }
  });

  let sendData = _.after(2, ({ details }, dispatch) => {
    dispatch(itemsHaveError(false));
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

export const isLibraryImported = (bool) => {
  return {
    type: "LIBRARY_IS_IMPORTED_SUCCESS",
    libImport: bool
  }
}

export const addImport =  (obj) => {

  return  (dispatch) => {

   let addExpToPackage = (...obj) => {
     let item = `const ${obj} = require('${obj}');_`
     return item;
   }

   let expression = addExpToPackage`${obj}`,
       packageAssign = expression.replace(/,/ig, '');

   dispatch(packageNameSuccess(packageAssign));
   dispatch(isLibraryImported(true));
 }

}
