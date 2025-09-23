import root from "./router/root";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import './index.css'; 
function App() {
  return <RouterProvider router={root}></RouterProvider>;
}

export default App;
