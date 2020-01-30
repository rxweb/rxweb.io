---
title: Value Conversion
author: rxcontributorone
category: working-with-data-model
subcategory: advance
type:simple
linktitle:valueconversion
---
# Value Conversion

For fields which required to be encrypted while storing the data in the database and to be decrypted while showing the data on the Ui. For example, the EmailId field of the Candidate table has to stored in an encrypted manner in the database and has to be decrypted while rendering it in the user interface. For such cases, we need to make a ExtendedModels folder in which we will make a class for the encryption and decryption logic

## Create ExtendedModel
Create a folder named ExtendedModel and into it make a folder named main. In that create a .cs file. here we make EncryptDecrypt.cs.  

````js
	  public class EncryptDecryptConverter : ValueConverter<string, string>
  {
    public static Expression&lt;Func&lt;string, string&gt;&gt; ConvertToProviderExpressions => (v) => //Encryption logic;

    public static Expression&lt;Func&lt;string, string&gt;&gt; ConvertFromProviderExpressions => (v) => // Decryption logic;

    public EncryptDecryptConverter()
      : base(ConvertToProviderExpressions, ConvertFromProviderExpressions) { }
  }
````

The above code will store the encrypted data in the database when `ConvertToProviderExpressions` is called and will retrieve the decrypted data while retrieving when `ConvertFromProviderExpressions` is called.

## Add annotation in the model class
In the Candidate.cs model class add the annotation of the created class above the property on which the value conversion should be done.

````js
[ValueConversion(typeof(EncryptDecryptConverter))]
public string EmailId { get; set; }
````


