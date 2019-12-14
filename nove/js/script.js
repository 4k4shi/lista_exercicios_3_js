console.log("#Nome e caractere especifico");

let nome,caractere;


nome = prompt("Digite seu nome completo");
caractere = prompt("Digite um número");

if(caractere <= 0){
	alert("ERRO: Esse caracteretere não pode ser encontrado");
}else{
	alert(caractere+"º: "+nome.charAt(caractere-1));
}


