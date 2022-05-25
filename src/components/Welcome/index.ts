import './styles.css'

const renderWelcomePanel = (container: HTMLElement) => {
    const userName = localStorage.getItem('userName')

    const htmlContent =`
    <div id="Welcome"> 
        <h1>Olá, ${userName}!</h1>
        <a href="logout.html">Sair</a>
    </div>
 ` 
    container.innerHTML = htmlContent
}

export default renderWelcomePanel