import React, { createContext, useContext } from 'react'
const context = createContext()
export default function APIcontext({children}) {
  const signApi = 'https://66bf2fd542533c4031455cc3.mockapi.io/kavi'

  return (
    <div>
      <context.Provider value={{signApi}}>
        {children}
        </context.Provider>
    </div>
  )
}

export function API(){
  const api = useContext(context) 
  return api.signApi
}
