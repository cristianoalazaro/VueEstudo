import Cadastro from './components/Cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
import PageNotFound from './components/PageNotFound/PageNotFound';

export const routes = [
    {path: '/', name:'home', component: Home, titulo:'Home', menu: true},
    {path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true},
    {path: '/cadastro/:id', name: 'altera', component: Cadastro, titulo: 'Cadastro', menu: false},
    {path: '*', component: PageNotFound, titulo: 'PageNotFound', menu: false}
];
