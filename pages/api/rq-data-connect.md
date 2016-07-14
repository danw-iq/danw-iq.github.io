---
title:  RQ Data Connect
permalink: /api/RQ-Data-Connect/
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

RQ Data Connect is intended to be an alternative to database replication, and allows you to retrieve report data from your RQ database.

For all reports, the {{AccessToken_Glossary}} should be mapped to an employee in RQ.

The following RQ reports are currently supported RQ Data Connect, organized by type.

<hr/>
<div class="row">
  <span class="col-md-4 text-center">
    <span class="col-md-12">
      <h4>Commission Reports</h4>
    </span>        
    <span class="col-md-12">
      <p><a href="#getting-the-charge-back-summary-report-by-location">Charge Back Summary Report By Location</a></p>
      <p><a href="#getting-the-charge-back-summary-report-by-category">Charge Back Summary Report By Category</a></p>
      <p><a href="#getting-the-charge-back-summary-report-by-product-summary">Charge Back Summary Report By Product Summary</a></p>
      <p><a href="#getting-the-charge-back-summary-report-by-product-detail">Charge Back Summary Report By Product Detail</a></p>
      <p><a href="#getting-the-charge-back-summary-report-by-employee">Charge Back Summary Report By Employee</a></p>
      <p><a href="#getting-the-charge-back-summary-report-by-hardware-collection">Charge Back Summary Report By Hardware Collection</a></p>
      <p><a href="#getting-the-partial-charge-back-history-report">Partial Charge Back History Report</a></p>
      <p><a href="#getting-the-vendor-rebate-history-report">Vendor Rebate History Report</a></p>
      <p><a href="#getting-the-vendor-rebate-history-report-by-category-and-store">Vendor Rebate History Report By Category and Store</a></p>
      <p><a href="#getting-the-vendor-rebate-history-report-by-category-and-employees">Vendor Rebate History Report By Category and Employees</a></p>            
    </span>
  </span>  
  <span class="col-md-4 text-center">
    <span class="col-md-12">
      <h4>Inventory Reports</h4>
    </span>        
    <span class="col-md-12">
      <p><a href="#getting-the-inventory-listing-report">Inventory Listing Report</a></p>
      <p><a href="#getting-the-adjustment-history-invoice-detail-report">Adjustment History Invoice Detail Report</a></p>
      <p><a href="#getting-the-adjustment-history-product-detail-report">Adjustment History Product Detail Report</a></p>
      <p><a href="#getting-the-transfer-history-invoice-detail-report">Transfer History Invoice Detail Report</a></p>
      <p><a href="#getting-the-transfer-history-product-detail-report">Transfer History Product Detail Report</a></p>
      <p><a href="#getting-the-rma-history-invoice-report">RMA History Invoice Report</a></p>
      <p><a href="#getting-the-rma-history-product-report">RMA History Product Report</a></p>
    </span>
  </span>  
  <span class="col-md-4 text-center">
    <span class="col-md-12">
      <h4>Sales Reports</h4>
    </span>        
    <span class="col-md-12">
      <p><a href="#getting-the-product-detail-report">Product Detail Report</a></p>     
      <p><a href="#getting-the-sales-by-invoice-report">Sales By Invoice Report</a></p>
    </span>
  </span>  
</div>
<hr/>


## Endpoints

* Sandbox: <a href="https://rqdataconnectdemo.iqmetrix.net">https://rqdataconnectdemo.iqmetrix.net</a>
* Production: <a href="https://rqdataconnect.iqmetrix.net">https://rqdataconnect.iqmetrix.net</a>

## Resources

### AdjustmentHistoryInvoiceDetailReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AdjustmentType | TINYINT | Type: 0 = Not Set : 1 = Quantity : 2 = Unit Cost : 3 = New Product : 4 = Delete Product | `1` |
| Comments | VARCHAR (1000) | Comments - any comments entered regarding the adjustment; if the adjustment was done via the reconcile receiving invoices screen, it will be noted here automatically | `Comment` |
| CountSheetID | INT |  | `1` |
| CountSheetIDByStore | VARCHAR (14) | Count Sheet # - if an adjustment is generated from an inventory count sheet it will be noted here | `1` |
| DateCreated | DateTime | Adjusted On - date and time the adjustment was made | `2015-12-16T07:39:39.49` |
| EmployeeName | NVARCHAR (MAX) | Created By - name of the employee who did the adjustment | `iQmetrix User` |
| IsReceiving | BIT | Is Adjustment from receiving Products or not (adjustments made either made through receiving, or manual adjustment) | `false` |
| StoreName | NVARCHAR (MAX) | Location - where the adjustment was made | `100: My Network LLC - Anchorage` |
| TotalInvoice | MONEY | Total Invoice - total dollar amount of the adjustment invoice | `0` |
| TransactionID | INT |  | `19240` |
| TransactionIDByStore | VARCHAR (14) | Transaction # - transaction number, including corrected purchase orders | `84WEAIA1187` |

### AdjustmentHistoryProductDetailReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Comments | VARCHAR (100) | Comments - any comments entered regarding the adjustment; if an adjustment was made via the reconcile receiving invoices screen, it will automatically be entered in comments | `Comment` |
| CountSheetID | INT |  | `0` |
| CountSheetIDByStore | VARCHAR (14) | Count Sheet # - if an adjustment is generated from an inventory count sheet it will be noted here |  |
| DateCreated | DateTime | Adjusted On - date and time the adjustment was made | `2015-12-16T07:39:39.49` |
| EmployeeName | VARCHAR (51) | Created By - name of the employee who did the adjustment | `iQmetrix User` |
| IsReceiving | BIT | Is Adjustment from receiving Products or not (adjustments made either made through receiving, or manual adjustment) | `false` |
| ProductIdentifier | VARCHAR (12) | Product SKU - RQ generated SKU for the product adjusted | `ASMAAP000017` |
| ProductName | NVARCHAR (MAX) | Product Name - name of the product as it appears in inventory | `Samsung Galaxy S4` |
| Quantity | INT | Quantity - total quantity of the product adjusted | `5` |
| ReasonCode | NVARCHAR (MAX) | Reason Code - reason code selected from the drop down list at the time of adjustment | `Unexplained Shrinkage` |
| SerialNumber | VARCHAR (100) | Tracking # - tracking number, if there is one | `123457000000000` |
| StoreName | NVARCHAR (MAX) | Location - where the adjustment was made | `100: My Network LLC - Anchorage` |
| TotalCost | MONEY | Total Cost - total cost for that product calculated as Quantity X Unit Cost | `0` |
| TransactionID | INT |  | `19240` |
| TransactionIDByStore | VARCHAR (14) | Transaction # - transaction number, including corrected purchase orders | `84WEAIA1187` |
| UnitCost | MONEY | Unit Cost - purchase cost per unit; weighted average cost for non-serialized products and true cost for serialized products, see Inventory Valuation in RQ for more information | `0` |
| VendorName | NVARCHAR(MAX) |  |  |
| VendorSKU | VARCHAR(25) |  |  |

### ChargeBackSummaryReportLocationData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Quantity | INT | Qty | `1` |
| StoreID | INT |  | `6679` |
| StoreName | NVARCHAR (MAX) | Location | `100: My Network LLC - Anchorage` |
| TotalValue | MONEY | Total Value - dollar value of the charge backs | `-100` |

### ChargeBackSummaryReportCategoryData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CategoryName | NVARCHAR (MAX) | Category Name | `Financing` |
| CategoryNumber | NVARCHAR (100) |  | `10101012` |
| CategoryPath | NVARCHAR (MAX) | Category | `>> Activations >> Financing` |
| Quantity | INT | Qty | `1` |
| TotalValue | MONEY | Total Value - dollar value of the charge backs | `-100` |

### ChargeBackSummaryReportProductSummaryData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| GlobalProductID | INT |  | `9809` |
| ProductIdentifier | VARCHAR (12) | Product SKU | `ACFNRB000008` |
| ProductName | NVARCHAR (MAX) | Product Name | `Vendor Rebate` |
| Quantity | INT | Qty | `1` |
| TotalValue | MONEY | Total Value - dollar value of the charge backs | `-100` |

### ChargeBackSummaryReportProductDetailData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AssociationNumber | SMALLINT | When adding products with PAW all associated products from the sale have the same association number tied together, this value increments based on how many sales are made on that order | `7` |
| CarrierPrice | MONEY | Carrier Price - value or revenue assigned by the carrier | `0` |
| CategoryName | VARCHAR(100) | Category - inventory category to which the SKU belongs | `10101012` |
| CategoryNumber | VARCHAR(100) |  | `Financing` |
| ChargeBackCode | VARCHAR(500) | Charge Back Code - specific code for this charge back | `iQmetrix User` |
| ChargedBackByEmployee | VARCHAR(160) | Sales Person - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box | `1` |
| ChargedBackByEmployeeID | INT | Tendered By - name of the employee logged into RQ when the invoice was tendered | `Warning` |
| Comments | NVARCHAR(MAX) | Comments - any comments associated with this charge back |  |
| CustomerID | INT |  | `null` |
| CustomerName | VARCHAR(160) | Customer Name - name of the customer as entered on their profile | `No Customer` |
| DateChargedBack | DateTime | Charged Back - date of the charge back | `2016-05-20T07:57:42.417` |
| DateInvoiced | DateTime | Invoiced - date originally invoiced | `2016-05-20T06:47:10.543` |
| FullChargeBack | IDUNIQUEIDENTIFIER |  | `322aa012-82dc-4373-a7d6-82faa2b4738b` |
| FullChargeBackIDByStore | VARCHAR(30) | Charge Back # - invoice number for the charge back | `77224FC1` |
| GlobalProductID | INT |  | `9809` |
| InvoicedByEmployee | VARCHAR(160) | Tendered By - name of the employee logged into RQ when the invoice was tendered | `iQmetrix User` |
| InvoicedByEmployeeID | INT |  | `1` |
| ProductIdentifier | VARCHAR(12) | Product SKU - SKU of the product charged back | `ACFNRB000008` |
| ProductName | VARCHAR(100) | Product Name - description of the product charged back | `Vendor Rebate` |
| Quantity | INT | Qty - total count of charge backs | `1` |
| RelatedProduct | VARCHAR(100) | Related Product - related product, if applicable |  |
| RelatedProductID | INT |  | `0` |
| SaleInvoiceID | INT |  | `129036` |
| SaleInvoiceIDByStore | VARCHAR(30) | Invoice # - original invoice number | `77224IN5` |
| SerialNumber | VARCHAR(100) | Tracking Number - tracking number associated with the product charged back | `1123123132` |
| TotalValue | MONEY | Total Value - dollar value of the charge backs | `-100` |
| VendorName | NVARCHAR(MAX) |  |  |
| VendorSKU | VARCHAR(25) |  |  |

### ChargeBackSummaryReportEmployeeData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Commission | MONEY | Commission | `0` |
| InvoicedByEmployee | VARCHAR (51) | Employee | `1` |
| InvoicedByEmployeeID | INT |  | `iQmetrix User` |
| Quantity | INT | Qty | `1` |
| TotalValue | MONEY | Total Value - dollar value of the charge backs | `5` |

### ChargeBackSummaryReportHardwareCollectionData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AssociationNumber | SMALLINT | Sales Person - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box | `7` |
| CommissionRebate1 | NVARCHAR(1000) | Commission Rebate 1 - name of the first commission rebate | `SaslTel New Activation` |
| CommissionRebate2 | NVARCHAR(1000) | Commission Rebate 2 - name of the second commission rebate |  |
| CustomerID | INT | When adding products with PAW all associated products from the sale have the same association number tied together, this value increments based on how many sales are made on that order | `null` |
| CustomerName | VARCHAR(160) | Customer Name - name of the customer as entered on their profile | `No Customer` |
| DateInvoiced | DateTime | Tendered On - date tendered | `2016-05-20T06:47:10.543` |
| EquipmentRebate | NVARCHAR(1000) | Equipment Rebate - name of the equipment rebate |  |
| HardwareRebateGlobalProductID | INT |  |  |
| HardwareRebateSKU | VARCHAR(12) | Equipment Rebate SKU - SKU of the equipment rebate | `CPCCRB000104` |
| InvoicedByEmployee | VARCHAR(160) |  | `1` |
| InvoicedByEmployeeID | INT | Sales Person - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box | `iQmetrix User` |
| IsFullChargedBack1 | VARCHAR(10) | Charged Back - yes if charged back |  |
| IsFullChargedBack2 | VARCHAR(10) | Charged Back - yes if charged back |  |
| IsFullChargedBack3 | VARCHAR(10) | Charged Back - yes if charged back |  |
| PhoneNumber | VARCHAR(30) | Phone - Mobile number of the device |  |
| Price | MONEY | Price - actual invoiced price | `99.99` |
| RatePlanRebate2GlobalProductID | INT |  |  |
| RatePlanRebate2SKU | VARCHAR(12) | Commission Rebate 2 SKU - SKU of the second commission rebate |  |
| RatePlanRebateGlobalProductID | INT |  |  |
| RatePlanRebateSKU | VARCHAR(12) | Commission Rebate SKU - SKU of the first commission rebate |  |
| RelatedProduct | VARCHAR(100) | Related Product - product associated with this rebate |  |
| RelatedProductID | INT |  | `0` |
| SaleInvoiceID | INT |  |  |
| SaleInvoiceIDByStore | VARCHAR(30) | Invoice # - original invoice number |  |
| SerialNumber | VARCHAR(100) |  |  |
| StoreID | INT | Collection Date - date collected | `6679` |
| StoreName | VARCHAR(100) | Tendered At - location where tendered | `100: My Network LLC - Anchorage` |
| VendorName | NVARCHAR(MAX) |  |  |
| VendorSKU | VARCHAR(25) |  |  |

### InventoryListingReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| BarCode | VARCHAR (20) | Bar Code - any bar code(s) you have assigned to this product |  |
| BinStatus | VARCHAR(100) | Status - dependent on the Status setting in the search criteria but can be In Stock, On RMA, Transfer In, Transfer Out, On Order, On Loan or Non Sellable | `String_InStock` |
| CategoryPath | NVARCHAR (MAX) | Category - inventory category | `>> @ Activations (Price Sheets) >> AT&T Price Sheet >> Equipment` |
| ChannelName | NVARCHAR (MAX) | Channel - channel for the rows location | `English Channel` |
| DateEOL | DateTime | EOL - date this product will be End of Life | `null` |
| DiscontinuedDate | DateTime | Discontinued Date - date that this product was, or will be, discontinued | `null` |
| DistrictName | NVARCHAR (MAX) | District - district for the rows location | `Westminster` |
| DoNotOrder | BIT | Do Not Order - yes/no field noting whether this product has been marked Do Not Order | `false` |
| IsUsed | BIT | Used - this will show checked if the product is in a used status | `false` |
| ManufacturerPartNumber | VARCHAR (50) | Manufacturer SKU - SKU assigned by the manufacturer (can be anything user specifies, not necessarily from manufacturer) |  |
| NoSale | BIT | Do Not Sell - yes/no field noting whether this product has been marked Do Not Sell | `false` |
| ProductIdentifier | VARCHAR (12) | Product SKU - RQ generated SKU | `AAATAP000093` |
| ProductName | NVARCHAR (MAX) | Product Name - name of the product as it appears in the inventory | `Apple iPhone 6 Plus 16GB Space Gray - AT&T` |
| Quantity | INT | Quantity - total number in stock at the location | `1` |
| RefundPeriodLength | INT | Refund Period (days) - number of days that product can be refunded in | `null` |
| RegionName | NVARCHAR (MAX) | Region - region for the rows location | `London` |
| SerialNumber | VARCHAR(100) | Tracking # - any serial number attached to the particular product | `2342342341` |
| SpecialOrder | BIT | Special Order - yes/no field noting this product as a Special Order | `false` |
| StoreName | NVARCHAR (MAX) | Location - where the product is in stock | `100: My Network LLC - Anchorage` |
| StoreTypeName | NVARCHAR (MAX) | Location Type - location type where the product is in stock | `Costco` |
| TotalCost | MONEY | Total Cost - Quantity X Unit Cost | `699` |
| UnitCost | MONEY | Unit Cost - purchase cost per unit; weighted average cost for non-serialized products and true cost for serialized products, see Inventory Valuation in RQ for more information | `699` |
| VendorName | NVARCHAR (MAX) | Vendor - vendor from whom the individual product was purchased | `Offwire` |
| VendorPartNumber | VARCHAR (25) | Vendor SKU - SKU assigned by the vendor |  |
| WarehouseLocation | VARCHAR (100) | Warehouse Location - where the stock is located in the warehouse, if used |  |
| WriteOff | BIT | Write Off - yes/no field noting this product as a Write Off | `false` |

### PartialChargeBackHistoryReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CarrierPrice | MONEY | Carrier Price - value or revenue that a carrier assigns this feature | `0` |
| ChargeBack | MONEY | Charge Back - amount the carrier is charging back | `-1` |
| ChargeBackID | INT | Charge Back # - charge back invoice number assigned by RQ | `25` |
| ChargeBackIDByStore | VARCHAR (30) | Charge Back # - charge back invoice number assigned by RQ | `REDSTCB10` |
| DateAdjusted | DateTime | Applied Date - date the charge back was applied | `2016-05-10T00:00:00` |
| DateCreated | DateTime | Invoice Date - date of the original sale invoice | `2016-05-10T08:18:57.377` |
| EmployeeName | VARCHAR (51) | Charged Back By - name of the employee logged into RQ when the Charge Back was done | `iQmetrix User` |
| InvoiceDate | DateTime | Charge Back Date - date the charge back took effect | `2016-03-16T00:00:00` |
| InvoiceIDByStore | VARCHAR (14) | Invoice Date - date of the original sale invoice | `REDSTIN916` |
| ProductIdentifier | VARCHAR (12) | Product SKU - the RQ generated SKU | `ASBORB000098` |
| ProductName | NVARCHAR (MAX) | Product Name - description of the product as it appears in the inventory | `Apple iPhone 6 Plus 16GB Space Gray - AT&T` |
| Quantity | INT | Qty - total count of particular charged back SKUs on the charge back invoice | `1` |
| SaleInvoiceID | INT | Invoice # - invoice number assigned by RQ | `127354` |
| SerialNumber | VARCHAR (100) | Tracking # - the tracking number associated with this entry, most frequently the customers mobile number | `123` |
| TotalPrice | MONEY | Total Rebate - original rebate less the return amount | `699` |
| UnitPrice | MONEY | Unit Rebate - reconciled amount, either the actual original amount or the adjusted from reconciliation amount | `700` |
| VendorName | NVARCHAR(MAX) |  |  |
| VendorSKU | VARCHAR(25) |  |  |

### ProductDetailReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Activation_RowID | UNIQUEIDENTIFIER |  | `d3d65281-5201-4927-9bac-6f3a47ddf56b` |
| AdjustedUnitPrice | MONEY | Adjusted Unit Price - price that the product was actually sold for | `25` |
| CarrierPrice | MONEY | Carrier Price - value or revenue that a carrier assigns this feature | `null` |
| CategoryPath | NVARCHAR(MAX) | Category - the category the product belongs to | `>> Phones >> Galaxies` |
| ChannelName | NVARCHAR(MAX) | Channel - channel for the rows location | `English Channel` |
| Comments | TEXT | Invoice Comments - comments added to the invoice |  |
| ContractNumber | VARCHAR (50) | Contract # - number of the contract, recorded at the time of sale | `12345` |
| CustomerID | INT |  | `131149` |
| CustomerName | VARCHAR (101) | Customer - name of the customer as entered on their profile | `Bob Jones` |
| DateCreated | DateTime | Sold On - date and time the invoice was tendered | `2016-05-13T12:18:08.723` |
| DistrictName | NVARCHAR(MAX) | District - district for the rows location | `Westminster` |
| EmployeeName | VARCHAR (51) | Sold By - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box | `iQmetrix User` |
| GlobalProductID | INT |  | `5179` |
| InvoicedAt | NVARCHAR(MAX) | Invoiced At - name of the location which takes the inventory on a refund, usually the same as Invoiced By but will be different if a second location process a refund | `100: My Network LLC - Anchorage` |
| InvoicedBy | NVARCHAR(MAX) | Invoiced By - name of the location which credited with the sale, usually the same as Invoiced At but will be different if a second location process a refund | `100: My Network LLC - Anchorage` |
| InvoiceIDByStore | VARCHAR (14) | Invoice # - invoice number assigned by RQ | `77224IN3` |
| IsOrderServiceDropShipProduct | BIT |  | `null` |
| IsOrderServiceShippingProduct | BIT |  | `null` |
| ListPrice | MONEY | List Price - current price as noted on the pricing tab in the inventory console for the product | `449.95` |
| OriginalUnitPrice | MONEY | Orig. Unit Price - original price on the invoice | `25` |
| Priority | INT | The order that the products were saved in on an Invoice | `1` |
| ProductCouponDiscount | MONEY |  | `0` |
| ProductIdentifier | VARCHAR(12) | Product SKU - the RQ generated SKU | `ASHCSA000120` |
| ProductName | NVARCHAR(MAX) | Product Name - name of the product as it appears in the inventory | `Samsung Galaxy Rugby LTE` |
| Quantity | INT | Qty - total number of times the Product SKU appears on the invoice | `1` |
| Refund | BIT | Refund - indicates if a negative quantity of this item was sold | `0` |
| RegionName | NVARCHAR(MAX) | Region - region for the rows location | `London` |
| RetailerCatalogID | VARCHAR (50) |  | `null` |
| SaleInvoice_RowID | UNIQUEIDENTIFIER |  | `8c6537ae-75a5-4155-82b2-c8647ed05f3d` |
| SaleInvoiceID | INT | Invoice # - invoice number assigned by RQ | `128962` |
| SaleInvoiceProduct_RowID | UNIQUEIDENTIFIER |  | `0099b78f-ba02-4a91-afd4-2f7eb0fbbb06` |
| SerialNumber | VARCHAR (100) | Tracking # - tracking number associated with this product, serialized products only | `1111111` |
| SoldAsUsed | BIT | Sold As Used - indicates the product was used when sold | `false` |
| SpecialProductID | INT |  | `0` |
| StoreInStoreFlowIsEnabledForStore | BIT |  | `false` |
| StoreInStoreGrossProfit | MONEY | SIS Gross Profit - profit, calculated as Total Sales - Cost for a SIS location. | `null` |
| StoreInStoreListPrice | MONEY | SIS List Price - Price from the store-in-store setup of the product  | `null` |
| StoreInStorePrice | MONEY | Sold For - price that appeared on the invoice (including hide on invoice items), i.e. negative if a refund | `null` |
| StoreTypeName | NVARCHAR(MAX) | Location Type - the location type the the transaction was performed at | `Costco` |
| TenderedBy | VARCHAR (51) | Tendered By - name of the employee logged into RQ when the invoice was tendered | `iQmetrix User` |
| TotalCost | MONEY | Total Cost - total purchase cost for the product(s) on the invoice | `0` |
| TotalDiscount | DECIMAL (8, 4) | Total Discount - net discount amount for the Product SKU on the particular invoice | `424.95` |
| TotalPrice | MONEY | Total Sales - net dollar amount for the Product SKU on the particular invoice | `25` |
| UnitCost | MONEY | Unit Cost - purchase cost per unit | `0` |
| UnitPrice | MONEY | Sold For - price that appeared on the invoice (including hide on invoice items), i.e. negative if a refund | `25` |
| VendorName | NVARCHAR(MAX) |  |  |
| VendorSKU | VARCHAR(25) |  |  |

### ProductDetailReportTaxColumnData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ColName | VARCHAR | Tax name | `T102` |
| ColCaption | NVARCHAR(MAX) | Description | `Flat tax` |
| CreditCardPaymentType | VARCHAR (20)(20) | Credit card information | `null` |

### ProductDetailReportTaxDetailData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Amount | MONEY  | Amount | `22.5` |
| GlobalProductID | INT | Identifier of a Product in RQ | `5179` |
| Priority | INT | Priority | `1` |
| SaleInvoiceID | INT | Identifier of a sale invoice in RQ | `128996` |
| SerialNumber | VARCHAR (100)  | Serial number | `2222222` |
| TaxID | VARCHAR | Tax identifier | `T102` |
| TaxName | NVARCHAR(MAX) | Tax name | `Brad flat tax` |

### RMAHistoryInvoiceReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ChannelName | NVARCHAR (MAX) | Channel - channel for the rows location | `English Channel` |
| Comments | VARCHAR (1000) | Comments - comments entered on the RMA form will be displayed here | `Phone missing from package delivered on invoice #87742` |
| Committed | BIT | Committed On - date and time committed | `true` |
| Completed | BIT | Completed - indicates if the RMA is completed | `true` |
| CreditInvoiceNumber | VARCHAR (20) | Credit Invoice # - number of the credit invoice from vendor used to provide an audit trail |  |
| CustomerID | INT | Committed - indicates if the RMA is committed or non-committed | `-1` |
| CustomerName | VARCHAR (101) | Customer - it is possible to RMA a customer owned product (very rare); customer name will be recorded here |  |
| DateCommitted | DateTime | Committed - indicates if the RMA is committed or non-committed | `2011-03-02T17:10:11.78` |
| DateCreated | DateTime | Created On - date and time the RMA was created | `2011-03-02T17:10:11.78` |
| DistrictName | NVARCHAR (MAX) | District - district for the rows location | `Valley Area District` |
| EmployeeName | VARCHAR (51) | Created By - name of the employee logged into RQ when the RMA was created | `iQmetrix User` |
| ReceivingComments | VARCHAR (1000) | Receiving Comments - comments entered during the RMA completion process will be displayed here | `Received Credit on 2/22/11.` |
| RegionName | NVARCHAR (MAX) | Region - region for the rows location | `Region A` |
| RMANumber | VARCHAR (15) | RMA # - RMA number assigned by RQ | `112482` |
| ShippedAway | BIT | Shipped Away - indicates if the Shipped box on the RMA has been checked | `true` |
| ShippingCost | MONEY | Shipping Cost - total of the cost to return the product | `8.5` |
| ShippingMethod | VARCHAR (30) | Shipping Method - shipping company name will appear here | `Regular` |
| StockBalanceID | INT | Way Bill # - tracking number provided by shipping company, e.g. UPS, Purolator, etc. | `1` |
| StockBalanceIDByStore | VARCHAR (14) | RMA # - RMA number assigned by RQ | `84WEASB1` |
| StoreName | NVARCHAR (MAX) | Location - location that created the RMA | `84 West` |
| TotalCost | MONEY | Total Cost - total cost of items sent away on RMA | `460` |
| TotalCostCredited | MONEY | Total Cost Credited - amount credited by vendor for products on the RMA. It grabs the average cost under the product. | `459` |
| VendorName | NVARCHAR (MAX) | Vendor RMA # - RMA # provided by the vendor, should be noted to provide an audit trail. | `Reliance` |
| WaybillNumber | VARCHAR (50) | Vendor - vendor receiving the RMA |  |

### RMAHistoryProductReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ActionTaken | TINYINT | Type - indicated the type of RMA: Credit, Replacement, Rejected or Repaired (1:Credit, 2:Replacement, 3:Rejected, 4:Repaired) | `1` |
| ChannelName | NVARCHAR (MAX) | Channel - channel for the rows location | `English Channel` |
| DateCreated | DateTime | Vendor RMA # - RMA # provided by the vendor, should be noted to provide an audit trail | `2011-03-02T17:10:11.78` |
| DateReceived | DateTime | Received On - date and time the RMA was received | `2011-03-02T17:18:44.913` |
| DateShipped | DateTime | Shipped On - date and time the Shipped box was checked | `2011-03-02T17:10:12.17` |
| DistrictName | NVARCHAR (MAX) | District - district for the rows location | `Valley Area District` |
| EmployeeName1 | VARCHAR (51) | Shipped By - name of the employee logged into RQ when the RMA was shipped | `iQmetrix User` |
| EmployeeName2 | VARCHAR (51) | Received By - name of the employee logged into RQ when the RMA was received | `iQmetrix User` |
| ProductIdentifier | VARCHAR (12) | Product SKU - RQ generated SKU | `ACPHUT000163` |
| ProductName | NVARCHAR (MAX) | Product Name - name of the product as it appears in the inventory | `HTC Droid Incredible` |
| Quantity | INT | Quantity - total number of that product SKU on the purchase order | `1` |
| RegionName | NVARCHAR (MAX) | Region - region for the rows location | `Region A` |
| RMANumber | VARCHAR (15) | RMA # - RMA number assigned by RQ | `112482` |
| SerialNumberAdded | VARCHAR (100) | Tracking # Received - tracking number received as replacement |  |
| SerialNumberRemoved | VARCHAR (100) | Tracking # Shipped - tracking number shipped from inventory | `A1000017AB0E93` |
| StockBalanceID | INT | RMA # - RMA number assigned by RQ | `1` |
| StockBalanceIDByStore | VARCHAR (14) | Vendor RMA # - RMA # provided by the vendor, should be noted to provide an audit trail | `84WEASB1` |
| StoreName | NVARCHAR (MAX) | Location - location that created the RMA | `84 West` |
| TotalCost | MONEY | Total Cost - total cost of items sent away on RMA | `460` |
| TotalCostCredited | MONEY | Total Cost Credited - dollar amount credited by vendor for products on the RMA | `459` |
| UnitCost | MONEY | Unit Cost - purchase cost per unit sent away on RMA; weighted average cost for non-serialized products and true cost for serialized products, click Inventory Valuation in RQ for more information | `460` |
| UnitCostCredited | MONEY | Unit Cost Credited - dollar amount of the credit granted by the vendor per unit | `459` |
| VendorInvoiceNumber | VARCHAR (20) | Vendor Invoice # - invoice number assigned by the vendor for the purchase order |  |
| VendorName | NVARCHAR (MAX) | RMA Vendor - vendor to whom the product was returned | `Reliance` |
| VendorPartNumber | VARCHAR (25) | RMA Vendor SKU - SKU assigned by the RMA Vendor |  |

### TransferHistoryInvoiceDetailReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| BillingStoreName | NVARCHAR(MAX) | Bill To - location to be billed | `100: My Network LLC - Anchorage` |
| CancelledByID | INT |  | `null` |
| CancelledByName | VARCHAR (51) | Cancelled By - employee logged into RQ when the transfer was cancelled | `null` |
| CancelledDate | DateTime | Cancelled On - date and time the transfer was cancelled | `null` |
| Committed | BIT | Committed - indicates if the transfer has been committed or not | `true` |
| Completed | BIT | Completed - indicates if the transfer has been completed, i.e. received by the requesting location | `true` |
| DateCommitted | DateTime | Committed On - date and time the transfer was committed | `2016-04-19T14:57:20.32` |
| DateRequested | DateTime | Requested On - date and time the product(s) were requested | `2016-04-19T14:57:20.32` |
| EstimatedArrivalDate | DateTime | ETA - original estimate of date of delivery | `2016-04-20T00:00:00` |
| ReceivingChannelName | NVARCHAR(MAX) | Received At Channel - channel that received the inventory | `English Channel` |
| ReceivingComments | VARCHAR (500) | Receiving Comments - any commented entered at the time the transfer was received |  |
| ReceivingDistrictName | NVARCHAR(MAX) | Received At District - district that received the inventory | `Westminster` |
| ReceivingRegionName | NVARCHAR(MAX) | Received At Region - region that received the inventory | `London` |
| ReceivingStoreName | NVARCHAR(MAX) | Received At - location that received the product(s) shipped from another location | `100: My Network LLC - Anchorage` |
| RequestingComments | VARCHAR (500) | Requesting Comments - any comments entered at the time the transfer request was made |  |
| RequestingEmployeeName | VARCHAR (51) | Requested By - employee logged into RQ when the request was made | `iQmetrix User` |
| ShippingChannelName | NVARCHAR(MAX) | Shipped From Channel - channel that shipped the inventory | `English Channel` |
| ShippingComments | VARCHAR (500) | Shipping Comments - any comments entered at the time the transfer was shipped |  |
| ShippingCost | MONEY | Shipping Cost - total cost to ship the product(s) | `0` |
| ShippingDistrictName | NVARCHAR(MAX) | Shipped From District - district that shipped the inventory | `Valley Area District` |
| ShippingMethod | VARCHAR (30) | Shipping Method - selected at the time of shipping | `Regular` |
| ShippingRegionName | NVARCHAR(MAX) | Shipped From Region - region that shipped the inventory | `Region A` |
| ShippingStoreName | NVARCHAR(MAX) | Shipped From - location that shipped the product(s) to another location | `84 West` |
| TotalInvoice | MONEY | Total Invoice - total dollar amount of the cost of the product(s) on being transferred | `500` |
| TransferID | INT | Transfer # - transfer number generated by RQ | `4326` |
| TransferIDByStore | VARCHAR (14) | Transfer # - transfer number generated by RQ | `77224TR1` |
| WaybillNumber | VARCHAR (100) | Way Bill # - tracking number provided by shipping company, e.g. UPS, Purolator, etc. | `53454354` |

### TransferHistoryProductDetailReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CancelledByID | INT |  | `null` |
| CancelledByName | VARCHAR (51) | Cancelled By - cancelling employee | `null` |
| CancelledDate | DateTime | Cancelled On - date the transfer was cancelled | `null` |
| CategoryPath | NVARCHAR(MAX) | Category - inventory category this product lives in | `>> Phones >> Galaxies` |
| DateReceived | DateTime | Received On - date the item(s) were received on | `2011-06-02T10:04:51.59` |
| DateShipped | DateTime | Shipped On - date the item(s) was shipped | `2011-06-02T09:41:08.027` |
| ProductIdentifier | VARCHAR(12) | Product SKU - RQ generated SKU | `ASBORI000028` |
| ProductName | NVARCHAR(MAX) | Product Name - name of this product as it appears in inventory | `BG Curve2 Posh PK` |
| Quantity | INT | Quantity - quantity of item transferred | `1` |
| ReceivingChannelName | NVARCHAR(MAX) | Received At Channel - channel that received the inventory | `English Channel` |
| ReceivingDistrictName | NVARCHAR(MAX) | Received At District - district that received the inventory | `Westminster` |
| ReceivingEmployeeName | VARCHAR (51) | Received By - employee who received the transfer | `Courtney Noon` |
| ReceivingRegionName | NVARCHAR(MAX) | Received At Region - region that received the inventory | `London` |
| ReceivingStoreName | NVARCHAR(MAX) | Received At - location that received the product(s) shipped from another location | `100: My Network LLC - Anchorage` |
| RequestingEmployeeName | VARCHAR (51) | Requested By - employee who requested the transfer | `iQmetrix User` |
| SerialNumber | VARCHAR (100) | Tracking # - tracking # for the item shipped |  |
| ShippingChannelName | NVARCHAR(MAX) | Shipped From Channel - channel that shipped the inventory | `English Channel` |
| ShippingDistrictName | NVARCHAR(MAX) | Shipped From District - district that shipped the inventory | `Valley Area District` |
| ShippingEmployeeName | VARCHAR (51) | Shipped By - employee who shipped the transfer | `Courtney Noon` |
| ShippingRegionName | NVARCHAR(MAX) | Shipped From Region - region that shipped the inventory | `Region A` |
| ShippingStoreName | NVARCHAR(MAX) | Shipped From - location that shipped the product(s) to another location | `84 West` |
| TotalCost | MONEY | Total Cost - cost per item multiplied by how many of the item were transferred | `9.6705` |
| TransferID | INT |  | `718` |
| TransferIDByStore | VARCHAR(14) | Transfer # - transfer number generated by RQ | `WIREGTR73` |
| UnitCost | MONEY | Unit Cost - cost per item | `9.6705` |
| VendorName | NVARCHAR(MAX) | Vendor - vendor the item was purchased from | `LTD Wireless` |
| VendorPartNumber | VARCHAR (25) | Vendor SKU - vendor SKU | `bgcrv2poshpk` |
| WaybillNumber | VARCHAR (100) | Way Bill # - tracking number provided by shipping company, e.g. UPS, Purolator, etc. | `53454354` |

### VendorRebateHistoryReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ActivationAssociationNumber | INT | Balance - amount still outstanding to be received from the carrier (TotalPrice - Collected, not returned directly but calculated in RQ) | `2` |
| ActivationRowID | UNIQUEIDENTIFIER | Balance - amount still outstanding to be received from the carrier (TotalPrice - Collected, not returned directly but calculated in RQ) | `0d4652a7-a673-437a-817e-4641961ba3e6` |
| Adjusted | VARCHAR(3) | Adjusted - indicates if the rebate was adjusted | `No` |
| AssociationNumber | SMALLINT | When adding products with PAW all associated products from the sale have the same association number tied together, this value increments based on how many sales are made on that order | `3` |
| CarrierPrice | MONEY | Carrier Price - value or revenue that a carrier assigns this feature | `0` |
| ChannelName | VARCHAR(100) | Channel - channel for the rows location | `English Channel` |
| ChargeBack | DateTime | Charge Back - Yes or No column for if it is a Charge Back or not | `No` |
| Collected | MONEY | Collected - amount received from the carrier | `null` |
| Comments | VARCHAR(500) | Comments - any comments that were added as part of the reconciliation process |  |
| Comments2 | VARCHAR(500) | Comments2 - any comments that were added as part of the reconciliation process | `null` |
| ContractNumber | VARCHAR(50) | Contract # - number of the contract, recorded at the time of sale | `123456789` |
| CustomerID1 | INT | Customer Identifier - customer identifier as entered on the customers profile | `130834` |
| CustomerName1 | VARCHAR(101) | Customer - name of the customer as entered on their profile | `Bob Jones` |
| DateCreated | DateTime | Sold On - date and time the invoice was tendered | `2016-01-04T14:33:15.737` |
| DateReconciled | DateTime | Reconciled On - date and time the rebate was reconciled | `null` |
| DistrictName | VARCHAR(100) | District - district for the rows location | `District B2` |
| EmployeeName | VARCHAR(51) | Sales Person - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box |  |
| EmployeeName1 | VARCHAR(51) | Sales Person ID - ID number assigned to this sales person and recorded on the Admin tab of their Employee Profile | `iQmetrix User` |
| ExtraField | VARCHAR(30) | Extra Field - an optional field, see Vendor Account Setup for more information | `1234567890` |
| Flagged | VARCHAR(3) | Flagged - flagged in the Vendor Rebate Reconciliation screen | `No` |
| GlobalProductID | INT | Sales Person - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box | `812` |
| InvoiceComments | VARCHAR(50) | Reconciled By - name of the employee logged in when the rebate was reconciled |  |
| InvoicedAt | VARCHAR(100) | Invoiced At - name of the location which takes the inventory on a refund, usually the same as Invoiced By but will be different if a second location process a refund | `Regina Store` |
| InvoicedBy | VARCHAR(100) | Invoiced By - name of the location which credited with the sale, usually the same as Invoiced At but will be different if a second location process a refund | `Regina Store` |
| InvoiceIDByStore | VARCHAR(14) | Invoice # - invoice number assigned by RQ | `HJKIIIN2` |
| InvoiceRowID | UNIQUEIDENTIFIER |  | `db8f28cf-5017-47f4-9ccf-b90cff32185d` |
| JournalNumber | VARCHAR(20) | Journal # - vendor account journal on which the rebate was reconciled |  |
| OriginalSaleDate | DateTime | Original Sales Date - date of the original sale | `null` |
| OriginalSaleInvoiceID | INT |  | `null` |
| OriginalSaleInvoiceIDByStore | VARCHAR(14) | Original Invoice - invoice number of the original transaction | `null` |
| PartialCB | MONEY | Partial CB - amount the carrier is charging back | `0` |
| PortNumber | VARCHAR(30) | Port Number - if entered in transaction |  |
| Postal_code | VARCHAR(15) | Zip/Postal Code - zip code (USA) or postal code (Canada) | `56789` |
| ProductIdentifier | VARCHAR(12) | Product SKU - RQ generated SKU | `ACVZRB000001` |
| ProductName | VARCHAR(100) | Product Name - description of the product as it appears in the inventory | `Verizon New Act_EquipmentRebate` |
| ProductRowID | UNIQUEIDENTIFIER | Literally no description in the database but originates from [iQclerk_SaleInvoicesAndProducts].[RowID] | `27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c` |
| Quantity | INT | Qty - total quantity of this product SKU on the invoice | `1` |
| RatePlan | VARCHAR(100) | Rate Plan 2 - second rate plan if necessary | `Act $9.99 to $20.98` |
| RatePlan2 | VARCHAR(100) | Rate Plan - name of the rate plan |  |
| Reconciled | VARCHAR(3) | Reconciled - has been marked as reconciled in the Vendor Rebate Reconciliation screen | `No` |
| RegionID | INT | Rate Plan - name of the rate plan | `9` |
| RegionName | VARCHAR(100) | Region - region for the rows location | `Region B` |
| RelatedCost | MONEY | Related Cost - purchase cost for the product associated with this rebate | `404` |
| RelatedPrice | MONEY | Related Price - price the customer paid for the product related to this rebate | `69.99` |
| RelatedProduct | VARCHAR(100) | Related Product - product associated with this rebate | `Samsung Galaxy S4` |
| RelatedProductSerialNumbers | VARCHAR(1000) | Related SN - serial number associated with this rebate, if any | `ACVZCB0026` |
| RelatedProductSKU | VARCHAR(12) | Related SKU - product SKU of the product associated with this rebate | `ACVZCB000244` |
| SaleInvoiceID | INT |  | `126526` |
| SerialNumber | VARCHAR(100) | Tracking # - tracking number associated with this entry | `123457000000000` |
| SocCode | VARCHAR(50) | SOC Code - SOC Code if one was used | `123457000000000` |
| SocCode2 | VARCHAR(50) | SOC Code2 - Second SOC Code if used |  |
| SpecialIdentifier | VARCHAR(25) | Reconciled By - name of the employee logged in when the rebate was reconciled | `1` |
| SpecialIdentifier1 | VARCHAR (25) |  |  |
| TermCode | VARCHAR(200) | Term Code - [may not show in your database] indicates new activation, upgrade, etc., see Price Sheet Term Setup for more detail |  |
| TotalPrice | MONEY | Total Rebate - total value of the rebate on this invoice calculated as Qty X Unit Rebate | `0` |
| UnitPrice | MONEY | Unit Rebate - dollar value of this rebate | `0` |
| VendorAccountName | VARCHAR(100) | Vendor Account Name - vendor account for this rebate | `Verizon 2` |
| VendorNumber | NVARCHAR(3) | Vendor # - vendor account number entered for Vendor # By Location [if used] |  |
| VendorSKU | VARCHAR(25) |  |  |

### SalesByInvoiceReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Adjustment | INT | Adjustment - total dollar value of any adjustments | `0` |
| ChannelName | NVARCHAR(MAX) | Channel - channel for the rows location | `English Channel` |
| Comments | VARCHAR (1000) | Invoice Comments - any comments added to the invoice | `Comment` |
| CustomerID | INT |  | `131149` |
| CustomerName | VARCHAR (101) | Customer - name of the customer as entered on their profile; if this is a Quick Sale that will be the name of the customer | `Bob Jones` |
| DateCreated | DateTime | Created On - date and time the invoice was created | `2016-05-13T12:18:08.723` |
| DistrictName | NVARCHAR(MAX) | District - district for the rows location | `Westminster` |
| Earned | MONEY |  | `null` |
| FinancedAmount | MONEY | Invoice Amount - formally known as Total Invoice - this shows the actual amount paid by the customer including coupons, gift cards, donations and taxes | `75` |
| InvoiceEmailed | BIT | Emailed - indicates that the invoice was emailed | `0` |
| InvoiceIDByStore | VARCHAR (14) | Invoiced At - name of the location which takes the inventory on a refund, usually the same as Invoiced By but will be different if a second location process a refund | `REDSTIN916` |
| Redeemed | BIT | Ven Reb Act - net dollar amount of vendor rebates for the invoice and the taxes associated to the rebate | `null` |
| RefundCodeID | UNIQUEIDENTIFIER | Invoice # - invoice number assigned by RQ | `null` |
| RegionName | NVARCHAR (MAX) | Region - region for the rows location | `London` |
| RoundingVariance | MONEY | Rounding Variance - total dollar value of the rounding variance [may not be present in every database] | `0` |
| SaleInvoiceID | INT | Invoice # - invoice number assigned by RQ | `129036` |
| SoldBy | NVARCHAR (51) | Sold By Username - username of the employee of record for the sale, i.e. the employee whose name is in the Commission box | `iQmetrix User` |
| SoldByUserName | NVARCHAR (MAX) | Sold By - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box | `iQmetrix.User` |
| StoreID | INT |  | `6679` |
| StoreInStoreFlowIsEnabledForStore | BIT |  | `false` |
| StoreName | NVARCHAR (MAX) | Invoiced By - name of the location which credited with the sale, usually the same as Invoiced At but will be different if a second location process a refund | `100: My Network LLC - Anchorage` |
| StoreName2 | NVARCHAR (MAX) | Invoiced By - name of the location which credited with the sale, usually the same as Invoiced At but will be different if a second location process a refund | `100: My Network LLC - Anchorage` |
| TenderedBy | VARCHAR (51) | Tendered By Username - username of the employee logged into RQ when the invoice was taken | `iQmetrix User` |
| TenderedByUserName | NVARCHAR (MAX) | Tendered By - name of the employee logged into RQ when the invoice was taken | `iQmetrix.User` |
| TotalAfterTax | MONEY | Tendered By - name of the employee logged into RQ when the invoice was taken | `26` |
| TotalCost | MONEY | Cost - total purchase cost of the products on the invoice | `0` |
| TotalCoupon | MONEY | Coupon Used - the sum of the coupons applied to the invoice. | `0` |
| TotalDonations | MONEY | Donations - total dollar value of the donation | `0` |
| TotalDownPayment | MONEY | Total invoiced - Financed amount = TotalDownpayment | `25` |
| TotalExtraCharges | MONEY | Extra Charges - total dollar value of any extra charges added to the invoice | `0` |
| TotalGiftCard | MONEY | Gift Card Sold - if a gift card was purchased, this is the value of the gift card. | `0` |
| TotalInvoiced | MONEY | Invoice Subtotal - formally known as Total Invoiced - this represents the invoice subtotal which would include gift cards and extra charges. Coupons and Vendor Rebates are removed from this amount. | `26` |
| TotalNRP | MONEY | NRP sold - value of any Non Revenue Products sold | `0` |
| TotalProfit | MONEY | Gross Profit - total dollar value of profit, calculated as Sales - Cost | `164` |
| TotalSales | MONEY | Sales - total dollar amount of the invoice after adjustments | `164` |
| TotalStoreInStoreProfit | MONEY |  | `0` |
| TotalStoreInStoreSales | MONEY | Ven Reb Act - net dollar amount of vendor rebates for the invoice and the taxes associated to the rebate | `0` |




