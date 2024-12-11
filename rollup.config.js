import { dirname, relative, resolve } from 'path'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { cwd } from 'process'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'

const dir = 'dist'

const useSrc = ({ out, ext } = {}) => ({
	name: 'local:useSrc',
	resolveId(source, importer) {
		if (ext.some((e) => source.endsWith(e))) {
			const here = cwd()
			const from =
				typeof out === 'string'
					? out
					: dirname(typeof out === 'function' ? out(importer) : importer)
			const originalImporter = importer.replace(`${here}/dist`, here)
			const originalImporterDir = dirname(originalImporter)
			const original = resolve(originalImporterDir, source)
			const relativePath = relative(from, original)
			return {
				id: relativePath,
				external: true,
			}
		}
	},
})

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				dir,
				format: 'es',
				preserveModules: true,
			},
		],
		plugins: [
			typescript(),
			vue(),
			resolve({
				mainFields: ['module', 'import', 'browser'], // Prioritize ESM over browser
			}),
			commonjs(),
			useSrc({
				ext: [
					'.astro',
					'.svelte',
					'.vue',
					'.scss',
					'.css',
					'.md',
					'.jpg',
					'.jpeg',
					'.gif',
					'.svg',
				],
				dir,
				out: (path) => path.replace('src', 'dist'),
			}),
		],
		external: ['vue', 'vue3-carousel'],
	},
	{
		input: 'dist/src/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'es' }],
		plugins: [
			dts(),
			useSrc({
				ext: [
					'.astro',
					'.svelte',
					'.vue',
					'.scss',
					'.css',
					'.md',
					'.jpg',
					'.jpeg',
					'.gif',
					'.svg',
				],
				dir,
				out: (path) => path.replace('dist/src', 'dist'),
			}),
		],
	},
]
