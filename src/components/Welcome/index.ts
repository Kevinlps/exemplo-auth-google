import './styles.css'




const renderWelcomePanel = (container: HTMLElement) => {
    const userName = localStorage.getItem('userName')
    
    const htmlContent =`
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



   

