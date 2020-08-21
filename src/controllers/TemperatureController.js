//UNIDADES DISPONIVEIS
// c, f, k

module.exports = {
  async index(req, res) {

    const { from, to, value } = req.query;

    if (!from) { res.json({ error: 'Por favor informe a unidade de origem!' }); }
    if (!to) { res.json({ error: 'Por favor informe a unidade de destino!' }); }
    if (!value) { res.json({ error: 'Por favor informe o valor para conversão!' }); }
    if (from === to) { res.json({ error: 'As unidades de origem e destino não podem ser iguais!' }); }

    if (!(from === "c" || from === "f" || from === "k")) {
      res.json({ error: `A medida de origem não pode ser ${from}!` });
    }
    if (!(to === "c" || to === "f" || to === "k")) {
      res.json({ error: `A medida de destino não pode ser ${to}!` });
    }

    if (from === 'c' && to === 'f') { convertedValue = (parseFloat(value) * 9 / 5) + 32; }
    if (from === 'c' && to === 'k') { convertedValue = parseFloat(value) + 273.15; }

    if (from === 'f' && to === 'c') { convertedValue = (parseFloat(value) - 32) * 5 / 9; }
    if (from === 'f' && to === 'k') { convertedValue = ((parseFloat(value) - 32) * 5 / 9) + 273.15; }

    if (from === 'k' && to === 'c') { convertedValue = parseFloat(value) - 273.15; }
    if (from === 'k' && to === 'f') { convertedValue = ((parseFloat(value) - 273.15) * 5 / 9) + 32; }

    const response = {
      unitFrom: from,
      unitTo: to,
      originalValue: parseFloat(value),
      convertedValue,
    }

    res.json(response);
  }
}