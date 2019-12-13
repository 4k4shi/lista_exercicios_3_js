console.log("#Nome e caractere especifico");

let nome,carac;


nome = prompt("Digite seu nome completo");
carac = prompt("Digite um número");

if(carac <= 0){
	alert("ERRO: Esse caractere não pode ser encontrado");
}else{
	alert(carac+"º: "+nome.charAt(carac-1));
}


