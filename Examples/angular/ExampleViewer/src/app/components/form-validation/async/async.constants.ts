import { AsyncGlobalBasedComponent } from "src/assets/examples/reactive-form-validators/decorators/async/globalFunctionBased/async-global.component";
import { AsyncComponentBasedComponent } from "src/assets/examples/reactive-form-validators/decorators/async/componentFunctionBased/async-component.component";
import { AsyncCompleteTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/async/complete/async-complete.component";

export const ASYNC_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						global : AsyncGlobalBasedComponent,
						component: AsyncComponentBasedComponent,
			  },
			  template_driven_validation_directives:{
				complete : AsyncCompleteTemplateDrivenValidationDirectivesComponent,
			
	  },
}