import React from 'react';
import NotFound from '@theme-original/NotFound';
import { noIndex } from '../../docusaurus.config';

export default function NotFoundWrapper(props) {
  return (
    <>
      <NotFound style={{display: 'none'}} {...props} />
    </>
  );
}
