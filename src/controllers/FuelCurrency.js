//UNIDADES DISPONIVEIS
// mpg, kml

module.exports = {
  async index(req, res) {

    const { from, to, value } = req.query;

    if (!from) { res.json({ error: 'Por favor informe a unidade de origem!' }); }
    if (!to) { res.json({ error: 'Por favor informe a unidade de destino!' }); }
    if (!value) { res.json({ error: 'Por favor informe o valor para conversão!' }); }
    if (from === to) { res.json({ error: 'As unidades de origem e destino não podem ser iguais!' }); }

    if (!(from === "mpg" || from === "kml")) {
      res.json({ error: `A medida de origem não pode ser ${from}!` });
    }
    if (!(to === "mpg" || to === "kml")) {
      res.json({ error: `A medida de destino não pode ser ${to}!` });
    }

    if (from === 'mpg' && to === 'kml') { convertedValue = parseFloat(value) / 2.352; }
    if (from === 'kml' && to === 'mpg') { convertedValue = parseFloat(value) * 2.352; }

    const response = {
      unitFrom: from,
      unitTo: to,
      originalValue: parseFloat(value),
      convertedValue,
    }

    res.json(response);
  }
}