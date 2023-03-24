var area;
var aprender;
var escolha;
var tecnologias;
var lista=[];

const nome = prompt("Qual o seu nome?");
const msg = `Olá ${nome}, vamos começar!`;
alert(msg);

do {
    area = prompt("Qual área gostaria de seguir?\n1. Front-End\n2. Back-End");
} while ((area === '' || area === null) || area != 1 && area != 2);

if(area==1){
    do {
        var aprender = prompt("Você escolheu Front-End, qual tecnologia gostaria de aprender?\n1. React\n2. Vue");
    } while ((aprender === '' || aprender === null) || aprender != 1 && aprender != 2);
    if (aprender == 1){
        aprender = "React";
    }else {
        aprender = "Vue";
    }
} else{
    do {
        var aprender = prompt("Você escolheu Back-End, qual tecnologia gostaria de aprender?\n1. C#\n2. Java");
    } while ((aprender === '' || aprender === null) || aprender != 1 && aprender != 2);
    if (aprender == 1){
        aprender = "C#";
    }else {
        aprender = "Java";
    }
}

do {
    escolha = prompt(`${nome} o que você gostaria de fazer?\n1. Seguir se especializando em ${aprender}\n2. Se desenvolver para se tornar Fullstack.`);
} while ((escolha === '' || escolha === null) || escolha != 1 && escolha != 2);

if (escolha == 1){
    alert(`Você já deu seus primeiros passos para se tornar um especialista em ${aprender} continue estudando e você chegara lá!`)
}else {
    alert(`Um desenvolvedor Fullstack precisa conhecer tudo que envolve a área de desenvolvimento, continue expandindo sua gama de aprendizado e logo você conseguirá!`)
}

do{
    do{
        tecnologias = prompt(`Em quais outras tecnologias você gostaria de se especializar ou de conhecer?`);
        lista.push(tecnologias);
    } while (tecnologias === '' || tecnologias === null);
    alert(`Para entender ${tecnologias} devemos primeiro compreender ${tecnologias}.`);
}while(confirm("Tem mais alguma tecnologia que você gostaria de aprender?"));

//alert(`${lista}`)
