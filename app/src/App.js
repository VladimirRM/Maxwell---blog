import "./App.css";
import { BlogContent } from "./Components/BlogeContent/BlogContent";
import Footer from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";

export function App() {
  return (
    <div className="App">
      <Header />;
      <main>
      <BlogContent/>
      </main>
     <Footer/>
    </div>
  );
}
