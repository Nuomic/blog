export const initialState = {
  // html: {
  //     title: '',
  //     description: ''
  // },
  // in order to render checkbox list
  // in order to render tabs below
  // selected search condition
  // updated by handleSubmit in ModelConfigSearch
};

export const setState = (state, data) => {
  return {
    ...state,
    ...data
  };
};
