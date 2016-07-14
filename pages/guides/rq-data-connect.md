---
title: RQ Data Connect Guide
permalink: /guides/rq-data-connect
tags: []
keywords: 
audience: 
last_updated: 11-04-2016
summary: 
---

{% include linkrefs.html %}

## Overview

This guide is intended to demonstrate common use cases for [RQ Data Connect](/api/RQ-Data-Connect) and [RQ Data Connect Bridge](/api/RQ-Data-Connect-Bridge) which are collectively referred to as **RQ Data Connect/Bridge** in this guide.

### Prerequisites

To use this guide, the following steps must be completed:

* You must have your **onboarding package** from iQmetrix, which includes your access credentials
* You must have **RQ v4.23** or later (required for RQ Data Connect/Bridge)

{{tip}}
If the above steps are not complete or you are not sure, contact {{contact_support}}.
{{end}}

## Authentication Options

See the table below to determine which method of authentication is best for you.

| If... | Then... |
|:------|:--------|
| You want to authenticate using only a username and password | See [Basic Authentication](#basic-authentication) |
| You are using a program such as Excel that does not support headers | See [URL Parameter Authentication](#url-parameter-authentication) |
| The above options do not apply to you | See [Obtaining an Access Token](http://developers.iqmetrix.com/api/authentication/#obtaining-an-access-token) |

## Authentication Priority 

If multiple methods of authentication are provided, priority is resolved as follows:

1. Bearer Token
2. Basic Token
3. Auth URI Parameter

##### Examples

| URI Parameters | Headers | Token Used |
|:---------------|:--------|:-----------|
| Auth=AAAA | Authorization: Bearer BBBB<br/> Authorization: Basic CCCC | BBBB |
| Auth=AAAA | Authorization: Basic CCCC | CCCC |
| Auth=AAAA | | AAAA |

### Basic Authentication 

Basic Authentication allows you to authenticate using a username and password to create a **Basic Token** which will remain valid as long as your username and password do not change.

To generate a Basic Token, you can use the request <a href="/api/RQ-Data-Connect/#basic-authentication-with-platform-credentials">Basic Authentication with Platform Credentials</a>.

It is important to note that value of the `Authorization` header in this request is a **base 64 encoded** version of your username and password. This value is not URL safe and should not be used as a Basic Token for authentication.

##### Example Request

    GET https://rqdataconnectdemo.iqmetrix.net/session
    Authorization: Basic vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw

#### Example Response

    HTTP 200 Content-Type: application/json
    {
        "access_token": "b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz",
        "isValid": true,
        "ParentEntityId": 21090,
        "RQEmployeeId": 3494,
        "basic_token": "vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw",
        "PreferredEndpoint": "https://rqdataconnect18.iqmetrix.net"
    }

The `basic_token` is placed in the `Authorization` header of a request prefixed by the word `Basic`.

##### Example

    GET https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema
    Authorization: Basic vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw

### URL Parameter Authentication

URL Parameter Authentication allows you to authenticate without headers, such as when...

* Integrating with a system that does not support headers **or**
* Accessing a report through a basic URL is required

To authenticate using this method, you must first generate a **Basic Token**. This token will remain valid as long as your username and password do not change. See [Basic Authentication](#basic-authentication) for examples.

Once you have a Basic Token, it can be placed as a URL parameter in a request using the key `Auth`.

##### Example

    https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema?Auth=vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw

## Compression Options

RQ Data Connect/Bridge supports the compression algorithms gzip and deflate in the `Accept-Encoding` header.

To learn more about Data Compression, see [Data Compression 101](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer?hl=en).

The examples below demonstrate how to use gzip or deflate compression when making a request.

##### gzip example

    GET https://rqdataconnectdemo.iqmetrix.net/session
    Authorization: Basic vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw
    Accept-Encoding: gzip

##### deflate example

    GET https://rqdataconnectdemo.iqmetrix.net/session
    Authorization: Basic vRMt17P8rIBWWbVbLzLWjTNyLfvESgA2yfXhze0WZN7HSIl4slGV866p9dSw
    Accept-Encoding: deflate

## Response Options

RQ Data Connect/Bridge supports multiple response types using the `Response` URI parameter.

If no parameter is provided the default response type is JSON.

See the table below for a complete list of response types.

| Format | Response Type | Notes | Example URL | 
|:-------|:--------------|:------|:------------|
| JSON | application/json | Default response type | https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema |
| CSV | text/csv | | https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema?Response=Csv |
| XML | text/xml | |  https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema?Response=Xml |
| Excel File | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet | Binary .xlsx File that **not** support live refresh | https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema?Response=Excel |

## Using Postman

This example will demonstrate how to generate a Basic Token using the request <a href="/api/RQ-Data-Connect/#basic-authentication-with-platform-credentials">Basic Authentication with Platform Credentials</a> and [Postman](https://www.getpostman.com/).

### Step 1 - Import Collection

For Chrome or Mac users, click the button below to import the collection directly into Postman. Alternatively, you can <a href="https://www.getpostman.com/collections/3d08e8f94077a2a6b37d">download the collection</a>.

<div class="postman-run-button"
data-postman-action="collection/import"
data-postman-var-1="3d08e8f94077a2a6b37d"
data-postman-param="env%5BpostmanEnv%5D=W3sidHlwZSI6InRleHQiLCJlbmFibGVkIjp0cnVlLCJrZXkiOiJlbiIsInZhbHVlIjoiZGVtbyIsImhvdmVyZWQiOmZhbHNlfSx7InR5cGUiOiJ0ZXh0IiwiZW5hYmxlZCI6dHJ1ZSwia2V5IjoidXNlcm5hbWUiLCJ2YWx1ZSI6IiIsImhvdmVyZWQiOmZhbHNlfSx7InR5cGUiOiJ0ZXh0IiwiZW5hYmxlZCI6dHJ1ZSwia2V5IjoicGFzc3dvcmQiLCJ2YWx1ZSI6IiIsImhvdmVyZWQiOmZhbHNlfSx7InR5cGUiOiJ0ZXh0IiwiZW5hYmxlZCI6dHJ1ZSwia2V5IjoiY2xpZW50X2lkIiwidmFsdWUiOiIiLCJob3ZlcmVkIjpmYWxzZX0seyJ0eXBlIjoidGV4dCIsImVuYWJsZWQiOnRydWUsImtleSI6ImNsaWVudF9zZWNyZXQiLCJ2YWx1ZSI6IiIsImhvdmVyZWQiOmZhbHNlfSx7InR5cGUiOiJ0ZXh0IiwiZW5hYmxlZCI6dHJ1ZSwia2V5IjoiYWNjZXNzX3Rva2VuIiwidmFsdWUiOiIiLCJob3ZlcmVkIjpmYWxzZX0seyJ0eXBlIjoidGV4dCIsImVuYWJsZWQiOnRydWUsImtleSI6InJlZnJlc2hfdG9rZW4iLCJ2YWx1ZSI6IiIsImhvdmVyZWQiOmZhbHNlfSx7ImtleSI6ImJhc2ljX3Rva2VuIiwidmFsdWUiOiIiLCJ0eXBlIjoidGV4dCIsImVuYWJsZWQiOnRydWV9LHsidHlwZSI6InRleHQiLCJlbmFibGVkIjp0cnVlLCJrZXkiOiJTdXBwbGllcklkIiwidmFsdWUiOiIiLCJob3ZlcmVkIjpmYWxzZX0seyJ0eXBlIjoidGV4dCIsImVuYWJsZWQiOnRydWUsImtleSI6IkZlZWRJZCIsInZhbHVlIjoiIiwiaG92ZXJlZCI6ZmFsc2V9LHsidHlwZSI6InRleHQiLCJlbmFibGVkIjp0cnVlLCJrZXkiOiJQcm9kdWN0SWQiLCJ2YWx1ZSI6IiIsImhvdmVyZWQiOmZhbHNlfSx7InR5cGUiOiJ0ZXh0IiwiZW5hYmxlZCI6dHJ1ZSwia2V5IjoiU3Vic2NyaWJhYmxlTGlzdElkIiwidmFsdWUiOiIiLCJob3ZlcmVkIjpmYWxzZX0seyJ0eXBlIjoidGV4dCIsImVuYWJsZWQiOnRydWUsImtleSI6Ik9yZGVySWQiLCJ2YWx1ZSI6IiIsImhvdmVyZWQiOmZhbHNlfSx7ImtleSI6IkNvbXBhbnlJZCIsInZhbHVlIjoiIiwidHlwZSI6InRleHQiLCJlbmFibGVkIjp0cnVlLCJob3ZlcmVkIjpmYWxzZX0seyJrZXkiOiJMb2NhdGlvbklkIiwidmFsdWUiOiIiLCJ0eXBlIjoidGV4dCIsImVuYWJsZWQiOnRydWUsImhvdmVyZWQiOmZhbHNlfSx7ImtleSI6IkN1c3RvbWVySWQiLCJ2YWx1ZSI6IiIsInR5cGUiOiJ0ZXh0IiwiZW5hYmxlZCI6dHJ1ZSwiaG92ZXJlZCI6ZmFsc2V9LHsia2V5IjoiQ2F0YWxvZ0l0ZW1JZCIsInZhbHVlIjoiIiwidHlwZSI6InRleHQiLCJlbmFibGVkIjp0cnVlLCJob3ZlcmVkIjpmYWxzZX0seyJrZXkiOiJQcmljaW5nVGVybUlkIiwidmFsdWUiOiIiLCJ0eXBlIjoidGV4dCIsImVuYWJsZWQiOnRydWUsImhvdmVyZWQiOmZhbHNlfSx7ImtleSI6IkNvbnRhY3RNZXRob2RJZCIsInZhbHVlIjoiIiwidHlwZSI6InRleHQiLCJlbmFibGVkIjp0cnVlLCJob3ZlcmVkIjpmYWxzZX0seyJrZXkiOiJBZGRyZXNzSWQiLCJ2YWx1ZSI6IiIsInR5cGUiOiJ0ZXh0IiwiZW5hYmxlZCI6dHJ1ZSwiaG92ZXJlZCI6ZmFsc2V9LHsia2V5IjoiUHJpbnRhYmxlSWQiLCJ2YWx1ZSI6IiIsInR5cGUiOiJ0ZXh0IiwiZW5hYmxlZCI6dHJ1ZSwiaG92ZXJlZCI6ZmFsc2V9XQ=="></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>

### Step 2 - Open Collection

Click on RQ Data Connect Guide, a collection in the sidebar.

If you do not see the collection, ensure the "Collection" tab is selected and not "History".

<img src="{{ "/images/rq-data-connect/postman-collection.png" | prepend: site.url }}" alt="Postman Collection" />

### Step 3 - Open Request

The collection will open showing a list of requests. Click on Basic Authentication to load the request

<img src="{{ "/images/rq-data-connect/postman-collection-request.png" | prepend: site.url }}" alt="Request in Postman" />      

### Step 4 - Change Environment Values

Click on the environment selector (drop down box in top right corner) and select "Manage Environments"

<img src="{{ "/images/rq-data-connect/env-picker.png" | prepend: site.url }}" alt="Environment Picker" />    

Click on "postmanEnv" in the list to bring up an edit screen

<img src="{{ "/images/rq-data-connect/env-editor.png" | prepend: site.url }}" alt="Environment Editor" />        

Modify the following values:

* en - {{Environment}} to access. For production/live, leave empty. For sandbox, use "demo"
* username - Username from your onboarding package
* password - Password from your onboarding package

Click Update to update the postman environment and then click X to close the editor

### Step 5 - Perform the Request

Click on the Send button to perform the request.
      
The Basic Token is listed in the response as <code>basic_token</code>

<img src="{{ "/images/rq-data-connect/response.png" | prepend: site.url }}" alt="Postman Response" />

## Excel Import

This section explains how you can import data from RQ Data Connect/Bridge directly into Excel (2016).

For this example, we will get the [Inventory Listing Report](#getting-the-inventory-listing-report) with the following parameters:

### Step 1 - Load From Web

First open Excel and create a new workbook.

In the top bar, click on Data -> New Query -> From Other Sources -> From Web.

<img src="{{ "/images/rq-data-connect/load-from-web.png" | prepend: site.url }}" alt="Load query from web" />

### Step 2 - Enter URL

Enter the Request URL into the URL box and click OK.

Ensure the Request URL includes `Response=Xml` so Excel can load the data. 

{{note}}Response=Excel is not used as it outputs a binary file{{end}}

<img src="{{ "/images/rq-data-connect/from-web.png" | prepend: site.url }}" alt="Enter URL" />

### Step 3 - Access Web Content

If this is the first time you are accessing the endpoint in Excel, a window will appear with authentication options.

Select Basic in the sidebar and enter your username and password, then click Connect.

To learn more about authentication methods, see {{AuthenticationOptions}}.

<img src="{{ "/images/rq-data-connect/access-content.png" | prepend: site.url }}" alt="Access Web Content" />

### Step 4 - Select Record

A navigator will appear and load tables into a a list.

Select a record and click the Load button.

<img src="{{ "/images/rq-data-connect/navigator.png" | prepend: site.url }}" alt="Select Record" />

### Step 5

The record will be placed into a table in Excel, as shown below.

<img src="{{ "/images/rq-data-connect/results.png" | prepend: site.url }}" alt="Results" />
