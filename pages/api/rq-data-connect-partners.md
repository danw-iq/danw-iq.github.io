---
title:  Envysion Rq Data Connect
permalink: /api/Envysion-RQ-Data-Connect/
tags: []
keywords: 
audience: 
last_updated: 11-7-2016
summary: 
rouge: false
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}




## Overview


#### Authentication

Envysion RQ Data Connect supports many different methods of authentication, see {{AuthenticationOptions}}.     


## Endpoints

* Sandbox: <a href="https://rqdataconnectdemo.iqmetrix.net">https://rqdataconnectdemo.iqmetrix.net</a>
* Production: <a href="https://rqdataconnect.iqmetrix.net">https://rqdataconnect.iqmetrix.net</a>

## Resources

### Category

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CategoryNumber | NVARCHAR (100) | Identifier for the Category | `10101012` |
| CategoryName | NVARCHAR (MAX) | Category Name | `Financing` |
| CategoryPath | NVARCHAR (MAX) | Category | `>> Activations >> Financing` |

### Store

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| StoreID | Integer | Identifier for a Store in RQ | `1188` |
| City | String | City | `Phoenix` |
| Address | String | Address | `27617 Commerce Center Dr` |
| StoreName | String | Store name | `Altera Kiosk` |

### CashIn

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| cash_in_id | Integer |  | `6882` |
| store_id | Integer |  | `1` |
| terminal_id | Integer |  | `0` |
| in_date | DateTime |  | `2009-10-27T09:35:30.767` |
| amount | Decimal |  | `0` |
| comment | String |  |  |
| employee_name | String |  | `Shirley Butterick` |
| employee_id | Integer |  | `4` |
| employee_name_2 | String |  | `Shirley Butterick` |
| employee_id_2 | Integer |  | `4` |

### CashOut

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| cash_out_id | Integer |  | `104253` |
| store_id | Integer |  | `1` |
| terminal_id | Integer |  | `0` |
| out_date | DateTime |  | `2011-04-13T11:35:23.32` |
| amount | Integer |  | `332478` |
| comment | String |  | `b` |
| employee_name | String |  | `brad berezowski` |
| employee_id | Integer |  | `2863` |
| employee_name_2 | String |  | `brad berezowski` |
| employee_id_2 | Integer |  | `2863` |

### OriginalSalesInvoice

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| store_id | Integer |  | `1` |
| invoice_id | Integer |  | `1265314` |
| orig_store_id | Integer |  | `1` |
| orig_invoice_id | Integer |  | `1265312` |
| orig_date | DateTime |  | `2013-04-09T08:23:51.93` |
| orig_receipt | String |  | `00001IN1805` |
| orig_employee_name | String |  | `Aaron Wilder` |
| orig_employee_id | Integer |  | `45` |
| orig_terminal_id | Integer |  | `0` |
| orig_workstation | String |  | `null` |

### PunchClockEntry

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| punch_id | Integer |  | `7341` |
| store_id | Integer |  | `1` |
| time_in | DateTime |  | `2010-01-04T08:00:00` |
| time_out | DateTime |  | `2010-01-04T12:33:00` |
| statue | Integer |  | `1` |
| manager_verified | Boolean |  | `false` |
| employee_verified | Boolean |  | `true` |
| in_comment | String |  |  |
| out_comment | String |  | `Auto-Punch Out` |
| employee_name | String |  | `Jose Malta` |
| employee_id | Integer |  | `2` |

### PunchClockEntryRevision

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| revision_id | Integer |  | `1567` |
| punch_id | Integer |  | `6276` |
| revised_time_in | DateTime |  | `null` |
| revised_time_out | DateTime |  | `null` |
| revised_date | DateTime |  | `2010-01-14T16:06:18.25` |
| revision_type | Integer |  | `3` |
| comment | String |  | `wrong location - entered correctly at corporate office` |
| orig_time_in | DateTime |  | `2010-01-04T06:12:52.79` |
| orig_time_out | DateTime |  | `2010-01-04T15:06:36.677` |
| store_id | Integer |  | `1` |
| employee | String |  | `Cathy Day` |
| employee_id | Integer |  | `107` |
| revised_by_employee | String |  | `Dayle Paulson` |
| revised_by_employee_id | Integer |  | `7` |

### SaleInvoiceCoupon

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| StoreID1 | Integer |  | `1` |
| DateCreated | DateTime |  | `2012-06-11T13:13:51.74` |
| SaleInvoiceID | Integer |  | `1263859` |
| InvoiceIDByStore | String |  | `00001IN1001` |
| Amount | Decimal |  | `3.5` |
| Description | String |  | `Normal Coupon` |

