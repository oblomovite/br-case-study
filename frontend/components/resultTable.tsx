export default function ResultTable( { results } ) {
    return (
      <div>
        <h1>Simulation Results</h1>
        <table>
          <tr>
            <th>N</th>
            <th>X</th>
            <th>Y</th>
            <th>Z</th>
          </tr>
          <tr>

            {results.map((result, index) => (
              <td key={index}>{result}</td>
            ))}

          </tr>
        </table>
      </div>
    );
    }