import CategoryCard from "components/Card/category";
import Flex from "components/flex";

const Categories = () => (
  <Flex justifyContent="flex-start" gap="1rem">
    <CategoryCard category="headphones" />
    <CategoryCard category="speakers" />
    <CategoryCard category="earphones" />
  </Flex>
);

export default Categories;