### SaleInvoicePayment

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| store_id | Integer |  | `1` |
| trans_create_time | DateTime |  | `2010-03-10T15:20:19.323` |
| trans_logged_time | DateTime |  | `null` |
| terminal_id | Integer |  | `0` |
| workstation_name | String |  | `null` |
| invoice_id | Integer |  | `524371` |
| is_bill_payment | Boolean |  | `0` |
| payment_type | String |  | `Cash` |
| amount | Decimal |  | `152.25` |
| change_amount | Decimal |  | `0` |
| employee_name | String |  | `Shirley Butterick` |
| employee_id | Integer |  | `4` |
| customer_id | String |  | `null` |
| customer_member_num | Integer |  | `null` |
| employee_name_3 | String |  | `Shirley Butterick` |
| comments | String |  |  |
| receipt_number | String |  | `00001IN117` |

### SaleInvoiceProduct

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| store_id | Integer |  | `1` |
| trans_create_time | DateTime |  | `2010-03-10T15:20:19.323` |
| trans_logged_time | DateTime |  | `null` |
| terminal_id | Integer |  | `0` |
| workstation_name | String |  | `null` |
| invoice_id | Integer |  | `524371` |
| is_bill_payment | Boolean |  | `0` |
| payment_type | String |  | `Cash` |
| amount | Decimal |  | `152.25` |
| change_amount | Decimal |  | `0` |
| employee_name | String |  | `Shirley Butterick` |
| employee_id | Integer |  | `4` |
| customer_id | Integer |  | `null` |
| customer_member_num | Integer |  | `null` |
| employee_name_3 | String |  | `Shirley Butterick` |
| comments | String |  |  |
| receipt_number | String |  | `00001IN117` |

### SaleInvoiceTax

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| StoreID1 | Integer |  | `1` |
| DateCreated | DateTime |  | `2010-05-28T15:55:38.78` |
| SaleInvoiceID | Integer |  | `812306` |
| InvoiceIDByStore | String |  | `00001IN193` |
| Tax | Decimal |  | `0` |

### Relationship

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CompanyID | Integer |  | `22575` |
| CompanyName | String |  | `GoWirelessIncStaging5` |






<h2 id='getting-partner-relationships' class='clickable-header top-level-header'>Getting Partner Relationships</h2>



<h4>Request</h4>

<pre>
GET /partner/relationships?Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-partner-relationships" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-partner-relationships" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-partner-relationships" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-partner-relationships" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-partner-relationships" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-partner-relationships" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-partner-relationships"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-partner-relationships">
<pre id="http-code-getting-partner-relationships"><code class="language-http">GET /partner/relationships
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-partner-relationships">
<pre id="curl-code-getting-partner-relationships"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/relationships"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-partner-relationships">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-partner-relationships"><code class="language-csharp">static IRestResponse GettingPartnerRelationships()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/relationships");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-partner-relationships">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-partner-relationships"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingPartnerRelationships() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/relationships");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-partner-relationships">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-partner-relationships"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/relationships', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#relationship'>Relationship</a>]</p>           
    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-partner-relationships" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#textxml-getting-partner-relationships" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-partner-relationships" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-partner-relationships" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-partner-relationships">
<pre>HTTP 200 Content-Type: application/json</pre>
             
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CompanyID": 22575,
        "CompanyName": "GoWirelessIncStaging5"
    }
]</code></pre>            
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-partner-relationships">
<pre>HTTP 200 Content-Type: text/xml</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CompanyID>22575</CompanyID>
    <CompanyName>GoWirelessIncStaging5</CompanyName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-partner-relationships">
<pre>HTTP 200 Content-Type: text/csv</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CompanyID,CompanyName
22575,GoWirelessIncStaging5</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-partner-relationships">
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h2 id='getting-categories-for-a-company' class='clickable-header top-level-header'>Getting Categories for a Company</h2>



<h4>Request</h4>

<pre>
GET /partner/Envysion/Categories?CompanyId={CompanyId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a {{Company}}
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-categories-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-categories-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-categories-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-categories-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-categories-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-categories-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-categories-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-categories-for-a-company">
<pre id="http-code-getting-categories-for-a-company"><code class="language-http">GET /partner/Envysion/Categories?CompanyId=22575
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-categories-for-a-company">
<pre id="curl-code-getting-categories-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/Categories?CompanyId=22575"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-categories-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-categories-for-a-company"><code class="language-csharp">static IRestResponse GettingCategoriesForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/Categories?CompanyId=22575");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-categories-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-categories-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingCategoriesForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/Categories?CompanyId=22575");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-categories-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-categories-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/Categories?CompanyId=22575', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#category'>Category</a>]</p>           
    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-categories-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#textxml-getting-categories-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-categories-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-categories-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-categories-for-a-company">
