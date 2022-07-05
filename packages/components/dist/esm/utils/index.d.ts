import type { ProjectManifest } from "@pnpm/types";
import type { Plugin } from "vue";
declare type SFCWithInstall<T> = T & Plugin;
export declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E | undefined) => SFCWithInstall<T> & E;
export declare const getPackageDependencies: (pkg: ProjectManifest) => Record<"dependencies" | "peerDependencies", string[]>;
export declare const generateExternal: (options: {
    full: boolean;
}) => Promise<(id: string) => boolean>;
export {};
