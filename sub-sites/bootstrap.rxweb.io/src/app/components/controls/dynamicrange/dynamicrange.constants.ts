import { DynamicrangeCompleteComponent } from 'src/assets/examples/controls/dynamicrange/complete/dynamicrange-complete.component';
import { DynamicrangeStepComponent } from 'src/assets/examples/controls/dynamicrange/step/dynamicrange-step.component';
import { DynamicrangeValueComponent } from 'src/assets/examples/controls/dynamicrange/value/dynamicrange-value.component';

export const DYNAMICRANGE_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators: {
        complete: DynamicrangeCompleteComponent,
        step: DynamicrangeStepComponent,
        value: DynamicrangeValueComponent
    }

}