import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
  import Bakery from "./components/Bakery";
  
  
  // import Dashboard from "./components/Index/Dashboard";
  
  
  export function App(): JSX.Element {
    return (
      <Router>
        <Routes>
          <Route path="/" Component={() => <Bakery />} />

        </Routes>
      </Router>
  
    )
  
  }