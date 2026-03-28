import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Models from "./components/Main/Models/Models";
import NavBar from "./components/NavBar/NavBar";

const dataFetch=async ()=>{
  const res = await fetch('/models.json')
  return res.json()
}
const responseData =dataFetch()
function App() {
  return (
  <>
  <NavBar/>
  <Banner/>
  <Suspense fallback={<p>Loading...</p>}>
  <Models responseData={responseData}/>
  </Suspense>
  <Footer/>
  </>
  );
}

export default App;
