import { prop,propObject,propArray } from "@rxweb/reactive-form-validators"


export class Hobby {
    @prop()
    name: string;
}
export class User {

    @propArray(Hobby)
    hobbies: Hobby[];
}
