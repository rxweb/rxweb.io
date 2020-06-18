---
title: Strongly Typed Reactive Forms
author: Ushmidave
category: strongly-types
type: simple
linktitle: strongly-typed-reactive-forms
---

<div><h1 >
    
    <span style="
    color: #6ea8db;
    background-color: #ffffff;
    padding-left: 5px;
    border-radius: 5px;
    padding-right: 5px;
">Strongly Typed Reactive Form</span>

</h1></div>


<div class="title-bar"><p>👊 <span style="
    color: aliceblue;
    background-color: #5ea1db;
    padding-left: 5px;
    border-radius: 5px;
    padding-right: 5px;
">Power</span> = <span style="
    color: #ffffff;
    background-color: #e7659b;
    padding-left: 5px;
    border-radius: 5px;
    padding-right: 5px;
">No Build Size</span> <span>&amp;&amp;</span> <span style="
    color: #ffffff;
    background-color: #a57fcf;
    padding-left: 5px;
    border-radius: 5px;
    padding-right: 5px;
">No Module Import</span> <span>&amp;&amp;</span> <span style="
    color: #ffffff;
    background-color: #76808f;
    padding-left: 5px;
    border-radius: 5px;
    padding-right: 5px;
">No Custom API</span> <span>&amp;&amp;</span> <span style="
    color: #ffffff;
    background-color: #61b89c;
    padding-left: 5px;
    border-radius: 5px;
    padding-right: 5px;
">Use Generic Interface Only</span> 😵 😷</p></div>


<div component="app-tabs" key="complete"></div>

[!TabGroup]
# [Quick View](#tab\completeview)
![image](assets/images/strong-types.gif)
# [/Quick View]
# [app.component.ts](#tab\completecomponent)
<div component="app-code" key="angular-strongly-typed-complete-component"></div> 
# [/app.component.ts]
# [address.ts](#tab\completemodel)
<div component="app-code" key="angular-strongly-typed-complete-address"></div> 
# [/address.ts]
# [skill.ts](#tab\completehtml)
<div component="app-code" key="angular-strongly-typed-complete-skill"></div> 
# [/skill.ts]
# [user.ts](#tab\completehtml)
<div component="app-code" key="angular-strongly-typed-complete-user"></div> 
# [/user.ts]
***

# What's More..?


 <div class="row page-section">
    <div class="col-lg-12">
      <h2 class="heading-margin">Error on other than interface properties</h2>
      <div class="row">
        <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
          <span class="hljs-built_in">this</span>.formGroup.controls.<span class="hljs-string-remove" style="text-decoration:underline">fakeControl</span><br/>
          <small class="hljs-string-remove" style="    margin-left: 206px;">(TS) Property 'fakeControl' does not exist on type'.  </small>
        </div>
      </div>
    </div>


  </div>

<div class="row page-section">
    <div class="col-lg-12">
      <h2 class="heading-margin">Strongly Typed Value Changes</h2>
      <div class="row">
       <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
          <span class="hljs-built_in">this</span>.<span>formGroup.controls.firstName.valueChanges.subscribe(value =&gt; {
        </span><br/>
              <span class="hljs-built_in" style="margin-left: 33px;">let</span>   <span class="hljs-string-remove" style="text-decoration: underline;">fakeValue</span> :   <span class="code-vs">Date</span> <span>= value;</span><br/>
          <small class="hljs-string-remove" style="margin-left: 55px;">(TS) Type 'string' is not assignable to type 'Date'. </small><br/>
           <span>})</span>
        </div>
      </div>
    </div>


  </div>


