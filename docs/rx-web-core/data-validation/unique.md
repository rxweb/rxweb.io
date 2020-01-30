---
title: Unique
author: rxcontributorone
category: rxwebcore
subcategory: data-validation
type:simple
linktitle:unique
---
# Unique

`Unique` validation annotation lets you enter unique value in an array based model property. 

let's consider a scenario where data insertion operation is to be done on candidate entity. The candidate contains various fields like candidateName, EmailId, country etc.. The EmailId field should be entered in such a way that if the emailId already exists in the database the insertion should not take place. This is done using `[Unique]` annotation.  

# Basic Unique Validation  
For performing a basic unique validation on the candidate entity.

**Step 1 :**
Create an extended model folder in the main folder and into that create a partial class of Candidate 

````js
    [Unique(connection: typeof(IMainDatabaseFacade), uniqueQueryMethod:nameof(Candidate.UniqueEmailId))]
````

The Unique validation function will be made in the main folder of the ExtendedModels folder. 

````js
    public partial class Candidate {

        public bool UniqueEmailId(object Email = null) {
            if(!Candidates.any(x=>x.EmailId == Email))
            return false
        }
    }
````

**Step 2:**
Add annotation validation above the model class

<table class="table table bordered">
<tr><th>Property</th><th>Description</th><th>Syntax</th></tr>
<tr>
<td>connection</td>
<td>The Type of connection used.</td>
<td>typeof(IMainDatabaseFacade)</td>
</tr>
<tr>
<td>uniqueQueryMethod</td>
<td>the query method used for applying unique validation.</td>
<td>uniqueQueryMethod:nameof(Candidate.UniqueEmailId)</td>
</tr>
<td>conditionalExpressionName</td>
<td>If you want to apply unique validation based on a custom condition, pass that custom validation function's name in `conditionalExpressionName` property of Unique validation. </td>
<td>[Unique(`typeof`(IMainDatabaseFacade),`conditionalExpressionName`:nameof(`Unique.CandidateEmailConditionalExpression`))]</td>
</tr>
<tr>
<td>dynamicConfigExpressionName</td>
<td>If you want to set any validation property at runtime, then `dynamicConfigExpressionName` can be used.</td>
<td> [Unique(`typeof`(IMainDatabaseFacade),`dynamicConfigExpressionName`:nameof(`CandidateEmailDynamicExpression`))]</td>
</tr>
<tr>
<td>messageKey</td>
<td>You can set the messageKey based on localization with the help of `messageKey`</td>
<td>[Unique(typeof(IMainDatabaseFacade),`messageKey`:"UniqueMessageKey")]</td>
</tr>
<tr>
</table>

## ConditionalExpressionName

Type : string

When you want the validation to be fired based upon some custom validation function. It is passed in the `ConditionalExpressionName` property.
The custom validation function is made in ExtendedModels folder of Main, In which a partial class of the model will be made.

In the ExtendedModel class
Candidate.cs :

````js
    public partial class Candidate {

        public bool UniqueEmailId(object Email = null) {

            if(!Candidates.any(x=>x.EmailId == Email))
            return false
        }
    }
````

And in the DbEntities class
Person.cs

````js
  [Unique(conditionalExpressionName:nameof(Person.PersonConditionalExpression))]
  public string PersonName { get; set; }
````

## DynamicConfigExpressionName
Type : string

When you want to set validation property of validation at runtime(on the fly) validation, `DynamicConfigExpressionName` is set in which the custom function of dynamicExpressionName is passed.

In the ExtendedModel class

````js
    public partial class CandidateEmail {

        public Dictionary&ltstring, object&gt CandidateEmailDynamicExpression(object parentEntity = null) {
            return new Dictionary&ltstring, object&gt()
            {
                { "CustomMessageKey","CustomUniqueKey" }
            };
        }
    }

````

In the DbEntities class

````js
    [Unique(dynamicConfigExpressionName: nameof(CandidateEmailDynamicExpression))]
    public string EmailId { get; set; }
````

## MessageKey
Type : string

When you want to show a custom validation message based upon the entity. MessageKey property is used. Its value is stored in the database in the form of `LanguageContentKey` in LanguageContentKeys table and it's EN value is stored in LanguageContents table

**LanguageContentKeys Table**

<table class="table table-bordered">
<tr><th>LanguageContentKeyId</th><th>KeyName</th><th>IsComponent</th></tr>
<tr><td>1</td><td>UniqueMessageKey</td><td>0</td>
</table>

**LanguageContents Table**

<table class="table table-bordered">
<tr><th>LanguageContentId</th><th>LanguageContentKeyId</th><th>ContentType</th><th>En</th><th>Fr</th></tr>
<tr><td>1</td><td>1</td><td>g</td><td>This candidate data should be unique</td><td>NULL</td></tr>
</table>

In the DbEntity class : 

````js
    [Unique(messageKey:"UniqueMessageKey")]
     public string EmailId { get; set; }
````


