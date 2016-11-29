---
title: Customer Managed Inventory
permalink: /api/cmi/
tags: []
keywords: 
audience:
last_updated: 29-11-2016
summary:
rouge: false
---

{% include linkrefs.html %}

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


## Overview

{{important}}
The CMI API is a legacy SOAP API and uses different Authentication then other iQmetrix APIs
{{end}}

The Customer Managed Inventory (CMI) API can be used to:

* Create Purchase Orders
* Retrieve Purchase Orders (POs) created in RQ
* Create shipping notices for POs
* See a list of all CMI enabled stores in RQ

To learn more about CMI, see [CMI Guide](/guides/cmi).


## Endpoints

* Sandbox: <a href="https://vmidemo.iqmetrix.net/VMIClientService.asmx">https://vmidemo.iqmetrix.net/VMIClientService.asmx
* Production (Denver): <a href="https://vmi1.iqmetrix.net/VMIClientService.asmx">https://vmi1.iqmetrix.net/VMIClientService.asmx</a>
* Production (Toronto): <a href="https://vmi3.iqmetrix.net/VMIClientService.asmx">https://vmi3.iqmetrix.net/VMIClientService.asmx</a>
* Production (Philadelphia): <a href="https://vmi10.iqmetrix.net/VMIClientService.asmx">https://vmi10.iqmetrix.net/VMIClientService.asmx</a>

{{important}}
You should choose a production endpoint that is geographically closest to your data center 
{{end}}


## Resources



### ClientIdentity

Authentication for the CMI API is done by including a ClientIdentity resource in a `<client>` section at the beginning of each request.

