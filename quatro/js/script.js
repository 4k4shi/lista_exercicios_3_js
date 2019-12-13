console.log("#Maiores e menores de idade");

let idades=new Array(),idade,cont=0,parar=false, maiores=0, menores=0,i=0;

while (parar != true) {
	idade = prompt("Digite uma idade");
	if(idade == "fim"){
		parar = true;
	}else{
		idades[cont] =idade;
	}
	console.log(idades);
	cont++;
}
for(;i<idades.length;i++){
	if(idades[i] > 18){
		maiores++;
	}else{
		menores++;
	}
}
alert("Maiores: "+maiores+"  Menores: "+menores);