<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span>
                <span>.formGroup.addControl(</span>
                <span  class="hljs-string-remove" style="text-decoration:underline">"lastName"</span>
                <span>),</span>
                <span class="hljs-built_in"> new</span>
                 <span class="code-vs"> FormControl </span> 
                 <span>(</span>
                 <span         class="typeit-parameter-type">"abc"</span>
                 <span>));</span></br>
                        <small class="hljs-string-remove" style="margin-left: 242px;">(TS) Argument of type 'LastName' is not assignable to parameter of type 'firstName' |'adress' | 'skills' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span><span>.formGroup.patchValue({ </span>
                <span  class="hljs-string-remove" style="text-decoration:underline">lastName : </span>
             <span class="typeit-parameter-type">'ojha'</span><span>})</span></br>
                        <small class="hljs-string-remove" style=   " margin-left: 237px;">(TS) Argument of type '{lastName : string; }' is not assignable to parameter of type Partial&ltUser&gt'. </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span>
                <span>.formGroup.registerControl(</span>
                <span  class="hljs-string-remove" style="text-decoration:underline">"lastName"</span>
                <span>),</span>
                <span class="hljs-built_in"> new</span>
                 <span class="code-vs"> FormControl </span> 
                 <span>(</span>
                 <span         class="typeit-parameter-type">"abc"</span>
                 <span>));</span></br>
                        <small class="hljs-string-remove" style="margin-left: 274px;">(TS) Argument of type 'LastName' is not assignable to parameter of type 'firstName' |'adress' | 'skills' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span><span>.formGroup.removeControl( </span>
                <span  class="hljs-string-remove" style="text-decoration:underline">"lastName"</span><span>)</span></br>
                        <small class="hljs-string-remove" style="margin-left: 274px;">(TS) Argument of type 'LastName' is not assignable to parameter of type 'firstName' |'adress' | 'skills' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span><span>.formGroup.reset({ </span>
                <span  class="hljs-string-remove" style="text-decoration:underline">lastName : </span>
             <span class="typeit-parameter-type">'ojha'</span><span>})</span></br>
                        <small class="hljs-string-remove" style=   " margin-left: 193px;">(TS) Argument of type '{lastName : string; }' is not assignable to parameter of type Partial&ltUser&gt'. </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span>
                <span>.formGroup.setControl(</span>
                <span  class="hljs-string-remove" style="text-decoration:underline">"lastName"</span>
                <span>),</span>
                <span class="hljs-built_in"> new</span>
                 <span class="code-vs"> FormControl </span> 
                 <span>(</span>
                 <span         class="typeit-parameter-type">"abc"</span>
                 <span>));</span></br>
                        <small class="hljs-string-remove" style="margin-left: 242px;">(TS) Argument of type 'LastName' is not assignable to parameter of type 'firstName' |'adress' | 'skills' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span><span>.formGroup.setValue({ </span>
                <span  class="hljs-string-remove" style="text-decoration:underline">lastName : </span>
             <span class="typeit-parameter-type">'ojha'</span><span>})</span></br>
                        <small class="hljs-string-remove" style=   "    margin-left: 224px;">(TS) Argument of type '{lastName : string; }' is not assignable to parameter of type User'. </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span><span>.formGroup.get( </span>
                <span  class="hljs-string-remove" style="text-decoration:underline">"lastName"</span><span>)</span></br>
                        <small class="hljs-string-remove" style="margin-left: 172px;">(TS) Argument of type 'LastName' is not assignable to parameter of type 'firstName' |'adress' | 'skills' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span><span>.formGroup.getError( </span>
                <span  class="hljs-string-remove" style="text-decoration:underline">"lastName"</span><span>)</span></br>
                        <small class="hljs-string-remove" style="margin-left: 216px;">(TS) Argument of type 'LastName' is not assignable to parameter of type 'firstName' |'adress' | 'skills' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
                <span class="hljs-built_in">let</span><span class="hljs-string-remove" style="text-decoration:underline"> userFormGroupValue</span>
                <span> : </span><span class="code-vs">Address</span> <span> = </span>    <span class="hljs-built_in">this</span><span>.formGroup.value</span> <br/>
                        <small class="hljs-string-remove" style="    margin-left: 24px;">(TS) Property 'countryName' is missing in type 'User' but required in type 'Address'. </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span><span>.formGroup.contains( </span>
                <span  class="hljs-string-remove" style="text-decoration:underline">"abc"</span><span>)</span></br>
                        <small class="hljs-string-remove" style="margin-left: 220px;">(TS) Argument of type 'LastName' is not assignable to parameter of type 'firstName' |'adress' | 'skills' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
                <span class="hljs-built_in">let</span><span class="hljs-string-remove" style="text-decoration:underline"> user</span>
                <span> : </span><span class="code-vs">Address</span> <span> = </span>    <span class="hljs-built_in">this</span><span>.formGroup.getRawValue()</span><br/> 
                        <small class="hljs-string-remove" style="margin-left: 24px;">(TS) Property 'countryName' is missing in type 'User' but required in type 'Address'. </small>
             </div>               
        </div>
    </div>
