---
title:  Products
permalink: /api/product-library/
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

The {{ProductLibrary_Concept}} is a central hub that provides product content.

With this endpoint you can get details of a catalog product by [Slug](/api/catalog/#product-slug) or search for products by other identifiers.


## Endpoints

* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>

## Resources








## Requests



<h3 id='get-product-by-slug-id' class='clickable-header top-level-header'>Get Product by Slug ID</h3>

Returns information for a [Catalog Product](/api/catalog/#product) item.


<h4>Request</h4>

<pre>
GET /Products/{SlugId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>SlugId</code> (<strong>Required</strong>)  - Identifier for the <a href="api/catalog/#product-slug">Product Slug</a>
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-get-product-by-slug-id" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-get-product-by-slug-id" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-get-product-by-slug-id" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-get-product-by-slug-id" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-get-product-by-slug-id" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-get-product-by-slug-id" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-get-product-by-slug-id"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-get-product-by-slug-id">
<pre id="http-code-get-product-by-slug-id"><code class="language-http">GET /Products/M870-V7
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-get-product-by-slug-id">
<pre id="curl-code-get-product-by-slug-id"><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/Products/M870-V7" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-get-product-by-slug-id">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-get-product-by-slug-id"><code class="language-csharp">static IRestResponse GetProductBySlugId()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/Products/M870-V7");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-get-product-by-slug-id">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-get-product-by-slug-id"><code class="language-java">
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
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-get-product-by-slug-id">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-get-product-by-slug-id"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/Products/M870-V7', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
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

<h3 id='searching-for-products-by-identifier' class='clickable-header top-level-header'>Searching for Products by Identifier</h3>

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


<h4>Request</h4>

<pre>
GET /Products/FindByIdentifier?{Options}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>Options</code> (<strong>Required</strong>)  - The options for the search
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-searching-for-products-by-identifier" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-searching-for-products-by-identifier" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-searching-for-products-by-identifier" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-searching-for-products-by-identifier" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-searching-for-products-by-identifier" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-searching-for-products-by-identifier" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-searching-for-products-by-identifier"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-searching-for-products-by-identifier">
<pre id="http-code-searching-for-products-by-identifier"><code class="language-http">GET /Products/FindByIdentifier?value=336963&type=VendorSKU&entityId=13238
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-searching-for-products-by-identifier">
<pre id="curl-code-searching-for-products-by-identifier"><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/Products/FindByIdentifier?value=336963&type=VendorSKU&entityId=13238" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-searching-for-products-by-identifier">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-searching-for-products-by-identifier"><code class="language-csharp">static IRestResponse SearchingForProductsByIdentifier()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/Products/FindByIdentifier?value=336963&type=VendorSKU&entityId=13238");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-searching-for-products-by-identifier">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-searching-for-products-by-identifier"><code class="language-java">
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
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-searching-for-products-by-identifier">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-searching-for-products-by-identifier"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/Products/FindByIdentifier?value=336963&type=VendorSKU&entityId=13238', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>Products</code> (Array) </li><ul><li><code>Slug</code> (String) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Products": [
        {
            "Slug": "M551"
        }
    ]
}</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 406` | `Locale not available` | This error occurs with some browsers and apps such as Postman. To resolve, add the header `Accept-Language: en-US` |
