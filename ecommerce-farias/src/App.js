import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <main className='conteudo'>
        <figure className='logoCentral'>
          <img src='/transparente_logo.png' alt='Logo Ecommerce' />
        </figure>
      </main>
    </div>
  );
}

export default App;