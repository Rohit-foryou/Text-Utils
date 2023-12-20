import "./App.css";

let name = "rohit";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contacts</li>
      </nav>

      <div className="container">
        <h2>Hello {name}</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eligendi
        saepe repellat. Corrupti ab, voluptas, voluptatum quisquam vitae atque
        dolorum a, illo cumque reiciendis perferendis facilis inventore
        voluptates incidunt fugiat quas rerum provident quo. Reprehenderit nihil
        hic veritatis officia a, quisquam velit accusantium doloremque possimus
        at eligendi tempora qui consequatur.
      </div>
    </>
  );
}

export default App;
