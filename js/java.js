
function entrar(n){
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

    cse[9] == cpf.slice(9, 10) && cse[10] == cpf.slice(10, 11) ? window.location.href =  "urna.html?cpf=" + encodeURIComponent(cpf) : alert("Cpf inválido");

}
function cpfVer() {
    const urlParams = new URLSearchParams(window.location.search);
      const cpf = urlParams.get('cpf');

      // Define o valor do input com o CPF
      document.getElementById("cpfV").value = cpf;
}

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