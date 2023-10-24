import './App.css'
import NavBar from './components/navbar/NavBar'
import CardWidget from './components/cardwidget/CardWidget'
import Carousel from './components/carousel/Carousel'
import Cards from './components/card/Cards'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavFooter from './components/footer/NavFooter'



function App() {


  return (
    <>

       <NavBar />
      <Carousel />
      <CardWidget />
      <Cards />
      <NavFooter /> 

    </>
  )
}

export default App
