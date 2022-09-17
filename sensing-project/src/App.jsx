import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Chart from './components/Chart'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card">
        <Chart />
      </div>
      <Footer />
    </div>
  )
}

export default App
