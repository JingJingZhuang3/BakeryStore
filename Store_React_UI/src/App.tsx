import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
  import Bakery from "./components/Bakery";
  
  
  // import Dashboard from "./components/Index/Dashboard";
  
  
  export function App(): JSX.Element {
    return (
      <Router>
          <Route path="/" component={() => <Bakery />} />
      </Router>
  
    )
  
  }