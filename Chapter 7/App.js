import React from "react";
import "./app.css";
import Body from "./component/Body";
import { BrowserRouter as Router, Route, Routes, Outlet} from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu"

/* Food App structure, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// App component to show: Header, Body, Footer
 function App() {
  //Never create/call component inside component, it will avoid rerender each time
  return (
      <Router>
        
        <Header />
        <Outlet />
        <Routes>
          <Route exact path = "/" element={<Body />}>
          </Route>
          <Route exact path = "/about" element={<About />}>
          </Route>
          <Route exact path="/contact" element={<Contact />}>
          </Route>
          <Route path="/restaurant/:id" element={<RestaurantMenu />}>
          </Route>
          <Route path = "*" element={<Error />}>
          </Route>
          </Routes>
          <Footer />
      </Router>
  );
}
export default App;