</div>


<div class="row page-section">
    <div class="col-lg-12">
      <h2 class="heading-margin">....</h2>
      <div class="row">
       <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
          <span class="hljs-built_in">this</span>.<span>formGroup.controls.firstName.valueChanges.subscribe(value =&gt; {
        </span><br/>
              <span class="hljs-built_in" style="margin-left: 33px;">if</span>  <span>(</span> <span class="hljs-string-remove" style="text-decoration: underline;">status == "Fake"</span>  <span>)</span>  <span> { </span><br/>   <small class="hljs-string-remove" style="margin-left: 55px;">(TS)This condition will always return 'false' since the types 'VALID'  | INVALID' | 'PENDING' | 'DISABLED' and 'Fake' have no overlap </small><br/>
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
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
                <span class="hljs-built_in">let</span><span class="hljs-string-remove" style="text-decoration:underline">controlValue</span>
                <span> : </span><span class="code-vs">Date</span> <span> = </span>    <span class="hljs-built_in">this</span><span>.formGroup.controls.firstName.value;</span><br/> 
                        <small class="hljs-string-remove" style="margin-left: 24px;">(TS) Type 'string is not assignable to type 'Date'. </small>
             </div>               
        </div>
    </div>
</div>


<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span>
                <span>.formGroup.controls.firstName.setValue(</span>
                <span  class="hljs-string-remove" style="text-decoration:underline">new Date()</span>
                <span>)</span><br/>
                        <small class="hljs-string-remove" style="    margin-left: 380px;">(TS) Argument of type 'Date' is not assignable to parameter of type 'string' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span>
                <span>.formGroup.controls.firstName.patchValue(</span>
                <span  class="hljs-string-remove" style="text-decoration:underline">new Date()</span>
                <span>)</span><br/>
                        <small class="hljs-string-remove" style="margin-left: 401px;">(TS) Argument of type 'Date' is not assignable to parameter of type 'string' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
                <span class="hljs-built_in">this</span>
                <span>.formGroup.controls.firstName.reset(</span>
                <span  class="hljs-string-remove" style="text-decoration:underline">new Date()</span>
                <span>)</span><br/>
                        <small class="hljs-string-remove" style="margin-left: 354px;">(TS) Argument of type 'Date' is not assignable to parameter of type 'string' . </small>
             </div>               
        </div>
    </div>
</div>

<div class="row page-section">
    <div class="col-lg-12">
        <h2 class="heading-margin">...</h2>
        <div class="row">
            <div class="col-md-12 ts-code-design add-code-background" style="font-size: 18px;">
              <span class="hljs-built_in">let</span><span class="hljs-string-remove" style="text-decoration:underline">addressFormGroup</span>
                <span> = </span>    <span class="hljs-built_in">this</span><span>.formGroup.controls.address;</span> <span class="hljs-built_in">as</span> 
                <span class="code-vs">IFormGroup</span><span><</span><span class="code-vs">Address</span><span>></span> 
                <br/>
                <span class="hljs-built_in">this</span>
                <span>.formGroup.controls.firstName.reset(</span>
                <span  class="hljs-string-remove" style="text-decoration:underline">new Date()</span>
                <span>)</span><br/>
                        <small class="hljs-string-remove" style="margin-left: 353px;">(TS) Argument of type 'Date' is not assignable to parameter of type 'string' . </small>
             </div>               
        </div>
    </div>
</div>

