import React from 'react'
import img1 from '../../assets/adidas.jpg'
import img2 from '../../assets/adidas2.jpg'
import img3 from '../../assets/adidas3.jpg'
import img4 from '../../assets/buzo-nike1.png'
import img5 from '../../assets/buzo-nike2.png'
import img6 from '../../assets/buzo-nike3.png'
import img7 from '../../assets/zapatos-adidas2.png'
import img8 from '../../assets/zapatos-asics.png'
import img9 from '../../assets/zapatos-newbalance.png'
import img10 from '../../assets/zapatos-nike.png'
import img11 from '../../assets/zapatos-underarmour.png'
import img12 from '../../assets/zapatos-adidas.png'
import Card from './Card'

const Cards = () => {

  const cards = [
    {
      id: 1,
      title: "Buzo Adidas",
      description: "Modelo 2023 Color Negro - 25% off",
      imagen: img1
    },
    {
      id: 2,
      title: "Buzo Adidas",
      description: "Modelo 2023 - 25% off",
      imagen: img2
    },
    {
      id: 3,
      title: "Buzo Adidas",
      description: "Modelo 2023 Color Verde - 25% off",
      imagen: img3
    },
    {
      id: 4,
      title: "Buzo Nike",
      description: "Color rosa de dama 2023",
      imagen: img4
    },
    {
      id: 5,
      title: "Buzo Nike",
      description: "Color negro 2023 - 25% off",
      imagen: img5
    },
    {
      id: 6,
      title: "Buzo Nikes",
      description: "Color Amarillo 2023 - 25% off",
      imagen: img6
    },
    {
      id: 7,
      title: "Adidas",
      description: "Color Blanco 2023 - 5% off",
      imagen: img7
    },
    {
      id: 8,
      title: "Asics",
      description: "Color Azul - Modelo 2023 - 25% off",
      imagen: img8
    },
    {
      id: 9,
      title: "New Balance",
      description: "Modelo 2023 Color Gris - 25% off",
      imagen: img9
    },
    {
      id: 10,
      title: "Nike",
      description: "Color Blanco de dama 2023",
      imagen: img10
    },
    {
      id: 11,
      title: "Under Armaour",
      description: "Color Rosa-  2023 - 25% off",
      imagen: img11
    },
    {
      id: 12,
      title: "Adidas",
      description: "Color Negro 2023 - 25% off",
      imagen: img12
    }
  ]


  return (
    <div className="Container">
      <div className='row'>
        {
          cards.map(card => (
            <div className='col-md-4' key={card.id}>
              <Card title={card.title} imagen={card.imagen} description={card.description} />
            </div>
          ))
        }

      </div>

    </div>

  )
}

export default Cards