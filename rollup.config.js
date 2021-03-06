import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import minify from 'rollup-plugin-babel-minify';

import pkg from './package.json'

export default {
    input: 'src/finput.ts',
    output: {
        file: pkg.unpkg,
        format: 'umd',
        name: 'finput'
    },
    plugins: [
        commonjs(),
        resolve(),
        typescript({
            typescript: require('typescript'),
        }),
        process.env.environment === "PRODUCTION" && minify({
            comments: false
        })
    ],
}