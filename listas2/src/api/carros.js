export const newCarro = () => {
    let url = `http://localhost:3001/carros`
    let data = {
        "nombre": "Clase G",
        "marca": "Mercedes Benz"
    }
    

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}