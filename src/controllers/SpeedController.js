//UNIDADES DISPONIVEIS
// mph, fps, mps, kmh, kt

module.exports = {
  async index(req, res) {

    const { from, to, value } = req.query;

    if (!from) { res.json({ error: 'Por favor informe a unidade de origem!' }); }
    if (!to) { res.json({ error: 'Por favor informe a unidade de destino!' }); }
    if (!value) { res.json({ error: 'Por favor informe o valor para conversão!' }); }
    if (from === to) { res.json({ error: 'As unidades de origem e destino não podem ser iguais!' }); }

    if (!(from === "mph" || from === "fps" || from === "mps" || from === "kmh" || from === "kt")) {
      res.json({ error: `A medida de origem não pode ser ${from}!` });
    }
    if (!(to === "mph" || to === "fps" || to === "mps" || to === "kmh" || to === "kt")) {
      res.json({ error: `A medida de destino não pode ser ${to}!` });
    }

    if (from === 'mph' && to === 'fps') { convertedValue = parseFloat(value) * 1.467; }
    if (from === 'mph' && to === 'mps') { convertedValue = parseFloat(value) / 2.237; }
    if (from === 'mph' && to === 'kmh') { convertedValue = parseFloat(value) * 1.609; }
    if (from === 'mph' && to === 'kt') { convertedValue = parseFloat(value) * 1.151; }

    if (from === 'fps' && to === 'mph') { convertedValue = parseFloat(value) / 1.467; }
    if (from === 'fps' && to === 'mps') { convertedValue = parseFloat(value) / 3.281; }
    if (from === 'fps' && to === 'kmh') { convertedValue = parseFloat(value) * 1.097; }
    if (from === 'fps' && to === 'kt') { convertedValue = parseFloat(value) / 1.688; }

    if (from === 'mps' && to === 'mph') { convertedValue = parseFloat(value) * 2.237; }
    if (from === 'mps' && to === 'fps') { convertedValue = parseFloat(value) * 3.281; }
    if (from === 'mps' && to === 'kmh') { convertedValue = parseFloat(value) * 3.6; }
    if (from === 'mps' && to === 'kt') { convertedValue = parseFloat(value) * 1.944; }

    if (from === 'kmh' && to === 'mph') { convertedValue = parseFloat(value) / 1.609; }
    if (from === 'kmh' && to === 'fps') { convertedValue = parseFloat(value) / 1.097; }
    if (from === 'kmh' && to === 'mps') { convertedValue = parseFloat(value) / 3.6; }
    if (from === 'kmh' && to === 'kt') { convertedValue = parseFloat(value) / 1.852; }

    if (from === 'kt' && to === 'mph') { convertedValue = parseFloat(value) * 1.151; }
    if (from === 'kt' && to === 'fps') { convertedValue = parseFloat(value) * 1.688; }
    if (from === 'kt' && to === 'mps') { convertedValue = parseFloat(value) / 1.944; }
    if (from === 'kt' && to === 'kmh') { convertedValue = parseFloat(value) * 1.852; }

    const response = {
      unitFrom: from,
      unitTo: to,
      originalValue: parseFloat(value),
      convertedValue,
    }

    res.json(response);
  }
}