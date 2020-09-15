

import { IpAsyncCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/ipAsync/complete/ip-async-complete.component";


import { IpAsyncVersionValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/ipAsync/version/ip-async-version.component";



import { IpAsyncIsCidrValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/ipAsync/isCidr/ip-async-is-cidr.component";


import { IpAsyncMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/ipAsync/message/ip-async-message.component";


import { IpAsyncMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/ipAsync/messageKey/ip-async-message-key.component";

import { IpAsyncDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/ipAsync/dynamic/ip-async-dynamic.component";


import { IpAsyncAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/ipAsync/add/ip-async-add.component";


export const IP_ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	
	
	validators:{
						complete : IpAsyncCompleteValidatorComponent,
						version : IpAsyncVersionValidatorComponent,
						isCidr : IpAsyncIsCidrValidatorComponent,
						message : IpAsyncMessageValidatorComponent,
						messageKey : IpAsyncMessageKeyValidatorComponent,
						dynamic : IpAsyncDynamicValidatorComponent,
						add : IpAsyncAddValidatorComponent,
			  },
}
