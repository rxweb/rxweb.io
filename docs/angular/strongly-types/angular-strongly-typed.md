---
title: Strongly Typed Reactive Forms
author: Ushmidave
category: strongly-types
type: simple
linktitle: strongly-typed-reactive-forms
---

<div><h1>   
    <span style="color: #6ea8db;background-color: #ffffff;padding-left: 5px; border-radius: 5px; padding-right: 5px;">Strongly Typed Reactive Form</span>
</h1></div>


<div class="title-bar"><p>👊 <span style=" color: aliceblue;background-color: #5ea1db; padding-left: 5px; border-radius: 5px; padding-right: 5px;">@rxweb/types</span> = 
<span style=" color: #ffffff;    background-color: #e7659b;   padding-left: 5px;   border-radius: 5px;   padding-right: 5px;">No Build Size</span> <span>&amp;&amp;</span> <span style="    color: #ffffff;    background-color: #a57fcf;    padding-left: 5px;    border-radius: 5px;    padding-right: 5px;">No Module Import</span> 
<span>&amp;&amp;</span> 
<span style="    color: #ffffff;    background-color: #76808f;   padding-left: 5px;   border-radius: 5px;    padding-right: 5px;">No Custom API</span> <span>&amp;&amp;</span> <span style=" color: #ffffff; background-color: #61b89c; padding-left: 5px; border-radius: 5px;padding-right: 5px;">Use Generic Interface Only</span> 😵 😷</p></div>


<div component="app-tabs" key="complete"  style="padding-top: 20px;"></div>

[!TabGroup]
# [Quick Start](#tab\completequickstart)
<img style="margin:10px;" src='assets/images/strong-types.gif'/>
# [/Quick Start]
# [app.component.ts](#tab\completecomponent)
<img style="margin:10px;" src='https://user-images.githubusercontent.com/20392302/85085119-6ef66700-b1f4-11ea-852e-052de1d85ce2.png'/>
# [/app.component.ts]
# [user.ts](#tab\completehtml)
<img style="margin:10px;" src='https://user-images.githubusercontent.com/20392302/85085521-bfba8f80-b1f5-11ea-957d-a69b8035bd3e.png'/>
# [/user.ts]
# [address.ts](#tab\completemodel)
<img style="margin:10px;" src='https://user-images.githubusercontent.com/20392302/85085870-bda50080-b1f6-11ea-8efc-c2c0d9781f49.png'/>
# [/address.ts]
# [skill.ts](#tab\completehtml)
<img  style="margin:10px;"src='https://user-images.githubusercontent.com/20392302/85085842-aebe4e00-b1f6-11ea-9239-1e0e0fed74eb.png'/>
# [/skill.ts]

***

# What more ? 

<div class="row page-section">
    <div class="col-lg-12">
        <h3 class="" style="margin-top: 28px; margin-bottom: 30px;">Type Mismatch <span class="" style="background-color: #fff4f6;color: #9b112b;padding: 3px;border-radius: 5px;font-weight: 500;">Errors</span></h3>
      <h4  id="formGroup" style="font-size: 20px;margin-bottom: 20px;">formGroup : </h4>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span>
                <span>.formGroup.addControl(</span>
                <span  class="hljs-string-remove" style="text-decoration:underline">"lastName"</span>
                <span>),</span>
                <span class="hljs-built_in"> new</span>
                 <span class="code-vs"> FormControl </span> 
                 <span>(</span>
                 <span         class="typeit-parameter-type">"Doe"</span>
                 <span>));</span></br>
                        <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 245px;">(TS) Argument of type 'LastName' is not assignable to parameter of type 'firstName' |'adress' | 'skills' . </small>
             </div>               
        </div>
    </div>
</div>

  


