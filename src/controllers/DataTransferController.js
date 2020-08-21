//UNIDADES DISPONIVEIS
// bps, kbps, mbps, gbps, tbps
// kBps, mBps, gBps, tBps

module.exports = {
  async index(req, res) {

    const { from, to, value } = req.query;

    if (!from) { res.json({ error: 'Por favor informe a unidade de origem!' }); }
    if (!to) { res.json({ error: 'Por favor informe a unidade de destino!' }); }
    if (!value) { res.json({ error: 'Por favor informe o valor para conversão!' }); }
    if (from === to) { res.json({ error: 'As unidades de origem e destino não podem ser iguais!' }); }

    if (!(from === "bps" || from === "kbps" || from === "mbps" || from === "gbps" || from === "tbps" || from === "kBps" || from === "mBps" || from === "gBps" || from === "tBps")) {
      res.json({ error: `A medida de origem não pode ser ${from}!` });
    }
    if (!(to === "bps" || to === "kbps" || to === "mbps" || to === "gbps" || to === "tbps" || to === "kBps" || to === "mBps" || to === "gBps" || to === "tBps")) {
      res.json({ error: `A medida de destino não pode ser ${to}!` });
    }

    if (from === 'bps' && to === 'kbps') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'bps' && to === 'mbps') { convertedValue = parseFloat(value) / 1000000; }
    if (from === 'bps' && to === 'gbps') { convertedValue = parseFloat(value) / 1000000000; }
    if (from === 'bps' && to === 'tbps') { convertedValue = parseFloat(value) / 1000000000000; }
    if (from === 'bps' && to === 'kBps') { convertedValue = parseFloat(value) / 8000; }
    if (from === 'bps' && to === 'mBps') { convertedValue = parseFloat(value) / 8000000; }
    if (from === 'bps' && to === 'gBps') { convertedValue = parseFloat(value) / 8000000000; }
    if (from === 'bps' && to === 'tBps') { convertedValue = parseFloat(value) / 8000000000000; }

    if (from === 'kbps' && to === 'bps') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'kbps' && to === 'mbps') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'kbps' && to === 'gbps') { convertedValue = parseFloat(value) / 1000000; }
    if (from === 'kbps' && to === 'tbps') { convertedValue = parseFloat(value) / 1000000000; }
    if (from === 'kbps' && to === 'kBps') { convertedValue = parseFloat(value) / 8; }
    if (from === 'kbps' && to === 'mBps') { convertedValue = parseFloat(value) / 8000; }
    if (from === 'kbps' && to === 'gBps') { convertedValue = parseFloat(value) / 8000000; }
    if (from === 'kbps' && to === 'tBps') { convertedValue = parseFloat(value) / 8000000000; }

    if (from === 'kBps' && to === 'bps') { convertedValue = parseFloat(value) * 8000; }
    if (from === 'kBps' && to === 'mbps') { convertedValue = parseFloat(value) / 125; }
    if (from === 'kBps' && to === 'gbps') { convertedValue = parseFloat(value) / 125000; }
    if (from === 'kBps' && to === 'tbps') { convertedValue = parseFloat(value) / (1.25 * (10 ** 8)); }
    if (from === 'kBps' && to === 'mBps') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'kBps' && to === 'gBps') { convertedValue = parseFloat(value) / 1000000; }
    if (from === 'kBps' && to === 'tBps') { convertedValue = parseFloat(value) / 1000000000; }

    if (from === 'mbps' && to === 'bps') { convertedValue = parseFloat(value) * 1000000; }
    if (from === 'mbps' && to === 'kbps') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'mbps' && to === 'gbps') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'mbps' && to === 'tbps') { convertedValue = parseFloat(value) / 1000000; }
    if (from === 'mbps' && to === 'kBps') { convertedValue = parseFloat(value) * 125; }
    if (from === 'mbps' && to === 'mBps') { convertedValue = parseFloat(value) / 8; }
    if (from === 'mbps' && to === 'gBps') { convertedValue = parseFloat(value) / 8000; }
    if (from === 'mbps' && to === 'tBps') { convertedValue = parseFloat(value) / 8000000; }

    if (from === 'mBps' && to === 'bps') { convertedValue = parseFloat(value) * 8000000; }
    if (from === 'mBps' && to === 'mbps') { convertedValue = parseFloat(value) * 8; }
    if (from === 'mBps' && to === 'gbps') { convertedValue = parseFloat(value) / 125; }
    if (from === 'mBps' && to === 'tbps') { convertedValue = parseFloat(value) / 125000; }
    if (from === 'mBps' && to === 'kBps') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'mBps' && to === 'gBps') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'mBps' && to === 'tBps') { convertedValue = parseFloat(value) / 1000000; }

    if (from === 'gbps' && to === 'bps') { convertedValue = parseFloat(value) * 1000000000; }
    if (from === 'gbps' && to === 'kbps') { convertedValue = parseFloat(value) * 1000000; }
    if (from === 'gbps' && to === 'mbps') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'gbps' && to === 'tbps') { convertedValue = parseFloat(value) / 1000; }
    if (from === 'gbps' && to === 'kBps') { convertedValue = parseFloat(value) * 125000; }
    if (from === 'gbps' && to === 'mBps') { convertedValue = parseFloat(value) * 125; }
    if (from === 'gbps' && to === 'gBps') { convertedValue = parseFloat(value) / 8; }
    if (from === 'gbps' && to === 'tBps') { convertedValue = parseFloat(value) / 8000; }

    if (from === 'gBps' && to === 'bps') { convertedValue = parseFloat(value) * 8000000000; }
    if (from === 'gBps' && to === 'mbps') { convertedValue = parseFloat(value) * 8000; }
    if (from === 'gBps' && to === 'gbps') { convertedValue = parseFloat(value) * 8; }
    if (from === 'gBps' && to === 'tbps') { convertedValue = parseFloat(value) / 125; }
    if (from === 'gBps' && to === 'kBps') { convertedValue = parseFloat(value) * 1000000; }
    if (from === 'gBps' && to === 'mBps') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'gBps' && to === 'tBps') { convertedValue = parseFloat(value) / 1000; }

    if (from === 'tbps' && to === 'bps') { convertedValue = parseFloat(value) * 1000000000000; }
    if (from === 'tbps' && to === 'kbps') { convertedValue = parseFloat(value) * 1000000000; }
    if (from === 'tbps' && to === 'mbps') { convertedValue = parseFloat(value) * 1000000; }
    if (from === 'tbps' && to === 'gbps') { convertedValue = parseFloat(value) * 1000; }
    if (from === 'tbps' && to === 'kBps') { convertedValue = parseFloat(value) * (1.25 * (10 ** 8)); }
    if (from === 'tbps' && to === 'mBps') { convertedValue = parseFloat(value) * 125000; }
    if (from === 'tbps' && to === 'gBps') { convertedValue = parseFloat(value) * 125; }
    if (from === 'tbps' && to === 'tBps') { convertedValue = parseFloat(value) / 8; }

    if (from === 'tBps' && to === 'bps') { convertedValue = parseFloat(value) * 8000000000000; }
    if (from === 'tBps' && to === 'mbps') { convertedValue = parseFloat(value) * 8000000; }
    if (from === 'tBps' && to === 'gbps') { convertedValue = parseFloat(value) * 8000; }
    if (from === 'tBps' && to === 'tbps') { convertedValue = parseFloat(value) * 8; }
    if (from === 'tBps' && to === 'kBps') { convertedValue = parseFloat(value) * 1000000000; }
    if (from === 'tBps' && to === 'mBps') { convertedValue = parseFloat(value) * 1000000; }
    if (from === 'tBps' && to === 'gBps') { convertedValue = parseFloat(value) * 1000; }

    const response = {
      unitFrom: from,
      unitTo: to,
      originalValue: parseFloat(value),
      convertedValue,
    }

    res.json(response);
  }
}