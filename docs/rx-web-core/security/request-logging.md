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

<table class="table table-bordered table-striped">
<tr><th>ColumnName</th><th>Description</th><th>Type</th></tr>
<tr><td>TraceId</td><td>Id of Trace(PK)</td><td>int</td></tr>
<tr><td>TraceIdentifier</td><td>TraceIdentifier</td><td>varchar(100)</td></tr> 
<tr><td>TraceType</td><td>Type of the trace</td><td>varchar(10)</td></tr>
<tr><td>TraceTitle</td><td>Title of the trace</td><td>varchar(200)</td></tr>
<tr><td>Uri</td><td>Url</td><td>varchar(1024)</td></tr>
<tr><td>Verb</td><td>HttpVerb</td><td>varchar(10)</td></tr>
<tr><td>ClientIp</td><td>Ip of the client</td><td>varchar(50)</td></tr>
<tr><td>RequestHeader</td><td>Header Request</td><td>varchar(max)</td></tr>
<tr><td>ResponseHeader</td><td>Header Response</td><td>varchar(max)</td></tr>
<tr><td>StatusCode</td><td>Code of the status</td><td>int</td></tr>
<tr><td>InTime</td><td>In Time</td><td>datetimeoffset(7)</td></tr>
<tr><td>OutTime</td><td>Out Time</td><td>datetimeoffset(7)</td></tr>
</table>

# ExceptionLogs 
For logging details about the exception occured whenever new request is made.

<table class="table table-bordered table-striped">
<tr><th>ColumnName</th><th>Description</th><th>Type</th></tr>
<tr><td>ExceptionLogId</td><td>Id of Exception Log(PK)</td><td>int</td></tr>
<tr><td>TraceIdentifier</td><td>TraceIdentifier</td><td>varchar(100)</td></tr> 
<tr><td>Message</td><td>Error Message</td><td>varchar(500)</td></tr>
<tr><td>ExceptionType</td><td>Type of exception</td><td>varchar(max)</td></tr>
<tr><td>StackTrace</td><td>Stack Trace of the exception</td><td>varchar(max)</td></tr>
<tr><td>InnerExceptionMessage</td><td>Inner expection message</td><td>varchar(200)</td></tr>
<tr><td>InnerExceptionStackTrace</td><td>Inner expection stack trace</td><td>varchar(max)</td></tr>
<tr><td>RequestBody</td><td>Parameters passed in the body</td><td>varchar(max)</td></tr>
<tr><td>CreatedDate</td><td>Name of creation</td><td>datetimeoffset(7)</td></tr>
</table>

DataEntityAuditing is done to keep a log of every database change that has been made to the particular entity. 

# AuditRequest

Auditing a server request keeps a track and log of details while any HTTP request is made. It contains information about which user has made request on which application module including its path, method name, timezone and created date.   

> If any unauthenticated user makes request than the user information is not stored.

The following data is stored in AuditRequest 

<table class="table table-bordered table-striped">
<tr><th>ColumnName</th><th>Description</th><th>Type</th></tr>
<tr><td>AuditRequestId</td><td>Id of Audit Requests(PK)</td><td>int</td></tr>
<tr><td>TraceIdentifier</td><td>Url of the request</td><td>varchar(50)</td></tr> 
<tr><td>KeyId</td><td>Id of entity</td><td>int</td></tr>
<tr><td>CompositeKeyId</td><td>Composite key of the entity</td><td>int</td></tr>
</table>

# AuditRecord

AuditRecord keeps a trace of data of the table on which the operation is done, Its Key and composite key and the type of event which is occured.

The following data is stored in AuditRecord

<table class="table table-bordered table-striped">
<tr><th>ColumnName</th><th>Description</th><th>Type</th></tr>
<tr><td>AuditRecordId</td><td>Id of Audit Record(PK)</td><td>int</td></tr>
<tr><td>AuditRequestId</td><td>Id of Audit RequestId(FK AuditRecord)</td><td>int</td></tr> 
<tr><td>KeyId</td><td>Id of entity</td><td>int</td></tr>
<tr><td>CompositeKeyId</td><td>Composite key of the entity</td><td>int</td></tr>
<tr><td>EventType</td><td>Type of event</td><td>varchar(1)</td></tr>
<tr><td>TableName</td><td>Name of the table on which the operation is done</td><td>varchar(100)</td></tr>
</table>

# AuditRecordDetails

Whenever entity is modified AuditRecordDetails keeps a track and log of information of oldValue, newValue, ColumnName where the updation is done.

The following data is stored in AuditRecordDetails

<table class="table table-bordered table-striped">
<tr><th>ColumnName</th><th>Description</th><th>Type</th></tr>
<tr><td>AuditRecordDetailId</td><td>Id of Audit Record Detail(PK)</td><td>int</td></tr>
<tr><td>AuditRecordId</td><td>Id of Audit RecordId(FK AuditRecord)</td><td>Name of the application Object Type.</td></tr> 
<tr><td>ColumnName</td><td>Name of column where data is modified</td><td>nvarchar(50)</td></tr>
<tr><td>OldValue</td><td>Old Entity object value</td><td>nvarchar(MAX)</td></tr>
<tr><td>NewValue</td><td>New Entity object value</td><td>nvarchar(MAX)</td></tr>
</table>


