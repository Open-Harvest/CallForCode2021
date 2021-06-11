"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./client"), exports);
/*
 * ATTENTION:
 * - moduleMetadata
 * - NgModuleMetadata
 * - ICollection
 *
 * These typings are coped out of decorators.d.ts and types.d.ts in order to fix a bug with tsc
 * It was imported out of dist before which was not the proper way of exporting public API
 *
 * This can be fixed by migrating app/angular to typescript
 */
