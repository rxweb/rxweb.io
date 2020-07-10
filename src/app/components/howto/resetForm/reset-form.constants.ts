import { ResetCompleteValidatorComponent } from "src/assets/examples/howto/validators/resetForm/complete/reset-complete.component";
import { ResetCompleteComponent } from "src/assets/examples/howto/decorators/resetForm/complete/reset-complete.component";
import { ResetControlsOnlyValidatorComponent } from "src/assets/examples/howto/validators/resetForm/controlsOnly/reset-controls-only.component";
import { ResetControlsOnlyComponent } from "src/assets/examples/howto/decorators/resetForm/controlsOnly/reset-controls-only.component";
import { ResetFormGroupsOnlyComponent } from "src/assets/examples/howto/decorators/resetForm/formGroupsOnly/reset-form-group-only.component";
import { ResetFormGroupsOnlyValidatorComponent } from "src/assets/examples/howto/validators/resetForm/formGroupsOnly/reset-form-group-only.component";
import { ResetFormArraysOnlyComponent } from "src/assets/examples/howto/decorators/resetForm/formArraysOnly/reset-form-array-only.component";
import { ResetFormArraysOnlyValidatorComponent } from "src/assets/examples/howto/validators/resetForm/formArraysOnly/reset-form-array-only.component";
import { ResetcontrolsAndFormGroupsOnlyValidatorComponent } from "src/assets/examples/howto/validators/resetForm/controlsAndFormGroupsOnly/reset-controls-and-form-groups-only.component";
import { ResetAllValidatorComponent } from "src/assets/examples/howto/validators/resetForm/all/reset-all.component";
import { ResetcontrolsAndFormGroupsOnlyComponent } from "src/assets/examples/howto/decorators/resetForm/controlsAndFormGroupsOnly/reset-controls-and-form-groups-only.component";
import { ResetAllComponent } from "src/assets/examples/howto/decorators/resetForm/all/reset-all.component";
import { ResetWithValidatorComponent } from "src/assets/examples/howto/validators/resetForm/with/reset-with.component";
import { ResetWithComponent } from "src/assets/examples/howto/decorators/resetForm/with/reset-with.component";
import { ResetValueValidatorComponent } from "src/assets/examples/howto/validators/resetForm/value/reset-value.component";
import { ResetValueComponent } from "src/assets/examples/howto/decorators/resetForm/value/reset-value.component";
import { ResetDefinedPropsOnlyComponent } from "src/assets/examples/howto/decorators/resetForm/definedPropsOnly/reset-defined-props-only.component";
import { ResetDefinedPropsOnlyValidatorComponent } from "src/assets/examples/howto/validators/resetForm/definedPropsOnly/reset-defined-props-only.component";





export const RESET_FORM_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators:
    {
        complete:ResetCompleteValidatorComponent,
        controlsOnly:ResetControlsOnlyValidatorComponent,
        formGroupsOnly:ResetFormGroupsOnlyValidatorComponent,
        formArraysOnly:ResetFormArraysOnlyValidatorComponent,
        controlsAndFormgroupsOnly:ResetcontrolsAndFormGroupsOnlyValidatorComponent,
        all:ResetAllValidatorComponent,
        with:ResetWithValidatorComponent,
        value:ResetValueValidatorComponent,
        definedPropsOnly:ResetDefinedPropsOnlyValidatorComponent
    },
    decorators:
    {
        complete:ResetCompleteComponent,
        controlsOnly:ResetControlsOnlyComponent,
        formGroupsOnly:ResetFormGroupsOnlyComponent,
        formArraysOnly:ResetFormArraysOnlyComponent,
        controlsAndFormgroupsOnly:ResetcontrolsAndFormGroupsOnlyComponent,
        all:ResetAllComponent,
        with:ResetWithComponent,
        value:ResetValueComponent,
        definedPropsOnly:ResetDefinedPropsOnlyComponent
    }
}