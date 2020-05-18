import React, { useRef, useEffect, useState } from 'react';
import { Page } from './components/Page'
import { pageContainer } from './Styles'

function App() {
  const [pageWidth, setPageWidth] = useState(200);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(ref.current !== null){
      setPageWidth(ref.current.offsetWidth);
    }
  }, []);

  return (
    <div style={pageContainer} ref={ref}>
      <Page pageWidth={pageWidth} />
    </div>
  );
}

export default App;
