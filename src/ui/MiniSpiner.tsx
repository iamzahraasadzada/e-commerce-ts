import { TailSpin } from "react-loader-spinner";

interface MiniSpinerProps {
  color?: string;
}

export default function MiniSpiner({ color = "#fff" }: MiniSpinerProps) {
  return (
    <TailSpin
      visible={true}
      height="15"
      width="15"
      color={color}
      ariaLabel="tail-spin-loading"
      radius="3"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
