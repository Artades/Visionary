import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthMe, selectIsAuth} from "./redux/slices/auth";
import {useEffect} from "react";
import Home from "./pages/Home";
import CreateImage from "./pages/CreateImage";

function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    useEffect(() => {
        dispatch(fetchAuthMe());
    }, [])
  return (
    <div className="app">
<Routes>
  <Route path="/" element={<Login/>} />
  <Route path="/register" element={<Register/>} />
  <Route path="/home"  element={<Home/>} />
    <Route path="/create-image" element={<CreateImage/>}/>
</Routes>
    </div>
  );
}

export default App;
