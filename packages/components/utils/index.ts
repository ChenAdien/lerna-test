import type { ProjectManifest } from '@pnpm/types'
import pkg from '../package.json'
export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  ;(main as any).install = (app: any): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      console.log(comp.__name)

      app.component(comp.__name, comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;(main as any)[key] = comp
    }
  }
  return main
}

export const getPackageDependencies = (
  pkg: ProjectManifest
): Record<'dependencies' | 'peerDependencies', string[]> => {
  const manifest: ProjectManifest = pkg
  const { dependencies = {}, peerDependencies = {} } = manifest

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies),
  }
}
export const generateExternal = async (options: { full: boolean }) => {
  const { dependencies, peerDependencies } = getPackageDependencies(pkg)

  return (id: string) => {
    const packages: string[] = peerDependencies
    if (!options.full) {
      packages.push('@vue', ...dependencies)
    }

    return [...new Set(packages)].some(
      (pkg) => id === pkg || id.startsWith(`${pkg}/`)
    )
  }
}
