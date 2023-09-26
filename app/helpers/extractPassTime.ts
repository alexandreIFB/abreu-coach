export function extractPassTime(dataInicial: string, dataFinal: string) {
  // Converta as datas com horários para objetos Date
  const data1 = new Date(dataInicial);
  const data2 = new Date(dataFinal);

  // Calcule a diferença em milissegundos
  const diferencaEmMilissegundos = Math.abs(data2.getTime() - data1.getTime());

  // Converta a diferença em milissegundos para dias
  const dias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

  return dias;
}
