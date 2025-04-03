window.addEventListener("DOMContentLoaded", () => {

    // Exemplo: spread com array
    const spreadEx01 = () => {
        const vet = [1, 2, 3];
        const newVet = [...vet, 4, 5, 6];
        console.log(newVet); // [1, 2, 3, 4, 5, 6]
    }

    // Exemplo: spread com objeto
    const spreadEx02 = () => {
        const user = { nome: "Wilton", idade: 44 };
        const newUser = { ...user, cidade: "Uberlandia" };
        console.log(newUser);
    }

    // Exemplo: spread com funcao
    const spreadEx03 = () => {
        const numeros = [10, 20, 30];
        function soma(a, b, c) {
            return a + b + c;
        }
        console.log(soma(...numeros));
    }

    spreadEx01();
    spreadEx02();
    spreadEx03();

})