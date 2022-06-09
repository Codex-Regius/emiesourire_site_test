import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Primevue from 'primevue/config';

// Primevue Components import
import Menubar from '../node_modules/primevue/menubar'
import TabView from '../node_modules/primevue/tabview';
import TabPanel from '../node_modules/primevue/tabpanel';
import Button from '../node_modules/primevue/button'
import Carousel from '../node_modules/primevue/carousel';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

// CSS
import 'primevue/resources/primevue.min.css';               //core css
import 'primevue/resources/themes/saga-blue/theme.css';     //theme
import 'primeflex/primeflex.css'
import './resources/override.css';

createApp(App)
    .use(store)
    .use(router)
    .use(Primevue)
    .component('Menubar', Menubar)
    .component('TabView', TabView)
    .component('TabPanel', TabPanel)
    .component('Button', Button)
    .component('Carousel', Carousel)
    .component('InputText', InputText)
    .component('Textarea', Textarea)
    .mount('#app')