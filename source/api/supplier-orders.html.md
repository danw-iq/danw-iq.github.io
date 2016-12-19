---
title:  Supplier Orders
permalink: /api/supplier-orders/

language_tabs:
  - shell: cURL

search: true
---




# Overview

This API allows suppliers to manage order submitted by retailers participating in the Dropship program facilitated via iQmetrix Platform: 

- Get a list of order notifications
- Get an archived list of order notifications
- Update the status of orders
- Update the status of items 

### Order Status Updates

Suppliers have an ability to update the status of the order or individual items in that order. Some order status transitions trigger notifications to retailers and end customers who placed the order. Depending on item stock, one of the following calls should be used:

* `OrderStatusUpdate` should be used if all items in the order are stocked for shipment
* `ItemStatusUpdate` should be used if one or more items in the order are **not** stocked for shipment

More information regarding states can be found in the [Dropship Order Guide](/guides/dropship-order-guide). 

Once an order has been shipped from the supplier's warehouse, the order status must be updated to `Shipped`, and include a tracking number and shipping carrier to notify the end client.

If the supplier wants to provide reasoning behind an order or item's specific status, then a message can be provided in the `Message` field.

### Order Notifications Feed

The order notifications feed contains a list of dropship order events for a supplier in "[Atom Syndication Format](http://tools.ietf.org/html/rfc4287)" using "[Archived Feeds](https://tools.ietf.org/html/rfc5005#page-6)" and is encoded as `atom+xml`. Newly created orders are prepended to the beginning of the notification feed.

Each page of the feed will contain up to 50 events. 



# Endpoints


* Sandbox: <a href="https://dropshipdemo.iqmetrix.net">https://dropshipdemo.iqmetrix.net</a>
* Production: <a href="https://dropship.iqmetrix.net">https://dropship.iqmetrix.net</a>



# Resources


## OrderStatusUpdate

