export const resTemp = {
  ResponseStatus: {
    Ack: 'Success',
    Timestamp: new Date()
  },
  returnStatus: {
    customerErrorMessage: null,
    errorCode: '0',
    errorMessage: null,
    isSuccess: true
  }
};

export const dataTemp = data => {
  return data.map(item => {
    let id = item._id;
    delete item._doc._id;
    return { id, ...item._doc };
  });
};

export const restapi = '/server';
export const dbUrl = 'mongodb://zwq:zwq997957@zwq666.top:27017/blogDB';
