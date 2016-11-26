---
title:  Product Subscription
permalink: /api/product-subscription/

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

Suppliers have the ability to add products to their subscribable lists and retrieve a list of companies from a subscription.

Suppliers can also create their own subscribable lists and add/remove companies from their lists, or have iQmetrix handle these scenarios. When creating a subscribable list, you must specify the GUID (e.g. <a href="http://www.guidgenerator.com/online-guid-generator.aspx" target="_blank">Online GUID Generator</a>).



# Endpoints


* Sandbox: <a href="https://productsubscriptionsdemo.iqmetrix.net/v1">https://productsubscriptionsdemo.iqmetrix.net/v1</a>
* Production: <a href="https://productsubscriptions.iqmetrix.net/v1">https://productsubscriptions.iqmetrix.net/v1</a>



# Resources


## Subscription

| Name | Description |
|:-----|:------------|
| Companies (`Array[<a href='/api/product-subscription/#company'>Company</a>]`) | Companies for the subscription | 
| ListId (`GUID`) | Subscription identifier | 

## Company

| Name | Description |
|:-----|:------------|
| DateSubscribedUtc (`DateTime`) | Date company subscribed to product subscription, in UTC | 
| Id (`Integer`) | Company identifier | 
| Name (`String`) | Company Name | 

## SubscribableList

| Name | Description |
|:-----|:------------|
| EntityId (`Integer`) | [Supplier](/api/entity-store/#supplier) identifier | 
| Id (`GUID`) | Subscribable List identifer | 
| Name (`String`) | Title of product subscription | 
| Dropshippable (`Boolean`) | Indicates if products in list are dropshippable. Defaults to false | 
| Products (`Array[<a href='/api/product-subscription/#product'>Product</a>]`) | Products for the subscribable list | 
| Version (`Integer`) | Subscription revision | 
| CountOfProducts (`Integer`) | Number of Products in the List | 
| *MasterEntityId (`Integer`)* | *Reserved for internal use* | |

## Product

| Name | Description |
|:-----|:------------|
| Dropshippable (`Boolean`) | Indicates if the product is dropshippable | 
| Price (`Decimal`) | Product MSRP. Currency code defaults internally to retailer location.  | 
| ProductName (`String`) | Name of product | 
| ProductSlugs (`Array[string]`) | List of slugs that match the vendor sku | 
| VendorSku (`String`) | Vendor product SKU | 
| Version (`Integer`) | Product revision | 






# Requests



## Getting All Companies in a Product Subscription



> Definition

```
GET /subscription({ListId})
```

> Example Request



```shell
curl -X GET "https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllCompaniesInAProductSubscription() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>ListId</code> (<strong>Required</strong>) 
    </li>
    </ul>



<h4>Response Parameters</h4>


 Array[<a href='#subscription'>Subscription</a>]

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
  "ListId": "43d92a51-650e-4b85-b5d0-8d51bf4c59f4",
  "Companies": [
      {
        "Id": 14146,
        "Name": "KENTEL Corp",
        "DateSubscribedUtc": "2015-11-23T19:12:09.92Z"
      },
    ...  
  ]
}
</pre>

## Creating a Subscribable List

Allows you to create your own subscribable list. You must provide a GUID for the  `SubscribableListId`.{{note}}The naming convention for subscribable lists is in the format "Vendor Name - Product List Name". For example, Supplier123 - Otterbox Products.{{end}}


> Definition

```
PUT /subscribablelists({ListId})
```

> Example Request



```shell
curl -X PUT "https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "EntityId": 14107,
    "Name": "Test List Name",
    "Dropshippable": true
}
'
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingASubscribableList() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"EntityId\":14107,\"Name\":\"Test List Name\",\"Dropshippable\":true}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'

body = "{\"EntityId\":14107,\"Name\":\"Test List Name\",\"Dropshippable\":true}

response = RestClient.put 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>ListId</code> (<strong>Required</strong>)  - GUID you have added for {{SubscribableList}}
    </li>
    </ul>



#### Request Parameters

<ul><li><code>EntityId</code> (<strong>Required</strong>) - {{Supplier}} identifier</li><li><code>Name</code> (<strong>Required</strong>) - Title of product subscription</li><li><code>Dropshippable</code> (Optional) - Defaults to false</li></ul>

<h4>Response Parameters</h4>


 <a href='#subscribablelist'>SubscribableList</a>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "Id": "43d92a51-650e-4b85-b5d0-8d51bf4c59f4",
    "EntityId": 14107,
    "Name": "Nozama - Samsung Products",
    "Dropshippable": true,
    "Products": [],
    "Version": 2
}
</pre>

## Getting a Subscribable List



> Definition

