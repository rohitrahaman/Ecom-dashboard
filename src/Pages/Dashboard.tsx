import Barchart from "@/components/Barchart";
import Datatable from "@/components/Datatable";
import Linechart from "@/components/Linechart";
import Piechart from "@/components/Piechart";
import Radilchart from "@/components/Radilchart";
import Salescart from "@/components/Salescart";
import TableDemo from "@/components/TableDemo";

type Props = {};

function Dashboard({}: Props) {
  return (
    <div>
      <div>
        <div className="flex gap-4 ">
          <Linechart />
          <Linechart />
          <Linechart />
          <Linechart />
        </div>
      </div>
      <div className="flex gap-4 mt-5">
        <div className="w-2/3">
          <Barchart />
        </div>
        <div className="w-1/3">
          <Radilchart />
        </div>
      </div>
      <div className="flex gap-4 mt-5">
        <div className="w-1/2">
          <Piechart />
        </div>
        <div className="w-1/2">
          <Linechart />
        </div>
      </div>
      <div className="flex gap-4 mt-5">
        <div className="w-2/3 ">
          <Datatable />
        </div>
        <div className="w/1/3 ">
          <Salescart />
        </div>
      </div>
      <div className="mt-5">
        <TableDemo />
      </div>
    </div>
  );
}

export default Dashboard;
