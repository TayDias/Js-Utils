let response = `{
    "status": "200",
    "data": [
        [
            {
                "id": "1",
                "code": "19875",
                "valor": "10.00",
                "teste": "<a href=\"https://google.com\" title=\"Contrato 1234/2\">Contrato 1234/2</a>"
            },
            {
                "id": "2",
                "code": "15641",
                "valor": "15.00",
                "teste": "<a href=\"https://google.com\" title=\"Contrato 567/5\">Contrato 567/5</a>"
            }
        ]
    ],
    "executiontime": "1.672s"
}`


response = response.replace(/<\/?[^>]+>/gi, '')

console.log(response)
