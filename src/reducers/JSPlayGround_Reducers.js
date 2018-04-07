
export function packageName(state = `/*Add Import Here*/`, action){
   switch(action.type){
     case 'PACKAGE_FETCH_SUCCESS':
      return action.packageName;
     default:
      return state;
   }
}
