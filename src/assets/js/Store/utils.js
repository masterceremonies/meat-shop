const checkId = (value) => {
  if (isNaN(+value)) {
    return Math.floor(Math.random() * 10000)
  }
  return +value
}

export const formatData = (array) => {
  return array.map(element => {
    return {
      ...element,
      productId: checkId(element.productId),
      catId: checkId(element.catId),
    }
  })
}
