import data from "data.json";

const getAllProductsId = (filter) => {
  data = data.filter((prdct) => prdct.category === filter);
  return data.map((prdct) => {
    return {
      params: {
        id: prdct.id.toString(),
      },
    };
  });
};

export default getAllProductsId;
