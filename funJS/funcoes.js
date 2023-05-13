function entrar(){
    var cpf = document.getElementById("cpf").value;
    var cse = [];
    var num = 0;

    var ind = 0;
    var soma1 = 10;
    var res1 = 0;
    var dig1 = 0;

    for(var i = 1; i < 10; i++){
        num = cpf.slice(ind,i);
        cse += num;
        res1 += num * soma1;
        soma1--;
        ind++;
        
    }
    var resto1 = res1 % 11;
    resto1 < 2 ? dig1 = 0 : dig1 = 11 - resto1;
    cse += dig1;

    var ind2 = 0;
    var soma2 = 11;
    var res2 = 0;
    var dig2 = 0;
    for(var i = 0; i < 10; i++){
        num = cse[i];
        res2 += num * soma2;
        soma2--;
        ind2++;
    }

    var resto2 = res2 % 11;
    resto2 < 2 ? dig2 = 0 : dig2 = 11 - resto2;
    cse += dig2;

    for (var inc = 0; inc < 11; inc++){

    }

    cpf != '11111111111' && cpf != '22222222222' && cpf != '33333333333' && cpf != '44444444444' && cpf != '55555555555' && cpf != '66666666666' && cpf != '77777777777' && cpf != '88888888888' && cpf != '99999999999' && cpf != '00000000000' && cpf != '19100000000' ? cse[9] == cpf.slice(9, 10) && cse[10] == cpf.slice(10, 11) ? window.location.href =  "senador.html?cpf=" + encodeURIComponent(cpf) : (alert("Cpf inválido"), document.getElementById("cpf").value = "") : (alert("Cpf inválido"), document.getElementById("cpf").value = "");

    

}
function cpfVer() {
    const urlParams = new URLSearchParams(window.location.search);
      const cpf = urlParams.get('cpf');
      document.getElementById("cpfV").value = cpf;
}

function limpar(){
    document.getElementById("img").src = "img/usu.png";
    var texto = "";
    document.getElementById("nomeCan").innerHTML = texto;
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value = "";
    v2.value = "";
    var v3 = document.getElementById("txtV3");
    v3.value = "";
}

function branco(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var v3 = document.getElementById("txtV3");
    v1.value = "";
    v2.value = "";
    v3.value = "";
    document.getElementById("img").src = "img/usu.png";
    var texto = "Branco";
    document.getElementById("nomeCan").innerHTML = texto;
}

