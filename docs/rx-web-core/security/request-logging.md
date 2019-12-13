---
title: Request Logging
author: rxcontributorone
category: security 
type:simple
linktitle:requestlogging
---

Whenever any request is made to the server, the information regarding the request made is logged which can be used for finding details such as:

* User who made the request
* TraceIdentifier 
* Type of the trace
* Title of the trace
* uri of the request made
* Verb of the request
* Ip of the client
* Request and response header
* StatusCode of the request
* In time 
* Out time 

# RequestTraces

| ColumnName | Description | Type | 
| ----------- | ----------- | ----------- |
| TraceId | Id of Trace(PK) | int |
| TraceIdentifier | TraceIdentifier | varchar(100) |
| TraceType | Type of the trace | varchar(10) |
| TraceTitle | Title of the trace | varchar(200) |
| Uri | Url | varchar(1024) |
| Verb | HttpVerb | varchar(10) |
| ClientIp | Ip of the client | varchar(50) |
| RequestHeader | Header Request | varchar(max) |
| ResponseHeader | Header Response | varchar(max) |
| StatusCode | Code of the status | int |
| InTime | In time | datetimeoffset(7) |
| OutTime | Out time | datetimeoffset(7) |

# ExceptionLogs 
For logging details about the exception occured whenever new request is made.

| ColumnName | Description | Type | 
| ----------- | ----------- | ----------- |
| ExceptionLogId | Id of Exception Log(PK) | int |
| TraceIdentifier | TraceIdentifier | varchar(100) |
| Message | Error Message | varchar(500) |
| ExceptionType | Type of exception | varchar(max) |
| StackTrace | Stack Trac   e of the expection | varchar(max) |
| InnerExceptionMessage | Inner expection message | varchar(200) |
| InnerExceptionStackTrace | Inner expection stack trace | varchar(max) |
| RequestBody | Parameters passed in the body | varchar(max) |
| CreatedDate | Name of creation | datetimeoffset(7) |


DataEntityAuditing is done to keep a log of every database change that has been made to the particular entity. 

# AuditRequest

Auditing a server request keeps a track and log of details while any HTTP request is made. It contains information about which user has made request on which application module including its path, method name, timezone and created date.   

> If any unauthenticated user makes request than the user information is not stored.

The following data is stored in AuditRequest 

| ColumnName | Description | Type | 
| ----------- | ----------- | ----------- |
| AuditRequestId | Id of Audit Request(PK) | int |
| TraceIdentifier | Url of the request | varchar(50) |
| KeyId | Id of entity | int |
| CompositeKeyId | Composite key of the entity | int |

# AuditRecord

AuditRecord keeps a trace of data of the table on which the operation is done, Its Key and composite key and the type of event which is occured.

The following data is stored in AuditRecord

| ColumnName | Description | Type | 
| ----------- | ----------- | ----------- |
| AuditRecordId | Id of Audit Record(PK) | int |
| AuditRequestId | Id of Audit Request(FK AuditRequest) | int |
| KeyId | Id of entity | int |
| CompositeKeyId | Composite key of the entity | int |
| EventType | Type of event | varchar(1) |
| TableName | Name of the table on which the operation is done | varchar(100) |

# AuditRecordDetails

Whenever entity is modified AuditRecordDetails keeps a track and log of information of oldValue, newValue, ColumnName where the updation is done.

The following data is stored in AuditRecordDetails

| ColumnName | Description | Type | 
| ----------- | ----------- | ----------- |
| AuditRecordDetailId | Id of Audit Record Detail(PK) | int |
| AuditRecordId | Id of Audit RecordId(FK AuditRecord) | int |
| ColumnName | Name of column where data is modified | varchar(50) |
| OldValue | Old Entity object value | nvarchar(MAX) |
| NewValue | New Entity object value | nvarchar(MAX) |

<table class="table table-bordered table-striped">
<tr><th>Column</th><th>Description</th><th>Type</th></tr>
<tr><td>AuditRecordDetailId</td><td>Id of Audit Record Detail(PK)</td><td>int</td></tr>
<tr><td>AuditRecordId</td><td>Id of Audit RecordId(FK AuditRecord)</td><td>Name of the application Object Type.</td></tr> 
<tr><td>ColumnName</td><td>Name of column where data is modified</td><td>nvarchar(50)</td></tr>
<tr><td>OldValue</td><td>Name of column where data is modified</td><td>nvarchar(50)</td></tr>
<tr><td>NewValue</td><td>Name of column where data is modified</td><td>nvarchar(50)</td></tr>
</table>


