import React from "react";
import Header from "./bootstrap/navbar";
import Home from "./bootstrap/home";
import About from "./bootstrap/about";
import Tabel from "./bootstrap/contact";

export default class Bootstrap extends React.Component {
    render(){
        return(
            <div className="bgc-gray mt">
                <Header />
                 <Home />
                 <About />
                 <Tabel />

            </div>
        )
    }
}