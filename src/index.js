// Импорт vue компонента
import LoaderModule from "src/LoaderModule.vue";

// Объявление функции установки, выполняемой Vue.use()
export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('LoaderModule', LoaderModule);
    Vue.prototype.$loader = function (status) {
        if (status === 'show') {
            loader.showLoader()
        } else {
            loader.hideLoader()
        }
    }
    const mountNode = document.createElement('div')
    mountNode.id = 'loaderNode'
    mountNode.ref = 'loaderRef'
    document.body.appendChild(mountNode)
    let loaderComp = Vue.extend(LoaderModule)
    let loader = new loaderComp().$mount('#loaderNode')
}

// Создание значения модуля для Vue.use()
const plugin = {
    install
};

// Автоматическая установка, когда vue найден (например в браузере с помощью тега <script>)
let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

// Экспорт компонента, для использования в качестве модуля (npm/webpack/etc.)
export default LoaderModule;

