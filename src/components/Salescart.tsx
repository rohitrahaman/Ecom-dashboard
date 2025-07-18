import Linechart from "./Linechart";

type Props = {};

function Salescart({}: Props) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Linechart />
      <Linechart />
      <Linechart />
      <Linechart />
    </div>
  );
}

export default Salescart;
