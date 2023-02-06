import React, { useEffect, useState } from 'react'
import { StoreContainer } from './styles'

//Data
import itemsData from '../../data/items'
import ItemCard from './ItemCard/ItemCard'
function Store() {
  //State
  const [items, setItems] = useState([])

  //Effect
  useEffect(() => {
    setItems(itemsData)
  }, [])

  return (
    <StoreContainer>
      {items?.map((item) => {
        return <ItemCard item={item} key={item?.id}/>
      })}
    </StoreContainer>
  )
}

export default Store