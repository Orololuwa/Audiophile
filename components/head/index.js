import Head_ from "next/head";
import propTypes from "prop-types";

const Head = ({ title }) => {
  return (
    <Head_>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head_>
  );
};

export default Head;
