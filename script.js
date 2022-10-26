const enviarAlimento = document.getElementById("enviarProduto");// aqui eu pego o input enviado pelo usuário ao clicar no botão
const categorias = document.getElementById("enviarCategoria"); 
const carrinho = document.getElementById("listaCompleta");    

const produtos = document.getElementById("alimentos");
const enviarProduto = (event) => {    //essa função serve pra pega o value do input="text" e salva em um variável o valor. Além de desabilitar ou habilitar
    if (produtos.value > "") {         // a parte de categorias no html.
        alimento = produtos.value
        produtos.value = ""            //o elemento html do text, ficará vazio após o envio do alimento. 
        
        opcoesDeCategoria.removeAttribute("disabled");
        enviarCategoria.removeAttribute("disabled");   
        mensagemDaCategoria.style.color = "black"
        
        produtos.style.borderColor = "black"
    }else{
        produtos.style.borderColor = "red"     // caso o input seja feito vazio, a box do texto irá ficar vermelha como alerta.
    }
}   

var categoriaEAlimento = [          // array objeto com a categorias dos produtos é um array para eles armazenarem os alimentos enviado pelo usuário..
   {"categoria": "carne", 
    "produtos": []},
   {"categoria": "hortifruti",
     "produtos": []},
   {"categoria": "limpeza", 
   "produtos": []},
   {"categoria" : "padaria", 
   "produtos": []},
   {"categoria": "higiene", 
   "produtos": []},
   {"categoria": "doce", 
   "produtos": []},
   {"categoria": "mercearia", 
   "produtos": []},
   {"categoria": "bebida", 
   "produtos": []}
]
const enviarOpcao = (event) => {    
const select = document.getElementById("opcoesDeCategoria");   
const option = select.options[select.selectedIndex].value;     

categoriaEAlimento.forEach(categoriaDoProduto => {        
     if((categoriaDoProduto.produtos.length > 1)&&(categoriaDoProduto.categoria == option) ){ // Pecorre o array e verificar se a chave produto esta vazia e compara a chave categoria com a option
        categoriaDoProduto.produtos.push(alimento)                                            // selecionada pelo usuário.

        event.preventDefault()
        opcoesDeCategoria.setAttribute("disabled", "");
        enviarCategoria.setAttribute("disabled", "");  
        mensagemDaCategoria.style.color = "rgb(121, 120, 120)"
    }else if(categoriaDoProduto.categoria == option){
        categoriaDoProduto.produtos.push(alimento)

        event.preventDefault()
        opcoesDeCategoria.setAttribute("disabled", "");
        enviarCategoria.setAttribute("disabled", "");  
        mensagemDaCategoria.style.color = "rgb(121, 120, 120)" 
     }
    })
    
} 

const fazerLista = () => {
const lista = document.createElement("ul")

categoriaEAlimento.forEach(atributos => {  
    if(atributos.produtos.length > 0){         // só criará o elemento na tela se o produto estever com algum valor.
     const listaItens = document.createElement('li')
     
     const texto = document.createTextNode(`  ${atributos.categoria} : ${atributos.produtos}`)
     listaItens.append(texto)
     
     lista.append(listaItens)
    }     
})

const saida = document.getElementById("saida")
saida.innerHTML = ""

saida.append(lista)

}

const enviarListaCompleta = (event) => {
  fazerLista()
}


carrinho.addEventListener("click", enviarListaCompleta);  
categorias.addEventListener("click", enviarOpcao); 
enviarAlimento.addEventListener("click", enviarProduto); 
