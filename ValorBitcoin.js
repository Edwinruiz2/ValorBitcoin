const axios = require('axios');
const fs = require('fs').promises;

axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
        console.log("La conversion de la moneda digital a las diferentes moneda  actualmente es de: ")
        var ValorBit = response.data.bpi
        var resultado = [
                    `${ValorBit.USD.code} `+` $ ${ValorBit.USD.rate}`,
                    `${ValorBit.EUR.code} `+` € ${ValorBit.EUR.rate}`,
                    `GBP `+`£ ${ValorBit.GBP.rate}`,
                ]
       resultado.forEach(date =>console.log(date))
})