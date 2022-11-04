import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <a href="#first">Home</a>
          <a href="#second">About</a>
          <a href="third">Contact</a>
        </nav>
      </header>
      <main>
        <h1>Simple Blog</h1>
        <div className="posts">
          <div className="post">
            <h2>Post 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              commodi optio ipsam ea. Aperiam, velit cupiditate. Sint, est?
              Error asperiores corrupti alias perspiciatis voluptatibus aliquid
              delectus, reprehenderit consequuntur debitis provident?
            </p>
          </div>
          <div className="post">
            <h2>Post 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              commodi optio ipsam ea. Aperiam, velit cupiditate. Sint, est?
              Error asperiores corrupti alias perspiciatis voluptatibus aliquid
              delectus, reprehenderit consequuntur debitis provident?
            </p>
          </div>
          <div className="post">
            <h2>Post 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              commodi optio ipsam ea. Aperiam, velit cupiditate. Sint, est?
              Error asperiores corrupti alias perspiciatis voluptatibus aliquid
              delectus, reprehenderit consequuntur debitis provident?
            </p>
          </div>
        </div>
        <div className="count">
          <button>Get amount of posts</button>
        </div>
      </main>
      <footer>
        <span>React-blog 2022</span>
      </footer>
    </div>
  );
}

export default App;
