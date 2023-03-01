import "./App.css";
import Home from "./components/Home";
import Friends from "./components/Friends";
import About from "./components/About";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Invalid from "./components/Invalid";
import FriendDetail from "./components/FriendDetail";
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route
          path="/friend/:friendId"
          element={<FriendDetail></FriendDetail>}
        ></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/posts" element={<Posts></Posts>}>
          <Route path=":postId" element={<PostDetail></PostDetail>}></Route>
        </Route>
        {/* <Route path="/post/:postId" element={<PostDetail></PostDetail>}></Route>  */}
        <Route path="*" element={<Invalid></Invalid>}></Route>
      </Routes>
    </div>
  );
}

export default App;
