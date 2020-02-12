import { FormControlConfig } from "@rxweb/reactive-dynamic-forms"

export class SelectAllLogic extends FormControlConfig {
  selectAllCheckbox() {
    let values = [];
    if (!this.controlsConfig.hobbies.value) {
      (<any[]>this.controlsConfig.hobbies.source).forEach(t => {
        values.push(t.value);
      });
      this.controlsConfig.hobbies.value = values;
      this.controlsConfig.select.config.props.text = "Unselect All"
    }
    else {
      this.controlsConfig.hobbies.value = null;
      this.controlsConfig.select.config.props.text = "Select All"
    }
  }
}