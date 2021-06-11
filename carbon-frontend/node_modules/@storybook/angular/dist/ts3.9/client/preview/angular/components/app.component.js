"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
/* eslint-disable no-useless-constructor */
// We could use NgComponentOutlet here but there's currently no easy way
// to provide @Inputs and subscribe to @Outputs, see
// https://github.com/angular/angular/issues/15360
// For the time being, the ViewContainerRef approach works pretty well.
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var app_token_1 = require("../app.token");
var AppComponent = /** @class */ (function () {
    function AppComponent(cfr, changeDetectorRef, data) {
        this.cfr = cfr;
        this.changeDetectorRef = changeDetectorRef;
        this.data = data;
        this.previousValues = {};
        this.propSubscriptions = new Map();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.pipe(operators_1.first()).subscribe(function (data) {
            _this.target.clear();
            var compFactory = _this.cfr.resolveComponentFactory(data.component);
            var componentRef = _this.target.createComponent(compFactory);
            var instance = componentRef.instance;
            // For some reason, manual change detection ref is only working when getting the ref from the injector (rather than componentRef.changeDetectorRef)
            var childChangeDetectorRef = componentRef.injector.get(core_1.ChangeDetectorRef);
            _this.subscription = _this.data.subscribe(function (newData) {
                _this.setProps(instance, newData);
                childChangeDetectorRef.markForCheck();
                // Must detect changes on the current component in order to update any changes in child component's @HostBinding properties (angular/angular#22560)
                _this.changeDetectorRef.detectChanges();
            });
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.target.clear();
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.propSubscriptions.forEach(function (v) {
            if (!v.sub.closed) {
                v.sub.unsubscribe();
            }
        });
        this.propSubscriptions.clear();
    };
    /**
     * Set inputs and outputs
     */
    AppComponent.prototype.setProps = function (instance, _a) {
        var _this = this;
        var _b = _a.props, props = _b === void 0 ? {} : _b;
        var changes = {};
        var hasNgOnChangesHook = !!instance.ngOnChanges;
        Object.keys(props).forEach(function (key) {
            var value = props[key];
            var instanceProperty = instance[key];
            if (!(instanceProperty instanceof core_1.EventEmitter) && value !== undefined && value !== null) {
                // eslint-disable-next-line no-param-reassign
                instance[key] = value;
                if (hasNgOnChangesHook) {
                    var previousValue = _this.previousValues[key];
                    if (previousValue !== value) {
                        changes[key] = new core_1.SimpleChange(previousValue, value, !Object.prototype.hasOwnProperty.call(_this.previousValues, key));
                        _this.previousValues[key] = value;
                    }
                }
            }
            else if (typeof value === 'function' && key !== 'ngModelChange') {
                _this.setPropSubscription(key, instanceProperty, value);
            }
        });
        this.callNgOnChangesHook(instance, changes);
        this.setNgModel(instance, props);
    };
    /**
     * Manually call 'ngOnChanges' hook because angular doesn't do that for dynamic components
     * Issue: [https://github.com/angular/angular/issues/8903]
     */
    AppComponent.prototype.callNgOnChangesHook = function (instance, changes) {
        if (Object.keys(changes).length) {
            instance.ngOnChanges(changes);
        }
    };
    /**
     * If component implements ControlValueAccessor interface try to set ngModel
     */
    AppComponent.prototype.setNgModel = function (instance, props) {
        if (props.ngModel) {
            instance.writeValue(props.ngModel);
        }
        if (typeof props.ngModelChange === 'function') {
            instance.registerOnChange(props.ngModelChange);
        }
    };
    /**
     * Store ref to subscription for cleanup in 'ngOnDestroy' and check if
     * observable needs to be resubscribed to, before creating a new subscription.
     */
    AppComponent.prototype.setPropSubscription = function (key, instanceProperty, value) {
        if (this.propSubscriptions.has(key)) {
            var v = this.propSubscriptions.get(key);
            if (v.prop === value) {
                // Prop hasn't changed, so the existing subscription can stay.
                return;
            }
            // Now that the value has changed, unsubscribe from the previous value's subscription.
            if (!v.sub.closed) {
                v.sub.unsubscribe();
            }
        }
        var sub = instanceProperty.subscribe(value);
        this.propSubscriptions.set(key, { prop: value, sub: sub });
    };
    __decorate([
        core_1.ViewChild('target', { read: core_1.ViewContainerRef, static: true }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], AppComponent.prototype, "target", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'storybook-dynamic-app-root',
            template: '<ng-template #target></ng-template>',
        }),
        __param(2, core_1.Inject(app_token_1.STORY)),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
            core_1.ChangeDetectorRef,
            rxjs_1.Observable])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