<pre>HTTP 200 Content-Type: application/json</pre>
             
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CategoryNumber": "10101012",
        "CategoryName": "Financing",
        "CategoryPath": ">> Activations >> Financing"
    }
]</code></pre>            
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-categories-for-a-company">
<pre>HTTP 200 Content-Type: text/xml</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CategoryNumber>10101012</CategoryNumber>
    <CategoryName>Financing</CategoryName>
    <CategoryPath>>> Activations >> Financing</CategoryPath>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-categories-for-a-company">
<pre>HTTP 200 Content-Type: text/csv</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CategoryNumber,CategoryName,CategoryPath
10101012,Financing,>> Activations >> Financing</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-categories-for-a-company">
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h2 id='getting-stores-for-a-company' class='clickable-header top-level-header'>Getting Stores for a Company</h2>



<h4>Request</h4>

<pre>
GET /partner/Envysion/Stores?CompanyId={CompanyId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a {{Company}}
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-stores-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-stores-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-stores-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-stores-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-stores-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-stores-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-stores-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-stores-for-a-company">
<pre id="http-code-getting-stores-for-a-company"><code class="language-http">GET /partner/Envysion/Stores?CompanyId=22575
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-stores-for-a-company">
<pre id="curl-code-getting-stores-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/Stores?CompanyId=22575"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-stores-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-stores-for-a-company"><code class="language-csharp">static IRestResponse GettingStoresForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/Stores?CompanyId=22575");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-stores-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-stores-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingStoresForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/Stores?CompanyId=22575");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-stores-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-stores-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/Stores?CompanyId=22575', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#store'>Store</a>]</p>           
    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-stores-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#textxml-getting-stores-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-stores-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-stores-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-stores-for-a-company">
<pre>HTTP 200 Content-Type: application/json</pre>
             
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "StoreID": 1188,
        "City": "Phoenix",
        "Address": "27617 Commerce Center Dr",
        "StoreName": "Altera Kiosk"
    }
]</code></pre>            
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-stores-for-a-company">
<pre>HTTP 200 Content-Type: text/xml</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <StoreID>1188</StoreID>
    <City>Phoenix</City>
    <Address>27617 Commerce Center Dr</Address>
    <StoreName>Altera Kiosk</StoreName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-stores-for-a-company">
<pre>HTTP 200 Content-Type: text/csv</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>StoreID,City,Address,StoreName
1188,Phoenix,27617 Commerce Center Dr,Altera Kiosk</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-stores-for-a-company">
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h2 id='getting-cash-ins-for-a-company\' class='clickable-header top-level-header'>Getting Cash Ins for a Company\</h2>



<h4>Request</h4>

<pre>
GET /partner/Envysion/CashIns?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a {{Company}}
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (<strong>Required</strong>) 
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-cash-ins-for-a-company\" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-cash-ins-for-a-company\" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-cash-ins-for-a-company\" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-cash-ins-for-a-company\" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-cash-ins-for-a-company\" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-cash-ins-for-a-company\" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-cash-ins-for-a-company\"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-cash-ins-for-a-company\">
<pre id="http-code-getting-cash-ins-for-a-company\"><code class="language-http">GET /partner/Envysion/CashIns?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-cash-ins-for-a-company\">
<pre id="curl-code-getting-cash-ins-for-a-company\"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/CashIns?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-cash-ins-for-a-company\">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-cash-ins-for-a-company\"><code class="language-csharp">static IRestResponse GettingCashInsForACompany\()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/CashIns?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-cash-ins-for-a-company\">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-cash-ins-for-a-company\"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingCashInsForACompany\() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/CashIns?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-cash-ins-for-a-company\">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-cash-ins-for-a-company\"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/CashIns?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#cashin'>CashIn</a>]</p>           
    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-cash-ins-for-a-company\" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#textxml-getting-cash-ins-for-a-company\" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-cash-ins-for-a-company\" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-cash-ins-for-a-company\" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-cash-ins-for-a-company\">
