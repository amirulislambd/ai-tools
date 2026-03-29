import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Models from "./components/Main/Models/Models";
import NavBar from "./components/NavBar/NavBar";
import Tabs from "./components/Tabs/Tabs";
import Cart from "./components/Cart/Cart";

const dataFetch = async () => {
  const res = await fetch("/models.json");
  return res.json();
};
const responseData = dataFetch();
function App() {
  const [activePage, setActivePage] = useState("model");
  const [getModel, setGetModel] = useState([]);
  console.log(getModel);
  return (
    <>
      <NavBar />
      <Banner />
      <Tabs
        setActivePage={setActivePage}
        getModel={getModel}
      />

      {activePage === "model" ? (
        <Models
          responseData={responseData}
          getModel={getModel}
          setGetModel={setGetModel}
        />
      ) : (
        <Cart getModel={getModel} setGetModel={setGetModel} />
      )}
      <Footer />
    </>
  );
}

export default App;
