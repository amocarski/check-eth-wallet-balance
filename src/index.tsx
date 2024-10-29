import { render } from "preact";
import { LocationProvider, Route, Router } from "preact-iso";

// import "./output.css";
import { NotFound } from "./pages/_404.jsx";
import { Home } from "./pages/home/index.js";

export function App() {
  return (
    <LocationProvider>
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