```json
{
	"Id": "91a57ddb-2d42-402b-85b4-fe327a347313",
	"Info": "www.ups.com",
	"Message": "Error: Product '98ESP456' is unavailable",
	"ShippingProvider": "UPS",
	"Status": "Shipped",
	"TrackingInfo": "23923408863"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Identifier for the Dropship order | 
| Info (`String`) | General information about the item(s), such as tracking site, additional reference info, etc | 
| Message (`String`) | A reason for the status of an order | 
| ShippingProvider (`String`) | Shipping carrier for the order | 
| Status (`String`) | Current [OrderStatus](#orderstatus) | 
| TrackingInfo (`String`) | Tracking number for a shipped order | 
| *ReferenceName (`String`)* | *Reserved for internal use* | |
| *ReferenceValue (`String`)* | *Reserved for internal use* | |

## ItemStatusUpdate

```json
{
	"Id": "91a57ddb-2d42-402b-85b4-fe327a347313",
	"ItemInformation": "undefined"
}
```

| Name | Description |
|:-----|:------------|
| Id (`GUID`) | Identifier for the Dropship order | 
| ItemInformation (`Array[[supplier-orders](/api/iteminformation/#ItemInformation)]`) | A list of [ItemInformation](#iteminformation) | 

## ItemInformation

```json
{
	"CatalogId": "dbc2577a-021f-4bbf-8289",
	"Info": "www.ups.com",
	"Message": "Error: Product '98ESP456' is unavailable",
	"ProductName": "239234SMS L720 BLU SPT RTD8863",
	"Quantity": "5",
	"Status": "Exception",
	"Sku": "9356SAMGL6S",
	"ShippingProvider": "UPS",
	"TrackingInfo": "23923408863"
}
```

| Name | Description |
|:-----|:------------|
| CatalogId (`GUID`) | Identifier for the [Catalog](/api/catalog/#catalogitem) item | 
| Info (`String`) | General information about the item(s), such as tracking site, additional reference info, etc | 
| Message (`String`) | A reason for the status of an order | 
| ProductName (`String`) | Name of the product | 
| Quantity (`Integer`) | Used in the case of partial shipments | 
| Status (`String`) | Current [ItemStatus](#itemstatus) | 
| Sku (`String`) | Vendor SKU | 
| ShippingProvider (`String`) | The shipping carrier that the product was shipped with | 
| TrackingInfo (`String`) | Tracking number for this shipped product | 
| *ReferenceName (`String`)* | *Reserved for internal use* | |
| *ReferenceValue (`String`)* | *Reserved for internal use* | |



### Feed

| Name | Description |
|:-----|:------------|
| id (GUID) | Identifier for the Feed |
| title (string) | Title of order feed |
| updated (DateTime) | Timestamp based on newest entry timestamp |
| author (Object) | Container for author name |
| author.name | (string) Name of author |
| link current (string) | Link to the order feed endpoint |
| link self (string) | Link to the current order feed instance |
| link prev-archive (string) | Link to the previously archived order feed |
| Entry ([OrderEntry](#orderentry)) | Entry in Order Feed |
| Entry.id (GUID) | Entry identifier | 
| Entry.title (string) | Title for order entry |
| Entry.published (DateTime) | Published date for order entry |    
| Entry.updated (DateTime) | Last update for order entry |
| Entry.content (object) | Container for order type |
| Entry.content.order-created ([OrderCreated](#ordercreated)) | **Either** this property **or** order-status-updated will exist on the resource |
| Entry.content.order-status-updated ([OrderStatusUpdated](#orderstatusupdated)) | **Either** this property **or** order-created will exist on the resource |  

### OrderCreated

| Name | Description | 
|:-----|:------------|
| order-id (GUID) | Identifier for the Dropship order |
| items (Array[Object]) | Array of order items |
| items.order-item ([OrderItem](#orderitem)) | Information for item in order |
| seller (Object) | Information for selling store | 
| seller.company-id (Integer) | [Company](/api/company-tree/#company) identifier |
| seller.location-id (Integer) | Store location identifier |
| seller.po-reference (String) | Purchase order that gets printed on customer invoice | 
| seller.printable-id (String) | ID that gets printed on customer invoice |
| ship-to-store (Boolean) | Indicates if order is shipped to store |
| shipping-address (Object) | Information for shipping address |
| shipping-address.address-id (GUID) | [Address](/api/crm/#address) identifier |
| shipping-address.attention-to (String) | Recipient’s name |
| shipping-address.country (String) | Country |
| shipping-address.country-code String) | Country code |  
| shipping-address.locality (String) | City |
| shipping-address.notes (String) | Notes for recipient |
| shipping-address.phone (String) | Recipient phone number |
| shipping-address.post-office-box-number (String) |  P.O. box number |
| shipping-address.postal-code  (String) |  Postal/zip code |
| shipping-address.region (String) | Province/Territory/State |
| shipping-address.region-code (String) | Province/Territory/State code |
| shipping-address.street-address-1 (String) | Address line 1 |
| shipping-address.street-address-2 (String) | Address line 2 |
| shipping-address.type (String) | [Address](/api/crm/#address) type |
| shipping-customer (Object) | Information for shipping customer |  
| shipping-customer.customer-id (GUID) | [Customer](/api/crm/#customer) identifier |
| shipping-customer.alternate-name  (String) | Customer’s alternate name |
| shipping-customer.family-name (String) | Last name |
| shipping-customer.middle-name (String) | Midle name |
| shipping-customer.notes   (String) | Notes for recipient |
| shipping-customer.primary-name (String) | First name |
| shipping-customer.title (String) | Recipient’s title |
| shipping-customer.type (String) | [CustomerType](/api/crm/#customer) |
| shipping-method (String) | Method ID that comes from shipping provider |
| supplier-id (Integer) | Supplier identifier |

### OrderItem

| Name | Description | 
|:-----|:------------|
| catalog-id (String) | [Catalog](/api/catalog/) identifier |
| description (String) | Description of item |
| quantity (Integer) |  Number of items |
| selling-price (Decimal) | MSRP consumer price of item |
| sku (String) | Vendor SKU |

### OrderStatusUpdated

| Name | Description | 
|:-----|:------------|
| order-id (GUID) | Identifier for the Dropship order |
| company-id (Integer) | [Company](/api/company-tree/#company) identifier |
| items (Array[object)) | Array of order items |  
| items.item-information ([ItemInformation](#iteminformation)) | Information for item in order | 
| supplier-id (Integer) | Supplier identifier |



### Enumerations

#### OrderStatus

| Id | Name | Description |
|:---|:-----|:------------|
| 0 | PendingSupplier | A new order has been created but is pending the supplier |
| 1 | Ordered | Order has been picked up by the supplier and is in processing stage (picked, packed and shipped) |
| 2 | Shipped | Order has been shipped from a warehouse |
| 3 | BackOrdered | Order cannot currently be fulfilled due to items being temporarily out of stock |
| 4 | Error | There has been an exception with either a product or an entire order |
| 5 | NotAvailable | Some or all items from order are no longer available |
| 6 | PartiallyShipped | Some items have been shipped due to availability, and other items are pending availability |
| 7 | Cancelled | Order has been canceled |
| 8 | Other | Order is in a state not represented by the other states |

#### ItemStatus

| Id | Name | Description |
|:---|:-----|:------------|
| 0 | PendingSupplier | A new order has been created but is pending the supplier |
| 1 | Ordered | Order has been picked up by the supplier and is in processing stage (picked, packed and shipped) |
| 2 | Shipped | Order has been shipped from a warehouse |
| 3 | BackOrdered | Order cannot currently be fulfilled due to items being temporarily out of stock |
| 4 | Error | There has been an exception with either a product or an entire order |
| 5 | NotAvailable | This item from order is no longer available |
| 6 | PartiallyShipped | This item has been shipped due to some quantity available |
| 7 | Cancelled | Item from order has been canceled |
| 8 | Other | Item from order is in a state not represented by the other states |


# Requests



## <span class='put'>PUT</span> Order Status



> Definition

```
PUT /Suppliers({SupplierId})/Orders({OrderId})/OrderStatusUpdate
```

> Example Request

```shell
curl -X PUT "https://dropshipdemo.iqmetrix.net/Suppliers(60455)/Orders(0b05f9fb-1210-4494-b654-d051948716b4)/OrderStatusUpdate" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": "91a57ddb-2d42-402b-85b4-fe327a347313",
    "Info": "www.ups.com",
    "Message": "Error: Product '98ESP456' is unavailable",
    "ShippingProvider": "UPS",
    "Status": "Shipped",
    "TrackingInfo": "23923408863"
}'
```


#### URI Parameters
<ul>
    <li><code>SupplierId</code> (<strong>Required</strong>) </li>
    <li><code>OrderId</code> (<strong>Required</strong>) </li>
</ul>



#### Request Parameters

<ul><li><code>Id</code> (<strong>Required</strong>) </li><li><code>Info</code> (Optional) </li><li><code>Message</code> (Optional) </li><li><code>ShippingProvider</code> (Optional) </li><li><code>Status</code> (Optional) - Defaults to PendingSupplier</li><li><code>TrackingInfo</code> (Optional) </li></ul>

### Response Parameters



> Example Response

```
HTTP 202 Content-Type: application/json
```

```json
{
    "Id": "91a57ddb-2d42-402b-85b4-fe327a347313",
    "Info": "www.ups.com",
    "Message": "Error: Product '98ESP456' is unavailable",
    "ShippingProvider": "UPS",
    "Status": "Shipped",
    "TrackingInfo": "23923408863"
}
```



 [orderstatusupdate](#OrderStatusUpdate)



## <span class='put'>PUT</span> Item Status

If products from an order have been split into multiple shipments, then the supplier must provide tracking numbers for each shipment.


> Definition

```
PUT /Suppliers({SupplierId})/Orders({OrderId})/ItemStatusUpdate
```

> Example Request

```shell
curl -X PUT "https://dropshipdemo.iqmetrix.net/Suppliers(60455)/Orders(0b05f9fb-1210-4494-b654-d051948716b4)/ItemStatusUpdate" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": "91a57ddb-2d42-402b-85b4-fe327a347313",
    "ItemInformation": [
        {
            "CatalogId": "dbc2577a-021f-4bbf-8289",
            "Info": "www.ups.com",
            "Message": "Error: Product '98ESP456' is unavailable",
            "ProductName": "239234SMS L720 BLU SPT RTD8863",
            "Quantity": 5,
            "Status": "Exception",
            "Sku": "9356SAMGL6S",
            "ShippingProvider": "UPS",
            "TrackingInfo": "23923408863"
        }
    ]
}'
```


#### URI Parameters
<ul>
    <li><code>SupplierId</code> (<strong>Required</strong>) </li>
    <li><code>OrderId</code> (<strong>Required</strong>) </li>
</ul>



#### Request Parameters

<ul><li><code>Id</code> (<strong>Required</strong>) </li><li><code>ItemInformation</code> (Optional) </li><ul><li><code>Sku</code> (<strong>Required</strong>) </li><li><code>CatalogId</code> (Optional) </li><li><code>Info</code> (Optional) </li><li><code>Message</code> (Optional) </li><li><code>ProductName</code> (Optional) </li><li><code>Quantity</code> (Optional) </li><li><code>Status</code> (Optional) - Defaults to PendingSupplier</li><li><code>ShippingProvider</code> (Optional) </li><li><code>TrackingInfo</code> (Optional) </li></ul></ul>

### Response Parameters



> Example Response

```
HTTP 202 Content-Type: application/json
```

```json
{
    "Id": "91a57ddb-2d42-402b-85b4-fe327a347313",
    "ItemInformation": [
        {
            "CatalogId": "dbc2577a-021f-4bbf-8289",
            "Info": "www.ups.com",
            "Message": "Error: Product '98ESP456' is unavailable",
            "ProductName": "239234SMS L720 BLU SPT RTD8863",
            "Quantity": 5,
            "Status": "Exception",
            "Sku": "9356SAMGL6S",
            "ShippingProvider": "UPS",
            "TrackingInfo": "23923408863"
        }
    ]
}
```



 [itemstatusupdate](#ItemStatusUpdate)



## <span class='get'>GET</span> the Order Feed

The `current` feed endpoint gives access to the most recent (up to 50) entries in the notification feed while the `prev-archive` link will give access to the previous (up to 50) entries in the feed.


> Definition

```
GET /Suppliers({SupplierId})/Notifications
```

> Example Request

```shell
curl -X GET "https://dropshipdemo.iqmetrix.net/Suppliers(60455)/Notifications" -H "Authorization: Bearer (Access Token)" -H "Accept: application/atom+xml"
```


#### URI Parameters
<ul>
    <li><code>SupplierId</code> (<strong>Required</strong>) </li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/atom+xml
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <title type="text">Dropship Order Event Feed</title>
    <id>urn:uuid:f1be4a74-508f-4159-b3f1-c6efe76c03e4</id>
    <updated>2015-10-23T21:37:34Z</updated>
    <author>
        <name>iQmetrix</name>
    </author>
    <link rel="current" href="https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications" />
    <link rel="self" href="https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications/Pages(f1be4a74-508f-4159-b3f1-c6efe76c03e4)" />
    <link rel="prev-archive" href="https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications/Pages(e1697c26-23e2-4bc7-8f6c-494c6034d9e2)" />
    <entry>
        <id>urn:uuid:9e5a279b-9583-4d51-b3fa-00d0d146986a</id>
        <title type="text">Dropship Order Created</title>
        <published>2015-10-23T21:37:31Z</published>
        <updated>2015-10-23T21:37:31Z</updated>
        <content type="application/xml">
            <order-created xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:iQmetrix:dropship">
                <items>
                    <order-item>
                        <catalog-id>18e039de-f950-4d8e-a48a-d06e4db55a07</catalog-id>
                        <description>Some Item</description>
                        <quantity>1</quantity>
                        <selling-price>100</selling-price>
                        <sku>AB-JH0786-MI</sku>
                    </order-item>
                    <order-item>
                        <catalog-id>736fae29-88e2-4360-8b0e-d2e3d3254c06</catalog-id>
                        <description>Another Item</description>
                        <quantity>2</quantity>
                        <selling-price>42</selling-price>
                        <sku>EM-JH073-MI</sku>
                    </order-item>
                </items>
                <order-id>32cb2b46-fb26-48c8-9b8f-67ed759e2599</order-id>
                <seller>
                    <company-id>33772</company-id>
                    <location-id>33773</location-id>
                    <po-reference>ABC123N1</po-reference>
                    <printable-id>98764531</printable-id>
                </seller>
                <ship-to-store>true</ship-to-store>
                <shipping-address>
                    <address-id>00000000-0000-0000-0000-000000000000</address-id>
                    <attention-to>Bob Eh</attention-to>
                    <country>Canada</country>
                    <country-code>CA</country-code>
                    <locality>Moosejaw</locality>
                    <notes i:nil="true" />
                    <phone i:nil="true" />
                    <post-office-box-number i:nil="true" />
                    <postal-code>S6J1N2</postal-code>
                    <region>Saskatchewan</region>
                    <region-code>SK</region-code>
                    <street-address-1>742 Evergreen Terrace</street-address-1>
                    <street-address-2 i:nil="true" />
                    <type i:nil="true" />
                </shipping-address>
                <shipping-customer>
                    <alternate-name i:nil="true" />
                    <customer-id>3da9470e-f1b2-4a1a-bd47-5bf18fe2d1ab</customer-id>
                    <family-name>Eh</family-name>
                    <middle-name i:nil="true" />
                    <notes i:nil="true" />
                    <primary-name>Bob</primary-name>
                    <title i:nil="true" />
                    <type>Person</type>
                </shipping-customer>
                <shipping-method>123</shipping-method>
                <supplier-id>60455</supplier-id>
            </order-created>
        </content>
    </entry>
    <entry>
        <id>urn:uuid:gf456fd486-df4s56g-d45fdsf-f74ds8fds456fs</id>
        <title type="text">Dropship Order Status Updated</title>
        <published>2015-10-09T15:36:45Z</published>
        <updated>2015-10-09T15:36:45Z</updated>
        <content type="application/xml">
            <order-status-updated xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:iQmetrix:dropship">
                <company-id>50068</company-id>
                <items>
                    <item-information>
                        <catalog-id>18e039de-f950-4d8e-a48a-d06e4db55a07</catalog-id>
                        <info i:nil="true" />
                        <message i:nil="true" />
                        <quantity>1</quantity>
                        <shipping-provider>Purolator</shipping-provider>
                        <sku>AB-JH0786-MI</sku>
                        <status>Other</status>
                        <tracking-info i:nil="true" />
                    </item-information>
                </items>
                <order-id>32cb2b46-fb26-48c8-9b8f-67ed759e2599</order-id>
                <supplier-id>60455</supplier-id>
            </order-status-updated>
        </content>
    </entry>
</feed>            

```






## <span class='get'>GET</span> Order Feed Archives

The `next-archive` link gives access to a newer (up to 50) list of archive entries in the notification feed while the `prev-archive` link will give access to the previous (up to 50) list of archive entries.


> Definition

```
GET /Suppliers({SupplierId})/Notifications/Pages({PageId})
```

> Example Request

```shell
curl -X GET "https://dropshipdemo.iqmetrix.net/Suppliers(60455)/Notifications/Pages(e1697c26-23e2-4bc7-8f6c-494c6034d9e2)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/atom+xml"
```


#### URI Parameters
<ul>
    <li><code>SupplierId</code> (<strong>Required</strong>) </li>
    <li><code>PageId</code> (<strong>Required</strong>) </li>
</ul>



### Response Parameters



> Example Response

```
HTTP 200 Content-Type: application/atom+xml
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <title type="text">Dropship Order Event Feed</title>
    <id>urn:uuid:e1697c26-23e2-4bc7-8f6c-494c6034d9e2</id>
    <updated>2015-07-08T20:20:45Z</updated>
    <author>
        <name>iQmetrix</name>
    </author>
    <link rel="current" href="https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications" />
    <link rel="self" href="https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications/Pages(e1697c26-23e2-4bc7-8f6c-494c6034d9e2)" />
    <link rel="next-archive" href="https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications/Pages(f1be4a74-508f-4159-b3f1-c6efe76c03e4)" />
    <link rel="prev-archive" href="https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications/Pages(b59ded0f-0119-4c49-9113-93862e24eac6)" />
    <entry>
        <id>urn:uuid:b77ef04c-8dd4-4fba-b8c4-10de4bccbeb3</id>
        <title type="text">Dropship Order Status Updated</title>
        <published>2015-07-08T20:20:45Z</published>
        <updated>2015-07-08T20:20:45Z</updated>
        <content type="application/xml">
            <order-status-updated xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:iQmetrix:dropship">
                <company-id>29796</company-id>
                <items>
                    <item-information>
                        <catalog-id>30cece9f-a90d-4f51-b33f-0aa663371658</catalog-id>
                        <info>Additional info</info>
                        <message>Message</message>
                        <quantity>1</quantity>
                        <shipping-provider>UPS</shipping-provider>
                        <sku>GB40030</sku>
                        <status>Shipped</status>
                        <tracking-info>8979876</tracking-info>
                    </item-information>
                </items>
                <order-id>503ed5af-fe26-4d60-9b4f-8d5a708c761b</order-id>
                <supplier-id>60455</supplier-id>
            </order-status-updated>       
        </content>
    </entry>
</feed>            
```






# Errors

The table below may help resolve problems encountered when making requests to the Supplier Orders API.

| HTTP Status Code | Message | How to Resolve |
|:-----------------|:--------|:---------------|
| `HTTP 400` | `Cannot find supplier identifier in the uri` | Occurs when entering an incorrect `SupplierId` in the uri |
| `HTTP 400` | `The request is invalid` | Occurs when entering an incorrect `PageId` in the uri |
| `HTTP 401` | `Invalid token` | Occurs when entering an incorrect token in the request header |
| `HTTP 404` | `Not found` | Occurs when entering an incorrect uri path (e.g. Zxppliers({SupplierId})) |