<pre>HTTP 200 Content-Type: application/json</pre>
             
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "cash_in_id": 6882,
        "store_id": 1,
        "terminal_id": 0,
        "in_date": "2009-10-27T09:35:30.767",
        "amount": 0,
        "comment": "",
        "employee_name": "Shirley Butterick",
        "employee_id": 4,
        "employee_name_2": "Shirley Butterick",
        "employee_id_2": 4
    }
]</code></pre>            
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-cash-ins-for-a-company\">
<pre>HTTP 200 Content-Type: text/xml</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <cash_in_id>6882</cash_in_id>
    <store_id>1</store_id>
    <terminal_id>0</terminal_id>
    <in_date>2009-10-27T09:35:30.767</in_date>
    <amount>0</amount>
    <comment></comment>
    <employee_name>Shirley Butterick</employee_name>
    <employee_id>4</employee_id>
    <employee_name_2>Shirley Butterick</employee_name_2>
    <employee_id_2>4</employee_id_2>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-cash-ins-for-a-company\">
<pre>HTTP 200 Content-Type: text/csv</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>cash_in_id,store_id,terminal_id,in_date,amount,comment,employee_name,employee_id,employee_name_2,employee_id_2
6882,1,0,2009-10-27T09:35:30.767,0,,Shirley Butterick,4,Shirley Butterick,4</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-cash-ins-for-a-company\">
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h2 id='getting-original-sales-invoices-for-a-company' class='clickable-header top-level-header'>Getting Original Sales Invoices for a Company</h2>



<h4>Request</h4>

<pre>
GET /partner/Envysion/OriginalSalesInvoice?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a {{Company}}
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (<strong>Required</strong>) 
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-original-sales-invoices-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-original-sales-invoices-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-original-sales-invoices-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-original-sales-invoices-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-original-sales-invoices-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-original-sales-invoices-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-original-sales-invoices-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-original-sales-invoices-for-a-company">
<pre id="http-code-getting-original-sales-invoices-for-a-company"><code class="language-http">GET /partner/Envysion/OriginalSalesInvoice?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-original-sales-invoices-for-a-company">
<pre id="curl-code-getting-original-sales-invoices-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/OriginalSalesInvoice?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-original-sales-invoices-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-original-sales-invoices-for-a-company"><code class="language-csharp">static IRestResponse GettingOriginalSalesInvoicesForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/OriginalSalesInvoice?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-original-sales-invoices-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-original-sales-invoices-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingOriginalSalesInvoicesForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/OriginalSalesInvoice?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-original-sales-invoices-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-original-sales-invoices-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/OriginalSalesInvoice?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#originalsalesinvoice'>OriginalSalesInvoice</a>]</p>           
    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-original-sales-invoices-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#textxml-getting-original-sales-invoices-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-original-sales-invoices-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-original-sales-invoices-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-original-sales-invoices-for-a-company">
<pre>HTTP 200 Content-Type: application/json</pre>
             
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "store_id": 1,
        "invoice_id": 1265314,
        "orig_store_id": 1,
        "orig_invoice_id": 1265312,
        "orig_date": "2013-04-09T08:23:51.93",
        "orig_receipt": "00001IN1805",
        "orig_employee_name": "Aaron Wilder",
        "orig_employee_id": 45,
        "orig_terminal_id": 0,
        "orig_workstation": "null"
    }
]</code></pre>            
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-original-sales-invoices-for-a-company">
<pre>HTTP 200 Content-Type: text/xml</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <store_id>1</store_id>
    <invoice_id>1265314</invoice_id>
    <orig_store_id>1</orig_store_id>
    <orig_invoice_id>1265312</orig_invoice_id>
    <orig_date>2013-04-09T08:23:51.93</orig_date>
    <orig_receipt>00001IN1805</orig_receipt>
    <orig_employee_name>Aaron Wilder</orig_employee_name>
    <orig_employee_id>45</orig_employee_id>
    <orig_terminal_id>0</orig_terminal_id>
    <orig_workstation>null</orig_workstation>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-original-sales-invoices-for-a-company">
<pre>HTTP 200 Content-Type: text/csv</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>store_id,invoice_id,orig_store_id,orig_invoice_id,orig_date,orig_receipt,orig_employee_name,orig_employee_id,orig_terminal_id,orig_workstation
1,1265314,1,1265312,2013-04-09T08:23:51.93,00001IN1805,Aaron Wilder,45,0,null</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-original-sales-invoices-for-a-company">
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h2 id='getting-punch-clock-entries-for-a-company' class='clickable-header top-level-header'>Getting Punch Clock Entries for a Company</h2>



<h4>Request</h4>

