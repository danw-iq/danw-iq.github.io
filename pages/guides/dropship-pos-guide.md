---
title: Dropship Point of Sale Guide
permalink: /guides/dropship-pos-guide/
tags: []
keywords: 
audience: 
last_updated: 30-05-2016
summary: 
---

{% include linkrefs.html %}

## Overview

The following document outlines the APIs and calls required for integrating a Point of Sale (POS) with iQmetrix Dropship service. The steps outlined below detail each call needed to create a dropship order in <a href="http://www.iqmetrix.com/products/endless-aisle" target="_blank">Endless Aisle</a> and are meant to be performed sequentially.

Each segment in this guide will provide high-level concepts before describing examples of the API call required. The images shown in this guide are from the RQ Dropship Wizard and are meant for illustrative purposes only.

<br />
**Figure 1:** Illustrates the suggested flow for retailers to process a dropship order in their POS.
<img title="dropship pos flow diagram" src="{{ "/images/dropship-pos-guide/dropship-pos-flow.png" | prepend: site.url }}" />


The following APIs will be covered in this guide:

* Authentication
* Customers
* Orders
* Shipping Aggregator 

#### Who Is This Guide For?

The intended audience for this guide are developers who are integrating an existing POS into the dropship program. 

#### Onboarding Package

As part of the onboarding process, you will have received an onboarding package from the iQmetrix API team. This package provides you credentials and access details in order to perform the topics covered in this guide. 

Should you require information beyond the scope of this guide, or did not receive the onboarding package, contact {{contact_support}}.


#### Environment

iQmetrix provides you with two environments: Sandbox and Production. 
Use the Sandbox environment to test your API and to perform end-to-end testing. After completing this stage proceed to the Production environment.

For more information on environments, see {{Environment}}.

The iQmetrix API supports JSON and JSON + HAL. See [Supported Response Formats](/api/getting-started) for more information.

The `CompanyId` and `SupplierEntityId` are environment specific. All other variables mentioned are dynamic.


<!--
### Postman Example

iQmetrix uses <a href="http://www.getpostman.com" target="_blank">Postman</a> when <a href="/api/#testing-and-debugging">testing and debugging</a> our APIs.

For Chrome or Mac users, click the button below to import the collection directly into Postman.



<br />
Alternatively, you can download the collection by clicking <a href="https://www.getpostman.com/collections/56ce50e76203867bf3a5">here</a>.

The Postman environment shared by all API references and guides can be found <a href="{{ "/files/postmanEnv.postman_environment" | prepend: site.url }}">here</a>.

<hr />

-->

## Step 1 - Authentication


In order to make authorized requests to iQmetrix APIs, you need an {{AccessToken_Glossary}}.

<br />
**Table 1:** Methods for Obtaining an Access Token

