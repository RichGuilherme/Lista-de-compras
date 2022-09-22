const enviarAlimento = document.getElementById("enviarProduto");
const categorias = document.getElementById("enviarCategoria");
const carrinho = document.getElementById("listaCompleta");

const produtos = document.getElementById("itens");
const enviarProduto = (event) => {
    if (produtos.value > "") {
        alimento = produtos.value
        produtos.value = ""
        
        opcoesDeCategoria.removeAttribute("disabled");
        enviarCategoria.removeAttribute("disabled");   
        mensagemDaCategoria.style.color = "black"
        
        produtos.style.borderColor = "black"
    }else{
        produtos.style.borderColor = "red"
    }
}   

var categoriaEAlimento = [
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
const select = document.getElementById("opcoesDeCategoria");    //completo para encontra o value do option
const option = select.options[select.selectedIndex].value; // obter o value do option

categoriaEAlimento.forEach(categoriaDoProduto => {         
     if((categoriaDoProduto.produtos.length > 1)&&(categoriaDoProduto.categoria == option) ){
        categoriaDoProduto.produtos.push(alimento)

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
    if(atributos.produtos.length > 0){ 
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
