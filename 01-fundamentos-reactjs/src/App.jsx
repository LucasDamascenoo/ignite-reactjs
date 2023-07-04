import { Post } from "./Posts";

import { Header } from "./components/Header";

import "./styles/global.css";
function App() {
  return (
    <div>
      <Header />
      <Post autor="LucasDamasceno" content="post1" />
      <Post autor="Tatiane" content="post2" />
    </div>
  );
}

export default App;
