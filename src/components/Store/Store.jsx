import React, { useEffect, useState } from 'react'
import { StoreContainer } from './styles'

//Component
import ItemCard from './ItemCard/ItemCard'

//Data
import itemsData from '../../data/items'

function Store() {
  //State
  const [items, setItems] = useState([])

  //Effect
  useEffect(() => {
    setItems(itemsData)
  }, [])

  return (
    <StoreContainer>
      {
        items ?
          ((Object.entries(items)).map(([key, item]) => {
            return <ItemCard item={item} key={key} />
          }))
          : null
      }
    </StoreContainer>
  )
}

export default Store