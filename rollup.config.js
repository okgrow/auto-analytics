import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import filesize from 'rollup-plugin-filesize';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  plugins: [
    // Transpile with babel to support older browsers e.g - IE 11
    babel({
      exclude: 'node_modules/**',
    }),
    // Minify code with uglify to compress bundle size.
    uglify({}, minify),
    // Display the bundled file sizes
    filesize(),
  ],
  output: { file: pkg.main, format: 'umd', name: 'OKGAnalytics' },
};
