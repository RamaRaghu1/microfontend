import React,{lazy} from 'react'
const ChildApp2= lazy(()=>import("childapp2/App"));
const ChildApp1= lazy(()=>import("childapp1/App"))
const App = () => {
  return (
    <div >
      Microfrontend Host App
      <ChildApp2/>
      <ChildApp1/>
    </div>
  )
}

export default App
