import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

export default function App() {
  
  return (
    <div className='app'>
      <div className='container'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}
