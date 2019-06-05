import {action,FormControlConfig} from '@rxweb/reactive-form-validators'
@action([
    {
        keyName:'asyncSource',
        actions : {
            filter:function(){
                let promise = new Promise<any[]>((resolve, reject) => {
                    resolve(this.config.source.filter(t => t.countryId == this.dynamicModel.countryId.value));
                });
                return promise
            }
        }
    },
    {
        keyName:'nonAsyncSource',
        actions: {
            filter:function(){
                if (this.controlsConfig && this.controlsConfig.country.value)
                return this.config.source.filter(t => t.countryId == this.controlsConfig.country.value);
            else
                return [];
            }
        }
    }
])
export class SourceModel extends FormControlConfig{
    
}