import React from "react"
import ReactDOM from "react-dom" 
// OR react-dom/client

// OLD - ReactDOM.render(item, document.getElementByID("root"))
// New - ReactDOM.createRoot(document.getElementById("root")).render(item)

// Best way
// const root = ReactDOM.createRoot(document.getElementById("item"))
// root.render(item)

// - - - - - - - - - - -

// if I want to import a section of the webpage from another file, all I have to do is
// import (element name) from "./element"
import Header from "./components/Header"

// - - - - - - - - - - -

