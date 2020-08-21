//UNIDADES DISPONIVEIS
// mm, cm, m, km yd, ft, in, nm, mi

module.exports = {
  async index(req, res) {

    const { from, to, value } = req.query;

    if (!from) { res.json({ error: 'Por favor informe a unidade de origem!' }); }
    if (!to) { res.json({ error: 'Por favor informe a unidade de destino!' }); }
    if (!value) { res.json({ error: 'Por favor informe o valor para conversão!' }); }
    if (from === to) { res.json({ error: 'As unidades de origem e destino não podem ser iguais!' }); }

    if (!(from === "mm" || from === "cm" || from === "m" || from === "km" || from === "yd" || from === "ft" || from === "in" || from === "nm" || from === "mi")) {
      res.json({ error: `A medida de origem não pode ser ${from}!` });
    }
    if (!(to === "mm" || to === "cm" || to === "m" || to === "km" || to === "yd" || to === "ft" || to === "in" || to === "nm" || to === "mi")) {
      res.json({ error: `A medida de destino não pode ser ${to}!` });
    }

    if (from === 'mm' && to === 'cm') { convertedValue = parseFloat(value) / 10; }
    if (from === 'mm' && to === 'm') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'mm' && to === 'km') { convertedValue = parseFloat(value) / 1000000; }
    if (from === 'mm' && to === 'mi') { convertedValue = parseFloat(value) / (1.609 * (10 ** 6)); }
    if (from === 'mm' && to === 'yd') { convertedValue = parseFloat(value) / 914; }
    if (from === 'mm' && to === 'ft') { convertedValue = parseFloat(value) / 305; }
    if (from === 'mm' && to === 'in') { convertedValue = parseFloat(value) / 24.5; }
    if (from === 'mm' && to === 'nm') { convertedValue = parseFloat(value) / (1.852 * (10 ** 6)); }

    if (from === 'cm' && to === 'mm') { convertedValue = parseFloat(value) * 10; }
    if (from === 'cm' && to === 'm') { convertedValue = parseFloat(value) / 100; }
    if (from === 'cm' && to === 'km') { convertedValue = parseFloat(value) / 100000; }
    if (from === 'cm' && to === 'mi') { convertedValue = parseFloat(value) / 160934; }
    if (from === 'cm' && to === 'yd') { convertedValue = parseFloat(value) / 91.44; }
    if (from === 'cm' && to === 'ft') { convertedValue = parseFloat(value) / 30.48; }
    if (from === 'cm' && to === 'in') { convertedValue = parseFloat(value) / 2.54; }
    if (from === 'cm' && to === 'nm') { convertedValue = parseFloat(value) / 185200; }

    if (from === 'm' && to === 'mm') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'm' && to === 'cm') { convertedValue = parseFloat(value) * 100; }
    if (from === 'm' && to === 'km') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'm' && to === 'mi') { convertedValue = parseFloat(value) / 1609; }
    if (from === 'm' && to === 'yd') { convertedValue = parseFloat(value) * 1.094; }
    if (from === 'm' && to === 'ft') { convertedValue = parseFloat(value) * 3.281; }
    if (from === 'm' && to === 'in') { convertedValue = parseFloat(value) * 39.37; }
    if (from === 'm' && to === 'nm') { convertedValue = parseFloat(value) / 1852; }

    if (from === 'km' && to === 'mm') { convertedValue = parseFloat(value) * 1000000; }
    if (from === 'km' && to === 'cm') { convertedValue = parseFloat(value) * 100000; }
    if (from === 'km' && to === 'm') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'km' && to === 'mi') { convertedValue = parseFloat(value) / 1.609; }
    if (from === 'km' && to === 'yd') { convertedValue = parseFloat(value) * 1094; }
    if (from === 'km' && to === 'ft') { convertedValue = parseFloat(value) * 3281; }
    if (from === 'km' && to === 'in') { convertedValue = parseFloat(value) * 39370; }
    if (from === 'km' && to === 'nm') { convertedValue = parseFloat(value) / 1.852; }

    if (from === 'mi' && to === 'mm') { convertedValue = parseFloat(value) * (1.609 * (10 ** 6)); }
    if (from === 'mi' && to === 'cm') { convertedValue = parseFloat(value) * 160934; }
    if (from === 'mi' && to === 'm') { convertedValue = parseFloat(value) * 1609; }
    if (from === 'mi' && to === 'km') { convertedValue = parseFloat(value) * 1.609; }
    if (from === 'mi' && to === 'yd') { convertedValue = parseFloat(value) * 1760; }
    if (from === 'mi' && to === 'ft') { convertedValue = parseFloat(value) * 5280; }
    if (from === 'mi' && to === 'in') { convertedValue = parseFloat(value) * 63360; }
    if (from === 'mi' && to === 'nm') { convertedValue = parseFloat(value) / 1.151; }

    if (from === 'yd' && to === 'mm') { convertedValue = parseFloat(value) * 914; }
    if (from === 'yd' && to === 'cm') { convertedValue = parseFloat(value) * 91.44; }
    if (from === 'yd' && to === 'm') { convertedValue = parseFloat(value) / 1.094; }
    if (from === 'yd' && to === 'km') { convertedValue = parseFloat(value) / 1094; }
    if (from === 'yd' && to === 'mi') { convertedValue = parseFloat(value) / 1760; }
    if (from === 'yd' && to === 'ft') { convertedValue = parseFloat(value) * 3; }
    if (from === 'yd' && to === 'in') { convertedValue = parseFloat(value) * 36; }
    if (from === 'yd' && to === 'nm') { convertedValue = parseFloat(value) / 2025; }

    if (from === 'ft' && to === 'mm') { convertedValue = parseFloat(value) * 304.8; }
    if (from === 'ft' && to === 'cm') { convertedValue = parseFloat(value) * 30.48; }
    if (from === 'ft' && to === 'm') { convertedValue = parseFloat(value) / 3.281; }
    if (from === 'ft' && to === 'km') { convertedValue = parseFloat(value) / 3281; }
    if (from === 'ft' && to === 'mi') { convertedValue = parseFloat(value) / 5280; }
    if (from === 'ft' && to === 'yd') { convertedValue = parseFloat(value) / 3; }
    if (from === 'ft' && to === 'in') { convertedValue = parseFloat(value) * 12; }
    if (from === 'ft' && to === 'nm') { convertedValue = parseFloat(value) / 6076; }

    if (from === 'in' && to === 'mm') { convertedValue = parseFloat(value) * 25.4; }
    if (from === 'in' && to === 'cm') { convertedValue = parseFloat(value) * 2.54; }
    if (from === 'in' && to === 'm') { convertedValue = parseFloat(value) / 39.37; }
    if (from === 'in' && to === 'km') { convertedValue = parseFloat(value) / 39370; }
    if (from === 'in' && to === 'mi') { convertedValue = parseFloat(value) / 63360; }
    if (from === 'in' && to === 'yd') { convertedValue = parseFloat(value) / 36; }
    if (from === 'in' && to === 'ft') { convertedValue = parseFloat(value) / 12; }
    if (from === 'in' && to === 'nm') { convertedValue = parseFloat(value) / 72913; }

    if (from === 'nm' && to === 'mm') { convertedValue = parseFloat(value) * (1.852 * (10 ** 6)); }
    if (from === 'nm' && to === 'cm') { convertedValue = parseFloat(value) * 185200; }
    if (from === 'nm' && to === 'm') { convertedValue = parseFloat(value) * 1852; }
    if (from === 'nm' && to === 'km') { convertedValue = parseFloat(value) * 1.852; }
    if (from === 'nm' && to === 'mi') { convertedValue = parseFloat(value) * 1.151; }
    if (from === 'nm' && to === 'yd') { convertedValue = parseFloat(value) * 2025; }
    if (from === 'nm' && to === 'ft') { convertedValue = parseFloat(value) * 6076; }
    if (from === 'nm' && to === 'in') { convertedValue = parseFloat(value) * 72913; }

    const response = {
      unitFrom: from,
      unitTo: to,
      originalValue: parseFloat(value),
      convertedValue,
    }

    res.json(response);
  }
}