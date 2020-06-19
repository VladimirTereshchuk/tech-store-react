// import url from "./URL";

//flatten
export function flattenProducts(data) {
  return data.map((item) => {
    let image = item.image.url;
    return { ...item, image };
  });
}

//paginate

export function paginate(products) {
  const itemsPerPage = 4;
  const numberOfPages = Math.ceil(products.length / itemsPerPage);
  // const newProducts = Array.from({ length: numberOfPages }, () => {
  //   return products.splice(0, itemsPerPage);
  // });
  const newProducts = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  });
  // console.log(newProducts);
  // console.log(products);
  return newProducts;
}
