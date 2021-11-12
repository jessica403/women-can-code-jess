//Ao contrário das strings, as entradas dos arrays são mutáveis e podem 
//ser alteradas livremente, mesmo que o array tenha sido declarado com const.

const meuArray = [23, 44, 98];
//o valor 23 acima vai ser alterado pelo 45 abaixo
meuArray[0] = 45;

console.log(meuArray);
