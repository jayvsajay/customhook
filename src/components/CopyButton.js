import React from 'react'
import {IoClipboard,IoCheckmark} from 'react-icons/io5';
import useCopyToClipBoard from '../utils/useCopyToClipboard';
function CopyButton({code}) {
    const [isCopied, handleCopy] = useCopyToClipBoard();
  return (
    <button onClick={() => handleCopy(code)}>
        {isCopied ? <IoCheckmark size='20'/> : <IoClipboard size='20'/>}
    </button>
  )
}

export default CopyButton