### ReasonCode

A ReasonCode allows an employee to provide a reason for an action, such as a ChargeBack. For example, Point of Sale Error.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ID | String | Identifier | `1` |
| Description | String | Reason | `Write Off` |

### LocationType

Levels of a company tree in RQ such as Region, District, Store, etc.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ID | String | Identifier | `1` |
| Description | String | Name | `Company` |

### RQCompanyTreeNode

There is a RQCompanyTreeNode resource for each Company, Channel, Region, District and Store in RQ.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ID | Integer | Identifier in RQ | `1` |
| Column1 | String | Name | `KENTEL Corp` |
| EntityId | Integer | Identifier of the corresponding [CompanyTreeNode](/api/company-tree/#companytreenode) | `11432` |







## Enumerations

### BinStatus

| Id | Name |
|:---|:-----|
| 1 | InStock|
| 2 | OnRMA |
| 3 | TransferIn |
| 4 | TransferOut |
| 5 | OnLoan |
| 6 | NonSellable |
| 7 | OnOrder |
| 8 | OnBackOrder |
| 9 | AnyStatusWithoutOrder |
| 10 | AnyStatus |


## Requests



<h3 id='getting-the-product-detail-report' class='clickable-header top-level-header'>Getting the Product Detail Report</h3>

<a name="sales-reports"></a>For more information, see [Product Detail Report](http://iqmetrix.helpdocsonline.com/product-detail-report).

Note that this report has multiple responses, depending on the ReportPart specified.

| Report Part | Response |
|:------------|:---------|
| 1 | {{ProductDetailReportData}} |
| 2 | {{ProductDetailReportTaxDetailData}} |
| 3 | {{ProductDetailReportTaxColumnData}} |


<h4>Request</h4>

<pre>
GET /reports/productdetailreport?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&StartDate={StartDate}&StopDate={StopDate}&SearchMethod={SearchMethod}&Manufacturer={ManufacturerId}&CategoryNumber={CategoryNumber}&ProductIdentifier={ProductIdentifier}&InvoiceIDByStore={InvoiceIDByStore}&LanguageCode={LanguageCode}&ReportPart={ReportPart}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for Product SKU, 2 for Manufacutrer, 3 for Category and 4 for Invoice Number
    </li>
    
    <li>
        <code>ManufacturerId</code> (<strong>Required</strong>)  - Identifier for a Manufacture in RQ. Use -1 for all Manufacturers. For a complete list see <a href="#getting-a-list-of-manufacturers-in-rq">Getting a List of Manufacturers in RQ</a>
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a CategoryNumber. For a complete list see <a href="#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>InvoiceIDByStore</code> (Optional)  - Tracking number
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>ReportPart</code> (<strong>Required</strong>)  - Acceptable values include 1 to return the default report, 2 for the tax detail report and 3 for tax column data
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-product-detail-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-product-detail-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-product-detail-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-product-detail-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-product-detail-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-product-detail-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-product-detail-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-product-detail-report">
<pre id="http-code-getting-the-product-detail-report"><code class="language-http">GET /reports/productdetailreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=3&Manufacturer=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us&ReportPart=1&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-product-detail-report">
<pre id="curl-code-getting-the-product-detail-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/productdetailreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=3&Manufacturer=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us&ReportPart=1&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-product-detail-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-product-detail-report"><code class="language-csharp">static IRestResponse GettingTheProductDetailReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/productdetailreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=3&Manufacturer=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us&ReportPart=1&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-product-detail-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-product-detail-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheProductDetailReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/productdetailreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=3&Manufacturer=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us&ReportPart=1&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-product-detail-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-product-detail-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/productdetailreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=3&Manufacturer=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us&ReportPart=1&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#productdetailreportdata'>ProductDetailReportData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Activation_RowID": "d3d65281-5201-4927-9bac-6f3a47ddf56b",
        "AdjustedUnitPrice": 25,
        "CarrierPrice": null,
        "CategoryPath": ">> Phones >> Galaxies",
        "ChannelName": "English Channel",
        "Comments": "",
        "ContractNumber": "12345",
        "CustomerID": 131149,
        "CustomerName": "Bob Jones",
        "DateCreated": "2016-05-13T12:18:08.723",
        "DistrictName": "Westminster",
        "EmployeeName": "iQmetrix User",
        "GlobalProductID": 5179,
        "InvoicedAt": "100: My Network LLC - Anchorage",
        "InvoicedBy": "100: My Network LLC - Anchorage",
        "InvoiceIDByStore": "77224IN3",
        "IsOrderServiceDropShipProduct": null,
        "IsOrderServiceShippingProduct": null,
        "ListPrice": 449.95,
        "OriginalUnitPrice": 25,
        "Priority": 1,
        "ProductCouponDiscount": 0,
        "ProductIdentifier": "ASHCSA000120",
        "ProductName": "Samsung Galaxy Rugby LTE",
        "Quantity": 1,
        "Refund": 0,
        "RegionName": "London",
        "RetailerCatalogID": "null",
        "SaleInvoice_RowID": "8c6537ae-75a5-4155-82b2-c8647ed05f3d",
        "SaleInvoiceID": 128962,
        "SaleInvoiceProduct_RowID": "0099b78f-ba02-4a91-afd4-2f7eb0fbbb06",
        "SerialNumber": "1111111",
        "SoldAsUsed": false,
        "SpecialProductID": 0,
        "StoreInStoreFlowIsEnabledForStore": false,
        "StoreInStoreGrossProfit": null,
        "StoreInStoreListPrice": null,
        "StoreInStorePrice": null,
        "StoreTypeName": "Costco",
        "TenderedBy": "iQmetrix User",
        "TotalCost": 0,
        "TotalDiscount": 424.95,
        "TotalPrice": 25,
        "UnitCost": 0,
        "UnitPrice": 25,
        "VendorName": "",
        "VendorSKU": ""
    }
]</pre>

<h3 id='getting-the-sales-by-invoice-report' class='clickable-header top-level-header'>Getting the Sales By Invoice Report</h3>

For more information, see [Sales By Invoice Report](http://iqmetrix.helpdocsonline.com/sales-by-invoice-report).


<h4>Request</h4>

<pre>
GET /reports/salesbyinvoicereport?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&StartDate={StartDate}&StopDate={StopDate}&HideRebates={HideRebates}&LanguageCode={LanguageCode}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>HideRebates</code> (<strong>Required</strong>)  - A flag to indicate if Rebates should be included in the report (1) or not (-1)
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-sales-by-invoice-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-sales-by-invoice-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-sales-by-invoice-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-sales-by-invoice-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-sales-by-invoice-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-sales-by-invoice-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-sales-by-invoice-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-sales-by-invoice-report">
<pre id="http-code-getting-the-sales-by-invoice-report"><code class="language-http">GET /reports/salesbyinvoicereport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&HideRebates=-1&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-sales-by-invoice-report">
<pre id="curl-code-getting-the-sales-by-invoice-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/salesbyinvoicereport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&HideRebates=-1&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-sales-by-invoice-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-sales-by-invoice-report"><code class="language-csharp">static IRestResponse GettingTheSalesByInvoiceReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/salesbyinvoicereport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&HideRebates=-1&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-sales-by-invoice-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-sales-by-invoice-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheSalesByInvoiceReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/salesbyinvoicereport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&HideRebates=-1&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-sales-by-invoice-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-sales-by-invoice-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/salesbyinvoicereport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&HideRebates=-1&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#salesbyinvoicereportdata'>SalesByInvoiceReportData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Adjustment": 0,
        "ChannelName": "English Channel",
        "Comments": "Comment",
        "CustomerID": 131149,
        "CustomerName": "Bob Jones",
        "DateCreated": "2016-05-13T12:18:08.723",
        "DistrictName": "Westminster",
        "Earned": null,
        "FinancedAmount": 75,
        "InvoiceEmailed": 0,
        "InvoiceIDByStore": "REDSTIN916",
        "Redeemed": null,
        "RefundCodeID": "null",
        "RegionName": "London",
        "RoundingVariance": 0,
        "SaleInvoiceID": 129036,
        "SoldBy": "iQmetrix User",
        "SoldByUserName": "iQmetrix.User",
        "StoreID": 6679,
        "StoreInStoreFlowIsEnabledForStore": false,
        "StoreName": "100: My Network LLC - Anchorage",
        "StoreName2": "100: My Network LLC - Anchorage",
        "TenderedBy": "iQmetrix User",
        "TenderedByUserName": "iQmetrix.User",
        "TotalAfterTax": 26,
        "TotalCost": 0,
        "TotalCoupon": 0,
        "TotalDonations": 0,
        "TotalDownPayment": 25,
        "TotalExtraCharges": 0,
        "TotalGiftCard": 0,
        "TotalInvoiced": 26,
        "TotalNRP": 0,
        "TotalProfit": 164,
        "TotalSales": 164,
        "TotalStoreInStoreProfit": 0,
        "TotalStoreInStoreSales": 0
    }
]</pre>

<h3 id='getting-the-inventory-listing-report' class='clickable-header top-level-header'>Getting the Inventory Listing Report</h3>

<a name="inventory-reports"></a>For more information, see [Inventory Listing Report](http://iqmetrix.helpdocsonline.com/inventory-listing-report).


<h4>Request</h4>

<pre>
GET /reports/inventorylistingreport?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&CategoryNumber={CategoryNumber}&BinStatus={BinStatus}&QtyStatus={QtyStatus}&BlindInventory={BlindInventory}&DateAsOf={DateAsOf}&LanguageCode={LanguageCode}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a CategoryNumber. For a complete list see <a href="#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>BinStatus</code> (<strong>Required</strong>)  - See <a href="#binstatus">BinStatus</a> for a list of acceptable values
    </li>
    
    <li>
        <code>QtyStatus</code> (<strong>Required</strong>)  - Acceptable values include 1 for negative quantities, 2 for positive quantities, 3 for zero quantities and 4 for all quantities
    </li>
    
    <li>
        <code>BlindInventory</code> (<strong>Required</strong>)  - A flag to indicate if the report will include product quantities (0) or only product details (1)
    </li>
    
    <li>
        <code>DateAsOf</code> (<strong>Required</strong>)  - Date at which the report will be run. NOTE the inventory will be listed as of 11:59 PM / 2359 for the date chosen
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-inventory-listing-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-inventory-listing-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-inventory-listing-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-inventory-listing-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-inventory-listing-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-inventory-listing-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-inventory-listing-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-inventory-listing-report">
<pre id="http-code-getting-the-inventory-listing-report"><code class="language-http">GET /reports/inventorylistingreport?ForWho=1&ForWhoIDs=6679&CategoryNumber=10&BinStatus=1&QtyStatus=4&BlindInventory=0&DateAsOf=2016-06-08T07:00:00.000Z&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-inventory-listing-report">
<pre id="curl-code-getting-the-inventory-listing-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/inventorylistingreport?ForWho=1&ForWhoIDs=6679&CategoryNumber=10&BinStatus=1&QtyStatus=4&BlindInventory=0&DateAsOf=2016-06-08T07:00:00.000Z&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-inventory-listing-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-inventory-listing-report"><code class="language-csharp">static IRestResponse GettingTheInventoryListingReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/inventorylistingreport?ForWho=1&ForWhoIDs=6679&CategoryNumber=10&BinStatus=1&QtyStatus=4&BlindInventory=0&DateAsOf=2016-06-08T07:00:00.000Z&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-inventory-listing-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-inventory-listing-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheInventoryListingReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/inventorylistingreport?ForWho=1&ForWhoIDs=6679&CategoryNumber=10&BinStatus=1&QtyStatus=4&BlindInventory=0&DateAsOf=2016-06-08T07:00:00.000Z&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-inventory-listing-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-inventory-listing-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/inventorylistingreport?ForWho=1&ForWhoIDs=6679&CategoryNumber=10&BinStatus=1&QtyStatus=4&BlindInventory=0&DateAsOf=2016-06-08T07:00:00.000Z&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#inventorylistingreportdata'>InventoryListingReportData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "BarCode": "",
        "BinStatus": "String_InStock",
        "CategoryPath": ">> @ Activations (Price Sheets) >> AT&T Price Sheet >> Equipment",
        "ChannelName": "English Channel",
        "DateEOL": "null",
        "DiscontinuedDate": "null",
        "DistrictName": "Westminster",
        "DoNotOrder": false,
        "IsUsed": false,
        "ManufacturerPartNumber": "",
        "NoSale": false,
        "ProductIdentifier": "AAATAP000093",
        "ProductName": "Apple iPhone 6 Plus 16GB Space Gray - AT&T",
        "Quantity": 1,
        "RefundPeriodLength": null,
        "RegionName": "London",
        "SerialNumber": "2342342341",
        "SpecialOrder": false,
        "StoreName": "100: My Network LLC - Anchorage",
        "StoreTypeName": "Costco",
        "TotalCost": 699,
        "UnitCost": 699,
        "VendorName": "Offwire",
        "VendorPartNumber": "",
        "WarehouseLocation": "",
        "WriteOff": false
    }
]</pre>

<h3 id='getting-the-adjustment-history-invoice-detail-report' class='clickable-header top-level-header'>Getting the Adjustment History Invoice Detail Report</h3>

For more information, see [Adjustment History Report](http://iqmetrix.helpdocsonline.com/adjustment-history-report).      


<h4>Request</h4>

<pre>
GET /reports/adjustmenthistoryinvoicedetailreport?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&ReasonCode={ReasonCode}&StartDate={StartDate}&StopDate={StopDate}&SerialNumber={SerialNumber}&ProductIdentifier={ProductIdentifier}&LanguageCode={LanguageCode}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>ReasonCode</code> (<strong>Required</strong>)  - Identifier for a {{ReasonCode}}. Use -1 to specify All Reason Codes. For a complete list, see <a href="#getting-reason-codes">Getting Reason Codes</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>SerialNumber</code> (Optional)  - Serial Number
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-adjustment-history-invoice-detail-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-adjustment-history-invoice-detail-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-adjustment-history-invoice-detail-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-adjustment-history-invoice-detail-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-adjustment-history-invoice-detail-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-adjustment-history-invoice-detail-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-adjustment-history-invoice-detail-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-adjustment-history-invoice-detail-report">
<pre id="http-code-getting-the-adjustment-history-invoice-detail-report"><code class="language-http">GET /reports/adjustmenthistoryinvoicedetailreport?ForWho=1&ForWhoIDs=6679&ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SerialNumber=990003427999221&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-adjustment-history-invoice-detail-report">
<pre id="curl-code-getting-the-adjustment-history-invoice-detail-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryinvoicedetailreport?ForWho=1&ForWhoIDs=6679&ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SerialNumber=990003427999221&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-adjustment-history-invoice-detail-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-adjustment-history-invoice-detail-report"><code class="language-csharp">static IRestResponse GettingTheAdjustmentHistoryInvoiceDetailReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryinvoicedetailreport?ForWho=1&ForWhoIDs=6679&ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SerialNumber=990003427999221&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-adjustment-history-invoice-detail-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-adjustment-history-invoice-detail-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheAdjustmentHistoryInvoiceDetailReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryinvoicedetailreport?ForWho=1&ForWhoIDs=6679&ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SerialNumber=990003427999221&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-adjustment-history-invoice-detail-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-adjustment-history-invoice-detail-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryinvoicedetailreport?ForWho=1&ForWhoIDs=6679&ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SerialNumber=990003427999221&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#adjustmenthistoryinvoicedetailreportdata'>AdjustmentHistoryInvoiceDetailReportData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "AdjustmentType": 1,
        "Comments": "Comment",
        "CountSheetID": 1,
        "CountSheetIDByStore": "1",
        "DateCreated": "2015-12-16T07:39:39.49",
        "EmployeeName": "iQmetrix User",
        "IsReceiving": false,
        "StoreName": "100: My Network LLC - Anchorage",
        "TotalInvoice": 0,
        "TransactionID": 19240,
        "TransactionIDByStore": "84WEAIA1187"
    }
]</pre>

