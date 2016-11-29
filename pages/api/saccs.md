---
title:  Shipping Aggregator
permalink: /api/saccs/
tags: []
keywords: 
audience: 
last_updated: 29-11-2016
summary: 
rouge: false
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}


## Overview

The Shipping Aggregator requests shipping options from a vendor's shipping API and returns a list of their associated costs and timeframe.

{{important}}The Shipping Aggregator also verifies the availability of the requested catalog items. If an item is <strong>Out of Stock</strong>, then you must prevent this order from continuing. An unavailable item will be indicated in the body of an HTTP 400 response.{{end}}


## Endpoints


* Sandbox: <a href="https://shippingaggregatordemo.iqmetrix.net/">https://shippingaggregatordemo.iqmetrix.net/</a>
* Production: <a href="https://shippingaggregator.iqmetrix.net/">https://shippingaggregator.iqmetrix.net/</a>


## Resources

### ShippingQuery

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| LocationEntityId | String | [Location](/api/company-tree/#location) identifer | `14202` |
| PostalCode | String | Postal or zip code of shipping address | `P9H 9I4` |
| Items | Array[<a href='/api/saccs/#item'>Item</a>] | List of Products to be added to shipping query |  |

### Item

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CatalogId | GUID | [Catalog](/api/catalog/#catalogitem) identifer | `18e039de-f950-4d8e-a48a-d06e4db55a07` |
| Quantity | Integer | Amount of products | `1` |
| Cost | Decimal | Cost of item | `9.99` |

### ShippingResponse

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifer | `1` |
| LocationEntityId | Integer | [Location](/api/company-tree/#location) identifier | `14202` |
| PostalCode | String | Postal or zip code of shipping address | `P9H 9I4` |
| Shipments | Array[<a href='/api/saccs/#shipments'>Shipments</a>] | List of suppliers and their shipping options |  |
| *Items* | *Array[object]* | *Reserved for internal use* | |

### Shipments

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| SupplierEntityId | Integer | [Supplier](/api/entity-store/#supplier) identifier | `14107` |
| Items | Array[<a href='/api/saccs/#item'>Item</a>] | List of Products to be added to shipping query |  |
| ShippingOptions | Array[<a href='/api/saccs/#shippingoptions'>ShippingOptions</a>] | List of shipping options available from vendor |  |

### ShippingOptions

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | String | Vendor shipping identifer | `1` |
| Cost | Decimal | Cost for shipping option | `7.94` |
| Currency | String | Cost currency (USD or CAD) | `CAD` |
| EstimatedTransitTime | String | Total time to be in transit, where units are provided by supplier | `1 week` |
| Name | String | Shipping option name | `PurolatorExpress` |





## Requests



<h3 id='retrieving-shipping-options' class='clickable-header top-level-header'>Retrieving Shipping Options</h3>



<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/ShippingInformation
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier of the Company
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>LocationEntityId</code> (<strong>Required</strong>) </li><li><code>PostalCode</code> (<strong>Required</strong>) </li><li><code>Items</code> (Optional) </li><ul><li><code>CatalogId</code> (<strong>Required</strong>) </li><li><code>Quantity</code> (<strong>Required</strong>) </li></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-retrieving-shipping-options" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-retrieving-shipping-options" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-retrieving-shipping-options" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-retrieving-shipping-options" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-retrieving-shipping-options" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-retrieving-shipping-options" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-retrieving-shipping-options"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-retrieving-shipping-options">
<pre id="http-code-retrieving-shipping-options"><code class="language-http">POST /Companies(14146)/ShippingInformation
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "LocationEntityId": "14202",
    "PostalCode": "P9H 9I4",
    "Items": [
        {
            "CatalogId": "18e039de-f950-4d8e-a48a-d06e4db55a07",
            "Quantity": 1
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-retrieving-shipping-options">
<pre id="curl-code-retrieving-shipping-options"><code class="language-http">curl -X POST "https://shippingaggregatordemo.iqmetrix.net//Companies(14146)/ShippingInformation" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "LocationEntityId": "14202",
    "PostalCode": "P9H 9I4",
    "Items": [
        {
            "CatalogId": "18e039de-f950-4d8e-a48a-d06e4db55a07",
            "Quantity": 1
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-retrieving-shipping-options">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-retrieving-shipping-options"><code class="language-csharp">static IRestResponse RetrievingShippingOptions()
{
    var client = new RestClient("https://shippingaggregatordemo.iqmetrix.net//Companies(14146)/ShippingInformation");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"LocationEntityId\":\"14202\",\"PostalCode\":\"P9H 9I4\",\"Items\":[{\"CatalogId\":\"18e039de-f950-4d8e-a48a-d06e4db55a07\",\"Quantity\":1}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-retrieving-shipping-options">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-retrieving-shipping-options"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse RetrievingShippingOptions() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://shippingaggregatordemo.iqmetrix.net//Companies(14146)/ShippingInformation");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"LocationEntityId\":\"14202\",\"PostalCode\":\"P9H 9I4\",\"Items\":[{\"CatalogId\":\"18e039de-f950-4d8e-a48a-d06e4db55a07\",\"Quantity\":1}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-retrieving-shipping-options">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-retrieving-shipping-options"><code class="language-ruby">require 'rest-client'

body = "{\"LocationEntityId\":\"14202\",\"PostalCode\":\"P9H 9I4\",\"Items\":[{\"CatalogId\":\"18e039de-f950-4d8e-a48a-d06e4db55a07\",\"Quantity\":1}]}";

response = RestClient.post 'https://shippingaggregatordemo.iqmetrix.net//Companies(14146)/ShippingInformation', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#shippingresponse'>ShippingResponse</a>

<h5>Example</h5>

<pre>
HTTP 202 Content-Type: application/json
</pre><pre>{
    "Id": 1,
    "LocationEntityId": 14202,
    "PostalCode": "P9H 9I4",
    "Shipments": [
        {
            "SupplierEntityId": 14107,
            "Items": [
                {
                    "CatalogId": "18e039de-f950-4d8e-a48a-d06e4db55a07",
                    "Quantity": 1,
                    "Cost": 9.99
                }
            ],
            "ShippingOptions": [
                {
                    "Id": "1",
                    "Cost": 7.94,
                    "Currency": "CAD",
                    "EstimatedTransitTime": "1 week",
                    "Name": "PurolatorExpress"
                }
            ]
        }
    ]
}</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `No availability found for the following products: (Product Name)` | Occurs when item is no longer available. |
| `HTTP 400` | `Entity is not related to company` | Occurs when entering an incorrect `CompanyId` or `LocationEntityId` |
| `HTTP 400` | `Error getting catalog item identifiers for CatalogIds: (CatalogId)` | Occurs when entering an incorrect `CatalogId` |
