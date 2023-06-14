let response = `{
    "status": "200",
    "data": [
        [
            {
                "id": "1",
                "code": "19875",
                "valor": "10.00",
                "teste": "Contrato 1

                234/2"
            },
            {
                "id": "2",
                "code": "15641",
                "valor": "15.00",
                "teste": "Contrato 

                567/5"
            }
        ]
    ],
    "executiontime": "1.672s"
}`

//let json = JSON.parse(response)

response = response.replace(/(\r\n|\n|\r)/gm, '')
console.log(response)

let json = JSON.parse(response)