ClientIdentitiy information is supplied by iQmetrix and used to authenticate requests made to the CMI API.
{{note}}ClientIdentity authentication information is <a href="{{'#environments' | prepend: site.api_baseurl}}">Environment</a> specific{{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ClientID | GUID | Client specific identifier supplied by iQmetrix | `9DC6AA95-856B-42C9-8AAF-392A2A02AC77` |
| Username | String | Client specific username supplied by iQmetrix | `sampleusername` |
| Password | String | Client specific password supplied by iQmetrix | `samplepassword` |
| StoreId | Integer | If provided, this value should be `-1`, which denotes all stores | `-1` |


### PurchaseOrderShipmentNotice

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| PurchaseOrderID | GUID | Unique identifier | `84DACFD3-4095-4D50-A02E-781B86B7408E` |
| ProductItemID | Integer | GlobalProductId from RQ | `11142` |
| Quantity | Integer | Number of items shipped | `1` |
| RQPurchaseOrderID | Integer | Identifier for the Purchase Order in RQ | `22073` |
| SerialNumbers | Array[string] | Serial numbers. Must match Quantity | `97000012` |
| ShipmentNumber | String | Vendor defined identifier for the shipment | `SHIP001` |
| VendorInvoiceNumber | String | Value supplied by the vendor when creating the purchase order | `1002` |
| VendorSKU | String | The vendor part number/sku | `ABC123` |






### PurchaseOrder

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| PurchaseOrderID | GUID | Unique identifier | `28890F70-8FC9-4A9B-9458-410A8D08502D` |
| PurchaseOrderData | <a href='/api/cmi/#purchaseorderdata'>PurchaseOrderData</a> | Purchase order |  |
| ProductsOrdered | Array[<a href='/api/cmi/#productinformation'>ProductInformation</a>] | Products ordered |  |
| ProductsReceived | Array[<a href='/api/cmi/#productinformation'>ProductInformation</a>] | Products received |  |
| SerialsReceived | Array[<a href='/api/cmi/#productserialnumber'>ProductSerialNumber</a>] | Serials received |  |




### PurchaseOrderData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| PurchaseOrderID | GUID | Unique identifier | `28890F70-8FC9-4A9B-9458-410A8D08502D` |
| BillToStoreID | Integer | RQ StoreId | `55` |
| BillToStoreName | String | RQ store name | `Cornwall west` |
| BillToVendorAccountNumber | String | Vendor account number to use for billing. Can be used in place of `BillToStoreId` | `1` |
| IsDeleted | Boolean | A flag to indicate if this purchase order has been deleted in RQ | `false` |
| CreatedByVMI | Boolean | A flag to indicate if this was created by the VMI API (true) or RQ (false) | `false` |
| CreatedDate | DateTime | The date and time the purchase order was created, if it was created in RQ | `3/16/2014 12:00:00 AM` |
| Comments | String | Any comments for the purchase order | `comments` |
| EstimatedArrivalDate | String | Estimated date of arrival | `3/2/2014 12:00:00 AM` |
| OrderTotal | Decimal | Cost of the order, provided by a vendor for informational purposes only | `99.99` |
| RetailiQPurchaseOrderID | Integer | Identifier of purchase order in RQ | `22075` |
| RetailiQPurchaseOrderNumber | String | Purchase order number in RQ | `DALEKPO5` |
| ShippingTotal | Decimal | Cost of shipping | `99.99` |
| ShipToStoreID | Integer | Identifier of store to use for shipping. Either this value or ShipToVendorAccountNumber must be supplied | `55` |
| ShipToStoreName | String | Name of store to use for shipping | `Cornwall west` |
| ShipToVendorAccountNumber | String | Vendor account number to use for shipping. Can be used in place of `ShipToStoreId` | `1` |
| VendorInvoiceNumber | String | Invoice number for the vendor, must be unique | `563783` |
| VendorName | String | Name of the vendor | `SampleVendor` |


### ProductInformation

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ProductID | GUID | Unique identifier | `86EE477F-C6B7-48FA-AA0A-105662D9A3ED` |
| ProductName | String | Name | `Samsung Galaxy S6` |
| CategoryPath | String | Category location of product. path of category delimited by '>>' | `Activation >> Dropship` |
| DateEOL | DateTime | End of life date | `1/01/2016 12:00:00 AM` |
| DateReceived | String | Product receiving stauts in RQ | `01/21/2016 16:58:23` |
| DoNotOrder | Boolean | A flag to indicate if the product should not be ordered | `false` |
| Enabled | Boolean | A flag to indicate if product is enabled | `true` |
| GrossQuantitySold | Integer | Gross amount sold | `-1` |
| GrossQuantityReturned | Integer | Gross amount returned | `-1` |
| MaximumLevel | Integer | Maximum number of Products that can be added to the PurchaseOrder | `100` |
| MinimumLevel | Integer | Minimum number of Products that can be added to the PurchaseOrder | `10` |
| MinMaxLocked | Boolean | A flag to indicate if the Min and Max values are locked (unchangeable) | `false` |
| ProductCost | Decimal | Required for PO creation or default from RQ will be used | `99.99` |
| ProductItemID | Integer | GlobalProductId from RQ | `11142` |
| ProductReceived | Boolean | A flag to indicate if product was received | `false` |
| ProductSKU | String | ProductIdentifier in RQ | `CECPSM000017` |
| QuantityCommittedOnOrderEntry | Integer | Amount committed on an order entry | `0` |
| QuantityInStock | Integer | Amount in stock | `8` |
| QuantityInTransfer | Integer | Amount in transfer | `3` |
| QuantityOnBackOrder | Integer | Amount on back order | `0` |
| QuantityOnLoan | Integer | Amount on loan | `5` |
| QuantityOnOrder | Integer | Amount on order | `6` |
| QuantityOnRMA | Integer | Amount on RMA | `9` |
| QuantityOnUncommittedOrder | Integer | Amount on uncommitted order | `2` |
| QuantityOrdered | Integer | Amount ordered | `4` |
| QuantityReceived | Integer | Amount received | `4` |
| QuantitySold | Integer | Amount sold | `30` |
| QuantitySuggestedByVendor | Integer | Amount suggested by vendor | `50` |
| RetailPrice | Decimal | Retail price | `99.99` |
| SaleBegin | DateTime | Sale begin date | `01/01/2014 12:00:00 AM` |
| SaleEnd | DateTime | Sale end date | `01/10/2014 12:00:00 AM` |
| SalePrice | Decimal | Sale price | `79.99` |
| VendorSKU | String | Vendor SKU | `SSGS5CB` |


### ProductSerialNumber

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ProductItemID | Integer | GlobalProductId from RQ | `11142` |
| DateReceived | DateTime | Date received | `3/11/2014 2:29:25 PM` |
| NonSellable | Boolean | A flag to indicate if the product is sellable (`false`) or nonsellable (`true`) in RQ | `true` |
| SerialNumber | String | Serial number | `132456456456111` |


### ReceivingInfo

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ProductItemID | Integer | GlobalProductId from RQ | `11142` |
| ProductName | String | Name | `Samsung Galaxy S6` |
| ShipToStoreID | Integer | Shipping store ID | `55` |
| ShipToStoreName | String | Name of store to use for shipping | `Cornwall west` |
| RQPurchaseOrderNumber | String | Purchase Order number from RQ | `CORNWPO3550` |
| VendorSKU | String | Vendor SKU | `ABC123` |
| Quantity | Integer | Number of items received | `1` |
| ProductCost | Decimal | Product cost | `99.99` |
| DateReceived | String | Date received | `3/11/2014 2:29:25 PM` |
| RQReceivingNumber | String | The receiving number from RQ | `CORNWRE6055` |
| SerialNumber | String | Serial number | `132456456456111` |


### StoreInformation

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| StoreID | Integer | Identifier | `36` |
| Name | String | Name | `Cornwall West` |
| Abbreviation | String | Abbrevation | `CWW` |
| Address | String | Address | `2102 11th Ave` |
| City | String | City | `Regina` |
| Country | String | Country | `Canada` |
| District | String | District | `Regina` |
| PhoneNumber | String | Phone Number | `5555555555` |
| PostalZipCode | String | Postal or Zip Code | `S2S 2S2` |
| ProvinceState | String | Province or State | `Saskatchewan` |
| Region | String | Region | `Regina` |
| ShipToStoreID | Integer | Shipping store ID | `55` |
| BillToStoreID | Integer | RQ StoreID | `55` |
























## Requests


<h3 id='creating-a-purchase-order-shipment-notice' class='clickable-header top-level-header'>Creating a Purchase Order Shipment Notice</h3>

This method allows the vendor to create a shipment notice for an existing purchase order. 

#### Notes

* The shipment notice will be used when receiving purchase order products with serial numbers
* Multiple shipment notices can be created for a single purchase order
* Each shipment notice is for a single product
* If more than one product appears in a shipment, create one shipment notice for each product, but use the same shipment number for all products in the same shipment

{{tip}}
This request accepts an array of PurchaseOrderShipmentNotices, so you do not need to call the CMI service multiple times for products in an order
{{end}}


#### Request

<pre>
POST /?op=CreatePurchaseOrderShipmentNotice
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>CreatePurchaseOrderShipmentNotice</code> (<strong>Required</strong>) </li><ul><li><code>client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) - Client specific identifier supplied by iQmetrix</li><li><code>Username</code> (<strong>Required</strong>) - Client specific username supplied by iQmetrix</li><li><code>Password</code> (<strong>Required</strong>) - Client specific password supplied by iQmetrix</li><li><code>StoreId</code> (<strong>Required</strong>) - If provided, this value should be -1, which denotes all stores</li></ul><li><code>notice</code> (<strong>Required</strong>) </li><ul><li><code>PurchaseOrderShipmentNotice</code> (<strong>Required</strong>) </li><ul><li><code>Quantity</code> (<strong>Required</strong>) - Number of items shipped</li><li><code>RQPurchaseOrderID</code> (<strong>Required</strong>) - Identifier for the Purchase Order in RQ</li><li><code>SerialNumbers</code> (<strong>Required</strong>) - Serial numbers. Must match Quantity</li><li><code>VendorInvoiceNumber</code> (<strong>Required</strong>) - Either this value OR PurchaseOrderID must be provided</li><li><code>PurchaseOrderID</code> (Optional) - Either this value or VendorInvoiceNumber must be provided</li><li><code>ProductItemID</code> (Optional) - Either this value or VendorSKU must be provided</li><li><code>ShipmentNumber</code> (Optional) - If this value is not provided, the service will automatically assign one</li><li><code>VendorSKU</code> (Optional) - Either this value or ProductItemId must be provided</li></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CreatePurchaseOrderShipmentNotice 
      xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <StoreId>-1</StoreId>
      </client>
      <notice>
        <PurchaseOrderShipmentNotice>
          <PurchaseOrderID>84DACFD3-4095-4D50-A02E-781B86B7408E</PurchaseOrderID>
          <ProductItemID>11142</ProductItemID>
          <Quantity>1</Quantity>
          <RQPurchaseOrderID>22073</RQPurchaseOrderID>
          <SerialNumbers>
            <string>97000012</string>
          </SerialNumbers>
          <ShipmentNumber>SHIP001</ShipmentNumber>
          <VendorInvoiceNumber>1002</VendorInvoiceNumber>
          <VendorSKU>ABC123</VendorSKU>
        </PurchaseOrderShipmentNotice>
      </notice>
    </CreatePurchaseOrderShipmentNotice>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";
client.StoreID = -1;

PurchaseOrderShipmentNotice shipmentNotice = new PurchaseOrderShipmentNotice();
shipmentNotice.PurchaseOrderID = new GUID(84DACFD3-4095-4D50-A02E-781B86B7408E);
shipmentNotice.ShipmentNumber = "SHIP001";
shipmentNotice.ProductItemID = 11142;
shipmentNotice.Quantity = 1;
shipmentNotice.SerialNumber = {"97000012"};
shipmentNotice.VendorSKU = "ABC123";
shipmentNotice.VendorInvoiceNumber = "1002";
shipmentNotice.RQPurchaseOrderID = "22073";

PurchaseOrderShipmentNotice snReturn = cmiService.CreatePurchaseOrderShipmentNotice(client, new[] { shipmentNotice });
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CreatePurchaseOrderShipmentNoticeResponse 
      xmlns="http://www.iqmetrix.com">
      <CreatePurchaseOrderShipmentNoticeResult>
        <PurchaseOrderShipmentNotice>
          <PurchaseOrderID>84DACFD3-4095-4D50-A02E-781B86B7408E</PurchaseOrderID>
          <ProductItemID>11142</ProductItemID>
          <Quantity>1</Quantity>
          <RQPurchaseOrderID>22073</RQPurchaseOrderID>
          <SerialNumbers>
            <string>97000012</string>
          </SerialNumbers>
          <ShipmentNumber>SHIP001</ShipmentNumber>
          <VendorInvoiceNumber>1002</VendorInvoiceNumber>
          <VendorSKU>ABC123</VendorSKU>
        </PurchaseOrderShipmentNotice>
      </CreatePurchaseOrderShipmentNoticeResult>
    </CreatePurchaseOrderShipmentNoticeResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='creating-a-purchase-order' class='clickable-header top-level-header'>Creating a Purchase Order</h3>

#### Notes

* Creating a Purchase Order allows RQ to properly account for products arriving at a store so that stock levels are updated correctly
* Each item must be unique
* To place multiple copies of an item on an order, adjust the quantity    


#### Request

<pre>
POST /?op=CreatePurchaseOrder
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>CreatePurchaseOrder</code> (<strong>Required</strong>) </li><ul><li><code>client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) - Client specific identifier supplied by iQmetrix</li><li><code>Username</code> (<strong>Required</strong>) - Client specific username supplied by iQmetrix</li><li><code>Password</code> (<strong>Required</strong>) - Client specific password supplied by iQmetrix</li><li><code>StoreId</code> (<strong>Required</strong>) - If provided, this value should be -1, which denotes all stores</li></ul><li><code>vendorId</code> (<strong>Required</strong>) - Vendor identifier</li><li><code>PurchaseOrder</code> (<strong>Required</strong>) </li><ul><li><code>PurchaseOrderID</code> (<strong>Required</strong>) </li><li><code>PurchaseOrderData</code> (<strong>Required</strong>) </li><ul><li><code>BillToStoreID</code> (<strong>Required</strong>) - Defaults to -1. Either this value or BillToVendorAccountNumber must be supplied</li><li><code>EstimatedArrivalDate</code> (<strong>Required</strong>) </li><li><code>ShipToStoreID</code> (<strong>Required</strong>) - Defaults to -1</li><li><code>VendorInvoiceNumber</code> (<strong>Required</strong>) </li><li><code>CreatedByVMI</code> (Optional) - defaults to false</li><li><code>CreatedDate</code> (Optional) </li><li><code>Comments</code> (Optional) </li><li><code>OrderTotal</code> (Optional) - Defaults to -1</li><li><code>ShippingTotal</code> (Optional) - Defaults to -1</li></ul><li><code>ProductsOrdered</code> (<strong>Required</strong>) </li><ul><li><code>ProductInformation</code> (<strong>Required</strong>) </li><ul><li><code>QuantityOrdered</code> (<strong>Required</strong>) </li><li><code>VendorSKU</code> (<strong>Required</strong>) </li><li><code>ProductID</code> (Optional) </li><li><code>ProductName</code> (Optional) </li><li><code>DateEOL</code> (Optional) </li><li><code>DateReceived</code> (Optional) </li><li><code>Enabled</code> (Optional) </li><li><code>MaximumLevel</code> (Optional) - defaults to -1</li><li><code>MinimumLevel</code> (Optional) - defaults to -1</li><li><code>ProductCost</code> (Optional) - defaults to -1</li><li><code>ProductItemID</code> (Optional) </li><li><code>ProductReceived</code> (Optional) </li><li><code>ProductSKU</code> (Optional) </li><li><code>QuantityCommittedOnOrderEntry</code> (Optional) - defaults to -1</li><li><code>QuantityInStock</code> (Optional) - defaults to -1</li><li><code>QuantityInTransfer</code> (Optional) - defaults to -1</li><li><code>QuantityOnBackOrder</code> (Optional) - defaults to -1</li><li><code>QuantityOnLoan</code> (Optional) - defaults to -1</li><li><code>QuantityOnOrder</code> (Optional) - defaults to -1</li><li><code>QuantityOnRMA</code> (Optional) - defaults to -1</li><li><code>QuantityReceived</code> (Optional) - defaults to -1</li><li><code>QuantitySold</code> (Optional) - defaults to -1</li></ul></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CreatePurchaseOrder 
      xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <StoreId>-1</StoreId>
      </client>
      <vendorId>f8c68dc5-7417-4e4d-b17c-42838660772a</vendorId>
      <PurchaseOrder>
        <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
        <PurchaseOrderData>
          <BillToStoreID>55</BillToStoreID>
          <CreatedByVMI>false</CreatedByVMI>
          <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
          <Comments>comments</Comments>
          <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
          <OrderTotal>99.99</OrderTotal>
          <ShippingTotal>99.99</ShippingTotal>
          <ShipToStoreID>55</ShipToStoreID>
          <VendorInvoiceNumber>563783</VendorInvoiceNumber>
        </PurchaseOrderData>
        <ProductsOrdered>
          <ProductInformation>
            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
            <ProductName>Samsung Galaxy S6</ProductName>
            <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
            <DateReceived>01/21/2016 16:58:23</DateReceived>
            <Enabled>true</Enabled>
            <MaximumLevel>100</MaximumLevel>
            <MinimumLevel>10</MinimumLevel>
            <ProductCost>99.99</ProductCost>
            <ProductItemID>11142</ProductItemID>
            <ProductReceived>false</ProductReceived>
            <ProductSKU>CECPSM000017</ProductSKU>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantityInStock>8</QuantityInStock>
            <QuantityInTransfer>3</QuantityInTransfer>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityOnLoan>5</QuantityOnLoan>
            <QuantityOnOrder>6</QuantityOnOrder>
            <QuantityOnRMA>9</QuantityOnRMA>
            <QuantityOrdered>4</QuantityOrdered>
            <QuantityReceived>4</QuantityReceived>
            <QuantitySold>30</QuantitySold>
            <VendorSKU>SSGS5CB</VendorSKU>
          </ProductInformation>
        </ProductsOrdered>
      </PurchaseOrder>
    </CreatePurchaseOrder>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";
