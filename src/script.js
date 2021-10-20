/* calculateSalary
Sabendo que um vendedor de uma loja recebe uma comissão de 3% sobre o
total das vendas até R$ 1.200,00 mais 5% sobre o que ultrapassar este valor.
Crie uma função que receba o salário fixo e o valor das vendas efetuadas pelo vendedor.
E então calcule e retorne  o seu salário total.
comissão 3% vendas de até 1.200,00
comissão de 5% acima de 1.200,00
funcao salario fixo e vendas
calcular salario con comissão
*/
function calculateSalary(salario, vendas) {
	let soma = 0;

	if (vendas <= 1200) {
		let comissao = 3 / 100 * vendas
		soma = salario + comissao;
	} else {
		let comissao = 5 / 100 * vendas
		soma = salario + comissao;
	}
	return soma
}
console.log(calculateSalary(1500, 3000))

// /*### calculateStock
// Dada a quantidade de estoque de uma loja de produtos. 
// Crie uma função que receba a quantidade atual em estoque,
// quantidade máxima em estoque e quantidade mínima em estoque de um produto, 
// calcule quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2)
//  dos produtos. E se a quantidade em estoque for maior ou igual à quantidade média, 
//  retorne a mensagem 'Não efetuar compra', senão 'Efetuar compra'.*/
function calculateStock(qntdAtual, qtndMax, qntdMin) {
	let media = qtndMax + qntdMin / 2;
	if (qntdAtual >= media) {
		return 'Não efetuar a compra'
	} else {
		return 'Efetuar compra'
	}
	return media
}
console.log(calculateStock(3000))

/*### calculateAge
Crie uma função  que  receba  o  ano  de  nascimento  de  uma  pessoa  e  o  ano  atual, 
 calcule  e  retorne:
1. a idade dessa pessoa em anos;
2. a idade dessa pessoa em meses;
3. a idade dessa pessoa em dias;
4. a idade dessa pessoa em semanas;*/
function calculateAge(dataNasc, anoAtual) {
	let anos = anoAtual - dataNasc;
	let meses = anos * 12;
	let dias = meses * 30;
	let semanas = dias / 7;
	return anos + ' '+ meses +' '+ dias +' '+ semanas +' '
}
console.log(calculateAge(1993, 2021))

/*### getDiagonal
Crie uma função que receba uma matriz quadrada NxN e retorne um vetor com sua diagonal principal.
  Ex: matriz = [ [1, 2, 3] , [4, 5, 6] , [7, 8, 9] ], saída => 1, 5, 9

### cashMachine
Cria uma função que receba um inteiro que representa o valor de um saque em reais (R$)
. Apresente a composição desse valor pelas notas existentes. Sempre opte primeiro por 
notas de maior valor. Exemplo de Interação Digite o valor do saque: 383. Dinheiro retirado:
1. 3 nota(s) de R$ 100;
2. 1 nota(s) de R$ 50;
3. 1 nota(s) de R$ 20;
4. 1 nota(s) de R$ 10;
5. 1 nota(s) de R$ 2;
6. 1 nota(s) de R$ 1;

*/
