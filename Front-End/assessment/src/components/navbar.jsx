import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div>
        <Link to="/" style={{ textDecoration: "none" }}>
        <h1>products</h1>
</Link>
        <Link to="/admin" style={{ textDecoration: "none" }}>
        <h1>Admin</h1>
</Link>
<Link to="/SignIn" style={{ textDecoration: "none" }}>
        <h1>SignIn</h1>
</Link>
</div>
    )
}

export default Navbar;