client.StoreID = -1;

DateTime ead1 = DateTime.Today.AddDays(14);
string eta = String.Format("{0:D2}/{1:D2}/{2:D4}", ead1.Month, ead1.Day, ead1.Year);
PurchaseOrder po = new PurchaseOrder();
po.PurchaseOrderID = new Guid();
po.PurchaseOrderData = new PurchaseOrderData();
po.PurchaseOrderData.BillToStoreID = stores[0].StoreID;
po.PurchaseOrderData.Comments = "Vendor Invoice Number #: BDP123";
po.PurchaseOrderData.ShipToStoreID = stores[0].StoreID;
po.PurchaseOrderData.VendorInvoiceNumber = "BDP123";
po.PurchaseOrderData.EstimatedArrivalDate = eta;

po.ProductsOrdered = new ProductInformation[1];
po.ProductsOrdered[0] = new ProductInformation();
po.ProductsOrdered[0].ProductItemID = productID;
po.ProductsOrdered[0].ProductName = "Samsung Galaxy S5 - Charcoal Black";
po.ProductsOrdered[0].ProductSKU = "SSSATM000002";
po.ProductsOrdered[0].VendorSKU = "SSGS5CB";
po.ProductsOrdered[0].QuantityOrdered = 1;
po.ProductsOrdered[0].ProductCost = 130.00;

PurchaseOrder poCreated = cmiService.CreatePurchaseOrder(vendor, po);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CreatePurchaseOrderResponse 
      xmlns="http://www.iqmetrix.com">
      <CreatePurchaseOrderResult>
        <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
        <PurchaseOrderData>
          <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
          <BillToStoreID>55</BillToStoreID>
          <BillToStoreName>Cornwall west</BillToStoreName>
          <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
          <IsDeleted>false</IsDeleted>
          <CreatedByVMI>false</CreatedByVMI>
          <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
          <Comments>comments</Comments>
          <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
          <OrderTotal>99.99</OrderTotal>
          <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
          <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
          <ShippingTotal>99.99</ShippingTotal>
          <ShipToStoreID>55</ShipToStoreID>
          <ShipToStoreName>Cornwall west</ShipToStoreName>
          <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
          <VendorInvoiceNumber>563783</VendorInvoiceNumber>
          <VendorName>SampleVendor</VendorName>
        </PurchaseOrderData>
        <ProductsOrdered>
          <ProductInformation>
            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
            <ProductName>Samsung Galaxy S6</ProductName>
            <CategoryPath>Activation >> Dropship</CategoryPath>
            <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
            <DateReceived>01/21/2016 16:58:23</DateReceived>
            <DoNotOrder>false</DoNotOrder>
            <Enabled>true</Enabled>
            <GrossQuantitySold>-1</GrossQuantitySold>
            <GrossQuantityReturned>-1</GrossQuantityReturned>
            <MaximumLevel>100</MaximumLevel>
            <MinimumLevel>10</MinimumLevel>
            <MinMaxLocked>false</MinMaxLocked>
            <ProductCost>99.99</ProductCost>
            <ProductItemID>11142</ProductItemID>
            <ProductReceived>false</ProductReceived>
            <ProductSKU>CECPSM000017</ProductSKU>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantityInStock>8</QuantityInStock>
            <QuantityInTransfer>3</QuantityInTransfer>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityOnLoan>5</QuantityOnLoan>
            <QuantityOnOrder>6</QuantityOnOrder>
            <QuantityOnRMA>9</QuantityOnRMA>
            <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
            <QuantityOrdered>4</QuantityOrdered>
            <QuantityReceived>4</QuantityReceived>
            <QuantitySold>30</QuantitySold>
            <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
            <RetailPrice>99.99</RetailPrice>
            <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
            <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
            <SalePrice>79.99</SalePrice>
            <VendorSKU>SSGS5CB</VendorSKU>
          </ProductInformation>
        </ProductsOrdered>
      </CreatePurchaseOrderResult>
    </CreatePurchaseOrderResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='creating-an-uncommitted-purchase-order' class='clickable-header top-level-header'>Creating an Uncommitted Purchase Order</h3>



