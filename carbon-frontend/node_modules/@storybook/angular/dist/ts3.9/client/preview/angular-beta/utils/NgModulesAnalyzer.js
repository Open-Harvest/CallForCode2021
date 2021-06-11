"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isComponentAlreadyDeclaredInModules = void 0;
var core_1 = require("@angular/core");
/**
 * Avoid component redeclaration
 *
 * Checks recursively if the component has already been declared in all import Module
 */
exports.isComponentAlreadyDeclaredInModules = function (componentToFind, moduleDeclarations, moduleImports) {
    if (moduleDeclarations &&
        moduleDeclarations.some(function (declaration) { return declaration === componentToFind; })) {
        // Found component in declarations array
        return true;
    }
    if (!moduleImports) {
        return false;
    }
    return moduleImports.some(function (importItem) {
        var extractedNgModuleMetadata = extractNgModuleMetadata(importItem);
        if (!extractedNgModuleMetadata) {
            // Not an NgModule
            return false;
        }
        return exports.isComponentAlreadyDeclaredInModules(componentToFind, extractedNgModuleMetadata.declarations, extractedNgModuleMetadata.imports);
    });
};
var extractNgModuleMetadata = function (importItem) {
    var target = importItem && importItem.ngModule ? importItem.ngModule : importItem;
    var decoratorKey = '__annotations__';
    var decorators = Reflect &&
        Reflect.getOwnPropertyDescriptor &&
        Reflect.getOwnPropertyDescriptor(target, decoratorKey)
        ? Reflect.getOwnPropertyDescriptor(target, decoratorKey).value
        : target[decoratorKey];
    if (!decorators || decorators.length === 0) {
        return null;
    }
    var ngModuleDecorator = decorators.find(function (decorator) { return decorator instanceof core_1.NgModule; });
    if (!ngModuleDecorator) {
        return null;
    }
    return ngModuleDecorator;
};
