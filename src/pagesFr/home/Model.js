export const initialState = {
  // html: {
  //     title: '',
  //     description: ''
  // },
  // in order to render checkbox list
  settingIdList: [],
  // in order to render tabs below
  settingList: [],
  // selected search condition
  // updated by handleSubmit in ModelConfigSearch
  subjectValueList: [],
  rule: {}
};

export const setState = (state, data) => {
  return {
    ...state,
    ...data
  };
};