| If... | Then... |
|:------|:--------|
| You do not have an Access Token | See [Obtaining an Access Token](/api/authentication/#obtaining-an-access-token) |
| You have an Access Token, but it is close to expiring | See [Refreshing an Access Token](/api/authentication/#refreshing-an-access-token) |

The token is placed in the `Authorization` header of requests to iQmetrix APIs, prefixed by the word `Bearer`.

##### Example Request

    Authorization: Bearer (Access Token)


## Step 2 - Get Pending Orders

When a dropship order is created through Endless Aisle, the only initial requirement from the customer is either their first name or initials. Similar to the image below.


<br />
**Figure 2:** Displays the checkout screen from Endless Aisle.
<img title="Endless Aisle checkout screen" src="{{ "/images/dropship-pos-guide/ea-checkout.png" | prepend: site.url }}" />


Once the order has been created Endless Aisle,

1. Uses the value entered in the `name` field to create a `Customer` resource
2. Creates an `Address` resource based on the Endless Aisle device location (the store associated with each device)
3. Assigns that `Address` resource to the `Customer` resource
4. Sets the `CustomerId` as the `ShippingCustomerId` on the order.
5. Sets the order to a `Pending` state, ready to be picked up by your POS.


The first step during the dropship transaction is to get a list of [Pending Orders](/api/orders/#getting-pending-orders-by-location) for the given store.  

Keep a note of the Order `Id`, the `CustomerId`, and the `ShippingAddressId` as they will be referenced later in this guide.

The JSON results would appear similar to the figure below.

<br />
**Figure 3:** Displays the RQ results from pending Endless Aisle orders.
<div>
<img title="list of pending orders in a POS" src="{{ "/images/dropship-pos-guide/pending-orders.png" | prepend: site.url }}" />
</div>

##### Example Request

    GET https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=State eq 'Pending' and EntityId eq 14192
    Authorization: Bearer (Access Token)
    Accept: application/json


##### Example Response

    HTTP 200 OK Content-Type: application/json

    [
        {
            "Id": "fec93378-b4c2-400e-a480-364470920798",
            "OrderTypeId": 1,
            "OrderType": "Sales",
            "State": "Pending",
            "PrintableId": "670K300",
            "Name": "XQ-Shelf Cart 431b4d57-97fd-41b8-868b-7ec099ce57cc",
            "TenderId": null,
            "TenderOrigin": null,
            "SourceId": null,
            "SourceName": null,
            "EntityId": 14192,
            "ShippingEntityId": 0,
            "CustomerId": "e6f05db4-4555-4db6-9b7c-1babfcdbf65a",
            "BillingCustomerId": "e6f05db4-4555-4db6-9b7c-1babfcdbf65a",
            "ShippingCustomerId": "e6f05db4-4555-4db6-9b7c-1babfcdbf65a",
            "ShippingAddressId": "55ec98fe-249f-412c-8831-2c8be983a5b6",
            "BillingAddressId": "55ec98fe-249f-412c-8831-2c8be983a5b6",
            "EmployeeId": 0,
            "DiscountCode": null,
            "DiscountDescription": null,
            "DiscountAmount": 0,
            "CreatedDateUtc": "2016-05-17T22:38:36.9",
            "OrderExpiryHours": 12,
            "OrderExpiryDate": "2016-05-18T10:38:36.9"
        }
    ]



### Step 2.1 Verifying Order Details

Once you have obtained the Order `Id`, the next step is to verify the order contents with the customer by [Getting the Full Order](/api/orders/#getting-an-order-with-items).

Keep a note of the `ProductId` (Catalog ID), as it is required to obtain the vendor's shipping options.

The JSON results would appear similar to the figure below. 

<br />
**Figure 4:** Displays the order details in RQ POS. The address shown is the store address where the order took place.
<img title="orders details in a POS" src="{{ "/images/dropship-pos-guide/order-details.png" | prepend: site.url }}" />

##### Example Request

    GET https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(fec93378-b4c2-400e-a480-364470920798)
    Authorization: Bearer (Access Token)
    Accept: application/json


##### Example Response

    HTTP 200 Content-Type: application/json

    {
        "Id": "fec93378-b4c2-400e-a480-364470920798",
        "OrderTypeId": 1,
        "OrderType": "Sales",
        "State": "Pending",
        "PrintableId": "670K300",
        "Name": "XQ-Shelf Cart 431b4d57-97fd-41b8-868b-7ec099ce57cc",
        "TenderId": null,
        "TenderOrigin": null,
        "SourceId": null,
        "SourceName": null,
        "EntityId": 14192,
        "ShippingEntityId": 0,
        "CustomerId": "e6f05db4-4555-4db6-9b7c-1babfcdbf65a",
        "BillingCustomerId": "e6f05db4-4555-4db6-9b7c-1babfcdbf65a",
        "ShippingCustomerId": "e6f05db4-4555-4db6-9b7c-1babfcdbf65a",
        "ShippingAddressId": "55ec98fe-249f-412c-8831-2c8be983a5b6",
        "BillingAddressId": "55ec98fe-249f-412c-8831-2c8be983a5b6",
        "EmployeeId": 0,
        "DiscountCode": null,
        "DiscountDescription": null,
        "DiscountAmount": 0,
        "CreatedDateUtc": "2016-05-17T22:38:36.9",
        "OrderExpiryHours": 12,
        "OrderExpiryDate": "2016-05-18T10:38:36.9",
        "Items": [
            {
                "ItemExtensions": [],
                "Id": "150fe46f-4d96-4dbf-9606-ca1d0ec9d175",
                "OrderId": "fec93378-b4c2-400e-a480-364470920798",
                "ItemTypeId": 1,
                "ItemType": "DropShip",
                "ItemStatusId": 1,
                "ItemStatus": "New",
                "ProductId": "9ab6ae3c-4766-4a0e-bf21-da941f82298d",
                "SupplierEntityId": 0,
                "Quantity": 1,
                "Cost": 0,
                "ListPrice": 0,
                "SellingPrice": 39.99,
                "Index": 0,
                "Description": "BlackBerry Z10 L-S1 Battery",
                "SKU": null,
                "Notes": null,
                "SerialNumbers": [],
                "SupplierReference": null,
                "TrackingInformation": [],
                "ShippingOptionId": null
            }
        ]
    }


## Step 3 - Collect Customer Information

Once the order details have been verified, the next step is to gather the customer information. Remember, the Customer entry from Endless Aisle only includes the customer's name or initials as the reference for the order.

#### Dropship Scenario

This scenario requires the customer's first and last name, and their shipping address. This scenario also assumes that the customer has come to the sales clerk to complete their Dropship order. 

The majority of clients will use their own customer record management systems and it is assumed they will not be synced with the iQmetrix Customers API. 

This scenario assumes that you will update the Endless Aisle customer record with the information provided by the customer.  


### Step 3.1 - Update the Customer Details

The first step is to [Update the Customer](/api/crm/#updating-a-customer).  Use the `CustomerId` referenced from the Order as part of the request.


##### Example Request

    PUT https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(e6f05db4-4555-4db6-9b7c-1babfcdbf65a)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "CustomerId": "e6f05db4-4555-4db6-9b7c-1babfcdbf65a",
        "PrimaryName": "Bruce",
        "FamilyName": "Wayne",
        "CustomerType": "Person",
        "CustomerTypeId": 2,
        "Disabled": false,
        "DoNotContact": false,
        "Version": 1
    }

##### Example Response

    HTTP 201 Content-Type: application/json

    {
        "Id": "e6f05db4-4555-4db6-9b7c-1babfcdbf65a",
        "PrimaryName": "Bruce",
        "MiddleName": null,
        "FamilyName": "Wayne",
        "AlternateName": null,
        "CustomerType": "Person",
        "CustomerTypeId": 2,
        "DateOfBirth": null,
        "Disabled": false,
        "DoNotContact": false,
        "Notes": null,
        "Title": null,
        "Version": 1
    }


### Step 3.2 - Add their Contact Method

Once you have updated the customer information, the next step is to [Add their Contact Method](/api/crm/#adding-a-customer-contact-method). This contact method could be either email address or phone number, or a combination of the two. 

In this example, we are only adding a home email address. 

<br />
**Table 2:** Request Values for Contact Method

| Property | Value |
|:---------|:------|
| ContactMethodTypeId | 9 (for home) |
| ContactMethodCategory | 2 (for email) |

##### Example Request

    POST https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(e6f05db4-4555-4db6-9b7c-1babfcdbf65a)/ContactMethods
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "CustomerId": "e6f05db4-4555-4db6-9b7c-1babfcdbf65a",
        "ContactMethodCategoryId": 2,
        "ContactMethodTypeId": 9,
        "Default": true,
        "DoNotContact": false,
        "Value": "bruce@batman.org",
    }

##### Example Response

    HTTP 201 Content-Type: application/json

    {
        "Id": "65c26799-4bc0-4ae4-be7c-ba62886dd0e4",
        "CustomerId": "f10ca768-519a-4914-b645-2e04863611fa",
        "ContactMethodCategory": "Email",
        "ContactMethodCategoryId": 2,
        "ContactMethodType": "Home",
        "ContactMethodTypeId": 9,
        "Default": true,
        "DoNotContact": false,
        "Notes": null,
        "Value": "bruce@batman.org",
        "Version": 1
    }



### Step 3.3 - Update their Shipping Address

The next step is to [Update the Customer's Shipping Address](/api/crm/#updating-a-customer-address). Use the `CustomerId` and `ShippingAddressId` referenced from the Order as part of the request.


The JSON request would appear similar to the figure below.

<br />
**Figure 5:** Displays the address information for order shipment.
<img title="address shipment info" src="{{ "/images/dropship-pos-guide/customer-info.png" | prepend: site.url }}" />


##### Example Request

    PUT https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(e6f05db4-4555-4db6-9b7c-1babfcdbf65a)/Addresses(55ec98fe-249f-412c-8831-2c8be983a5b6)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "CustomerId": "e6f05db4-4555-4db6-9b7c-1babfcdbf65a",
        "AddressTypeId": 3,
        "Version": 1,
        "StreetAddress1": "2150 Summitridge Dr",
        "Locality": "Beverly Hills",
        "StateCode": "CA",
        "CountryCode": "US",
        "PostalCode": "90210",
        "Phone": "(555) 555-5555",
        "Email": "ivory@towers.com"
    }

##### Example Response

    HTTP 201 Content-Type: application/json

    {
        "Id": "55ec98fe-249f-412c-8831-2c8be983a5b6",
        "CustomerId": "e6f05db4-4555-4db6-9b7c-1babfcdbf65a",
        "AddressTypeId": 3,
        "AddressType": "Shipping",
        "Default": false,
        "DoNotContact": true,
        "CountryCode": "US",
        "Country": "United States",
        "Locality": "Beverly Hills",
        "StateCode": "CA",
        "State": "California",
        "PostalCode": "90210",
        "PostOfficeBoxNumber": "",
        "StreetAddress1": "2150 Summitridge Dr",
        "StreetAddress2": "",
        "Notes": null,
        "Version": 1,
        "AttentionTo": null,
        "Phone": "(555) 555-5555",
        "Email": "ivory@towers.com"
    }



## Step 4 - Add Shipping Options

The next step is to [retrieve shipping options](/api/saccs/#retrieving-shipping-options) from the vendor. 

{{important}}The Shipping Aggregator also verifies the availability of the requested catalog items. If an item is <strong>Out of Stock</strong>, then you must prevent this order from continuing.{{end}}


### Step 4.1 - Retrieve the Shipping Options

The `CatalogId` is the `ProductId` noted earlier. The `LocationEntityId` is the store location where the Endless Aisle order was created.

Keep a note of the ShippingOptions `Id` and `SupplierEntityId` in the response, as these are required to add a Shipping Item in the next step.

The JSON response would appear similar to the figure below.

<br />
**Figure 6:** Displays the POS results from retrieving shipping options.
<img src="{{ "/images/dropship-pos-guide/shipping-options.png" | prepend: site.url }}" alt="list of shipping options in a POS" />


##### Example Request

    POST https://shippingaggregatordemo.iqmetrix.net/Companies(14146)/ShippingInformation
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "LocationEntityId": "14192",
        "PostalCode": "6000",
        "Items": [
            {
                "CatalogId": "9ab6ae3c-4766-4a0e-bf21-da941f82298d",
                "Quantity": 1
            }
        ]
    }

##### Example Response

    HTTP 200 Content-Type: application/json

    {
        "Id": 1,
        "LocationEntityId": 14192,
        "PostalCode": "6000",
        "Shipments": [
            {
                "SupplierEntityId": 14107,
                "Items": [
                    {
                        "CatalogId": "9ab6ae3c-4766-4a0e-bf21-da941f82298d",
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
    }


#### Step 4.1.1 No Availability

Each time a call is made to retrieve shipping options from the suppliers, the real-time availabilty is requested from their warehouse. If an `HTTP 404` error response is returned, then it is possible that this item is no longer in stock. 

The error response would look similar to the following:

    HTTP 400 Bad Request Content-Type: application/json

    {
        "Message": "No availability found for the following products: BlackBerry Z10 L-S1 Battery"
    }


It is your responsibility to ensure that this order does not continue and to notify the Supplier of the **Out of Stock** product.


### Step 4.2 - Add a Shipping Item

The next step is to add a [Shipping Item](/api/orders/#adding-an-item-to-an-order) to the order. 

Ensure that the following values are set correctly:

<br />
**Table 3:** Request Values for Shipping Item

| Property | Value |
|:---------|:------|
| ItemStatusId | 15 (for shipping) |
| ItemTypeId | 4 (for shipping order) |
| ShippingOptionId | ShippingOptions `Id` from Step 4.2 |


##### Example Request

    POST https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(fec93378-b4c2-400e-a480-364470920798)/Items
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "ItemStatusId": 15,
        "ItemTypeId": 4,
        "Cost": 7.94,
        "Description": "Vendor Shipping Option",
        "Quantity": 1,
        "ShippingOptionId": "1",
        "SupplierEntityId": 14107
    }


## (Optional) Step 5 - Optional Order Properties 

Taxes are also processed at this stage. It is assumed that your POS will handle taxes on a per item or per order basis. 

If your POS does not have a taxes option for dropship orders, and you wish to learn more about the iQmetrix Taxes API, contact <a href="mailto:{{site.support_email}}?subject=Taxes API Information">API Support</a>.

The JSON request would appear similar to the figure below.

<br />
**Figure 7:** Displays the RQ Dropship checkout sale, where the employee can enter additional properties.
<img src="{{ "/images/dropship-pos-guide/dropship-sale.png" | prepend: site.url }}" alt="checkout screen in POS" />


## Step 6 - Process the Order

The final step is to take payment (tender) and process the order. 

There are two options available when tracking the invoice number. The first option is to update the `TenderId` field, as this field is reflected in the invoice. The second option is to map the `OrderId` to an invoice number in your system. 

You must also ensure that a Dropship SKU and Shipping SKU are defined in your POS. These SKUs are used to track Dropship orders, and should be defined as non-stocked SKUs. See the previous figure as an example of these SKUs.

##### Example Request

    POST https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(fec93378-b4c2-400e-a480-364470920798)/Process
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
       "OrderId": "fec93378-b4c2-400e-a480-364470920798"
    }


##### Example Response


    HTTP 201 Content-Type: application/json

    {
        "Id": "fec93378-b4c2-400e-a480-364470920798",
        "Name": "XQ-Shelf Cart 431b4d57-97fd-41b8-868b-7ec099ce57cc",
        "BillingAddressId": "779de874-3018-48f7-a41a-4ed9235a0708",
        "BillingCustomerId": "88a5c0c0-af55-4d3b-8d75-c41a4e20bc49",
        "CreatedDateUtc": "2016-05-17T22:38:36.9",
        "DiscountAmount": 0,
        "DiscountCode": null,
        "DiscountDescription": null,
        "EmployeeId": 0,
        "EntityId": 14192,
        "OrderExpiryDate": "2016-05-18T10:38:36.9",
        "OrderExpiryHours": 12,
        "OrderType": "Sales",
        "OrderTypeId": 1,
        "PrintableId": "null",
        "ShippingAddressId": "779de874-3018-48f7-a41a-4ed9235a0708",
        "ShippingCustomerId": "88a5c0c0-af55-4d3b-8d75-c41a4e20bc49",
        "ShippingEntityId": 0,
        "State": "Created",
        "TenderId": null
    }


## Step 7 - Next Steps

The iQmetrix Dropship program handles all actions post-invoice, such as updating the order status and sending an email to the customer with the order tracking details.