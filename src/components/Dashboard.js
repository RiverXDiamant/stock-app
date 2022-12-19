//import components
import { Link } from "react-router-dom";
import stocks from "./stock-data";

export default function Dashboard() {
  return (
    <>
      <div className="stock-container">
        <div className="dashboard-stocks">
          {stocks.map((stock) => {
            const { name, symbol, lastPrice, change, high, low, open } = stock;
            return (
              <table>
                <Link className="link" key={symbol} to={`/stock/${symbol}`}>
                  <tr>
                    <td>
                      {name} ({symbol})
                    </td>
                  </tr>
                </Link>
                <td>{lastPrice}</td>
                <td>{change}</td>
                <td>{high}</td>
                <td>{low}</td>
                <td>{open}</td>
              </table>
            );
          })}
        </div>
      </div>
    </>
  );
}
