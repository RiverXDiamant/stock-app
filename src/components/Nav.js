// import components
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className="nav">
      <Link className="link" to="/stocks">
        <div>Home</div>
      </Link>
      <Link className="link" to="/about">
        <div>About</div>
      </Link>
      <Link className="link" to="/stocks">
        <div>Dashboard</div>
      </Link>
    </div>
  );
}
