---
title: formGroup Class Instance
author: Ushmidave
category: strongly-types
type: simple
linktitle: formGroup-class-instance
---
# formArray Class Instance

<img style="margin:10px;" src='assets/images/strongly-typed-form-array.png'/>

<div class="row page-section" style="padding-bottom: 60px;">
    <div class="col-lg-12">
        <h4 class="" style="margin-top: 28px; margin-bottom: 30px;">Type Mismatch <span class="" style="background-color: #fff4f6;color: #9b112b;padding: 3px;border-radius: 5px;font-weight: 500;">Errors</span></h4>
        <div class="row">
        <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
          <span class="hljs-built_in">let</span> <span>control</span> = formGroup.controls.<span class="hljs-string-remove" style="text-decoration:underline">fakeControl</span><br/>
          <small class="strongly-type-error-message hljs-string-remove" style="        margin-left: 278px;">(TS) Property 'fakeControl' does not exist on type'.  </small>
        </div>
      </div>
    </div>
</div>

# formGroup Class Instance

<img style="margin:10px;" src='assets/images/strongly-typed-form-group.png'/>

<div class="row page-section" style="padding-bottom: 60px;">
    <div class="col-lg-12">
        <h4 class="" style="margin-top: 28px; margin-bottom: 30px;">Type Mismatch <span class="" style="background-color: #fff4f6;color: #9b112b;padding: 3px;border-radius: 5px;font-weight: 500;">Errors</span></h4>
        <div class="row">
        <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
          <span class="hljs-built_in">let</span> <span class="hljs-string-remove" style="text-decoration:underline">address </span> <span class="code-vs">Address</span><span>[]</span> <span>:</span><span>= formArray.value;</span><br/>
          <small class="strongly-type-error-message hljs-string-remove" style="        margin-left: 27px;">(TS) Type 'skill[]' is not assignable to type 'address[]'.  </small>
        </div>
      </div>
    </div>
</div>

# formControl Class Instance

<img style="margin:10px;" src='assets/images/strongly-typed-form-control.png'/>

<div class="row page-section">
    <div class="col-lg-12">
        <h4 class="" style="margin-top: 28px; margin-bottom: 30px;">Type Mismatch <span class="" style="background-color: #fff4f6;color: #9b112b;padding: 3px;border-radius: 5px;font-weight: 500;">Errors</span></h4>
        <div class="row">
        <div class="col-md-12 ts-code-design add-code-strongly-typed-background" style="font-size: 18px;">
          <span class="hljs-built_in">let</span> <span class="hljs-string-remove" style="text-decoration:underline">value </span> <span>:</span> <span class="code-vs">Date</span> <span>:</span><span>= formControl.value;</span><br/>
          <small class="strongly-type-error-message hljs-string-remove" style="        margin-left: 27px;">(TS) Type 'string' is not assignable to type 'Date'.  </small>
        </div>
      </div>
    </div>
</div>