<pre>
GET /partner/Envysion/PunchClock?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a {{Company}}
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (<strong>Required</strong>) 
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-punch-clock-entries-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-punch-clock-entries-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-punch-clock-entries-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-punch-clock-entries-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-punch-clock-entries-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-punch-clock-entries-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-punch-clock-entries-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-punch-clock-entries-for-a-company">
<pre id="http-code-getting-punch-clock-entries-for-a-company"><code class="language-http">GET /partner/Envysion/PunchClock?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-punch-clock-entries-for-a-company">
<pre id="curl-code-getting-punch-clock-entries-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/PunchClock?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-punch-clock-entries-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-punch-clock-entries-for-a-company"><code class="language-csharp">static IRestResponse GettingPunchClockEntriesForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/PunchClock?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-punch-clock-entries-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-punch-clock-entries-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingPunchClockEntriesForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/PunchClock?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-punch-clock-entries-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-punch-clock-entries-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/PunchClock?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#punchclockentry'>PunchClockEntry</a>]</p>           
    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-punch-clock-entries-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#textxml-getting-punch-clock-entries-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-punch-clock-entries-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-punch-clock-entries-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-punch-clock-entries-for-a-company">
<pre>HTTP 200 Content-Type: application/json</pre>
             
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "punch_id": 7341,
        "store_id": 1,
        "time_in": "2010-01-04T08:00:00",
        "time_out": "2010-01-04T12:33:00",
        "statue": 1,
        "manager_verified": false,
        "employee_verified": true,
        "in_comment": "",
        "out_comment": "Auto-Punch Out",
        "employee_name": "Jose Malta",
        "employee_id": 2
    }
]</code></pre>            
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-punch-clock-entries-for-a-company">
<pre>HTTP 200 Content-Type: text/xml</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <punch_id>7341</punch_id>
    <store_id>1</store_id>
    <time_in>2010-01-04T08:00:00</time_in>
    <time_out>2010-01-04T12:33:00</time_out>
    <statue>1</statue>
    <manager_verified>false</manager_verified>
    <employee_verified>true</employee_verified>
    <in_comment></in_comment>
    <out_comment>Auto-Punch Out</out_comment>
    <employee_name>Jose Malta</employee_name>
    <employee_id>2</employee_id>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-punch-clock-entries-for-a-company">
<pre>HTTP 200 Content-Type: text/csv</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>punch_id,store_id,time_in,time_out,statue,manager_verified,employee_verified,in_comment,out_comment,employee_name,employee_id
7341,1,2010-01-04T08:00:00,2010-01-04T12:33:00,1,false,true,,Auto-Punch Out,Jose Malta,2</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-punch-clock-entries-for-a-company">
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h2 id='getting-punch-clock-entries-revisions-for-a-company' class='clickable-header top-level-header'>Getting Punch Clock Entries Revisions for a Company</h2>



<h4>Request</h4>

<pre>
GET /partner/Envysion/PunchClockRevisions?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a {{Company}}
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (<strong>Required</strong>) 
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-punch-clock-entries-revisions-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-punch-clock-entries-revisions-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-punch-clock-entries-revisions-for-a-company">
<pre id="http-code-getting-punch-clock-entries-revisions-for-a-company"><code class="language-http">GET /partner/Envysion/PunchClockRevisions?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-punch-clock-entries-revisions-for-a-company">
<pre id="curl-code-getting-punch-clock-entries-revisions-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/PunchClockRevisions?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-punch-clock-entries-revisions-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-punch-clock-entries-revisions-for-a-company"><code class="language-csharp">static IRestResponse GettingPunchClockEntriesRevisionsForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/PunchClockRevisions?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-punch-clock-entries-revisions-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-punch-clock-entries-revisions-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingPunchClockEntriesRevisionsForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/PunchClockRevisions?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-punch-clock-entries-revisions-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-punch-clock-entries-revisions-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/PunchClockRevisions?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#punchclockentryrevision'>PunchClockEntryRevision</a>]</p>           
    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#textxml-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-punch-clock-entries-revisions-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-punch-clock-entries-revisions-for-a-company">
