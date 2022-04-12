import { useCallback, useEffect, useState } from 'react';
import copy from 'copy-to-clipboard';



export default function useCopyToClipBoard(){
    let resetInterval = 5000;
    const [isCopied, setCopied] = useState(false);

    const handleCopy = useCallback((text) => {
        if(typeof text === "string" || typeof text === "number"){
            copy(text.toString());
            setCopied(true);
        }
        else{
            setCopied(false);
            console.error(`Cannot copy the type of ${typeof text}, copy only text or numbers`)
        }
    },[]);

    useEffect(() => {
        let timeOut;
        if(isCopied){
            timeOut = setTimeout(() => setCopied(false), resetInterval);
        }
        return () => {
            clearTimeout(timeOut);
        }
    })

    return [isCopied, handleCopy];
}