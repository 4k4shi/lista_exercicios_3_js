console.log("#Solicitação do nome");

let nome,nomeSemEspaco,cont;

nome = prompt("Digite seu nome completo");

nomeSemEspaco = nome.replace(" ","");

alert("QUANTIDADE-> Nome com espaço: "+nome.length+" caracters"
	+
	" /Nomes sem caracters: "+nomeSemEspaco.length+" caracteres");