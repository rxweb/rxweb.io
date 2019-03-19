You can create a FormGroup through this service. This provides a group method and formGroup method. Both are used for creating a FormGroup. Both can be used in different cases.
Let's see in which cases we can use which method.

# group
This provides all feature of Angular FormBuilder ```group``` method as well as some other features which is important while creating complex forms, like if we want to create a FormGroup dynamically or we don't want pre-configure the validators. The validation rules are coming from the server and bind the validation rules runtime on the respective FormControl.

Here, we discuss three cases which can be achieved through ```group``` method

Before diving into the code, lets first understand the ```group``` method defination.

```js
group(groupObject: {
        [key: string]: any;
    }, validatorConfig?: FormBuilderConfiguration): FormGroup
```
The group method accepts the json object which will convert ino the ```FormControl```, ```FormGroup``` or ```FormArray``` as per the specified value and the second parameter is used for dynamic validation which we discuss end of this documentation.
## Create the FormGroup
We discuss the simillar approach which we are doing through the Angular FormBuilder. But the only one difference is you don't need to create a nested FormGroup without calling the ```group``` method.
Here, we create a FormControl, nested FormGroup and nested FormArray inside the FormGroup. See the below code

```js
export class UserComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: RxFormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
          userName:['',Validators.required],
          password:['',[Validators.required,Validators.min(5)]],
          confirmPassword:['',RxwebValidators.compare({fieldName:'password'})],
          address:{
            areaName:''
          },
          hobbies:[
          {
            name:''
          }]
        });
    }
}
```
### Dynamically Create a FormGroup with Dynamic Validation Rules
Here we create a FormGroup dynamically and apply the validation rule of respective FormControl. For more understanding first we see the JSON data which comming from the server, For better understanding let's give a name of User object. This user object have some validation rules which is also coming from the server.

Let's see the user object as below:
```json
{
  "firstName":"John",
  "lastName":"Cena"
}
```
See dynamic validation rules below:
```json
{
  "firstName":{
    "required":true
  },
  "lastName":{
    "required":true
  }
}
```
Now, For dynamic server validation rules we can make a call to server or put a JSON object of validation rules. 
Here we are putting static JSON object of validation rules, See the below code:
```js
  this.userInfoFormGroup = this.formBuilder.group({
          firstName:'',
          lastName:''
        },{
          dynamicValidation:{
            "firstName":{
              "required":true
            },
            "lastName":{
              "required":true
            }
          }
        });
```
# formGroup
If you are using decorator based validation approach then your FormGroup will be created through this method. This you many ways to create the FormGroup. We discuss one by one all approches.
The most important thing in decorator based validation is you have to define a model first afterthat you can create the FormGroup.
Let's create a User model:
```js
import { required } from "@rxweb/reactive-form-validators"

export class User {

  @required()
  firstName:string;

  @required()
  lastName:string;

}
```
#### Create a FormGroup through Model without instance
This scenario can be used in add form.
```js
this.userInfoFormGroup = this.formBuilder.formGroup(User);
```

#### Create a FormGroup through Model instance
```js
this.user = new User();
this.userInforFormGroup = this.formBuilder.formGroup(this.user);
```
#### Create a FormGroup with server data and server values should be mapped with model properties
This can be used in edit form where the values are coming from the server and we have to create the form as well as the validation rules can be applied based upon validation decorator configured on the property of the User Model.
```js
let jObject = {"firstName":"John","lastName":"Cena"};
this.userInfoFormGroup = this.formBuilder.formGroup(User,jObject);
```
As per the above code, You have to pass the two parameter first parameter is User model and the second is the server json data. The server data JSON object properties should be the same as User model properties.

