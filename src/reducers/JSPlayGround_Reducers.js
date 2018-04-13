
export function packageName(state = ``, action){
  switch(action.type){
   case 'PACKAGE_FETCH_SUCCESS':
     return state.concat([ action.packageName ]);
   default:
     return state;
   }
}


export function libraryIsImported(state = false, action){
  switch(action.type){
   case 'LIBRARY_IS_IMPORTED_SUCCESS':
     return action.libImport;
   default:
     return state;
  }
}
