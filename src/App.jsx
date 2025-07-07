import Portfolio from "./Portfolio"
import { Analytics } from "@vercel/analytics/next"
import './App.css'

function App() {


  return (
    <>
      <Portfolio/>
      <Analytics />

    </>
  )
}

export default App
