import LoaderModule from 'src/LoaderModule.vue';

// Импорт vue компонента

// Объявление функции установки, выполняемой Vue.use()
function install(Vue) {
    if (install.installed) { return; }
    install.installed = true;
    Vue.component('LoaderModule', LoaderModule);
    Vue.prototype.$loader = function (status) {
        if (status === 'show') {
            loader.showLoader();
        } else {
            loader.hideLoader();
        }
    };
    var mountNode = document.createElement('div');
    mountNode.id = 'loaderNode';
    mountNode.ref = 'loaderRef';
    document.body.appendChild(mountNode);
    var loaderComp = Vue.extend(LoaderModule);
    var loader = new loaderComp().$mount('#loaderNode');
}

// Создание значения модуля для Vue.use()
var plugin = {
    install: install
};

// Автоматическая установка, когда vue найден (например в браузере с помощью тега <script>)
var GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

export default LoaderModule;
export { install };
