import {UsersThree} from "phosphor-react";
import Menu from "./Menu";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar x-container">
                <div className="navbar-content">
                    <div className="logo">
                        <UsersThree size={42} weight="bold"/>
                    </div>
                    <Menu/>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;