import "./App.css";
import Header from "./components/common/Header";
import SideBar from "./components/common/SideBar";
// import MainRoutes from "./Routes/MainRoutes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import StudentHome from "./components/students/StudentHome";
import TeachersHome from "./components/teachers/TeachersHome";
import ClassesHome from "./components/classes/ClassesHome";
import Home from "./components/home/Home";
import Contact from "./components/extras/Contact";
import About from "./components/extras/About";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <SideBar />

          <Routes>
            <Route exact path="/" element={<Navigate to="/home" />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/students" element={<StudentHome />}></Route>
            <Route exact path="/classes" element={<ClassesHome />}></Route>
            <Route exact path="/teachers" element={<TeachersHome />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
