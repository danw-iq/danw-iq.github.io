---
title:  RQ Data Connect Bridge
permalink: /api/RQ-Data-Connect-Bridge/
tags: []
keywords: 
audience: 
last_updated: 13-7-2016
summary: 
rouge: false
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}




## Overview


RQ Data Connect Bridge is intended to be an alternative to database replication, and allows you to retrieve tables from your RQ database

For examples of how RQ Data Connect Bridge can be used, see [Extended Examples](#extended-examples).


## Endpoints

* Sandbox: <a href="https://rqdataconnectdemo.iqmetrix.net">https://rqdataconnectdemo.iqmetrix.net</a>
* Production: <a href="https://rqdataconnect.iqmetrix.net">https://rqdataconnect.iqmetrix.net</a>

## Resources

### TableColumn

Each table in the latest version of RQ will have a TableColumn resource for each of its columns

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| TableName | String | Name of the table | `iQclerk_ARPaymentInvoicesAndPayments` |
| Column_Name | String | Name of the column | `ReferenceNumber` |
| Length | Integer | Maximum acceptable input size, where applicable | `30` |
| ORDINAL_POSITION | Integer | Position of the column in the table | `8` |
| Type | String | Database type | `varchar` |

### Delta

A resource representing changes to a table in the latest version of RQ.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| DeltaCount | Integer | Number of rows that have changes | `68` |
| DeltaTimeSec | Integer | @TODO | `28704556` |
| Table | String | Name of a table in the latest version of RQ | `CarrierIntegrationCustomerHandsets` |





## Requests



<h3 id='getting-table-schemas-in-latest-rq' class='clickable-header top-level-header'>Getting Table Schemas in Latest RQ</h3>

This request will return a list of the columns in each table in the latest version of RQ.  


<h4>Request</h4>

<pre>
GET /bridge/current/schema
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-table-schemas-in-latest-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-table-schemas-in-latest-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-table-schemas-in-latest-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-table-schemas-in-latest-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-table-schemas-in-latest-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-table-schemas-in-latest-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-table-schemas-in-latest-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-table-schemas-in-latest-rq">
<pre id="http-code-getting-table-schemas-in-latest-rq"><code class="language-http">GET /bridge/current/schema
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-table-schemas-in-latest-rq">
<pre id="curl-code-getting-table-schemas-in-latest-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-table-schemas-in-latest-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-table-schemas-in-latest-rq"><code class="language-csharp">static IRestResponse GettingTableSchemasInLatestRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-table-schemas-in-latest-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-table-schemas-in-latest-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTableSchemasInLatestRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-table-schemas-in-latest-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-table-schemas-in-latest-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#tablecolumn'>TableColumn</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "TableName": "iQclerk_ARPaymentInvoicesAndPayments",
        "Column_Name": "ReferenceNumber",
        "Length": 30,
        "ORDINAL_POSITION": 8,
        "Type": "varchar"
    }
]</pre>

<h3 id='getting-rows-from-a-table-in-rq' class='clickable-header top-level-header'>Getting Rows from a Table in RQ</h3>

