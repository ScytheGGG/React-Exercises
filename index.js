import React from "react"
import ReactDOM from "react-dom" 
// OR react-dom/client

// OLD - ReactDOM.render(item, document.getElementByID("root"))
// New - ReactDOM.createRoot(document.getElementById("root")).render(item)

// Best way
// const root = ReactDOM.createRoot(document.getElementById("item"))
// root.render(item)

// - - - - - - - - - - -