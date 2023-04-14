function limpar(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value = "";
    v2.value = "";
    document.getElementById("img").src = "img/branco.png";
}

function branco(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value = "";
    v2.value = "";
    document.getElementById("img").src = "img/branco.png";
}

function um(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value == "" ? v1.value = 1 : (v2.value != "" ? v2.value : (v1.value != "" ? v2.value = 1 : v2.value));
}

function dois(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value == "" ? v1.value = 2 : (v1.value != "" ? (v2.value = 2, document.getElementById("img").src = "img/bolso.jpg") : v2.value);
}

function tres(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value == "" ? v1.value = 3 : (v1.value != "" ? (v2.value = 3, document.getElementById("img").src = "img/lula.jpg") : v2.value);

    
}

function quatro(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value == "" ? v1.value = 4 : (v2.value != "" ? v2.value : (v1.value != "" ? v2.value = 4 : v2.value));
}

function cinco(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value == "" ? v1.value = 5 : (v2.value != "" ? v2.value : (v1.value != "" ? v2.value = 5 : v2.value));
}

function seis(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value == "" ? v1.value = 6 : (v2.value != "" ? v2.value : (v1.value != "" ? v2.value = 6 : v2.value));
}

function sete(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value == "" ? v1.value = 7 : (v2.value != "" ? v2.value : (v1.value != "" ? v2.value = 7 : v2.value));
}

function oito(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value == "" ? v1.value = 8 : (v2.value != "" ? v2.value : (v1.value != "" ? v2.value = 8 : v2.value));
}

function nove(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value == "" ? v1.value = 9 : (v2.value != "" ? v2.value : (v1.value != "" ? v2.value = 9 : v2.value));
}

function zero(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value == "" ? v1.value = 0 : (v2.value != "" ? v2.value : (v1.value != "" ? v2.value = 0 : v2.value));
}