import {  unique, prop, propArray, } from "@rxweb/reactive-form-validators"

export class Certification {

  @unique({ messageKey: 'uniqueMessageKey' })
	certificationName: string[];

}

export class Employee {

	@propArray(Certification)
    certifications: Certification[];

}