#### Request

<pre>
POST /?op=CreateUncommittedPurchaseOrder
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>CreateUncommittedPurchaseOrder</code> (<strong>Required</strong>) </li><ul><li><code>client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) - Client specific identifier supplied by iQmetrix</li><li><code>Username</code> (<strong>Required</strong>) - Client specific username supplied by iQmetrix</li><li><code>Password</code> (<strong>Required</strong>) - Client specific password supplied by iQmetrix</li><li><code>StoreId</code> (<strong>Required</strong>) - If provided, this value should be -1, which denotes all stores</li></ul><li><code>vendorId</code> (<strong>Required</strong>) - Vendor identifier</li><li><code>purchaseOrder</code> (Optional) </li><ul><li><code>PurchaseOrderID</code> (<strong>Required</strong>) </li><li><code>PurchaseOrderData</code> (<strong>Required</strong>) </li><ul><li><code>BillToStoreID</code> (<strong>Required</strong>) - Defaults to -1. Either this value or BillToVendorAccountNumber must be supplied</li><li><code>EstimatedArrivalDate</code> (<strong>Required</strong>) </li><li><code>ShipToStoreID</code> (<strong>Required</strong>) - Defaults to -1</li><li><code>VendorInvoiceNumber</code> (<strong>Required</strong>) </li><li><code>CreatedByVMI</code> (Optional) - defaults to false</li><li><code>CreatedDate</code> (Optional) </li><li><code>Comments</code> (Optional) </li><li><code>OrderTotal</code> (Optional) - Defaults to -1</li><li><code>ShippingTotal</code> (Optional) - Defaults to -1</li></ul><li><code>ProductsOrdered</code> (<strong>Required</strong>) </li><ul><li><code>ProductInformation</code> (<strong>Required</strong>) </li><ul><li><code>QuantityOrdered</code> (<strong>Required</strong>) </li><li><code>VendorSKU</code> (<strong>Required</strong>) </li><li><code>ProductID</code> (Optional) </li><li><code>ProductName</code> (Optional) </li><li><code>DateEOL</code> (Optional) </li><li><code>DateReceived</code> (Optional) </li><li><code>Enabled</code> (Optional) </li><li><code>MaximumLevel</code> (Optional) - defaults to -1</li><li><code>MinimumLevel</code> (Optional) - defaults to -1</li><li><code>ProductCost</code> (Optional) - defaults to -1</li><li><code>ProductItemID</code> (Optional) </li><li><code>ProductReceived</code> (Optional) </li><li><code>ProductSKU</code> (Optional) </li><li><code>QuantityCommittedOnOrderEntry</code> (Optional) - defaults to -1</li><li><code>QuantityInStock</code> (Optional) - defaults to -1</li><li><code>QuantityInTransfer</code> (Optional) - defaults to -1</li><li><code>QuantityOnBackOrder</code> (Optional) - defaults to -1</li><li><code>QuantityOnLoan</code> (Optional) - defaults to -1</li><li><code>QuantityOnOrder</code> (Optional) - defaults to -1</li><li><code>QuantityOnRMA</code> (Optional) - defaults to -1</li><li><code>QuantityReceived</code> (Optional) - defaults to -1</li><li><code>QuantitySold</code> (Optional) - defaults to -1</li></ul></ul></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CreateUncommittedPurchaseOrder 
      xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <StoreId>-1</StoreId>
      </client>
      <vendorId>f8c68dc5-7417-4e4d-b17c-42838660772a</vendorId>
      <purchaseOrder>
        <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
        <PurchaseOrderData>
          <BillToStoreID>55</BillToStoreID>
          <CreatedByVMI>false</CreatedByVMI>
          <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
          <Comments>comments</Comments>
          <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
          <OrderTotal>99.99</OrderTotal>
          <ShippingTotal>99.99</ShippingTotal>
          <ShipToStoreID>55</ShipToStoreID>
          <VendorInvoiceNumber>563783</VendorInvoiceNumber>
        </PurchaseOrderData>
        <ProductsOrdered>
          <ProductInformation>
            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
            <ProductName>Samsung Galaxy S6</ProductName>
            <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
            <DateReceived>01/21/2016 16:58:23</DateReceived>
            <Enabled>true</Enabled>
            <MaximumLevel>100</MaximumLevel>
            <MinimumLevel>10</MinimumLevel>
            <ProductCost>99.99</ProductCost>
            <ProductItemID>11142</ProductItemID>
            <ProductReceived>false</ProductReceived>
            <ProductSKU>CECPSM000017</ProductSKU>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantityInStock>8</QuantityInStock>
            <QuantityInTransfer>3</QuantityInTransfer>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityOnLoan>5</QuantityOnLoan>
            <QuantityOnOrder>6</QuantityOnOrder>
            <QuantityOnRMA>9</QuantityOnRMA>
            <QuantityOrdered>4</QuantityOrdered>
            <QuantityReceived>4</QuantityReceived>
            <QuantitySold>30</QuantitySold>
            <VendorSKU>SSGS5CB</VendorSKU>
          </ProductInformation>
        </ProductsOrdered>
      </purchaseOrder>
    </CreateUncommittedPurchaseOrder>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";
client.StoreID = -1;

DateTime ead1 = DateTime.Today.AddDays(14);
string eta = String.Format("{0:D2}/{1:D2}/{2:D4}", ead1.Month, ead1.Day, ead1.Year);
PurchaseOrder po = new PurchaseOrder();
po.PurchaseOrderID = new Guid();
po.PurchaseOrderData = new PurchaseOrderData();
po.PurchaseOrderData.BillToStoreID = stores[0].StoreID;
po.PurchaseOrderData.Comments = "Vendor Invoice Number #: BDP123";
po.PurchaseOrderData.ShipToStoreID = stores[0].StoreID;
po.PurchaseOrderData.VendorInvoiceNumber = "BDP123";
po.PurchaseOrderData.EstimatedArrivalDate = eta;

po.ProductsOrdered = new ProductInformation[1];
po.ProductsOrdered[0] = new ProductInformation();
po.ProductsOrdered[0].ProductItemID = productID;
po.ProductsOrdered[0].ProductName = "Samsung Galaxy S5 - Charcoal Black";
po.ProductsOrdered[0].ProductSKU = "SSSATM000002";
po.ProductsOrdered[0].VendorSKU = "SSGS5CB";
po.ProductsOrdered[0].QuantityOrdered = 1;
po.ProductsOrdered[0].ProductCost = 130.00;

