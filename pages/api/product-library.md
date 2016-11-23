---
title:  Products
permalink: /api/product-library/

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

The {{ProductLibrary_Concept}} is a central hub that provides product content.

With this endpoint you can get details of a catalog product by [Slug](/api/catalog/#product-slug) or search for products by other identifiers.



# Endpoints


* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>



# Resources









# Requests



## Get Product by Slug ID

Returns information for a [Catalog Product](/api/catalog/#product) item.


> Definition

```
GET /Products/{SlugId}
```

> Example Request


<pre class="highlight javascript"><code>GET /Products/M870-V7
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>

<pre class="highlight shell"><code>
curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/Products/M870-V7" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse GetProductBySlugId()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/Products/M870-V7");
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

public static CloseableHttpResponse GetProductBySlugId() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/Products/M870-V7");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/Products/M870-V7', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>SlugId</code> (<strong>Required</strong>)  - Identifier for the <a href="api/catalog/#product-slug">Product Slug</a>
    </li>
    </ul>



<h4>Response Parameters</h4>



> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
  "Id": "M1248-V1",
  "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
  "Assets": [
      {
          "Id": "732130d2-b673-461c-812b-f2b614d6076e",
          "Name": "iqmetrix.jpg",
          "Uri": "https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg",
          "Type": "Image",
          "IsHidden": true
      }
  ],
  "CanonicalClassification": {
      "Id": 4,
      "Name": "Smartphones",
      "ParentCategories": [
          {
              "Id": 2,
              "Name": "Devices"
          }
      ]
  },
  "Entity": {
      "Id": 14146,
      "Name": "Kentel Corp"
  },
  "HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
  "HeroShotUri": "https://imagehost/images/44f60963-5515-44bc-9509-71aef6463580",
  "IsLinkedToCuratedProduct": true,
  "IsSaleable": true,
  "LongDescription": "The world’s first dual-edge display was born from a need to create something new...",
  "Manufacturer": {
      "Id": 13149,
      "Name": "OtterBox"
  },
  "ManufacturerSkus": [
      {
          "Value": "JBLPULSEBLKAM",
          "Description": "",
          "Entity": {
              "Id": 14146,
              "Name": "Kentel Corp"
          }
      }
  ],
  "MasterProductId": 1248,
  "MSRP": {
      "Amount": 100,
      "CurrencyCode": "USD"
  },
  "Owner": {
      "Id": 14146,
      "Name": "Kentel Corp"
  },
  "Region": {
      "CountryCode": "CA",
      "CountryName": "Canada",
      "StateCode": "AB",
      "StateName": "British Columbia"
  },
  "ReleaseDate": "2011-10-14T12:00:00.000",
  "ShortDescription": "Next is Now",
  "Specifications": [
      {
          "Name": "Color",
          "Fields": [
              {
                  "Id": 54,
                  "Name": "Height",
                  "DisplayName": "Height",
                  "StringId": "Height",
                  "Type": "Float",
                  "Unit": "inches",
                  "Value": "6.08"
              }
          ]
      }
  ],
  "UpcCodes": [
      {
          "Value": "874688002478/16W",
          "Description": "UPC",
          "Entity": 2
      }
  ],
  "VariationId": 1,
  "VariationInfo": [
      {
          "VariationId": 1,
          "Slug": "M1248-V1",
          "Fields": [
              {
                  "FieldId": 1,
                  "Name": "Product Name",
                  "Value": "true"
              }
          ]
      }
  ],
  "VendorSkus": [
      {
          "Value": "JBLPULSEBLKAM",
          "Description": "",
          "Entity": {
              "Id": 14146,
              "Name": "Kentel Corp"
          }
      }
  ],
  "Version": 1
}
</pre>

## Searching for Products by Identifier

`FindByIdentifier` can be used to search for {{Product}} resources by the following identifiers:
 
| Searchable Identifiers |
|:-----------------------|
| ManufacturerSKU |
| VendorSKU |
| UPC |
 
<h3>Search Format</h3>
 
Query parameters are used to specify search criteria using the following format:
 
```csharp
{OptionName}={OptionValue}
```

Multiple options are separated with a `&` symbol.
 
<h3>Available Options</h3>
 
See the table below for available options and the syntax of using each one. 
 
| Keyword | Description | Data Type | Examples |
|:--------|:------------|:----------|:---------|
| `value` | Search for the given SKU, this option is **required** | String | `value=336963`|
| `type` | Search for the given SKU where the given identifier type matches. If no value is provided, all identifiers will be searched | String, see [Searchable Identifiers](#searchable-identifiers) |  `value=336963&type=VendorSKU` <br/> `value=336963&type=ManufacturerSKU` <br/> `value=336963&type=UPC`|
| `entityId` | Search for the given SKU where the given entityId matches and the identifier type is VendorSKU or ManufacturerSKU | Integer | `value=336963&type=VendorSKU&entityId=13238` | 


> Definition

```
GET /Products/FindByIdentifier?{Options}
```

> Example Request


<pre class="highlight javascript"><code>GET /Products/FindByIdentifier?value=336963&type=VendorSKU&entityId=13238
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>

<pre class="highlight shell"><code>
curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/Products/FindByIdentifier?value=336963&type=VendorSKU&entityId=13238" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse SearchingForProductsByIdentifier()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/Products/FindByIdentifier?value=336963&type=VendorSKU&entityId=13238");
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

public static CloseableHttpResponse SearchingForProductsByIdentifier() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/Products/FindByIdentifier?value=336963&type=VendorSKU&entityId=13238");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/Products/FindByIdentifier?value=336963&type=VendorSKU&entityId=13238', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>Options</code> (<strong>Required</strong>)  - The options for the search
    </li>
    </ul>



<h4>Response Parameters</h4>


 <ul><li><code>Products</code> (Array) </li><ul><li><code>Slug</code> (String) </li></ul></ul>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "Products": [
        {
            "Slug": "M551"
        }
    ]
}</pre>

# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 406` | `Locale not available` | This error occurs with some browsers and apps such as Postman. To resolve, add the header `Accept-Language: en-US` |

