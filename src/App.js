import './App.css';
import { createContext } from 'react';
import CopyButton from './components/CopyButton';
import { useEffect, useState } from 'react';
import Sucess from './svg/Sucess';
import usePageBottom from './utils/usePageBottom';
import useWindowSize from './utils/useWindowSize';
import useDeviceDetect from './utils/useDeviceDetect';
import Context from './context/Context';
import Usememo from './usememo/Usememo';

function App() {
  const [text] = useState("Welcomt to custom hooks");
  const bottom = usePageBottom();
  const {width, height} = useWindowSize();
  const mobile = useDeviceDetect();
  useEffect(()=>{
    console.log(mobile)
    if(bottom){
      alert('You entered last page')
    }
  },[bottom, width, height, mobile])
  return (
    <div className="App">
      <p style={{display:'inline',margin:10}}>{text}</p>
     <CopyButton code={text} />
    {!mobile && <Sucess />}<h2>
    assets by path *.json 611 bytes
  asset asset-manifest.json 583 bytes [emitted]
  asset main.9811822cb9ddf1d08c0c.hot-update.json 28 bytes [emitted] [immutable] [hmr]
asset index.html 1.67 KiB [emitted]
Entrypoint main 2.74 MiB (2.63 MiB) = static/js/bundle.js 2.73 MiB main.9811822cb9ddf1d08c0c.hot-update.js 5.74 KiB 2 auxiliary assets
cached modules 2.46 MiB [cached] 115 modules
runtime modules 31.7 KiB 16 modules
./src/App.js 2.99 KiB [built] [code generated]
webpack 5.72.0 compiled successfully in 230 ms
    </h2>
     {width > 1000 && <h2>Hi I'am in big screen</h2>} 
     <Context/>
     <Usememo/>
    </div>
  );
}

export default App;
