//UNIDADES DISPONIVEIS
// mg, g, kg, ton, lb oz

module.exports = {
  async index(req, res) {

    const { from, to, value } = req.query;

    if (!from) { res.json({ error: 'Por favor informe a unidade de origem!' }); }
    if (!to) { res.json({ error: 'Por favor informe a unidade de destino!' }); }
    if (!value) { res.json({ error: 'Por favor informe o valor para conversão!' }); }
    if (from === to) { res.json({ error: 'As unidades de origem e destino não podem ser iguais!' }); }

    if (!(from === "kg" || from === "lb")) {
      res.json({ error: `A medida de origem não pode ser ${from}!` });
    }
    if (!(to === "kg" || to === "lb")) {
      res.json({ error: `A medida de destino não pode ser ${to}!` });
    }

    if (from === 'mg' && to === 'g') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'mg' && to === 'kg') { convertedValue = parseFloat(value) / 1000000; }
    if (from === 'mg' && to === 'ton') { convertedValue = parseFloat(value) / 1000000000; }
    if (from === 'mg' && to === 'lb') { convertedValue = parseFloat(value) / 453592; }
    if (from === 'mg' && to === 'oz') { convertedValue = parseFloat(value) / 28350; }

    if (from === 'g' && to === 'mg') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'g' && to === 'kg') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'g' && to === 'ton') { convertedValue = parseFloat(value) / 1000000; }
    if (from === 'g' && to === 'lb') { convertedValue = parseFloat(value) / 454; }
    if (from === 'g' && to === 'oz') { convertedValue = parseFloat(value) / 28.35; }

    if (from === 'kg' && to === 'mg') { convertedValue = parseFloat(value) * 1000000; }
    if (from === 'kg' && to === 'g') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'kg' && to === 'ton') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'kg' && to === 'lb') { convertedValue = parseFloat(value) * 2.205; }
    if (from === 'kg' && to === 'oz') { convertedValue = parseFloat(value) * 35.27; }

    if (from === 'ton' && to === 'mg') { convertedValue = parseFloat(value) * 1000000000; }
    if (from === 'ton' && to === 'g') { convertedValue = parseFloat(value) * 1000000; }
    if (from === 'ton' && to === 'kg') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'ton' && to === 'lb') { convertedValue = parseFloat(value) * 2205; }
    if (from === 'ton' && to === 'oz') { convertedValue = parseFloat(value) * 35274; }

    if (from === 'lb' && to === 'mg') { convertedValue = parseFloat(value) * 453592; }
    if (from === 'lb' && to === 'g') { convertedValue = parseFloat(value) * 454; }
    if (from === 'lb' && to === 'kg') { convertedValue = parseFloat(value) / 2.205; }
    if (from === 'lb' && to === 'ton') { convertedValue = parseFloat(value) / 2205; }
    if (from === 'lb' && to === 'oz') { convertedValue = parseFloat(value) * 16; }

    if (from === 'oz' && to === 'mg') { convertedValue = parseFloat(value) * 28350; }
    if (from === 'oz' && to === 'g') { convertedValue = parseFloat(value) * 28.35; }
    if (from === 'oz' && to === 'kg') { convertedValue = parseFloat(value) / 35.274; }
    if (from === 'oz' && to === 'ton') { convertedValue = parseFloat(value) / 35274; }
    if (from === 'oz' && to === 'lb') { convertedValue = parseFloat(value) / 16; }

    const response = {
      unitFrom: from,
      unitTo: to,
      originalValue: parseFloat(value),
      convertedValue,
    }

    res.json(response);
  }
}