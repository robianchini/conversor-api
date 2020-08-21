//UNIDADES DISPONIVEIS
// floz, gal, l, ml

module.exports = {
  async index(req, res) {

    const { from, to, value } = req.query;

    if (!from) { res.json({ error: 'Por favor informe a unidade de origem!' }); }
    if (!to) { res.json({ error: 'Por favor informe a unidade de destino!' }); }
    if (!value) { res.json({ error: 'Por favor informe o valor para conversão!' }); }
    if (from === to) { res.json({ error: 'As unidades de origem e destino não podem ser iguais!' }); }

    if (!(from === "floz" || from === "gal" | from === "l" | from === "ml")) {
      res.json({ error: `A medida de origem não pode ser ${from}!` });
    }
    if (!(to === "floz" || to === "gal" | to === "l" | to === "ml")) {
      res.json({ error: `A medida de destino não pode ser ${to}!` });
    }

    if (from === 'floz' && to === 'gal') { convertedValue = parseFloat(value) / 128; }
    if (from === 'floz' && to === 'l') { convertedValue = parseFloat(value) / 33.814; }
    if (from === 'floz' && to === 'ml') { convertedValue = parseFloat(value) * 29.574; }

    if (from === 'gal' && to === 'floz') { convertedValue = parseFloat(value) * 128; }
    if (from === 'gal' && to === 'l') { convertedValue = parseFloat(value) * 3.785; }
    if (from === 'gal' && to === 'ml') { convertedValue = parseFloat(value) * 3785; }

    if (from === 'l' && to === 'floz') { convertedValue = parseFloat(value) * 33.814; }
    if (from === 'l' && to === 'gal') { convertedValue = parseFloat(value) / 3.785; }
    if (from === 'l' && to === 'ml') { convertedValue = parseFloat(value) * 1000; }

    if (from === 'ml' && to === 'floz') { convertedValue = parseFloat(value) / 29.574; }
    if (from === 'ml' && to === 'gal') { convertedValue = parseFloat(value) / 3785; }
    if (from === 'ml' && to === 'l') { convertedValue = parseFloat(value) / 1000; }

    const response = {
      unitFrom: from,
      unitTo: to,
      originalValue: parseFloat(value),
      convertedValue,
    }

    res.json(response);
  }
}