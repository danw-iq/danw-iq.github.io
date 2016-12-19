---
title:  Shipping Options
permalink: /api/shipping-options/

language_tabs:
  - javascript
  - shell: cURL
  - csharp: c#
  - java
  - ruby

search: true
---




# Overview

<div class="bs-callout alert-info">
This is an API specification that suppliers need to implement. 
</div>

Providing a Shipping Options API gives iQmetrix the ability to request your shipping options for a specific zip/postal code and set of products. The shipping options provided from your API will be displayed to the customer. Once the customer has selected their shipping option, the shipping option ID will be returned in the order during processing.

For this call, you will need to create an endpoint based on the specification provided by iQmetrix (see below). You will also need to provide an endpoint URL for iQmetrix and credentials for authentication.      


# Endpoints

You will provide the endpoint for iQmetrix. We recommend keeping the endpoint simple.

> Example

```
https://api.supplier.com/ShippingOptions
```

## Authentication

iQmetrix supports two methods for authentication:

#### HTTP Basic Authentication

Basic authentication. <strong>HTTPS is required.</strong>

> Example

```
Username: test_user
Password: password123
```

#### API Key

API key - based authentication. <strong>HTTPS is required.</strong>

API key must be provided in header and is configurable.

> Example

```
Api-Key: 9c269e40-92f3-4c21-9ff3-c4a00c985021
```   


## Resources


## ShippingQuery

```json
{
	"CompanyId": "123",
	"Items": "undefined",
	"PostalCode": "A1A1A1"
}
```

| Name | Description |
|:-----|:------------|
| CompanyId (`Integer`) | Company identifier | 
| Items (`Array[[shipping-options](/api/item/#Item)]`) | List of Products to be added to shipping query | 
| PostalCode (`String`) | Postal or zip code of shipping address | 



## Item

```json
{
	"ProductName": "Galaxy S6 Defender Case - Glacier",
	"Quantity": "11",
	"Sku": "87932OTS45S6"
}
```

| Name | Description |
|:-----|:------------|
| ProductName (`String`) | Product name  | 
| Quantity (`Integer`) | Amount of products | 
| Sku (`String`) | Product sku | 



## ShippingOptions

```json
{
	"Id": "350",
	"Cost": "7.94",
	"Currency": "CAD",
	"EstimatedTransitTime": "1 week",
	"Name": "PurolatorExpress"
}
```

| Name | Description |
|:-----|:------------|
| Id (`String`) | Identifier for the shipping option | 
| Cost (`Decimal`) | Cost for shipping option | 
| Currency (`String(3)`) | Cost currency (USD or CAD) | 
| EstimatedTransitTime (`String`) | Total time to be in transit, where units are provided by supplier | 
| Name (`String`) | Shipping option name | 





## Requests

## Get Shipping Options



#### Request

The specification for the request must be in the format:

```
POST /ShippingOptions
```

#### Headers

* `Authorization: Basic`
* `Accept: application/json`
* `Content-Type: application/json`
* `Host: supplier.azure-api.net`






#### Request Parameters

<ul><li><code>CompanyId</code> (<strong>Required</strong>) </li><li><code>PostalCode</code> (<strong>Required</strong>) </li><li><code>Items</code> (Optional) </li><ul><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>Quantity</code> (<strong>Required</strong>) </li><li><code>Sku</code> (<strong>Required</strong>) </li></ul></ul>

> Example

```
POST /ShippingOptions
Authorization: Basic
Accept: application/json
Content-Type: application/json
Host: supplier.azure-api.net

{
    "CompanyId": 123,
    "Items": [
        {
            "ProductName": "Galaxy S6 Defender Case - Glacier",
            "Quantity": 11,
            "Sku": "87932OTS45S6"
        }
    ],
    "PostalCode": "A1A1A1"
}
```

#### Response

The specification of the response must be in the format below:

  <li><code>Id</code> (<strong>Required</strong>) - Corresponds to the identifier of your shipping option method. For example, Id: 350 always corresponds to PurolatorExpress with charge 7.94 CAD.</li>
  <li><code>Cost</code> (<strong>Required</strong>) </li>
  <li><code>Currency</code> (<strong>Required</strong>) </li>
  <li><code>EstimatedTransitTime</code> (Optional) </li>
  <li><code>Name</code> (Optional) </li>


> Example

```
HTTP 200 Content-Type: application/json
[
    {
        "Id": "350",
        "Cost": 7.94,
        "Currency": "CAD",
        "EstimatedTransitTime": "1 week",
        "Name": "PurolatorExpress"
    }
]
```


