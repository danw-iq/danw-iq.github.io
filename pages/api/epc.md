---
title:  Electronic Product Catalog
permalink: /api/epc/

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

The Electronic Product Catalog API allows you to import products into {{ProductLibrary_Concept}}, your Catalog, and RQ. 



# Endpoints


* Sandbox: <a href="https://platformepcdemo.iqmetrix.net/v1">https://platformepcdemo.iqmetrix.net/v1</a>
* Production: <a href="https://platformepc.iqmetrix.net/v1">https://platformepc.iqmetrix.net/v1</a>



# Resources







## RegularProduct

For more information about Regular Products, see {{support_RegularProducts}}.

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| Barcodes (`Array[string]`) | Barcodes for this Product | 
| ProductName (`String`) | Name | 
| CategoryName (`String`) | Path to the Category, delimited by > | 
| ClassificationTreeId (`Integer`) | Identifier for a {{ClassificationTree}} | 
| DaysKeptInStock (`Object`) | Number of days the Product can remain in stock | 
| DefaultPricingAndPurchasing (`<a href='/api/epc/#regularproductpricing'>RegularProductPricing</a>`) | Default pricing | 
| Enabled (`Boolean`) | A flag to indicate if this Product is Enabled. Defaults to true | 
| EnforcedTrackingNumberLength (`Integer`) | A value that restricts tracking number length | 
| ExtendedAttributes (`Array[object]`) | Additional attributes to store with the Product | 
| ExtendedAttributes.Name (`String`) | Name | 
| ExtendedAttributes.Value (`String`) | Value | 
| GlCostOfSalesAccountNumber (`String`) | Account number for Cost of Sales, see {{support_GLAccountSetup}} for more information | 
| GlInventoryAccountNumber (`String`) | Account number for Inventory, see {{support_GLAccountSetup}} for more information | 
| GlInventoryCorrectionsAccountNumber (`String`) | Account number for Inventory Corrections, see {{support_GLAccountSetup}} for more information | 
| GlSalesAccountNumber (`String`) | Account number for Sales, see {{support_GLAccountSetup}} for more information | 
| IgnoreAutomaticTaxAddition (`Boolean`) | Ensures that taxes will not be added as part of the automatic tax process. Defaults to false | 
| LocationVendors (`Array[<a href='/api/epc/#locationvendor'>LocationVendor</a>]`) | Vendors for each location | 
| LongDescription (`String`) | Long description | 
| ManufacturerName (`String`) | Name of a Manufacturer | 
| ManufacturerSku (`String`) | Manufacturer SKU | 
| Model (`String`) | Model | 
| PricingAndPurchasingLocations (`Array[<a href='/api/epc/#regularproductpricinglocation'>RegularProductPricingLocation</a>]`) | Pricing for locations | 
| PricingMethod (`String`) | See [PricingMethods](#pricingmethods) for a list of acceptable values. Defaults to Fixed | 
| ProductLabel (`String`) | Defaults to first 30 characters of the ProductName, but can be edited | 
| ProductTypeId (`Integer`) | Identifier for a [ProductType](#producttype) | 
| ReleaseDate (`DateTime`) | Release Date, in UTC | 
| Serialized (`Boolean`) | A flag to indicate if this Product is serialized, meaning a serial number must be entered when the Product is purchased. Defaults to false. Once selected, this cannot be changed. | 
| SerialNumberPromptText (`String`) | Text displayed when user is prompted to enter a serial number for the product | 
| ShortDescription (`String`) | Short description | 
| SourceRowNumber (`Integer`) | If this product was imported from a spreadsheet, the row location of the product in the spreadsheet | 
| Vendors (`Array[<a href='/api/epc/#vendor'>Vendor</a>]`) | Collection of Vendor SKUs | 
| WarehouseLocation (`String`) | Name of the Warehouse location | 
| *RefundLink (`String`)* | *Reserved for internal use* | |
| *ProductLink (`String`)* | *Reserved for internal use* | |


## RegularProductPricing

{{important}}When a new RegularProductPricing is created, the <b>default pricing</b> values will be used for any properties that are not supplied. However, for any subsequent updates, each RegularProductPricing will have to be changed individually as the change(s) to <b>default pricing fields</b> will not propagate.{{end}}

| Name | Description |
|:-----|:------------|
| AllowReturns (`Boolean`) | A flag to indicate if the Product can be returned | 
| Discountable (`Boolean`) | A flag to indicate if the Product can be discounted, defaults to true | 
| FloorPrice (`Object`) | Floor pricing allows you to keep a product as Discountable but set a minimum price that it can be sold at to ensure margins.  Will default to 0 and cannot be negative. See {{support_FloorPricing}} for more details. | 
| ForSale (`Boolean`) | A flag to indicate if the product can be sold. Defaults to true | 
| InvoiceComments (`String`) | Comments that will be printed on the invoice every time the Product is sold | 
| LockMinMaxed (`Boolean`) | A flag to indicate if the MinimumQuantity/MaximumQuantity amounts are locked (true) which prevents them from being updated by mass updates. Defaults to false | 
| Margin (`Object`) | Margin automatically applied to this Product | 
| MaximumQuantity (`Integer`) | Maximum quantity that should be on hand at any time. Defaults to 0 | 
| MinimumQuantity (`Integer`) | Minimum quantity that should be on hand at any time. Defaults to 0 | 
| MsrpAmount (`Object`) | Manufacturer's suggested retail price. Defaults to 0 | 
| MsrpCurrencyCode (`String`) | Currency | 
| Price (`Object`) | Company-wide default unit price, must be greater then 0 | 
| PrimaryVendorName (`String`) | Name of the primary vendor for this Product | 
| RefundPeriod (`Integer`) | Number of days the Product can be refunded before an override is required to refund. Defaults to 0 | 
| RefundToUsed (`Boolean`) | A flag to indicate that this Product can be refunded and then tagged as used. Defaults to true | 
| ShowOnInvoice (`Boolean`) | A flag to indicate if the price should be shown on the invoice | 
| StoreInStorePrice (`Object`) | Store in Store price. See {{support_StoreInStore}} for more information | 

## RegularProductPricingLocation

| Name | Description |
|:-----|:------------|
| AllowReturns (`Boolean`) | A flag to indicate if the Product can be returned | 
| Discountable (`Boolean`) | A flag to indicate if the Product can be discounted, defaults to true | 
| FloorPrice (`Object`) | Floor pricing allows you to keep a product as Discountable but set a minimum price that it can be sold at to ensure margins.  Will default to 0 and cannot be negative. See {{support_FloorPricing}} for more details. | 
| ForSale (`Boolean`) | A flag to indicate if the product can be sold. Defaults to true | 
| InvoiceComments (`String`) | Comments that will be printed on the invoice every time the Product is sold | 
| LockMinMaxed (`Boolean`) | A flag to indicate if the MinimumQuantity/MaximumQuantity amounts are locked (true) which prevents them from being updated by mass updates. Defaults to false | 
| Margin (`Object`) | Margin automatically applied to this Product | 
| MaximumQuantity (`Integer`) | Maximum quantity that should be on hand at any time. Defaults to 0 | 
| MinimumQuantity (`Integer`) | Minimum quantity that should be on hand at any time. Defaults to 0 | 
| MsrpAmount (`Object`) | Manufacturer's suggested retail price. Defaults to 0 | 
| MsrpCurrencyCode (`String`) | Currency | 
| Price (`Object`) | Company-wide default unit price, must be greater then 0 | 
| PrimaryVendorName (`String`) | Name of the primary vendor for this Product | 
| RefundPeriod (`Integer`) | Number of days the Product can be refunded before an override is required to refund. Defaults to 0 | 
| RefundToUsed (`Boolean`) | A flag to indicate that this Product can be refunded and then tagged as used. Defaults to true | 
| SaleBeginDate (`DateTime`) | Sale begin date | 
| SaleEndDate (`DateTime`) | Sale end date | 
| SalePrice (`Object`) | Sale price will override FloorPrice if it is lower. Defaults to 0 | 
| ShowOnInvoice (`Boolean`) | A flag to indicate if the price should be shown on the invoice | 
| StoreInStorePrice (`Object`) | Store in Store price. See {{support_StoreInStore}} for more information | 
| TargetLocationName (`String`) | Name of a channel, region, district or location to apply this pricing to. To select the entire Company, leave this value empty and select All for TargetLocationType | 
| TargetLocationType (`String`) | See [TargetLocations](#targetlocations) for a list of acceptable values | 

## NonStockedProduct

For more information about Non-Stocked Products, see {{support_NonStockedProducts}}.

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| ProductName (`String`) | Name | 
| CategoryName (`String`) | Name of the Category/Classification for this Product | 
| ClassificationTreeId (`Integer`) | Identifier for a {{ClassificationTree}} | 
| DefaultPricing (`<a href='/api/epc/#nonstockedproductpricing'>NonStockedProductPricing</a>`) | Default pricing | 
| Enabled (`Boolean`) | A flag to indicate if this Product is Enabled. Defaults to true | 
| EnforcedTrackingNumberLength (`Integer`) | A value that restricts tracking number length | 
| ExtendedAttributes (`Array[object]`) | Additional attributes to store with the Product | 
| ExtendedAttributes.Name (`String`) | Name | 
| ExtendedAttributes.Value (`String`) | Value | 
| FloorPrice (`Object`) | Floor pricing allows you to keep a product as Discountable but set a minimum price that it can be sold at to ensure margins.  Will default to 0 and cannot be negative. See {{support_FloorPricing}} for more details. | 
| GlCostOfSalesAccountNumber (`String`) | Account number for Cost of Sales, see {{support_GLAccountSetup}} for more information | 
| GlInventoryAccountNumber (`String`) | Account number for Inventory, see {{support_GLAccountSetup}} for more information | 
| GlSalesAccountNumber (`String`) | Account number for Sales, see {{support_GLAccountSetup}} for more information | 
| IgnoreAutomaticTaxAddition (`Boolean`) | Ensures that taxes will not be added as part of the automatic tax process. Defaults to false | 
| LongDescription (`String`) | Long description | 
| PricingLocations (`Array[<a href='/api/epc/#nonstockedproductpricinglocation'>NonStockedProductPricingLocation</a>]`) | Pricing for Locations | 
| PricingMethod (`String`) | See [PricingMethods](#pricingmethods) for a list of acceptable values. Defaults to Fixed | 
| ProductLabel (`String`) | Defaults to first 30 characters of the ProductName, but can be edited | 
| ProductTypeId (`Integer`) | Identifier for a [ProductType](#producttype) | 
| Serialized (`Boolean`) | A flag to indicate if this Product is serialized, meaning a serial number must be entered when the Product is purchased. Defaults to false. Once selected, this cannot be changed. | 
| SerialNumberPromptText (`String`) | Text displayed when user is prompted to enter a serial number for the product | 
| ShortDescription (`String`) | Short description | 
| SourceRowNumber (`Integer`) | If this product was imported from a spreadsheet, the row location of the product in the spreadsheet | 
| VendorSku (`String`) | Vendor sku | 
| *RefundLink (`String`)* | *Reserved for internal use* | |
| *ProductLink (`String`)* | *Reserved for internal use* | |

## NonStockedProductPricing

{{important}}When a new NonStockedProductPricing is created, the <b>default pricing</b> values will be used for any properties that are not supplied. However, for any subsequent updates, each NonStockedProductPricing will have to be changed individually as the change(s) to <b>default pricing fields</b> will not propagate.{{end}}

| Name | Description |
|:-----|:------------|
| AllowReturns (`Boolean`) | A flag to indicate if the Product can be returned. Defaults to true | 
| CarrierPrice (`Object`) | Carrier price | 
| Cost (`Object`) | Cost of the Item from the Vendor. Defaults to 0 | 
| Discountable (`Boolean`) | A flag to indicate if the Product can be discounted. Defaults to true | 
| FloorPrice (`Object`) | Floor pricing allows you to keep a product as Discountable but set a minimum price that it can be sold at to ensure margins.  Will default to 0 and cannot be negative. See {{support_FloorPricing}} for more details. | 
| ForSale (`Boolean`) | A flag to indicate if the product can be sold. Defaults to true | 
| InvoiceComments (`String`) | Comments that will be printed on the invoice every time the Product is sold | 
| Margin (`Object`) | Margin automatically applied to this Product | 
| Price (`Object`) | Company-wide default unit price, must be greater then 0 | 
| RefundPeriod (`Integer`) | Number of days before the Product can be refunded, in days | 
| ShowOnInvoice (`Boolean`) | A flag to indicate if the price should be shown on the invoice | 
| StoreInStorePrice (`Object`) | Store in Store price. See {{support_StoreInStore}} for more information | 

## NonStockedProductPricingLocation

| Name | Description |
|:-----|:------------|
| AllowReturns (`Boolean`) | A flag to indicate if the Product can be returned. Defaults to true | 
| CarrierPrice (`Object`) | Carrier price | 
| Cost (`Object`) | Cost of the Item from the Vendor. Defaults to 0 | 
| Discountable (`Boolean`) | A flag to indicate if the Product can be discounted. Defaults to true | 
| FloorPrice (`Object`) | Floor pricing allows you to keep a product as Discountable but set a minimum price that it can be sold at to ensure margins.  Will default to 0 and cannot be negative. See {{support_FloorPricing}} for more details. | 
| ForSale (`Boolean`) | A flag to indicate if the product can be sold. Defaults to true | 
| InvoiceComments (`String`) | Comments that will be printed on the invoice every time the Product is sold | 
| Margin (`Object`) | Margin automatically applied to this Product | 
| Price (`Object`) | Company-wide default unit price, must be greater then 0 | 
| SalePrice (`Object`) | Sale price, will override Floor Price if it is lower. Defaults to 0 | 
| SaleBeginDate (`DateTime`) | Sale begin date | 
| SaleEndDate (`DateTime`) | Sale end date | 
| ShowOnInvoice (`Boolean`) | A flag to indicate if the price should be shown on the invoice | 
| RefundPeriod (`Integer`) | Number of days before the Product can be refunded, in days | 
| StoreInStorePrice (`Object`) | Store in Store price. See {{support_StoreInStore}} for more information | 
| TargetLocationName (`String`) | Applies pricing to a single location, or all locations in a company, channel, region or district | 
| TargetLocationType (`String`) | Where to apply the pricing, see [TargetLocations](#targetlocations) for a list of acceptable values | 

## VendorRebateProduct

For more information about Vendor Rebates, see {{support_VendorRebates}}.

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| VendorName (`String`) | Vendor name | 
| ProductName (`String`) | Name | 
| CategoryName (`String`) | Name of the Category/Classification for this Product | 
| ClassificationTreeId (`Integer`) | Identifier for a {{ClassificationTree}} | 
| DefaultPricing (`<a href='/api/epc/#nonstockedproductpricing'>NonStockedProductPricing</a>`) | Default pricing information | 
| Enabled (`Boolean`) | A flag to indicate if this Product is Enabled. Defaults to true | 
| EnforcedTrackingNumberLength (`Integer`) | A value that restricts tracking number length | 
| ExtendedAttributes (`Array[object]`) | Additional attributes to store with the Product | 
| ExtendedAttributes.Name (`String`) | Name | 
| ExtendedAttributes.Value (`String`) | Value | 
| GlCostOfSalesAccountNumber (`String`) | Account number for Cost of Sales, see {{support_GLAccountSetup}} for more information | 
| GlInventoryAccountNumber (`String`) | Account number for Inventory, see {{support_GLAccountSetup}} for more information | 
| GlSalesAccountNumber (`String`) | Account number for Sales, see {{support_GLAccountSetup}} for more information | 
| IgnoreAutomaticTaxAddition (`Boolean`) | Ensures that taxes will not be added as part of the automatic tax process. Defaults to false | 
| LongDescription (`String`) | Long description | 
| PricingLocations (`Array[<a href='/api/epc/#nonstockedproductpricinglocation'>NonStockedProductPricingLocation</a>]`) | Pricing for Locations | 
| PricingMethod (`String`) | See [PricingMethods](#pricingmethods) for a list of acceptable values. Defaults to Fixed | 
| ProductLabel (`String`) | Defaults to first 30 characters of the ProductName, but can be edited | 
| ProductTypeId (`Integer`) | Identifier for a [ProductType](#producttype) | 
| Serialized (`Boolean`) | A flag to indicate if this Product is serialized, meaning a serial number must be entered when the Product is purchased. Defaults to false. Once selected, this cannot be changed. | 
| SerialNumberPromptText (`String`) | Text displayed when user is prompted to enter a serial number for the product | 
| ShortDescription (`String`) | Short description | 
| SourceRowNumber (`Integer`) | If this product was imported from a spreadsheet, the row location of the product in the spreadsheet | 
| VendorAccountName (`String`) | Vendor name | 
| VendorSku (`String`) | Vendor sku | 
| *RefundLink (`String`)* | *Reserved for internal use* | |
| *ProductLink (`String`)* | *Reserved for internal use* | |

## NonRevenueProduct

{{note}}The NonStockedProduct and NonRevenueProduct resources are identical, but will diverge in the future as different properties are added the resources{{end}}

For more information about Non-Revenue Products, see {{support_NonRevenueProducts}}

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| ProductName (`String`) | Name | 
| CategoryName (`String`) | Name of the Category/Classification for this Product | 
| ClassificationTreeId (`Integer`) | Identifier for a {{ClassificationTree}} | 
| DefaultPricing (`<a href='/api/epc/#nonstockedproductpricing'>NonStockedProductPricing</a>`) | Default pricing information | 
| Enabled (`Boolean`) | A flag to indicate if this Product is Enabled. Defaults to true | 
| EnforcedTrackingNumberLength (`Integer`) | A value that restricts tracking number length | 
| ExtendedAttributes (`Array[object]`) | Additional attributes to store with the Product | 
| ExtendedAttributes.Name (`String`) | Name | 
| ExtendedAttributes.Value (`String`) | Value | 
| FloorPrice (`Object`) | Floor pricing allows you to keep a product as Discountable but set a minimum price that it can be sold at to ensure margins.  Will default to 0 and cannot be negative. See {{support_FloorPricing}} for more details. | 
| GlCostOfSalesAccountNumber (`String`) | Account number for Cost of Sales, see {{support_GLAccountSetup}} for more information | 
| GlInventoryAccountNumber (`String`) | Account number for Inventory, see {{support_GLAccountSetup}} for more information | 
| GlSalesAccountNumber (`String`) | Account number for Sales, see {{support_GLAccountSetup}} for more information | 
| IgnoreAutomaticTaxAddition (`Boolean`) | Ensures that taxes will not be added as part of the automatic tax process. Defaults to false | 
| LongDescription (`String`) | Long description | 
| PricingLocations (`Array[<a href='/api/epc/#nonstockedproductpricinglocation'>NonStockedProductPricingLocation</a>]`) | Pricing for Locations | 
| PricingMethod (`String`) | See [PricingMethods](#pricingmethods) for a list of acceptable values. Defaults to Fixed | 
| ProductLabel (`String`) | Defaults to first 30 characters of the ProductName, but can be edited | 
| ProductTypeId (`Integer`) | Identifier for a [ProductType](#producttype) | 
| Serialized (`Boolean`) | A flag to indicate if this Product is serialized, meaning a serial number must be entered when the Product is purchased. Defaults to false. Once selected, this cannot be changed. | 
| SerialNumberPromptText (`String`) | Text displayed when user is prompted to enter a serial number for the product | 
| ShortDescription (`String`) | Short description | 
| SourceRowNumber (`Integer`) | If this product was imported from a spreadsheet, the row location of the product in the spreadsheet | 
| VendorSku (`String`) | Vendor sku | 
| *RefundLink (`String`)* | *Reserved for internal use* | |
| *ProductLink (`String`)* | *Reserved for internal use* | |

## LocationVendor

| Name | Description |
|:-----|:------------|
| Cost (`Object`) | Vendor cost. Defaults to 0 | 
| DiscontinuedDate (`DateTime`) | Date the Product will no longer be sold, in UTC | 
| DoNotOrder (`Boolean`) | A flag to indicate the Product can not be ordered from this Location. Defaults to false | 
| EndOfLife (`DateTime`) | Date for the Product as appropriate | 
| SpecialOrder (`Boolean`) | A flag to indicate that the Product is a special order. Defaults to false | 
| TargetLocationName (`String`) | Applies pricing to a single location, or all locations in a company, channel, region or district | 
| TargetLocationType (`String`) | Where to apply the pricing, see [TargetLocations](#targetlocations) for a list of acceptable values | 
| VendorName (`String`) | Vendor name | 
| WriteOff (`Boolean`) | A flag to indicate that the Product is a write-off. Defaults to false | 

## Vendor

| Name | Description |
|:-----|:------------|
| Cost (`Object`) | Vendor cost. Defaults to 0 | 
| DiscontinuedDate (`DateTime`) | Date the Product will no longer be sold, in UTC | 
| DoNotOrder (`Boolean`) | A flag to indicate the Product can not be ordered from this Location. Defaults to false | 
| EndOfLife (`DateTime`) | Date for the Product as appropriate | 
| SpecialOrder (`Boolean`) | A flag to indicate that the Product is a special order. Defaults to false | 
| VendorName (`String`) | Vendor name | 
| VendorSku (`String`) | Vendor sku | 
| WriteOff (`Boolean`) | A flag to indicate that the Product is a write-off. Defaults to false | 


## BatchStatus

| Name | Description |
|:-----|:------------|
| BatchId (`Integer`) | Identifier of the Batch | 
| CompanyId (`Integer`) | Identifier for a {{Company}} | 
| DateCreated (`DateTime`) | Date this Batch was created | 
| FailedCount (`Integer`) | Number of products that failled to process | 
| PendingCount (`Integer`) | Number of products pending processing | 
| Products (`Array[<a href='/api/epc/#productstatus'>ProductStatus</a>]`) | Product statuses | 
| SourceFileName (`String`) | Name of a spreadsheet, if this batch was created from an import | 
| StatusCode (`Integer`) | Status of the Batch, see [BatchStatusCode](#batchstatuscode) for a list of possible values | 
| StatusName (`String`) | Name of the associated BatchStatus | 
| SuccessfulCount (`Integer`) | Number of products successfully processed | 
| TotalProductCount (`Integer`) | Total number of Products in the Batch | 

## ProductStatus

| Name | Description |
|:-----|:------------|
| ProductName (`String`) | Product name | 
| SourceRowNumber (`Integer`) | If this product was imported from a spreadsheet, the row location of the product in the spreadsheet | 
| StatusCode (`Integer`) | Status of the import, see [StatusCode](#statuscode) for a list of possible values | 
| StatusName (`String`) | Name of the associated StatusCode | 
| ErrorMessage (`String`) | Error message | 






## Enumerations

### PricingMethod

For more information about pricing methods, see {{support_RegularProducts}}.

| Name |
|:-----|
| Fixed |
| Margin |

### BatchStatusCode

| Id | Name | Description |
|:---|:-----|:------------|
| 0 | Pending | The batch has not yet been imported |
| 1 | Ready | The batch has not yet been imported |
| 2 | InProgress | The import is in progress |
| 3 | Completed | The batch has been processed. Some products may have failed or all may have succeeded |
| 4 | Cancelled | The batch was cancelled |

### ProductStatusCode

| Id | Name | Description |
|:---|:-----|:------------|
| 0 | Pending | The Product has not yet been processed |
| 1 | Processed | The Product was imported successfully |
| 2 | Error | The Product encountered an error during import |

### ProductType

| Id | Name | 
|:---|:-----|
| 0 | RegularProduct |
| 1 | VendorRebateProduct |
| 2 | NonStockedProduct |
| 4 | NonRevenueProduct |

### TargetLocations

| Name | Locations affected |
|:-----|:-------------------|
| All | All locations in Company |
| ChannelName | Locations in channel specified by channel name |
| DistrictName | Locations in district specified by district name |
| RegionName | Locations in region specified by region name |
| StoreName | Location specified by store name |


# Requests



## Bulk Importing Products to RQ



> Definition

```
POST /companies({CompanyId})/products
```

> Example Request


<pre class="highlight javascript"><code>POST /companies(1)/products
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code></pre>

<pre class="highlight shell"><code>
curl -X POST "https://platformepcdemo.iqmetrix.net/v1/companies(1)/products" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "RegularProducts": [
        {
            "Barcodes": [
                "BARCODE123"
            ],
            "ProductName": "iPhone 4S 16GB White",
            "CategoryName": "Products > Phones > Smartphones",
            "ClassificationTreeId": 1,
            "DaysKeptInStock": 10,
            "DefaultPricingAndPurchasing": {
                "AllowReturns": true,
                "Discountable": true,
                "FloorPrice": 0,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "LockMinMaxed": true,
                "Margin": 1,
                "MaximumQuantity": 10,
                "MinimumQuantity": 1,
                "MsrpAmount": 499.99,
                "MsrpCurrencyCode": "USD",
                "Price": 499.99,
                "PrimaryVendorName": "Apple",
                "RefundPeriod": 10,
                "RefundToUsed": false,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
            },
            "Enabled": true,
            "EnforcedTrackingNumberLength": 50,
            "ExtendedAttributes": [
                {
                    "Name": "ProductId",
                    "Value": "66"
                }
            ],
            "GlCostOfSalesAccountNumber": "1001",
            "GlInventoryAccountNumber": "1002",
            "GlInventoryCorrectionsAccountNumber": "1001",
            "GlSalesAccountNumber": "1003",
            "IgnoreAutomaticTaxAddition": false,
            "LocationVendors": [
                {
                    "Cost": 99.99,
                    "DiscontinuedDate": "2016-01-01T12:00:00.000",
                    "DoNotOrder": false,
                    "EndOfLife": "2016-01-01T12:00:00.000",
                    "SpecialOrder": false,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName",
                    "VendorName": "SampleVendor",
                    "WriteOff": false
                }
            ],
            "LongDescription": "The iPhone 4S is a gradualstep over the iPhone 4.",
            "ManufacturerName": "Apple",
            "ManufacturerSku": "ABC123",
            "Model": "iPhone 6",
            "PricingAndPurchasingLocations": [
                {
                    "AllowReturns": true,
                    "Discountable": true,
                    "FloorPrice": 0,
                    "ForSale": true,
                    "InvoiceComments": "Invoice comment",
                    "LockMinMaxed": true,
                    "Margin": 1,
                    "MaximumQuantity": 10,
                    "MinimumQuantity": 1,
                    "MsrpAmount": 499.99,
                    "MsrpCurrencyCode": "USD",
                    "Price": 499.99,
                    "PrimaryVendorName": "Apple",
                    "RefundPeriod": 10,
                    "RefundToUsed": false,
                    "SaleBeginDate": "2015-10-14T12:00:00.000",
                    "SaleEndDate": "2015-10-18T12:00:00.000",
                    "SalePrice": 399.99,
                    "ShowOnInvoice": true,
                    "StoreInStorePrice": 399.99,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName"
                }
            ],
            "PricingMethod": "Fixed",
            "ProductLabel": "iPhone 4S 16GB White",
            "ReleaseDate": "2011-10-14T12:00:00.000",
            "Serialized": true,
            "SerialNumberPromptText": "Serial prompt text here",
            "ShortDescription": "Better than the iPhone 3G",
            "Vendors": [
                {
                    "Cost": 99.99,
                    "DiscontinuedDate": "2016-01-01T12:00:00.000",
                    "DoNotOrder": false,
                    "EndOfLife": "2016-01-01T12:00:00.000",
                    "SpecialOrder": false,
                    "VendorName": "SampleVendor",
                    "VendorSku": "DEF987",
                    "WriteOff": false
                }
            ],
            "WarehouseLocation": "Cornwall"
        }
    ],
    "NonStockedProducts": [
        {
            "ProductName": "Prepaid Rate Plan",
            "CategoryName": "Rate Plans > Rate Plans",
            "ClassificationTreeId": 1,
            "DefaultPricing": {
                "AllowReturns": false,
                "CarrierPrice": 0,
                "Cost": 0,
                "Discountable": false,
                "FloorPrice": 0,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "Margin": 0,
                "Price": 499.99,
                "RefundPeriod": null,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
            },
            "Enabled": true,
            "EnforcedTrackingNumberLength": 50,
            "ExtendedAttributes": [
                {
                    "Name": "ProductId",
                    "Value": "66"
                }
            ],
            "FloorPrice": 0,
            "GlCostOfSalesAccountNumber": "1001",
            "GlInventoryAccountNumber": "1002",
            "GlSalesAccountNumber": "1003",
            "IgnoreAutomaticTaxAddition": true,
            "LongDescription": "Prepaid plan forpeople on the go",
            "PricingLocations": [
                {
                    "AllowReturns": false,
                    "CarrierPrice": 0,
                    "Cost": 0,
                    "Discountable": false,
                    "FloorPrice": 0,
                    "ForSale": true,
                    "InvoiceComments": "Invoice comment",
                    "Margin": 0,
                    "Price": 499.99,
                    "SalePrice": 0,
                    "SaleBeginDate": "null",
                    "SaleEndDate": "null",
                    "ShowOnInvoice": true,
                    "RefundPeriod": null,
                    "StoreInStorePrice": 399.99,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName"
                }
            ],
            "PricingMethod": "Fixed",
            "ProductLabel": "Prepaid Rate Plan",
            "Serialized": false,
            "SerialNumberPromptText": "null",
            "ShortDescription": "Prepaid plan",
            "VendorSku": "DEF987"
        }
    ],
    "NonRevenueProducts": [
        {
            "ProductName": "Recycling Fee",
            "CategoryName": "Misc > Misc. Fees",
            "ClassificationTreeId": 1,
            "DefaultPricing": {
                "AllowReturns": false,
                "CarrierPrice": 0,
                "Cost": 0,
                "Discountable": false,
                "FloorPrice": 0,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "Margin": 0,
                "Price": 499.99,
                "RefundPeriod": null,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
            },
            "Enabled": true,
            "EnforcedTrackingNumberLength": 50,
            "ExtendedAttributes": [
                {
                    "Name": "ProductId",
                    "Value": "66"
                }
            ],
            "FloorPrice": 0,
            "GlCostOfSalesAccountNumber": "1001",
            "GlInventoryAccountNumber": "1002",
            "GlSalesAccountNumber": "1003",
            "IgnoreAutomaticTaxAddition": false,
            "LongDescription": "Recycling fee to disposeof old handset",
            "PricingLocations": [
                {
                    "AllowReturns": false,
                    "CarrierPrice": 0,
                    "Cost": 0,
                    "Discountable": false,
                    "FloorPrice": 0,
                    "ForSale": true,
                    "InvoiceComments": "Invoice comment",
                    "Margin": 0,
                    "Price": 499.99,
                    "SalePrice": 0,
                    "SaleBeginDate": "null",
                    "SaleEndDate": "null",
                    "ShowOnInvoice": true,
                    "RefundPeriod": null,
                    "StoreInStorePrice": 399.99,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName"
                }
            ],
            "PricingMethod": "Fixed",
            "ProductLabel": "Recycling Fee",
            "Serialized": true,
            "SerialNumberPromptText": "Serial prompt text here",
            "ShortDescription": "Recycling fee",
            "VendorSku": "DEF987"
        }
    ],
    "VendorRebateProducts": [
        {
            "VendorName": "SampleVendor",
            "ProductName": "2 YR New Act",
            "CategoryName": "Rate Plans > Rate Plan Rebates",
            "ClassificationTreeId": 1,
            "DefaultPricing": {
                "AllowReturns": false,
                "CarrierPrice": 0,
                "Cost": 0,
                "Discountable": false,
                "FloorPrice": 0,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "Margin": 0,
                "Price": 499.99,
                "RefundPeriod": null,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
            },
            "Enabled": true,
            "EnforcedTrackingNumberLength": 50,
            "ExtendedAttributes": [
                {
                    "Name": "ProductId",
                    "Value": "66"
                }
            ],
            "GlCostOfSalesAccountNumber": "1001",
            "GlInventoryAccountNumber": "1002",
            "GlSalesAccountNumber": "1003",
            "IgnoreAutomaticTaxAddition": false,
            "LongDescription": "Rebate on 2 year actiations",
            "PricingLocations": [
                {
                    "AllowReturns": false,
                    "CarrierPrice": 0,
                    "Cost": 0,
                    "Discountable": false,
                    "FloorPrice": 0,
                    "ForSale": true,
                    "InvoiceComments": "Invoice comment",
                    "Margin": 0,
                    "Price": 499.99,
                    "SalePrice": 0,
                    "SaleBeginDate": "null",
                    "SaleEndDate": "null",
                    "ShowOnInvoice": true,
                    "RefundPeriod": null,
                    "StoreInStorePrice": 399.99,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName"
                }
            ],
            "PricingMethod": "Fixed",
            "ProductLabel": "2 YR New Act",
            "Serialized": true,
            "SerialNumberPromptText": "Serial prompt text here",
            "ShortDescription": "2 yr rebate",
            "VendorAccountName": "Verizon",
            "VendorSku": "DEF987"
        }
    ]
}'</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse BulkImportingProductsToRq()
{
    var client = new RestClient("https://platformepcdemo.iqmetrix.net/v1/companies(1)/products");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"RegularProducts\":[{\"Barcodes\":[\"BARCODE123\"],\"ProductName\":\"iPhone 4S 16GB White\",\"CategoryName\":\"Products > Phones > Smartphones\",\"ClassificationTreeId\":1,\"DaysKeptInStock\":10,\"DefaultPricingAndPurchasing\":{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlInventoryCorrectionsAccountNumber\":\"1001\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LocationVendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\",\"VendorName\":\"SampleVendor\",\"WriteOff\":false}],\"LongDescription\":\"The iPhone 4S is a gradualstep over the iPhone 4.\",\"ManufacturerName\":\"Apple\",\"ManufacturerSku\":\"ABC123\",\"Model\":\"iPhone 6\",\"PricingAndPurchasingLocations\":[{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"SaleBeginDate\":\"2015-10-14T12:00:00.000\",\"SaleEndDate\":\"2015-10-18T12:00:00.000\",\"SalePrice\":399.99,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"iPhone 4S 16GB White\",\"ReleaseDate\":\"2011-10-14T12:00:00.000\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Better than the iPhone 3G\",\"Vendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"VendorName\":\"SampleVendor\",\"VendorSku\":\"DEF987\",\"WriteOff\":false}],\"WarehouseLocation\":\"Cornwall\"}],\"NonStockedProducts\":[{\"ProductName\":\"Prepaid Rate Plan\",\"CategoryName\":\"Rate Plans > Rate Plans\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"FloorPrice\":0,\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":true,\"LongDescription\":\"Prepaid plan forpeople on the go\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Prepaid Rate Plan\",\"Serialized\":false,\"SerialNumberPromptText\":\"null\",\"ShortDescription\":\"Prepaid plan\",\"VendorSku\":\"DEF987\"}],\"NonRevenueProducts\":[{\"ProductName\":\"Recycling Fee\",\"CategoryName\":\"Misc > Misc. Fees\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"FloorPrice\":0,\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Recycling fee to disposeof old handset\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Recycling Fee\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Recycling fee\",\"VendorSku\":\"DEF987\"}],\"VendorRebateProducts\":[{\"VendorName\":\"SampleVendor\",\"ProductName\":\"2 YR New Act\",\"CategoryName\":\"Rate Plans > Rate Plan Rebates\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Rebate on 2 year actiations\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"2 YR New Act\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"2 yr rebate\",\"VendorAccountName\":\"Verizon\",\"VendorSku\":\"DEF987\"}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>


<pre class="highlight java"><code>
import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse BulkImportingProductsToRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://platformepcdemo.iqmetrix.net/v1/companies(1)/products");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"RegularProducts\":[{\"Barcodes\":[\"BARCODE123\"],\"ProductName\":\"iPhone 4S 16GB White\",\"CategoryName\":\"Products > Phones > Smartphones\",\"ClassificationTreeId\":1,\"DaysKeptInStock\":10,\"DefaultPricingAndPurchasing\":{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlInventoryCorrectionsAccountNumber\":\"1001\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LocationVendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\",\"VendorName\":\"SampleVendor\",\"WriteOff\":false}],\"LongDescription\":\"The iPhone 4S is a gradualstep over the iPhone 4.\",\"ManufacturerName\":\"Apple\",\"ManufacturerSku\":\"ABC123\",\"Model\":\"iPhone 6\",\"PricingAndPurchasingLocations\":[{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"SaleBeginDate\":\"2015-10-14T12:00:00.000\",\"SaleEndDate\":\"2015-10-18T12:00:00.000\",\"SalePrice\":399.99,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"iPhone 4S 16GB White\",\"ReleaseDate\":\"2011-10-14T12:00:00.000\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Better than the iPhone 3G\",\"Vendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"VendorName\":\"SampleVendor\",\"VendorSku\":\"DEF987\",\"WriteOff\":false}],\"WarehouseLocation\":\"Cornwall\"}],\"NonStockedProducts\":[{\"ProductName\":\"Prepaid Rate Plan\",\"CategoryName\":\"Rate Plans > Rate Plans\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"FloorPrice\":0,\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":true,\"LongDescription\":\"Prepaid plan forpeople on the go\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Prepaid Rate Plan\",\"Serialized\":false,\"SerialNumberPromptText\":\"null\",\"ShortDescription\":\"Prepaid plan\",\"VendorSku\":\"DEF987\"}],\"NonRevenueProducts\":[{\"ProductName\":\"Recycling Fee\",\"CategoryName\":\"Misc > Misc. Fees\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"FloorPrice\":0,\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Recycling fee to disposeof old handset\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Recycling Fee\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Recycling fee\",\"VendorSku\":\"DEF987\"}],\"VendorRebateProducts\":[{\"VendorName\":\"SampleVendor\",\"ProductName\":\"2 YR New Act\",\"CategoryName\":\"Rate Plans > Rate Plan Rebates\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Rebate on 2 year actiations\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"2 YR New Act\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"2 yr rebate\",\"VendorAccountName\":\"Verizon\",\"VendorSku\":\"DEF987\"}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'

body = "{\"RegularProducts\":[{\"Barcodes\":[\"BARCODE123\"],\"ProductName\":\"iPhone 4S 16GB White\",\"CategoryName\":\"Products > Phones > Smartphones\",\"ClassificationTreeId\":1,\"DaysKeptInStock\":10,\"DefaultPricingAndPurchasing\":{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlInventoryCorrectionsAccountNumber\":\"1001\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LocationVendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\",\"VendorName\":\"SampleVendor\",\"WriteOff\":false}],\"LongDescription\":\"The iPhone 4S is a gradualstep over the iPhone 4.\",\"ManufacturerName\":\"Apple\",\"ManufacturerSku\":\"ABC123\",\"Model\":\"iPhone 6\",\"PricingAndPurchasingLocations\":[{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"SaleBeginDate\":\"2015-10-14T12:00:00.000\",\"SaleEndDate\":\"2015-10-18T12:00:00.000\",\"SalePrice\":399.99,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"iPhone 4S 16GB White\",\"ReleaseDate\":\"2011-10-14T12:00:00.000\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Better than the iPhone 3G\",\"Vendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"VendorName\":\"SampleVendor\",\"VendorSku\":\"DEF987\",\"WriteOff\":false}],\"WarehouseLocation\":\"Cornwall\"}],\"NonStockedProducts\":[{\"ProductName\":\"Prepaid Rate Plan\",\"CategoryName\":\"Rate Plans > Rate Plans\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"FloorPrice\":0,\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":true,\"LongDescription\":\"Prepaid plan forpeople on the go\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Prepaid Rate Plan\",\"Serialized\":false,\"SerialNumberPromptText\":\"null\",\"ShortDescription\":\"Prepaid plan\",\"VendorSku\":\"DEF987\"}],\"NonRevenueProducts\":[{\"ProductName\":\"Recycling Fee\",\"CategoryName\":\"Misc > Misc. Fees\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"FloorPrice\":0,\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Recycling fee to disposeof old handset\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Recycling Fee\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Recycling fee\",\"VendorSku\":\"DEF987\"}],\"VendorRebateProducts\":[{\"VendorName\":\"SampleVendor\",\"ProductName\":\"2 YR New Act\",\"CategoryName\":\"Rate Plans > Rate Plan Rebates\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Rebate on 2 year actiations\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"2 YR New Act\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"2 yr rebate\",\"VendorAccountName\":\"Verizon\",\"VendorSku\":\"DEF987\"}]}";

response = RestClient.post 'https://platformepcdemo.iqmetrix.net/v1/companies(1)/products', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the Company
    </li>
    </ul>



#### Request Parameters

<ul><li><code>RegularProducts</code> (Optional) </li><ul><li><code>Barcodes</code> (<strong>Required</strong>) </li><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>CategoryName</code> (<strong>Required</strong>) </li><li><code>DefaultPricingAndPurchasing</code> (<strong>Required</strong>) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>PrimaryVendorName</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>LockMinMaxed</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>MaximumQuantity</code> (Optional) </li><li><code>MinimumQuantity</code> (Optional) </li><li><code>MsrpAmount</code> (Optional) </li><li><code>MsrpCurrencyCode</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>RefundToUsed</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li></ul><li><code>ManufacturerName</code> (<strong>Required</strong>) </li><li><code>ProductLabel</code> (<strong>Required</strong>) </li><li><code>ClassificationTreeId</code> (Optional) </li><li><code>DaysKeptInStock</code> (Optional) </li><li><code>Enabled</code> (Optional) </li><li><code>EnforcedTrackingNumberLength</code> (Optional) - This value can only be set if Serialized is true</li><li><code>ExtendedAttributes</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li></ul><li><code>GlCostOfSalesAccountNumber</code> (Optional) </li><li><code>GlInventoryAccountNumber</code> (Optional) </li><li><code>GlInventoryCorrectionsAccountNumber</code> (Optional) </li><li><code>GlSalesAccountNumber</code> (Optional) </li><li><code>IgnoreAutomaticTaxAddition</code> (Optional) </li><li><code>LocationVendors</code> (Optional) </li><ul><li><code>TargetLocationType</code> (<strong>Required</strong>) </li><li><code>VendorName</code> (<strong>Required</strong>) </li><li><code>Cost</code> (Optional) </li><li><code>DiscontinuedDate</code> (Optional) </li><li><code>DoNotOrder</code> (Optional) - Defaults to false, case sensitive</li><li><code>EndOfLife</code> (Optional) </li><li><code>SpecialOrder</code> (Optional) - Defaults to false, case sensitive</li><li><code>TargetLocationName</code> (Optional) </li><li><code>WriteOff</code> (Optional) - Defaults to false, case sensitive</li></ul><li><code>LongDescription</code> (Optional) </li><li><code>ManufacturerSku</code> (Optional) </li><li><code>Model</code> (Optional) </li><li><code>PricingAndPurchasingLocations</code> (Optional) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>PrimaryVendorName</code> (<strong>Required</strong>) </li><li><code>TargetLocationType</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>LockMinMaxed</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>MaximumQuantity</code> (Optional) </li><li><code>MinimumQuantity</code> (Optional) </li><li><code>MsrpAmount</code> (Optional) </li><li><code>MsrpCurrencyCode</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>RefundToUsed</code> (Optional) </li><li><code>SaleBeginDate</code> (Optional) </li><li><code>SaleEndDate</code> (Optional) </li><li><code>SalePrice</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li><li><code>TargetLocationName</code> (Optional) </li></ul><li><code>PricingMethod</code> (Optional) </li><li><code>ReleaseDate</code> (Optional) </li><li><code>Serialized</code> (Optional) </li><li><code>SerialNumberPromptText</code> (Optional) </li><li><code>ShortDescription</code> (Optional) </li><li><code>Vendors</code> (Optional) </li><ul><li><code>VendorName</code> (<strong>Required</strong>) </li><li><code>VendorSku</code> (<strong>Required</strong>) - If provided, must be unique per Vendor</li><li><code>Cost</code> (Optional) </li><li><code>DiscontinuedDate</code> (Optional) </li><li><code>DoNotOrder</code> (Optional) - Defaults to false, case sensitive</li><li><code>EndOfLife</code> (Optional) </li><li><code>SpecialOrder</code> (Optional) - Defaults to false, case sensitive</li><li><code>WriteOff</code> (Optional) - Defaults to false, case sensitive</li></ul><li><code>WarehouseLocation</code> (Optional) </li></ul><li><code>NonStockedProducts</code> (Optional) </li><ul><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>CategoryName</code> (<strong>Required</strong>) </li><li><code>DefaultPricing</code> (<strong>Required</strong>) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li></ul><li><code>ProductLabel</code> (<strong>Required</strong>) </li><li><code>ClassificationTreeId</code> (Optional) </li><li><code>Enabled</code> (Optional) </li><li><code>EnforcedTrackingNumberLength</code> (Optional) - This value can only be set if Serialized is true</li><li><code>ExtendedAttributes</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li></ul><li><code>FloorPrice</code> (Optional) </li><li><code>GlCostOfSalesAccountNumber</code> (Optional) </li><li><code>GlInventoryAccountNumber</code> (Optional) </li><li><code>GlSalesAccountNumber</code> (Optional) </li><li><code>IgnoreAutomaticTaxAddition</code> (Optional) </li><li><code>LongDescription</code> (Optional) </li><li><code>PricingLocations</code> (Optional) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>TargetLocationType</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>SalePrice</code> (Optional) </li><li><code>SaleBeginDate</code> (Optional) </li><li><code>SaleEndDate</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li><li><code>TargetLocationName</code> (Optional) </li></ul><li><code>PricingMethod</code> (Optional) </li><li><code>Serialized</code> (Optional) </li><li><code>SerialNumberPromptText</code> (Optional) </li><li><code>ShortDescription</code> (Optional) </li><li><code>VendorSku</code> (Optional) - If provided, must be unique per Vendor</li></ul><li><code>NonRevenueProducts</code> (Optional) </li><ul><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>CategoryName</code> (<strong>Required</strong>) </li><li><code>DefaultPricing</code> (<strong>Required</strong>) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li></ul><li><code>ProductLabel</code> (<strong>Required</strong>) </li><li><code>ClassificationTreeId</code> (Optional) </li><li><code>Enabled</code> (Optional) </li><li><code>EnforcedTrackingNumberLength</code> (Optional) - This value can only be set if Serialized is true</li><li><code>ExtendedAttributes</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li></ul><li><code>FloorPrice</code> (Optional) </li><li><code>GlCostOfSalesAccountNumber</code> (Optional) </li><li><code>GlInventoryAccountNumber</code> (Optional) </li><li><code>GlSalesAccountNumber</code> (Optional) </li><li><code>IgnoreAutomaticTaxAddition</code> (Optional) </li><li><code>LongDescription</code> (Optional) </li><li><code>PricingLocations</code> (Optional) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>TargetLocationType</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>SalePrice</code> (Optional) </li><li><code>SaleBeginDate</code> (Optional) </li><li><code>SaleEndDate</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li><li><code>TargetLocationName</code> (Optional) </li></ul><li><code>PricingMethod</code> (Optional) </li><li><code>Serialized</code> (Optional) </li><li><code>SerialNumberPromptText</code> (Optional) </li><li><code>ShortDescription</code> (Optional) </li><li><code>VendorSku</code> (Optional) - If provided, must be unique per Vendor</li></ul><li><code>VendorRebateProducts</code> (Optional) </li><ul><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>CategoryName</code> (<strong>Required</strong>) </li><li><code>DefaultPricing</code> (<strong>Required</strong>) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li></ul><li><code>ProductLabel</code> (<strong>Required</strong>) </li><li><code>VendorName</code> (Optional) </li><li><code>ClassificationTreeId</code> (Optional) </li><li><code>Enabled</code> (Optional) </li><li><code>EnforcedTrackingNumberLength</code> (Optional) - This value can only be set if Serialized is true</li><li><code>ExtendedAttributes</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li></ul><li><code>GlCostOfSalesAccountNumber</code> (Optional) </li><li><code>GlInventoryAccountNumber</code> (Optional) </li><li><code>GlSalesAccountNumber</code> (Optional) </li><li><code>IgnoreAutomaticTaxAddition</code> (Optional) </li><li><code>LongDescription</code> (Optional) </li><li><code>PricingLocations</code> (Optional) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>TargetLocationType</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>SalePrice</code> (Optional) </li><li><code>SaleBeginDate</code> (Optional) </li><li><code>SaleEndDate</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li><li><code>TargetLocationName</code> (Optional) </li></ul><li><code>PricingMethod</code> (Optional) </li><li><code>Serialized</code> (Optional) </li><li><code>SerialNumberPromptText</code> (Optional) </li><li><code>ShortDescription</code> (Optional) </li><li><code>VendorAccountName</code> (Optional) </li><li><code>VendorSku</code> (Optional) - If provided, must be unique per Vendor</li></ul></ul>

<h4>Response Parameters</h4>


 <ul><li><code>Status</code> (String) - Relative endpoint of status</li><li><code>TimestampUTC</code> (Datetime) </li></ul>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "Status": "/v1/companies(21090)/batchStatus(123)",
    "TimestampUTC": "2016-11-15T16:43:15.1396674Z"
}</pre>

## Importing Regular Products into RQ



> Definition

```
POST /companies({CompanyId})/Products
```

> Example Request


<pre class="highlight javascript"><code>POST /companies(1)/Products
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code></pre>

<pre class="highlight shell"><code>
curl -X POST "https://platformepcdemo.iqmetrix.net/v1/companies(1)/Products" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "RegularProducts": [
        {
            "Barcodes": [
                "BARCODE123"
            ],
            "ProductName": "iPhone 4S 16GB White",
            "CategoryName": "Products > Phones > Smartphones",
            "ClassificationTreeId": 1,
            "DaysKeptInStock": 10,
            "DefaultPricingAndPurchasing": {
                "AllowReturns": true,
                "Discountable": true,
                "FloorPrice": 0,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "LockMinMaxed": true,
                "Margin": 1,
                "MaximumQuantity": 10,
                "MinimumQuantity": 1,
                "MsrpAmount": 499.99,
                "MsrpCurrencyCode": "USD",
                "Price": 499.99,
                "PrimaryVendorName": "Apple",
                "RefundPeriod": 10,
                "RefundToUsed": false,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
            },
            "Enabled": true,
            "EnforcedTrackingNumberLength": 50,
            "ExtendedAttributes": [
                {
                    "Name": "ProductId",
                    "Value": "66"
                }
            ],
            "GlCostOfSalesAccountNumber": "1001",
            "GlInventoryAccountNumber": "1002",
            "GlInventoryCorrectionsAccountNumber": "1001",
            "GlSalesAccountNumber": "1003",
            "IgnoreAutomaticTaxAddition": false,
            "LocationVendors": [
                {
                    "Cost": 99.99,
                    "DiscontinuedDate": "2016-01-01T12:00:00.000",
                    "DoNotOrder": false,
                    "EndOfLife": "2016-01-01T12:00:00.000",
                    "SpecialOrder": false,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName",
                    "VendorName": "SampleVendor",
                    "WriteOff": false
                }
            ],
            "LongDescription": "The iPhone 4S is a gradualstep over the iPhone 4.",
            "ManufacturerName": "Apple",
            "ManufacturerSku": "ABC123",
            "Model": "iPhone 6",
            "PricingAndPurchasingLocations": [
                {
                    "AllowReturns": true,
                    "Discountable": true,
                    "FloorPrice": 0,
                    "ForSale": true,
                    "InvoiceComments": "Invoice comment",
                    "LockMinMaxed": true,
                    "Margin": 1,
                    "MaximumQuantity": 10,
                    "MinimumQuantity": 1,
                    "MsrpAmount": 499.99,
                    "MsrpCurrencyCode": "USD",
                    "Price": 499.99,
                    "PrimaryVendorName": "Apple",
                    "RefundPeriod": 10,
                    "RefundToUsed": false,
                    "SaleBeginDate": "2015-10-14T12:00:00.000",
                    "SaleEndDate": "2015-10-18T12:00:00.000",
                    "SalePrice": 399.99,
                    "ShowOnInvoice": true,
                    "StoreInStorePrice": 399.99,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName"
                }
            ],
            "PricingMethod": "Fixed",
            "ProductLabel": "iPhone 4S 16GB White",
            "ReleaseDate": "2011-10-14T12:00:00.000",
            "Serialized": true,
            "SerialNumberPromptText": "Serial prompt text here",
            "ShortDescription": "Better than the iPhone 3G",
            "Vendors": [
                {
                    "Cost": 99.99,
                    "DiscontinuedDate": "2016-01-01T12:00:00.000",
                    "DoNotOrder": false,
                    "EndOfLife": "2016-01-01T12:00:00.000",
                    "SpecialOrder": false,
                    "VendorName": "SampleVendor",
                    "VendorSku": "DEF987",
                    "WriteOff": false
                }
            ],
            "WarehouseLocation": "Cornwall"
        }
    ]
}'</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse ImportingRegularProductsIntoRq()
{
    var client = new RestClient("https://platformepcdemo.iqmetrix.net/v1/companies(1)/Products");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"RegularProducts\":[{\"Barcodes\":[\"BARCODE123\"],\"ProductName\":\"iPhone 4S 16GB White\",\"CategoryName\":\"Products > Phones > Smartphones\",\"ClassificationTreeId\":1,\"DaysKeptInStock\":10,\"DefaultPricingAndPurchasing\":{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlInventoryCorrectionsAccountNumber\":\"1001\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LocationVendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\",\"VendorName\":\"SampleVendor\",\"WriteOff\":false}],\"LongDescription\":\"The iPhone 4S is a gradualstep over the iPhone 4.\",\"ManufacturerName\":\"Apple\",\"ManufacturerSku\":\"ABC123\",\"Model\":\"iPhone 6\",\"PricingAndPurchasingLocations\":[{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"SaleBeginDate\":\"2015-10-14T12:00:00.000\",\"SaleEndDate\":\"2015-10-18T12:00:00.000\",\"SalePrice\":399.99,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"iPhone 4S 16GB White\",\"ReleaseDate\":\"2011-10-14T12:00:00.000\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Better than the iPhone 3G\",\"Vendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"VendorName\":\"SampleVendor\",\"VendorSku\":\"DEF987\",\"WriteOff\":false}],\"WarehouseLocation\":\"Cornwall\"}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>


<pre class="highlight java"><code>
import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse ImportingRegularProductsIntoRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://platformepcdemo.iqmetrix.net/v1/companies(1)/Products");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"RegularProducts\":[{\"Barcodes\":[\"BARCODE123\"],\"ProductName\":\"iPhone 4S 16GB White\",\"CategoryName\":\"Products > Phones > Smartphones\",\"ClassificationTreeId\":1,\"DaysKeptInStock\":10,\"DefaultPricingAndPurchasing\":{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlInventoryCorrectionsAccountNumber\":\"1001\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LocationVendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\",\"VendorName\":\"SampleVendor\",\"WriteOff\":false}],\"LongDescription\":\"The iPhone 4S is a gradualstep over the iPhone 4.\",\"ManufacturerName\":\"Apple\",\"ManufacturerSku\":\"ABC123\",\"Model\":\"iPhone 6\",\"PricingAndPurchasingLocations\":[{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"SaleBeginDate\":\"2015-10-14T12:00:00.000\",\"SaleEndDate\":\"2015-10-18T12:00:00.000\",\"SalePrice\":399.99,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"iPhone 4S 16GB White\",\"ReleaseDate\":\"2011-10-14T12:00:00.000\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Better than the iPhone 3G\",\"Vendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"VendorName\":\"SampleVendor\",\"VendorSku\":\"DEF987\",\"WriteOff\":false}],\"WarehouseLocation\":\"Cornwall\"}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'

body = "{\"RegularProducts\":[{\"Barcodes\":[\"BARCODE123\"],\"ProductName\":\"iPhone 4S 16GB White\",\"CategoryName\":\"Products > Phones > Smartphones\",\"ClassificationTreeId\":1,\"DaysKeptInStock\":10,\"DefaultPricingAndPurchasing\":{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlInventoryCorrectionsAccountNumber\":\"1001\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LocationVendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\",\"VendorName\":\"SampleVendor\",\"WriteOff\":false}],\"LongDescription\":\"The iPhone 4S is a gradualstep over the iPhone 4.\",\"ManufacturerName\":\"Apple\",\"ManufacturerSku\":\"ABC123\",\"Model\":\"iPhone 6\",\"PricingAndPurchasingLocations\":[{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"SaleBeginDate\":\"2015-10-14T12:00:00.000\",\"SaleEndDate\":\"2015-10-18T12:00:00.000\",\"SalePrice\":399.99,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"iPhone 4S 16GB White\",\"ReleaseDate\":\"2011-10-14T12:00:00.000\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Better than the iPhone 3G\",\"Vendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"VendorName\":\"SampleVendor\",\"VendorSku\":\"DEF987\",\"WriteOff\":false}],\"WarehouseLocation\":\"Cornwall\"}]}";

response = RestClient.post 'https://platformepcdemo.iqmetrix.net/v1/companies(1)/Products', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the Company
    </li>
    </ul>



#### Request Parameters

<ul><li><code>RegularProducts</code> (Optional) </li><ul><li><code>Barcodes</code> (<strong>Required</strong>) </li><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>CategoryName</code> (<strong>Required</strong>) </li><li><code>DefaultPricingAndPurchasing</code> (<strong>Required</strong>) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>PrimaryVendorName</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>LockMinMaxed</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>MaximumQuantity</code> (Optional) </li><li><code>MinimumQuantity</code> (Optional) </li><li><code>MsrpAmount</code> (Optional) </li><li><code>MsrpCurrencyCode</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>RefundToUsed</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li></ul><li><code>ManufacturerName</code> (<strong>Required</strong>) </li><li><code>ProductLabel</code> (<strong>Required</strong>) </li><li><code>ClassificationTreeId</code> (Optional) </li><li><code>DaysKeptInStock</code> (Optional) </li><li><code>Enabled</code> (Optional) </li><li><code>EnforcedTrackingNumberLength</code> (Optional) - This value can only be set if Serialized is true</li><li><code>ExtendedAttributes</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li></ul><li><code>GlCostOfSalesAccountNumber</code> (Optional) </li><li><code>GlInventoryAccountNumber</code> (Optional) </li><li><code>GlInventoryCorrectionsAccountNumber</code> (Optional) </li><li><code>GlSalesAccountNumber</code> (Optional) </li><li><code>IgnoreAutomaticTaxAddition</code> (Optional) </li><li><code>LocationVendors</code> (Optional) </li><ul><li><code>TargetLocationType</code> (<strong>Required</strong>) </li><li><code>VendorName</code> (<strong>Required</strong>) </li><li><code>Cost</code> (Optional) </li><li><code>DiscontinuedDate</code> (Optional) </li><li><code>DoNotOrder</code> (Optional) - Defaults to false, case sensitive</li><li><code>EndOfLife</code> (Optional) </li><li><code>SpecialOrder</code> (Optional) - Defaults to false, case sensitive</li><li><code>TargetLocationName</code> (Optional) </li><li><code>WriteOff</code> (Optional) - Defaults to false, case sensitive</li></ul><li><code>LongDescription</code> (Optional) </li><li><code>ManufacturerSku</code> (Optional) </li><li><code>Model</code> (Optional) </li><li><code>PricingAndPurchasingLocations</code> (Optional) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>PrimaryVendorName</code> (<strong>Required</strong>) </li><li><code>TargetLocationType</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>LockMinMaxed</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>MaximumQuantity</code> (Optional) </li><li><code>MinimumQuantity</code> (Optional) </li><li><code>MsrpAmount</code> (Optional) </li><li><code>MsrpCurrencyCode</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>RefundToUsed</code> (Optional) </li><li><code>SaleBeginDate</code> (Optional) </li><li><code>SaleEndDate</code> (Optional) </li><li><code>SalePrice</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li><li><code>TargetLocationName</code> (Optional) </li></ul><li><code>PricingMethod</code> (Optional) </li><li><code>ReleaseDate</code> (Optional) </li><li><code>Serialized</code> (Optional) </li><li><code>SerialNumberPromptText</code> (Optional) </li><li><code>ShortDescription</code> (Optional) </li><li><code>Vendors</code> (Optional) </li><ul><li><code>VendorName</code> (<strong>Required</strong>) </li><li><code>VendorSku</code> (<strong>Required</strong>) - If provided, must be unique per Vendor</li><li><code>Cost</code> (Optional) </li><li><code>DiscontinuedDate</code> (Optional) </li><li><code>DoNotOrder</code> (Optional) - Defaults to false, case sensitive</li><li><code>EndOfLife</code> (Optional) </li><li><code>SpecialOrder</code> (Optional) - Defaults to false, case sensitive</li><li><code>WriteOff</code> (Optional) - Defaults to false, case sensitive</li></ul><li><code>WarehouseLocation</code> (Optional) </li></ul></ul>

<h4>Response Parameters</h4>


 <ul><li><code>Status</code> (String) - Relative endpoint of status</li><li><code>TimestampUTC</code> (Datetime) </li></ul>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "Status": "/v1/companies(21090)/batchStatus(123)",
    "TimestampUTC": "2016-11-15T16:43:15.1396674Z"
}</pre>

## Importing Non-Stocked Products into RQ



> Definition

```
POST /companies({CompanyId})/products/
```

> Example Request


<pre class="highlight javascript"><code>POST /companies(1)/products/
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code></pre>

<pre class="highlight shell"><code>
curl -X POST "https://platformepcdemo.iqmetrix.net/v1/companies(1)/products/" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "NonStockedProducts": [
        {
            "ProductName": "Prepaid Rate Plan",
            "CategoryName": "Rate Plans > Rate Plans",
            "ClassificationTreeId": 1,
            "DefaultPricing": {
                "AllowReturns": false,
                "CarrierPrice": 0,
                "Cost": 0,
                "Discountable": false,
                "FloorPrice": 0,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "Margin": 0,
                "Price": 499.99,
                "RefundPeriod": null,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
            },
            "Enabled": true,
            "EnforcedTrackingNumberLength": 50,
            "ExtendedAttributes": [
                {
                    "Name": "ProductId",
                    "Value": "66"
                }
            ],
            "FloorPrice": 0,
            "GlCostOfSalesAccountNumber": "1001",
            "GlInventoryAccountNumber": "1002",
            "GlSalesAccountNumber": "1003",
            "IgnoreAutomaticTaxAddition": true,
            "LongDescription": "Prepaid plan forpeople on the go",
            "PricingLocations": [
                {
                    "AllowReturns": false,
                    "CarrierPrice": 0,
                    "Cost": 0,
                    "Discountable": false,
                    "FloorPrice": 0,
                    "ForSale": true,
                    "InvoiceComments": "Invoice comment",
                    "Margin": 0,
                    "Price": 499.99,
                    "SalePrice": 0,
                    "SaleBeginDate": "null",
                    "SaleEndDate": "null",
                    "ShowOnInvoice": true,
                    "RefundPeriod": null,
                    "StoreInStorePrice": 399.99,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName"
                }
            ],
            "PricingMethod": "Fixed",
            "ProductLabel": "Prepaid Rate Plan",
            "Serialized": false,
            "SerialNumberPromptText": "null",
            "ShortDescription": "Prepaid plan",
            "VendorSku": "DEF987"
        }
    ]
}'</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse ImportingNon-stockedProductsIntoRq()
{
    var client = new RestClient("https://platformepcdemo.iqmetrix.net/v1/companies(1)/products/");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"NonStockedProducts\":[{\"ProductName\":\"Prepaid Rate Plan\",\"CategoryName\":\"Rate Plans > Rate Plans\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"FloorPrice\":0,\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":true,\"LongDescription\":\"Prepaid plan forpeople on the go\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Prepaid Rate Plan\",\"Serialized\":false,\"SerialNumberPromptText\":\"null\",\"ShortDescription\":\"Prepaid plan\",\"VendorSku\":\"DEF987\"}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>


<pre class="highlight java"><code>
import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse ImportingNon-stockedProductsIntoRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://platformepcdemo.iqmetrix.net/v1/companies(1)/products/");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"NonStockedProducts\":[{\"ProductName\":\"Prepaid Rate Plan\",\"CategoryName\":\"Rate Plans > Rate Plans\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"FloorPrice\":0,\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":true,\"LongDescription\":\"Prepaid plan forpeople on the go\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Prepaid Rate Plan\",\"Serialized\":false,\"SerialNumberPromptText\":\"null\",\"ShortDescription\":\"Prepaid plan\",\"VendorSku\":\"DEF987\"}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'

body = "{\"NonStockedProducts\":[{\"ProductName\":\"Prepaid Rate Plan\",\"CategoryName\":\"Rate Plans > Rate Plans\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"FloorPrice\":0,\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":true,\"LongDescription\":\"Prepaid plan forpeople on the go\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Prepaid Rate Plan\",\"Serialized\":false,\"SerialNumberPromptText\":\"null\",\"ShortDescription\":\"Prepaid plan\",\"VendorSku\":\"DEF987\"}]}";

response = RestClient.post 'https://platformepcdemo.iqmetrix.net/v1/companies(1)/products/', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the Company
    </li>
    </ul>



#### Request Parameters

<ul><li><code>NonStockedProducts</code> (Optional) </li><ul><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>CategoryName</code> (<strong>Required</strong>) </li><li><code>DefaultPricing</code> (<strong>Required</strong>) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li></ul><li><code>ProductLabel</code> (<strong>Required</strong>) </li><li><code>ClassificationTreeId</code> (Optional) </li><li><code>Enabled</code> (Optional) </li><li><code>EnforcedTrackingNumberLength</code> (Optional) - This value can only be set if Serialized is true</li><li><code>ExtendedAttributes</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li></ul><li><code>FloorPrice</code> (Optional) </li><li><code>GlCostOfSalesAccountNumber</code> (Optional) </li><li><code>GlInventoryAccountNumber</code> (Optional) </li><li><code>GlSalesAccountNumber</code> (Optional) </li><li><code>IgnoreAutomaticTaxAddition</code> (Optional) </li><li><code>LongDescription</code> (Optional) </li><li><code>PricingLocations</code> (Optional) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>TargetLocationType</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>SalePrice</code> (Optional) </li><li><code>SaleBeginDate</code> (Optional) </li><li><code>SaleEndDate</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li><li><code>TargetLocationName</code> (Optional) </li></ul><li><code>PricingMethod</code> (Optional) </li><li><code>Serialized</code> (Optional) </li><li><code>SerialNumberPromptText</code> (Optional) </li><li><code>ShortDescription</code> (Optional) </li><li><code>VendorSku</code> (Optional) - If provided, must be unique per Vendor</li></ul></ul>

<h4>Response Parameters</h4>


 <ul><li><code>Status</code> (String) - Relative endpoint of status</li><li><code>TimestampUTC</code> (Datetime) </li></ul>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "Status": "/v1/companies(21090)/batchStatus(123)",
    "TimestampUTC": "2016-11-15T16:43:15.1396674Z"
}</pre>

## Importing Non-Revenue Products into RQ



> Definition

```
POST /companies({CompanyId})/Products/
```

> Example Request


<pre class="highlight javascript"><code>POST /companies(1)/Products/
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code></pre>

<pre class="highlight shell"><code>
curl -X POST "https://platformepcdemo.iqmetrix.net/v1/companies(1)/Products/" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "NonRevenueProducts": [
        {
            "ProductName": "Recycling Fee",
            "CategoryName": "Misc > Misc. Fees",
            "ClassificationTreeId": 1,
            "DefaultPricing": {
                "AllowReturns": false,
                "CarrierPrice": 0,
                "Cost": 0,
                "Discountable": false,
                "FloorPrice": 0,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "Margin": 0,
                "Price": 499.99,
                "RefundPeriod": null,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
            },
            "Enabled": true,
            "EnforcedTrackingNumberLength": 50,
            "ExtendedAttributes": [
                {
                    "Name": "ProductId",
                    "Value": "66"
                }
            ],
            "FloorPrice": 0,
            "GlCostOfSalesAccountNumber": "1001",
            "GlInventoryAccountNumber": "1002",
            "GlSalesAccountNumber": "1003",
            "IgnoreAutomaticTaxAddition": false,
            "LongDescription": "Recycling fee to disposeof old handset",
            "PricingLocations": [
                {
                    "AllowReturns": false,
                    "CarrierPrice": 0,
                    "Cost": 0,
                    "Discountable": false,
                    "FloorPrice": 0,
                    "ForSale": true,
                    "InvoiceComments": "Invoice comment",
                    "Margin": 0,
                    "Price": 499.99,
                    "SalePrice": 0,
                    "SaleBeginDate": "null",
                    "SaleEndDate": "null",
                    "ShowOnInvoice": true,
                    "RefundPeriod": null,
                    "StoreInStorePrice": 399.99,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName"
                }
            ],
            "PricingMethod": "Fixed",
            "ProductLabel": "Recycling Fee",
            "Serialized": true,
            "SerialNumberPromptText": "Serial prompt text here",
            "ShortDescription": "Recycling fee",
            "VendorSku": "DEF987"
        }
    ]
}'</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse ImportingNon-revenueProductsIntoRq()
{
    var client = new RestClient("https://platformepcdemo.iqmetrix.net/v1/companies(1)/Products/");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"NonRevenueProducts\":[{\"ProductName\":\"Recycling Fee\",\"CategoryName\":\"Misc > Misc. Fees\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"FloorPrice\":0,\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Recycling fee to disposeof old handset\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Recycling Fee\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Recycling fee\",\"VendorSku\":\"DEF987\"}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>


<pre class="highlight java"><code>
import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse ImportingNon-revenueProductsIntoRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://platformepcdemo.iqmetrix.net/v1/companies(1)/Products/");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"NonRevenueProducts\":[{\"ProductName\":\"Recycling Fee\",\"CategoryName\":\"Misc > Misc. Fees\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"FloorPrice\":0,\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Recycling fee to disposeof old handset\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Recycling Fee\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Recycling fee\",\"VendorSku\":\"DEF987\"}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'

body = "{\"NonRevenueProducts\":[{\"ProductName\":\"Recycling Fee\",\"CategoryName\":\"Misc > Misc. Fees\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"FloorPrice\":0,\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Recycling fee to disposeof old handset\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Recycling Fee\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Recycling fee\",\"VendorSku\":\"DEF987\"}]}";

response = RestClient.post 'https://platformepcdemo.iqmetrix.net/v1/companies(1)/Products/', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the Company
    </li>
    </ul>



#### Request Parameters

<ul><li><code>NonRevenueProducts</code> (Optional) </li><ul><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>CategoryName</code> (<strong>Required</strong>) </li><li><code>DefaultPricing</code> (<strong>Required</strong>) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li></ul><li><code>ProductLabel</code> (<strong>Required</strong>) </li><li><code>ClassificationTreeId</code> (Optional) </li><li><code>Enabled</code> (Optional) </li><li><code>EnforcedTrackingNumberLength</code> (Optional) - This value can only be set if Serialized is true</li><li><code>ExtendedAttributes</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li></ul><li><code>FloorPrice</code> (Optional) </li><li><code>GlCostOfSalesAccountNumber</code> (Optional) </li><li><code>GlInventoryAccountNumber</code> (Optional) </li><li><code>GlSalesAccountNumber</code> (Optional) </li><li><code>IgnoreAutomaticTaxAddition</code> (Optional) </li><li><code>LongDescription</code> (Optional) </li><li><code>PricingLocations</code> (Optional) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>TargetLocationType</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>SalePrice</code> (Optional) </li><li><code>SaleBeginDate</code> (Optional) </li><li><code>SaleEndDate</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li><li><code>TargetLocationName</code> (Optional) </li></ul><li><code>PricingMethod</code> (Optional) </li><li><code>Serialized</code> (Optional) </li><li><code>SerialNumberPromptText</code> (Optional) </li><li><code>ShortDescription</code> (Optional) </li><li><code>VendorSku</code> (Optional) - If provided, must be unique per Vendor</li></ul></ul>

<h4>Response Parameters</h4>


 <ul><li><code>Status</code> (String) - Relative endpoint of status</li><li><code>TimestampUTC</code> (Datetime) </li></ul>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "Status": "/v1/companies(21090)/batchStatus(123)",
    "TimestampUTC": "2016-11-15T16:43:15.1396674Z"
}</pre>

## Importing Vendor Rebates into RQ



> Definition

```
POST /Companies({CompanyId})/products
```

> Example Request


<pre class="highlight javascript"><code>POST /Companies(1)/products
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code></pre>

<pre class="highlight shell"><code>
curl -X POST "https://platformepcdemo.iqmetrix.net/v1/Companies(1)/products" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "VendorRebateProducts": [
        {
            "VendorName": "SampleVendor",
            "ProductName": "2 YR New Act",
            "CategoryName": "Rate Plans > Rate Plan Rebates",
            "ClassificationTreeId": 1,
            "DefaultPricing": {
                "AllowReturns": false,
                "CarrierPrice": 0,
                "Cost": 0,
                "Discountable": false,
                "FloorPrice": 0,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "Margin": 0,
                "Price": 499.99,
                "RefundPeriod": null,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
            },
            "Enabled": true,
            "EnforcedTrackingNumberLength": 50,
            "ExtendedAttributes": [
                {
                    "Name": "ProductId",
                    "Value": "66"
                }
            ],
            "GlCostOfSalesAccountNumber": "1001",
            "GlInventoryAccountNumber": "1002",
            "GlSalesAccountNumber": "1003",
            "IgnoreAutomaticTaxAddition": false,
            "LongDescription": "Rebate on 2 year actiations",
            "PricingLocations": [
                {
                    "AllowReturns": false,
                    "CarrierPrice": 0,
                    "Cost": 0,
                    "Discountable": false,
                    "FloorPrice": 0,
                    "ForSale": true,
                    "InvoiceComments": "Invoice comment",
                    "Margin": 0,
                    "Price": 499.99,
                    "SalePrice": 0,
                    "SaleBeginDate": "null",
                    "SaleEndDate": "null",
                    "ShowOnInvoice": true,
                    "RefundPeriod": null,
                    "StoreInStorePrice": 399.99,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName"
                }
            ],
            "PricingMethod": "Fixed",
            "ProductLabel": "2 YR New Act",
            "Serialized": true,
            "SerialNumberPromptText": "Serial prompt text here",
            "ShortDescription": "2 yr rebate",
            "VendorAccountName": "Verizon",
            "VendorSku": "DEF987"
        }
    ]
}'</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse ImportingVendorRebatesIntoRq()
{
    var client = new RestClient("https://platformepcdemo.iqmetrix.net/v1/Companies(1)/products");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"VendorRebateProducts\":[{\"VendorName\":\"SampleVendor\",\"ProductName\":\"2 YR New Act\",\"CategoryName\":\"Rate Plans > Rate Plan Rebates\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Rebate on 2 year actiations\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"2 YR New Act\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"2 yr rebate\",\"VendorAccountName\":\"Verizon\",\"VendorSku\":\"DEF987\"}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>


<pre class="highlight java"><code>
import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse ImportingVendorRebatesIntoRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://platformepcdemo.iqmetrix.net/v1/Companies(1)/products");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"VendorRebateProducts\":[{\"VendorName\":\"SampleVendor\",\"ProductName\":\"2 YR New Act\",\"CategoryName\":\"Rate Plans > Rate Plan Rebates\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Rebate on 2 year actiations\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"2 YR New Act\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"2 yr rebate\",\"VendorAccountName\":\"Verizon\",\"VendorSku\":\"DEF987\"}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'

body = "{\"VendorRebateProducts\":[{\"VendorName\":\"SampleVendor\",\"ProductName\":\"2 YR New Act\",\"CategoryName\":\"Rate Plans > Rate Plan Rebates\",\"ClassificationTreeId\":1,\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Rebate on 2 year actiations\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":499.99,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"2 YR New Act\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"2 yr rebate\",\"VendorAccountName\":\"Verizon\",\"VendorSku\":\"DEF987\"}]}";

response = RestClient.post 'https://platformepcdemo.iqmetrix.net/v1/Companies(1)/products', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the Company
    </li>
    </ul>



#### Request Parameters

<ul><li><code>VendorRebateProducts</code> (Optional) </li><ul><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>CategoryName</code> (<strong>Required</strong>) </li><li><code>DefaultPricing</code> (<strong>Required</strong>) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li></ul><li><code>ProductLabel</code> (<strong>Required</strong>) </li><li><code>VendorName</code> (Optional) </li><li><code>ClassificationTreeId</code> (Optional) </li><li><code>Enabled</code> (Optional) </li><li><code>EnforcedTrackingNumberLength</code> (Optional) - This value can only be set if Serialized is true</li><li><code>ExtendedAttributes</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li></ul><li><code>GlCostOfSalesAccountNumber</code> (Optional) </li><li><code>GlInventoryAccountNumber</code> (Optional) </li><li><code>GlSalesAccountNumber</code> (Optional) </li><li><code>IgnoreAutomaticTaxAddition</code> (Optional) </li><li><code>LongDescription</code> (Optional) </li><li><code>PricingLocations</code> (Optional) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>TargetLocationType</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>SalePrice</code> (Optional) </li><li><code>SaleBeginDate</code> (Optional) </li><li><code>SaleEndDate</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li><li><code>TargetLocationName</code> (Optional) </li></ul><li><code>PricingMethod</code> (Optional) </li><li><code>Serialized</code> (Optional) </li><li><code>SerialNumberPromptText</code> (Optional) </li><li><code>ShortDescription</code> (Optional) </li><li><code>VendorAccountName</code> (Optional) </li><li><code>VendorSku</code> (Optional) - If provided, must be unique per Vendor</li></ul></ul>

<h4>Response Parameters</h4>


 <ul><li><code>Status</code> (String) - Relative endpoint of status</li><li><code>TimestampUTC</code> (Datetime) </li></ul>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "Status": "/v1/companies(21090)/batchStatus(123)",
    "TimestampUTC": "2016-11-15T16:43:15.1396674Z"
}</pre>

## Getting Status for a Batch

This request can be used to get the status of a request previously sent to EPC.

> Definition

```
GET /companies({CompanyId})/batchStatus({BatchId})
```

> Example Request


<pre class="highlight javascript"><code>GET /companies(1)/batchStatus(3)
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>

<pre class="highlight shell"><code>
curl -X GET "https://platformepcdemo.iqmetrix.net/v1/companies(1)/batchStatus(3)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse GettingStatusForABatch()
{
    var client = new RestClient("https://platformepcdemo.iqmetrix.net/v1/companies(1)/batchStatus(3)");
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

public static CloseableHttpResponse GettingStatusForABatch() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://platformepcdemo.iqmetrix.net/v1/companies(1)/batchStatus(3)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://platformepcdemo.iqmetrix.net/v1/companies(1)/batchStatus(3)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the Company
    </li>
    
    <li>
        <code>BatchId</code> (<strong>Required</strong>)  - Identifier of the batch, which is supplied in responses to other requests to the EPC API
    </li>
    </ul>



<h4>Response Parameters</h4>


 <a href='#batchstatus'>BatchStatus</a>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "BatchId": 3,
    "CompanyId": 14146,
    "DateCreated": "2015-09-14T22:11:16.5670000Z",
    "FailedCount": 1,
    "PendingCount": 1,
    "Products": [
        {
            "ProductName": "Galaxy Note 6",
            "SourceRowNumber": 15,
            "StatusCode": 2,
            "StatusName": "Error",
            "ErrorMessage": "No matching RQ manufacturer found with the name appple"
        }
    ],
    "SourceFileName": "Products.xslx",
    "StatusCode": 3,
    "StatusName": "Completed",
    "SuccessfulCount": 1,
    "TotalProductCount": 2
}</pre>

## Getting All Batches



> Definition

```
GET /companies({CompanyId})/batchStatus
```

> Example Request


<pre class="highlight javascript"><code>GET /companies(1)/batchStatus
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>

<pre class="highlight shell"><code>
curl -X GET "https://platformepcdemo.iqmetrix.net/v1/companies(1)/batchStatus" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>

<pre class="highlight csharp"><code>
static IRestResponse GettingAllBatches()
{
    var client = new RestClient("https://platformepcdemo.iqmetrix.net/v1/companies(1)/batchStatus");
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

public static CloseableHttpResponse GettingAllBatches() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://platformepcdemo.iqmetrix.net/v1/companies(1)/batchStatus");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://platformepcdemo.iqmetrix.net/v1/companies(1)/batchStatus', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the Company
    </li>
    </ul>



<h4>Response Parameters</h4>


 <ul><li><code>Items</code> (Array[<a href='/api/epc/#batchstatus'>BatchStatus</a>]) </li><ul><li><code>BatchId</code> (Integer) </li><li><code>CompanyId</code> (Integer) </li><li><code>DateCreated</code> (Datetime) </li><li><code>FailedCount</code> (Integer) </li><li><code>PendingCount</code> (Integer) </li><li><code>Products</code> (Array[<a href='/api/epc/#productstatus'>ProductStatus</a>]) </li><ul><li><code>ProductName</code> (String) </li><li><code>SourceRowNumber</code> (Integer) </li><li><code>StatusCode</code> (Integer) </li><li><code>StatusName</code> (String) </li><li><code>ErrorMessage</code> (String) </li></ul><li><code>SourceFileName</code> (String) </li><li><code>StatusCode</code> (Integer) </li><li><code>StatusName</code> (String) </li><li><code>SuccessfulCount</code> (Integer) </li><li><code>TotalProductCount</code> (Integer) </li></ul><li><code>MetaData</code> (Object) </li><ul><li><code>TotalResults</code> (Integer) - Number of batches</li></ul></ul>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "Items": [
        {
            "BatchId": 3,
            "CompanyId": 14146,
            "DateCreated": "2015-09-14T22:11:16.5670000Z",
            "FailedCount": 1,
            "PendingCount": 1,
            "Products": [
                {
                    "ProductName": "Galaxy Note 6",
                    "SourceRowNumber": 15,
                    "StatusCode": 2,
                    "StatusName": "Error",
                    "ErrorMessage": "No matching RQ manufacturer found with the name appple"
                }
            ],
            "SourceFileName": "Products.xslx",
            "StatusCode": 3,
            "StatusName": "Completed",
            "SuccessfulCount": 1,
            "TotalProductCount": 2
        }
    ],
    "MetaData": {
        "TotalResults": 1
    }
}</pre>
