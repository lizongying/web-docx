import { nodeResolve as resolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import cleaner from 'rollup-plugin-cleaner';
import alias from '@rollup/plugin-alias';

import { readFileSync } from 'fs';

const meta = JSON.parse(readFileSync('./package.json', 'utf-8'));

export default {
  input: 'index.js',
  // external: ['color-name', 'html-to-vdom', 'jszip', 'virtual-dom', 'xmlbuilder2', 'html-entities'],
  plugins: [
    alias({
      entries: [
        { find: 'crypto', replacement: 'crypto-browserify' },
        // { find: 'stream', replacement: 'stream-browserify' },
        // { find: 'buffer', replacement: 'buffer' }
      ]
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
      sourcemap: true,
      banner: `// ${meta.homepage} v${meta.version} Copyright ${new Date().getFullYear()} ${meta.author}`
    },
    {
      file: 'dist/web-docx.umd.js',
      format: 'umd',
      name: 'HTMLToDOCX',
      sourcemap: true,
      banner: `// ${meta.homepage} v${meta.version} Copyright ${new Date().getFullYear()} ${meta.author}`
    }
  ]
};
