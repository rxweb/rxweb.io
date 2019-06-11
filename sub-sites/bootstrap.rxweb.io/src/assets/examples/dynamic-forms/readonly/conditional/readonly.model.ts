import { action, FormControlConfig } from "@rxweb/reactive-form-validators";

@action([
    {
        keyName: 'onlyReadonly',
        actions: {
            readonly: function () { return this.controlsConfig.editForm.value == false }
        }
    }
])
export class ReadonlyModel extends FormControlConfig { }