console.log("#Nomes em ordem reversa");

let lista_Nomes="",ultimoNome="",continuar=true;

while (continuar) {
	ultimoNome = prompt("Digite um nome");
	if(ultimoNome.toUpperCase() == "FIM"){
		continuar = false;
	}else{
		lista_Nomes = ultimoNome+"\n"+lista_Nomes;
	}
}
alert(lista_Nomes);

	
