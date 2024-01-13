import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./NoPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Layout from "./Layout";
import BookingPage from "./components/Books/BookingPage";
import BookList from "./components/Books/BookList";
import Bookes from "./components/Books/Bookes";


function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index  element={<Login />} />
        <Route path="/register" element={<Register />} />

          
         
        
       </Route>
       <Route path="/Books" element={<BookingPage />} >
   
       <Route index element={<Bookes />} />
       <Route path="bookes" element={<BookList />} />



       </Route>


        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>    
  );
}
export default App;