PurchaseOrder poCreated = cmiService.CreateUncommittedPurchaseOrder(vendor, po);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CreateUncommittedPurchaseOrderResponse 
      xmlns="http://www.iqmetrix.com">
      <CreateUncommittedPurchaseOrderResult>
        <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
        <PurchaseOrderData>
          <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
          <BillToStoreID>55</BillToStoreID>
          <BillToStoreName>Cornwall west</BillToStoreName>
          <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
          <IsDeleted>false</IsDeleted>
          <CreatedByVMI>false</CreatedByVMI>
          <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
          <Comments>comments</Comments>
          <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
          <OrderTotal>99.99</OrderTotal>
          <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
          <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
          <ShippingTotal>99.99</ShippingTotal>
          <ShipToStoreID>55</ShipToStoreID>
          <ShipToStoreName>Cornwall west</ShipToStoreName>
          <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
          <VendorInvoiceNumber>563783</VendorInvoiceNumber>
          <VendorName>SampleVendor</VendorName>
        </PurchaseOrderData>
        <ProductsOrdered>
          <ProductInformation>
            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
            <ProductName>Samsung Galaxy S6</ProductName>
            <CategoryPath>Activation >> Dropship</CategoryPath>
            <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
            <DateReceived>01/21/2016 16:58:23</DateReceived>
            <DoNotOrder>false</DoNotOrder>
            <Enabled>true</Enabled>
            <GrossQuantitySold>-1</GrossQuantitySold>
            <GrossQuantityReturned>-1</GrossQuantityReturned>
            <MaximumLevel>100</MaximumLevel>
            <MinimumLevel>10</MinimumLevel>
            <MinMaxLocked>false</MinMaxLocked>
            <ProductCost>99.99</ProductCost>
            <ProductItemID>11142</ProductItemID>
            <ProductReceived>false</ProductReceived>
            <ProductSKU>CECPSM000017</ProductSKU>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantityInStock>8</QuantityInStock>
            <QuantityInTransfer>3</QuantityInTransfer>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityOnLoan>5</QuantityOnLoan>
            <QuantityOnOrder>6</QuantityOnOrder>
            <QuantityOnRMA>9</QuantityOnRMA>
            <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
            <QuantityOrdered>4</QuantityOrdered>
            <QuantityReceived>4</QuantityReceived>
            <QuantitySold>30</QuantitySold>
            <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
            <RetailPrice>99.99</RetailPrice>
            <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
            <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
            <SalePrice>79.99</SalePrice>
            <VendorSKU>SSGS5CB</VendorSKU>
          </ProductInformation>
        </ProductsOrdered>
      </CreateUncommittedPurchaseOrderResult>
    </CreateUncommittedPurchaseOrderResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='updating-comments-for-a-purchase-order' class='clickable-header top-level-header'>Updating Comments for a Purchase Order</h3>



#### Request

<pre>
POST /?op=UpdatePurchaseOrderComments
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>UpdatePurchaseOrderComments</code> (<strong>Required</strong>) </li><ul><li><code>client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) - Client specific identifier supplied by iQmetrix</li><li><code>Username</code> (<strong>Required</strong>) - Client specific username supplied by iQmetrix</li><li><code>Password</code> (<strong>Required</strong>) - Client specific password supplied by iQmetrix</li><li><code>StoreId</code> (<strong>Required</strong>) - If provided, this value should be -1, which denotes all stores</li></ul><li><code>purchaseOrderID</code> (Optional) - Identifier of a PO, either this value, referenceNumber or retailiQPurchaseOrderID must be provided</li><li><code>retailiQPurchaseOrderID</code> (Optional) - Identifier of purchase order in RQ, either this value, referenceNumber or purchaseOrderID must be provided. If the PO was created from RQ, this value is required</li><li><code>referenceNumber</code> (Optional) - Identifier of vendor purchase order in RQ, either this value, retailiQPurchaseOrderID or purchaseOrderID must be provided</li><li><code>comments</code> (Optional) </li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <UpdatePurchaseOrderComments 
      xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <StoreId>-1</StoreId>
      </client>
      <retailiQPurchaseOrderID>22075</retailiQPurchaseOrderID>
      <comments>Complete</comments>
    </UpdatePurchaseOrderComments>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";

//(ClientIdentity client, Guid? purchaseOrderID, int? retailiQPurchaseOrderID, string referenceNumber, string comments)
     
//UpdatePurchaseOrderComments is a void call
cmiService.UpdatePurchaseOrderComments(client, null, poId, null, comments);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <UpdatePurchaseOrderCommentsResponse xmlns="http://www.iqmetrix.com" />
  </soap:Body>
</soap:Envelope>    
</script></code></pre>



<h3 id='updating-the-location-for-a-purchase-order' class='clickable-header top-level-header'>Updating the Location for a Purchase Order</h3>



#### Request

<pre>
POST /?op=UpdateSalesAndPurchaseOrderLocation
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>UpdateSalesAndPurchaseOrderLocation</code> (<strong>Required</strong>) </li><ul><li><code>client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) - Client specific identifier supplied by iQmetrix</li><li><code>Username</code> (<strong>Required</strong>) - Client specific username supplied by iQmetrix</li><li><code>Password</code> (<strong>Required</strong>) - Client specific password supplied by iQmetrix</li><li><code>StoreId</code> (<strong>Required</strong>) - If provided, this value should be -1, which denotes all stores</li></ul><li><code>shipToStoreId</code> (<strong>Required</strong>) - Identifier for a store in RQ</li><li><code>purchaseOrderID</code> (Optional) - Identifier of a PO, either this value, referenceNumber or retailiQPurchaseOrderID must be provided</li><li><code>retailiQPurchaseOrderID</code> (Optional) - Identifier of purchase order in RQ, either this value, referenceNumber or purchaseOrderID must be provided. If the PO was created from RQ, this value is required</li><li><code>referenceNumber</code> (Optional) - Identifier of vendor purchase order in RQ, either this value, retailiQPurchaseOrderID or purchaseOrderID must be provided</li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <UpdateSalesAndPurchaseOrderLocation 
      xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <StoreId>-1</StoreId>
      </client>
      <retailiQPurchaseOrderID>22075</retailiQPurchaseOrderID>
      <shipToStoreId>4</shipToStoreId>
    </UpdateSalesAndPurchaseOrderLocation>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";

//(ClientIdentity client, Guid? purchaseOrderID, int? retailiQPurchaseOrderID, string referenceNumber, int shipToStoreId)
      
//UpdateSalesAndPurchaseOrderLocation is a void call
cmiService.UpdateSalesAndPurchaseOrderLocation(client, null, poId, null, storeId);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <UpdateSalesAndPurchaseOrderLocationResponse xmlns="http://www.iqmetrix.com">
      <UpdateSalesAndPurchaseOrderLocationResult>true</UpdateSalesAndPurchaseOrderLocationResult>
    </UpdateSalesAndPurchaseOrderLocationResponse>
  </soap:Body>
</soap:Envelope>
</script></code></pre>



<h3 id='getting-purchase-orders-by-status' class='clickable-header top-level-header'>Getting Purchase Orders By Status</h3>

This method will return all purchase orders in the client database that match the provided status criteria, including those that were not created through the CMI API.  

Therefore, if a dealer creates a Purchase Order within RQ, it will be available in this list.


#### Request

<pre>
POST /?op=GetPurchaseOrdersByStatus
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetPurchaseOrdersByStatus</code> (<strong>Required</strong>) </li><ul><li><code>client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) - Client specific identifier supplied by iQmetrix</li><li><code>Username</code> (<strong>Required</strong>) - Client specific username supplied by iQmetrix</li><li><code>Password</code> (<strong>Required</strong>) - Client specific password supplied by iQmetrix</li><li><code>StoreId</code> (<strong>Required</strong>) - If provided, this value should be -1, which denotes all stores</li></ul><li><code>isCommitted</code> (<strong>Required</strong>) - Flag to indicate if committed or uncommitted purchase orders should be searched for</li><li><code>isCompleted</code> (<strong>Required</strong>) - Flag to indicate if complete or incomplete purchase orders should be searched for</li><li><code>startDate</code> (<strong>Required</strong>) - timestamp defaults to 12:00:00 AM, if not specified</li><li><code>endDate</code> (<strong>Required</strong>) - timestamp defaults to 12:00:00 AM, if not specified</li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetPurchaseOrdersByStatus 
      xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <StoreId>-1</StoreId>
      </client>
      <isCommitted>true</isCommitted>
      <isCompleted>true</isCompleted>
      <startDate>2015-01-01T12:00:00.000</startDate>
      <endDate>2015-01-30T12:00:00.000</endDate>
    </GetPurchaseOrdersByStatus>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";

boolean isCommitted = true;
boolean isCompleted = true;

DateTime startDate = new DateTime("2015-01-01T12:00:00.000");
DateTime endDate = new DateTime("2015-01-30T12:00:00.000");

