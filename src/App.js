import Header from "./components/Header";

function App() {
  const name = "Ernest"
  return (
    <div className="container">
      <Header title='Plango' />
      <p>Hello <b>{name}</b></p>
    </div>
  );
}

export default App;

