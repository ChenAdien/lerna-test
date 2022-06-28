import { series } from 'gulp'
import build from './build'
import cpr from 'cpr'
import { Project } from 'ts-morph'
async function copyTypes() {
  console.log('Start copy types')

  await cpr(
    './types',
    './dist/tpyes',
    {
      deleteFirst: true, //Delete "to" before
      overwrite: true, //If the file exists, overwrite it
      confirm: true,
    },
    function (err) {
      if (err) console.log(err)
    }
  )
}
function testType() {
  const project = new Project({
    compilerOptions: {
      emitDeclarationOnly: true,
      outDir: './dist/tpyes',
      baseUrl: './',
      preserveSymlinks: true,
      skipLibCheck: true,
      noImplicitAny: false,
    },
    tsConfigFilePath: './tsconfig.json',
    skipAddingFilesFromTsConfig: true,
  })
  project.addSourceFilesAtPaths(['./src/components'])
}
export default series(build)
