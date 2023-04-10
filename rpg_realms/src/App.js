import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

      </header>
      <main className="App-main">
        <Home />
      </main>
      <footer className="App-main">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
