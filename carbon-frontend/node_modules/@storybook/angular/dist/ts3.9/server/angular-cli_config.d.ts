import { Path } from '@angular-devkit/core';
interface BasicOptions {
    options: {
        baseUrl?: string | undefined;
    };
    raw: object;
    fileNames: string[];
    errors: any[];
}
export declare function getAngularCliConfig(dirToSearch: string): any;
export declare function getLeadingAngularCliProject(ngCliConfig: any): any;
export declare function getAngularCliWebpackConfigOptions(dirToSearch: Path): {
    root: Path;
    projectRoot: string;
    tsConfigPath: Path;
    tsConfig: BasicOptions;
    supportES2015: boolean;
    buildOptions: any;
};
export declare function applyAngularCliWebpackConfig(baseConfig: any, cliWebpackConfigOptions: any): any;
export {};
