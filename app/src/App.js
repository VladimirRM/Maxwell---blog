import "./App.css";
import { BlogContent } from "./Components/BlogContent/BlogContent";
import { Header } from "./Components/Header/Header";

export function App() {
  return (
    <div className="App">
      <Header />;
      <main>
      <BlogContent/>
      </main>
     
    </div>
  );
}
