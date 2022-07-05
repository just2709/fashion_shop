import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductFeature from "./features/Product";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/*' element={<ProductFeature />}></Route>

        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
