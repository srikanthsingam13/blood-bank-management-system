import {Link} from "react-router-dom";
export default function Home(){return <div className="home"><h1>🩸 Blood Bank Management System</h1><p>Manage blood donors, donations, blood stock and patient requests in one place.</p><div><Link to="/register"><button>Register</button></Link><Link to="/login"><button>Login</button></Link></div></div>}
