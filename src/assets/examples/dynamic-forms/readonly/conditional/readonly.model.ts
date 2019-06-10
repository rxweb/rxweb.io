import { action, FormControlConfig } from "@rxweb/reactive-form-validators";

@action([
    {
        keyName: 'onlyReadonly',
        actions: {
            readonly: function () { return this.controlsConfig.firstName.value == 'ajay' }
        }
    }
])
export class ReadonlyModel extends FormControlConfig { }