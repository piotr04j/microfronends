import { mountMarketingApp } from 'marketing/MarketingApp'
import { useEffect, useRef } from 'react'


const MarketingApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        mountMarketingApp(ref.current)
    }, []);


    return <div ref={ref} />
}

export default MarketingApp
