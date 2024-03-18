import ResultTable from "@/components/ResultTable";
import InputForm from "@/components/inputForm";
import SimulationForm from "@/components/simulationForm";
import { Result } from "postcss";

function Header() {
  return (
    <div className="flex justify-between items-center w-full max-w-5xl font-mono text-sm">
      <div className="flex-grow">
        <p>
          AI Labs | <strong> Full stack case study </strong>{' '}
        </p>
      </div>
      <button className="py-2 px-4 bg-gray-200 text-black rounded hover:bg-gray-300"
      // onClick={() => {console.log('Run')}}
      >
        Run
      </button>

    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen p-2">
      <SimulationForm />
    </main>
  );
}
