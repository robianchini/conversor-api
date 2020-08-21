//UNIDADES DISPONIVEIS
// bit, kbit, mbit, gbit, tbit
// byte, kbyte, mbyte, gbyte, tbyte

module.exports = {
  async index(req, res) {

    const { from, to, value } = req.query;

    if (!from) { res.json({ error: 'Por favor informe a unidade de origem!' }); }
    if (!to) { res.json({ error: 'Por favor informe a unidade de destino!' }); }
    if (!value) { res.json({ error: 'Por favor informe o valor para conversão!' }); }
    if (from === to) { res.json({ error: 'As unidades de origem e destino não podem ser iguais!' }); }

    if (!(from === "bit" || from === "kbit" || from === "mbit" || from === "gbit" || from === 'tbit' || from === "byte" || from === "kbyte" || from === "mbyte" || from === "gbyte" || from === "tbyte")) {
      res.json({ error: `A medida de origem não pode ser ${from}!` });
    }
    if (!(from === "bit" || to === "kbit" || to === "mbit" || to === "gbit" || to === 'tbit' || to === "byte" || to === "kbyte" || to === "mbyte" || to === "gbyte" || to === "tbyte")) {
      res.json({ error: `A medida de destino não pode ser ${to}!` });
    }

    if (from === 'bit' && to === 'kbit') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'bit' && to === 'mbit') { convertedValue = parseFloat(value) / 1000000; }
    if (from === 'bit' && to === 'gbit') { convertedValue = parseFloat(value) / 1000000000; }
    if (from === 'bit' && to === 'tbit') { convertedValue = parseFloat(value) / 1000000000000; }
    if (from === 'bit' && to === 'byte') { convertedValue = parseFloat(value) / 8; }
    if (from === 'bit' && to === 'kbyte') { convertedValue = parseFloat(value) / 8000; }
    if (from === 'bit' && to === 'mbyte') { convertedValue = parseFloat(value) / 8000000; }
    if (from === 'bit' && to === 'gbyte') { convertedValue = parseFloat(value) / 8000000000; }
    if (from === 'bit' && to === 'tbyte') { convertedValue = parseFloat(value) / 8000000000000; }

    if (from === 'kbit' && to === 'bit') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'kbit' && to === 'mbit') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'kbit' && to === 'gbit') { convertedValue = parseFloat(value) / 1000000; }
    if (from === 'kbit' && to === 'tbit') { convertedValue = parseFloat(value) / 1000000000; }
    if (from === 'kbit' && to === 'byte') { convertedValue = parseFloat(value) * 125; }
    if (from === 'kbit' && to === 'kbyte') { convertedValue = parseFloat(value) / 8; }
    if (from === 'kbit' && to === 'mbyte') { convertedValue = parseFloat(value) / 8000; }
    if (from === 'kbit' && to === 'gbyte') { convertedValue = parseFloat(value) / 8000000; }
    if (from === 'kbit' && to === 'tbyte') { convertedValue = parseFloat(value) / 8000000000; }

    if (from === 'mbit' && to === 'bit') { convertedValue = parseFloat(value) * 1000000; }
    if (from === 'mbit' && to === 'kbit') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'mbit' && to === 'gbit') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'mbit' && to === 'tbit') { convertedValue = parseFloat(value) / 1000000; }
    if (from === 'mbit' && to === 'byte') { convertedValue = parseFloat(value) * 125000; }
    if (from === 'mbit' && to === 'kbyte') { convertedValue = parseFloat(value) * 125; }
    if (from === 'mbit' && to === 'mbyte') { convertedValue = parseFloat(value) / 8; }
    if (from === 'mbit' && to === 'gbyte') { convertedValue = parseFloat(value) / 8000; }
    if (from === 'mbit' && to === 'tbyte') { convertedValue = parseFloat(value) / 8000000; }

    if (from === 'gbit' && to === 'bit') { convertedValue = parseFloat(value) * 1000000000; }
    if (from === 'gbit' && to === 'kbit') { convertedValue = parseFloat(value) * 1000000; }
    if (from === 'gbit' && to === 'mbit') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'gbit' && to === 'tbit') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'gbit' && to === 'byte') { convertedValue = parseFloat(value) * (1.25 * (10 ** 8)); }
    if (from === 'gbit' && to === 'kbyte') { convertedValue = parseFloat(value) * 125000; }
    if (from === 'gbit' && to === 'mbyte') { convertedValue = parseFloat(value) * 125; }
    if (from === 'gbit' && to === 'gbyte') { convertedValue = parseFloat(value) / 8; }
    if (from === 'gbit' && to === 'tbyte') { convertedValue = parseFloat(value) / 8000; }

    if (from === 'tbit' && to === 'bit') { convertedValue = parseFloat(value) * 1000000000000; }
    if (from === 'tbit' && to === 'kbit') { convertedValue = parseFloat(value) * 1000000000; }
    if (from === 'tbit' && to === 'mbit') { convertedValue = parseFloat(value) * 1000000; }
    if (from === 'tbit' && to === 'gbit') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'tbit' && to === 'byte') { convertedValue = parseFloat(value) * (1.25 * (10 ** 11)); }
    if (from === 'tbit' && to === 'kbyte') { convertedValue = parseFloat(value) * (1.25 * (10 ** 8)); }
    if (from === 'tbit' && to === 'mbyte') { convertedValue = parseFloat(value) * 125000; }
    if (from === 'tbit' && to === 'gbyte') { convertedValue = parseFloat(value) * 125; }
    if (from === 'tbit' && to === 'tbyte') { convertedValue = parseFloat(value) / 8; }

    if (from === 'byte' && to === 'bit') { convertedValue = parseFloat(value) * 8; }
    if (from === 'byte' && to === 'kbit') { convertedValue = parseFloat(value) / 125; }
    if (from === 'byte' && to === 'mbit') { convertedValue = parseFloat(value) / 125000; }
    if (from === 'byte' && to === 'gbit') { convertedValue = parseFloat(value) / (1.25 * (10 ** 8)); }
    if (from === 'byte' && to === 'tbit') { convertedValue = parseFloat(value) / (1.25 * (10 ** 11)); }
    if (from === 'byte' && to === 'kbyte') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'byte' && to === 'mbyte') { convertedValue = parseFloat(value) / 1000000; }
    if (from === 'byte' && to === 'gbyte') { convertedValue = parseFloat(value) / 1000000000; }
    if (from === 'byte' && to === 'tbyte') { convertedValue = parseFloat(value) / 1000000000000; }

    if (from === 'kbyte' && to === 'bit') { convertedValue = parseFloat(value) * 8000; }
    if (from === 'kbyte' && to === 'kbit') { convertedValue = parseFloat(value) * 8; }
    if (from === 'kbyte' && to === 'mbit') { convertedValue = parseFloat(value) / 125; }
    if (from === 'kbyte' && to === 'gbit') { convertedValue = parseFloat(value) / 125000; }
    if (from === 'kbyte' && to === 'tbit') { convertedValue = parseFloat(value) / (1.25 * (10 ** 8)); }
    if (from === 'kbyte' && to === 'byte') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'kbyte' && to === 'mbyte') { convertedValue = parseFloat(value) / 1000000; }
    if (from === 'kbyte' && to === 'gbyte') { convertedValue = parseFloat(value) / 1000000000; }
    if (from === 'kbyte' && to === 'tbyte') { convertedValue = parseFloat(value) / 10000000000; }

    if (from === 'mbyte' && to === 'bit') { convertedValue = parseFloat(value) * 8000000; }
    if (from === 'mbyte' && to === 'kbit') { convertedValue = parseFloat(value) * 8000; }
    if (from === 'mbyte' && to === 'mbit') { convertedValue = parseFloat(value) * 8; }
    if (from === 'mbyte' && to === 'gbit') { convertedValue = parseFloat(value) / 125; }
    if (from === 'mbyte' && to === 'tbit') { convertedValue = parseFloat(value) / 125000; }
    if (from === 'mbyte' && to === 'byte') { convertedValue = parseFloat(value) * 1000000; }
    if (from === 'mbyte' && to === 'kbyte') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'mbyte' && to === 'gbyte') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'mbyte' && to === 'tbyte') { convertedValue = parseFloat(value) / 1000000; }

    if (from === 'gbyte' && to === 'bit') { convertedValue = parseFloat(value) * 8000000; }
    if (from === 'gbyte' && to === 'kbit') { convertedValue = parseFloat(value) * 8000000; }
    if (from === 'gbyte' && to === 'mbit') { convertedValue = parseFloat(value) * 8000; }
    if (from === 'gbyte' && to === 'gbit') { convertedValue = parseFloat(value) * 8; }
    if (from === 'gbyte' && to === 'tbit') { convertedValue = parseFloat(value) / 125; }
    if (from === 'gbyte' && to === 'byte') { convertedValue = parseFloat(value) * 1000000000; }
    if (from === 'gbyte' && to === 'kbyte') { convertedValue = parseFloat(value) * 1000000; }
    if (from === 'gbyte' && to === 'mbyte') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'gbyte' && to === 'tbyte') { convertedValue = parseFloat(value) / 1000; }

    if (from === 'tbyte' && to === 'bit') { convertedValue = parseFloat(value) * 8000000000000; }
    if (from === 'tbyte' && to === 'kbit') { convertedValue = parseFloat(value) * 8000000000; }
    if (from === 'tbyte' && to === 'mbit') { convertedValue = parseFloat(value) * 8000000; }
    if (from === 'tbyte' && to === 'gbit') { convertedValue = parseFloat(value) * 8000; }
    if (from === 'tbyte' && to === 'tbit') { convertedValue = parseFloat(value) * 8; }
    if (from === 'tbyte' && to === 'byte') { convertedValue = parseFloat(value) * 1000000000000; }
    if (from === 'tbyte' && to === 'kbyte') { convertedValue = parseFloat(value) * 1000000000; }
    if (from === 'tbyte' && to === 'mbyte') { convertedValue = parseFloat(value) * 1000000; }
    if (from === 'tbyte' && to === 'gbyte') { convertedValue = parseFloat(value) * 1000; }


    const response = {
      unitFrom: from,
      unitTo: to,
      originalValue: parseFloat(value),
      convertedValue,
    }

    res.json(response);
  }
}