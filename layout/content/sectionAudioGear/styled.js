import styled from "styled-components";
import Section from "components/section";

const SectionAudioGearCtx = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3.5rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column-reverse;
  }

  .audio_gear-text_content {
    flex-basis: 50%;
    text-align: justify;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      align-items: center;
      text-align: justify;
    }

    h2 {
      text-transform: uppercase;
      font-weight: 400;
      line-height: ${({ theme }) => theme.typeScale.header1};
      letter-spacing: 2.5px;
    }

    p {
      width: 80%;

      @media only screen and (max-width: ${({ theme }) =>
          theme.breakpoints.lg}) {
        width: 100%;
      }
    }

    &--orange {
      color: ${({ theme }) => theme.colors.orange[300]};
    }
  }
`;

export default SectionAudioGearCtx;
