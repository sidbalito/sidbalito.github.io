let p1, p2;
let redefinido = false;
let modoRobô1, modoRobô2
const OPÇÕES = ['pedra', 'papel', 'tesoura']
redefinir()

const valores = {
    "pedra x pedra": "Empate",
    "papel x papel": "Empate",
    "tesoura x tesoura": "Empate",
    "pedra x papel": "Jogador 2 venceu",
    "pedra x tesoura": "Jogador 1 venceu",
    "papel x pedra": "Jogador 1 venceu",
    "papel x tesoura": "Jogador 2 venceu",
    "tesoura x pedra": "Jogador 2 venceu",
    "tesoura x papel": "Jogador 1 venceu",
};

function escolha(jogador, escolha){
    let elemento = null
    switch(jogador){
        case 'p1':
            elemento = escolha1
            p1 = escolha
            botões1.style.display = 'none'
            botões2.style.display = 'block'
            escolha1.innerText = ''
            escolha2.innerText = 'Aguardando...'
            if(p2) display()
            if(modoRobô2)
                setTimeout(jogadaRobô, 3000, 'p2')
            break
        case 'p2':
            elemento = escolha2
            p2 = escolha
            escolha2.innerText = ''
            botões2.style.display = 'none'
            if(p1) display()
            break
    }
    //elemento.innerText =  'escolheu'
}

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
    escolha1.innerText = p1
    escolha2.innerText = p2
    var resultado = `${p1} x ${p2}`;
    document.getElementById('display').innerText =  valores[resultado];
}

function redefinir(){
    p1 = undefined;
    p2 = undefined;
    funçãoModoRobô(humano1)
    funçãoModoRobô(humano2)
    funçãoModoRobô(robô1)
    funçãoModoRobô(robô2)
    exibeModoRobô(humano1, robô1)
    exibeModoRobô(humano2, robô2)
    document.getElementById('display').innerText = 'Façam suas escolhas'
    document.getElementById('escolha1').innerText = 'Aguardando...'
    document.getElementById('escolha2').innerText = ''
    while(botões1.firstChild) botões1.removeChild(botões1.firstChild) 
    while(botões2.firstChild) botões2.removeChild(botões2.firstChild)
    botões1.style.display = 'block'
    botões2.style.display = 'none'
    embaralha(OPÇÕES).forEach((item)=>adicionaBotão(botões1, 'p1', item))
    embaralha(OPÇÕES).forEach((item)=>adicionaBotão(botões2, 'p2', item))
    if(modoRobô1) 
        setTimeout(jogadaRobô, 3000, 'p1')
    redefinido = true;
}

function jogadaRobô(jogador){
    escolha(jogador, OPÇÕES[(Math.random()*(OPÇÕES.length-1)).toFixed(0)])
}

function funçãoModoRobô(elemento){
    elemento.onclick = ()=>{
        switch(elemento){
            case humano1:
                alteraModoRobô('p1', false)
                break
            case humano2:
                alteraModoRobô('p2', false)
                break
            case robô1:
                alteraModoRobô('p1', true)
                break
            case robô2:
                alteraModoRobô('p2', true)
                break
        }        
    }
}

function alteraModoRobô(jogador, flag){
    switch(jogador){
        case 'p1':
            modoRobô1 = flag
            exibeModoRobô(humano1, robô1, modoRobô1)
            break
        case 'p2':
            modoRobô2 = flag
            exibeModoRobô(humano2, robô2, modoRobô2)
            break
    }
}

function exibeModoRobô(humano, robô, modo){
    humano.src = modo ? 'garoto-mono.png' : 'garoto.png'
    humano.title = modo ? 'Humano (desativado)' : 'Humano'
    robô.src = modo ? 'robo.png' : 'robo-mono.png'
    robô.title = modo ? 'Robô' : 'Robô (desativado)'
}

function adicionaBotão(div, jogador, s){
    let botão = document.createElement('button')
    switch(jogador){
        case 'p1': botão.onclick = ()=>escolha(jogador, s)
            break
        case 'p2': botão.onclick = ()=>escolha(jogador, s)
            break 
    }
    botão.innerText = s
    div.appendChild(botão)
  }

  function embaralha(original){
    matriz = [...original]
    let retorno = []
    while(matriz.length > 0){
      retorno.push(matriz.splice(Math.random() * matriz.length, 1))
    }
    return retorno
  }