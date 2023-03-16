function getTextServer() {
    var xhttp = new XMLHttpRequest();
    //var filename = "bd.txt";
    var filename = "user.json";
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
            // A instrução comentada abaixo será utilizada com o filename ="bd.txt"
            //document.getElementById("textServer").innerHTML = xhttp.responseText;
            document.getElementById("textServer").innerHTML = JSON.parse(xhttp.responseText).usuario;
        }
    };

    xhttp.open("GET", filename, true);
    xhttp.send();
}