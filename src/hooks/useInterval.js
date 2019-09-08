import { useEffect, useRef } from 'react'

const useInterval = (callback = () => {}, delay = 1000) => {
  const savedCallback = useRef()

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    const id = setInterval(tick, delay)

    return () => clearInterval(id)
  }, [delay])
}

export default useInterval
