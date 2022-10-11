import { mountMarketingApp } from 'marketing/MarketingApp'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const MarketingApp = () => {
  const ref = useRef(null)
  const history = useLocation()
  const navigate = useNavigate()
  const [mountProps, setMountProps] = useState<{ onParentNavigate: (nextPathname?: string) => void }>({
    onParentNavigate () {

    }
  })

  useEffect(() => {
    const onParentNavigate = mountMarketingApp(ref.current, {
      onNavigate: (location) => {
        if (history.pathname !== location.pathname) {
          navigate(location.pathname)
        }
      }
    })

    setMountProps(onParentNavigate)
  }, [])

  useEffect(() => {
    mountProps.onParentNavigate(history.pathname)
  }, [history.pathname])

  return <div ref={ref} />
}

export default MarketingApp
