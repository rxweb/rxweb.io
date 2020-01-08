---
title: Required
author: rxcontributorone
category: rxwebcore
subcategory: data-validation
type:simple
linktitle:required  
---
# Required

`Required` annotation will be used when you don't want the model property to be null. There are many properties of the validation which can be used based upon the scenario 

Let's consider a scenario where there is a model class `Candidate.cs` which has properties of  CandidateId, CandidateName.

# Basic Required Validation

````js
[Required]
public string CandidateName { get; set; }
````

Using required annotation before the property, this is not allow null value to be entered in CandidateName. There are several additional properties of the annotations which can be used to validate the property which are listed below:

<table class="table table bordered">
<tr><th>Property</th><th>Description</th><th>Syntax</th></tr>
<tr>
<td>allowWhiteSpace</td>
<td>You can also allow whitespace in that property, if you want to allow space in the property.</td>
<td>[Required(allowWhiteSpace: true)]</td>
</tr>
<tr>
<td>messageKey</td>
<td>You can set the messageKey based on localization with the help of `messageKey`</td>
<td>[Required(messageKey: "requiredMessageKey" )]</td>
</tr>
<tr>
<td>conditionalExpressionName</td>
<td>If you want to apply required validation based on a custom condition, pass that custom validation function's name in `conditionalExpressionName` property of Required validation. </td>
<td>| [Required(conditionalExpressionName:nameof(User.EmailConditionalExpression))] </td>
</tr>
<tr>
<td>dynamicConfigExpressionName</td>
<td>If you want to set any validation property at runtime, then `dynamicConfigExpressionName` can be used.</td>
<td> [Required(dynamicConfigExpressionName:nameof(EmailDynamicExpression))] </td>
</tr>
</table>

## allowWhiteSpace
Type : boolean

allowWhiteSpace property is set to true when you want to allow space in the CandidateName value. It should be set true before the annotation. By default it is set false.  

````js
[Required(allowWhiteSpace:true)]
public string CandidateName { get; set; }
````

## ConditionalExpressionName
Type : string
    
When you want the validation to be fired based upon some custom validation function. It is passed in the `ConditionalExpressionName` property.
The validation function is made in ExtendedModels folder of Main, In which a partial class of the model will be made.

In the ExtendedModel class
Candidate.cs :

````js
    public partial class User {

        public bool CandidateNameConditionalExpression(object parentEntity = null) {
            var t = this;
            return false;
        }
    }
````

And in the DbEntities class

````js
  [Required(conditionalExpressionName:nameof(User.EmailConditionalExpression))]
  public string CandidateName { get; set; }
````

## DynamicConfigExpressionName
Type : string

When you want to set validation property of validation at runtime(on the fly) validation, `DynamicConfigExpressionName` is set in which the custom function of dynamicExpressionName is passed.

In the ExtendedModel class

````js
    public partial class User {

        public Dictionary<string, object> CandidateNameDynamicExpression(object parentEntity = null) {
            return new Dictionary<string, object>()
            {
                { "CustomMessageKey","CustomRequiredKey" }
            };
        }
    }

````

In the DbEntities class

````js
    [Required(dynamicConfigExpressionName: nameof(CandidateNameDynamicExpression))]
    public string CandidateName { get; set; }
````

## MessageKey
Type : string

When you want to show a custom validation message based upon the entity. MessageKey property is used. Its value is stored in the database in the form of `LanguageContentKey` in LanguageContentKeys table and it's EN value is stored in LanguageContents table

**LanguageContentKeys Table**

<table class="table table-bordered">
<tr><th>LanguageContentKeyId</th><th>KeyName</th><th>IsComponent</th></tr>
<tr><td>1</td><td>RequiredMessageKey</td><td>0</td>
</table>

**LanguageContents Table**

<table class="table table-bordered">
<tr><th>LanguageContentId</th><th>LanguageContentKeyId</th><th>ContentType</th><th>En</th><th>Fr</th></tr>
<tr><td>1</td><td>1</td><td>g</td><td>This candidate data is required</td><td>NULL</td></tr>
</table>

In the DbEntity class : 

````js
    [Required(messageKey:"RequiredMessageKey")]
     public string CandidateName { get; set; }
````

