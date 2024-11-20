import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import Antdv from "ant-design-vue";

import './Icons/icons.js'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

// importing AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

import VueKonva from "vue-konva";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(AOS.init());
app.use(Antdv);
app.use(VueKonva);
app.mount('#app')
