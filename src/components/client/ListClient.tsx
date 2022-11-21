import Clients from "../../data/clients.json"
import Card from "../common/Card";

const ListClient = () => {
    return (
        <div className="list-client-container">
            <div className="list-client">
                {Clients.map((client, index) =>
                    <Card id={client.id} name={client.name} lastName={client.lastName} email={client.email}
                          gender={client.gender}
                          key={client.id}/>)
                }
            </div>
        </div>
    )
}

export default ListClient