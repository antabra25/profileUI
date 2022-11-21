import {NavLink} from "react-router-dom";

const Menu = () => {

    const itemList = [{name: 'Home', to: "/"}, {name: 'Info', to: "/info"}, {name: 'Profiles', to: "/profiles"}]
    return (
        <div className="menu-container">
            <ul className="menu">
                {itemList.map((item, index) =>
                    <li key={index}><NavLink to={item.to}>{item.name}</NavLink></li>
                )}
            </ul>
        </div>
    )
}

export default Menu;