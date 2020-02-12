import { prop, minNumber } from "@rxweb/reactive-form-validators"
export class User {

    @prop()
    purchasePrice: number;

    @minNumber({
        dynamicConfig: (x, y) => {
            const minimumPrice = (x.purchasePrice * 1) + (x.purchasePrice * 30 / 100);
              return { value: minimumPrice, message: `Resale price must be at least 30% more than Purchase price. Minimum resale price should be ${minimumPrice}` };
          }
    })
    resalePrice: any[];

}