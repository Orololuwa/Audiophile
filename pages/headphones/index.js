import Section from "components/section";
import HeadphonesCtx from "./styled";
import data from "data.json";
import SectionAudioGear from "layout/content/sectionAudioGear";
import Categories from "layout/content/categories";
import ProductListing from "components/product/productListing";
import Hero from "layout/header/hero";

const Headphones = (props) => {
  const { data } = props;

  return (
    <HeadphonesCtx>
      <Hero title="Headphones" />
      <Section>
        {data.map((product, idx) => {
          const { name, description, id, image } = product;
          return (
            <ProductListing
              name={name}
              description={description}
              image={image}
              idx={idx}
              key={id}
            />
          );
        })}
      </Section>
      <Section style={{ paddingTop: "0" }}>
        <Categories />
      </Section>
      <SectionAudioGear style={{ paddingTop: "0" }} />
    </HeadphonesCtx>
  );
};

export default Headphones;

export const getStaticProps = async () => {
  const filteredData = data.filter((audio) => audio.category === "headphones");

  const reversedData = [];

  for (let i = filteredData.length - 1; i >= 0; i--) {
    reversedData.push(filteredData[i]);
  }

  return {
    props: {
      data: reversedData,
    },
    revalidate: 3600,
  };
};