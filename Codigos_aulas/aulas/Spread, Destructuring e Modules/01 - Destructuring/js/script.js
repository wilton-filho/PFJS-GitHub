window.addEventListener("DOMContentLoaded", () => {


    //--------------- Destructuring em Arrays --------------
    const destructuringEx01 = () => {
        const numeros = [10, 20, 30];

        // Extraindo os valores usando destructuring
        const [a, b, c] = numeros;

        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
    }

    const destructuringEx02 = () => {
        const cores = ["vermelho", "azul", "verde"];

        // Pula o primeiro item
        const [, cor2] = cores;

        console.log(cor2); // "azul"
    }

    const destructuringEx03 = () => {
        const cores = ["vermelho", "azul", "verde"];

        // Pula o primeiro item
        const [, ...cor2] = cores;

        console.log(cor2); // ["azul", "verde"];
    }

    destructuringEx01();
    destructuringEx02();
    destructuringEx03();

    //--------------- Destructuring em Objetos --------------

    const destructuringEx04 = () => {

        const pessoa = {
            nome: "João",
            idade: 25,
            cidade: "São Paulo"
        };

        // Extraindo propriedades (os nomes importam, mas a ordem não)
        const { cidade, idade } = pessoa;

        console.log(cidade);  // "São Paulo"
        console.log(idade); // 25        
    }

    destructuringEx04();

    // Alterando os nomes dos atributos
    const destructuringEx05 = () => {
        const usuario = {
            username: "devMaster",
            email: "dev@example.com"
        };

        // Renomeando ao extrair
        const { username: user, email } = usuario;

        console.log(user); // "devMaster"
        console.log(email);         // "dev@example.com"        
    }
    destructuringEx05();

    const destructuringEx06 = () => {
        const produto = {
            nome: "Notebook",
            preco: 3000
        };

        // Se "estoque" não existir, assume o valor padrão 10
        // Se "nome" existir faz a atribuição do objeto, caso contrário da atribuição para o valor "tela"
        const { nome = "tela", preco, estoque = 10 } = produto;

        console.log(estoque); // 10
    }
    destructuringEx06();


})