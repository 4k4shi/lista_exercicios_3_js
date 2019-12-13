console.log("#Trazer o maior número dentre os números enviados pelo usuário");

let n1,n2,n3,n4,n5,maior;

n1 = prompt("Digite um número");
n2 = prompt("Digite outro número");
n3 = prompt("Digite outro número");
n4 = prompt("Digite outro número");
n5 = prompt("Digite outro número");

if(n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5){
	maior = n1;
}else if(n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5){
	maior = n2;
}else if(n3 > n4 && n3 > n1 && n3 > n2 && n3 > n5){
	maior = n3;
}else if(n4 > n5 && n4 > n3 && n4 > n1 && n4 > n5){
	maior = n4;
}else{
	maior = n5;
}

alert("Maior: "+n5);