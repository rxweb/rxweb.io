import { prop, minNumber } from "@rxweb/reactive-form-validators"
export class User {

    @prop()
    purchasePrice: number;

    @minNumber({
        dynamicConfig: (x, y) => {
            let minimumPrice = (x.purchasePrice * 10) / 100
            return { value: minimumPrice };
        }
    })
    resalePrice: any[];

}