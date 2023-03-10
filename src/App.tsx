import React from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import "./index.css";
import "./styles.css";

function App() {
      return (
            <div className="App">
                  <div className="flex lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 h-full">
                              <Carousel />
                        </div>
                        <div className="xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0"></div>
                  </div>
            </div>
      );
}

export default App;
