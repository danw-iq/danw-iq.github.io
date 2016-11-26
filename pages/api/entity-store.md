---
title:  Entities
permalink: /api/entity-store/

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

The Entity Store helps manage your Company structure. It also manages relationships your Company has with Suppliers, Manufacturers and Carriers. 



# Endpoints


* Sandbox: <a href="https://entitymanagerdemo.iqmetrix.net/v1">https://entitymanagerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://entitymanager.iqmetrix.net/v1">https://entitymanager.iqmetrix.net/v1</a>



# Resources


## Carrier

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Unique identifier | 
| Name (`String`) | Name | 
| Description (`String`) | Description | 
| Attributes (`Object`) | Set of key-value pairs that contain extra data | 
| CreatedUTC (`DateTime`) | Created date, in UTC | 
| ClientEntityId (`String`) | Identifier in an external system | 
| LastModifiedUtc (`DateTime`) | Last modified date in UTC | 
| Logo (`Object`) | A reference to an [Asset](/api/assets/#asset) | 
| Relationships (`Array[object]`) | Relationships | 
| Role (`String`) | Role | 
| Roles (`Array[object]`) | The value must be Carrier | 
| Roles.Name (`String`) |  | 
| SortName (`String`) | A string used for sorting | 
| Version (`Integer`) | Latest revision number | 
| *CorrelationId (`String`)* | *Reserved for internal use* | |
| *TypeId (`String`)* | *Reserved for future use* | |



## Manufacturer

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Unique identifier | 
| Name (`String`) | Name | 
| Description (`String`) | Description | 
| Attributes (`Object`) | Set of key-value pairs that contain extra data | 
| CreatedUtc (`DateTime`) | Created date in UTC | 
| ClientEntityId (`String`) | Identifier in an external system | 
| LastModifiedUtc (`DateTime`) | Last modified date in UTC | 
| Logo (`Object`) | A reference to an [Asset](/api/assets/#asset) | 
| Relationships (`Array[object]`) | Relationships | 
| Role (`String`) | Role | 
| Roles (`Array[object]`) | The value must be Manufacturer | 
| Roles.Name (`String`) |  | 
| SortName (`String`) | A string used for sorting | 
| Version (`Integer`) | Latest revision number | 
| *CorrelationId (`String`)* | *Reserved for internal use* | |
| *TypeId (`String`)* | *Reserved for future use* | |



## Supplier

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Unique identifier | 
| Name (`String`) | Name | 
| Description (`String`) | Description | 
| Attributes (`Object`) | Set of key-value pairs that contain extra data | 
| CreatedUtc (`DateTime`) | Created date in UTC | 
| ClientEntityId (`String`) | Identifier in an external system | 
| LastModifiedUtc (`DateTime`) | Last modified date in UTC | 
| Logo (`Object`) | A reference to an [Asset](/api/assets/#asset) | 
| Relationships (`Array[object]`) | Relationships | 
| Role (`String`) | Role | 
| Roles (`Array[object]`) | The value must be Vendor | 
| Roles.Name (`String`) |  | 
| SortName (`String`) | A string used for sorting | 
| Version (`Integer`) | Latest revision number | 
| *CorrelationId (`String`)* | *Reserved for internal use* | |
| *TypeId (`String`)* | *Reserved for future use* | |







# Requests



## Getting All Carriers



> Definition

```
GET /Carriers
```

> Example Request



```shell
curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Carriers" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllCarriers() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Carriers");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Carriers', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>





<h4>Response Parameters</h4>


 Array[<a href='#carrier'>Carrier</a>]

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">[
    {
        "Id": 9,
        "Name": "Helios",
        "Description": "",
        "Attributes": {},
        "CreatedUTC": "2014-07-28T20:52:12.929Z",
        "ClientEntityId": "Carrier_25",
        "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
        "Logo": {},
        "Relationships": [],
        "Role": "Carrier",
        "Roles": [
            {
                "Name": "Carrier"
            }
        ],
        "SortName": "helios",
        "Version": 1
    }
]</pre>

## Getting a Carrier



> Definition

```
GET /Carriers({CarrierId})
```

> Example Request



```shell
curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Carriers(9)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingACarrier() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Carriers(9)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Carriers(9)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>CarrierId</code> (<strong>Required</strong>)  - Identifier for the {{Carrier}}
    </li>
    </ul>



<h4>Response Parameters</h4>


 <a href='#carrier'>Carrier</a>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "Id": 9,
    "Name": "Helios",
    "Description": "",
    "Attributes": {},
    "CreatedUTC": "2014-07-28T20:52:12.929Z",
    "ClientEntityId": "Carrier_25",
    "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
    "Logo": {},
    "Relationships": [],
    "Role": "Carrier",
    "Roles": [
        {
            "Name": "Carrier"
        }
    ],
    "SortName": "helios",
    "Version": 1
}</pre>

## Getting All Manufacturers



> Definition

```
GET /Manufacturers
```

> Example Request



```shell
curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllManufacturers() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>





<h4>Response Parameters</h4>


 Array[<a href='#manufacturer'>Manufacturer</a>]

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">[
    {
        "Id": 13149,
        "Name": "OtterBox",
        "Description": "#1 Most Trusted Brand in Smartphone Protection",
        "Attributes": {},
        "CreatedUtc": "2015-02-24T19:29:31.073Z",
        "ClientEntityId": "Manufacturer_145",
        "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
        "Logo": {},
        "Relationships": [],
        "Role": "Manufacturer",
        "Roles": [
            {
                "Name": "Manufacturer"
            }
        ],
        "SortName": "otterbox",
        "Version": 1
    }
]</pre>

## Getting a Manufacturer



> Definition

```
GET /Manufacturers({ManufacturerId})
```

> Example Request



```shell
curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers(13149)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAManufacturer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers(13149)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers(13149)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>ManufacturerId</code> (<strong>Required</strong>)  - Identifier for the {{Manufacturer}}
    </li>
    </ul>



<h4>Response Parameters</h4>


 <a href='#manufacturer'>Manufacturer</a>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "Id": 13149,
    "Name": "OtterBox",
    "Description": "#1 Most Trusted Brand in Smartphone Protection",
    "Attributes": {},
    "CreatedUtc": "2015-02-24T19:29:31.073Z",
    "ClientEntityId": "Manufacturer_145",
    "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
    "Logo": {},
    "Relationships": [],
    "Role": "Manufacturer",
    "Roles": [
        {
            "Name": "Manufacturer"
        }
    ],
    "SortName": "otterbox",
    "Version": 1
}</pre>

## Getting all Suppliers



> Definition

```
GET /Suppliers
```

> Example Request



```shell
curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Suppliers" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllSuppliers() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Suppliers");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Suppliers', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>





<h4>Response Parameters</h4>


 Array[<a href='#supplier'>Supplier</a>]

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">[
    {
        "Id": 14107,
        "Name": "NOZAMA Inc.",
        "Description": "Provides supplies for KENTEL Corp.",
        "Attributes": {},
        "CreatedUtc": "2015-11-05T18:15:26.558Z",
        "ClientEntityId": "Supplier_151",
        "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
        "Logo": {},
        "Relationships": [],
        "Role": "Vendor",
        "Roles": [
            {
                "Name": "Vendor"
            }
        ],
        "SortName": "nozama inc.",
        "Version": 1
    }
]</pre>

## Getting a Supplier



> Definition

```
GET /Suppliers({SupplierId})
```

> Example Request



```shell
curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Suppliers(14107)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingASupplier() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Suppliers(14107)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Suppliers(14107)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>SupplierId</code> (<strong>Required</strong>)  - Identifier for the {{Supplier}}
    </li>
    </ul>



<h4>Response Parameters</h4>


 <a href='#supplier'>Supplier</a>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "Id": 14107,
    "Name": "NOZAMA Inc.",
    "Description": "Provides supplies for KENTEL Corp.",
    "Attributes": {},
    "CreatedUtc": "2015-11-05T18:15:26.558Z",
    "ClientEntityId": "Supplier_151",
    "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
    "Logo": {},
    "Relationships": [],
    "Role": "Vendor",
    "Roles": [
        {
            "Name": "Vendor"
        }
    ],
    "SortName": "nozama inc.",
    "Version": 1
}</pre>
