import renderDetalhes from './components/detalhes'

const app = <HTMLDivElement>document.getElementById('app')


const token = localStorage.getItem('token')

if(token) {
  renderDetalhes(app) 
}else{
  location.href = 'login.html'
}  













/*  <ul>
        <li><a href="index.html" class="Menu">Home</a></li>
        <li><a href="logout.html" class="Menu">Sair</a></li>
    </ul>
*/