<h3 id='getting-the-adjustment-history-product-detail-report' class='clickable-header top-level-header'>Getting the Adjustment History Product Detail Report</h3>

For more information, see [Adjustment History Report](http://iqmetrix.helpdocsonline.com/adjustment-history-report).   


<h4>Request</h4>

<pre>
GET /reports/adjustmenthistoryproductdetailreport?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&ReasonCode={ReasonCode}&StartDate={StartDate}&StopDate={StopDate}&LanguageCode={LanguageCode}&ProductIdentifier={ProductIdentifier}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>ReasonCode</code> (<strong>Required</strong>)  - Identifier for a {{ReasonCode}}. Use -1 to specify All Reason Codes. For a complete list, see <a href="#getting-reason-codes">Getting Reason Codes</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-adjustment-history-product-detail-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-adjustment-history-product-detail-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-adjustment-history-product-detail-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-adjustment-history-product-detail-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-adjustment-history-product-detail-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-adjustment-history-product-detail-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-adjustment-history-product-detail-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-adjustment-history-product-detail-report">
<pre id="http-code-getting-the-adjustment-history-product-detail-report"><code class="language-http">GET /reports/adjustmenthistoryproductdetailreport?ForWho=1&ForWhoIDs=6679&ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&LanguageCode=en-us&ProductIdentifier=ASCLMO000001&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-adjustment-history-product-detail-report">
<pre id="curl-code-getting-the-adjustment-history-product-detail-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryproductdetailreport?ForWho=1&ForWhoIDs=6679&ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&LanguageCode=en-us&ProductIdentifier=ASCLMO000001&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-adjustment-history-product-detail-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-adjustment-history-product-detail-report"><code class="language-csharp">static IRestResponse GettingTheAdjustmentHistoryProductDetailReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryproductdetailreport?ForWho=1&ForWhoIDs=6679&ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&LanguageCode=en-us&ProductIdentifier=ASCLMO000001&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-adjustment-history-product-detail-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-adjustment-history-product-detail-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheAdjustmentHistoryProductDetailReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryproductdetailreport?ForWho=1&ForWhoIDs=6679&ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&LanguageCode=en-us&ProductIdentifier=ASCLMO000001&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-adjustment-history-product-detail-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-adjustment-history-product-detail-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryproductdetailreport?ForWho=1&ForWhoIDs=6679&ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&LanguageCode=en-us&ProductIdentifier=ASCLMO000001&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#adjustmenthistoryproductdetailreportdata'>AdjustmentHistoryProductDetailReportData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Comments": "Comment",
        "CountSheetID": 0,
        "CountSheetIDByStore": "",
        "DateCreated": "2015-12-16T07:39:39.49",
        "EmployeeName": "iQmetrix User",
        "IsReceiving": false,
        "ProductIdentifier": "ASMAAP000017",
        "ProductName": "Samsung Galaxy S4",
        "Quantity": 5,
        "ReasonCode": "Unexplained Shrinkage",
        "SerialNumber": "123457000000000",
        "StoreName": "100: My Network LLC - Anchorage",
        "TotalCost": 0,
        "TransactionID": 19240,
        "TransactionIDByStore": "84WEAIA1187",
        "UnitCost": 0,
        "VendorName": "",
        "VendorSKU": ""
    }
]</pre>

<h3 id='getting-the-transfer-history-invoice-detail-report' class='clickable-header top-level-header'>Getting the Transfer History Invoice Detail Report</h3>

For more information, see [Transfer History Report](http://iqmetrix.helpdocsonline.com/transfer-history-report).   


<h4>Request</h4>

<pre>
GET /reports/transferhistoryinvoicedetailreport?StartDate={StartDate}&StopDate={StopDate}&ShippedForWho={ShippedLocationTypeId}&ShippedForWhoIDs={ShippedRQCompanyTreeNodeIds}&ReceivedForWho={ReceivedLocationTypeId}&ReceivedForWhoIDs={ReceivedRQCompanyTreeNodeIds}&LanguageCode={LanguageCode}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>ShippedLocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} the transfer originated from. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>ShippedRQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to specify where the transfer originated from. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>ReceivedLocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} the transfer was sent to. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>ReceivedRQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to specify where the transfer was sent. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-transfer-history-invoice-detail-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-transfer-history-invoice-detail-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-transfer-history-invoice-detail-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-transfer-history-invoice-detail-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-transfer-history-invoice-detail-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-transfer-history-invoice-detail-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-transfer-history-invoice-detail-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-transfer-history-invoice-detail-report">
<pre id="http-code-getting-the-transfer-history-invoice-detail-report"><code class="language-http">GET /reports/transferhistoryinvoicedetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-transfer-history-invoice-detail-report">
<pre id="curl-code-getting-the-transfer-history-invoice-detail-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryinvoicedetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-transfer-history-invoice-detail-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-transfer-history-invoice-detail-report"><code class="language-csharp">static IRestResponse GettingTheTransferHistoryInvoiceDetailReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryinvoicedetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-transfer-history-invoice-detail-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-transfer-history-invoice-detail-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheTransferHistoryInvoiceDetailReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryinvoicedetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-transfer-history-invoice-detail-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-transfer-history-invoice-detail-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryinvoicedetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#transferhistoryinvoicedetailreportdata'>TransferHistoryInvoiceDetailReportData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "BillingStoreName": "100: My Network LLC - Anchorage",
        "CancelledByID": null,
        "CancelledByName": "null",
        "CancelledDate": "null",
        "Committed": true,
        "Completed": true,
        "DateCommitted": "2016-04-19T14:57:20.32",
        "DateRequested": "2016-04-19T14:57:20.32",
        "EstimatedArrivalDate": "2016-04-20T00:00:00",
        "ReceivingChannelName": "English Channel",
        "ReceivingComments": "",
        "ReceivingDistrictName": "Westminster",
        "ReceivingRegionName": "London",
        "ReceivingStoreName": "100: My Network LLC - Anchorage",
        "RequestingComments": "",
        "RequestingEmployeeName": "iQmetrix User",
        "ShippingChannelName": "English Channel",
        "ShippingComments": "",
        "ShippingCost": 0,
        "ShippingDistrictName": "Valley Area District",
        "ShippingMethod": "Regular",
        "ShippingRegionName": "Region A",
        "ShippingStoreName": "84 West",
        "TotalInvoice": 500,
        "TransferID": 4326,
        "TransferIDByStore": "77224TR1",
        "WaybillNumber": "53454354"
    }
]</pre>

<h3 id='getting-the-transfer-history-product-detail-report' class='clickable-header top-level-header'>Getting the Transfer History Product Detail Report</h3>

For more information, see [Transfer History Report](http://iqmetrix.helpdocsonline.com/transfer-history-report).   


<h4>Request</h4>

<pre>
GET /reports/transferhistoryproductdetailreport?StartDate={StartDate}&StopDate={StopDate}&ShippedForWho={ShippedLocationTypeId}&ShippedForWhoIDs={ShippedRQCompanyTreeNodeIds}&ReceivedForWho={ReceivedLocationTypeId}&ReceivedForWhoIDs={ReceivedRQCompanyTreeNodeIds}&LanguageCode={LanguageCode}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>ShippedLocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} the transfer originated from. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>ShippedRQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to specify where the transfer originated from. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>ReceivedLocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} the transfer was sent to. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>ReceivedRQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to specify where the transfer was sent. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-transfer-history-product-detail-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-transfer-history-product-detail-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-transfer-history-product-detail-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-transfer-history-product-detail-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-transfer-history-product-detail-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-transfer-history-product-detail-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-transfer-history-product-detail-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-transfer-history-product-detail-report">
<pre id="http-code-getting-the-transfer-history-product-detail-report"><code class="language-http">GET /reports/transferhistoryproductdetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-transfer-history-product-detail-report">
<pre id="curl-code-getting-the-transfer-history-product-detail-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryproductdetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-transfer-history-product-detail-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-transfer-history-product-detail-report"><code class="language-csharp">static IRestResponse GettingTheTransferHistoryProductDetailReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryproductdetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-transfer-history-product-detail-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-transfer-history-product-detail-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheTransferHistoryProductDetailReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryproductdetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-transfer-history-product-detail-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-transfer-history-product-detail-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryproductdetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#transferhistoryproductdetailreportdata'>TransferHistoryProductDetailReportData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "CancelledByID": null,
        "CancelledByName": "null",
        "CancelledDate": "null",
        "CategoryPath": ">> Phones >> Galaxies",
        "DateReceived": "2011-06-02T10:04:51.59",
        "DateShipped": "2011-06-02T09:41:08.027",
        "ProductIdentifier": "ASBORI000028",
        "ProductName": "BG Curve2 Posh PK",
        "Quantity": 1,
        "ReceivingChannelName": "English Channel",
        "ReceivingDistrictName": "Westminster",
        "ReceivingEmployeeName": "Courtney Noon",
        "ReceivingRegionName": "London",
        "ReceivingStoreName": "100: My Network LLC - Anchorage",
        "RequestingEmployeeName": "iQmetrix User",
        "SerialNumber": "",
        "ShippingChannelName": "English Channel",
        "ShippingDistrictName": "Valley Area District",
        "ShippingEmployeeName": "Courtney Noon",
        "ShippingRegionName": "Region A",
        "ShippingStoreName": "84 West",
        "TotalCost": 9.6705,
        "TransferID": 718,
        "TransferIDByStore": "WIREGTR73",
        "UnitCost": 9.6705,
        "VendorName": "LTD Wireless",
        "VendorPartNumber": "bgcrv2poshpk",
        "WaybillNumber": "53454354"
    }
]</pre>

<h3 id='getting-the-rma-history-invoice-report' class='clickable-header top-level-header'>Getting the RMA History Invoice Report</h3>

For more information, see [RMA History Report](http://iqmetrix.helpdocsonline.com/rma-history-report).      


<h4>Request</h4>

<pre>
GET /reports/rmahistoryinvoicereport?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&StartDate={StartDate}&StopDate={StopDate}&VendorId={VendorId}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>VendorId</code> (<strong>Required</strong>)  - Identifier for a vendor in RQ. Use -1 for all vendors
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-rma-history-invoice-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-rma-history-invoice-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-rma-history-invoice-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-rma-history-invoice-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-rma-history-invoice-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-rma-history-invoice-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-rma-history-invoice-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-rma-history-invoice-report">
<pre id="http-code-getting-the-rma-history-invoice-report"><code class="language-http">GET /reports/rmahistoryinvoicereport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&VendorId=-1&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-rma-history-invoice-report">
<pre id="curl-code-getting-the-rma-history-invoice-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryinvoicereport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&VendorId=-1&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-rma-history-invoice-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-rma-history-invoice-report"><code class="language-csharp">static IRestResponse GettingTheRmaHistoryInvoiceReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryinvoicereport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&VendorId=-1&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-rma-history-invoice-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-rma-history-invoice-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheRmaHistoryInvoiceReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryinvoicereport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&VendorId=-1&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-rma-history-invoice-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-rma-history-invoice-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryinvoicereport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&VendorId=-1&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#rmahistoryinvoicereportdata'>RMAHistoryInvoiceReportData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "ChannelName": "English Channel",
        "Comments": "Phone missing from package delivered on invoice #87742",
        "Committed": true,
        "Completed": true,
        "CreditInvoiceNumber": "",
        "CustomerID": -1,
        "CustomerName": "",
        "DateCommitted": "2011-03-02T17:10:11.78",
        "DateCreated": "2011-03-02T17:10:11.78",
        "DistrictName": "Valley Area District",
        "EmployeeName": "iQmetrix User",
        "ReceivingComments": "Received Credit on 2/22/11.",
        "RegionName": "Region A",
        "RMANumber": "112482",
        "ShippedAway": true,
        "ShippingCost": 8.5,
        "ShippingMethod": "Regular",
        "StockBalanceID": 1,
        "StockBalanceIDByStore": "84WEASB1",
        "StoreName": "84 West",
        "TotalCost": 460,
        "TotalCostCredited": 459,
        "VendorName": "Reliance",
        "WaybillNumber": ""
    }
]</pre>

<h3 id='getting-the-rma-history-product-report' class='clickable-header top-level-header'>Getting the RMA History Product Report</h3>

For more information, see [RMA History Report](http://iqmetrix.helpdocsonline.com/rma-history-report).      


<h4>Request</h4>

<pre>
GET /reports/rmahistoryproductreport?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&StartDate={StartDate}&StopDate={StopDate}&VendorId={VendorId}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>VendorId</code> (<strong>Required</strong>)  - Identifier for a vendor in RQ. Use -1 for all vendors
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-rma-history-product-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-rma-history-product-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-rma-history-product-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-rma-history-product-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-rma-history-product-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-rma-history-product-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-rma-history-product-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-rma-history-product-report">
<pre id="http-code-getting-the-rma-history-product-report"><code class="language-http">GET /reports/rmahistoryproductreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&VendorId=-1&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-rma-history-product-report">
<pre id="curl-code-getting-the-rma-history-product-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryproductreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&VendorId=-1&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-rma-history-product-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-rma-history-product-report"><code class="language-csharp">static IRestResponse GettingTheRmaHistoryProductReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryproductreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&VendorId=-1&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-rma-history-product-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-rma-history-product-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheRmaHistoryProductReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryproductreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&VendorId=-1&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-rma-history-product-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-rma-history-product-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryproductreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&VendorId=-1&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#rmahistoryproductreportdata'>RMAHistoryProductReportData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "ActionTaken": 1,
        "ChannelName": "English Channel",
        "DateCreated": "2011-03-02T17:10:11.78",
        "DateReceived": "2011-03-02T17:18:44.913",
        "DateShipped": "2011-03-02T17:10:12.17",
        "DistrictName": "Valley Area District",
        "EmployeeName1": "iQmetrix User",
        "EmployeeName2": "iQmetrix User",
        "ProductIdentifier": "ACPHUT000163",
        "ProductName": "HTC Droid Incredible",
        "Quantity": 1,
        "RegionName": "Region A",
        "RMANumber": "112482",
        "SerialNumberAdded": "",
        "SerialNumberRemoved": "A1000017AB0E93",
        "StockBalanceID": 1,
        "StockBalanceIDByStore": "84WEASB1",
        "StoreName": "84 West",
        "TotalCost": 460,
        "TotalCostCredited": 459,
        "UnitCost": 460,
        "UnitCostCredited": 459,
        "VendorInvoiceNumber": "",
        "VendorName": "Reliance",
        "VendorPartNumber": ""
    }
]</pre>

