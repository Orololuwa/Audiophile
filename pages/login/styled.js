import styled from "styled-components";
import Flex from "components/flex";

const LoginCtx = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 70000;
  background: ${({ theme }) => theme.colors.gray[900]};

  form {
    width: 30rem;
    padding: 2.5rem;
    background: ${({ theme }) => theme.colors.gray[800]};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    button {
      width: 100%;
    }
  }
`;

export default LoginCtx;
