import './assets/global.css';
import './assets/main.css';

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from "@/pages/MainPage.vue";
import SearchResults from "@/pages/SearchResults.vue";

const app = createApp(App);



const routes = [
	{ path: '/', component: MainPage },
	{ path: '/search', component: SearchResults },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

app.use(router);

app.mount('#app');
