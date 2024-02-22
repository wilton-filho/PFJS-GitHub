window.addEventListener("load", function () {
    // parImpar(3);
    // parImpar(30);
    parImpar(parseInt(Math.random()*10))
});

parImpar = x => {
    console.log(x);
    (x%2==0)?console.log("Par"):console.log("Impar");
}
