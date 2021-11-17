import CategoryCard from "components/Card/category";
import Flex from "components/flex";
import { useRouter } from "next/router";

const Categories = () => {
  const router = useRouter();
  const onClickHandler = (path) => {
    router.push(`/${path}`);
  };

  return (
    <Flex justifyContent="flex-start" gap="2rem">
      <CategoryCard
        clicked={() => onClickHandler("headphones")}
        category="headphones"
      />
      <CategoryCard
        clicked={() => onClickHandler("speakers")}
        category="speakers"
      />
      <CategoryCard
        clicked={() => onClickHandler("earphones")}
        category="earphones"
      />
    </Flex>
  );
};

export default Categories;
