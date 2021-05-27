import App from './App.svelte';
import './styles/default.scss';

const app = new App({
	target: document.body,
    //hydrate: true
});

export default app;