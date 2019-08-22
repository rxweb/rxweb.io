import { TextareaCompleteComponent } from 'src/assets/examples/controls/textarea/complete/textarea-complete.component';
import { TextareaSizeComponent } from 'src/assets/examples/controls/textarea/size/textarea-size.component';
import { TextareaInputlengthComponent } from 'src/assets/examples/controls/textarea/inputlength/textarea-inputlength.component';

export const TEXTAREA_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	validators: {
		complete: TextareaCompleteComponent,
		size: TextareaSizeComponent,
		inputlength: TextareaInputlengthComponent
	}

}