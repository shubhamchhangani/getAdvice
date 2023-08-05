import { useState } from "react";
import Footer from "./components/footer";

function App(){
  const [advice,setAdvice] = useState("Hello Buddy");
  async function getAdvice(){
    const res = await fetch('https://api.adviceslip.com/advice');
    const json = await res.json();
    setAdvice(json.slip.advice);
  }
  return(
    <div className="flexbox">
    <h3 className="para">Every click will display you a great adivce!</h3>
    <div className="container">
      <h1 className="adivce">{advice}</h1>
      
      

    </div>
    <button className="btn btn-outline-light" onClick={getAdvice}>Get Advice</button>
    <Footer className="foot" />
    </div>
  )
}

export default App;
