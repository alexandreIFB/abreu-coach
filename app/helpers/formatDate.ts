export function formatDate(date: string){
  const data = new Date(date);
  const dia = data.getDate();
  const mes = data.getMonth() + 1; // Os meses são baseados em zero, então adicionamos 1
  const ano = data.getFullYear();

  // Garante que o dia e o mês tenham dois dígitos
  const diaFormatado = dia < 10 ? `0${dia}` : dia;
  const mesFormatado = mes < 10 ? `0${mes}` : mes;

  return `${diaFormatado}/${mesFormatado}/${ano}`;
}
