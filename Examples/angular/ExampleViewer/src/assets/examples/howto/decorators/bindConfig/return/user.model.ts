import {  numeric,NumericValueType } from "@rxweb/reactive-form-validators"
export class User {


    @numeric({
      dynamicConfig: (x, y) => {
                            if(x.typeValue == 1)
                            return {acceptValue: NumericValueType.PositiveNumber}
                            else
                            return {acceptValue: NumericValueType.NegativeNumber}
                        },
                            allowDecimal: false,
                        message: 'Positive Integer'
    })
    negativeNumber: number;

}