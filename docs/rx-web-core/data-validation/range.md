---
title: Range
author: rxcontributorone
category: rxwebcore
subcategory: data-validation
type:simple
linktitle:range
---

`Range` annotation is used when you want a property value in a specific range. 

Let's consider a scenario where there is a model class `Candidate.cs` which has properties of  CandidateId, CandidateName and Age.

# Basic Maxlength Validation

````js
    [Range(2,10)]
    public string ContactNumber { get; set; }
````
<table class="table table bordered">
<tr><th>Property</th><th>Description</th><th>Syntax</th></tr>
<tr>
<td>maxLength</td>
<td>Enter value which you want to restrict the limit upto.</td>
<td>[(10)]</td>
</tr>
<tr>
<td>messageKey</td>
<td>You can set the messageKey based on localization with the help of `messageKey`</td>
<td>[MaxLength(`messageKey`: "maxLengthMessageKey" )]</td>
</tr>
<tr>
<td>conditionalExpressionName</td>
<td>If you want to apply maxLength validation based on a custom condition, pass that custom validation function's name in `conditionalExpressionName` property of MaxLength validation.</td>
<td>[MaxLength(`conditionalExpressinName`:nameof(`User.ContactConditionalExpression`))]</td>
</tr>
<tr>
<td>dynamicConfigExpressionName</td>
<td>If you want to set any validation property at runtime, then `dynamicConfigExpressionName` can be used.</td>
<td>[MaxLength(`dynamicConfigExpressionName`:nameof(`AdressDynamicExpression`))]</td>
</tr>
</table>

## allowMaximumLength
Type : int

The minimum length based upon which the value is limited.

````js
    [MaxLength(10)]
    public string ContactNumber { get; set; }
````

## ConditionalExpression 
Type : string

`MaxLength` validation annotation can be applied conditionally based on the custom validation function. You can write your condition by making a custom function in your class and pass that function's name in `nameOf` property of `conditionalExpressionName`. 

The custom validation function is made in ExtendedModels folder of Main, In which a partial class of the model will be made.

In the ExtendedModel class
Candidate.cs :

````js
    public partial class Candidate {

        public string Email { get; set; }

        public bool ContactConditionalExpression(object parentEntity = null) {
            var t = this;
            if (Email == "")
                return false;
            else return true;
        }
    }
````

And in the DbEntities class

````js
  [MaxLength((10),conditionalExpressionName:nameof(Candidate.ContactConditionalExpression))]
  public string ContactNumber { get; set; }
````

# dynamicConfigExpressionName

If you want to set any validation property at runtime, then `dynamicConfigExpressionName` can be used. 

For example, if you want to set messageKey of any model property at run time:
Here is the dynamic expression function.

````js
    public partial class Candidate {

        public Dictionary<string, object> AdressDynamicExpression(object parentEntity = null) {
            return new Dictionary<string, object>()
            {
                { "CustomMessageKey","CustomMaxLengthKey" }
            };
        }
    }

````

In the DbEntities table :

````js
    [MaxLength( `dynamicConfigExpressionName`: nameof(`AddressDynamicExpression`))]
    public string Address { get; set; }
````

## MessageKey
Type : string

When you want to show a custom validation message based upon the entity. MessageKey property is used. Its value is stored in the database in the form of `LanguageContentKey` in LanguageContentKeys table and it's EN value is stored in LanguageContents table

**LanguageContentKeys Table**

<table class="table table-bordered">
<tr><th>LanguageContentKeyId</th><th>KeyName</th><th>IsComponent</th></tr>
<tr><td>1</td><td>MaxLengthMessageKey</td><td>0</td>
</table>

**LanguageContents Table**

<table class="table table-bordered">
<tr><th>LanguageContentId</th><th>LanguageContentKeyId</th><th>ContentType</th><th>En</th><th>Fr</th></tr>
<tr><td>1</td><td>1</td><td>g</td><td>This candidate data exceeds the maxLength</td><td>NULL</td></tr>
</table>

In the DbEntity class : 

````js
    [MaxLength((10),messageKey:"MaxLengthMessageKey")]
     public string Address { get; set; }
````

# See Also
Required Validation