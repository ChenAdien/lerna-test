import { series } from "gulp";
import { build } from "./build";
import cpr from "cpr";
async function copyTypes() {
  console.log("Start copy types");

  await cpr(
    "./types/global.d.ts",
    "./dist/tpyes/global.d.ts",
    {
      deleteFirst: true, // Delete "to" before
      overwrite: true, // If the file exists, overwrite it
      confirm: true,
    },
    function (err) {
      if (err) console.log(err);
    }
  );
}
async function copyPackage() {
  console.log("Start copy pacgejson");

  await cpr(
    "./package.publish.json",
    "./dist/package.json",
    {
      deleteFirst: true, // Delete "to" before
      overwrite: true, // If the file exists, overwrite it
      confirm: true,
    },
    function (err) {
      if (err) console.log(err);
    }
  );
}
export default series(build, copyTypes, copyPackage);
