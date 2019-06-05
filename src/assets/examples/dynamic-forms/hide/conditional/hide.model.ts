import { action, FormControlConfig } from '@rxweb/reactive-form-validators'

@action([
    {
        keyName: 'onlyHide',
        actions: {
            hide: function () { return this.controlsConfig.firstName.value == 'ajay' }
        }
    }
])
export class HideModel extends FormControlConfig { }