<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span><span>.formGroup.patchValue({ </span>
                <span  class="hljs-string-remove" style="text-decoration:underline">lastName : </span>
             <span class="typeit-parameter-type">'Doe'</span><span>})</span></br>
                        <small class="strongly-type-error-message hljs-string-remove" style=   "margin-left: 244px;">(TS) Argument of type '{lastName : string; }' is not assignable to parameter of type Partial&ltUser&gt'. </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span>
                <span>.formGroup.registerControl(</span>
                <span  class="hljs-string-remove" style="text-decoration:underline">"lastName"</span>
                <span>),</span>
                <span class="hljs-built_in"> new</span>
                 <span class="code-vs"> FormControl </span> 
                 <span>(</span>
                 <span         class="typeit-parameter-type">"Doe"</span>
                 <span>));</span></br>
                        <small class="strongly-type-error-message hljs-string-remove" style="    margin-left: 277px;">(TS) Argument of type 'LastName' is not assignable to parameter of type 'firstName' |'adress' | 'skills' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span><span>.formGroup.removeControl( </span>
                <span  class="hljs-string-remove" style="text-decoration:underline">"lastName"</span><span>)</span></br>
                        <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 274px;">(TS) Argument of type 'LastName' is not assignable to parameter of type 'firstName' |'adress' | 'skills' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span><span>.formGroup.reset({ </span>
                <span  class="hljs-string-remove" style="text-decoration:underline">lastName : </span>
             <span class="typeit-parameter-type">'Doe'</span><span>})</span></br>
                        <small class="strongly-type-error-message hljs-string-remove" style=   " margin-left: 193px;">(TS) Argument of type '{lastName : string; }' is not assignable to parameter of type Partial&ltUser&gt'. </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span>
                <span>.formGroup.setControl(</span>
                <span  class="hljs-string-remove" style="text-decoration:underline">"lastName"</span>
                <span>),</span>
                <span class="hljs-built_in"> new</span>
                 <span class="code-vs"> FormControl </span> 
                 <span>(</span>
                 <span         class="typeit-parameter-type">"Doe"</span>
                 <span>));</span></br>
                        <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 242px;">(TS) Argument of type 'LastName' is not assignable to parameter of type 'firstName' |'adress' | 'skills' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span><span>.formGroup.setValue({ </span>
                <span  class="hljs-string-remove" style="text-decoration:underline">lastName : </span>
             <span class="typeit-parameter-type">'Doe'</span><span>})</span></br>
                        <small class="strongly-type-error-message hljs-string-remove" style=   "    margin-left: 224px;">(TS) Argument of type '{lastName : string; }' is not assignable to parameter of type User'. </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span><span>.formGroup.get( </span>
                <span  class="hljs-string-remove" style="text-decoration:underline">"lastName"</span><span>)</span></br>
                        <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 172px;">(TS) Argument of type 'LastName' is not assignable to parameter of type 'firstName' |'adress' | 'skills' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span><span>.formGroup.getError( </span>
                <span  class="hljs-string-remove" style="text-decoration:underline">"lastName"</span><span>)</span></br>
                        <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 216px;">(TS) Argument of type 'LastName' is not assignable to parameter of type 'firstName' |'adress' | 'skills' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">let</span><span class="hljs-string-remove" style="text-decoration:underline"> userFormGroupValue</span>
                <span> : </span><span class="code-vs">Address</span> <span> = </span>    <span class="hljs-built_in">this</span><span>.formGroup.value</span> <br/>
                        <small class="strongly-type-error-message hljs-string-remove" style="    margin-left: 24px;">(TS) Property 'countryName' is missing in type 'User' but required in type 'Address'. </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span><span>.formGroup.contains( </span>
                <span  class="hljs-string-remove" style="text-decoration:underline">"Doe"</span><span>)</span></br>
                        <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 220px;">(TS) Argument of type 'LastName' is not assignable to parameter of type 'firstName' |'adress' | 'skills' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">let</span><span class="hljs-string-remove" style="text-decoration:underline"> user</span>
                <span> : </span><span class="code-vs">Address</span> <span> = </span>    <span class="hljs-built_in">this</span><span>.formGroup.getRawValue()</span><br/> 
                        <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 24px;">(TS) Property 'countryName' is missing in type 'User' but required in type 'Address'. </small>
             </div>               
        </div>
    </div>
</div>


<div class="row page-section">
    <div class="col-lg-12">
      <h4 id="formControl"  style="font-size: 20px;    margin-top: 20px;margin-bottom: 20px;">formControl : </h4>
      <div class="row">
        <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
          <span class="hljs-built_in">this</span>.formGroup.controls.<span class="hljs-string-remove" style="text-decoration:underline">fakeControl</span><br/>
          <small class="strongly-type-error-message hljs-string-remove" style="    margin-left: 206px;">(TS) Property 'fakeControl' does not exist on type'.  </small>
        </div>
      </div>
    </div>


  </div>

