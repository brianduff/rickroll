import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import summary from 'rollup-plugin-summary';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = process.env.MODE == 'prod';

export default {
	output: {
    dir: 'build',
		format: 'esm',
	},
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
	plugins: [
    html({
      input: 'index.html'
    }),
		resolve(),
		commonjs(), // converts date-fns to ES modules
		production && terser(
			{
				ecma: 2017,
				module: true,
				warnings: true,
				mangle: {
					properties: {
						regex: /^__/,
					},
				},
				format: {
					comments: false
				}
			}
		), // minify, but only in production
		summary()
	]
};