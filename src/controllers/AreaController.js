//UNIDADES DISPONIVEIS
// sqft, m2, km2, mi2, yd2,in2, ha

module.exports = {
  async index(req, res) {

    const { from, to, value } = req.query;

    if (!from) { res.json({ error: 'Por favor informe a unidade de origem!' }); }
    if (!to) { res.json({ error: 'Por favor informe a unidade de destino!' }); }
    if (!value) { res.json({ error: 'Por favor informe o valor para conversão!' }); }
    if (from === to) { res.json({ error: 'As unidades de origem e destino não podem ser iguais!' }); }

    if (!(from === "sqft" || from === "m2" || from === "km2" || from === "mi2" || from === "yd2" || from === "in2" || from === "ha")) {
      res.json({ error: `A medida de origem não pode ser ${from}!` });
    }
    if (!(to === "sqft" || to === "m2" || to === "km2" || to === "mi2" || to === "yd2" || to === "in2" || to === "ha")) {
      res.json({ error: `A medida de destino não pode ser ${to}!` });
    }

    if (from === 'sqft' && to === 'm2') { convertedValue = parseFloat(value) / 10.764; }
    if (from === 'sqft' && to === 'km2') { convertedValue = parseFloat(value) / (1.076 * (10 ** 7)); }
    if (from === 'sqft' && to === 'mi2') { convertedValue = parseFloat(value) / (2.788 * (10 ** 7)); }
    if (from === 'sqft' && to === 'yd2') { convertedValue = parseFloat(value) / 9; }
    if (from === 'sqft' && to === 'in2') { convertedValue = parseFloat(value) * 144; }
    if (from === 'sqft' && to === 'ha') { convertedValue = parseFloat(value) / 107639; }

    if (from === 'm2' && to === 'sqft') { convertedValue = parseFloat(value) * 10.764; }
    if (from === 'm2' && to === 'km2') { convertedValue = parseFloat(value) / 1000000; }
    if (from === 'm2' && to === 'mi2') { convertedValue = parseFloat(value) / (2.59 * (10 ** 6)); }
    if (from === 'm2' && to === 'yd2') { convertedValue = parseFloat(value) * 1.196; }
    if (from === 'm2' && to === 'in2') { convertedValue = parseFloat(value) * 1550; }
    if (from === 'm2' && to === 'ha') { convertedValue = parseFloat(value) / 10000; }

    if (from === 'km2' && to === 'sqft') { convertedValue = parseFloat(value) * (1.076 * (10 ** 7)); }
    if (from === 'km2' && to === 'm2') { convertedValue = parseFloat(value) * 1000000; }
    if (from === 'km2' && to === 'mi2') { convertedValue = parseFloat(value) / 2.59; }
    if (from === 'km2' && to === 'yd2') { convertedValue = parseFloat(value) * (1.196 * (10 ** 6)); }
    if (from === 'km2' && to === 'in2') { convertedValue = parseFloat(value) * (1.55 * (10 ** 9)); }
    if (from === 'km2' && to === 'ha') { convertedValue = parseFloat(value) * 100; }

    if (from === 'mi2' && to === 'sqft') { convertedValue = parseFloat(value) * (2.788 * (10 ** 7)); }
    if (from === 'mi2' && to === 'm2') { convertedValue = parseFloat(value) * (2.59 * (10 ** 6)); }
    if (from === 'mi2' && to === 'km2') { convertedValue = parseFloat(value) * 2.59; }
    if (from === 'mi2' && to === 'yd2') { convertedValue = parseFloat(value) * (3.098 * (10 ** 6)); }
    if (from === 'mi2' && to === 'in2') { convertedValue = parseFloat(value) * (4.014 * (10 ** 9)) }
    if (from === 'mi2' && to === 'ha') { convertedValue = parseFloat(value) * 259; }

    if (from === 'yd2' && to === 'sqft') { convertedValue = parseFloat(value) * 9; }
    if (from === 'yd2' && to === 'm2') { convertedValue = parseFloat(value) / 1.196; }
    if (from === 'yd2' && to === 'km2') { convertedValue = parseFloat(value) / (1.196 * (10 ** 6)); }
    if (from === 'yd2' && to === 'mi2') { convertedValue = parseFloat(value) / (3.098 * (10 ** 6)); }
    if (from === 'yd2' && to === 'in2') { convertedValue = parseFloat(value) * 1296; }
    if (from === 'yd2' && to === 'ha') { convertedValue = parseFloat(value) / 11960; }

    if (from === 'in2' && to === 'sqft') { convertedValue = parseFloat(value) / 144; }
    if (from === 'in2' && to === 'm2') { convertedValue = parseFloat(value) / 1550; }
    if (from === 'in2' && to === 'km2') { convertedValue = parseFloat(value) / (1.55 * (10 ** 9)); }
    if (from === 'in2' && to === 'mi2') { convertedValue = parseFloat(value) / (4.014 * (10 ** 9)); }
    if (from === 'in2' && to === 'yd2') { convertedValue = parseFloat(value) / 1296; }
    if (from === 'in2' && to === 'ha') { convertedValue = parseFloat(value) / (1.55 * (10 ** 7)); }

    if (from === 'ha' && to === 'sqft') { convertedValue = parseFloat(value) * 107639; }
    if (from === 'ha' && to === 'm2') { convertedValue = parseFloat(value) * 10000; }
    if (from === 'ha' && to === 'km2') { convertedValue = parseFloat(value) / 100; }
    if (from === 'ha' && to === 'mi2') { convertedValue = parseFloat(value) / 259; }
    if (from === 'ha' && to === 'yd2') { convertedValue = parseFloat(value) * 11960; }
    if (from === 'ha' && to === 'in2') { convertedValue = parseFloat(value) * (1.55 * (10 ** 7)); }

    const response = {
      unitFrom: from,
      unitTo: to,
      originalValue: parseFloat(value),
      convertedValue,
    }

    res.json(response);
  }
}