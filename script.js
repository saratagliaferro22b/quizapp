import { trocarTema, verificarTema } from "./helpers/tema-helper.js"

const botaoTema = document.querySelector (".tema button")
const body = document.querySelector("body")

botaoTema.addEventListener("click",() => {
   trocarTema(body, botaoTema)
})

verificarTema(body, botaoTema)

const botoesAssunto = document.querySelectorAll(".assuntos button")
botoesAssunto.forEach(botao => {
   botao.addEventilistener("click", selecionarAssunto)
})

function selecionarAssunto(evento) {
   const assunto = evento.target.innerText
   console.log(assunto)
}