<pre>HTTP 200 Content-Type: application/json</pre>
             
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "revision_id": 1567,
        "punch_id": 6276,
        "revised_time_in": "null",
        "revised_time_out": "null",
        "revised_date": "2010-01-14T16:06:18.25",
        "revision_type": 3,
        "comment": "wrong location - entered correctly at corporate office",
        "orig_time_in": "2010-01-04T06:12:52.79",
        "orig_time_out": "2010-01-04T15:06:36.677",
        "store_id": 1,
        "employee": "Cathy Day",
        "employee_id": 107,
        "revised_by_employee": "Dayle Paulson",
        "revised_by_employee_id": 7
    }
]</code></pre>            
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-punch-clock-entries-revisions-for-a-company">
<pre>HTTP 200 Content-Type: text/xml</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <revision_id>1567</revision_id>
    <punch_id>6276</punch_id>
    <revised_time_in>null</revised_time_in>
    <revised_time_out>null</revised_time_out>
    <revised_date>2010-01-14T16:06:18.25</revised_date>
    <revision_type>3</revision_type>
    <comment>wrong location - entered correctly at corporate office</comment>
    <orig_time_in>2010-01-04T06:12:52.79</orig_time_in>
    <orig_time_out>2010-01-04T15:06:36.677</orig_time_out>
    <store_id>1</store_id>
    <employee>Cathy Day</employee>
    <employee_id>107</employee_id>
    <revised_by_employee>Dayle Paulson</revised_by_employee>
    <revised_by_employee_id>7</revised_by_employee_id>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-punch-clock-entries-revisions-for-a-company">
<pre>HTTP 200 Content-Type: text/csv</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>revision_id,punch_id,revised_time_in,revised_time_out,revised_date,revision_type,comment,orig_time_in,orig_time_out,store_id,employee,employee_id,revised_by_employee,revised_by_employee_id
1567,6276,null,null,2010-01-14T16:06:18.25,3,wrong location - entered correctly at corporate office,2010-01-04T06:12:52.79,2010-01-04T15:06:36.677,1,Cathy Day,107,Dayle Paulson,7</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-punch-clock-entries-revisions-for-a-company">
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h2 id='getting-sale-invoice-coupons-for-a-company' class='clickable-header top-level-header'>Getting Sale Invoice Coupons for a Company</h2>



<h4>Request</h4>

<pre>
GET /partner/Envysion/SaleInvoiceCoupons?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a {{Company}}
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (<strong>Required</strong>) 
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-sale-invoice-coupons-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-sale-invoice-coupons-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-sale-invoice-coupons-for-a-company">
<pre id="http-code-getting-sale-invoice-coupons-for-a-company"><code class="language-http">GET /partner/Envysion/SaleInvoiceCoupons?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-sale-invoice-coupons-for-a-company">
<pre id="curl-code-getting-sale-invoice-coupons-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceCoupons?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-sale-invoice-coupons-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-sale-invoice-coupons-for-a-company"><code class="language-csharp">static IRestResponse GettingSaleInvoiceCouponsForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceCoupons?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-sale-invoice-coupons-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-sale-invoice-coupons-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingSaleInvoiceCouponsForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceCoupons?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-sale-invoice-coupons-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-sale-invoice-coupons-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceCoupons?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#saleinvoicecoupon'>SaleInvoiceCoupon</a>]</p>           
    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#textxml-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoice-coupons-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-sale-invoice-coupons-for-a-company">
<pre>HTTP 200 Content-Type: application/json</pre>
             
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "StoreID1": 1,
        "DateCreated": "2012-06-11T13:13:51.74",
        "SaleInvoiceID": 1263859,
        "InvoiceIDByStore": "00001IN1001",
        "Amount": 3.5,
        "Description": "Normal Coupon"
    }
]</code></pre>            
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-sale-invoice-coupons-for-a-company">
<pre>HTTP 200 Content-Type: text/xml</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <StoreID1>1</StoreID1>
    <DateCreated>2012-06-11T13:13:51.74</DateCreated>
    <SaleInvoiceID>1263859</SaleInvoiceID>
    <InvoiceIDByStore>00001IN1001</InvoiceIDByStore>
    <Amount>3.5</Amount>
    <Description>Normal Coupon</Description>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-sale-invoice-coupons-for-a-company">
<pre>HTTP 200 Content-Type: text/csv</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>StoreID1,DateCreated,SaleInvoiceID,InvoiceIDByStore,Amount,Description
1,2012-06-11T13:13:51.74,1263859,00001IN1001,3.5,Normal Coupon</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoice-coupons-for-a-company">
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h2 id='getting-sale-invoice-payments-for-a-company' class='clickable-header top-level-header'>Getting Sale Invoice Payments for a Company</h2>



<h4>Request</h4>

