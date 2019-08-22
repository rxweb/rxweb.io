import { DynamicResetFormFormsonlyComponent } from 'src/assets/examples/dynamic-forms/dynamicresetform/controlsOnly/dynamic-reset-form.component';
import { DynamicResetDefinedPropsOnlyComponent } from 'src/assets/examples/dynamic-forms/dynamicresetform/definedPropsOnly/dynamic-reset-defined-props-only.component';
import { DynamicresetvalueComponent } from 'src/assets/examples/dynamic-forms/dynamicresetform/value/dynamic-reset-value.component';

export const DYNAMICRESETFORM_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:{
        controlsOnly: DynamicResetFormFormsonlyComponent,
        definedPropsOnly:DynamicResetDefinedPropsOnlyComponent,
        value:DynamicresetvalueComponent
			  }
	
}