<h3 id='getting-the-charge-back-summary-report-by-location' class='clickable-header top-level-header'>Getting the Charge Back Summary Report By Location</h3>

<a name="commission-reports"></a>For more information, see [Charge Back Summary Report](http://iqmetrix.helpdocsonline.com/charge-back-summary-report).   


<h4>Request</h4>

<pre>
GET /reports/chargebacksummaryreport?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&SearchMethod={SearchMethod}&CategoryNumber={CategoryNumber}&InvoiceStartDate={InvoiceStartDate}&InvoiceStopDate={InvoiceStopDate}&ChargeBackStartDate={ChargeBackStartDate}&ChargeBackStopDate={ChargeBackStopDate}&JournalIDs={JournalIDs}&QueryPart=1&ProductIdentifier={ProductIdentifier}&LanguageCode={LanguageCode}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for Category, 2 for Product or 3 for Journal Number
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a CategoryNumber. For a complete list see <a href="#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>InvoiceStartDate</code> (<strong>Required</strong>)  - Filter report by invoices created after this date
    </li>
    
    <li>
        <code>InvoiceStopDate</code> (<strong>Required</strong>)  - Filter report by invoices created before this date
    </li>
    
    <li>
        <code>ChargeBackStartDate</code> (<strong>Required</strong>)  - Filter report by charge backs created after this date
    </li>
    
    <li>
        <code>ChargeBackStopDate</code> (<strong>Required</strong>)  - Filter report by charge backs created before this date
    </li>
    
    <li>
        <code>JournalIDs</code> (<strong>Required</strong>)  - Filter report by Journal. Use -1 for All Journals.
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-charge-back-summary-report-by-location" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-charge-back-summary-report-by-location" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-charge-back-summary-report-by-location" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-charge-back-summary-report-by-location" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-charge-back-summary-report-by-location" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-charge-back-summary-report-by-location" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-charge-back-summary-report-by-location"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-charge-back-summary-report-by-location">
<pre id="http-code-getting-the-charge-back-summary-report-by-location"><code class="language-http">GET /reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=1&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-charge-back-summary-report-by-location">
<pre id="curl-code-getting-the-charge-back-summary-report-by-location"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=1&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-charge-back-summary-report-by-location">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-charge-back-summary-report-by-location"><code class="language-csharp">static IRestResponse GettingTheChargeBackSummaryReportByLocation()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=1&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-charge-back-summary-report-by-location">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-charge-back-summary-report-by-location"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheChargeBackSummaryReportByLocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=1&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-charge-back-summary-report-by-location">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-charge-back-summary-report-by-location"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=1&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#chargebacksummaryreportlocationdata'>ChargeBackSummaryReportLocationData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Quantity": 1,
        "StoreID": 6679,
        "StoreName": "100: My Network LLC - Anchorage",
        "TotalValue": -100
    }
]</pre>

<h3 id='getting-the-charge-back-summary-report-by-category' class='clickable-header top-level-header'>Getting the Charge Back Summary Report By Category</h3>

For more information, see [Charge Back Summary Report](http://iqmetrix.helpdocsonline.com/charge-back-summary-report).   


<h4>Request</h4>

<pre>
GET /reports/chargebacksummaryreport?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&SearchMethod={SearchMethod}&CategoryNumber={CategoryNumber}&InvoiceStartDate={InvoiceStartDate}&InvoiceStopDate={InvoiceStopDate}&ChargeBackStartDate={ChargeBackStartDate}&ChargeBackStopDate={ChargeBackStopDate}&JournalIDs={JournalIDs}&QueryPart=2&ProductIdentifier={ProductIdentifier}&LanguageCode={LanguageCode}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for Category, 2 for Product or 3 for Journal Number
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a CategoryNumber. For a complete list see <a href="#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>InvoiceStartDate</code> (<strong>Required</strong>)  - Filter report by invoices created after this date
    </li>
    
    <li>
        <code>InvoiceStopDate</code> (<strong>Required</strong>)  - Filter report by invoices created before this date
    </li>
    
    <li>
        <code>ChargeBackStartDate</code> (<strong>Required</strong>)  - Filter report by charge backs created after this date
    </li>
    
    <li>
        <code>ChargeBackStopDate</code> (<strong>Required</strong>)  - Filter report by charge backs created before this date
    </li>
    
    <li>
        <code>JournalIDs</code> (<strong>Required</strong>)  - Filter report by Journal. Use -1 for All Journals.
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-charge-back-summary-report-by-category" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-charge-back-summary-report-by-category" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-charge-back-summary-report-by-category" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-charge-back-summary-report-by-category" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-charge-back-summary-report-by-category" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-charge-back-summary-report-by-category" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-charge-back-summary-report-by-category"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-charge-back-summary-report-by-category">
<pre id="http-code-getting-the-charge-back-summary-report-by-category"><code class="language-http">GET /reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-charge-back-summary-report-by-category">
<pre id="curl-code-getting-the-charge-back-summary-report-by-category"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-charge-back-summary-report-by-category">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-charge-back-summary-report-by-category"><code class="language-csharp">static IRestResponse GettingTheChargeBackSummaryReportByCategory()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-charge-back-summary-report-by-category">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-charge-back-summary-report-by-category"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheChargeBackSummaryReportByCategory() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-charge-back-summary-report-by-category">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-charge-back-summary-report-by-category"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#chargebacksummaryreportcategorydata'>ChargeBackSummaryReportCategoryData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "CategoryName": "Financing",
        "CategoryNumber": "10101012",
        "CategoryPath": ">> Activations >> Financing",
        "Quantity": 1,
        "TotalValue": -100
    }
]</pre>

<h3 id='getting-the-charge-back-summary-report-by-product-summary' class='clickable-header top-level-header'>Getting the Charge Back Summary Report By Product Summary</h3>

For more information, see [Charge Back Summary Report](http://iqmetrix.helpdocsonline.com/charge-back-summary-report).   


<h4>Request</h4>

<pre>
GET /reports/chargebacksummaryreport?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&SearchMethod={SearchMethod}&CategoryNumber={CategoryNumber}&InvoiceStartDate={InvoiceStartDate}&InvoiceStopDate={InvoiceStopDate}&ChargeBackStartDate={ChargeBackStartDate}&ChargeBackStopDate={ChargeBackStopDate}&JournalIDs={JournalIDs}&QueryPart=3&ProductIdentifier={ProductIdentifier}&LanguageCode={LanguageCode}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for Category, 2 for Product or 3 for Journal Number
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a CategoryNumber. For a complete list see <a href="#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>InvoiceStartDate</code> (<strong>Required</strong>)  - Filter report by invoices created after this date
    </li>
    
    <li>
        <code>InvoiceStopDate</code> (<strong>Required</strong>)  - Filter report by invoices created before this date
    </li>
    
    <li>
        <code>ChargeBackStartDate</code> (<strong>Required</strong>)  - Filter report by charge backs created after this date
    </li>
    
    <li>
        <code>ChargeBackStopDate</code> (<strong>Required</strong>)  - Filter report by charge backs created before this date
    </li>
    
    <li>
        <code>JournalIDs</code> (<strong>Required</strong>)  - Filter report by Journal. Use -1 for All Journals.
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-charge-back-summary-report-by-product-summary" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-charge-back-summary-report-by-product-summary" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-charge-back-summary-report-by-product-summary" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-charge-back-summary-report-by-product-summary" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-charge-back-summary-report-by-product-summary" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-charge-back-summary-report-by-product-summary" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-charge-back-summary-report-by-product-summary"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-charge-back-summary-report-by-product-summary">
<pre id="http-code-getting-the-charge-back-summary-report-by-product-summary"><code class="language-http">GET /reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=3&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-charge-back-summary-report-by-product-summary">
<pre id="curl-code-getting-the-charge-back-summary-report-by-product-summary"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=3&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-charge-back-summary-report-by-product-summary">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-charge-back-summary-report-by-product-summary"><code class="language-csharp">static IRestResponse GettingTheChargeBackSummaryReportByProductSummary()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=3&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-charge-back-summary-report-by-product-summary">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-charge-back-summary-report-by-product-summary"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheChargeBackSummaryReportByProductSummary() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=3&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-charge-back-summary-report-by-product-summary">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-charge-back-summary-report-by-product-summary"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=3&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#chargebacksummaryreportproductsummarydata'>ChargeBackSummaryReportProductSummaryData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "GlobalProductID": 9809,
        "ProductIdentifier": "ACFNRB000008",
        "ProductName": "Vendor Rebate",
        "Quantity": 1,
        "TotalValue": -100
    }
]</pre>

<h3 id='getting-the-charge-back-summary-report-by-product-detail' class='clickable-header top-level-header'>Getting the Charge Back Summary Report By Product Detail</h3>

For more information, see [Charge Back Summary Report](http://iqmetrix.helpdocsonline.com/charge-back-summary-report).   


<h4>Request</h4>

<pre>
GET /reports/chargebacksummaryreport?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&SearchMethod={SearchMethod}&CategoryNumber={CategoryNumber}&InvoiceStartDate={InvoiceStartDate}&InvoiceStopDate={InvoiceStopDate}&ChargeBackStartDate={ChargeBackStartDate}&ChargeBackStopDate={ChargeBackStopDate}&JournalIDs={JournalIDs}&QueryPart=4&ProductIdentifier={ProductIdentifier}&LanguageCode={LanguageCode}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for Category, 2 for Product or 3 for Journal Number
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a CategoryNumber. For a complete list see <a href="#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>InvoiceStartDate</code> (<strong>Required</strong>)  - Filter report by invoices created after this date
    </li>
    
    <li>
        <code>InvoiceStopDate</code> (<strong>Required</strong>)  - Filter report by invoices created before this date
    </li>
    
    <li>
        <code>ChargeBackStartDate</code> (<strong>Required</strong>)  - Filter report by charge backs created after this date
    </li>
    
    <li>
        <code>ChargeBackStopDate</code> (<strong>Required</strong>)  - Filter report by charge backs created before this date
    </li>
    
    <li>
        <code>JournalIDs</code> (<strong>Required</strong>)  - Filter report by Journal. Use -1 for All Journals.
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-charge-back-summary-report-by-product-detail" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-charge-back-summary-report-by-product-detail" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-charge-back-summary-report-by-product-detail" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-charge-back-summary-report-by-product-detail" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-charge-back-summary-report-by-product-detail" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-charge-back-summary-report-by-product-detail" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-charge-back-summary-report-by-product-detail"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-charge-back-summary-report-by-product-detail">
<pre id="http-code-getting-the-charge-back-summary-report-by-product-detail"><code class="language-http">GET /reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=4&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-charge-back-summary-report-by-product-detail">
<pre id="curl-code-getting-the-charge-back-summary-report-by-product-detail"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=4&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-charge-back-summary-report-by-product-detail">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-charge-back-summary-report-by-product-detail"><code class="language-csharp">static IRestResponse GettingTheChargeBackSummaryReportByProductDetail()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=4&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-charge-back-summary-report-by-product-detail">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-charge-back-summary-report-by-product-detail"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheChargeBackSummaryReportByProductDetail() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=4&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-charge-back-summary-report-by-product-detail">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-charge-back-summary-report-by-product-detail"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=4&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#chargebacksummaryreportproductsummarydata'>ChargeBackSummaryReportProductSummaryData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "GlobalProductID": 9809,
        "ProductIdentifier": "ACFNRB000008",
        "ProductName": "Vendor Rebate",
        "Quantity": 1,
        "TotalValue": -100
    }
]</pre>

<h3 id='getting-the-charge-back-summary-report-by-employee' class='clickable-header top-level-header'>Getting the Charge Back Summary Report By Employee</h3>

For more information, see [Charge Back Summary Report](http://iqmetrix.helpdocsonline.com/charge-back-summary-report).   


<h4>Request</h4>

<pre>
GET /reports/chargebacksummaryreport?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&SearchMethod={SearchMethod}&CategoryNumber={CategoryNumber}&InvoiceStartDate={InvoiceStartDate}&InvoiceStopDate={InvoiceStopDate}&ChargeBackStartDate={ChargeBackStartDate}&ChargeBackStopDate={ChargeBackStopDate}&JournalIDs={JournalIDs}&QueryPart=5&ProductIdentifier={ProductIdentifier}&LanguageCode={LanguageCode}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for Category, 2 for Product or 3 for Journal Number
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a CategoryNumber. For a complete list see <a href="#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>InvoiceStartDate</code> (<strong>Required</strong>)  - Filter report by invoices created after this date
    </li>
    
    <li>
        <code>InvoiceStopDate</code> (<strong>Required</strong>)  - Filter report by invoices created before this date
    </li>
    
    <li>
        <code>ChargeBackStartDate</code> (<strong>Required</strong>)  - Filter report by charge backs created after this date
    </li>
    
    <li>
        <code>ChargeBackStopDate</code> (<strong>Required</strong>)  - Filter report by charge backs created before this date
    </li>
    
    <li>
        <code>JournalIDs</code> (<strong>Required</strong>)  - Filter report by Journal. Use -1 for All Journals.
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-charge-back-summary-report-by-employee" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-charge-back-summary-report-by-employee" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-charge-back-summary-report-by-employee" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-charge-back-summary-report-by-employee" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-charge-back-summary-report-by-employee" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-charge-back-summary-report-by-employee" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-charge-back-summary-report-by-employee"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-charge-back-summary-report-by-employee">
<pre id="http-code-getting-the-charge-back-summary-report-by-employee"><code class="language-http">GET /reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=5&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-charge-back-summary-report-by-employee">
<pre id="curl-code-getting-the-charge-back-summary-report-by-employee"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=5&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-charge-back-summary-report-by-employee">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-charge-back-summary-report-by-employee"><code class="language-csharp">static IRestResponse GettingTheChargeBackSummaryReportByEmployee()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=5&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-charge-back-summary-report-by-employee">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-charge-back-summary-report-by-employee"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheChargeBackSummaryReportByEmployee() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=5&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-charge-back-summary-report-by-employee">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-charge-back-summary-report-by-employee"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=5&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#chargebacksummaryreportproductsummarydata'>ChargeBackSummaryReportProductSummaryData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "GlobalProductID": 9809,
        "ProductIdentifier": "ACFNRB000008",
        "ProductName": "Vendor Rebate",
        "Quantity": 1,
        "TotalValue": -100
    }
]</pre>

<h3 id='getting-the-charge-back-summary-report-by-hardware-collection' class='clickable-header top-level-header'>Getting the Charge Back Summary Report By Hardware Collection</h3>