This request will return the contents of a table in the latest version of RQ. The response to this request will match the appropriate table schema defined in [Getting Table Schemas in Latest RQ](#getting-table-schemas-in-latest-rq).

<h4>Request</h4>

<pre>
GET /bridge/current/data?Table={TableName}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>TableName</code> (<strong>Required</strong>)  - Name of a Table in RQ, for a complete list see <a href="#getting-schema-for-the-latest-version-of-rq">Getting Schema for the Latest Version of RQ</a>
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-rows-from-a-table-in-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-rows-from-a-table-in-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-rows-from-a-table-in-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-rows-from-a-table-in-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-rows-from-a-table-in-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-rows-from-a-table-in-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-rows-from-a-table-in-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-rows-from-a-table-in-rq">
<pre id="http-code-getting-rows-from-a-table-in-rq"><code class="language-http">GET /bridge/current/data?Table=CarrierIntegrationCustomerHandsets
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-rows-from-a-table-in-rq">
<pre id="curl-code-getting-rows-from-a-table-in-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/bridge/current/data?Table=CarrierIntegrationCustomerHandsets" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-rows-from-a-table-in-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-rows-from-a-table-in-rq"><code class="language-csharp">static IRestResponse GettingRowsFromATableInRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/bridge/current/data?Table=CarrierIntegrationCustomerHandsets");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-rows-from-a-table-in-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-rows-from-a-table-in-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingRowsFromATableInRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/bridge/current/data?Table=CarrierIntegrationCustomerHandsets");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-rows-from-a-table-in-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-rows-from-a-table-in-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/bridge/current/data?Table=CarrierIntegrationCustomerHandsets', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
  {
    "CarrierCustomerHandsetID": "7f1b91e2-9692-4efe-923b-7bc90720ccb8",
    "CarrierCustomerID": "62c24270-503a-4de4-9d75-416c92a748d7",
    "SaleInvoiceID": -1,
    "StoreID": 3,
    "PhoneMake": null,
    "PhoneModel": "Unknown Device",
    "ESN": "",
    "IMEI": "354493046773064",
    "CustomTelephoneNumber": "8186368202",
    "BAN": null,
    "SIM": "89014103254674079938",
    "MDN": null,
    "ActivationDate": "",
    "ExpiryDate": "",
    "RateORServicePlanName": null,
    "RateORServicePlanDescription": null,
    "RateORServicePlanInclusions": null,
    "RateORServicePlanSOC": "FN2NM0A60",
    "RateORServicePlanTerm": null,
    "RateORServicePlanFeatures": null,
    "RateORServicePlanContractTerm": "2",
    "SalesRepName": null,
    "DealerName": "HJG6E",
    "BillingCycle": null,
    "BillingCycleDate": "17",
    "DepositAmount": "0.00",
    "BillingCode": "",
    "IsActivatedIQ": 0,
    "RateORServicePlan2SOC": null,
    "RateORServicePlan2Description": null,
    "DealerCode": null,
    "CompanyCode": null,
    "PortInNumber": null,
    "DepositIndicator": "No Deposit",
    "FlowType": null,
    "ActivationTermType": null,
    "IsBYOD": null,
    "Priority": null,
    "CarrierServiceResource": null,
    "RowThumbprint": "1c1103c2-db83-4df9-a86d-1b649bf304ee",
    "RowInserted": "2014-10-01T15:00:12.05",
    "RowUpdated": null,
    "Operation": "Inserted"
  },
  ...
}  
</pre>

<h3 id='getting-changes-to-a-table-in-rq' class='clickable-header top-level-header'>Getting Changes to a Table in RQ</h3>

This request will return a summary of the changes or "deltas" in a table in the latest version of RQ since a specified date.

<h4>Request</h4>

<pre>
GET /bridge/current/delta?Table={TableName}&RowDateTime={RowDateTime}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>TableName</code> (<strong>Required</strong>)  - Name of a Table in RQ, for a complete list see <a href="#getting-schema-for-the-latest-version-of-rq">Getting Schema for the Latest Version of RQ</a>
    </li>
    
    <li>
        <code>RowDateTime</code> (<strong>Required</strong>)  - Changes since this date will be returned in the response
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-changes-to-a-table-in-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-changes-to-a-table-in-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-changes-to-a-table-in-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-changes-to-a-table-in-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-changes-to-a-table-in-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-changes-to-a-table-in-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-changes-to-a-table-in-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-changes-to-a-table-in-rq">
<pre id="http-code-getting-changes-to-a-table-in-rq"><code class="language-http">GET /bridge/current/delta?Table=CarrierIntegrationCustomerHandsets&RowDateTime=2015-07-14T23:26:39.000Z
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-changes-to-a-table-in-rq">
<pre id="curl-code-getting-changes-to-a-table-in-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/bridge/current/delta?Table=CarrierIntegrationCustomerHandsets&RowDateTime=2015-07-14T23:26:39.000Z" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-changes-to-a-table-in-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-changes-to-a-table-in-rq"><code class="language-csharp">static IRestResponse GettingChangesToATableInRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/bridge/current/delta?Table=CarrierIntegrationCustomerHandsets&RowDateTime=2015-07-14T23:26:39.000Z");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-changes-to-a-table-in-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-changes-to-a-table-in-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingChangesToATableInRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/bridge/current/delta?Table=CarrierIntegrationCustomerHandsets&RowDateTime=2015-07-14T23:26:39.000Z");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-changes-to-a-table-in-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-changes-to-a-table-in-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/bridge/current/delta?Table=CarrierIntegrationCustomerHandsets&RowDateTime=2015-07-14T23:26:39.000Z', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#delta'>Delta</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "DeltaCount": 68,
        "DeltaTimeSec": 28704556,
        "Table": "CarrierIntegrationCustomerHandsets"
    }
]</pre>

