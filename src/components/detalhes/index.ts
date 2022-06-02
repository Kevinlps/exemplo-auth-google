import './styles.css'

const userName = localStorage.getItem('userName')
const email = localStorage.getItem('Email')
const Telefone = localStorage.getItem('Telefone')

const renderDetalhes = (container: HTMLElement) => {
  const htmlContent=`
  <div id="Detalhes"> 
  <h1>Nome do usuario : ${userName}</h1>
  <h1>Email do usuario : ${email}</h1>
  <h1>Telefone : ${Telefone}</h1>
  <span id="hora"></span>
</div>
      `
  container.innerHTML = htmlContent
}

export default renderDetalhes


 