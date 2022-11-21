import {NavLink} from 'react-router-dom';

interface Card {
    id: number,
    name: string,
    lastName: string,
    gender: string,
    email: string

}

const Card = ({id, name, lastName, gender, email}: Card) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-content">
                    <div className="card-title">
                        <h2>{name} {lastName}</h2>
                    </div>
                    <div className="card-body">
                        <p>{gender}</p>
                        <p>{email}</p>
                    </div>
                    <div className="card-footer">
                         <NavLink className="navigate-btn" to={`/profile/${id}`}>Profile</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card