console.log("#Calcular a média de diversas notas");

let nota = 0, notas = 0, contador = 0, media =0, cfm = false;

do{
	nota = prompt("Digite um número");
	if(nota === "fim"){
		cfm = confirm("Encerrando o cálculo de médias ...");
		if(cfm == false){
			nota = 0;
		}
	}else{
		contador++;
		notas += Number(nota); 
		media = notas/contador; 
		if(media > 0 || media <= 0){
			alert("Média:"+media);	
		}
		
	}
}
while(nota != "fim");
console.log("obg ...");