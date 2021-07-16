import commonjs from '@rollup/plugin-commonjs'; // Конвертирование CommonJS модулей в ES6
import vue from 'rollup-plugin-vue'; // Обработка однофайловых компонентов .vue
import buble from '@rollup/plugin-buble'; // Транспиляция/добавление полифилов для умеренной поддержки браузеров

export default {
  input: 'src/index.js', // Путь до относительного package.json
  output: {
    name: 'LoaderModule',
    exports: 'named'
  },
  plugins: [
    commonjs(),
    vue({
      css: true, // Динамически внедряем CSS в тег <style>
      compileTemplate: true, // Явное преобразование шаблона в рендер-функцию
    }),
    buble() // Транспиляция в ES5
  ],
};