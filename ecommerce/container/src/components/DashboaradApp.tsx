import { useEffect, useRef } from 'react';
import { mountDashboardApp } from 'dashboard/DashboardApp';

const DashboardApp = () => {
    const ref = useRef(null)

    useEffect(() => {
        mountDashboardApp(ref.current)
    }, [])

    return (
        <div ref={ref}></div>
    )
}

export default DashboardApp

