import NavItems from "./NavItems";

const NavbarDesktop = () => {
    return (<nav className="desktop-nav">
        <NavItems />
        <button className="login">Login</button>
        <button className="register">Register</button>
    </nav>)
}

export default NavbarDesktop;