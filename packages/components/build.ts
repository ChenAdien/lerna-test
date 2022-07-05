import { ModuleInfo, OutputOptions, rollup } from "rollup";
import vue from "@vitejs/plugin-vue";
import typescript from "rollup-plugin-typescript2";
// @ts-ignore
import defineOptions from "unplugin-vue-define-options/rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import styles from "rollup-plugin-styles";
// @ts-ignore
import clear from "rollup-plugin-clear";
import { generateExternal } from "./utils/index";
import json from "@rollup/plugin-json";

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
  format: "esm",
  dir: "dist/esm",
  preserveModules: true,
  entryFileNames: "[name].mjs",
  assetFileNames: "assets/[name][extname]",
};
export default async function build() {
  const bundle = await rollup({
    input: "./index.ts",
    plugins: [
      nodeResolve({
        extensions: [".mjs", ".js", ".json", ".ts"],
      }),
      defineOptions(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            module: "ESNext",
            declaration: true,
          },
        },
      }),
      vue(),
      styles({
        mode: ["extract", "index.css"],
      }),
      json(),
      clear({ targets: ["./dist"] }),
    ],
    external: await generateExternal({ full: false }),
    treeshake: true,
  });

  // or write the bundle to disk
  await bundle.write(outputOptions);
}
