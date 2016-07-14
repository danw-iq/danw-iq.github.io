---
title:  Customized Reports
permalink: /api/Customized-Reports/
tags: []
keywords: 
audience: 
last_updated: 14-7-2016
summary: 
rouge: false
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}




## Overview


#### Authentication

This API supports many different methods of authentication, see {{AuthenticationOptions}}.     


## Endpoints

* Sandbox: <a href="https://rqdataconnectdemo.iqmetrix.net">https://rqdataconnectdemo.iqmetrix.net</a>
* Production: <a href="https://rqdataconnect.iqmetrix.net">https://rqdataconnect.iqmetrix.net</a>

## Resources

### SalesExtendedDetailReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ChannelName | NVARCHAR(MAX) | Name of a Channel in RQ | `English Channel` |
| Cost | MONEY | Cost | `14.5` |
| CustomerID | INTEGER | Identifier of a customer in RQ | `85259` |
| CustomerName | VARCHAR(101) | Name of a customer in RQ | `John Tester` |
| DateCreated | DateTime | Sale date | `2016-06-07T16:17:36.643` |
| EmployeeID | INTEGER | Identifier of an employee in RQ | `3302` |
| EmployeeName | VARCHAR(51) | Name of an employee in RQ | `iQmetrix Employee` |
| InvoiceNumber | VARCHAR(14) | Invoice number | `77123IN1` |
| LineID | BIGINT |  | `1` |
| Price | MONEY | Price | `29.99` |
| ProductSKU | VARCHAR(32) | Product SKU | `ASLCAP000089` |
| Quantity | INTEGER | Quantity | `1` |
| RQPriority | INTEGER |  | `1` |
| StoreID | INTEGER | Identifier for a store in RQ | `6680` |
| StoreName | NVARCHAR(MAX) | Name of a store in RQ | `100: Pair Up Wireless LLC - Garland` |






<h2 id='sales-extended-detail-report' class='clickable-header top-level-header'>Sales Extended Detail Report</h2>



<h4>Request</h4>

<pre>
GET /customizedreports/SalesExtendedDetailReport?StartDate={StartDate}&StopDate={StopDate}&Auth={Auth}&Response={Response}
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
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-sales-extended-detail-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-sales-extended-detail-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-sales-extended-detail-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-sales-extended-detail-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-sales-extended-detail-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-sales-extended-detail-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-sales-extended-detail-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-sales-extended-detail-report">
<pre id="http-code-sales-extended-detail-report"><code class="language-http">GET /customizedreports/SalesExtendedDetailReport?StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-sales-extended-detail-report">
<pre id="curl-code-sales-extended-detail-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/customizedreports/SalesExtendedDetailReport?StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-sales-extended-detail-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-sales-extended-detail-report"><code class="language-csharp">static IRestResponse SalesExtendedDetailReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/customizedreports/SalesExtendedDetailReport?StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-sales-extended-detail-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-sales-extended-detail-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse SalesExtendedDetailReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/customizedreports/SalesExtendedDetailReport?StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-sales-extended-detail-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-sales-extended-detail-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/customizedreports/SalesExtendedDetailReport?StartDate=1970-01-01T06:00:00.000Z&StopDate=2016-06-06T06:00:00.000Z', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#salesextendeddetailreportdata'>SalesExtendedDetailReportData</a>]</p>           
    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-sales-extended-detail-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#textxml-sales-extended-detail-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textcsv-sales-extended-detail-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-sales-extended-detail-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-sales-extended-detail-report">
<pre>HTTP 200 Content-Type: application/json</pre>
             
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ChannelName": "English Channel",
        "Cost": 14.5,
        "CustomerID": 85259,
        "CustomerName": "John Tester",
        "DateCreated": "2016-06-07T16:17:36.643",
        "EmployeeID": 3302,
        "EmployeeName": "iQmetrix Employee",
        "InvoiceNumber": "77123IN1",
        "LineID": 1,
        "Price": 29.99,
        "ProductSKU": "ASLCAP000089",
        "Quantity": 1,
        "RQPriority": 1,
        "StoreID": 6680,
        "StoreName": "100: Pair Up Wireless LLC - Garland"
    }
]</code></pre>            
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-sales-extended-detail-report">
<pre>HTTP 200 Content-Type: text/xml</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ChannelName>English Channel</ChannelName>
    <Cost>14.5</Cost>
    <CustomerID>85259</CustomerID>
    <CustomerName>John Tester</CustomerName>
    <DateCreated>2016-06-07T16:17:36.643</DateCreated>
    <EmployeeID>3302</EmployeeID>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <InvoiceNumber>77123IN1</InvoiceNumber>
    <LineID>1</LineID>
    <Price>29.99</Price>
    <ProductSKU>ASLCAP000089</ProductSKU>
    <Quantity>1</Quantity>
    <RQPriority>1</RQPriority>
    <StoreID>6680</StoreID>
    <StoreName>100: Pair Up Wireless LLC - Garland</StoreName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-sales-extended-detail-report">
<pre>HTTP 200 Content-Type: text/csv</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ChannelName,Cost,CustomerID,CustomerName,DateCreated,EmployeeID,EmployeeName,InvoiceNumber,LineID,Price,ProductSKU,Quantity,RQPriority,StoreID,StoreName
English Channel,14.5,85259,John Tester,2016-06-07T16:17:36.643,3302,iQmetrix Employee,77123IN1,1,29.99,ASLCAP000089,1,1,6680,100: Pair Up Wireless LLC - Garland</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-sales-extended-detail-report">
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
            
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


    
    

    
    
