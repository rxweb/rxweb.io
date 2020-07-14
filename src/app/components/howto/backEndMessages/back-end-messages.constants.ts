
import { BackEndMessagesCompleteComponent } from 'src/assets/examples/howto/decorators/backEndMessages/complete/back-end-messages-complete.component';
import { BackEndMessagesCompleteValidatorComponent } from 'src/assets/examples/howto/validators/backEndMessages/complete/back-end-messages-complete.component';
import { BackEndMessagesAddValidatorComponent } from 'src/assets/examples/howto/validators/backEndMessages/add/back-end-messages-add.component';
import { BackEndMessagesAddComponent } from 'src/assets/examples/howto/decorators/backEndMessages/add/back-end-messages-add.component';



export const BACK_END_MESSAGES_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
       
       complete: BackEndMessagesCompleteValidatorComponent,
       add:BackEndMessagesAddValidatorComponent
    },
    decorators:
    {
       complete: BackEndMessagesCompleteComponent,
       add:BackEndMessagesAddComponent
    }
}