For more information, see [Charge Back Summary Report](http://iqmetrix.helpdocsonline.com/charge-back-summary-report).   


<h4>Request</h4>

<pre>
GET /reports/chargebacksummaryreport?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&SearchMethod={SearchMethod}&CategoryNumber={CategoryNumber}&InvoiceStartDate={InvoiceStartDate}&InvoiceStopDate={InvoiceStopDate}&ChargeBackStartDate={ChargeBackStartDate}&ChargeBackStopDate={ChargeBackStopDate}&JournalIDs={JournalIDs}&QueryPart=6&ProductIdentifier={ProductIdentifier}&LanguageCode={LanguageCode}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for Category, 2 for Product or 3 for Journal Number
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a CategoryNumber. For a complete list see <a href="#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>InvoiceStartDate</code> (<strong>Required</strong>)  - Filter report by invoices created after this date
    </li>
    
    <li>
        <code>InvoiceStopDate</code> (<strong>Required</strong>)  - Filter report by invoices created before this date
    </li>
    
    <li>
        <code>ChargeBackStartDate</code> (<strong>Required</strong>)  - Filter report by charge backs created after this date
    </li>
    
    <li>
        <code>ChargeBackStopDate</code> (<strong>Required</strong>)  - Filter report by charge backs created before this date
    </li>
    
    <li>
        <code>JournalIDs</code> (<strong>Required</strong>)  - Filter report by Journal. Use -1 for All Journals.
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-charge-back-summary-report-by-hardware-collection" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-charge-back-summary-report-by-hardware-collection" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-charge-back-summary-report-by-hardware-collection" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-charge-back-summary-report-by-hardware-collection" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-charge-back-summary-report-by-hardware-collection" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-charge-back-summary-report-by-hardware-collection" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-charge-back-summary-report-by-hardware-collection"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-charge-back-summary-report-by-hardware-collection">
<pre id="http-code-getting-the-charge-back-summary-report-by-hardware-collection"><code class="language-http">GET /reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=6&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-charge-back-summary-report-by-hardware-collection">
<pre id="curl-code-getting-the-charge-back-summary-report-by-hardware-collection"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=6&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-charge-back-summary-report-by-hardware-collection">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-charge-back-summary-report-by-hardware-collection"><code class="language-csharp">static IRestResponse GettingTheChargeBackSummaryReportByHardwareCollection()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=6&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-charge-back-summary-report-by-hardware-collection">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-charge-back-summary-report-by-hardware-collection"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheChargeBackSummaryReportByHardwareCollection() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=6&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-charge-back-summary-report-by-hardware-collection">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-charge-back-summary-report-by-hardware-collection"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/chargebacksummaryreport?ForWho=1&ForWhoIDs=6679&SearchMethod=4&CategoryNumber=10&InvoiceStartDate=1970-01-01T08:00:00.000Z&InvoiceStopDate=2016-06-06T07:00:00.000Z&ChargeBackStartDate=1970-01-01T08:00:00.000Z&ChargeBackStopDate=2016-06-06T07:00:00.000Z&JournalIDs=-1&QueryPart=6&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#chargebacksummaryreportproductsummarydata'>ChargeBackSummaryReportProductSummaryData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "GlobalProductID": 9809,
        "ProductIdentifier": "ACFNRB000008",
        "ProductName": "Vendor Rebate",
        "Quantity": 1,
        "TotalValue": -100
    }
]</pre>

<h3 id='getting-the-partial-charge-back-history-report' class='clickable-header top-level-header'>Getting the Partial Charge Back History Report</h3>

For more information, see [Partial Charge Back History Report](http://iqmetrix.helpdocsonline.com/partial-charge-back-history-report).   


<h4>Request</h4>

<pre>
GET /reports/partialchargebackhistoryreport?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&StartDate={StartDate}&StopDate={StopDate}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-partial-charge-back-history-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-partial-charge-back-history-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-partial-charge-back-history-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-partial-charge-back-history-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-partial-charge-back-history-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-partial-charge-back-history-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-partial-charge-back-history-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-partial-charge-back-history-report">
<pre id="http-code-getting-the-partial-charge-back-history-report"><code class="language-http">GET /reports/partialchargebackhistoryreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-partial-charge-back-history-report">
<pre id="curl-code-getting-the-partial-charge-back-history-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/partialchargebackhistoryreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-partial-charge-back-history-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-partial-charge-back-history-report"><code class="language-csharp">static IRestResponse GettingThePartialChargeBackHistoryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/partialchargebackhistoryreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-partial-charge-back-history-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-partial-charge-back-history-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingThePartialChargeBackHistoryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/partialchargebackhistoryreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-partial-charge-back-history-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-partial-charge-back-history-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/partialchargebackhistoryreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#partialchargebackhistoryreportdata'>PartialChargeBackHistoryReportData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "CarrierPrice": 0,
        "ChargeBack": -1,
        "ChargeBackID": 25,
        "ChargeBackIDByStore": "REDSTCB10",
        "DateAdjusted": "2016-05-10T00:00:00",
        "DateCreated": "2016-05-10T08:18:57.377",
        "EmployeeName": "iQmetrix User",
        "InvoiceDate": "2016-03-16T00:00:00",
        "InvoiceIDByStore": "REDSTIN916",
        "ProductIdentifier": "ASBORB000098",
        "ProductName": "Apple iPhone 6 Plus 16GB Space Gray - AT&T",
        "Quantity": 1,
        "SaleInvoiceID": 127354,
        "SerialNumber": "123",
        "TotalPrice": 699,
        "UnitPrice": 700,
        "VendorName": "",
        "VendorSKU": ""
    }
]</pre>

<h3 id='getting-the-vendor-rebate-history-report' class='clickable-header top-level-header'>Getting the Vendor Rebate History Report</h3>

For more information, see [Vendor Rebate History Report](http://iqmetrix.helpdocsonline.com/vendor-rebate-history-report).      


<h4>Request</h4>

<pre>
GET /reports/vendorrebatehistoryreport?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&StartDate={StartDate}&StopDate={StopDate}&SearchMethod={SearchMethod}&ApplyShowOnInvoice={ApplyShowOnInvoice}&ReconciledStatus={ReconciledStatus}&EmployeeIDOfReconcilers={EmployeeIDOfReconcilers}&VendorAccountID={VendorAccountID}&CategoryNumber={CategoryNumber}&ProductIdentifier={ProductIdentifier}&LanguageCode={LanguageCode}&SerialNumber={SerialNumber}&JournalNumber={JournalNumber}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for Vendor Account, 2 for Journal Number, 3 for Reconciled By, 4 for Category, 5 for Tracking Number and 6 for Product SKU
    </li>
    
    <li>
        <code>ApplyShowOnInvoice</code> (<strong>Required</strong>)  - This value should always be 0
    </li>
    
    <li>
        <code>ReconciledStatus</code> (<strong>Required</strong>)  - Acceptable values include 0 for Unreconciled, 1 for Reconciled and 2 for Any
    </li>
    
    <li>
        <code>EmployeeIDOfReconcilers</code> (<strong>Required</strong>)  - Identifier of an employee who reconciled the rebate. Use -1 for all employees
    </li>
    
    <li>
        <code>VendorAccountID</code> (<strong>Required</strong>)  - Identifier of a vendor account. Use -1 for all vendor accounts
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a CategoryNumber. For a complete list see <a href="#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>SerialNumber</code> (Optional)  - Serial Number
    </li>
    
    <li>
        <code>JournalNumber</code> (Optional)  - Journal number
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-vendor-rebate-history-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-vendor-rebate-history-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-vendor-rebate-history-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-vendor-rebate-history-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-vendor-rebate-history-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-vendor-rebate-history-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-vendor-rebate-history-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-vendor-rebate-history-report">
<pre id="http-code-getting-the-vendor-rebate-history-report"><code class="language-http">GET /reports/vendorrebatehistoryreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-vendor-rebate-history-report">
<pre id="curl-code-getting-the-vendor-rebate-history-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-vendor-rebate-history-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-vendor-rebate-history-report"><code class="language-csharp">static IRestResponse GettingTheVendorRebateHistoryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-vendor-rebate-history-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-vendor-rebate-history-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheVendorRebateHistoryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-vendor-rebate-history-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-vendor-rebate-history-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#vendorrebatehistoryreportdata'>VendorRebateHistoryReportData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "ActivationAssociationNumber": 2,
        "ActivationRowID": "0d4652a7-a673-437a-817e-4641961ba3e6",
        "Adjusted": "No",
        "AssociationNumber": 3,
        "CarrierPrice": 0,
        "ChannelName": "English Channel",
        "ChargeBack": "No",
        "Collected": null,
        "Comments": "",
        "Comments2": "null",
        "ContractNumber": "123456789",
        "CustomerID1": 130834,
        "CustomerName1": "Bob Jones",
        "DateCreated": "2016-01-04T14:33:15.737",
        "DateReconciled": "null",
        "DistrictName": "District B2",
        "EmployeeName": "",
        "EmployeeName1": "iQmetrix User",
        "ExtraField": "1234567890",
        "Flagged": "No",
        "GlobalProductID": 812,
        "InvoiceComments": "",
        "InvoicedAt": "Regina Store",
        "InvoicedBy": "Regina Store",
        "InvoiceIDByStore": "HJKIIIN2",
        "InvoiceRowID": "db8f28cf-5017-47f4-9ccf-b90cff32185d",
        "JournalNumber": "",
        "OriginalSaleDate": "null",
        "OriginalSaleInvoiceID": null,
        "OriginalSaleInvoiceIDByStore": "null",
        "PartialCB": 0,
        "PortNumber": "",
        "Postal_code": "56789",
        "ProductIdentifier": "ACVZRB000001",
        "ProductName": "Verizon New Act_EquipmentRebate",
        "ProductRowID": "27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c",
        "Quantity": 1,
        "RatePlan": "Act $9.99 to $20.98",
        "RatePlan2": "",
        "Reconciled": "No",
        "RegionID": 9,
        "RegionName": "Region B",
        "RelatedCost": 404,
        "RelatedPrice": 69.99,
        "RelatedProduct": "Samsung Galaxy S4",
        "RelatedProductSerialNumbers": "ACVZCB0026",
        "RelatedProductSKU": "ACVZCB000244",
        "SaleInvoiceID": 126526,
        "SerialNumber": "123457000000000",
        "SocCode": "123457000000000",
        "SocCode2": "",
        "SpecialIdentifier": "1",
        "SpecialIdentifier1": "",
        "TermCode": "",
        "TotalPrice": 0,
        "UnitPrice": 0,
        "VendorAccountName": "Verizon 2",
        "VendorNumber": "",
        "VendorSKU": ""
    }
]</pre>

<h3 id='getting-the-vendor-rebate-history-report-by-category-and-store' class='clickable-header top-level-header'>Getting the Vendor Rebate History Report By Category and Store</h3>

For more information, see [Vendor Rebate History Report](http://iqmetrix.helpdocsonline.com/vendor-rebate-history-report).      


<h4>Request</h4>

<pre>
GET /reports/vendorrebatehistoryreport_bycategoryandstore?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&StartDate={StartDate}&StopDate={StopDate}&SearchMethod={SearchMethod}&ApplyShowOnInvoice={ApplyShowOnInvoice}&ReconciledStatus={ReconciledStatus}&EmployeeIDOfReconcilers={EmployeeIDOfReconcilers}&VendorAccountID={VendorAccountID}&CategoryNumber={CategoryNumber}&ProductIdentifier={ProductIdentifier}&LanguageCode={LanguageCode}&SerialNumber={SerialNumber}&JournalNumber={JournalNumber}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for Vendor Account, 2 for Journal Number, 3 for Reconciled By, 4 for Category, 5 for Tracking Number and 6 for Product SKU
    </li>
    
    <li>
        <code>ApplyShowOnInvoice</code> (<strong>Required</strong>)  - This value should always be 0
    </li>
    
    <li>
        <code>ReconciledStatus</code> (<strong>Required</strong>)  - Acceptable values include 0 for Unreconciled, 1 for Reconciled and 2 for Any
    </li>
    
    <li>
        <code>EmployeeIDOfReconcilers</code> (<strong>Required</strong>)  - Identifier of an employee who reconciled the rebate. Use -1 for all employees
    </li>
    
    <li>
        <code>VendorAccountID</code> (<strong>Required</strong>)  - Identifier of a vendor account. Use -1 for all vendor accounts
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a CategoryNumber. For a complete list see <a href="#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>SerialNumber</code> (Optional)  - Serial Number
    </li>
    
    <li>
        <code>JournalNumber</code> (Optional)  - Journal number
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-vendor-rebate-history-report-by-category-and-store" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-vendor-rebate-history-report-by-category-and-store" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-vendor-rebate-history-report-by-category-and-store" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-vendor-rebate-history-report-by-category-and-store" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-vendor-rebate-history-report-by-category-and-store" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-vendor-rebate-history-report-by-category-and-store" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-vendor-rebate-history-report-by-category-and-store"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-vendor-rebate-history-report-by-category-and-store">
<pre id="http-code-getting-the-vendor-rebate-history-report-by-category-and-store"><code class="language-http">GET /reports/vendorrebatehistoryreport_bycategoryandstore?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-vendor-rebate-history-report-by-category-and-store">
<pre id="curl-code-getting-the-vendor-rebate-history-report-by-category-and-store"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport_bycategoryandstore?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-vendor-rebate-history-report-by-category-and-store">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-vendor-rebate-history-report-by-category-and-store"><code class="language-csharp">static IRestResponse GettingTheVendorRebateHistoryReportByCategoryAndStore()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport_bycategoryandstore?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-vendor-rebate-history-report-by-category-and-store">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-vendor-rebate-history-report-by-category-and-store"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheVendorRebateHistoryReportByCategoryAndStore() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport_bycategoryandstore?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-vendor-rebate-history-report-by-category-and-store">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-vendor-rebate-history-report-by-category-and-store"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport_bycategoryandstore?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#vendorrebatehistoryreportdata'>VendorRebateHistoryReportData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "ActivationAssociationNumber": 2,
        "ActivationRowID": "0d4652a7-a673-437a-817e-4641961ba3e6",
        "Adjusted": "No",
        "AssociationNumber": 3,
        "CarrierPrice": 0,
        "ChannelName": "English Channel",
        "ChargeBack": "No",
        "Collected": null,
        "Comments": "",
        "Comments2": "null",
        "ContractNumber": "123456789",
        "CustomerID1": 130834,
        "CustomerName1": "Bob Jones",
        "DateCreated": "2016-01-04T14:33:15.737",
        "DateReconciled": "null",
        "DistrictName": "District B2",
        "EmployeeName": "",
        "EmployeeName1": "iQmetrix User",
        "ExtraField": "1234567890",
        "Flagged": "No",
        "GlobalProductID": 812,
        "InvoiceComments": "",
        "InvoicedAt": "Regina Store",
        "InvoicedBy": "Regina Store",
        "InvoiceIDByStore": "HJKIIIN2",
        "InvoiceRowID": "db8f28cf-5017-47f4-9ccf-b90cff32185d",
        "JournalNumber": "",
        "OriginalSaleDate": "null",
        "OriginalSaleInvoiceID": null,
        "OriginalSaleInvoiceIDByStore": "null",
        "PartialCB": 0,
        "PortNumber": "",
        "Postal_code": "56789",
        "ProductIdentifier": "ACVZRB000001",
        "ProductName": "Verizon New Act_EquipmentRebate",
        "ProductRowID": "27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c",
        "Quantity": 1,
        "RatePlan": "Act $9.99 to $20.98",
        "RatePlan2": "",
        "Reconciled": "No",
        "RegionID": 9,
        "RegionName": "Region B",
        "RelatedCost": 404,
        "RelatedPrice": 69.99,
        "RelatedProduct": "Samsung Galaxy S4",
        "RelatedProductSerialNumbers": "ACVZCB0026",
        "RelatedProductSKU": "ACVZCB000244",
        "SaleInvoiceID": 126526,
        "SerialNumber": "123457000000000",
        "SocCode": "123457000000000",
        "SocCode2": "",
        "SpecialIdentifier": "1",
        "SpecialIdentifier1": "",
        "TermCode": "",
        "TotalPrice": 0,
        "UnitPrice": 0,
        "VendorAccountName": "Verizon 2",
        "VendorNumber": "",
        "VendorSKU": ""
    }
]</pre>

