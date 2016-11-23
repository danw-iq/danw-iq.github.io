---
title:  Trade In Reporting Service
permalink: /api/Trade-In-Reporting-Service/

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

The Trade-In Reporting Service allows Phobio to push enhanced trade-in reporting data into iQmetrix's systems.


# Endpoints


* Sandbox: <a href="https://tradeinreportingdemo.iqmetrix.net/v1">https://tradeinreportingdemo.iqmetrix.net/v1</a>
* Production: <a href="https://tradeinreporting.iqmetrix.net/v1">https://tradeinreporting.iqmetrix.net/v1</a>



# Resources



## PhobioTradeInData

| Name | Description |
|:-----|:------------|
| inspectedDate (`DateTime`) | Date added to statement for payment | 
| originalCustomerInspectionValue  (`Decimal`) | Amount customer should have received based on inspection | 
| originalCustomerTradeInValue (`Decimal`) | Value customer deserved for Trade (updated by Phobio upon receipt) | 
| paymentDate (`DateTime`) | Date payment issued by Phobio | 
| postInspectionValue (`Decimal`) | Payment amount to dealer | 
| processedDate (`DateTime`) | Date processed at Phobio | 
| receivedDate (`DateTime`) | Date received at Phobio | 
| receivedImei (`String`) | IMEI of product received at Phobio | 
| receivedProductDisplayName (`String`) | Name of product received at Phobio | 
| referenceNumber (`String`) | Phobio's quote UID that contains the trade | 
| serialNumber (`String`) | The serial number (IMEI) of the trade this data applies to | 
| shippedDate (`DateTime`) | Date shipped from store | 
| shipmentId (`String`) | UID of shipment | 
| tradeInStatus (`String`) | Status of the Trade-In, see [Trade-In Status](#trade-in-status) for a list of acceptable values | 

## ProviderTradeData

| Name | Description |
|:-----|:------------|
| referenceNumber (`String`) | The reference number from the provider | 
| tradeDataId (`Integer`) | The identifier of the provider trade data | 



## Enumerations

### Trade-In Status

| Name | Description |
|:-----|:------------|
| Quoted | Customer has been given quote for Trade-In |
| Received | Device from Customer has been received |
| Inspected | Device has been inspected |


# Requests



## Create or Update a Trade



> Definition

```
POST /providers({ProviderId})/tradeData
```

> Example Request


<pre class="highlight javascript"><code>POST /providers(10)/tradeData
Authorization: Bearer (Access Token)
</code></pre>

<pre class="highlight shell"><code>
curl -X POST "https://tradeinreportingdemo.iqmetrix.net/v1/providers(10)/tradeData" -H "Authorization: Bearer (Access Token)" -d '[
    {
        "inspectedDate": "2016-03-16T12:00:00.000Z",
        "originalCustomerInspectionValue ": 310.5,
        "originalCustomerTradeInValue": 310.5,
        "paymentDate": "2016-03-16T12:00:00.000Z",
        "postInspectionValue": 310.5,
        "processedDate": "2016-03-17T12:00:00.000Z",
        "receivedDate": "2016-03-16T12:00:00.000Z",
        "receivedImei": "351756051523999",
        "receivedProductDisplayName": "Galaxy S6 edge+ 32GB - Black Sapphire",
        "referenceNumber": "29253392392",
        "serialNumber": "B7FQ-RANC",
        "shippedDate": "2016-03-13T12:00:00.000Z",
        "shipmentId": "123",
        "tradeInStatus": "Quoted"
    }
]'</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse CreateOrUpdateATrade()
{
    var client = new RestClient("https://tradeinreportingdemo.iqmetrix.net/v1/providers(10)/tradeData");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

     request.AddParameter("application/json", "[{\"inspectedDate\":\"2016-03-16T12:00:00.000Z\",\"originalCustomerInspectionValue \":310.5,\"originalCustomerTradeInValue\":310.5,\"paymentDate\":\"2016-03-16T12:00:00.000Z\",\"postInspectionValue\":310.5,\"processedDate\":\"2016-03-17T12:00:00.000Z\",\"receivedDate\":\"2016-03-16T12:00:00.000Z\",\"receivedImei\":\"351756051523999\",\"receivedProductDisplayName\":\"Galaxy S6 edge+ 32GB - Black Sapphire\",\"referenceNumber\":\"29253392392\",\"serialNumber\":\"B7FQ-RANC\",\"shippedDate\":\"2016-03-13T12:00:00.000Z\",\"shipmentId\":\"123\",\"tradeInStatus\":\"Quoted\"}]", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>


<pre class="highlight java"><code>
import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreateOrUpdateATrade() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://tradeinreportingdemo.iqmetrix.net/v1/providers(10)/tradeData");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    StringEntity body = new StringEntity("[{\"inspectedDate\":\"2016-03-16T12:00:00.000Z\",\"originalCustomerInspectionValue \":310.5,\"originalCustomerTradeInValue\":310.5,\"paymentDate\":\"2016-03-16T12:00:00.000Z\",\"postInspectionValue\":310.5,\"processedDate\":\"2016-03-17T12:00:00.000Z\",\"receivedDate\":\"2016-03-16T12:00:00.000Z\",\"receivedImei\":\"351756051523999\",\"receivedProductDisplayName\":\"Galaxy S6 edge+ 32GB - Black Sapphire\",\"referenceNumber\":\"29253392392\",\"serialNumber\":\"B7FQ-RANC\",\"shippedDate\":\"2016-03-13T12:00:00.000Z\",\"shipmentId\":\"123\",\"tradeInStatus\":\"Quoted\"}]");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'

body = "[{\"inspectedDate\":\"2016-03-16T12:00:00.000Z\",\"originalCustomerInspectionValue \":310.5,\"originalCustomerTradeInValue\":310.5,\"paymentDate\":\"2016-03-16T12:00:00.000Z\",\"postInspectionValue\":310.5,\"processedDate\":\"2016-03-17T12:00:00.000Z\",\"receivedDate\":\"2016-03-16T12:00:00.000Z\",\"receivedImei\":\"351756051523999\",\"receivedProductDisplayName\":\"Galaxy S6 edge+ 32GB - Black Sapphire\",\"referenceNumber\":\"29253392392\",\"serialNumber\":\"B7FQ-RANC\",\"shippedDate\":\"2016-03-13T12:00:00.000Z\",\"shipmentId\":\"123\",\"tradeInStatus\":\"Quoted\"}]";

response = RestClient.post 'https://tradeinreportingdemo.iqmetrix.net/v1/providers(10)/tradeData', body, {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>ProviderId</code> (<strong>Required</strong>)  - The provider identifier given by iQmetrix
    </li>
    </ul>



#### Request Parameters

<ul><li><code>receivedImei</code> (<strong>Required</strong>) </li><li><code>referenceNumber</code> (<strong>Required</strong>) </li><li><code>inspectedDate</code> (Optional) </li><li><code>originalCustomerInspectionValue </code> (Optional) </li><li><code>originalCustomerTradeInValue</code> (Optional) </li><li><code>paymentDate</code> (Optional) </li><li><code>postInspectionValue</code> (Optional) </li><li><code>processedDate</code> (Optional) </li><li><code>receivedDate</code> (Optional) </li><li><code>receivedProductDisplayName</code> (Optional) </li><li><code>serialNumber</code> (Optional) </li><li><code>shippedDate</code> (Optional) </li><li><code>shipmentId</code> (Optional) </li><li><code>tradeInStatus</code> (Optional) </li></ul>

<h4>Response Parameters</h4>


 Array[<a href='#providertradedata'>ProviderTradeData</a>]

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">[
    {
        "referenceNumber": "123",
        "tradeDataId": 357
    }
]</pre>

## Get Provider Data for a Trade



> Definition

```
GET /providers({ProviderId})/tradeData({TradeDataId})
```

> Example Request


<pre class="highlight javascript"><code>GET /providers(10)/tradeData(357)
Authorization: Bearer (Access Token)
</code></pre>

<pre class="highlight shell"><code>
curl -X GET "https://tradeinreportingdemo.iqmetrix.net/v1/providers(10)/tradeData(357)" -H "Authorization: Bearer (Access Token)"</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse GetProviderDataForATrade()
{
    var client = new RestClient("https://tradeinreportingdemo.iqmetrix.net/v1/providers(10)/tradeData(357)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>


<pre class="highlight java"><code>

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GetProviderDataForATrade() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://tradeinreportingdemo.iqmetrix.net/v1/providers(10)/tradeData(357)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://tradeinreportingdemo.iqmetrix.net/v1/providers(10)/tradeData(357)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>ProviderId</code> (<strong>Required</strong>)  - The provider identifier given by iQmetrix
    </li>
    
    <li>
        <code>TradeDataId</code> (<strong>Required</strong>)  - The identifier for the Provider trade-In data
    </li>
    </ul>



<h4>Response Parameters</h4>


 <a href='#phobiotradeindata'>PhobioTradeInData</a>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "inspectedDate": "2016-03-16T12:00:00.000Z",
    "originalCustomerInspectionValue ": 310.5,
    "originalCustomerTradeInValue": 310.5,
    "paymentDate": "2016-03-16T12:00:00.000Z",
    "postInspectionValue": 310.5,
    "processedDate": "2016-03-17T12:00:00.000Z",
    "receivedDate": "2016-03-16T12:00:00.000Z",
    "receivedImei": "351756051523999",
    "receivedProductDisplayName": "Galaxy S6 edge+ 32GB - Black Sapphire",
    "referenceNumber": "29253392392",
    "serialNumber": "B7FQ-RANC",
    "shippedDate": "2016-03-13T12:00:00.000Z",
    "shipmentId": "123",
    "tradeInStatus": "Quoted"
}</pre>

# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Bad Request` | Ensure request body is formatted properly |
| `HTTP 403` | `Unauthorized` | Ensure Access Token is valid and user has appropriate security |
| `HTTP 404` | `Not Found` | Ensure ProviderId and/or TradeDataId are valid |
| `HTTP 429` | `Too Many Requests` | See [Rate Limiting](/api/#rate-limiting) |
| `HTTP 500` | `Unexpected Error` | Contact support |