PurchaseOrderInformation[] pos = cmiService.GetPurchaseOrderByStatus(client, isCommitted, isCompleted, startDate, endDate)    
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetPurchaseOrdersByStatusResponse 
      xmlns="http://www.iqmetrix.com">
      <GetPurchaseOrdersByStatusResult>
        <PurchaseOrderInformation>
          <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
          <PurchaseOrderData>
            <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
            <BillToStoreID>55</BillToStoreID>
            <BillToStoreName>Cornwall west</BillToStoreName>
            <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
            <IsDeleted>false</IsDeleted>
            <CreatedByVMI>false</CreatedByVMI>
            <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
            <Comments>comments</Comments>
            <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
            <OrderTotal>99.99</OrderTotal>
            <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
            <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
            <ShippingTotal>99.99</ShippingTotal>
            <ShipToStoreID>55</ShipToStoreID>
            <ShipToStoreName>Cornwall west</ShipToStoreName>
            <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
            <VendorInvoiceNumber>563783</VendorInvoiceNumber>
            <VendorName>SampleVendor</VendorName>
          </PurchaseOrderData>
          <ProductsOrdered>
            <ProductInformation>
              <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
              <ProductName>Samsung Galaxy S6</ProductName>
              <CategoryPath>Activation >> Dropship</CategoryPath>
              <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
              <DateReceived>01/21/2016 16:58:23</DateReceived>
              <DoNotOrder>false</DoNotOrder>
              <Enabled>true</Enabled>
              <GrossQuantitySold>-1</GrossQuantitySold>
              <GrossQuantityReturned>-1</GrossQuantityReturned>
              <MaximumLevel>100</MaximumLevel>
              <MinimumLevel>10</MinimumLevel>
              <MinMaxLocked>false</MinMaxLocked>
              <ProductCost>99.99</ProductCost>
              <ProductItemID>11142</ProductItemID>
              <ProductReceived>false</ProductReceived>
              <ProductSKU>CECPSM000017</ProductSKU>
              <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
              <QuantityInStock>8</QuantityInStock>
              <QuantityInTransfer>3</QuantityInTransfer>
              <QuantityOnBackOrder>0</QuantityOnBackOrder>
              <QuantityOnLoan>5</QuantityOnLoan>
              <QuantityOnOrder>6</QuantityOnOrder>
              <QuantityOnRMA>9</QuantityOnRMA>
              <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
              <QuantityOrdered>4</QuantityOrdered>
              <QuantityReceived>4</QuantityReceived>
              <QuantitySold>30</QuantitySold>
              <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
              <RetailPrice>99.99</RetailPrice>
              <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
              <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
              <SalePrice>79.99</SalePrice>
              <VendorSKU>SSGS5CB</VendorSKU>
            </ProductInformation>
          </ProductsOrdered>
          <ProductsReceived>
            <ProductInformation>
              <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
              <ProductName>Samsung Galaxy S6</ProductName>
              <CategoryPath>Activation >> Dropship</CategoryPath>
              <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
              <DateReceived>01/21/2016 16:58:23</DateReceived>
              <DoNotOrder>false</DoNotOrder>
              <Enabled>true</Enabled>
              <GrossQuantitySold>-1</GrossQuantitySold>
              <GrossQuantityReturned>-1</GrossQuantityReturned>
              <MaximumLevel>100</MaximumLevel>
              <MinimumLevel>10</MinimumLevel>
              <MinMaxLocked>false</MinMaxLocked>
              <ProductCost>99.99</ProductCost>
              <ProductItemID>11142</ProductItemID>
              <ProductReceived>false</ProductReceived>
              <ProductSKU>CECPSM000017</ProductSKU>
              <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
              <QuantityInStock>8</QuantityInStock>
              <QuantityInTransfer>3</QuantityInTransfer>
              <QuantityOnBackOrder>0</QuantityOnBackOrder>
              <QuantityOnLoan>5</QuantityOnLoan>
              <QuantityOnOrder>6</QuantityOnOrder>
              <QuantityOnRMA>9</QuantityOnRMA>
              <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
              <QuantityOrdered>4</QuantityOrdered>
              <QuantityReceived>4</QuantityReceived>
              <QuantitySold>30</QuantitySold>
              <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
              <RetailPrice>99.99</RetailPrice>
              <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
              <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
              <SalePrice>79.99</SalePrice>
              <VendorSKU>SSGS5CB</VendorSKU>
            </ProductInformation>
          </ProductsReceived>
          <SerialsReceived>
            <ProductSerialNumber>
              <ProductItemID>11142</ProductItemID>
              <DateReceived>3/11/2014 2:29:25 PM</DateReceived>
              <NonSellable>true</NonSellable>
              <SerialNumber>132456456456111</SerialNumber>
            </ProductSerialNumber>
          </SerialsReceived>
        </PurchaseOrderInformation>
      </GetPurchaseOrdersByStatusResult>
    </GetPurchaseOrdersByStatusResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-purchase-orders-by-reference-number' class='clickable-header top-level-header'>Getting Purchase Orders by Reference Number</h3>



#### Request

<pre>
POST /?op=GetPurchaseOrderByReferenceNumber
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetPurchaseOrderByReferenceNumber</code> (<strong>Required</strong>) </li><ul><li><code>client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) - Client specific identifier supplied by iQmetrix</li><li><code>Username</code> (<strong>Required</strong>) - Client specific username supplied by iQmetrix</li><li><code>Password</code> (<strong>Required</strong>) - Client specific password supplied by iQmetrix</li><li><code>StoreId</code> (<strong>Required</strong>) - If provided, this value should be -1, which denotes all stores</li></ul><li><code>purchaseOrderReferenceNumber</code> (Optional) - Reference Number on the Purchase Order in RQ</li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetPurchaseOrderByReferenceNumber 
      xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <StoreId>-1</StoreId>
      </client>
      <purchaseOrderReferenceNumber>77123</purchaseOrderReferenceNumber>
    </GetPurchaseOrderByReferenceNumber>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script></script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetPurchaseOrderByReferenceNumberResponse 
      xmlns="http://www.iqmetrix.com">
      <GetPurchaseOrderByReferenceNumberResult>
        <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
        <PurchaseOrderData>
          <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
          <BillToStoreID>55</BillToStoreID>
          <BillToStoreName>Cornwall west</BillToStoreName>
          <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
          <IsDeleted>false</IsDeleted>
          <CreatedByVMI>false</CreatedByVMI>
          <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
          <Comments>comments</Comments>
          <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
          <OrderTotal>99.99</OrderTotal>
          <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
          <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
          <ShippingTotal>99.99</ShippingTotal>
          <ShipToStoreID>55</ShipToStoreID>
          <ShipToStoreName>Cornwall west</ShipToStoreName>
          <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
          <VendorInvoiceNumber>563783</VendorInvoiceNumber>
          <VendorName>SampleVendor</VendorName>
        </PurchaseOrderData>
        <ProductsOrdered>
          <ProductInformation>
            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
            <ProductName>Samsung Galaxy S6</ProductName>
            <CategoryPath>Activation >> Dropship</CategoryPath>
            <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
            <DateReceived>01/21/2016 16:58:23</DateReceived>
            <DoNotOrder>false</DoNotOrder>
            <Enabled>true</Enabled>
            <GrossQuantitySold>-1</GrossQuantitySold>
            <GrossQuantityReturned>-1</GrossQuantityReturned>
            <MaximumLevel>100</MaximumLevel>
            <MinimumLevel>10</MinimumLevel>
            <MinMaxLocked>false</MinMaxLocked>
            <ProductCost>99.99</ProductCost>
            <ProductItemID>11142</ProductItemID>
            <ProductReceived>false</ProductReceived>
            <ProductSKU>CECPSM000017</ProductSKU>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantityInStock>8</QuantityInStock>
            <QuantityInTransfer>3</QuantityInTransfer>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityOnLoan>5</QuantityOnLoan>
            <QuantityOnOrder>6</QuantityOnOrder>
            <QuantityOnRMA>9</QuantityOnRMA>
            <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
            <QuantityOrdered>4</QuantityOrdered>
            <QuantityReceived>4</QuantityReceived>
            <QuantitySold>30</QuantitySold>
            <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
            <RetailPrice>99.99</RetailPrice>
            <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
            <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
            <SalePrice>79.99</SalePrice>
            <VendorSKU>SSGS5CB</VendorSKU>
          </ProductInformation>
        </ProductsOrdered>
        <ProductsReceived>
          <ProductInformation>
            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
            <ProductName>Samsung Galaxy S6</ProductName>
            <CategoryPath>Activation >> Dropship</CategoryPath>
            <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
            <DateReceived>01/21/2016 16:58:23</DateReceived>
            <DoNotOrder>false</DoNotOrder>
            <Enabled>true</Enabled>
            <GrossQuantitySold>-1</GrossQuantitySold>
            <GrossQuantityReturned>-1</GrossQuantityReturned>
            <MaximumLevel>100</MaximumLevel>
            <MinimumLevel>10</MinimumLevel>
            <MinMaxLocked>false</MinMaxLocked>
            <ProductCost>99.99</ProductCost>
            <ProductItemID>11142</ProductItemID>
            <ProductReceived>false</ProductReceived>
            <ProductSKU>CECPSM000017</ProductSKU>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantityInStock>8</QuantityInStock>
            <QuantityInTransfer>3</QuantityInTransfer>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityOnLoan>5</QuantityOnLoan>
            <QuantityOnOrder>6</QuantityOnOrder>
            <QuantityOnRMA>9</QuantityOnRMA>
            <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
            <QuantityOrdered>4</QuantityOrdered>
            <QuantityReceived>4</QuantityReceived>
            <QuantitySold>30</QuantitySold>
            <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
            <RetailPrice>99.99</RetailPrice>
            <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
            <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
            <SalePrice>79.99</SalePrice>
            <VendorSKU>SSGS5CB</VendorSKU>
          </ProductInformation>
        </ProductsReceived>
        <SerialsReceived>
          <ProductSerialNumber>
            <ProductItemID>11142</ProductItemID>
            <DateReceived>3/11/2014 2:29:25 PM</DateReceived>
            <NonSellable>true</NonSellable>
            <SerialNumber>132456456456111</SerialNumber>
          </ProductSerialNumber>
        </SerialsReceived>
      </GetPurchaseOrderByReferenceNumberResult>
    </GetPurchaseOrderByReferenceNumberResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-client-purchase-orders-by-business-key' class='clickable-header top-level-header'>Getting Client Purchase Orders by Business Key</h3>

