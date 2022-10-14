var operacao = null;
var resultado = 0;

function btn7(valor){
    console.log(valor);
}

function btn8(valor){
    console.log(valor);
}

function btn9(valor){
    var visor = document.getElementById("visor");
    
    if(operacao == null && visor.value != 0){
        visor.value += valor;
    }else{
        if(operacao == "/"){
            resultado = visor.value / valor;
            visor.value = valor;
        }
    }

    if(visor.value == 0){
        visor.value = valor;
    }
        
}

function btndiv(valor){
    var visor = document.getElementById("visor");
    operacao = valor;
}

function btnc(valor){
    var visor = document.getElementById("visor");
    visor.value = 0;
    operacao = null;
}


function btnig(){
    var visor = document.getElementById("visor");
    visor.value = resultado;
    operacao = null;    
}