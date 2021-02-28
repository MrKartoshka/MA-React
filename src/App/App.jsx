import React from "react";
import Header from "../Header/Header";
import './App.scss';

const cssClasses = "app";

const styleObj = {
    fontWeight: "bold"
}

const App = () => (
    <div className={cssClasses} style={styleObj}>
        <Header/>
        <div>
            <label htmlFor="firstName"> Input Field: </label>
            <input type="text" id="firstName"/>
        </div>
    </div>
);

export default App;