import { CompilerOptions, Project, SourceFile } from "ts-morph";
export async function generateTypesDefinitions() {
  const compilerOptions: CompilerOptions = {
    emitDeclarationOnly: true,
    outDir: "dist",
    baseUrl: "./",
    preserveSymlinks: true,
    skipLibCheck: true,
    noImplicitAny: false,
  };
  const project = new Project({
    compilerOptions,
    tsConfigFilePath: "./tsconfig.web.json",
    skipAddingFilesFromTsConfig: true,
  });
  project.addSourceFileAtPath("./lib/env.d.ts");
  project.addSourceFileAtPath("lib/**/*.ts");
}
