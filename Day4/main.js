var num = Math.floor(Math.random() * 10) + 1;
var i = 0;

alert(`Vamos começar!\nVocê tem 3 tentativas para tentar adivinhar um número de 1 a 10`);

do{
    i+=1;
    var guess = prompt(`Qual número estou pensando?`);
    if (guess!=num && i<3){
        alert(`Errou! Tente outra vez`);
    } else if(guess==num){
        alert(`PARABÉNS! Você acertou!`);
    } else {
        alert(`Tentativas esgotadas! O número em que eu estava pensando era ${num}\nPor favor reinicie a página para tentar novamente.`);
    }
}while (guess!=num && i!=3);
