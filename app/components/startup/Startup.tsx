"use client"

import { useEffect, useState } from "react"

const Startup = () => {

  const [startUp, setStartup] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("load", () => {
        setStartup(false)
      })
    }, 500)
    setStartup(false)
  }, [])

  return (
    <div>
      {startUp === true ? <>
        <div style={{ zIndex: "1000" }}
          className="fadeToTopAnimation
                transition-all fixed bottom-[-130%] left-[-25%] z-50 w-[150vw] h-screen
              bg-black text-white flex items-center justify-center" >

          <h1>
            Welcome to my portfolio
          </h1>

        </div>

      </> : ""}

    </div>
  )
}

export default Startup
