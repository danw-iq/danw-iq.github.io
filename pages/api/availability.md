---
title:  Inventory Availability
permalink: /api/availability/

rouge: false

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---

{% include linkrefs.html %}




# Overview

The inventory availability API allows you to configure stock levels and to view a snapshot of inventory stock of catalog items for your company.



# Endpoints


* Sandbox: <a href="https://availabilitydemo.iqmetrix.net/v1">https://availabilitydemo.iqmetrix.net/v1</a>
* Production: <a href="https://availability.iqmetrix.net/v1">https://availability.iqmetrix.net/v1</a>



# Resources


## Availability

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier for a [CatalogItem](/api/catalog/#catalogitem) | 
| CompanyId (`Integer`) | Identifier for a [Company](/api/company-tree/#company) | 
| EntityId (`Integer`) | Identifier for a [CompanyTreeNode](/api/company-tree/#companytreenode) | 
| Quantity (`Integer`) | Quantity | 
| IsDropShippable (`Boolean`) | A flag to indicate if the [CatalogItem](/api/catalog/#catalogitem) can be shipped | 
| IsSerialized (`Boolean`) | A flag to indicate Quantity is determined by a count of SerialNumbers. When true, Quantitiy is read-only and flag cannot be modified | 


## SerialNumber

| Name | Description |
|:-----|:------------|
| Id (`String`) | Serial number | 
| CatalogProductId (`GUID`) | Unique identifier for a [CatalogItem](/api/catalog/#catalogitem) | 
| EntityId (`Integer`) | Identifier for a [CompanyTreeNode](/api/company-tree/#companytreenode) | 
| CompanyId (`Integer`) | Identifier for a [Company](/api/company-tree/#company) | 






# Requests



## Configuring Availability



> Definition

```
POST /Companies({CompanyId})/CatalogItems
```

> Example Request


<pre class="highlight javascript"><code>POST /Companies(14146)/CatalogItems
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code></pre>

<pre class="highlight shell"><code>
curl -X POST "https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/CatalogItems" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "EntityId": 14202,
    "Quantity": 15,
    "IsDropShippable": false,
    "IsSerialized": false
}'</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse ConfiguringAvailability()
{
    var client = new RestClient("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/CatalogItems");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"EntityId\":14202,\"Quantity\":15,\"IsDropShippable\":false,\"IsSerialized\":false}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>


<pre class="highlight java"><code>
import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse ConfiguringAvailability() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/CatalogItems");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"EntityId\":14202,\"Quantity\":15,\"IsDropShippable\":false,\"IsSerialized\":false}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'

body = "{\"Id\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"EntityId\":14202,\"Quantity\":15,\"IsDropShippable\":false,\"IsSerialized\":false}";

response = RestClient.post 'https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/CatalogItems', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



#### Request Parameters

<ul><li><code>Id</code> (<strong>Required</strong>) - Unique identifier for a {{CatalogItem}}</li><li><code>EntityId</code> (<strong>Required</strong>) - Identifier for a {{Location}}. Must be related to Company specified in URI</li><li><code>Quantity</code> (Optional) - If IsSerialized is true, this value must be omitted. Defaults to 0</li><li><code>IsDropShippable</code> (Optional) - Defaults to false. Indicates if the catalog item can be shipped.</li><li><code>IsSerialized</code> (Optional) - Defaults to false</li></ul>

<h4>Response Parameters</h4>


 <a href='#availability'>Availability</a>

> Example Response

<pre class="highlight json">
HTTP 201 Content-Type: application/json
</pre><pre class="highlight json">{
    "Id": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "Quantity": 15,
    "IsDropShippable": false,
    "IsSerialized": false
}</pre>

## Getting Availability For a Catalog Item For a Location



> Definition

```
GET /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})
```

> Example Request


<pre class="highlight javascript"><code>GET /Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>

<pre class="highlight shell"><code>
curl -X GET "https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse GettingAvailabilityForACatalogItemForALocation()
{
    var client = new RestClient("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>


<pre class="highlight java"><code>

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAvailabilityForACatalogItemForALocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h4>Response Parameters</h4>


 <a href='#availability'>Availability</a>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "Id": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "Quantity": 15,
    "IsDropShippable": false,
    "IsSerialized": false
}</pre>

## Getting Availability For a Catalog Item For All Locations



> Definition

```
GET /Companies({CompanyId})/CatalogItems({CatalogItemId})/Availability
```

> Example Request


<pre class="highlight javascript"><code>GET /Companies(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/Availability
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>

<pre class="highlight shell"><code>
curl -X GET "https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/Availability" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse GettingAvailabilityForACatalogItemForAllLocations()
{
    var client = new RestClient("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/Availability");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>


<pre class="highlight java"><code>

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAvailabilityForACatalogItemForAllLocations() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/Availability");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/Availability', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Identifier for the {{CatalogItem}}
    </li>
    </ul>



<h4>Response Parameters</h4>


 Array[<a href='#availability'>Availability</a>]

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">[
    {
        "Id": "a183f1a9-c58f-426a-930a-9a6357db52ed",
        "CompanyId": 14146,
        "EntityId": 14202,
        "Quantity": 15,
        "IsDropShippable": false,
        "IsSerialized": false
    }
]</pre>

## Getting Serial Numbers For a Catalog Item



> Definition

```
GET /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/SerialNumbers
```

> Example Request


<pre class="highlight javascript"><code>GET /Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>

<pre class="highlight shell"><code>
curl -X GET "https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse GettingSerialNumbersForACatalogItem()
{
    var client = new RestClient("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>


<pre class="highlight java"><code>

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingSerialNumbersForACatalogItem() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Identifier for the {{CatalogItem}}
    </li>
    </ul>



<h4>Response Parameters</h4>


 Array[<a href='#serialnumber'>SerialNumber</a>]

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">[
    {
        "Id": "B7FQ-RANC",
        "CatalogProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
        "EntityId": 14202,
        "CompanyId": 14146
    }
]</pre>

## Getting a Serial Number



> Definition

```
GET /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/SerialNumbers({SerialNumber})
```

> Example Request


<pre class="highlight javascript"><code>GET /Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers(B7FQ-RANC)
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>

<pre class="highlight shell"><code>
curl -X GET "https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers(B7FQ-RANC)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse GettingASerialNumber()
{
    var client = new RestClient("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers(B7FQ-RANC)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>


<pre class="highlight java"><code>

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingASerialNumber() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers(B7FQ-RANC)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers(B7FQ-RANC)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Identifier for the {{CatalogItem}}
    </li>
    
    <li>
        <code>SerialNumber</code> (<strong>Required</strong>)  - Serial Number
    </li>
    </ul>



<h4>Response Parameters</h4>


 <a href='#serialnumber'>SerialNumber</a>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "Id": "B7FQ-RANC",
    "CatalogProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "EntityId": 14202,
    "CompanyId": 14146
}</pre>

## Getting a Serial Number by Location

This request may return multiple {{SerialNumber}} resources if a Serial Number is associated with more than one {{CatalogItem}} for a {{Location}}.

> Definition

```
GET /Companies({CompanyId})/Entities({LocationId})/SerialNumbers?$filter=Id eq '{SerialNumber}'
```

> Example Request


<pre class="highlight javascript"><code>GET /Companies(14146)/Entities(14202)/SerialNumbers?$filter=Id eq 'B7FQ-RANC'
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>

<pre class="highlight shell"><code>
curl -X GET "https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/SerialNumbers?$filter=Id eq 'B7FQ-RANC'" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse GettingASerialNumberByLocation()
{
    var client = new RestClient("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/SerialNumbers?$filter=Id eq 'B7FQ-RANC'");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>


<pre class="highlight java"><code>

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingASerialNumberByLocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/SerialNumbers?$filter=Id eq 'B7FQ-RANC'");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/SerialNumbers?$filter=Id eq 'B7FQ-RANC'', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    
    <li>
        <code>SerialNumber</code> (<strong>Required</strong>)  - Serial Number
    </li>
    </ul>



<h4>Response Parameters</h4>


 Array[<a href='#serialnumber'>SerialNumber</a>]

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">[
    {
        "Id": "B7FQ-RANC",
        "CatalogProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
        "EntityId": 14202,
        "CompanyId": 14146
    }
]</pre>

# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `InventoryAvailability resource with EntityId {x}` <br/> `and ProductId {y} cannot be found, nor is there`<br> `availability in the tree branch.` | Ensure CatalogItemId is valid and belongs to the [Location](/api/company-tree/#location) specified in the request |
| `HTTP 404` | `Resource cannot be found` | Ensure Serial Number is valid |
| `HTTP 500` | `Entity is not related to company` | Ensure [Location](/api/company-tree/#location) belongs to Company specified in request |  

