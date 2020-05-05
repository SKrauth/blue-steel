import React, { useRef, useEffect, useState } from 'react';
import { Page } from './components/Page'
import { pageContainer } from './Styles'
export interface AppProps {}

function App({}: AppProps) {
  const [pageWidth, setPageWidth] = useState(200);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(ref.current !== null){
      setPageWidth(ref.current.offsetWidth);
    }
  });

  return (
    <div style={pageContainer} ref={ref}>
      <h2>Blue Steel</h2>
      <Page pageWidth={pageWidth} />
    </div>
  );
}

export default App;
