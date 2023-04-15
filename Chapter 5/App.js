import React from "react";
import "./app.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

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
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
