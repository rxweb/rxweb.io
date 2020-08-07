---
title: Customized Control Design
author: rxcontributortwo
category: dynamic-forms
type: simple
linktitle: customizedcontroldesign
---

rxweb dynamic forms is providing absolute flexibility to design your customized controls with all the features like customized controls like hide, input, focus for textbox, checkbox, radio and all other formcontrols, binding different attributes like placeholder, readonly, class or name, other events like click on buttons and links.

Have a look on how you can create these customized control design:

# Designing Constant

Let's assume you want to make a custom textbox design appending the icon with the label which is mentioned below: 

```html
<div class="input-control" style="margin-bottom: 1rem;">
  <label>
    <img src="https://rxwebioassets.blob.core.windows.net/$web/images/account.svg" />
    <span class="placeholder">Account Number</span>
  </label>
  <input formControlName="account-number" type="number" />
</div>
<div class="input-control" style="margin-bottom: 1rem;">
  <label>
    <img src="https://rxwebioassets.blob.core.windows.net/$web/images/bank.svg" />
    <span class="placeholder">Bank Name</span>
  </label>
  <input formControlName="bank-name" type="text" />
</div>
```

Above design is bit different than than usual textbox design which is generally generated in basic dynamic forms but with rxweb you can easily customize your control's UI. 

For designing that, first you need to make a constant with the same design as you need to create through dynamic forms. Below is a same custom design constant which will generate your above design mentioned in html.

```js
const customInputDesign = ['div', [{
  attr: { class: ['input-1'] },
  for: {
    source: function (item, index) {
      return ["label", ["img", [{
        attr: { src: item.value, alt: "img" }
      }],
        "span", [{ attr: { class: ["placeholder"] }, prop: { innerText: item.text } }]],
        "input", [{ attr: { type: item.type } }],
      ]
    }
  }
}]]
```

# Bind this design with a custom type

After creating the constant, you need to bind it with `DYNAMIC_ELEMENT_DESIGN_TREE` of `@rxweb/reactive-dynamic-forms` by giving it a name as custom type which you can use in your control type property in server data. `profile-input` is the custom-type name given to the above constant:

```ts
DYNAMIC_ELEMENT_DESIGN_TREE["profile-input"] = customInputDesign;
```

# Use custom type in control

As you have resolved this custom design with it's custom type-name, you can use this type-name in your control which you will set in `serverData`. You can bind customized attributes in `source` property of server data and set it dynamically in constant 

```ts
serverData: Array<{ [key: string]: any }> = [
  {
    type: 'profile-input',
    name: 'bank-name',
    source: [{ value: 'https://rxwebioassets.blob.core.windows.net/$web/images/bank.svg', text: 'Bank Name', type: 'text' }],
    ui: {
      viewMode: {
        advance: {
          div: ['col-md-6']
        }
      }
    }
  },
  {
    type: 'profile-input',
    name: 'account-number',
    source: [{ value: 'https://rxwebioassets.blob.core.windows.net/$web/images/account.svg', text: 'Account Number', type: 'number' }],
    ui: {
      viewMode: {
        advance: {
          div: ['col-md-6']
        }
      }
    }
  }
]
```
