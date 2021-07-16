(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('src/vue-modern-loader.vue')) :
    typeof define === 'function' && define.amd ? define(['exports', 'src/vue-modern-loader.vue'], factory) :
    (global = global || self, factory(global.LoaderModule = {}, global.VueModernLoader));
}(this, (function (exports, VueModernLoader) { 'use strict';

    VueModernLoader = VueModernLoader && Object.prototype.hasOwnProperty.call(VueModernLoader, 'default') ? VueModernLoader['default'] : VueModernLoader;

    // Импорт vue компонента

    // Объявление функции установки, выполняемой Vue.use()
    function install(Vue) {
        if (install.installed) { return; }
        install.installed = true;
        Vue.component('VueModernLoader', VueModernLoader);
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
        var loaderComp = Vue.extend(VueModernLoader);
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

    exports.default = VueModernLoader;
    exports.install = install;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