<h3 id='getting-the-vendor-rebate-history-report-by-category-and-employees' class='clickable-header top-level-header'>Getting the Vendor Rebate History Report By Category and Employees</h3>

For more information, see [Vendor Rebate History Report](http://iqmetrix.helpdocsonline.com/vendor-rebate-history-report).      


<h4>Request</h4>

<pre>
GET /reports/vendorrebatehistoryreport_bycategoryandemployees?ForWho={LocationTypeId}&ForWhoIDs={RQCompanyTreeNodeIds}&StartDate={StartDate}&StopDate={StopDate}&SearchMethod={SearchMethod}&ApplyShowOnInvoice={ApplyShowOnInvoice}&ReconciledStatus={ReconciledStatus}&EmployeeIDOfReconcilers={EmployeeIDOfReconcilers}&VendorAccountID={VendorAccountID}&CategoryNumber={CategoryNumber}&ProductIdentifier={ProductIdentifier}&LanguageCode={LanguageCode}&SerialNumber={SerialNumber}&JournalNumber={JournalNumber}&Auth={AccessToken}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}} at which to perform the report. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    
    <li>
        <code>RQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of Identifiers for {{RQCompanyTreeNodes}} to include in the report. To ignore this and specify All nodes for a LocationType, use -1. For a complete list, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>SearchMethod</code> (<strong>Required</strong>)  - Acceptable values include 1 for Vendor Account, 2 for Journal Number, 3 for Reconciled By, 4 for Category, 5 for Tracking Number and 6 for Product SKU
    </li>
    
    <li>
        <code>ApplyShowOnInvoice</code> (<strong>Required</strong>)  - This value should always be 0
    </li>
    
    <li>
        <code>ReconciledStatus</code> (<strong>Required</strong>)  - Acceptable values include 0 for Unreconciled, 1 for Reconciled and 2 for Any
    </li>
    
    <li>
        <code>EmployeeIDOfReconcilers</code> (<strong>Required</strong>)  - Identifier of an employee who reconciled the rebate. Use -1 for all employees
    </li>
    
    <li>
        <code>VendorAccountID</code> (<strong>Required</strong>)  - Identifier of a vendor account. Use -1 for all vendor accounts
    </li>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a CategoryNumber. For a complete list see <a href="#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
    </li>
    
    <li>
        <code>SerialNumber</code> (Optional)  - Serial Number
    </li>
    
    <li>
        <code>JournalNumber</code> (Optional)  - Journal number
    </li>
    
    <li>
        <code>AccessToken</code> (Optional)  - An {{AccessToken_Glossary}} that can be placed in the URI instead of the Authorization header to authenticate
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-vendor-rebate-history-report-by-category-and-employees" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-vendor-rebate-history-report-by-category-and-employees" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-vendor-rebate-history-report-by-category-and-employees" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-vendor-rebate-history-report-by-category-and-employees" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-vendor-rebate-history-report-by-category-and-employees" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-vendor-rebate-history-report-by-category-and-employees" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-vendor-rebate-history-report-by-category-and-employees"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-vendor-rebate-history-report-by-category-and-employees">
<pre id="http-code-getting-the-vendor-rebate-history-report-by-category-and-employees"><code class="language-http">GET /reports/vendorrebatehistoryreport_bycategoryandemployees?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-vendor-rebate-history-report-by-category-and-employees">
<pre id="curl-code-getting-the-vendor-rebate-history-report-by-category-and-employees"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport_bycategoryandemployees?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-vendor-rebate-history-report-by-category-and-employees">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-vendor-rebate-history-report-by-category-and-employees"><code class="language-csharp">static IRestResponse GettingTheVendorRebateHistoryReportByCategoryAndEmployees()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport_bycategoryandemployees?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-vendor-rebate-history-report-by-category-and-employees">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-vendor-rebate-history-report-by-category-and-employees"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheVendorRebateHistoryReportByCategoryAndEmployees() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport_bycategoryandemployees?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-vendor-rebate-history-report-by-category-and-employees">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-vendor-rebate-history-report-by-category-and-employees"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/vendorrebatehistoryreport_bycategoryandemployees?ForWho=1&ForWhoIDs=6679&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff&Auth=b0k0dY70N3Vv9jR1b9oEdW9IeT5WIn85WCYFJRo6AiIKLEMBFwNbEQsfeCUeM3gdPA1gAAVxWTJacX8mJyBaGRcFVwQOEV49NgBz', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#vendorrebatehistoryreportdata'>VendorRebateHistoryReportData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "ActivationAssociationNumber": 2,
        "ActivationRowID": "0d4652a7-a673-437a-817e-4641961ba3e6",
        "Adjusted": "No",
        "AssociationNumber": 3,
        "CarrierPrice": 0,
        "ChannelName": "English Channel",
        "ChargeBack": "No",
        "Collected": null,
        "Comments": "",
        "Comments2": "null",
        "ContractNumber": "123456789",
        "CustomerID1": 130834,
        "CustomerName1": "Bob Jones",
        "DateCreated": "2016-01-04T14:33:15.737",
        "DateReconciled": "null",
        "DistrictName": "District B2",
        "EmployeeName": "",
        "EmployeeName1": "iQmetrix User",
        "ExtraField": "1234567890",
        "Flagged": "No",
        "GlobalProductID": 812,
        "InvoiceComments": "",
        "InvoicedAt": "Regina Store",
        "InvoicedBy": "Regina Store",
        "InvoiceIDByStore": "HJKIIIN2",
        "InvoiceRowID": "db8f28cf-5017-47f4-9ccf-b90cff32185d",
        "JournalNumber": "",
        "OriginalSaleDate": "null",
        "OriginalSaleInvoiceID": null,
        "OriginalSaleInvoiceIDByStore": "null",
        "PartialCB": 0,
        "PortNumber": "",
        "Postal_code": "56789",
        "ProductIdentifier": "ACVZRB000001",
        "ProductName": "Verizon New Act_EquipmentRebate",
        "ProductRowID": "27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c",
        "Quantity": 1,
        "RatePlan": "Act $9.99 to $20.98",
        "RatePlan2": "",
        "Reconciled": "No",
        "RegionID": 9,
        "RegionName": "Region B",
        "RelatedCost": 404,
        "RelatedPrice": 69.99,
        "RelatedProduct": "Samsung Galaxy S4",
        "RelatedProductSerialNumbers": "ACVZCB0026",
        "RelatedProductSKU": "ACVZCB000244",
        "SaleInvoiceID": 126526,
        "SerialNumber": "123457000000000",
        "SocCode": "123457000000000",
        "SocCode2": "",
        "SpecialIdentifier": "1",
        "SpecialIdentifier1": "",
        "TermCode": "",
        "TotalPrice": 0,
        "UnitPrice": 0,
        "VendorAccountName": "Verizon 2",
        "VendorNumber": "",
        "VendorSKU": ""
    }
]</pre>

<h3 id='getting-category-numbers' class='clickable-header top-level-header'>Getting Category Numbers</h3>



<h4>Request</h4>

<pre>
GET /lists/categorynumber
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-category-numbers" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-category-numbers" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-category-numbers" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-category-numbers" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-category-numbers" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-category-numbers" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-category-numbers"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-category-numbers">
<pre id="http-code-getting-category-numbers"><code class="language-http">GET /lists/categorynumber
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-category-numbers">
<pre id="curl-code-getting-category-numbers"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/categorynumber" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-category-numbers">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-category-numbers"><code class="language-csharp">static IRestResponse GettingCategoryNumbers()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/categorynumber");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-category-numbers">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-category-numbers"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingCategoryNumbers() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/categorynumber");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-category-numbers">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-category-numbers"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/categorynumber', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>ID</code> (String) </li><li><code>Description</code> (String) </li></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "ID": "1010271216",
        "Description": "Rate Plans"
    }
]</pre>

<h3 id='getting-language-codes' class='clickable-header top-level-header'>Getting Language Codes</h3>



<h4>Request</h4>

<pre>
GET /lists/languages
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-language-codes" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-language-codes" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-language-codes" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-language-codes" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-language-codes" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-language-codes" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-language-codes"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-language-codes">
<pre id="http-code-getting-language-codes"><code class="language-http">GET /lists/languages
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-language-codes">
<pre id="curl-code-getting-language-codes"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/languages" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-language-codes">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-language-codes"><code class="language-csharp">static IRestResponse GettingLanguageCodes()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/languages");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-language-codes">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-language-codes"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingLanguageCodes() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/languages");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-language-codes">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-language-codes"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/languages', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>ID</code> (String) </li></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "ID": "en-us"
    }
]</pre>

<h3 id='getting-products-in-rq' class='clickable-header top-level-header'>Getting Products in RQ</h3>



<h4>Request</h4>

<pre>
GET /lists/productidentifier
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-products-in-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-products-in-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-products-in-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-products-in-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-products-in-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-products-in-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-products-in-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-products-in-rq">
<pre id="http-code-getting-products-in-rq"><code class="language-http">GET /lists/productidentifier
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-products-in-rq">
<pre id="curl-code-getting-products-in-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/productidentifier" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-products-in-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-products-in-rq"><code class="language-csharp">static IRestResponse GettingProductsInRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/productidentifier");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-products-in-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-products-in-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingProductsInRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/productidentifier");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-products-in-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-products-in-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/productidentifier', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>ID</code> (String) </li><li><code>Description</code> (String) </li></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "ID": "ASCLMO000001",
        "Description": "HC Samsung U340"
    }
]</pre>

<h3 id='getting-reason-codes' class='clickable-header top-level-header'>Getting Reason Codes</h3>



<h4>Request</h4>

<pre>
GET /lists/reasoncode
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-reason-codes" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-reason-codes" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-reason-codes" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-reason-codes" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-reason-codes" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-reason-codes" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-reason-codes"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-reason-codes">
<pre id="http-code-getting-reason-codes"><code class="language-http">GET /lists/reasoncode
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-reason-codes">
<pre id="curl-code-getting-reason-codes"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/reasoncode" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-reason-codes">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-reason-codes"><code class="language-csharp">static IRestResponse GettingReasonCodes()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/reasoncode");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-reason-codes">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-reason-codes"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingReasonCodes() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/reasoncode");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-reason-codes">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-reason-codes"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/reasoncode', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#reasoncode'>ReasonCode</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "ID": "1",
        "Description": "Write Off"
    }
]</pre>

<h3 id='getting-location-types-in-rq' class='clickable-header top-level-header'>Getting Location Types in RQ</h3>

This request will return a list of hierarchical levels in your company tree in RQ.

To learn more about Locations in RQ, see [Location Setup](http://iqmetrix.helpdocsonline.com/location-setup)


<h4>Request</h4>

<pre>
GET /lists/forwhoid
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-location-types-in-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-location-types-in-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-location-types-in-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-location-types-in-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-location-types-in-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-location-types-in-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-location-types-in-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-location-types-in-rq">
<pre id="http-code-getting-location-types-in-rq"><code class="language-http">GET /lists/forwhoid
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-location-types-in-rq">
<pre id="curl-code-getting-location-types-in-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/forwhoid" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-location-types-in-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-location-types-in-rq"><code class="language-csharp">static IRestResponse GettingLocationTypesInRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/forwhoid");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-location-types-in-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-location-types-in-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingLocationTypesInRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/forwhoid");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-location-types-in-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-location-types-in-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/forwhoid', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#locationtype'>LocationType</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "ID": "1",
        "Description": "Company"
    }
]</pre>

<h3 id='getting-nodes-by-location-type' class='clickable-header top-level-header'>Getting Nodes By Location Type</h3>

This request will return a list of locations in RQ a report can be restricted to.


<h4>Request</h4>

<pre>
GET /lists/forwhoids?ForWho={LocationTypeId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>LocationTypeId</code> (<strong>Required</strong>)  - Identifier for a {{LocationType}}. For a complete list, see <a href="#getting-location-types-in-rq">Getting Location Types in RQ</a>
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-nodes-by-location-type" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-nodes-by-location-type" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-nodes-by-location-type" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-nodes-by-location-type" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-nodes-by-location-type" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-nodes-by-location-type" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-nodes-by-location-type"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-nodes-by-location-type">
<pre id="http-code-getting-nodes-by-location-type"><code class="language-http">GET /lists/forwhoids?ForWho=1
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-nodes-by-location-type">
<pre id="curl-code-getting-nodes-by-location-type"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/forwhoids?ForWho=1" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-nodes-by-location-type">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-nodes-by-location-type"><code class="language-csharp">static IRestResponse GettingNodesByLocationType()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/forwhoids?ForWho=1");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-nodes-by-location-type">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-nodes-by-location-type"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingNodesByLocationType() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/forwhoids?ForWho=1");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-nodes-by-location-type">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-nodes-by-location-type"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/forwhoids?ForWho=1', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#rqcompanytreenode'>RQCompanyTreeNode</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "ID": 1,
        "Column1": "KENTEL Corp",
        "EntityId": 11432
    }
]</pre>

<h3 id='getting-a-list-of-manufacturers-in-rq' class='clickable-header top-level-header'>Getting a List of Manufacturers in RQ</h3>



<h4>Request</h4>

<pre>
GET /lists/manufactureid
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-list-of-manufacturers-in-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-list-of-manufacturers-in-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-list-of-manufacturers-in-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-list-of-manufacturers-in-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-list-of-manufacturers-in-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-list-of-manufacturers-in-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-list-of-manufacturers-in-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-list-of-manufacturers-in-rq">
<pre id="http-code-getting-a-list-of-manufacturers-in-rq"><code class="language-http">GET /lists/manufactureid
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-list-of-manufacturers-in-rq">
<pre id="curl-code-getting-a-list-of-manufacturers-in-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/manufactureid" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-list-of-manufacturers-in-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-list-of-manufacturers-in-rq"><code class="language-csharp">static IRestResponse GettingAListOfManufacturersInRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/manufactureid");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-list-of-manufacturers-in-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-list-of-manufacturers-in-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAListOfManufacturersInRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/manufactureid");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-list-of-manufacturers-in-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-list-of-manufacturers-in-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/manufactureid', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>ID</code> (String) </li><li><code>Description</code> (String) </li></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "ID": "9",
        "Description": "LG"
    }
]</pre>

<h3 id='getting-a-list-of-stores-in-rq' class='clickable-header top-level-header'>Getting A List of Stores in RQ</h3>



<h4>Request</h4>

<pre>
GET /lists/stores
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-list-of-stores-in-rq" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-list-of-stores-in-rq" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-list-of-stores-in-rq" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-list-of-stores-in-rq" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-list-of-stores-in-rq" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-list-of-stores-in-rq" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-list-of-stores-in-rq"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-list-of-stores-in-rq">
<pre id="http-code-getting-a-list-of-stores-in-rq"><code class="language-http">GET /lists/stores
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-list-of-stores-in-rq">
<pre id="curl-code-getting-a-list-of-stores-in-rq"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/lists/stores" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-list-of-stores-in-rq">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-list-of-stores-in-rq"><code class="language-csharp">static IRestResponse GettingAListOfStoresInRq()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/lists/stores");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-list-of-stores-in-rq">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-list-of-stores-in-rq"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAListOfStoresInRq() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/lists/stores");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-list-of-stores-in-rq">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-list-of-stores-in-rq"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/lists/stores', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>StoreID</code> (Integer) </li><li><code>LocationEntityID</code> (Integer) </li><li><code>StoreName</code> (String) </li></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "StoreID": 1188,
        "LocationEntityID": 14202,
        "StoreName": "Altera Kiosk"
    }
]</pre>