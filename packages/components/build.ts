import { ModuleInfo, OutputOptions, rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import DefineOptions from 'unplugin-vue-define-options/rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import styles from 'rollup-plugin-styles'
// @ts-ignore
import clear from 'rollup-plugin-clear'
import { generateExternal } from './utils/index'
import json from '@rollup/plugin-json'

// function testPlugin() {
//   return {
//     name: 'test',
//     resolveId(source: any) {
//       console.log('source', source)
//     },
//     load(id: any) {
//       console.log(id)
//     },
//     moduleParsed(moduleInfo: ModuleInfo) {},
//   }
// }
const outputOptions: OutputOptions = {
  file: 'dist/esm/index.js',
  format: 'esm',
  assetFileNames: '[name].[ext]',
}
export default async function build() {
  const bundle = await rollup({
    input: './index.ts',
    plugins: [
      nodeResolve(),
      DefineOptions(),
      typescript({
        tsconfigOverride: {
          include: ['**/*'],
          compilerOptions: {
            module: 'ESNext',
            declaration: false,
          },
        },
      }),
      vue(),
      styles({ mode: ['extract', 'index.css'] }),
      json(),
      clear({ targets: ['./dist'] }),
    ],
    external: await generateExternal({ full: false }),
    treeshake: true,
  })

  // generate code and a sourcemap
  await bundle.generate(outputOptions)

  // or write the bundle to disk
  await bundle.write(outputOptions)
}
