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

const outputESM: OutputOptions = {
  format: "esm",
  dir: "dist/esm",
  preserveModules: true,
  entryFileNames: "[name].mjs",
  assetFileNames: "assets/[name][extname]",
};
const outputCJS: OutputOptions = {
  format: "cjs",
  dir: "dist/cjs",
  preserveModules: true,
  exports: "named",
  entryFileNames: "[name].js",
};
const outputFull: OutputOptions = {
  format: "esm",
  dir: "dist/dist",
  exports: "auto",
  entryFileNames: "[name].full.js",
};
async function getInputOption(
  declaration = false,
  stylesOption: any = { mode: ["extract", "index.css"] }
) {
  return {
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
            declaration,
          },
        },
      }),
      vue(),
      styles(stylesOption),
      json(),
      clear({ targets: ["./dist"] }),
    ],
    external: await generateExternal({ full: false }),
    treeshake: true,
  };
}
export async function build() {
  const bundleESM = await rollup(await getInputOption(true));
  const bundleNoCss = await rollup(
    await getInputOption(false, {
      mode: ["extract", "index.css"],
      // ignore css
      onExtract: () => {
        return false;
      },
    })
  );
  // or write the bundle to disk
  await bundleNoCss.write(outputCJS);
  await bundleNoCss.write(outputFull);
  await bundleESM.write(outputESM);
}