//senador
function umS(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var v3 = document.getElementById("txtV3");
    var mancha = "PSTU<br />Mancha Coletivo Socialista";
    var prof = "PCB<br />Prof. Tito Bellini";
    v1.value == "" ? v1.value = 1 : v2.value == "" ? v2.value = 1 : v3.value == "" ?  (v3.value = 1, v1.value == 1 && v2.value == 6 && v3.value == 1 ? (document.getElementById("img").src = "img/senadores/mancha.png", document.getElementById("nomeCan").innerHTML = mancha) : v1.value == 2 && v2.value == 1 && v3.value == 1 ? (document.getElementById("img").src = "img/senadores/prof.jpeg", document.getElementById("nomeCan").innerHTML = prof) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

function doisS(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var v3 = document.getElementById("txtV3");
    var astro = "PL<br />Astronauta Marcos Pontes";
    v1.value == "" ? v1.value = 2 : v2.value == "" ? v2.value = 2 : v3.value == "" ? (v3.value = 2, v1.value == 2 && v2.value == 2 && v3.value == 2 ? (document.getElementById("img").src = "img/senadores/astronauta.png", document.getElementById("nomeCan").innerHTML = astro) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

function tresS(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var v3 = document.getElementById("txtV3");
    var aldo = "PDT<br />Aldo Rebelo";
    v1.value == "" ? v1.value = 3 : v2.value == "" ? v2.value = 3 : v3.value == "" ? (v3.value = 3, v1.value == 1 && v2.value == 2 && v3.value == 3 ? (document.getElementById("img").src = "img/senadores/aldo.jpg", document.getElementById("nomeCan").innerHTML = aldo) : document.getElementById("nomeCan").innerHTML = "Nulo" ) : 0;
}

function quatroS(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var v3 = document.getElementById("txtV3");
    v1.value == "" ? v1.value = 4 : v2.value == "" ? v2.value = 4 : v3.value == "" ? v3.value = 4 : 0;
}

function cincoS(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var v3 = document.getElementById("txtV3");
    var edson = "MDB<br />Edson Aparecido"
    v1.value == "" ? v1.value = 5 : v2.value == "" ? v2.value = 5 : v3.value == "" ? (v3.value = 5, v1.value == 1 && v2.value == 5 && v3.value == 5 ? (document.getElementById("img").src = "img/senadores/edsonap.jpg", document.getElementById("nomeCan").innerHTML = edson) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

function seisS(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var v3 = document.getElementById("txtV3");
    v1.value == "" ? v1.value = 6 : v2.value == "" ? v2.value = 6 : v3.value == "" ? v3.value = 6 : 0;
}

function seteS(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var v3 = document.getElementById("txtV3");
    var janaina = "PRTB<br />Janaina Paschoal";
    v1.value == "" ? v1.value = 7 : v2.value == "" ? v2.value = 7 : v3.value == "" ? (v3.value = 7, v1.value == 2 && v2.value == 8 && v3.value == 7 ? (document.getElementById("img").src = "img/senadores/janaina.png", document.getElementById("nomeCan").innerHTML = janaina) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

function oitoS(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var v3 = document.getElementById("txtV3");
    v1.value == "" ? v1.value = 8 : v2.value == "" ? v2.value = 8 : v3.value == "" ? v3.value = 8 : 0;
}

function noveS(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var v3 = document.getElementById("txtV3");
    v1.value == "" ? v1.value = 9 : v2.value == "" ? v2.value = 9 : v3.value == "" ? v3.value = 9 : 0;
}

function zeroS(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var v3 = document.getElementById("txtV3");
    var dr = "DC<br />Dr. Azkoul";
    var ricardo = "NOVO<br />Ricardo Mellão";
    var marcio = "PSB<br />Marcio França";
    var vivian = "UP<br />Vivian Mendes";
    v1.value == "" ? v1.value = 0 : v2.value == "" ? v2.value = 0 : v3.value == "" ? (v3.value = 0, v1.value == 2 && v2.value == 7 && v3.value == 0 ? (document.getElementById("img").src = "img/senadores/dr.jpeg", document.getElementById("nomeCan").innerHTML = dr) : v1.value == 3 && v2.value == 0 && v3.value == 0 ? (document.getElementById("img").src = "img/senadores/ricardomel.jpg", document.getElementById("nomeCan").innerHTML = ricardo) : v1.value == 4 && v2.value == 0 && v3.value == 0 ? (document.getElementById("img").src = "img/senadores/marciofran.jpg", document.getElementById("nomeCan").innerHTML = marcio) : v1.value == 8 && v2.value == 0 && v3.value == 0 ? (document.getElementById("img").src = "img/senadores/vivianm.jfif", document.getElementById("nomeCan").innerHTML = vivian) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

//governador
function umG(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var gabriel = "PCB<br />Gabriel Colombo";
    v1.value == "" ? v1.value = 1 : v2.value == "" ? (v2.value = 1, v1.value == 2 && v2.value == 1 ? (document.getElementById("img").src = "img/governadores/gabriel.png", document.getElementById("nomeCan").innerHTML = gabriel) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

function doisG(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var texto = "PDT<br />Elvis Cezar";
    v1.value == "" ? v1.value = 2 : v2.value == "" ? (v2.value = 2, v1.value == 2 && v2.value == 2 ? (document.getElementById("img").src = "img/governadores/elvis.png", document.getElementById("nomeCan").innerHTML = texto) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

function tresG(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var texto = "PT<br />Fernando Haddad";
    v1.value == "" ? v1.value = 3 : v2.value == "" ? (v2.value = 3, v1.value == 1 && v2.value == 3 ? (document.getElementById("img").src = "img/governadores/haddad.jpg", document.getElementById("nomeCan").innerHTML = texto) : document.getElementById("nomeCan").innerHTML = "Nulo") :0;
}

function quatroG(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value == "" ? v1.value = 4 : v2.value == "" ? (v2.value = 4, v1.value != "" && v2.value != "" ? document.getElementById("nomeCan").innerHTML = "Nulo" : 0) : 0;
}

function cincoG(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var rodrigo = "PSDB<br />Rodrigo Garcia";
    v1.value == "" ? v1.value = 5 : v2.value == "" ? (v2.value = 5, v1.value == 4 && v2.value == 5 ? (document.getElementById("img").src = "img/governadores/rodrigo.jfif", document.getElementById("nomeCan").innerHTML = rodrigo) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

function seisG(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var altino = "PSTU<br />Altino";
    v1.value == "" ? v1.value = 6 : v2.value == "" ? (v2.value = 6, v1.value == 1 && v2.value == 6 ? (document.getElementById("img").src = "img/governadores/altino.jpeg", document.getElementById("nomeCan").innerHTML = altino) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

function seteG(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var antonio = "DC<br />Antônio Jorge"
    v1.value == "" ? v1.value = 7 : v2.value == "" ? (v2.value = 7, v1.value == 2 && v2.value == 7 ? (document.getElementById("img").src = "img/governadores/antonio.jfif", document.getElementById("nomeCan").innerHTML = antonio) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

function oitoG(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value == "" ? v1.value = 8 : v2.value == "" ? (v2.value = 8, v1.value != "" && v2.value != "" ? document.getElementById("nomeCan").innerHTML = "Nulo" : 0) : 0;
}

function noveG(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var edson = "PCO<br />Edson Dorta";
    v1.value == "" ? v1.value = 9 : v2.value == "" ? (v2.value = 9, v1.value == 2 && v2.value == 9 ? (document.getElementById("img").src = "img/governadores/edson.jfif", document.getElementById("nomeCan").innerHTML = edson) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

function zeroG(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var tarcisio = "REPUBLICANOS<br />Tarcísio";
    var vinicius = "NOVO<br />Vinícius Poit";
    var carol = "UP<br />Carol Vigliar";
    v1.value == "" ? v1.value = 0 : v2.value == "" ? (v2.value = 0, v1.value == 1 && v2.value == 0 ? (document.getElementById("img").src = "img/governadores/tarcisio.jpg", document.getElementById("nomeCan").innerHTML = tarcisio) : v1.value == 3 && v2.value == 0 ? (document.getElementById("img").src = "img/governadores/vinicius.jfif", document.getElementById("nomeCan").innerHTML = vinicius) : v1.value == 8 && v2.value == 0 ? (document.getElementById("img").src = "img/governadores/carol.jpeg", document.getElementById("nomeCan").innerHTML = carol) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

//presidente 
function umP(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var sofia = "PCB<br />Sofia Manzano"
    v1.value == "" ? v1.value = 1 : v2.value == "" ? (v2.value = 1, v1.value == 2 && v2.value == 1 ? (document.getElementById("img").src = "img/presidentes/sofia.jpeg", document.getElementById("nomeCan").innerHTML = sofia) : v1.value != "" && v2.value != "" ? document.getElementById("nomeCan").innerHTML = "Nulo" : 0) : 0;
}

function doisP(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var jair = "PL<br />Jair Bolsonaro";
    var ciro = "PDT<br />Ciro Gomes";
    v1.value == "" ? v1.value = 2 : v2.value == "" ? (v2.value = 2, v1.value == 1 && v2 == 2 ? (document.getElementById("img").src = "img/presidentes/ciro.jpg", document.getElementById("nomeCan").innerHTML = ciro) : v1.value == 2 && v2.value == 2 ? (document.getElementById("img").src = "img/presidentes/bolso.jfif", document.getElementById("nomeCan").innerHTML = jair) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

function tresP(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var texto = "PT<br />Lula";
    v1.value == "" ? v1.value = 3 : v2.value == "" ? (v2.value = 3, v1.value == 1 && v2.value == 3 ? (document.getElementById("img").src = "img/presidentes/lula.jpg", document.getElementById("nomeCan").innerHTML = texto) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

function quatroP(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var padre = "PTB<br />Padre Kelmon";
    var soraya = "UNIÃO BRASIL<br />Soraya Thronicke";
    v1.value == "" ? v1.value = 4 : v2.value == "" ? (v2.value = 4, v1.value == 1 && v2.value == 4 ? (document.getElementById("img").src = "img/presidentes/candidatopadre.jpeg", document.getElementById("nomeCan").innerHTML = padre) : v1.value == 4 && v2.value == 4 ? (document.getElementById("img").src = "img/presidentes/soraya.png", document.getElementById("nomeCan").innerHTML = soraya) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

function cincoP(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var simone = "MDB<br />Simone Tebet";
    v1.value == "" ? v1.value = 5 : v2.value == "" ? (v2.value = 5, v1.value == 1 && v2.value == 5 ? (document.getElementById("img").src = "img/presidentes/simone.png", document.getElementById("nomeCan").innerHTML = simone) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

function seisP(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var v = "PSTU<br />Vera";
    v1.value == "" ? v1.value = 6 : v2.value == "" ? (v2.value = 6, v1.value == 1 && v2.value == 6 ? (document.getElementById("img").src = "img/presidentes/vera.jpeg", document.getElementById("nomeCan").innerHTML = v) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

function seteP(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var eymael = "Constintuinte Eymael";
    v1.value == "" ? v1.value = 7 : v2.value == "" ? (v2.value = 7, v1.value == 2 && v2.value == 7 ? (document.getElementById("img").src = "img/presidentes/eymael.jpeg", document.getElementById("nomeCan").innerHTML = eymael) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}

function oitoP(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value == "" ? v1.value = 8 : v2.value == "" ? (v2.value = 8, v1.value != "" && v2.value != "" ? document.getElementById("nomeCan").innerHTML = "Nulo" : 0) : 0;
}

function noveP(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    v1.value == "" ? v1.value = 9 : v2.value == "" ? (v2.value = 9, v1.value != "" && v2.value != "" ? document.getElementById("nomeCan").innerHTML = "Nulo" : 0): 0;
}

function zeroP(){
    var v1 = document.getElementById("txtV1");
    var v2 = document.getElementById("txtV2");
    var felipe = "Felipe D'Avila";
    var leop = "Léo Pericles";
    v1.value == "" ? v1.value = 0 : v2.value == "" ? (v2.value = 0, v1.value == 3 && v2.value == 0 ? (document.getElementById("img").src = "img/presidentes/felipe.jfif", document.getElementById("nomeCan").innerHTML = felipe) : v1.value == 8 && v2.value == 0 ? (document.getElementById("img").src = "img/presidentes/leoper.png", document.getElementById("nomeCan").innerHTML = leop) : document.getElementById("nomeCan").innerHTML = "Nulo") : 0;
}