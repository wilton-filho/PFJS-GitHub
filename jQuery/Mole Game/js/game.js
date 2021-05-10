// Ordem do tabuleiro conforme o nível de dificuldade selecionado pelo usuario
const $levelHouses = {"easy":3,"medium":5,"difficult":7,"veryDifficult":9};
// Dimensoes da toupeira (obtidos a partir do arquivo). Sugestão: automatizar
const $imgWidth = 100; 
const $imgHeigth = 80;
const $imgStatus = {"none":"buraco","active":"toupeira","dead":"morreu"};
var $chronoGame; // Controla as imagens do jogo
var $chronoTime; // Controla o cronometro
var $timePanelInfo = 3; // Cronometro do painel de informacoes
const $initialTime = 10; // Tempo do jogo
var $currentTime = $initialTime;
const $spaceHole = 60; // Espaco entre os  buracos

$(document).ready(function(){
    fillBoard();
    btnsDefaultGame();
    $("#time").text($initialTime);
    $("#btnPlay").click(function(){$.when(alertWifi("",true,3,"img/toupeira.gif")).done(function(){playGame()})});
    $("#btnPause").click(function(){pauseGame()});
    $("#btnStop").click(function(){endGame()});
    $("#btnSair").click(function(){window.open("index.html","_self")});
});
function playGame() {
    btnsPlayGame();
    $chronoGame = setInterval(startGame,1180);
    $chronoTime = setInterval(startTime,1000);
}
function btnsDefaultGame() {
    $("#btnPlay").prop("disabled",false);
    $("#btnPause").prop("disabled",true);
    $("#btnStop").prop("disabled",true);
    $("#level").prop("disabled",false);
}
function btnsPlayGame() {
    $("#btnPlay").prop("disabled",true);
    $("#btnPause").prop("disabled",false);
    $("#btnStop").prop("disabled",false);
    $("#level").prop("disabled",true);
}
function startTime() {
    ($currentTime > 0)?$("#time").text(--$currentTime):endGame();
}
function endGame() {
    $currentTime=$initialTime;
    clearInterval($chronoTime);
    clearInterval($chronoGame);
    fillBoard();
    alertWifi(`Fim de Jogo! Pontuação: ${$("#score").text()}`,false,0,"img/buraco.gif");
    $("#score").text("0");
    $("#time").text($currentTime);
    btnsDefaultGame();
}
function pauseGame() {
    clearInterval($chronoGame);
    clearInterval($chronoTime);
    fillBoard();
    $("#btnPlay").prop("disabled",false);
    $("#btnPause").prop("disabled",true);
}
// Define a dimensão do tabuleiro conforme o nivel de dificuldade selecionado pelo usuario
function fillBoard() {
    $level = getLevel();
    $boardWidth = ($imgWidth + $spaceHole) * $level;
    $boardHeigth = $imgHeigth * $level;
    $(".board").css({"width":$boardWidth+5,"height":$boardHeigth+5});
    placeImgsBoard($level);
}
// Coloca as imagens do jogo no tabuleiro
function placeImgsBoard($level) {
    // Limpa o tabuleiro primeiro
    $(".board").empty();
    for ($i=0; $i<Math.pow($level,2); $i++) {
        $div1 = $("<div></div>").attr("id",`div_img_${$i+1}`);
        $img = $("<img>").attr({"src":`img/${$imgStatus.none}.gif`,"id":`img_${$i+1}`});
        $($img).click(function(){updateScore(this)});
        $($div1).css({"width":$imgWidth+$spaceHole,"height":$imgHeigth});
        $($div1).addClass("imgBoard");
        $($div1).append($img);
        $(".board").append($div1);
    }
}
// Atualiza a pontuação ao clicar sobre a toupeira
function updateScore($idImg) {
    if ($($idImg).attr("src").search($imgStatus.active)!=-1) {
        $("#score").text(String(parseInt($("#score").text())+1));
        $($idImg).attr("src",`img/${$imgStatus.dead}.gif`);
    }
}
// Inicia o jogo apos clicar sobre o botao "Iniciar Jogo"
function startGame() {
    fillBoard();
    $level = getLevel();
    $randomNumber = getRandomNumber(1,Math.pow($level,2));
    $(`#img_${$randomNumber}`).attr("src",`img/${$imgStatus.active}.gif`);
}
// Gera um numero aleatorio entre "min" e "max"
function getRandomNumber(min, max) {
    return Math.round((Math.random() * Math.abs(max - min)) + min);
}

function getLevel() {
    return $levelHouses[$("#level").val()];
}
