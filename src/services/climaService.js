// API meteorológica Open-Meteo 
export async function buscarClima(lat, lon) {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    '&current=temperature_2m,relative_humidity_2m,wind_speed_10m' +
    '&daily=precipitation_probability_max,temperature_2m_min,temperature_2m_max' +
    '&timezone=auto&forecast_days=1'
  const resposta = await fetch(url)
  if (!resposta.ok) throw new Error('Não foi possível buscar a previsão do tempo')
  const d = await resposta.json()
  return {
    temperatura: d.current.temperature_2m,
    umidade: d.current.relative_humidity_2m,
    vento: d.current.wind_speed_10m,
    chuvaProb: d.daily.precipitation_probability_max[0],
    min: d.daily.temperature_2m_min[0],
    max: d.daily.temperature_2m_max[0],
  }
}
