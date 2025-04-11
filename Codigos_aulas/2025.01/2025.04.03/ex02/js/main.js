window.addEventListener("DOMContentLoaded", () => {
    
    // Exemplos de Spread usando Array
    const vet1 = [10, 20, 30];
    const vet2 = [40, 50, 60];
    const vet3 = [...vet1, ...vet2];
    console.log(vet3);

    var x = Math.max(10,78,54);
    var y = Math.max(...vet1);
    console.log(x); // 78
    console.log(y); // 78

    // var a = vet[0];
    // var b = vet[1];
    // var c = vet[2];

    // Como realizar a atribuição acima utilizando o recurso de SPREAD do JavaScript?

    // [a,b,c] = [...vet];

    // console.log(a, b, c);

    // Exemplos de Spread com objetos
    const user1 = {nome:"Wilton", idade: 14};
    const user2 = {...user1};
    console.log(user2);
    const user3 = {...user1, sexo:"M"}
    console.log(user3);
    const user4 = {...user1, idade:20};
    console.log(user4);
});