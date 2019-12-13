console.log("#");

let nomes=" ",nome=" ",copia,parar=false;

while (parar != true) {
	nome = prompt("Digite um nome");
	if(nome == "fim"){
		parar = true;
	}else{
		copia = nomes+" ";
		nomes = nome+" "+nomes;
	}
}
alert(nomes);

	
