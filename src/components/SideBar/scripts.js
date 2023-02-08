const Total = (cartItems, items) => {
    let total = 0
    for (const property in cartItems) {
        //count*price
        total+=cartItems[property]*items[property].price
      }
    return total
}
export default Total