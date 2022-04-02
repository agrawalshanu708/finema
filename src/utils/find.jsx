
  const checkInWatch = (id,product) => {
    return product.find(item => item._id === id)
  }
  export{checkInWatch}