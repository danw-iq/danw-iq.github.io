---
title:  Supplier Availability
permalink: /api/supplier-availability/

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

Suppliers have the ability to configure availability of products.



# Endpoints


* Sandbox: <a href="https://dropshipdemo.iqmetrix.net/v1">https://dropshipdemo.iqmetrix.net/v1</a>
* Production: <a href="https://dropship.iqmetrix.net/v1">https://dropship.iqmetrix.net/v1</a>



# Resources


## Availability

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Unique identifier | 
| Products (`Array[object]`) | Products for the Availability Feed | 
| Products.IsAvailable (`Boolean`) | A flag to indicate if the Product is Available | 
| Products.Sku (`String`) | Vendor SKU | 
| Products.Quantity (`Integer`) | Product quantity | 







# Requests



## Configuring Product Availability



> Definition

```
POST /Suppliers({SupplierId})/Availability
```

> Example Request



```shell
curl -X POST "https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Availability" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Products": [
        {
            "IsAvailable": true,
            "Sku": "9101AGAP6",
            "Quantity": 10
        }
    ]
}'
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse ConfiguringProductAvailability() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Availability");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Products\":[{\"IsAvailable\":true,\"Sku\":\"9101AGAP6\",\"Quantity\":10}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'

body = "{\"Products\":[{\"IsAvailable\":true,\"Sku\":\"9101AGAP6\",\"Quantity\":10}]}";

response = RestClient.post 'https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Availability', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>SupplierId</code> (<strong>Required</strong>)  - Identifier for the {{Supplier}}
    </li>
    </ul>



#### Request Parameters

<ul><li><code>Products</code> (<strong>Required</strong>) </li><ul><li><code>Sku</code> (<strong>Required</strong>) </li><li><code>IsAvailable</code> (Optional) </li><li><code>Quantity</code> (Optional) </li></ul></ul>

<h4>Response Parameters</h4>


 <a href='#availability'>Availability</a>

> Example Response

<pre class="highlight json">
HTTP 202 Content-Type: application/json
</pre><pre class="highlight json">{
    "Id": "c2a97823-196b-4b3e-891a-ba01665797e4",
    "Products": [
        {
            "IsAvailable": true,
            "Sku": "9101AGAP6",
            "Quantity": 10
        }
    ]
}</pre>

# Errors


| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 400` | `Cannot find supplier identifier in the uri` | Occurs when entering an incorrect SupplierId in the uri |

