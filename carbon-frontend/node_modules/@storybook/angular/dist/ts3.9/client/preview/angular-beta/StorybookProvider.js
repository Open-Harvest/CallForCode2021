"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storyPropsProvider = exports.STORY_PROPS = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
exports.STORY_PROPS = new core_1.InjectionToken('STORY_PROPS');
exports.storyPropsProvider = function (storyProps$) { return ({
    provide: exports.STORY_PROPS,
    useFactory: storyDataFactory(storyProps$.asObservable()),
    deps: [core_1.NgZone],
}); };
function storyDataFactory(data) {
    return function (ngZone) {
        return new rxjs_1.Observable(function (subscriber) {
            var sub = data.subscribe(function (v) {
                ngZone.run(function () { return subscriber.next(v); });
            }, function (err) {
                ngZone.run(function () { return subscriber.error(err); });
            }, function () {
                ngZone.run(function () { return subscriber.complete(); });
            });
            return function () {
                sub.unsubscribe();
            };
        });
    };
}