<div class="row page-section">
    <div class="col-lg-12">
      <h2 class="heading-margin">...</h2>
      <div class="row">
       <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
          <span class="hljs-built_in">this</span>.<span>formGroup.controls.firstName.valueChanges.subscribe(value =&gt; {
        </span><br/>
              <span class="hljs-built_in" style="margin-left: 33px;">let</span>   <span class="hljs-string-remove" style="text-decoration: underline;">fakeValue</span> :   <span class="code-vs">Date</span> <span>= value;</span><br/>
          <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 55px;">(TS) Type 'string' is not assignable to type 'Date'. </small><br/>
           <span>})</span>
        </div>
      </div>
    </div>


  </div>



<div class="row page-section">
    <div class="col-lg-12">
      <h2 class="heading-margin">...</h2>
      <div class="row">
       <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
          <span class="hljs-built_in">this</span>.<span>formGroup.controls.firstName.valueChanges.subscribe(value =&gt; {
        </span><br/>
              <span class="hljs-built_in" style="margin-left: 33px;">if</span>  <span>(</span> <span class="hljs-string-remove" style="text-decoration: underline;">status == "Fake"</span>  <span>)</span>  <span> { </span><br/>   <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 55px;">(TS)This condition will always return 'false' since the types 'VALID'  | INVALID' | 'PENDING' | 'DISABLED' and 'Fake' have no overlap </small><br/>
               <span style="    margin-left: 15px;"> } </span><br/>
       
           <span>})</span>
        </div>
      </div>
    </div>


  </div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">let</span><span class="hljs-string-remove" style="text-decoration:underline">controlValue</span>
                <span> : </span><span class="code-vs">Date</span> <span> = </span>    <span class="hljs-built_in">this</span><span>.formGroup.controls.firstName.value;</span><br/> 
                        <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 24px;">(TS) Type 'string is not assignable to type 'Date'. </small>
             </div>               
        </div>
    </div>
</div>


