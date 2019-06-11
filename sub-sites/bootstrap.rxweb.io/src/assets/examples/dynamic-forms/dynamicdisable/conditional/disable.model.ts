import { action, FormControlConfig } from '@rxweb/reactive-form-validators'

@action([
    {
        keyName: 'onlyDisable',
        actions: {
            disable: function () {
                return this.controlsConfig.agreeTerms.value == false 
            }
        }
    }
])
export class DisableModel extends FormControlConfig { }