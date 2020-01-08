import React from 'react';
import BasicLayout from '../components/BasicLayout';
import Article from '../components/Article';
export default props => {
  console.log('props', props);
  return (
    <BasicLayout>
      <Article />
    </BasicLayout>
  );
};
