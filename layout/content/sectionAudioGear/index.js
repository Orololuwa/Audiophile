import Col from "components/col";
import Image from "next/image";
import SectionAudioGearCtx from "./styled";

const SectionAudioGear = (props) => {
  return (
    <SectionAudioGearCtx {...props}>
      <Col className="audio_gear-text_content">
        <h2>
          bringing you the <br />
          <span className="audio_gear-text_content--orange">best</span> audio
          gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </Col>
      <div className="audio_gear-image">
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          height={500}
          width={500}
          objectPosition="center"
          objectFit="contain"
        />
      </div>
    </SectionAudioGearCtx>
  );
};

export default SectionAudioGear;
