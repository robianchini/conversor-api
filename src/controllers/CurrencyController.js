const axios = require('axios');

module.exports = {

  async index(req, res) {

    const { from, to, value } = req.query;
    const cotationRequest = await axios.get('https://economia.awesomeapi.com.br/json/USD-BRL');
    const { bid, create_date } = cotationRequest.data[0];

    if (!from) { res.json({ error: 'Por favor informe a moeda de origem!' }); }
    if (from === to) { res.json({ error: 'As moedas de origem e destino não podem ser iguais!' }); }
    if (!to) { res.json({ error: 'Por favor informe a moeda de destino!' }); }
    if (!value) { res.json({ error: 'Por favor informe o valor para conversão!' }); }

    if (!(from === "BRL" || from === "USD")) {
      res.json({ error: `A moeda de origem não pode ser ${from}!` });
    }

    if (!(to === "BRL" || to === "USD")) {
      res.json({ error: `A moeda de destino não pode ser ${to}!` });
    }

    if (from === 'BRL' && to === 'USD') {
      convertedValue = parseFloat(value) / parseFloat(bid);
    }

    if (from === 'USD' && to === 'BRL') {
      convertedValue = parseFloat(value) * parseFloat(bid);
    }

    const response = {
      currencyFrom: from,
      currencyTo: to,
      originalValue: parseFloat(value),
      convertedValue,
      quotation: parseFloat(bid),
      quotationDate: create_date
    }

    res.json(response);


  }

}