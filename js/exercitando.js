//todo em js é um objecto
const menu = {
    selector: '.principal'
}

console.log(menu.selector.toUpperCase())

//expressao - algo que vou atribuir a uma variavel
//essas funcoes nao sofrem hoisting


//desestruturaçao
//sem ela

function mouse(event) {
    console.log(event)
}

document.addEventListener('click', mouse)

//com ela


function mouse({clientY, clientX}) {
    console.log()
}

//desestruturar array
const frutas = ['banana', 'maça']
const [fruta1, fruta2] = frutas

//rest

function emp(empresa, ...clientes) {
    clientes.forEach((cliente) => {
        console.log(cliente, empresa)
    });
}

emp('facebook', 'er', 'francisco')