import React from 'react';
import Highlight from 'react-highlight';
import { Style } from 'react-imvc/component';
export default props => (
  <div>
    <Style name="codeStyle"></Style>
    <Highlight language={props.language}>{props.value}</Highlight>
  </div>
);
