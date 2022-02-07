import Section from "components/section";
import HeadphonesCtx from "./styled";
import data from "data.json";
import SectionAudioGear from "layout/content/sectionAudioGear";
import Categories from "layout/content/categories";
import ProductListing from "components/product/productListing";
import Hero from "layout/header/hero";
import Head from "components/head";
import { Slide } from "react-reveal";

const Headphones = (props) => {
  const { data } = props;

  return (
    <>
      <Head title="Audiophile e-commerce website | Headphones" />
      <HeadphonesCtx>
        <Hero title="Headphones" />
        <Section>
          {data.map((product, idx) => {
            const { name, description, id, image } = product;
            return (
              <Slide left={idx % 2 === 0 && true} right={idx % 2 !== 0 && true}>
                <ProductListing
                  name={name}
                  description={description}
                  image={image}
                  idx={idx}
                  key={id}
                  id={id}
                />
              </Slide>
            );
          })}
        </Section>
        <Section style={{ paddingTop: "0" }}>
          <Categories />
        </Section>
        <SectionAudioGear style={{ paddingTop: "0" }} />
      </HeadphonesCtx>
    </>
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
  };
};
