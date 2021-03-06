---
title: Cost Feed

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>


search: true
---

# Overview

The cost feed provides iQmetrix with the wholesale cost (inclusive cost for the company) for each product.  
The cost feed allows suppliers to input a list of products, where each product includes one cost and list of associated companies.

These costs will be provided for retailers (companies) to use for future transactions and will be reflected in RQ and BI reporting. 

Products can be repeated in this feed with different costs. For example, the iPhone 6 could be priced differently depending on where it is sold. 

<aside class="notice">Ensure each company ID has only *one* cost per product.</aside>


# Endpoints


* Sandbox: <a href="https://dropshipdemo.iqmetrix.net/v1">https://dropshipdemo.iqmetrix.net/v1</a>
* Production: <a href="https://dropship.iqmetrix.net/v1">https://dropship.iqmetrix.net/v1</a>


# Resources

## Cost

```
{
    "Id": "2e18496c-8f73-4298-8c96-a07816926734",
    "Products": [
        {
            "Sku": "1115884",
            "Cost": 12.99,
            "CompanyIds": [
                14146
            ]
        }
    ]
}
```

| Name |  Description |
|:-----|:-------------|
| Id (`GUID`)| Unique identifer | 
| Products (`Array[object]`)| List of products for which the cost is being updated |
| Products.Sku (`String`)| Vendor product SKU | 
| Products.Cost (`Decimal`)| Vendor product cost applied to the associated companies |
| Products.CompanyIds (`Array[integer]`) | List of [Company](/api/company-tree#company) identifiers to receive Vendor product cost |


# Requests

## Adding a Product to Cost Feed

` POST https://dropshipdemo.iqmetrix.net/v1/Suppliers({SupplierId})/Cost `


```javascript
POST https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Cost
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

{
    "Products": [
        {
            "Sku": "1115884",
            "Cost": 12.99,
            "CompanyIds": [
                14146
            ]
        }
    ]
}
```

```shell
curl -X POST "https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Cost" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Products": [
        {
            "Sku": "1115884",
            "Cost": 12.99,
            "CompanyIds": [
                14146
            ]
        }
    ]
}
```

```shell
curl \
  -H "Authorization: Bearer (Access Token)" \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "Products": [
        {
            "Sku": "1115884",
            "Cost": 12.99,
            "CompanyIds": [
                14146
            ]
        }
    ]
  }' \
  -X POST \
  https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Cost
```

```csharp
static IRestResponse AddingAProductToCostFeed()
{
    var client = new RestClient("https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Cost");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Products\":[{\"Sku\":\"1115884\",\"Cost\":12.99,\"CompanyIds\":[14146]}]}", ParameterType.RequestBody);

    return client.Execute(request);
}
```

```java
import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse AddingAProductToCostFeed() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Cost");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Products\":[{\"Sku\":\"1115884\",\"Cost\":12.99,\"CompanyIds\":[14146]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}
```

```ruby
# This code sample uses [rest-client](https://github.com/rest-client/rest-client), ensure you `gem install rest-client`.

body = "{\"Products\":[{\"Sku\":\"1115884\",\"Cost\":12.99,\"CompanyIds\":[14146]}]}";

response = RestClient.post 'https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Cost', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response
```

### Headers

* Authorization: Bearer (Access Token) - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a>
* Accept: application/json
* Content-Type: application/json


### URI Parameters

* SupplierId (**Required**) - Identifier of the Supplier
   

### Request Parameters

* Products (**Required**) 
 * Sku (**Required**) 
 * Cost (**Required**) 
 * CompanyIds (**Required**)

### Response

```
HTTP 202 Content-Type: application/json
```

```
{
    "Id": "2e18496c-8f73-4298-8c96-a07816926734",
    "Products": [
        {
            "Sku": "1115884",
            "Cost": 12.99,
            "CompanyIds": [
                14146
            ]
        }
    ]
}
```

[Cost](#cost)


# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Cannot find supplier identifier in the uri` | Occurs when entering an incorrect `SupplierId` in the uri |
