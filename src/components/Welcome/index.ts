import './styles.css'

const foto = localStorage.getItem('Foto')



const renderWelcomePanel = (container: HTMLElement) => {
    const userName = localStorage.getItem('userName')
    const htmlContent =`
    <ul>
    <li><a href="detalhes.html" class="Menu">Detalhes do usuario</a></li>
    <li><a href="logout.html" class="Menu">Sair</a></li>
    <li><img src="${foto}" alt="foto do usuario"></li>
</ul>
    <div id="Welcome"> 
        <h1>Seja bem vindo, ${userName}!</h1>
        <span id="hora"></span>
    </div>
 `
 setInterval(()=>{
     let Hora = new Date();
     const getidhora = <HTMLElement>document.querySelector('#hora')
     Hora.setDate(Hora.getDate()+1)
     getidhora.innerText = `${Hora.toLocaleTimeString()}`
     }, 1000);
 
    container.innerHTML = htmlContent
}

export default renderWelcomePanel



   

