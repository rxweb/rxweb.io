import { action, FormControlConfig } from '@rxweb/reactive-form-validators'

@action([
    {
        keyName: 'onlyHide',
        actions: {
            hide: function () {
                console.log(this.controlsConfig.age.value);
                return this.controlsConfig.age.value == 2 
            }
        }
    }
])
export class HideModel extends FormControlConfig { }