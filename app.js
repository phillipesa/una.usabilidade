/*
formulario de cadastro de usuário


*/

// Var dados usuário
var nome = "Phillipe";


function fazerAcao(elemento){
    document.getElementById('area').innerHTML 
        = prompt('Informe um texto:'); 
    elemento.innerHTML = 'alterado';
}

function concatNomeSobrenome(nome, sobrenome){
    document.getElementById('area').innerHTML 
        = nome +" "+sobrenome;
}


function adicionarItens(){
    var item = document.getElementById("itens").value;

    var lista = document.getElementById("lista");

    var listahtml = lista.innerHTML;

    listahtml = listahtml + "<li>"+item+"</li>";

    lista.innerHTML = listahtml;
}

function soma(){
    var v1 = parseInt(document.getElementById("valor1").value);
    var v2 = parseInt(document.getElementById("valor2").value);

    alert(v1+v2);
}


function condicionais(){

    var val1 = 5;
    var val2 = 7;
    
    if(val1<val2)
        console.log("sim " + val1 + " é menor que " +val2);

    if(val1<=val2)
        console.log("sim " + val1 + " é menor que " +val2);

    if(val1>val2)
        console.log("não " + val2 + " é maior que " +val1);

    if(val1>=val2)
        console.log("não " + val2 + " é maior que " +val1);

    if(val1==val2)
        console.log("não " + val2 + " não é igual  " +val1);

    if(val1!=val2)
        console.log("sim " + val2 + " é diferente de " +val1);

}


function loops(){

    var x = 0;    

    console.log("Loop while");

    while(x < 10){
        console.log(x);
        x++;
    }

    console.log("Loop for");

    for(x=0;x<10;x++){
        console.log(x);
    }


}


function loopsif(){

    var x = 0;    

    console.log("Loop while if");

    while(x < 10){
        if(x <= 5){
            console.log(x + " é menor ou igual que 5");
        }else{
            console.log(x + " é maior que 5");
        }        
        x++;
    }


    console.log("Loop for if");

    for(x=0;x<10;x++){
                
        if(x <= 5){
            if(x == 0){
                console.log("Números menores ou igual a 5");    
            }            
            console.log(x + " é menor ou igual que 5");
        }
            
        if(x >= 5){
            if(x == 6){
                console.log("Números maiores que 5");    
            }
            console.log(x + " é maior que 5");
        }
        
    }

}


function verificarSwitch(){
    var valor = document.getElementById("valorSwitch");
    console.log(valor.value);
    switch (valor.value){
        case "0":
            valor.value = "valor foi zero";
            break;
        case "1":
            valor.value = "valor foi um";
            break;
        case "2":
            valor.value = "valor foi dois";
            break;
        default:
            valor.value = "informe o valor";
            break;
    }
}