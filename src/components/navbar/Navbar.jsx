import NavItems from "./NavItems";
function Navbar(props) {
    // adding the navbar fading out...
    function closeNavbar() {
        document.querySelector(".mobile-nav").classList.add("fade-navbar");

        document.body.classList.remove("faded");

        setTimeout(() => props.onClick(), 1000)
    }

    return (
        <nav className="mobile-nav">
            <button onClick={closeNavbar} className="close-menu">
                <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" /><path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" /></g></svg>
            </button>
            <NavItems />
            <button className="login">Login</button>
            <button className="register">Register</button>
        </nav>
    )
}

export default Navbar;