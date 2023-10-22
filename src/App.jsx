import './App.css'
import NavBar from './components/navbar/NavBar'
import Search from './components/search/Search'
import CardWidget from './components/cardwidget/CardWidget'
import Carousel from './components/carousel/Carousel'
import Card from './components/card/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavFooter from './components/footer/NavFooter'


function App() {


  return (
    <>
      <NavBar />     
      <Carousel />
      <CardWidget /> 
      <Card/>
      <NavFooter/>
     
    </>
  )
}

export default App
