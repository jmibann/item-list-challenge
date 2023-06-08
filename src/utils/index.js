const PENDING = 'PENDING';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

export const createResource = (promise) => {
  let status = PENDING;

  let result = promise.then(
    resolved => {
      status = SUCCESS;
      result = resolved;
    },
    rejected => {
      status = ERROR;
      result = rejected;
    }
  );

  return {
    read: function(){
      if( status === PENDING) throw result;
      if( status === ERROR) throw result;
      if( status === SUCCESS) return result;
      throw new Error("This should be impossible");
    }
  }
}