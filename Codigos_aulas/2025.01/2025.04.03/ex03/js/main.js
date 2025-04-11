// Destructuring (desestruturação) em JavaScript
window.addEventListener("DOMContentLoaded", () => {
    const vet = [10,20,30];

    // Desestruturação usando vetor
    const [a, b, c] = vet;

    console.log(a);
    console.log(b);
    console.log(c);

    // Desestruturação usando objeto
    const user1 = {nome:"Wilton", idade: 14, sexo: "M"};
    const {nome, ...newUser} = user1;

    console.log(newUser);

    // var {nome, idade} = user1;
    // nome = "maria";
    // nome = "maria";
    console.log(nome); 
    // console.log(idade); 
    // console.log(idade); 


        
});