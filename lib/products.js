import data from "data.json";

const getAllProductsId = () => {
  return data.map((prdct) => {
    return {
      params: {
        id: prdct.id.toString(),
      },
    };
  });
};

export default getAllProductsId;
