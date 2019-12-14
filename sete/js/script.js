console.log("#Solicitação do nome");

let nome,nomeSemEspaco="",cont;

nome = prompt("Digite seu nome completo");
cont = nome.split(" ");


for(let i=0;i<cont.length;i++){
	nomeSemEspaco += cont[i];
}

alert("QUANTIDADE\nNome com espaço: "+nome.length+" caracters\nNomes sem espaço(os): "+nomeSemEspaco.length+" caracteres");