This method allows you find a purchase order based on the RQ business key, the visual ID by store seen on RQ printouts.


#### Request

<pre>
POST /?op=GetPurchaseOrderByBusinessID
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetPurchaseOrderByBusinessID</code> (<strong>Required</strong>) </li><ul><li><code>client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) - Client specific identifier supplied by iQmetrix</li><li><code>Username</code> (<strong>Required</strong>) - Client specific username supplied by iQmetrix</li><li><code>Password</code> (<strong>Required</strong>) - Client specific password supplied by iQmetrix</li><li><code>StoreId</code> (<strong>Required</strong>) - If provided, this value should be -1, which denotes all stores</li></ul><li><code>purchaseOrderIdByStore</code> (<strong>Required</strong>) - The business key of the purchase order in RQ</li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetPurchaseOrderByBusinessID 
      xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <StoreId>-1</StoreId>
      </client>
      <purchaseOrderIdByStore>123</purchaseOrderIdByStore>
    </GetPurchaseOrderByBusinessID>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script></script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetPurchaseOrderByBusinessIDResponse 
      xmlns="http://www.iqmetrix.com">
      <GetPurchaseOrderByBusinessIDResult>
        <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
        <PurchaseOrderData>
          <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
          <BillToStoreID>55</BillToStoreID>
          <BillToStoreName>Cornwall west</BillToStoreName>
          <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
          <IsDeleted>false</IsDeleted>
          <CreatedByVMI>false</CreatedByVMI>
          <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
          <Comments>comments</Comments>
          <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
          <OrderTotal>99.99</OrderTotal>
          <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
          <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
          <ShippingTotal>99.99</ShippingTotal>
          <ShipToStoreID>55</ShipToStoreID>
          <ShipToStoreName>Cornwall west</ShipToStoreName>
          <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
          <VendorInvoiceNumber>563783</VendorInvoiceNumber>
          <VendorName>SampleVendor</VendorName>
        </PurchaseOrderData>
        <ProductsOrdered>
          <ProductInformation>
            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
            <ProductName>Samsung Galaxy S6</ProductName>
            <CategoryPath>Activation >> Dropship</CategoryPath>
            <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
            <DateReceived>01/21/2016 16:58:23</DateReceived>
            <DoNotOrder>false</DoNotOrder>
            <Enabled>true</Enabled>
            <GrossQuantitySold>-1</GrossQuantitySold>
            <GrossQuantityReturned>-1</GrossQuantityReturned>
            <MaximumLevel>100</MaximumLevel>
            <MinimumLevel>10</MinimumLevel>
            <MinMaxLocked>false</MinMaxLocked>
            <ProductCost>99.99</ProductCost>
            <ProductItemID>11142</ProductItemID>
            <ProductReceived>false</ProductReceived>
            <ProductSKU>CECPSM000017</ProductSKU>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantityInStock>8</QuantityInStock>
            <QuantityInTransfer>3</QuantityInTransfer>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityOnLoan>5</QuantityOnLoan>
            <QuantityOnOrder>6</QuantityOnOrder>
            <QuantityOnRMA>9</QuantityOnRMA>
            <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
            <QuantityOrdered>4</QuantityOrdered>
            <QuantityReceived>4</QuantityReceived>
            <QuantitySold>30</QuantitySold>
            <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
            <RetailPrice>99.99</RetailPrice>
            <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
            <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
            <SalePrice>79.99</SalePrice>
            <VendorSKU>SSGS5CB</VendorSKU>
          </ProductInformation>
        </ProductsOrdered>
        <ProductsReceived>
          <ProductInformation>
            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
            <ProductName>Samsung Galaxy S6</ProductName>
            <CategoryPath>Activation >> Dropship</CategoryPath>
            <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
            <DateReceived>01/21/2016 16:58:23</DateReceived>
            <DoNotOrder>false</DoNotOrder>
            <Enabled>true</Enabled>
            <GrossQuantitySold>-1</GrossQuantitySold>
            <GrossQuantityReturned>-1</GrossQuantityReturned>
            <MaximumLevel>100</MaximumLevel>
            <MinimumLevel>10</MinimumLevel>
            <MinMaxLocked>false</MinMaxLocked>
            <ProductCost>99.99</ProductCost>
            <ProductItemID>11142</ProductItemID>
            <ProductReceived>false</ProductReceived>
            <ProductSKU>CECPSM000017</ProductSKU>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantityInStock>8</QuantityInStock>
            <QuantityInTransfer>3</QuantityInTransfer>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityOnLoan>5</QuantityOnLoan>
            <QuantityOnOrder>6</QuantityOnOrder>
            <QuantityOnRMA>9</QuantityOnRMA>
            <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
            <QuantityOrdered>4</QuantityOrdered>
            <QuantityReceived>4</QuantityReceived>
            <QuantitySold>30</QuantitySold>
            <QuantitySuggestedByVendor>50</QuantitySuggestedByVendor>
            <RetailPrice>99.99</RetailPrice>
            <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
            <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
            <SalePrice>79.99</SalePrice>
            <VendorSKU>SSGS5CB</VendorSKU>
          </ProductInformation>
        </ProductsReceived>
        <SerialsReceived>
          <ProductSerialNumber>
            <ProductItemID>11142</ProductItemID>
            <DateReceived>3/11/2014 2:29:25 PM</DateReceived>
            <NonSellable>true</NonSellable>
            <SerialNumber>132456456456111</SerialNumber>
          </ProductSerialNumber>
        </SerialsReceived>
      </GetPurchaseOrderByBusinessIDResult>
    </GetPurchaseOrderByBusinessIDResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-receiving-info' class='clickable-header top-level-header'>Getting Receiving Info</h3>

