import React from 'react';
import { Page } from './components/Page'

export interface AppProps {}

function App({}: AppProps) {
  return (
    <div>Blue Steel
      <Page height={200} width={100} />
    </div>
  );
}

export default App;
