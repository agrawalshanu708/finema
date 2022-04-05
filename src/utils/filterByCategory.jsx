const filterByCategory = (products,type) => {
    switch (type) {
      case "talk":
    return products.filter(item => item.title === "talks")
    case "stock":
    return products.filter(item => item.title === "stock")
    case "finance":
     return products.filter(item => item.title === "finance")
     case "crypto":
    return products.filter(item => item.title === "crypto")
     case "all":
    return products;
  
      default:
    return products
    }
  }
export {filterByCategory}  