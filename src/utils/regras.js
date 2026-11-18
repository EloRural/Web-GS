export function gerarAlertas(sensor, clima) {
  const alertas = []
  if (sensor.temperatura >= 35)
    alertas.push({ id: 'calor', titulo: 'Calor extremo', nivel: 'alto', texto: 'Calor extremo no campo. Proteja as plantas e reforce a irrigação.' })
  if (sensor.temperatura <= 5 || (clima && clima.min <= 3))
    alertas.push({ id: 'geada', titulo: 'Risco de geada', nivel: 'alto', texto: 'Risco de geada. Cubra as mudas mais sensíveis.' })
  if (sensor.umidade < 40)
    alertas.push({ id: 'seco', titulo: 'Ar muito seco', nivel: 'medio', texto: 'Ar muito seco: as plantas perdem água mais rápido.' })
  if (sensor.umidade > 85)
    alertas.push({ id: 'umido', titulo: 'Umidade alta', nivel: 'medio', texto: 'Umidade muito alta: risco de fungos nas folhas.' })
  if (clima && clima.chuvaProb >= 70)
    alertas.push({ id: 'chuva', titulo: 'Chuva forte hoje', nivel: 'medio', texto: 'Chuva forte prevista. Evite irrigar e adubar hoje.' })
  if (clima && clima.vento >= 40)
    alertas.push({ id: 'vento', titulo: 'Vento forte', nivel: 'medio', texto: 'Vento forte previsto. Proteja estruturas e mudas.' })
  return alertas
}

export function recomendarIrrigacao(sensor, clima) {
  if (clima && clima.chuvaProb >= 60)
    return { titulo: 'Não irrigar hoje', motivo: 'Há grande chance de chuva. Economize água.' }
  if (sensor.temperatura >= 30 && sensor.umidade < 50)
    return { titulo: 'Irrigar cedo, com mais água', motivo: 'Está quente e seco. Regue de manhã para perder menos água.' }
  if (sensor.umidade < 60)
    return { titulo: 'Irrigação leve', motivo: 'O ar está um pouco seco. Uma rega curta resolve.' }
  return { titulo: 'Sem necessidade agora', motivo: 'As condições estão boas para as plantas.' }
}

export function nivelRisco(alertas) {
  if (alertas.some((a) => a.nivel === 'alto')) return 'Alto'
  return alertas.length > 0 ? 'Atenção' : 'Baixo'
}
