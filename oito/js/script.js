console.log("#Verificação completa do nome");

let nome,separado, aceito = true;


nome = prompt("Digite seu nome completo");

if(nome.slice(3) == " "){
	console.log("Não tem 4 letras mínimas no primeiro nome");
	aceito = false;
}

for (let i=0;i<nome.length;i++) {
	if (nome.charAt(i) == '0' || nome.charAt(i) == '1' || nome.charAt(i) == '2'  || nome.charAt(i) == '3' || nome.charAt(i) == '4' || nome.charAt(i) == '5' || 
		nome.charAt(i) == '6' || nome.charAt(i) == '7' || nome.charAt(i) == '7' || nome.charAt(i) == '8' || nome.charAt(i) == '9'){
		console.log("Tem um número entre as palavras-> "+nome.charAt(i));
		aceito = false;
	}
}

separado = nome.split(" ");
for (let i = 0;i < separado.length; i++) {
	if(separado[i] != "da"){
		if(separado[i] != "de"){
			if(separado[i] != "do"){
				let letra = separado[i].charAt(0);
				if(letra != letra.toUpperCase()){
					console.log("Nome ou sobrenome não iniciam com letra maiúscula");
					console.log(separado[i]);
					aceito = false;
				}
			}
		}
	}
}

if(aceito){
	alert("Válido");
}else{
	alert("Inválido");
}