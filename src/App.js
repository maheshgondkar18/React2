import './App.css';

let name ="Mahesh";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>Contact</li>
      <li>About</li>
    </nav>
    <div className="container">
      <h1>Hello{name}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni provident similique explicabo aspernatur aperiam, eos velit nam facere esse repudiandae culpa at deleniti quaerat vel a soluta maxime error neque!</p>
    </div>
    </>

    );
}

export default App;
