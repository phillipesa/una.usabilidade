function verificar(){
    var n1 = document.getElementById("n1").innerHTML;
    var n2 = document.getElementById("n2").value;

    if(n1 == n2){                
        document.getElementById("n2").classList.add("acerto");
        //alert("você acertou o número");
    }else{
        document.getElementById("n2").classList.add("erro");
        //alert("você errou o número");        
    }    
    setTimeout(() => {  gerarnumero(); }, 4000);   
}

function gerarnumero(){
    document.getElementById("n2").value = "";
    var numero = Math.floor(Math.random() * 100);
    document.getElementById("n2").classList.remove("erro");
    document.getElementById("n2").classList.remove("acerto");
    document.getElementById("n1").innerHTML = numero;
}