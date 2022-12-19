//import components
import { Link } from "react-router-dom";
import stocks from "./stock-data";

export default function Dashboard() {
  return (
    <>
      <div className="table-header">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>High</th>
            <th>Low</th>
            <th>Open</th>
          </tr>
        </thead>
      </div>
      <div className="stock-container">
        <div className="dashboard-stocks">
          {stocks.map((stock) => {
            const { name, symbol, lastPrice, change, high, low, open } = stock;
            return (
              <table>
                <Link className="link" to={`/stock/${symbol}`}>
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
