import CategoryCard from "components/Card/category";
import { useRouter } from "next/router";
import CategoriesCtx from "./styled";

const Categories = () => {
  const router = useRouter();
  const onClickHandler = (path) => {
    router.push(`/${path}`);
  };

  return (
    <CategoriesCtx justifyContent="flex-start" gap="2rem">
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
    </CategoriesCtx>
  );
};

export default Categories;
