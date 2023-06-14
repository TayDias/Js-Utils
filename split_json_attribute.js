let responseStr = `{
    "status": "200",
    "data": [
        [
            {
                "id": "1",
                "code": "19875",
                "nome_formatado": "<a href=\"https://google.com\" title=\"Contrato 1234/2\">Contrato 1234/2</a>",
                "publickey": "74874454154",
                "valor": "10.00"
            },
            {
                "id": "2",
                "code": "15641",
                "nome_formatado": "<a href=\"https://google.com\" title=\"Contrato 567/5\">Contrato 567/5</a>",
                "publickey": "165465465464",
                "valor": "15.00"
            }
        ]
    ],
    "executiontime": "1.672s"
}`

let responseStrTemp = ""
let countAttribute = 0

// Remover "nome_formatado"
countAttribute = (responseStr.split(`"nome_formatado"`).length - 1)

for (j = 1; j <= countAttribute; j++) {
	responseStrTemp = responseStr.split(`"nome_formatado"`)[0]
		
	for (k = j; k <= countAttribute; k++) {
		responseStrTemp += `"publickey"` + responseStr.split(`"publickey"`)[k]
	}

	responseStr = responseStrTemp
}


let jsonteste = JSON.parse(responseStr)

console.log(jsonteste)