<pre>
GET /partner/Envysion/SaleInvoicePayments?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a {{Company}}
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (<strong>Required</strong>) 
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-sale-invoice-payments-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-sale-invoice-payments-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-sale-invoice-payments-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-sale-invoice-payments-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-sale-invoice-payments-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-sale-invoice-payments-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-sale-invoice-payments-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-sale-invoice-payments-for-a-company">
<pre id="http-code-getting-sale-invoice-payments-for-a-company"><code class="language-http">GET /partner/Envysion/SaleInvoicePayments?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-sale-invoice-payments-for-a-company">
<pre id="curl-code-getting-sale-invoice-payments-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoicePayments?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-sale-invoice-payments-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-sale-invoice-payments-for-a-company"><code class="language-csharp">static IRestResponse GettingSaleInvoicePaymentsForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoicePayments?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-sale-invoice-payments-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-sale-invoice-payments-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingSaleInvoicePaymentsForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoicePayments?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-sale-invoice-payments-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-sale-invoice-payments-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoicePayments?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#saleinvoicepayment'>SaleInvoicePayment</a>]</p>           
    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-sale-invoice-payments-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#textxml-getting-sale-invoice-payments-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-sale-invoice-payments-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoice-payments-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-sale-invoice-payments-for-a-company">
<pre>HTTP 200 Content-Type: application/json</pre>
             
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "store_id": 1,
        "trans_create_time": "2010-03-10T15:20:19.323",
        "trans_logged_time": "null",
        "terminal_id": 0,
        "workstation_name": "null",
        "invoice_id": 524371,
        "is_bill_payment": 0,
        "payment_type": "Cash",
        "amount": 152.25,
        "change_amount": 0,
        "employee_name": "Shirley Butterick",
        "employee_id": 4,
        "customer_id": "null",
        "customer_member_num": null,
        "employee_name_3": "Shirley Butterick",
        "comments": "",
        "receipt_number": "00001IN117"
    }
]</code></pre>            
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-sale-invoice-payments-for-a-company">
<pre>HTTP 200 Content-Type: text/xml</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <store_id>1</store_id>
    <trans_create_time>2010-03-10T15:20:19.323</trans_create_time>
    <trans_logged_time>null</trans_logged_time>
    <terminal_id>0</terminal_id>
    <workstation_name>null</workstation_name>
    <invoice_id>524371</invoice_id>
    <is_bill_payment>0</is_bill_payment>
    <payment_type>Cash</payment_type>
    <amount>152.25</amount>
    <change_amount>0</change_amount>
    <employee_name>Shirley Butterick</employee_name>
    <employee_id>4</employee_id>
    <customer_id>null</customer_id>
    <customer_member_num>null</customer_member_num>
    <employee_name_3>Shirley Butterick</employee_name_3>
    <comments></comments>
    <receipt_number>00001IN117</receipt_number>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-sale-invoice-payments-for-a-company">
<pre>HTTP 200 Content-Type: text/csv</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>store_id,trans_create_time,trans_logged_time,terminal_id,workstation_name,invoice_id,is_bill_payment,payment_type,amount,change_amount,employee_name,employee_id,customer_id,customer_member_num,employee_name_3,comments,receipt_number
1,2010-03-10T15:20:19.323,null,0,null,524371,0,Cash,152.25,0,Shirley Butterick,4,null,null,Shirley Butterick,,00001IN117</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoice-payments-for-a-company">
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h2 id='getting-sale-invoice-products-for-a-company' class='clickable-header top-level-header'>Getting Sale Invoice Products for a Company</h2>



<h4>Request</h4>

<pre>
GET /partner/Envysion/SaleInvoiceProducts?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a {{Company}}
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (<strong>Required</strong>) 
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-sale-invoice-products-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-sale-invoice-products-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-sale-invoice-products-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-sale-invoice-products-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-sale-invoice-products-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-sale-invoice-products-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-sale-invoice-products-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-sale-invoice-products-for-a-company">
<pre id="http-code-getting-sale-invoice-products-for-a-company"><code class="language-http">GET /partner/Envysion/SaleInvoiceProducts?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-sale-invoice-products-for-a-company">
<pre id="curl-code-getting-sale-invoice-products-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceProducts?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-sale-invoice-products-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-sale-invoice-products-for-a-company"><code class="language-csharp">static IRestResponse GettingSaleInvoiceProductsForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceProducts?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-sale-invoice-products-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-sale-invoice-products-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingSaleInvoiceProductsForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceProducts?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-sale-invoice-products-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-sale-invoice-products-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceProducts?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#saleinvoiceproduct'>SaleInvoiceProduct</a>]</p>           
    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-sale-invoice-products-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#textxml-getting-sale-invoice-products-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-sale-invoice-products-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoice-products-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-sale-invoice-products-for-a-company">
