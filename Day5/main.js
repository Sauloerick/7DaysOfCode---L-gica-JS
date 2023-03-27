let frutas = [];
let vegetais = [];
let congelados = [];
let laticinios = [];
let limpeza = [];
let snacks = [];
let outros = [];

alert(`Vamos começar a sua lista de compras!`)

do{
    adicionar = prompt(`Gostaria de adicionar um item a sua lista? Sim ou Não?`);
    if (adicionar == 'sim' || adicionar == 'Sim'){
        item = prompt(`Qual item gostaria de adicionar?`);
        do {
            categoria = prompt(`Em qual categoria esse item se encaixa?\nFrutas\nVegetais\nCongelados\nLaticinios\nLimpeza\nSnack\nOutros`);
            if(categoria != 'frutas' && categoria != 'vegetais' && categoria != 'congelados' && categoria != 'laticinios' && categoria != 'limpeza' && categoria != 'snacks' && categoria != 'outos'){
                alert(`Categoria Inxistente`)
            }
        }while (categoria != 'frutas' && categoria != 'vegetais' && categoria != 'congelados' && categoria != 'laticinios' && categoria != 'limpeza' && categoria != 'snacks' && categoria != 'outos');
        eval(categoria).push(item);
    }    
} while ((adicionar === '' || adicionar === null) || (adicionar != 'não' && adicionar != 'Não' && adicionar != 'nao' && adicionar != 'Nao'));

alert(`Lista de compras:\nFrutas: ${frutas.join(", ")}\nVegetais: ${vegetais.join(", ")}\nCongelados: ${congelados.join(", ")}\nLaticínios: ${laticinios.join(", ")}\nLimpeza: ${limpeza.join(", ")}\nSnacks: ${snacks.join(", ")}\nOutros: ${outros.join(", ")}`);