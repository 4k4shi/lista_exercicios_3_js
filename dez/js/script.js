console.log("#Saudação");
const horaAtual = (function(){
	const dataAtual = new Date();
	return dataAtual.getHours();
})();

if(horaAtual >= 0 && horaAtual < 6){
	alert("Boa madrugada ( ͡° ͜ʖ ͡°)  \nSão exatemente " + horaAtual + " horas");
}else if(horaAtual >= 6 && horaAtual < 12){
	alert("Bom dia :) \nSão exatemente " + horaAtual + " horas");
}else if(horaAtual >= 12 && horaAtual < 6){
	alert("Boa tarde :D \nSão exatemente " + horaAtual + " horas");
}else{
	alert("Boa noite ;D \nSão exatemente " + horaAtual + " horas");
}
