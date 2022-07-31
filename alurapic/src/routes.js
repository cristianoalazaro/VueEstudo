import Cadastro from './components/Cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
import PageNotFound from './components/PageNotFound/PageNotFound';

export const routes = [
    {path: '/', name:'home', component: Home, titulo:'Home', menu: true},
    {path: '/cadastro', component: Cadastro, titulo: 'Cadastro', menu: true},
    {path: '*', component: PageNotFound, titulo: 'PageNotFound', menu: false}
];
