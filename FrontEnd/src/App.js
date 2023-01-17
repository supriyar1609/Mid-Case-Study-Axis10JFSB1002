import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Books from "./components/Books";
import AddBook from "./components/AddBook";
//import ProductById from "./ProductById";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import UpdateBook from "./components/UpdateBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/book" element={<Books/>}></Route>
          <Route path="/add" element={<AddBook/>}></Route>
          <Route path="/update" element={<UpdateBook/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;