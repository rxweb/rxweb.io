import { FormControlConfig, action } from "@rxweb/reactive-form-validators";

@action([
    {
        keyName: 'onlyDescription',
        actions: {
            description: function () {
                console.log(this.controlsConfig.newsLetter.value)
                if (this.controlsConfig.newsLetter.value == true ) {
                    return this.controlsConfig.email.description = "Thank you for agreeing to our newsletter"
                }
                return this.controlsConfig.email.description = "Please select the above option for newsletter to get our daily newsletter"
            }
        }
    }
])
export class DescriptionModel extends FormControlConfig { }