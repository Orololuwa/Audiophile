import data from "data.json";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getRecommendedProduct = (category, id) => {
  const categoryData = data.filter((datum) => datum.category === category);
  const min = categoryData[0].id;
  const max = categoryData[categoryData.length - 1].id;
  let recommendedProductId = getRandomInt(min, max);
  if (id && categoryData.length > 1) {
    while (recommendedProductId === +id) {
      recommendedProductId = getRandomInt(min, max);
    }
  }

  return categoryData.reduce((arr, prdct) => {
    if (prdct.id === recommendedProductId) {
      arr = { ...prdct };
    }
    return arr;
  }, {});
};

export default getRecommendedProduct;
