import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";

const FullPage = styled.div`
  height: 45rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function FullPageSpinner() {
  return (
    <FullPage>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="black"
        ariaLabel="tail-spin-loading"
        radius="3"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </FullPage>
  );
}