```
GET /subscribablelists({SubscribableListId})
```

> Example Request



```shell
curl -X GET "https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingASubscribableList() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>SubscribableListId</code> (<strong>Required</strong>)  - Identifier for a {{SubscribableList}}
    </li>
    </ul>



<h4>Response Parameters</h4>


 <a href='#subscribablelist'>SubscribableList</a>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "EntityId": 14107,
    "Id": "43d92a51-650e-4b85-b5d0-8d51bf4c59f4",
    "Name": "Nozama's Product List",
    "Dropshippable": true,
    "Products": [
        {
            "Dropshippable": true,
            "Price": 24.99,
            "ProductName": "Samsung Galaxy S4 Standard Battery",
            "ProductSlugs": [
                "M5218"
            ],
            "VendorSku": "B00LAOKN4S",
            "Version": 2
        }
    ],
    "Version": 2,
    "CountOfProducts": 1
}</pre>

## Updating Products in a Subscribable List

{{note}}The new product list in the payload replaces the old product list. Any matching old products (determined by vendor sku) will have their slug and version data copied over into the new products.{{end}}


> Definition

```
PUT /subscribablelists({SubscribableListId})
```

> Example Request



```shell
curl -X PUT "https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
   "EntityId": 14107,
   "Name": "Nozama's Product List",
   "Products": [
       {
           "ProductName": "Samsung Galaxy S4 Standard Battery",
           "VendorSku": "B00LAOKN4S",
           "Price": 24.99,
           "Dropshippable": true
       }
   ]          
}
'
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingProductsInASubscribableList() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"EntityId\":14107,\"Name\":\"Nozama's Product List\",\"Products\":[{\"ProductName\":\"Samsung Galaxy S4 Standard Battery\",\"VendorSku\":\"B00LAOKN4S\",\"Price\":24.99,\"Dropshippable\":true}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'

body = "{\"EntityId\":14107,\"Name\":\"Nozama's Product List\",\"Products\":[{\"ProductName\":\"Samsung Galaxy S4 Standard Battery\",\"VendorSku\":\"B00LAOKN4S\",\"Price\":24.99,\"Dropshippable\":true}]}

response = RestClient.put 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>SubscribableListId</code> (<strong>Required</strong>)  - Identifier for a {{SubscribableList}}
    </li>
    </ul>



#### Request Parameters

<ul><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Products</code> (<strong>Required</strong>) </li><ul><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>VendorSku</code> (<strong>Required</strong>) </li><li><code>Dropshippable</code> (Optional) </li><li><code>Price</code> (Optional) </li><li><code>ProductSlugs</code> (Optional) </li><li><code>Version</code> (<strong>Required</strong>) </li></ul><li><code>Id</code> (Optional) </li><li><code>Dropshippable</code> (Optional) </li><li><code>Version</code> (<strong>Required</strong>) </li></ul>

<h4>Response Parameters</h4>


 <a href='#subscribablelist'>SubscribableList</a>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "Id": "43d92a51-650e-4b85-b5d0-8d51bf4c59f4",
    "EntityId": 41407,
    "Name": "Nozama's Product List",
    "Products": [
        {
            "ProductName": "Samsung Galaxy S4 Standard Battery",
            "VendorSku": "B00LAOKN4S",
            "Price": 24.99,
            "Dropshippable": true
            "ProductSlugs": [],
            "Version": 1
        }
    ],
    "Version": 2
}
</pre>

## Adding a Company to a Subscribable List



> Definition

```
PUT /subscription({ListId})/company({CompanyId})
```

> Example Request



```shell
curl -X PUT "https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse AddingACompanyToASubscribableList() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.put 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>ListId</code> (<strong>Required</strong>)  - Identifier for a {{SubscribableList}}
    </li>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h4>Response Parameters</h4>



> Example Response

<pre class="highlight json">
HTTP 204 Content-Type: application/json
</pre>

## Deleting a Company from a Subscribable List



> Definition

```
DELETE /subscription({ListId})/company({CompanyId})
```

> Example Request



```shell
curl -X DELETE "https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)" -H "Authorization: Bearer (Access Token)"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse DeletingACompanyFromASubscribableList() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.delete 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>ListId</code> (<strong>Required</strong>)  - Identifier for a {{SubscribableList}}
    </li>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h4>Response Parameters</h4>



> Example Response

<pre class="highlight json">
HTTP 204 Content-Type: application/json
</pre>

# Errors

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 400` | `Validation failed. EntityId does not belong to vendor` | Occurs when entering an incorrect EntityId |
| `HTTP 400` | `<Field> should not be empty` | Occurs if Required Parameter is missing |
| `HTTP 404` | `Document not found` | Occurs when entering an incorrect ID in the uri | 

