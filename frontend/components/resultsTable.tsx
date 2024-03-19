import { SimulationResult } from "@/app/types/models";
import { Table } from "react-bootstrap";

// display the results of the simulation in a table
export default function ResultsTable({ results }: { results: SimulationResult[] }) {
  return (
    <div className='overflow-x-auto mt-6'>
      <Table striped bordered hover className='min-w-full table-auto shadow-lg'>
        <thead className='bg-primary text-white'>
          <tr>
            <th className='px-6 py-3 text-left'>N</th>
            <th className='px-6 py-3 text-left'>x</th>
            <th className='px-6 py-3 text-left'>y</th>
            <th className='px-6 py-3 text-left'>z</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-blue-800'>
          {results.map((row, index) => (
            <tr
              className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}
              key={index}
            >
              <td className='border px-6 py-2 text-left text-gray-900'>
                {index + 1}
              </td>
              <td className='border px-6 py-2 text-left text-gray-900'>
                {typeof row.x === 'number' ? row.x.toFixed(6) : row.x}
              </td>
              <td className='border px-6 py-2 text-left text-gray-900'>
                {typeof row.y === 'number' ? row.y.toFixed(6) : row.y}
              </td>
              <td className='border px-6 py-2 text-left text-gray-900'>
                {typeof row.z === 'number' ? row.z.toFixed(6) : row.z}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
