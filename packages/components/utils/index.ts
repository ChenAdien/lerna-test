import type { ProjectManifest } from "@pnpm/types";
import type { Plugin } from "vue";
import pkg from "../package.json";
type SFCWithInstall<T> = T & Plugin;
export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  (main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      console.log(comp);

      app.component("NO" + comp.__name, comp);
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }
  return main as SFCWithInstall<T> & E;
};

export const getPackageDependencies = (
  pkg: ProjectManifest
): Record<"dependencies" | "peerDependencies", string[]> => {
  const manifest: ProjectManifest = pkg;
  const { dependencies = {}, peerDependencies = {} } = manifest;

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies),
  };
};
export const generateExternal = async (options: { full: boolean }) => {
  const { dependencies, peerDependencies } = getPackageDependencies(pkg);

  return (id: string) => {
    const packages: string[] = peerDependencies;
    if (!options.full) {
      packages.push("@vue", ...dependencies);
    }

    return [...new Set(packages)].some(
      (pkg) => id === pkg || id.startsWith(`${pkg}/`)
    );
  };
};
