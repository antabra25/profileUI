import clients from "../data/clients.json"


function getClientById(id: string) {

    const client = clients.find(client => client.id == parseInt(id))

    return client
}


export {
    getClientById
}