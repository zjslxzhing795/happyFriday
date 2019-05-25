import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Item from '../components/Item';
import Score from '../components/Score';

Vue.use(Router);
const routes=new Router([
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/item',
        name: 'Item',
        component: Item
    },
    {
        path: '/score',
        name: 'Score',
        component: Score
    }
]);
export default routes;