<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span>
                <span>.formGroup.controls.firstName.setValue(</span>
                <span  class="hljs-string-remove" style="text-decoration:underline">new Date()</span>
                <span>)</span><br/>
                        <small class="strongly-type-error-message hljs-string-remove" style="    margin-left: 380px;">(TS) Argument of type 'Date' is not assignable to parameter of type 'string' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span>
                <span>.formGroup.controls.firstName.patchValue(</span>
                <span  class="hljs-string-remove" style="text-decoration:underline">new Date()</span>
                <span>)</span><br/>
                        <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 401px;">(TS) Argument of type 'Date' is not assignable to parameter of type 'string' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span>
                <span>.formGroup.controls.firstName.reset(</span>
                <span  class="hljs-string-remove" style="text-decoration:underline">new Date()</span>
                <span>)</span><br/>
                        <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 354px;">(TS) Argument of type 'Date' is not assignable to parameter of type 'string' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
         <h4 id="nestedFormGroup"  style="font-size: 20px;    margin-top: 20px;margin-bottom: 20px;">Nested formGroup : </h4>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
              <span class="hljs-built_in">let</span> <span>addressFormGroup</span>
                <span> = </span>    <span class="hljs-built_in">this</span><span>.formGroup.controls.address;</span> <span class="hljs-built_in">as</span> 
                <span class="code-vs">IFormGroup</span><span><</span><span class="code-vs">Address</span><span>></span> 
                <br/>
                <span class="hljs-built_in">this</span>
                <span>.formGroup.controls.countryName.setValue(</span>
                <span  class="hljs-string-remove" style="text-decoration:underline">new Date()</span>
                <span>)</span><br/>
                        <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 353px;">(TS) Argument of type 'Date' is not assignable to parameter of type 'string' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
         <h4 id="nestedFormArray" style="font-size: 20px;    margin-top: 20px;margin-bottom: 20px;">Nested formArray : </h4>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
              <span class="hljs-built_in">let</span> <span>skillFormArray</span>
                <span> = </span>    <span class="hljs-built_in">this</span><span>.formGroup.controls.skills;</span> <span class="hljs-built_in">as</span> 
                <span class="code-vs">IFormArray</span><span><</span><span class="code-vs">Skill</span><span>></span> 
                <br/>
                <span class="hljs-built_in">let</span>
                <span  class="hljs-string-remove" style="text-decoration:underline">rawValue</span>
                <span > : </span> <span class="code-vs">Address</span> <span>[] = skillFormArray.getRawValue(); </span>
                <br/>
                        <small class="strongly-type-error-message hljs-string-remove" style="margin-left">(TS) Type 'Skill[]' is not assignable to type 'Address[]'. </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
            <span>skillFormArray.insert(0,</span>
              <span class="hljs-built_in">this</span><span class="hljs-string-remove" style="text-decoration:underline">.formBuilder.group</span>
                <span><</span><span class="hljs-string-remove" style="text-decoration:underline">Address</span><span>></span><span class="hljs-string-remove" style="text-decoration:underline">({ countryName: [</span><span class="hljs-string-remove" style="text-decoration:underline">''</span><span class="hljs-string-remove" style="text-decoration:underline">] }));</span> 
                <span class="code-vs">IFormArray</span><span><</span><span class="code-vs">Skill</span><span>></span> 
                <br/>
                        <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 233px;">(TS) Argument of type 'IFormGroup&ltAddress&gt' is not assignable to parameter of type `IAbstractControl&ltSkill,any&gt`. </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
            <span>skillFormArray.push(</span>
              <span class="hljs-built_in">this</span><span class="hljs-string-remove" style="text-decoration:underline">.formBuilder.group</span>
             <span class="hljs-string-remove" style="text-decoration:underline">Address</span><span>></span><span class="hljs-string-remove" style="text-decoration:underline">({ countryName: [</span><span class="hljs-string-remove" style="text-decoration:underline">''</span><span class="hljs-string-remove" style="text-decoration:underline">] }));</span> 
                <span class="code-vs">IFormArray</span><span><</span><span class="code-vs">Skill</span><span>></span> 
                <br/>
                        <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 213px;">(TS) Argument of type 'IFormGroup&ltAddress&gt' is not assignable to parameter of type `IAbstractControl&ltSkill,any&gt`. </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
            <span>skillFormArray.setControl(0,</span>
              <span class="hljs-built_in">this</span><span class="hljs-string-remove" style="text-decoration:underline">.formBuilder.group</span>
               <span class="hljs-string-remove" style="text-decoration:underline">Address</span><span>></span><span class="hljs-string-remove" style="text-decoration:underline">({ countryName: [</span><span class="hljs-string-remove" style="text-decoration:underline">''</span><span class="hljs-string-remove" style="text-decoration:underline">] }));</span> 
                <span class="code-vs">IFormArray</span><span><</span><span class="code-vs">Skill</span><span>></span> 
                <br/>
                        <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 273px;">(TS) Argument of type 'IFormGroup&ltAddress&gt' is not assignable to parameter of type `IAbstractControl&ltSkill,any&gt`. </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
                <span class="hljs-built_in">let</span>
                <span  class="hljs-string-remove" style="text-decoration:underline">formArrayValue</span>
                <span > : </span> <span class="code-vs">Address</span> <span>[] = skillFormArray.value; </span>
                <br/>
                        <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 26px;">(TS) Type 'Skill[]' is not assignable to type 'Address[]'. </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
      <h2 class="heading-margin">...</h2>
      <div class="row">
       <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
          <span>skillFormArray</span>.<span>valueChanges.subscribe(skills =&gt; {
        </span><br/>
              <span class="hljs-built_in" style="margin-left: 33px;">let</span>   <span class="hljs-string-remove" style="text-decoration: underline;">values</span> :   <span class="code-vs">Address</span> <span>[] = skills;</span><br/>
          <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 55px;">(TS) Type 'skill[]' is not assignable to type 'Address[]'. </small><br/>
           <span>})</span>
        </div>
      </div>
    </div>
  </div>

  <div class="row page-section">
    <div class="col-lg-12">
      <h2 class="heading-margin">...</h2>
      <div class="row">
       <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
          <span>skillFormArray</span>.<span>reset([{
        </span><br/>
              <span class="hljs-string-remove" style="margin-left: 22px;text-decoration: underline;" style="margin-left: 33px;">name :  </span> <span class="hljs-built_in"> new </span> <span>Date()</span><br/>
          <small class="strongly-type-error-message hljs-string-remove" style="margin-left: 19px;">(TS) Argument of type '{ name : Date; }[]' is not assignable to parameter of type 'ControlState&ltSkill[]&gt'. </small><br/>
           <span>}]);</span>
        </div>
      </div>
    </div>
  </div>