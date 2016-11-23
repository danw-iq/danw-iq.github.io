---
title:  Shipping Aggregator
permalink: /api/saccs/

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

The Shipping Aggregator requests shipping options from a vendor's shipping API and returns a list of their associated costs and timeframe.

{{important}}The Shipping Aggregator also verifies the availability of the requested catalog items. If an item is <strong>Out of Stock</strong>, then you must prevent this order from continuing. An unavailable item will be indicated in the body of an HTTP 400 response.{{end}}



# Endpoints


* Sandbox: <a href="https://shippingaggregatordemo.iqmetrix.net/">https://shippingaggregatordemo.iqmetrix.net/</a>
* Production: <a href="https://shippingaggregator.iqmetrix.net/">https://shippingaggregator.iqmetrix.net/</a>



# Resources


## ShippingQuery

| Name | Description |
|:-----|:------------|
| LocationEntityId (`String`) | [Location](/api/company-tree/#location) identifer | 
| PostalCode (`String`) | Postal or zip code of shipping address | 
| Items (`Array[<a href='/api/saccs/#item'>Item</a>]`) | List of Products to be added to shipping query | 

## Item

| Name | Description |
|:-----|:------------|
| CatalogId (`GUID`) | [Catalog](/api/catalog/#catalogitem) identifer | 
| Quantity (`Integer`) | Amount of products | 
| Cost (`Decimal`) | Cost of item | 

## ShippingResponse

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Unique identifer | 
| LocationEntityId (`Integer`) | [Location](/api/company-tree/#location) identifier | 
| PostalCode (`String`) | Postal or zip code of shipping address | 
| Shipments (`Array[<a href='/api/saccs/#shipments'>Shipments</a>]`) | List of suppliers and their shipping options | 
| *Items (`Array[object]`)* | *Reserved for internal use* | |

## Shipments

| Name | Description |
|:-----|:------------|
| SupplierEntityId (`Integer`) | [Supplier](/api/entity-store/#supplier) identifier | 
| Items (`Array[<a href='/api/saccs/#item'>Item</a>]`) | List of Products to be added to shipping query | 
| ShippingOptions (`Array[<a href='/api/saccs/#shippingoptions'>ShippingOptions</a>]`) | List of shipping options available from vendor | 

## ShippingOptions

| Name | Description |
|:-----|:------------|
| Id (`String`) | Vendor shipping identifer | 
| Cost (`Decimal`) | Cost for shipping option | 
| Currency (`String`) | Cost currency (USD or CAD) | 
| EstimatedTransitTime (`String`) | Total time to be in transit, where units are provided by supplier | 
| Name (`String`) | Shipping option name | 





# Requests



## Retrieving Shipping Options



> Definition

```
POST /Companies({CompanyId})/ShippingInformation
```

> Example Request


<pre class="highlight javascript"><code>POST /Companies(14146)/ShippingInformation
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code></pre>

<pre class="highlight shell"><code>
curl -X POST "https://shippingaggregatordemo.iqmetrix.net//Companies(14146)/ShippingInformation" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "LocationEntityId": "14202",
    "PostalCode": "P9H 9I4",
    "Items": [
        {
            "CatalogId": "18e039de-f950-4d8e-a48a-d06e4db55a07",
            "Quantity": 1
        }
    ]
}'</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse RetrievingShippingOptions()
{
    var client = new RestClient("https://shippingaggregatordemo.iqmetrix.net//Companies(14146)/ShippingInformation");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"LocationEntityId\":\"14202\",\"PostalCode\":\"P9H 9I4\",\"Items\":[{\"CatalogId\":\"18e039de-f950-4d8e-a48a-d06e4db55a07\",\"Quantity\":1}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>


<pre class="highlight java"><code>
import org.apache.http.entity.StringEntity;
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

<pre class="highlight ruby"><code>require 'rest-client'

body = "{\"LocationEntityId\":\"14202\",\"PostalCode\":\"P9H 9I4\",\"Items\":[{\"CatalogId\":\"18e039de-f950-4d8e-a48a-d06e4db55a07\",\"Quantity\":1}]}";

response = RestClient.post 'https://shippingaggregatordemo.iqmetrix.net//Companies(14146)/ShippingInformation', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier of the Company
    </li>
    </ul>



#### Request Parameters

<ul><li><code>LocationEntityId</code> (<strong>Required</strong>) </li><li><code>PostalCode</code> (<strong>Required</strong>) </li><li><code>Items</code> (Optional) </li><ul><li><code>CatalogId</code> (<strong>Required</strong>) </li><li><code>Quantity</code> (<strong>Required</strong>) </li></ul></ul>

<h4>Response Parameters</h4>


 <a href='#shippingresponse'>ShippingResponse</a>

> Example Response

<pre class="highlight json">
HTTP 202 Content-Type: application/json
</pre><pre class="highlight json">{
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

# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `No availability found for the following products: (Product Name)` | Occurs when item is no longer available. |
| `HTTP 400` | `Entity is not related to company` | Occurs when entering an incorrect `CompanyId` or `LocationEntityId` |
| `HTTP 400` | `Error getting catalog item identifiers for CatalogIds: (CatalogId)` | Occurs when entering an incorrect `CatalogId` |

