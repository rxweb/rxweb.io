import {NgModule, ModuleWithProviders } from "@angular/core";

import { RegularExpression, OrderByPipe } from './core';

@NgModule({
    declarations: [OrderByPipe],
    exports: [OrderByPipe]
})
export class RxCoreModule {
    static forRoot() {
        return {
            ngModule: RxCoreModule,
            providers: [RegularExpression]
        };
    }
}