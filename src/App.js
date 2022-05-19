import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addfriend from './component/Addfriend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewfriend from './component/Viewfriend';

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" excat element={<Addfriend/>}/>
<Route path="/view" excat element={<Viewfriend/>}/>

</Routes>
</BrowserRouter>

  );
}

export default App;
