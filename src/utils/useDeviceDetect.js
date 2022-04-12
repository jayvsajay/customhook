import React from 'react'

function useDeviceDetect() {
    const [isMobile,setmobile] = React.useState(false);
    React.useEffect(() => {
       const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
       console.log(userAgent);
       const Mobile = Boolean(
           userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
       );
       setmobile(Mobile);
    },[])

    return isMobile;
}

export default useDeviceDetect