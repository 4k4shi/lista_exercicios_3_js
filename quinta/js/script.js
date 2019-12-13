console.log("#Dados da data mostrados separadamente");

let data,dia,mes,ano;

data = prompt("Digite uma data");

dia = data.slice(0,2);
mes = data.slice(3,5);
ano = data.slice(6,10);

document.writeln("Dia: "+dia);
document.writeln("<br>Mês: "+mes);
document.writeln("<br>Ano: "+ano);