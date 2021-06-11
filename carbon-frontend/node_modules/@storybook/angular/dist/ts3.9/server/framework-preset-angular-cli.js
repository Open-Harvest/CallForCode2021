"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webpackFinal = void 0;
var node_logger_1 = require("@storybook/node-logger");
var angular_cli_config_1 = require("./angular-cli_config");
function webpackFinal(config) {
    var cwd = process.cwd();
    var cliWebpackConfigOptions = angular_cli_config_1.getAngularCliWebpackConfigOptions(cwd);
    node_logger_1.logger.info('=> Loading angular-cli config.');
    return angular_cli_config_1.applyAngularCliWebpackConfig(config, cliWebpackConfigOptions);
}
exports.webpackFinal = webpackFinal;
