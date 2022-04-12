import {useState, useEffect} from 'react'

function usePageBottom() {
    const [bottom, setBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isBottom =
                Math.round(window.innerHeight + document.documentElement.scrollTop)
                === Math.round(document.documentElement.offsetHeight);
            setBottom(isBottom);
                }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    return bottom;
}

export default usePageBottom