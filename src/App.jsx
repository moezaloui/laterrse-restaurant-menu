import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';
import Menu from './pages/Menu';

function App() {

  return (
    <div> 
    <Header/>
      <Landing/>
      <Menu/>
      <Footer/>
   </div>
  )
}

export default App
