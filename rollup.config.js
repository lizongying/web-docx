import { nodeResolve as resolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import cleaner from 'rollup-plugin-cleaner';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';


import { readFileSync } from 'fs';

const meta = JSON.parse(readFileSync('./package.json', 'utf-8'));

export default {
  input: 'src/index.js',
  plugins: [
    alias({
      entries: []
    }),
    replace({
      values: {
        'process.env.PACKAGE_NAME': `'${meta.name}'`
      }
    }),
    resolve({
      preferBuiltins: false,
      browser: true
    }),
    json(),
    commonjs(),
    terser({
      mangle: false
    }),
    cleaner({
      targets: ['./dist/']
    })
  ],
  output: [
    {
      file: 'dist/web-docx.esm.js',
      format: 'es',
      sourcemap: false,
      banner: `// ${meta.homepage} v${meta.version} Copyright ${new Date().getFullYear()} ${meta.author}`
    },
    {
      file: 'dist/web-docx.umd.js',
      format: 'umd',
      name: 'HTMLToDOCX',
      sourcemap: false,
      banner: `// ${meta.homepage} v${meta.version} Copyright ${new Date().getFullYear()} ${meta.author}`
    }
  ]
};