<pre>HTTP 200 Content-Type: application/json</pre>
             
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "store_id": 1,
        "trans_create_time": "2010-03-10T15:20:19.323",
        "trans_logged_time": "null",
        "terminal_id": 0,
        "workstation_name": "null",
        "invoice_id": 524371,
        "is_bill_payment": 0,
        "payment_type": "Cash",
        "amount": 152.25,
        "change_amount": 0,
        "employee_name": "Shirley Butterick",
        "employee_id": 4,
        "customer_id": null,
        "customer_member_num": null,
        "employee_name_3": "Shirley Butterick",
        "comments": "",
        "receipt_number": "00001IN117"
    }
]</code></pre>            
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-sale-invoice-products-for-a-company">
<pre>HTTP 200 Content-Type: text/xml</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <store_id>1</store_id>
    <trans_create_time>2010-03-10T15:20:19.323</trans_create_time>
    <trans_logged_time>null</trans_logged_time>
    <terminal_id>0</terminal_id>
    <workstation_name>null</workstation_name>
    <invoice_id>524371</invoice_id>
    <is_bill_payment>0</is_bill_payment>
    <payment_type>Cash</payment_type>
    <amount>152.25</amount>
    <change_amount>0</change_amount>
    <employee_name>Shirley Butterick</employee_name>
    <employee_id>4</employee_id>
    <customer_id>null</customer_id>
    <customer_member_num>null</customer_member_num>
    <employee_name_3>Shirley Butterick</employee_name_3>
    <comments></comments>
    <receipt_number>00001IN117</receipt_number>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-sale-invoice-products-for-a-company">
<pre>HTTP 200 Content-Type: text/csv</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>store_id,trans_create_time,trans_logged_time,terminal_id,workstation_name,invoice_id,is_bill_payment,payment_type,amount,change_amount,employee_name,employee_id,customer_id,customer_member_num,employee_name_3,comments,receipt_number
1,2010-03-10T15:20:19.323,null,0,null,524371,0,Cash,152.25,0,Shirley Butterick,4,null,null,Shirley Butterick,,00001IN117</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoice-products-for-a-company">
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h2 id='getting-sale-invoice-taxes-for-a-company' class='clickable-header top-level-header'>Getting Sale Invoice Taxes for a Company</h2>



<h4>Request</h4>

<pre>
GET /partner/Envysion/SaleInvoiceTaxes?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreId={StoreId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a {{Company}}
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>StoreId</code> (<strong>Required</strong>) 
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-sale-invoice-taxes-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-sale-invoice-taxes-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-sale-invoice-taxes-for-a-company">
<pre id="http-code-getting-sale-invoice-taxes-for-a-company"><code class="language-http">GET /partner/Envysion/SaleInvoiceTaxes?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-sale-invoice-taxes-for-a-company">
<pre id="curl-code-getting-sale-invoice-taxes-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceTaxes?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-sale-invoice-taxes-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-sale-invoice-taxes-for-a-company"><code class="language-csharp">static IRestResponse GettingSaleInvoiceTaxesForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceTaxes?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-sale-invoice-taxes-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-sale-invoice-taxes-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingSaleInvoiceTaxesForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceTaxes?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-sale-invoice-taxes-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-sale-invoice-taxes-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/Envysion/SaleInvoiceTaxes?CompanyId=22575&StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z&StoreId=null', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#saleinvoicetax'>SaleInvoiceTax</a>]</p>           
    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#textxml-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoice-taxes-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-sale-invoice-taxes-for-a-company">
<pre>HTTP 200 Content-Type: application/json</pre>
             
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "StoreID1": 1,
        "DateCreated": "2010-05-28T15:55:38.78",
        "SaleInvoiceID": 812306,
        "InvoiceIDByStore": "00001IN193",
        "Tax": 0
    }
]</code></pre>            
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-sale-invoice-taxes-for-a-company">
<pre>HTTP 200 Content-Type: text/xml</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <StoreID1>1</StoreID1>
    <DateCreated>2010-05-28T15:55:38.78</DateCreated>
    <SaleInvoiceID>812306</SaleInvoiceID>
    <InvoiceIDByStore>00001IN193</InvoiceIDByStore>
    <Tax>0</Tax>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-sale-invoice-taxes-for-a-company">
<pre>HTTP 200 Content-Type: text/csv</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>StoreID1,DateCreated,SaleInvoiceID,InvoiceIDByStore,Tax
1,2010-05-28T15:55:38.78,812306,00001IN193,0</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-sale-invoice-taxes-for-a-company">
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


    
    

    
    

    
    
