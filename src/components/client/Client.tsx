import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useState} from "react";
import {getClientById} from "../../services/useClientService"

interface Client {
    id: number,
    name: string,
    lastName: string,
    email: string,
    gender: string,
    age: number,
    bio: string,
    photo: string

}

const Client = () => {

    let params = useParams<string>()
    const [client, setClient] = useState<Client>()
    useEffect(function (): void {
        const currentClient = getClientById(params.id)
        setClient(currentClient)
    }, [])
    return (
        <div className="client-container">
            <div className="client">
                <h1 className="title">
                    {client?.name} {client?.lastName}
                </h1>
                <p><span>Genero:</span> {client?.gender}</p>
                <p><span>Edad:</span> {client?.age}</p>
                <p><span>Correo:</span> {client?.email}</p>
                <p><span>Perfil:</span> {client?.bio}</p>
                <div className="photo-container">
                    <img src={client?.photo} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Client