import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mountAuthApp } from 'auth/AuthApp';

const AuthApp = () => {
    const ref = useRef(null)
    const history = useLocation()
    const navigate = useNavigate()
    const [mountProps, setMountProps] = useState<{ onParentNavigate: (nextPathname?: string) => void }>({
        onParentNavigate () {}
    })

    useEffect(() => {
        const onParentNavigate = mountAuthApp(ref.current, {
            onNavigate: (location) => {
                if (history.pathname !== location.pathname) {
                    navigate(location.pathname)
                }
            },
            initialPath: [history.pathname]
        })

        setMountProps(onParentNavigate)
    }, [])

    useEffect(() => {
        mountProps.onParentNavigate(history.pathname)
    })

    return (
        <div ref={ref}></div>
    )
}

export default AuthApp
