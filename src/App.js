import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from "./containers/home/home";
import Page1 from "./containers/home/page1";
import Page2 from "./containers/home/page2";
import Page3 from "./containers/home/page3";
import Page4 from "./containers/home/page4";
import Page5 from "./containers/home/page5";
import Page6 from "./containers/home/page6";
import Navbar from "./component/navbar/navbar";
import Header from "./containers/header/header";
import Hash from "./component/hash/hash";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="gradient__bg">
                  <Navbar />
                  <Header />
                </div>
                <Home /> 

                <Hash />
              </>
            }
          />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