Allows you to retrieve a list of products within a date range.


#### Request

<pre>
POST /?op=GetReceivingInfo
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetReceivingInfo</code> (<strong>Required</strong>) </li><ul><li><code>client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) - Client specific identifier supplied by iQmetrix</li><li><code>Username</code> (<strong>Required</strong>) - Client specific username supplied by iQmetrix</li><li><code>Password</code> (<strong>Required</strong>) - Client specific password supplied by iQmetrix</li><li><code>StoreId</code> (<strong>Required</strong>) - If provided, this value should be -1, which denotes all stores</li></ul><li><code>startDate</code> (<strong>Required</strong>) - Products received on or after this day at midnight will be searched for</li><li><code>endDate</code> (<strong>Required</strong>) - Products received up to the end of this day will be searched for</li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetReceivingInfo 
      xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <StoreId>-1</StoreId>
      </client>
      <startDate>01/01/2016</startDate>
      <endDate>05/25/2016</endDate>
    </GetReceivingInfo>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";

ReceivingInfo[] received = cmiService.GetReceivingInfo(client, startDate, endDate);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetReceivingInfoResponse 
      xmlns="http://www.iqmetrix.com">
      <GetReceivingInfoResult>
        <ReceivingInfo>
          <ProductItemID>11142</ProductItemID>
          <ProductName>Samsung Galaxy S6</ProductName>
          <ShipToStoreID>55</ShipToStoreID>
          <ShipToStoreName>Cornwall west</ShipToStoreName>
          <RQPurchaseOrderNumber>CORNWPO3550</RQPurchaseOrderNumber>
          <VendorSKU>ABC123</VendorSKU>
          <Quantity>1</Quantity>
          <ProductCost>99.99</ProductCost>
          <DateReceived>3/11/2014 2:29:25 PM</DateReceived>
          <RQReceivingNumber>CORNWRE6055</RQReceivingNumber>
          <SerialNumber>132456456456111</SerialNumber>
        </ReceivingInfo>
      </GetReceivingInfoResult>
    </GetReceivingInfoResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-all-cmi-enabled-stores' class='clickable-header top-level-header'>Getting All CMI Enabled Stores</h3>



#### Request

<pre>
POST /?op=GetStoreList
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetStoreList</code> (<strong>Required</strong>) </li><ul><li><code>client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) - Client specific identifier supplied by iQmetrix</li><li><code>Username</code> (<strong>Required</strong>) - Client specific username supplied by iQmetrix</li><li><code>Password</code> (<strong>Required</strong>) - Client specific password supplied by iQmetrix</li><li><code>StoreId</code> (<strong>Required</strong>) - If provided, this value should be -1, which denotes all stores</li></ul></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetStoreList 
      xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <StoreId>-1</StoreId>
      </client>
    </GetStoreList>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";

StoreInformation[] stores = cmiService.GetStoreList(client);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetStoreListResponse 
      xmlns="http://www.iqmetrix.com">
      <GetStoreListResult>
        <StoreInformation>
          <StoreID>36</StoreID>
          <Name>Cornwall West</Name>
          <Abbreviation>CWW</Abbreviation>
          <Address>2102 11th Ave</Address>
          <City>Regina</City>
          <Country>Canada</Country>
          <District>Regina</District>
          <PhoneNumber>5555555555</PhoneNumber>
          <PostalZipCode>S2S 2S2</PostalZipCode>
          <ProvinceState>Saskatchewan</ProvinceState>
          <Region>Regina</Region>
          <ShipToStoreID>55</ShipToStoreID>
          <BillToStoreID>55</BillToStoreID>
        </StoreInformation>
      </GetStoreListResult>
    </GetStoreListResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>



<h3 id='getting-the-product-sales-report' class='clickable-header top-level-header'>Getting the Product Sales Report</h3>

Retrieves detailed sell through data for products.

#### Notes

* For no channel, use Guid.Empty or `00000000-0000-0000-0000-000000000000`
* For no region, district or store use -1

#### Request

<pre>
POST /?op=GetProductSalesReport
</pre>

#### Headers

* `Content-Type: text/xml`


#### Request Parameters

<ul><li><code>GetProductSalesReport</code> (<strong>Required</strong>) </li><ul><li><code>client</code> (<strong>Required</strong>) </li><ul><li><code>ClientID</code> (<strong>Required</strong>) - Client specific identifier supplied by iQmetrix</li><li><code>Username</code> (<strong>Required</strong>) - Client specific username supplied by iQmetrix</li><li><code>Password</code> (<strong>Required</strong>) - Client specific password supplied by iQmetrix</li><li><code>StoreId</code> (<strong>Required</strong>) - If provided, this value should be -1, which denotes all stores</li></ul><li><code>storeId</code> (<strong>Required</strong>) - This value can be a Channel, Region, District or Store Id. The request body will change depending on the parameter used (i.e. <channelId></channelId>)</li><li><code>startDate</code> (<strong>Required</strong>) </li><li><code>endDate</code> (<strong>Required</strong>) </li></ul></ul>

###### Example


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetProductSalesReport 
      xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <StoreId>-1</StoreId>
      </client>
      <storeId>4</storeId>
      <startDate>01/01/2016</startDate>
      <endDate>10/31/2016</endDate>
    </GetProductSalesReport>
  </soap:Body>
</soap:Envelope></script></code></pre>


###### Code Example

<pre><code class="language-java"><script>ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";
client.StoreID = 4;

ProductSalesReportData[] productReport = cmiService.GetProductSalesReport(client, startDate, endDate, storeId);
</script></code></pre>

#### Response



###### Example

<pre><code class="language-json">HTTP 200 Content-Type: text/xml</code></pre>


<pre><code class="language-xml"><script><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <GetProductSalesReportResponse 
      xmlns="http://www.iqmetrix.com">
      <GetProductSalesReportResult>
        <ProductSalesReportData>
          <CategoryPath>Activation >> Dropship</CategoryPath>
          <ChannelID>4bbb842d-0340-4ffc-9216-bf170c861424</ChannelID>
          <ChannelName>First Channel</ChannelName>
          <Description></Description>
          <DistrictID>1</DistrictID>
          <DistrictName>First District</DistrictName>
          <InvoicedBy>iQmetrix User</InvoicedBy>
          <ListPrice>99.99</ListPrice>
          <ProductItemID>11142</ProductItemID>
          <ProductSKU>CECPSM000017</ProductSKU>
          <Quantity>1</Quantity>
          <Refund>false</Refund>
          <RegionID>1</RegionID>
          <RegionName>First Region</RegionName>
          <RqInvoiceIdByStore>BDP123</RqInvoiceIdByStore>
          <SoldOn>1/21/2016 4:58:24 PM</SoldOn>
          <StoreID>4</StoreID>
          <TrackingNumber>12345</TrackingNumber>
          <VendorSKU>SSGS5CB</VendorSKU>
        </ProductSalesReportData>
      </GetProductSalesReportResult>
    </GetProductSalesReportResponse>
  </soap:Body>
</soap:Envelope></script></code></pre>






<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 500` | `Found Purchase orders for StoreID [x] by VendorInvoiceNumber [y]` | Ensure VendorInvoiceNumber is unique |   
| `HTTP 500` | `ShipToStoreID must be > 0 or ShipToVendorAccountNumber must be supplied` | Ensure one of ShipToStoreID or ShipToVendorAccountNumber is provided |   
| `HTTP 500` | `BillToStoreID must be > 0 or BillToVendorAccountNumber must be supplied` | Ensure one of BillToStoreID or BillToVendorAccountNumber is provided |   
| `HTTP 500` | `Existing Purchase order has been found with Purchase Order ID [x]` | Omit PurchaseOrderID from request body or ensure it is unique |   

