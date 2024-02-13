let p1, p2;
let redefinido = false;
redefinir()

const valores = {
    "pedra x pedra": "Empate",
    "papel x papel": "Empate",
    "tesoura x tesoura": "Empate",
    "pedra x papel": "p2 win",
    "pedra x tesoura": "p1 win",
    "papel x pedra": "p1 win",
    "papel x tesoura": "p2 win",
    "tesoura x pedra": "p2 win",
    "tesoura x papel": "p1 win",
};

function escolhaP1(escolha){
    if(redefinido){
        document.getElementById('escolha1').innerText = 'escolheu';
        p1 = escolha;
        if(p2) display();        
    }

}

function escolhaP2(escolha){
    if(redefinido){
        document.getElementById('escolha2').innerText = 'escolheu';
        p2 = escolha;
        if(p1) display()        
    }

}

function display(){
    redefinido = false;
    var resultado = `${p1} x ${p2}`;
    document.getElementById('display').innerText =  valores[resultado];
}

function redefinir(){
    p1 = undefined;
    p2 = undefined;
    document.getElementById('display').innerText = 'Façam suas escolhas'
    document.getElementById('escolha1').innerText = ''
    document.getElementById('escolha2').innerText = ''
    redefinido = true;
}