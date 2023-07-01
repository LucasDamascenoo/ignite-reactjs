import { Post } from "./Posts";

import { Header } from "./components/Header";

import "./styles/styles.css";
function App() {
  return (
    <div>
      <Post autor="LucasDamasceno" content="post1" />
      <Post autor="Tatiane" content="post2" />

      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;