<h2 id="extended-examples" class="clickable-header top-level-header">Extended Examples</h2>

These examples are intended to illustrate some suggested uses of RQ Data Connect Bridge.

### Data Replication

In this example, we will get a list of time off requests made since January 1st, 2016, which are stored in the table iQplanner_HR_RequestedTimeOff.

First we must see if there is any data using [Getting Changes to a Table in RQ](#getting-changes-to-a-table-in-rq). This will return a list of "Deltas" or changes to the table since a specified date.

##### Example Request

```
GET https://rqdataconnectdemo.iqmetrix.net/bridge/current/delta?Table=iQplanner_HR_RequestedTimeOff&RowDateTime=2016-01-01T00:00:00.000Z
Authorization: Bearer (Access Token)
```

##### Example Response

```
[
  {
    "Table": "iQplanner_HR_RequestedTimeOff",
    "DeltaCount": 26,
    "DeltaTimeSec": 10844356
  }
]
```

From the response we can see there have been changes to 26 rows in the iQplanner_HR_RequestedTimeOff table since January 1st, 2016.

Next we must ensure the application we are building knows what the iQplanner_HR_RequestedTimeOff table looks like.

This data can be obtained using the [Getting Table Schemas in Latest RQ](#getting-table-schemas-in-latest-rq).

##### Example Request

```
GET https://rqdataconnectdemo.iqmetrix.net/bridge/current/schema
Authorization: Bearer (Access Token)
```

##### Example Response

```
[
  ...,
  {
    "TableName": "iQplanner_HR_RequestedTimeOff",
    "Column_Name": "RequestID",
    "Type": "int",
    "Length": null,
    "ORDINAL_POSITION": 1
  },
  {
    "TableName": "iQplanner_HR_RequestedTimeOff",
    "Column_Name": "EmployeeID",
    "Type": "int",
    "Length": null,
    "ORDINAL_POSITION": 2
  },
  ...
]
```

From the response we can see the format of the data that will be returned in the next request, using [Getting Rows from a Table in RQ](#getting-rows-from-a-table-in-rq)

##### Example Request

```
GET https://rqdataconnectdemo.iqmetrix.net/bridge/current/data?Table=iQplanner_HR_RequestedTimeOff
Authorization: Bearer (Access Token)
```

##### Example Response

```
[
  {
    "RequestID": 39,
    "EmployeeID": 31,
    "DateFrom": "2011-11-05T08:30:00",
    "DateTo": "2011-11-05T17:30:00",
    "Type": 1,
    "Status": 1,
    "Notes": "Dentist",
    "ApprovedByID": 8,
    "ManagerNotes": "",
    "Paid": false,
    "PaidNotes": "",
    "TimeZoneID": 5,
    "SubmitDate": "2011-08-31T08:06:57.09",
    "RequestedByID": null,
    "DaysRequested": null,
    "RowThumbprint": "ac5a4ffa-3a4c-4424-9d88-4743517b8549",
    "RowInserted": "2011-08-31T08:06:57.09",
    "RowUpdated": null,
    "Operation": "Inserted"
  },
  ...
]
``` 
