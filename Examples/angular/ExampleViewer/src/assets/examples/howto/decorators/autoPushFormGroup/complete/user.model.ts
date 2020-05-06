import {unique,propArray} from '@rxweb/reactive-form-validators'
export class Cart {

    @unique()
    cartItem: string;
}

export class User {

    @propArray(Cart)
    carts: Cart[];

}