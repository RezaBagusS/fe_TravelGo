const popupFunctionsMiddleware = (store) => (next) => (action) => {
  // console.log('popupFunctionsMiddleware : ', action);
  // if (action.type === 'popup/setPopup') {
  //   // const { onConfirm, onCancel } = action.payload;

  //   return next(action);
  // }

  // if (action.type === 'dataWisata/setDataWisata') {

  //   return next(action);
  // }

  return next(action);
};

export default popupFunctionsMiddleware;
