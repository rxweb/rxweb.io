import {  choice  } from "@rxweb/reactive-form-validators"

export class EmployeeInfo{

    @choice({ minLength: 2, messageKey: 'choiceMessageKey' })
    certifications: string;
}
