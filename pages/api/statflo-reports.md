---
title:  StatFlo Reports
permalink: /api/StatFlo-Reports/
tags: []
keywords: 
audience: 
last_updated: 29-11-2016
summary: 
rouge: false
noPopUp: true
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}


## Overview


To get started, see [RQ Data Connect Guide](/guides/rq-data-connect/).    

#### Note

For reports that provide optional URI parameters for filtering at different levels (ForWho/ForWhoIDs/LocationType/LocationTypeIDs), omitting these values will run the report at the default company level.

#### Authentication

This API supports many different methods of authentication, see {{AuthenticationOptions}}.   


## Endpoints

* Sandbox: <a href="https://rqdataconnectdemo.iqmetrix.net">https://rqdataconnectdemo.iqmetrix.net</a>
* Production: <a href="https://rqdataconnect.iqmetrix.net">https://rqdataconnect.iqmetrix.net</a>

## Resources

### ActivationGrossProfitReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| InvoiceDate | DateTime | Date - date of the transaction | `2016-10-12T09:16:24.63` |
| InvoiceID | INT | Identifier for an invoice in RQ | `129920` |
| InvoiceIDByStore | VARCHAR(14) | Invoice # - invoice number of the transaction | `84WEAIN15624` |
| StoreTypeName | NVARCHAR(MAX) | Location Type - location type where the transaction was performed | `Retail Store` |
| LocationName | NVARCHAR(MAX) | Location -  location where the transaction occurred | `84 West` |
| Profit | MONEY | Profit - amount of profit made on the activation, includes the total profit for the parameters run | `667.99` |
| CustomerID | INT | Identifier for the customer in RQ | `108560` |
| CustomerName | VARCHAR(151) | Customer - name of the customer on the invoice | `AAA AND ASSOCIATES` |
| PhoneDescription | NVARCHAR(MAX) | Phone - phone used in the activation | `Apple iPhone 6 Plus 16GB White - AT&T` |
| PhoneNumber | VARCHAR(30) | Phone # - phone number entered into the Phone Activation Wizard | `3065014785` |
| TermDescription | NVARCHAR(MAX) | Term - term selected with the activation | `CRU 2 YR Business New Act` |
| RatePlanDescription | NVARCHAR(MAX) | Rate Plan - rate plan selected for the activation | `2 YR CRU Business Legacy Plan $0.01 - $9.99` |
| VendorAccountName | VARCHAR(100) | Vendor Account - vendor account used in the activation | `AT&T` |
| EmployeeName | VARCHAR(51) | Employee - sales person on the invoice | `iQmetrix User` |
| DistrictName | NVARCHAR(MAX) | District - district the store is in | `Valley Area District` |
| RegionName | NVARCHAR(MAX) | Region - region the store is in | `Region A` |
| ChannelName | NVARCHAR(MAX) | Channel - channel the store is in | `Regina Channel` |

### CouponSummaryReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Date | DateTime | Date - every day in the date range selected | `2016-01-01T00:00:00` |
| QuantityApplied | INT | Qty Applied - total quantity of coupons applied for the day | `1` |
| QuantityRefunded | INT | Qty Refunded - total quantity of coupons refunded for the day | `1` |
| NetQuantity | INT | Net Qty - net quantity of coupons for the day calculated as Qty Applied - Qty Refunded | `0` |
| TotalValue | MONEY | Total Value - net dollar value of all coupons for the day | `-10` |

### CustomerListReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Address | VARCHAR(50) | Address - first line of the address | `12 Hello St.` |
| Address2 | VARCHAR(50) | Address 2 - second line of the address, if necessary | `n/a` |
| BillingAccountNumber | NVARCHAR(MAX) | BAN -  if your company uses BAN you will enter it in the Customer profile and it will show here |  |
| City | VARCHAR(50) | City - customer's city | `Fargo` |
| ContactNumber | VARCHAR(200) | Contact # - the number that is selected on the customer's profile, it can be any of the number options there | `5555555555` |
| ContactTypeName | NVARCHAR(MAX) | Contact Type - as defined in General Customer Setup and assigned in the Custom Fields section on the customer's profile |  |
| Country | VARCHAR(50) | Country - customer's country | `United States` |
| CustomerCompanyName | VARCHAR(50) | Company Name - may be blank depending on the kind of customer | `KENTEL` |
| CustomerFirstName | VARCHAR(50) | First Name - may be blank depending on the kind of customer | `Carrie` |
| CustomerID | INT | Identifier for a Customer in RQ | `2108754` |
| CustomerLastName | VARCHAR(50) | Last Name - may be blank depending on the kind of customer | `Madison` |
| DateCreated | DateTime | Created On - day and time the customer's profile was created | `2016-01-26T20:55:53.227` |
| DeclineToProvideEmail | BIT | Decline Email - the option for customers to decline email | `false` |
| Email | VARCHAR(200) | Email - may be blank, if so, the context menu will not have the Email Customer option | `carry@test.iq` |
| EmployeeName | VARCHAR(51) | Created By - employee who created the profile | `iQmetrix Employee` |
| EmployeeNameAssignedTo | VARCHAR(51) | Assigned To - may be blank if the customer has not been assigned to an employee | `iQmetrix Employee` |
| IndustryTypeName | NVARCHAR(MAX) | Industry Type - as defined in General Customer Setup and assigned in the Custom Fields section on the customer's profile |  |
| MultiLevelPriceID | INT | Pricing Group - as defined in Multi-Level Pricing - Setup and assigned in the Discount Level field in the More Information section on the customer's profile | `1` |
| NumberOfActivations | INT | # of Activations - number of Activations the customer has completed as recorded in RQ | `0` |
| PositionTypeName | NVARCHAR(MAX) | Position Type - as defined in General Customer Setup and assigned in the Custom Fields section on the customer's profile |  |
| PostalCode | VARCHAR(15) | Zip/Postal Code - zip code (USA) or postal code (Canada) | `90123` |
| Province | VARCHAR(50) | State/Province - customer's state or province | `ND` |
| TracPointMemberNumber | VARCHAR(30) | Member # - this number is automatically generated when a new customer is created | `C2981754hduw` |
| TypeOfCustomer | INT | Type Of Customer - 0 for Company, or 3 for Individual | `3` |
| VIPCustomer | TINYINT | VIP Customer - will be checked if this is a VIP Customer  | `0` |

### EmployeeMasterListReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Assigned Groups | NVARCHAR(MAX) | Assigned Groups - states the groups assigned to the employee | `Sales Representative` |
| Assigned Locations | NVARCHAR(MAX) | Assigned Locations - states the locations assigned to the individual | `84 West Target Dothan Wiregrass Commons Mall - Test Long Store Name Here` |
| City | VARCHAR(50) | City - city of the employee as entered on their profile | `Dothan` |
| Clear Fingerprints | VARCHAR(2) | Clear Fingerprints - this will allow you to clear fingerprints | `No` |
| Commission Group | VARCHAR(50) | Commission Group - commission group of the employee as entered on their profile | `Sales Representative` |
| Compensation Type | VARCHAR(21) | Compensation Type - compensation type of the employee as entered on their profile | `Commission` |
| Country | VARCHAR(50) | Country - country of the employee as entered on their profile | `USA` |
| Disabled | VARCHAR(3) | Disabled - indicates whether or not the employee is disabled | `No` |
| Email Address | VARCHAR(50) | Email Address - email address of the employee as entered on their profile (in the Email Settings section) | `hilary@kentel.com` |
| Email Display Name | VARCHAR(50) | Email Display Name - email display name of the employee as entered on their profile (in the Email Settings section) | `hilary@kentel.com` |
| Email Password | VARCHAR(1) | Email Password - email password of the employee as entered on their profile (in the Email Settings section) | `test` |
| Email Server | VARCHAR(50) | Email Server - email server of the employee as entered on their profile (in the Email Settings section) | `outlook.kentel.com` |
| Email User Name | VARCHAR(50) | Email Username -email username of the employee as entered on their profile (in the Email Settings section) | `hilary` |
| Employee ID | INT | Identifier for the employee in RQ | `60` |
| Employee Name | VARCHAR(51) | Employee Name - name of the employee as entered on their profile | `Hillary Oliver` |
| Fingerprint Enabled | VARCHAR(3) | Fingerprint Entered - indicates if the employee has fingerprints entered | `No` |
| Frequency | VARCHAR(12) | Frequency - compensation frequency of the employee as entered on their profile | `N/A` |
| FrequencyEffective | NVARCHAR(4000) | Frequency Effective - the frequency effective date of the employee as entered on their profile | `Jan 10 2011` |
| Gender | VARCHAR(9) | Gender - gender of the employee as entered on their profile | `Male` |
| ID # | VARCHAR(25) | ID # - employees ID listed under the admin tab of the profile | `912345987654321` |
| Image Uploaded | VARCHAR(3) | Image Uploaded - indicates if the employee has a profile picture uploaded | `No` |
| Internal | VARCHAR(12) | Interval - compensation interval of the employee as entered on their profile | `N/A` |
| Intrgration Username | VARCHAR(255) | Username | `hilary.kentel` |
| Job Title | VARCHAR(50) | Job Title - job title of the employee as entered on their profile | `Wireless Consultant` |
| Language | VARCHAR(255) | Language - employees primary language | `en-us` |
| Locked | VARCHAR(3) | Locked - employee is locked so they can not be accessed | `No` |
| Part Time | INT | Part Time - indicates if the employee is part time | `0` |
| Personal Days Available | INT | Personal Days Available - will state the personal days available | `0` |
| Personal Email | VARCHAR(50) | Personal Email - personal email of the employee as entered on their profile | `hilary@kentel.com` |
| Primary Location | NVARCHAR(MAX) | Primary Location - primary location of the employee as entered on their profile | `Corporate Office` |
| Rate Effective | NVARCHAR(4000) | Rate Effective - rate effective date of the employee as entered on their profile | `Jan 10 2011` |
| Rate | MONEY | Rate - compensation rate of the employee as entered on their profile | `0` |
| Role | VARCHAR(1) | Role - role of the employee as entered on their profile | `Store Manager` |
| Security Role | NVARCHAR(MAX) | Security Role - security role of the employee as entered on their profile | `Sales Representative` |
| Sick Days Available | INT | Sick Days Available - will state the sick days available | `0` |
| Start Date | NVARCHAR(4000) | Start Date - the start date of the employee | `Dec 05 2010` |
| State / Prov | VARCHAR(50) | State/Prov - state or province of the employee as entered on their profile | `AL` |
| Supervisor | VARCHAR(51) | Supervisor - supervisor of the employee as entered on their profile | `Robyn Roberts` |
| Termination Date | NVARCHAR(4000) | Termination Date - states the termination date of the employee | `Today` |
| Termination Notes | VARCHAR(255) | Termination Notes - states the notes for the termination | `Vacation days to be paid` |
| Username | VARCHAR(51) | Username - username of the employee as entered in their profile | `Hillary.Oliver` |
| Vacation Days Available | INT | Vacation Days Available - will state the vacation days available | `0` |
| Work # | VARCHAR(50) | Work # - work number of the employee as entered on their profile | `3347020770` |

### GraphedPerformanceMetrixReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ID | INT | Identifier for a performance metrix group in RQ | `6` |
| Name | NVARCHAR(MAX) | Name of a performance metrix group in RQ | `51247 Test_update` |
| AttachmentRate | VARCHAR(23) | Comparison of Performance Groups for the Attachment Rate displayed as a ratio | `1249 : 2` |
| AttachmentRateTarget | VARCHAR(23) | Attachment rate target | `0 : 0` |
| DisplayFormat | INT | 1: Ratio Format, 2: Percentage Format | `2` |
| IsAttachmentRate | BIT | A flag to indicate if performance group is an attachment rate | `true` |
| Margin | MONEY | Margin on sales in this performance group | `null` |
| MarginTarget | MONEY | Margin target | `null` |
| Priority | INT | Priority | `-1` |
| Profit | MONEY | Net profit amount of sales in this performance group | `null` |
| ProfitTarget | MONEY | Profit target | `null` |
| Quantity | INT | Net count of SKUs sold in this performance group | `null` |
| QuantityTarget | INT | Quantity target | `null` |
| Sales | MONEY | Net dollar amount of sales in this performance group | `null` |
| SalesTarget | MONEY | Sales target | `null` |

### GraphedPerformanceMetrixBreakdownReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ID | INT | Internal idenfier in RQ | `1` |
| Name | NVARCHAR(MAX) | Name of company, region, division, location or employee depending on ByWho URL parameter | `84 West` |
| GroupInvoiceCount | INT | This number represents the size of the section of pie graph | `839` |
| IsAttachmentRate | BIT | A flag to indicate if performance group is an attachment rate | `false` |
| Margin | MONEY | Margin | `-1691.5747` |
| MarginTarget | DECIMAL | Margin target | `0` |
| Profit | MONEY | Profit | `-45860859.08` |
| ProfitTarget | MONEY | Profit target | `0` |
| Quantity | INT | Quantity | `530` |
| QuantityTarget | INT | Quantity target | `0` |
| Sales | MONEY | Total sales | `27111.34` |
| SalesTarget | MONEY | Sales target | `0` |
| TotalInvoiceCount | INT | This number represents the total size of the graph  | `2772` |

### LocationMasterListReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Abbreviation | VARCHAR(5) | Abbreviation - this cannot be edited | `LIT22` |
| Address | NVARCHAR(MAX) | Address - address assigned to location | `4970 Hillside Avenue` |
| AddressVerified | VARCHAR(12) | Address Verified - if the address can not be verified then you will have the option to edit the Latitude and Longitude to verify it | `Not Verified` |
| AdjustDST | BIT | Adjust DST - check if the location adjusts for daylight savings | `false` |
| BankDetails | NVARCHAR(MAX) | Bank Details - the Banks name for the location | `CashSmart` |
| CashPolicy | VARCHAR(13) | Cash Policy - states the cash policy (single/multi-drawer) | `Single-Drawer` |
| ChannelName | NVARCHAR(MAX) | Channel - channel the region is assigned to | `Alabama` |
| City | VARCHAR(50) | City - city the location resides in | `Kansas` |
| Comment_on_OE | BIT | Comment on OE - show product and location comments on sales order | `false` |
| Country | VARCHAR(50) | Country - country the location is located in | `United States` |
| DepositTaken | MONEY | Deposit Taken - lists the deposit if applicable | `0` |
| Disabled | INT | Disable - indicates if the location is enabled or disabled | `1` |
| DistrictName | NVARCHAR(MAX) | District - district the location is assigned to | `Smithton` |
| EmailAddress | VARCHAR(255) | Email Address - email address assigned to the location | `abarea@kentel.com` |
| FaxNumber | VARCHAR(10) | Fax # - Fax # listed under the location | `5555555555` |
| GeneralLocationNotes | VARCHAR(255) | General Location Notes - notes specific to the location | `note` |
| GLCode | VARCHAR(100) | Code - coded associated to the location | `-MILLH` |
| HideCustomerAddress | BIT | Hide Customer Address - prevents the customers address from being seen on an invoice | `false` |
| InsuranceAmount | MONEY | Insurance - cost of Insurance | `0` |
| InsuranceCompany | NVARCHAR(MAX) | Insurance Company - name of the insurance company | `Safefair` |
| LandlordName | NVARCHAR(MAX) | Landlord Name - name of the landlord | `Jim Jones` |
| LandlordNotes | NVARCHAR(MAX) | Landlord Notes - notes specific to the landlord | `sample note` |
| Latitude | DECIMAL | Latitude - latitude location of the store | `50.443559` |
| LeaseEndDate | DateTime | Lease End Date - the day the lease ends | `2014-12-24T00:00:00` |
| LeaseNotes | NVARCHAR(MAX) | Lease Notes - notes specific to the lease | `note` |
| LeaseStartDate | DateTime | Lease Start Date - day the lease started | `2014-11-26T00:00:00` |
| LocationCode | VARCHAR(100) | Location Code - code entered in the property details tab in the Location Setup | `500` |
| LocationEntityID | INT | Identifier of the store as a <a href='http://developers.iqmetrix.com/api/company-tree/#location'>Location</a> in Entity Store | `48540` |
| Longitude | DECIMAL | Longitude - longitude location of the store | `-104.612034` |
| ManagerCommissionable | BIT | Manager Commissionable - indicates if the manager is commissionable. | `false` |
| ManagerEmployeeID | INT | Manager - manager assigned to the location | `233` |
| MaxCashDrawer | MONEY | Max Cash Drawer - maximum amount of cash allowed in a cash drawer | `0` |
| OtherCharges | MONEY | Other Charges - other charges associated to the location | `0` |
| PAW_on_OE | BIT | PAW on OE - launch PAW on sales orders | `false` |
| Phone_on_OE | BIT | Force phone number for entry on sales orders | `true` |
| PhoneNumber | VARCHAR(10) | Phone # - designated number for the location | `4353424234` |
| PropertyTaxes | MONEY | Property Taxes - applicable property taxes | `0` |
| RegionName | NVARCHAR(MAX) | Region - region the district is assigned to | `Abarea` |
| RelocationDate | DateTime | Relocation Date - lists the date of the relocation if applicable | `2016-02-26T00:00:00` |
| Rent | MONEY | Rent - rent amount for the location | `0` |
| SaleInvoiceComment | NVARCHAR(MAX) | Sale Invoice Comment - locations sales invoice comment | `Sale Invoice Comments` |
| Serial_on_OE | BIT | Serial # on OE - force serial # for entry on sales orders | `false` |
| SquareFootage | INT | Square Feet - approx square feet of the store | `0` |
| StaffLevel | DECIMAL | Staff Level - designated staffing level for the location | `12` |
| StateProv | NVARCHAR(3) | State/Prov - state or province the location is located in | `AL` |
| StoreID | INT | Internal identifier for the store in RQ | `1187` |
| StoreName | NVARCHAR(MAX) | Store Name - name of the store | `Dufferin Mall` |
| StoreType | NVARCHAR(MAX) | Store Type - will state the store type | `Retail Store` |
| Taxes | NVARCHAR(MAX) | Taxes - taxes assigned to the location | `GOODS AND SERVICES TAX (GST)` |
| TimeZone | VARCHAR(200) | Time Zone - time zone assigned to location | `(GMT-06:00) Saskatchewan` |
| UseLocationEmail | BIT | Use Location for Email - use the location for the email contact | `false` |
| ZipPostal | VARCHAR(15) | Zip/Postal - zip/postal for the location | `90210` |

### ProductDetailReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Activation_RowID | UNIQUEIDENTIFIER | Internal identifier in RQ | `d3d65281-5201-4927-9bac-6f3a47ddf56b` |
| AdjustedUnitPrice | MONEY | Adjusted Unit Price - price that the product was actually sold for | `25` |
| BillingAccountNumber | NVARCHAR(MAX) | BAN -  if your company uses BAN you will enter it in the Customer profile and it will show here |  |
| CarrierPrice | MONEY | Carrier Price - value or revenue that a carrier assigns this feature | `null` |
| CategoryPath | NVARCHAR(MAX) | Category - the category the product belongs to | `>> Phones >> Galaxies` |
| ChannelName | NVARCHAR(MAX) | Channel - channel for the rows location | `English Channel` |
| Comments | TEXT | Invoice Comments - comments added to the invoice |  |
| ContractNumber | VARCHAR (50) | Contract # - number of the contract, recorded at the time of sale | `12345` |
| CustomerID | INT | Internal identifier for a customer in RQ | `131149` |
| CustomerName | VARCHAR (101) | Customer - name of the customer as entered on their profile | `Bob Jones` |
| DateCreated | DateTime | Sold On - date and time the invoice was tendered | `2016-05-13T12:18:08.723` |
| DistrictName | NVARCHAR(MAX) | District - district for the rows location | `Westminster` |
| EmployeeName | VARCHAR (51) | Sold By - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box | `iQmetrix User` |
| EmployeeID | INT | Internal identifier for an employee in RQ | `4` |
| GlobalProductID | INT | Internal identifier in RQ | `5179` |
| InvoicedAt | NVARCHAR(MAX) | Invoiced At - name of the location which takes the inventory on a refund, usually the same as Invoiced By but will be different if a second location process a refund | `100: My Network LLC - Anchorage` |
| InvoicedAt_StoreID | INT | Internal identifier for a store in RQ | `1` |
| InvoicedBy | NVARCHAR(MAX) | Invoiced By - name of the location which credited with the sale, usually the same as Invoiced At but will be different if a second location process a refund | `100: My Network LLC - Anchorage` |
| InvoicedBy_StoreID | INT | Internal identifier for a store in RQ | `1` |
| InvoiceIDByStore | VARCHAR (14) | Invoice # - invoice number assigned by RQ | `77224IN3` |
| IsOrderServiceDropShipProduct | BIT | Internal identifier in RQ | `null` |
| IsOrderServiceShippingProduct | BIT | Internal identifier in RQ | `null` |
| ListPrice | MONEY | List Price - current price as noted on the pricing tab in the inventory console for the product | `449.95` |
| OriginalUnitPrice | MONEY | Orig. Unit Price - original price on the invoice | `25` |
| Priority | INT | The order that the products were saved in on an Invoice | `1` |
| ProductCouponDiscount | MONEY | Coupon discount on the product | `0` |
| ProductIdentifier | VARCHAR(12) | Product SKU - the RQ generated SKU | `ASHCSA000120` |
| ProductName | NVARCHAR(MAX) | Product Name - name of the product as it appears in the inventory | `Samsung Galaxy Rugby LTE` |
| Quantity | INT | Qty - total number of times the Product SKU appears on the invoice | `1` |
| Refund | BIT | Refund - indicates if a negative quantity of this item was sold | `0` |
| RegionName | NVARCHAR(MAX) | Region - region for the rows location | `London` |
| RetailerCatalogID | VARCHAR (50) | Internal identifier in RQ | `null` |
| SaleInvoice_RowID | UNIQUEIDENTIFIER | Internal identifier in RQ | `8c6537ae-75a5-4155-82b2-c8647ed05f3d` |
| SaleInvoiceID | INT | Identifier for an invoice in RQ | `128962` |
| SaleInvoiceProduct_RowID | UNIQUEIDENTIFIER | Internal identifier in RQ | `0099b78f-ba02-4a91-afd4-2f7eb0fbbb06` |
| SerialNumber | VARCHAR (100) | Tracking # - tracking number associated with this product, serialized products only | `1111111` |
| SoldAsUsed | BIT | Sold As Used - indicates the product was used when sold | `false` |
| SpecialProductID | INT | Internal identifier in RQ | `0` |
| StoreInStoreFlowIsEnabledForStore | BIT | Internal identifier in RQ | `false` |
| StoreInStoreGrossProfit | MONEY | SIS Gross Profit - profit, calculated as Total Sales - Cost for a SIS location. | `null` |
| StoreInStoreListPrice | MONEY | SIS List Price - Price from the store-in-store setup of the product | `null` |
| StoreInStorePrice | MONEY | SIS Price - The default price when sold through the store-in-store flow | `null` |
| StoreTypeName | NVARCHAR(MAX) | Location Type - the location type the the transaction was performed at | `Costco` |
| TenderedBy | VARCHAR (51) | Tendered By - name of the employee logged into RQ when the invoice was tendered | `iQmetrix User` |
| TenderedBy_EmployeeID | INT | Internal identifier for an employee in RQ | `277` |
| TotalCost | MONEY | Total Cost - total purchase cost for the product(s) on the invoice | `0` |
| TotalDiscount | DECIMAL (8, 4) | Total Discount - net discount amount for the Product SKU on the particular invoice | `424.95` |
| TotalPrice | MONEY | Total Sales - net dollar amount for the Product SKU on the particular invoice | `25` |
| UnitCost | MONEY | Unit Cost - purchase cost per unit | `0` |
| UnitPrice | MONEY | Sold For - price that appeared on the invoice (including hide on invoice items), i.e. negative if a refund | `25` |
| VendorName | NVARCHAR(MAX) | Name for a vendor in RQ |  |
| VendorSKU | VARCHAR(25) | Vendor SKU |  |

### ProductDetailReportTaxColumnData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ColName | VARCHAR | Tax name | `T102` |
| ColCaption | NVARCHAR(MAX) | Description | `Flat tax` |
| CreditCardPaymentType | VARCHAR (20) | Credit card information | `null` |

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

### VendorRebateHistoryReportData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ActivationAssociationNumber | INT | Every product that is part of the same activation from the Phone Activation Wizard will have the same ActivationAssociationNumber. | `2` |
| ActivationRowID | UNIQUEIDENTIFIER | Identifier in RQ | `0d4652a7-a673-437a-817e-4641961ba3e6` |
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
| EmployeeID | INT | Internal identifier for an employee in RQ, see EmployeeName | `0` |
| EmployeeID1 | INT | Internal identifier for an employee in RQ, see EmployeeName1 | `218` |
| EmployeeName | VARCHAR(51) | Reconciled By - name of the employee logged in when the rebate was reconciled |  |
| EmployeeName1 | VARCHAR(51) | Sales Person - name of the employee of record for the sale, i.e. the employee whose name is in the Commission box | `iQmetrix User` |
| ExtraField | VARCHAR(30) | Extra Field - an optional field | `1234567890` |
| Flagged | VARCHAR(3) | Flagged - flagged in the Vendor Rebate Reconciliation screen | `No` |
| GlobalProductID | INT | Identifier for a Product in RQ | `812` |
| InvoiceComments | VARCHAR(50) | Comments |  |
| InvoicedAt | VARCHAR(100) | Invoiced At - name of the location which takes the inventory on a refund, usually the same as Invoiced By but will be different if a second location process a refund | `Regina Store` |
| InvoicedAt_StoreID | INT | Internal identifier for a store in RQ | `1` |
| InvoicedBy | VARCHAR(100) | Invoiced By - name of the location which credited with the sale, usually the same as Invoiced At but will be different if a second location process a refund | `Regina Store` |
| InvoicedBy_StoreID | INT | Internal identifier for a store in RQ | `1` |
| InvoiceIDByStore | VARCHAR(14) | Invoice # - invoice number assigned by RQ | `HJKIIIN2` |
| InvoiceRowID | UNIQUEIDENTIFIER | Internal identifier in RQ | `db8f28cf-5017-47f4-9ccf-b90cff32185d` |
| JournalNumber | VARCHAR(20) | Journal # - vendor account journal on which the rebate was reconciled |  |
| OriginalSaleDate | DateTime | Original Sales Date - date of the original sale | `null` |
| OriginalSaleInvoiceID | INT | Internal identifier in RQ | `null` |
| OriginalSaleInvoiceIDByStore | VARCHAR(14) | Original Invoice - invoice number of the original transaction | `null` |
| PartialCB | MONEY | Partial CB - amount the carrier is charging back | `0` |
| PortNumber | VARCHAR(30) | Port Number - if entered in transaction |  |
| Postal_code | VARCHAR(15) | Zip/Postal Code - zip code (USA) or postal code (Canada) | `56789` |
| ProductIdentifier | VARCHAR(12) | Product SKU - RQ generated SKU | `ACVZRB000001` |
| ProductName | VARCHAR(100) | Product Name - description of the product as it appears in the inventory | `Verizon New Act_EquipmentRebate` |
| ProductRowID | UNIQUEIDENTIFIER | Literally no description in the database but originates from [iQclerk_SaleInvoicesAndProducts].[RowID] | `27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c` |
| Quantity | INT | Qty - total quantity of this product SKU on the invoice | `1` |
| RatePlan | VARCHAR(100) | Rate Plan - name of the rate plan | `Act $9.99 to $20.98` |
| RatePlan2 | VARCHAR(100) | Rate Plan 2 - second rate plan if necessary |  |
| Reconciled | VARCHAR(3) | Reconciled - has been marked as reconciled in the Vendor Rebate Reconciliation screen | `No` |
| RegionID | INT | Identifier for a region in RQ | `9` |
| RegionName | VARCHAR(100) | Region - region for the rows location | `Region B` |
| RelatedCost | MONEY | Related Cost - purchase cost for the product associated with this rebate | `404` |
| RelatedPrice | MONEY | Related Price - price the customer paid for the product related to this rebate | `69.99` |
| RelatedProduct | VARCHAR(100) | Related Product - product associated with this rebate | `Samsung Galaxy S4` |
| RelatedProductSerialNumbers | VARCHAR(1000) | Related SN - serial number associated with this rebate, if any | `ACVZCB0026` |
| RelatedProductSKU | VARCHAR(12) | Related SKU - product SKU of the product associated with this rebate | `ACVZCB000244` |
| SaleInvoiceID | INT | Internal identifier in RQ | `126526` |
| SerialNumber | VARCHAR(100) | Tracking # - tracking number associated with this entry | `123000000000000` |
| SocCode | VARCHAR(50) | SOC Code - SOC Code if one was used | `123000000000000` |
| SocCode2 | VARCHAR(50) | SOC Code2 - Second SOC Code if used |  |
| SpecialIdentifier | VARCHAR(25) | Sales Person ID - ID number assigned to this sales person and recorded on the Admin tab of their Employee Profile | `1` |
| SpecialIdentifier1 | VARCHAR (25) | Internal identifier in RQ |  |
| TermCode | VARCHAR(200) | Term Code - [may not show in your database] indicates new activation, upgrade, etc. |  |
| TotalPrice | MONEY | Total Rebate - total value of the rebate on this invoice calculated as Qty X Unit Rebate | `0` |
| UnitPrice | MONEY | Unit Rebate - dollar value of this rebate | `0` |
| VendorAccountName | VARCHAR(100) | Vendor Account Name - vendor account for this rebate | `Verizon 2` |
| VendorName | NVARCHAR(MAX) | Vendor name in RQ | `Verizon` |
| VendorNumber | NVARCHAR(3) | Vendor # - vendor account number entered for Vendor # By Location [if used] |  |
| VendorSKU | VARCHAR(25) | Vendor SKU |  |

### Relationship

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CompanyID | INTEGER | Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a> | `21090` |
| CompanyName | VARCHAR(50) | Company name | `KENTEL` |





## Requests



<h3 id='getting-partner-relationships' class='clickable-header top-level-header'>Getting Partner Relationships</h3>



<h4>Request</h4>

<pre>
GET /partner/relationships?Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-partner-relationships" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-partner-relationships" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-partner-relationships" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-partner-relationships" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-partner-relationships" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-partner-relationships" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-partner-relationships"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-partner-relationships">
<pre id="http-code-getting-partner-relationships"><code class="language-http">GET /partner/relationships
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-partner-relationships">
<pre id="curl-code-getting-partner-relationships"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/relationships"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-partner-relationships">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-partner-relationships"><code class="language-csharp">static IRestResponse GettingPartnerRelationships()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/relationships");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-partner-relationships">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-partner-relationships"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingPartnerRelationships() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/relationships");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-partner-relationships">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-partner-relationships"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/relationships', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#relationship'>Relationship</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-partner-relationships" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-partner-relationships" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-partner-relationships" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-partner-relationships" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-partner-relationships" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-partner-relationships" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-partner-relationships">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "CompanyID": 21090,
        "CompanyName": "KENTEL"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-partner-relationships">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "CompanyID": 21090,
            "CompanyName": "KENTEL"
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-partner-relationships">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CompanyID>21090</CompanyID>
    <CompanyName>KENTEL</CompanyName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-partner-relationships">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CompanyID>21090</CompanyID>
    <CompanyName>KENTEL</CompanyName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-partner-relationships">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CompanyID,CompanyName
21090,KENTEL</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-partner-relationships">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-activation-gross-profit-report' class='clickable-header top-level-header'>Getting the Activation Gross Profit Report</h3>

For more information, see {{support_ActivationGrossProfitReport}}.


<h4>Request</h4>

<pre>
GET /partner/StatFlo/ActivationGrossProfitReport?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&StoreType={StoreType}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&ReasonCode={ReasonCode}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>, for a list see Getting Partner Relationships
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>ReasonCode</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#reasoncode'>ReasonCode</a>. Use -1 to specify All Reason Codes. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-reason-codes">Getting Reason Codes</a>
    </li>
    
    <li>
        <code>StoreType</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#storetype'>StoreType</a>. Use -1 to specify All Types. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-store-types">Getting Store Types</a>
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-activation-gross-profit-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-activation-gross-profit-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-activation-gross-profit-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-activation-gross-profit-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-activation-gross-profit-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-activation-gross-profit-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-activation-gross-profit-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-activation-gross-profit-report">
<pre id="http-code-getting-the-activation-gross-profit-report"><code class="language-http">GET /partner/StatFlo/ActivationGrossProfitReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&StoreType=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ReasonCode=-1&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-activation-gross-profit-report">
<pre id="curl-code-getting-the-activation-gross-profit-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/ActivationGrossProfitReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&StoreType=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ReasonCode=-1&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-activation-gross-profit-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-activation-gross-profit-report"><code class="language-csharp">static IRestResponse GettingTheActivationGrossProfitReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/ActivationGrossProfitReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&StoreType=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ReasonCode=-1&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-activation-gross-profit-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-activation-gross-profit-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheActivationGrossProfitReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/ActivationGrossProfitReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&StoreType=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ReasonCode=-1&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-activation-gross-profit-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-activation-gross-profit-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/ActivationGrossProfitReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&StoreType=-1&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&ReasonCode=-1&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#activationgrossprofitreportdata'>ActivationGrossProfitReportData</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-activation-gross-profit-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-activation-gross-profit-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-activation-gross-profit-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-activation-gross-profit-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-activation-gross-profit-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-activation-gross-profit-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-activation-gross-profit-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "InvoiceDate": "2016-10-12T09:16:24.63",
        "InvoiceID": 129920,
        "InvoiceIDByStore": "84WEAIN15624",
        "StoreTypeName": "Retail Store",
        "LocationName": "84 West",
        "Profit": 667.99,
        "CustomerID": 108560,
        "CustomerName": "AAA AND ASSOCIATES",
        "PhoneDescription": "Apple iPhone 6 Plus 16GB White - AT&T",
        "PhoneNumber": "3065014785",
        "TermDescription": "CRU 2 YR Business New Act",
        "RatePlanDescription": "2 YR CRU Business Legacy Plan $0.01 - $9.99",
        "VendorAccountName": "AT&T",
        "EmployeeName": "iQmetrix User",
        "DistrictName": "Valley Area District",
        "RegionName": "Region A",
        "ChannelName": "Regina Channel"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-activation-gross-profit-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "InvoiceDate": "2016-10-12T09:16:24.63",
            "InvoiceID": 129920,
            "InvoiceIDByStore": "84WEAIN15624",
            "StoreTypeName": "Retail Store",
            "LocationName": "84 West",
            "Profit": 667.99,
            "CustomerID": 108560,
            "CustomerName": "AAA AND ASSOCIATES",
            "PhoneDescription": "Apple iPhone 6 Plus 16GB White - AT&T",
            "PhoneNumber": "3065014785",
            "TermDescription": "CRU 2 YR Business New Act",
            "RatePlanDescription": "2 YR CRU Business Legacy Plan $0.01 - $9.99",
            "VendorAccountName": "AT&T",
            "EmployeeName": "iQmetrix User",
            "DistrictName": "Valley Area District",
            "RegionName": "Region A",
            "ChannelName": "Regina Channel"
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-activation-gross-profit-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <InvoiceDate>2016-10-12T09:16:24.63</InvoiceDate>
    <InvoiceID>129920</InvoiceID>
    <InvoiceIDByStore>84WEAIN15624</InvoiceIDByStore>
    <StoreTypeName>Retail Store</StoreTypeName>
    <LocationName>84 West</LocationName>
    <Profit>667.99</Profit>
    <CustomerID>108560</CustomerID>
    <CustomerName>AAA AND ASSOCIATES</CustomerName>
    <PhoneDescription>Apple iPhone 6 Plus 16GB White - AT&T</PhoneDescription>
    <PhoneNumber>3065014785</PhoneNumber>
    <TermDescription>CRU 2 YR Business New Act</TermDescription>
    <RatePlanDescription>2 YR CRU Business Legacy Plan $0.01 - $9.99</RatePlanDescription>
    <VendorAccountName>AT&T</VendorAccountName>
    <EmployeeName>iQmetrix User</EmployeeName>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-activation-gross-profit-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <InvoiceDate>2016-10-12T09:16:24.63</InvoiceDate>
    <InvoiceID>129920</InvoiceID>
    <InvoiceIDByStore>84WEAIN15624</InvoiceIDByStore>
    <StoreTypeName>Retail Store</StoreTypeName>
    <LocationName>84 West</LocationName>
    <Profit>667.99</Profit>
    <CustomerID>108560</CustomerID>
    <CustomerName>AAA AND ASSOCIATES</CustomerName>
    <PhoneDescription>Apple iPhone 6 Plus 16GB White - AT&T</PhoneDescription>
    <PhoneNumber>3065014785</PhoneNumber>
    <TermDescription>CRU 2 YR Business New Act</TermDescription>
    <RatePlanDescription>2 YR CRU Business Legacy Plan $0.01 - $9.99</RatePlanDescription>
    <VendorAccountName>AT&T</VendorAccountName>
    <EmployeeName>iQmetrix User</EmployeeName>
    <DistrictName>Valley Area District</DistrictName>
    <RegionName>Region A</RegionName>
    <ChannelName>Regina Channel</ChannelName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-activation-gross-profit-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>InvoiceDate,InvoiceID,InvoiceIDByStore,StoreTypeName,LocationName,Profit,CustomerID,CustomerName,PhoneDescription,PhoneNumber,TermDescription,RatePlanDescription,VendorAccountName,EmployeeName,DistrictName,RegionName,ChannelName
2016-10-12T09:16:24.63,129920,84WEAIN15624,Retail Store,84 West,667.99,108560,AAA AND ASSOCIATES,Apple iPhone 6 Plus 16GB White - AT&T,3065014785,CRU 2 YR Business New Act,2 YR CRU Business Legacy Plan $0.01 - $9.99,AT&T,iQmetrix User,Valley Area District,Region A,Regina Channel</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-activation-gross-profit-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-coupon-summary-report' class='clickable-header top-level-header'>Getting the Coupon Summary Report</h3>

For more information, see {{support_CouponSummaryReport}}.


<h4>Request</h4>

<pre>
GET /partner/StatFlo/CouponSummaryReport?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&ReportType={ReportType}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>, for a list see Getting Partner Relationships
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>ReportType</code> (<strong>Required</strong>)  - Acceptable values include DailySummary, LocationSummary, CouponSummary, CouponDetail, EmployeeSummary and CommissionDetail
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-coupon-summary-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-coupon-summary-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-coupon-summary-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-coupon-summary-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-coupon-summary-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-coupon-summary-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-coupon-summary-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-coupon-summary-report">
<pre id="http-code-getting-the-coupon-summary-report"><code class="language-http">GET /partner/StatFlo/CouponSummaryReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ReportType=DailySummary&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-coupon-summary-report">
<pre id="curl-code-getting-the-coupon-summary-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/CouponSummaryReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ReportType=DailySummary&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-coupon-summary-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-coupon-summary-report"><code class="language-csharp">static IRestResponse GettingTheCouponSummaryReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/CouponSummaryReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ReportType=DailySummary&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-coupon-summary-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-coupon-summary-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheCouponSummaryReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/CouponSummaryReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ReportType=DailySummary&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-coupon-summary-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-coupon-summary-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/CouponSummaryReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ReportType=DailySummary&ForWho=4&ForWhoIDs=1&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#couponsummaryreportdata'>CouponSummaryReportData</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-coupon-summary-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-coupon-summary-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-coupon-summary-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-coupon-summary-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-coupon-summary-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-coupon-summary-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-coupon-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Date": "2016-01-01T00:00:00",
        "QuantityApplied": 1,
        "QuantityRefunded": 1,
        "NetQuantity": 0,
        "TotalValue": -10
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-coupon-summary-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Date": "2016-01-01T00:00:00",
            "QuantityApplied": 1,
            "QuantityRefunded": 1,
            "NetQuantity": 0,
            "TotalValue": -10
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-coupon-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Date>2016-01-01T00:00:00</Date>
    <QuantityApplied>1</QuantityApplied>
    <QuantityRefunded>1</QuantityRefunded>
    <NetQuantity>0</NetQuantity>
    <TotalValue>-10</TotalValue>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-coupon-summary-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Date>2016-01-01T00:00:00</Date>
    <QuantityApplied>1</QuantityApplied>
    <QuantityRefunded>1</QuantityRefunded>
    <NetQuantity>0</NetQuantity>
    <TotalValue>-10</TotalValue>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-coupon-summary-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Date,QuantityApplied,QuantityRefunded,NetQuantity,TotalValue
2016-01-01T00:00:00,1,1,0,-10</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-coupon-summary-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-customer-list-report-for-a-company' class='clickable-header top-level-header'>Getting the Customer List Report for a Company</h3>

For more information, see {{support_CustomerListReport}}.   


<h4>Request</h4>

<pre>
GET /partner/StatFlo/CustomerListReport?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&TypeOfCustomer={TypeOfCustomer}&FilterBy={FilterBy}&StoreIDLoggedIn={StoreIDLoggedIn}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>, for a list see Getting Partner Relationships
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>TypeOfCustomer</code> (<strong>Required</strong>)  - Acceptable values include -1 for all types, 1 for Company, 2 for Division, 3 for Group and 4 for Individual
    </li>
    
    <li>
        <code>FilterBy</code> (<strong>Required</strong>)  - Acceptable values include 0 for All Customers, 1 for First Activation and 2 for Sales
    </li>
    
    <li>
        <code>StoreIDLoggedIn</code> (<strong>Required</strong>)  - Identifier for a store in RQ. For a complete list, see <a href='#getting-a-list-of-stores-in-rq'>Getting A List of Stores in RQ</a>
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-customer-list-report-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-customer-list-report-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-customer-list-report-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-customer-list-report-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-customer-list-report-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-customer-list-report-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-customer-list-report-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-customer-list-report-for-a-company">
<pre id="http-code-getting-the-customer-list-report-for-a-company"><code class="language-http">GET /partner/StatFlo/CustomerListReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&TypeOfCustomer=-1&FilterBy=1&StoreIDLoggedIn=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-customer-list-report-for-a-company">
<pre id="curl-code-getting-the-customer-list-report-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/CustomerListReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&TypeOfCustomer=-1&FilterBy=1&StoreIDLoggedIn=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-customer-list-report-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-customer-list-report-for-a-company"><code class="language-csharp">static IRestResponse GettingTheCustomerListReportForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/CustomerListReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&TypeOfCustomer=-1&FilterBy=1&StoreIDLoggedIn=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-customer-list-report-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-customer-list-report-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheCustomerListReportForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/CustomerListReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&TypeOfCustomer=-1&FilterBy=1&StoreIDLoggedIn=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-customer-list-report-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-customer-list-report-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/CustomerListReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&TypeOfCustomer=-1&FilterBy=1&StoreIDLoggedIn=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#customerlistreportdata'>CustomerListReportData</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-customer-list-report-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-customer-list-report-for-a-company" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-customer-list-report-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-customer-list-report-for-a-company" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-customer-list-report-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-customer-list-report-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-customer-list-report-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Address": "12 Hello St.",
        "Address2": "n/a",
        "BillingAccountNumber": "",
        "City": "Fargo",
        "ContactNumber": "5555555555",
        "ContactTypeName": "",
        "Country": "United States",
        "CustomerCompanyName": "KENTEL",
        "CustomerFirstName": "Carrie",
        "CustomerID": 2108754,
        "CustomerLastName": "Madison",
        "DateCreated": "2016-01-26T20:55:53.227",
        "DeclineToProvideEmail": false,
        "Email": "carry@test.iq",
        "EmployeeName": "iQmetrix Employee",
        "EmployeeNameAssignedTo": "iQmetrix Employee",
        "IndustryTypeName": "",
        "MultiLevelPriceID": 1,
        "NumberOfActivations": 0,
        "PositionTypeName": "",
        "PostalCode": "90123",
        "Province": "ND",
        "TracPointMemberNumber": "C2981754hduw",
        "TypeOfCustomer": 3,
        "VIPCustomer": 0
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-customer-list-report-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Address": "12 Hello St.",
            "Address2": "n/a",
            "BillingAccountNumber": "",
            "City": "Fargo",
            "ContactNumber": "5555555555",
            "ContactTypeName": "",
            "Country": "United States",
            "CustomerCompanyName": "KENTEL",
            "CustomerFirstName": "Carrie",
            "CustomerID": 2108754,
            "CustomerLastName": "Madison",
            "DateCreated": "2016-01-26T20:55:53.227",
            "DeclineToProvideEmail": false,
            "Email": "carry@test.iq",
            "EmployeeName": "iQmetrix Employee",
            "EmployeeNameAssignedTo": "iQmetrix Employee",
            "IndustryTypeName": "",
            "MultiLevelPriceID": 1,
            "NumberOfActivations": 0,
            "PositionTypeName": "",
            "PostalCode": "90123",
            "Province": "ND",
            "TracPointMemberNumber": "C2981754hduw",
            "TypeOfCustomer": 3,
            "VIPCustomer": 0
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-customer-list-report-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Address>12 Hello St.</Address>
    <Address2>n/a</Address2>
    <BillingAccountNumber></BillingAccountNumber>
    <City>Fargo</City>
    <ContactNumber>5555555555</ContactNumber>
    <ContactTypeName></ContactTypeName>
    <Country>United States</Country>
    <CustomerCompanyName>KENTEL</CustomerCompanyName>
    <CustomerFirstName>Carrie</CustomerFirstName>
    <CustomerID>2108754</CustomerID>
    <CustomerLastName>Madison</CustomerLastName>
    <DateCreated>2016-01-26T20:55:53.227</DateCreated>
    <DeclineToProvideEmail>false</DeclineToProvideEmail>
    <Email>carry@test.iq</Email>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <EmployeeNameAssignedTo>iQmetrix Employee</EmployeeNameAssignedTo>
    <IndustryTypeName></IndustryTypeName>
    <MultiLevelPriceID>1</MultiLevelPriceID>
    <NumberOfActivations>0</NumberOfActivations>
    <PositionTypeName></PositionTypeName>
    <PostalCode>90123</PostalCode>
    <Province>ND</Province>
    <TracPointMemberNumber>C2981754hduw</TracPointMemberNumber>
    <TypeOfCustomer>3</TypeOfCustomer>
    <VIPCustomer>0</VIPCustomer>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-customer-list-report-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Address>12 Hello St.</Address>
    <Address2>n/a</Address2>
    <BillingAccountNumber></BillingAccountNumber>
    <City>Fargo</City>
    <ContactNumber>5555555555</ContactNumber>
    <ContactTypeName></ContactTypeName>
    <Country>United States</Country>
    <CustomerCompanyName>KENTEL</CustomerCompanyName>
    <CustomerFirstName>Carrie</CustomerFirstName>
    <CustomerID>2108754</CustomerID>
    <CustomerLastName>Madison</CustomerLastName>
    <DateCreated>2016-01-26T20:55:53.227</DateCreated>
    <DeclineToProvideEmail>false</DeclineToProvideEmail>
    <Email>carry@test.iq</Email>
    <EmployeeName>iQmetrix Employee</EmployeeName>
    <EmployeeNameAssignedTo>iQmetrix Employee</EmployeeNameAssignedTo>
    <IndustryTypeName></IndustryTypeName>
    <MultiLevelPriceID>1</MultiLevelPriceID>
    <NumberOfActivations>0</NumberOfActivations>
    <PositionTypeName></PositionTypeName>
    <PostalCode>90123</PostalCode>
    <Province>ND</Province>
    <TracPointMemberNumber>C2981754hduw</TracPointMemberNumber>
    <TypeOfCustomer>3</TypeOfCustomer>
    <VIPCustomer>0</VIPCustomer>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-customer-list-report-for-a-company">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Address,Address2,BillingAccountNumber,City,ContactNumber,ContactTypeName,Country,CustomerCompanyName,CustomerFirstName,CustomerID,CustomerLastName,DateCreated,DeclineToProvideEmail,Email,EmployeeName,EmployeeNameAssignedTo,IndustryTypeName,MultiLevelPriceID,NumberOfActivations,PositionTypeName,PostalCode,Province,TracPointMemberNumber,TypeOfCustomer,VIPCustomer
12 Hello St.,n/a,,Fargo,5555555555,,United States,KENTEL,Carrie,2108754,Madison,2016-01-26T20:55:53.227,false,carry@test.iq,iQmetrix Employee,iQmetrix Employee,,1,0,,90123,ND,C2981754hduw,3,0</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-customer-list-report-for-a-company">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-employee-master-list-report' class='clickable-header top-level-header'>Getting the Employee Master List Report</h3>

For more information, see {{support_EmployeeMasterListReport}}.   


<h4>Request</h4>

<pre>
GET /partner/StatFlo/EmployeeMasterListReport?CompanyId={CompanyId}&EnabledStatus={EnabledStatus}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>, for a list see Getting Partner Relationships
    </li>
    
    <li>
        <code>EnabledStatus</code> (<strong>Required</strong>)  - Select employees with a status of Disabled (0), Enabled (1) or Any Status (2)
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-employee-master-list-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-employee-master-list-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-employee-master-list-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-employee-master-list-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-employee-master-list-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-employee-master-list-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-employee-master-list-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-employee-master-list-report">
<pre id="http-code-getting-the-employee-master-list-report"><code class="language-http">GET /partner/StatFlo/EmployeeMasterListReport?CompanyId=21090&EnabledStatus=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-employee-master-list-report">
<pre id="curl-code-getting-the-employee-master-list-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/EmployeeMasterListReport?CompanyId=21090&EnabledStatus=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-employee-master-list-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-employee-master-list-report"><code class="language-csharp">static IRestResponse GettingTheEmployeeMasterListReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/EmployeeMasterListReport?CompanyId=21090&EnabledStatus=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-employee-master-list-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-employee-master-list-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheEmployeeMasterListReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/EmployeeMasterListReport?CompanyId=21090&EnabledStatus=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-employee-master-list-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-employee-master-list-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/EmployeeMasterListReport?CompanyId=21090&EnabledStatus=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#employeemasterlistreportdata'>EmployeeMasterListReportData</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-employee-master-list-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-employee-master-list-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-employee-master-list-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-employee-master-list-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-employee-master-list-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-employee-master-list-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-employee-master-list-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Assigned Groups": "Sales Representative",
        "Assigned Locations": "84 West Target Dothan Wiregrass Commons Mall - Test Long Store Name Here",
        "City": "Dothan",
        "Clear Fingerprints": "No",
        "Commission Group": "Sales Representative",
        "Compensation Type": "Commission",
        "Country": "USA",
        "Disabled": "No",
        "Email Address": "hilary@kentel.com",
        "Email Display Name": "hilary@kentel.com",
        "Email Password": "test",
        "Email Server": "outlook.kentel.com",
        "Email User Name": "hilary",
        "Employee ID": 60,
        "Employee Name": "Hillary Oliver",
        "Fingerprint Enabled": "No",
        "Frequency": "N/A",
        "FrequencyEffective": "Jan 10 2011",
        "Gender": "Male",
        "ID #": "912345987654321",
        "Image Uploaded": "No",
        "Internal": "N/A",
        "Intrgration Username": "hilary.kentel",
        "Job Title": "Wireless Consultant",
        "Language": "en-us",
        "Locked": "No",
        "Part Time": 0,
        "Personal Days Available": 0,
        "Personal Email": "hilary@kentel.com",
        "Primary Location": "Corporate Office",
        "Rate Effective": "Jan 10 2011",
        "Rate": 0,
        "Role": "Store Manager",
        "Security Role": "Sales Representative",
        "Sick Days Available": 0,
        "Start Date": "Dec 05 2010",
        "State / Prov": "AL",
        "Supervisor": "Robyn Roberts",
        "Termination Date": "Today",
        "Termination Notes": "Vacation days to be paid",
        "Username": "Hillary.Oliver",
        "Vacation Days Available": 0,
        "Work #": "3347020770"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-employee-master-list-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Assigned Groups": "Sales Representative",
            "Assigned Locations": "84 West Target Dothan Wiregrass Commons Mall - Test Long Store Name Here",
            "City": "Dothan",
            "Clear Fingerprints": "No",
            "Commission Group": "Sales Representative",
            "Compensation Type": "Commission",
            "Country": "USA",
            "Disabled": "No",
            "Email Address": "hilary@kentel.com",
            "Email Display Name": "hilary@kentel.com",
            "Email Password": "test",
            "Email Server": "outlook.kentel.com",
            "Email User Name": "hilary",
            "Employee ID": 60,
            "Employee Name": "Hillary Oliver",
            "Fingerprint Enabled": "No",
            "Frequency": "N/A",
            "FrequencyEffective": "Jan 10 2011",
            "Gender": "Male",
            "ID #": "912345987654321",
            "Image Uploaded": "No",
            "Internal": "N/A",
            "Intrgration Username": "hilary.kentel",
            "Job Title": "Wireless Consultant",
            "Language": "en-us",
            "Locked": "No",
            "Part Time": 0,
            "Personal Days Available": 0,
            "Personal Email": "hilary@kentel.com",
            "Primary Location": "Corporate Office",
            "Rate Effective": "Jan 10 2011",
            "Rate": 0,
            "Role": "Store Manager",
            "Security Role": "Sales Representative",
            "Sick Days Available": 0,
            "Start Date": "Dec 05 2010",
            "State / Prov": "AL",
            "Supervisor": "Robyn Roberts",
            "Termination Date": "Today",
            "Termination Notes": "Vacation days to be paid",
            "Username": "Hillary.Oliver",
            "Vacation Days Available": 0,
            "Work #": "3347020770"
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-employee-master-list-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Assigned Groups>Sales Representative</Assigned Groups>
    <Assigned Locations>84 West Target Dothan Wiregrass Commons Mall - Test Long Store Name Here</Assigned Locations>
    <City>Dothan</City>
    <Clear Fingerprints>No</Clear Fingerprints>
    <Commission Group>Sales Representative</Commission Group>
    <Compensation Type>Commission</Compensation Type>
    <Country>USA</Country>
    <Disabled>No</Disabled>
    <Email Address>hilary@kentel.com</Email Address>
    <Email Display Name>hilary@kentel.com</Email Display Name>
    <Email Password>test</Email Password>
    <Email Server>outlook.kentel.com</Email Server>
    <Email User Name>hilary</Email User Name>
    <Employee ID>60</Employee ID>
    <Employee Name>Hillary Oliver</Employee Name>
    <Fingerprint Enabled>No</Fingerprint Enabled>
    <Frequency>N/A</Frequency>
    <FrequencyEffective>Jan 10 2011</FrequencyEffective>
    <Gender>Male</Gender>
    <ID #>912345987654321</ID #>
    <Image Uploaded>No</Image Uploaded>
    <Internal>N/A</Internal>
    <Intrgration Username>hilary.kentel</Intrgration Username>
    <Job Title>Wireless Consultant</Job Title>
    <Language>en-us</Language>
    <Locked>No</Locked>
    <Part Time>0</Part Time>
    <Personal Days Available>0</Personal Days Available>
    <Personal Email>hilary@kentel.com</Personal Email>
    <Primary Location>Corporate Office</Primary Location>
    <Rate Effective>Jan 10 2011</Rate Effective>
    <Rate>0</Rate>
    <Role>Store Manager</Role>
    <Security Role>Sales Representative</Security Role>
    <Sick Days Available>0</Sick Days Available>
    <Start Date>Dec 05 2010</Start Date>
    <State / Prov>AL</State / Prov>
    <Supervisor>Robyn Roberts</Supervisor>
    <Termination Date>Today</Termination Date>
    <Termination Notes>Vacation days to be paid</Termination Notes>
    <Username>Hillary.Oliver</Username>
    <Vacation Days Available>0</Vacation Days Available>
    <Work #>3347020770</Work #>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-employee-master-list-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Assigned Groups>Sales Representative</Assigned Groups>
    <Assigned Locations>84 West Target Dothan Wiregrass Commons Mall - Test Long Store Name Here</Assigned Locations>
    <City>Dothan</City>
    <Clear Fingerprints>No</Clear Fingerprints>
    <Commission Group>Sales Representative</Commission Group>
    <Compensation Type>Commission</Compensation Type>
    <Country>USA</Country>
    <Disabled>No</Disabled>
    <Email Address>hilary@kentel.com</Email Address>
    <Email Display Name>hilary@kentel.com</Email Display Name>
    <Email Password>test</Email Password>
    <Email Server>outlook.kentel.com</Email Server>
    <Email User Name>hilary</Email User Name>
    <Employee ID>60</Employee ID>
    <Employee Name>Hillary Oliver</Employee Name>
    <Fingerprint Enabled>No</Fingerprint Enabled>
    <Frequency>N/A</Frequency>
    <FrequencyEffective>Jan 10 2011</FrequencyEffective>
    <Gender>Male</Gender>
    <ID #>912345987654321</ID #>
    <Image Uploaded>No</Image Uploaded>
    <Internal>N/A</Internal>
    <Intrgration Username>hilary.kentel</Intrgration Username>
    <Job Title>Wireless Consultant</Job Title>
    <Language>en-us</Language>
    <Locked>No</Locked>
    <Part Time>0</Part Time>
    <Personal Days Available>0</Personal Days Available>
    <Personal Email>hilary@kentel.com</Personal Email>
    <Primary Location>Corporate Office</Primary Location>
    <Rate Effective>Jan 10 2011</Rate Effective>
    <Rate>0</Rate>
    <Role>Store Manager</Role>
    <Security Role>Sales Representative</Security Role>
    <Sick Days Available>0</Sick Days Available>
    <Start Date>Dec 05 2010</Start Date>
    <State / Prov>AL</State / Prov>
    <Supervisor>Robyn Roberts</Supervisor>
    <Termination Date>Today</Termination Date>
    <Termination Notes>Vacation days to be paid</Termination Notes>
    <Username>Hillary.Oliver</Username>
    <Vacation Days Available>0</Vacation Days Available>
    <Work #>3347020770</Work #>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-employee-master-list-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Assigned Groups,Assigned Locations,City,Clear Fingerprints,Commission Group,Compensation Type,Country,Disabled,Email Address,Email Display Name,Email Password,Email Server,Email User Name,Employee ID,Employee Name,Fingerprint Enabled,Frequency,FrequencyEffective,Gender,ID #,Image Uploaded,Internal,Intrgration Username,Job Title,Language,Locked,Part Time,Personal Days Available,Personal Email,Primary Location,Rate Effective,Rate,Role,Security Role,Sick Days Available,Start Date,State / Prov,Supervisor,Termination Date,Termination Notes,Username,Vacation Days Available,Work #
Sales Representative,84 West Target Dothan Wiregrass Commons Mall - Test Long Store Name Here,Dothan,No,Sales Representative,Commission,USA,No,hilary@kentel.com,hilary@kentel.com,test,outlook.kentel.com,hilary,60,Hillary Oliver,No,N/A,Jan 10 2011,Male,912345987654321,No,N/A,hilary.kentel,Wireless Consultant,en-us,No,0,0,hilary@kentel.com,Corporate Office,Jan 10 2011,0,Store Manager,Sales Representative,0,Dec 05 2010,AL,Robyn Roberts,Today,Vacation days to be paid,Hillary.Oliver,0,3347020770</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-employee-master-list-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-graphed-performance-metrix-report' class='clickable-header top-level-header'>Getting the Graphed Performance Metrix Report</h3>

For more information, see {{support_GraphedPerformanceMetrixReport}}.


<h4>Request</h4>

<pre>
GET /partner/StatFlo/GraphedPerformanceMetricsReport_PerformanceMetrix?CompanyId={CompanyId}&PeriodID={PeriodID}&StartDate={StartDate}&StopDate={StopDate}&HideRebates={HideRebates}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>, for a list see Getting Partner Relationships
    </li>
    
    <li>
        <code>PeriodID</code> (<strong>Required</strong>)  - Identifier for a Period in RQ, or -1 if a StartDate and StopDate will be used
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin. If PeriodID is -1, this value will be ignored
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end. If PeriodID is -1, this value will be ignored
    </li>
    
    <li>
        <code>HideRebates</code> (<strong>Required</strong>)  - A flag to indicate if Rebates should be included in the report (1) or not (-1)
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-graphed-performance-metrix-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-graphed-performance-metrix-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-graphed-performance-metrix-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-graphed-performance-metrix-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-graphed-performance-metrix-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-graphed-performance-metrix-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-graphed-performance-metrix-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-graphed-performance-metrix-report">
<pre id="http-code-getting-the-graphed-performance-metrix-report"><code class="language-http">GET /partner/StatFlo/GraphedPerformanceMetricsReport_PerformanceMetrix?CompanyId=21090&PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&HideRebates=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-graphed-performance-metrix-report">
<pre id="curl-code-getting-the-graphed-performance-metrix-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/GraphedPerformanceMetricsReport_PerformanceMetrix?CompanyId=21090&PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&HideRebates=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-graphed-performance-metrix-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-graphed-performance-metrix-report"><code class="language-csharp">static IRestResponse GettingTheGraphedPerformanceMetrixReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/GraphedPerformanceMetricsReport_PerformanceMetrix?CompanyId=21090&PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&HideRebates=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-graphed-performance-metrix-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-graphed-performance-metrix-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheGraphedPerformanceMetrixReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/GraphedPerformanceMetricsReport_PerformanceMetrix?CompanyId=21090&PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&HideRebates=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-graphed-performance-metrix-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-graphed-performance-metrix-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/GraphedPerformanceMetricsReport_PerformanceMetrix?CompanyId=21090&PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&HideRebates=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#graphedperformancemetrixreportdata'>GraphedPerformanceMetrixReportData</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-graphed-performance-metrix-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-graphed-performance-metrix-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-graphed-performance-metrix-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-graphed-performance-metrix-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-graphed-performance-metrix-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-graphed-performance-metrix-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-graphed-performance-metrix-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ID": 6,
        "Name": "51247 Test_update",
        "AttachmentRate": "1249 : 2",
        "AttachmentRateTarget": "0 : 0",
        "DisplayFormat": 2,
        "IsAttachmentRate": true,
        "Margin": null,
        "MarginTarget": null,
        "Priority": -1,
        "Profit": null,
        "ProfitTarget": null,
        "Quantity": null,
        "QuantityTarget": null,
        "Sales": null,
        "SalesTarget": null
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-graphed-performance-metrix-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ID": 6,
            "Name": "51247 Test_update",
            "AttachmentRate": "1249 : 2",
            "AttachmentRateTarget": "0 : 0",
            "DisplayFormat": 2,
            "IsAttachmentRate": true,
            "Margin": null,
            "MarginTarget": null,
            "Priority": -1,
            "Profit": null,
            "ProfitTarget": null,
            "Quantity": null,
            "QuantityTarget": null,
            "Sales": null,
            "SalesTarget": null
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-graphed-performance-metrix-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>6</ID>
    <Name>51247 Test_update</Name>
    <AttachmentRate>1249 : 2</AttachmentRate>
    <AttachmentRateTarget>0 : 0</AttachmentRateTarget>
    <DisplayFormat>2</DisplayFormat>
    <IsAttachmentRate>true</IsAttachmentRate>
    <Margin>null</Margin>
    <MarginTarget>null</MarginTarget>
    <Priority>-1</Priority>
    <Profit>null</Profit>
    <ProfitTarget>null</ProfitTarget>
    <Quantity>null</Quantity>
    <QuantityTarget>null</QuantityTarget>
    <Sales>null</Sales>
    <SalesTarget>null</SalesTarget>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-graphed-performance-metrix-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>6</ID>
    <Name>51247 Test_update</Name>
    <AttachmentRate>1249 : 2</AttachmentRate>
    <AttachmentRateTarget>0 : 0</AttachmentRateTarget>
    <DisplayFormat>2</DisplayFormat>
    <IsAttachmentRate>true</IsAttachmentRate>
    <Margin>null</Margin>
    <MarginTarget>null</MarginTarget>
    <Priority>-1</Priority>
    <Profit>null</Profit>
    <ProfitTarget>null</ProfitTarget>
    <Quantity>null</Quantity>
    <QuantityTarget>null</QuantityTarget>
    <Sales>null</Sales>
    <SalesTarget>null</SalesTarget>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-graphed-performance-metrix-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ID,Name,AttachmentRate,AttachmentRateTarget,DisplayFormat,IsAttachmentRate,Margin,MarginTarget,Priority,Profit,ProfitTarget,Quantity,QuantityTarget,Sales,SalesTarget
6,51247 Test_update,1249 : 2,0 : 0,2,true,null,null,-1,null,null,null,null,null,null</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-graphed-performance-metrix-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-graphed-performance-metrix-breakdown-report' class='clickable-header top-level-header'>Getting the Graphed Performance Metrix Breakdown Report</h3>

For more information, see {{support_GraphedPerformanceMetrixReport}}.


<h4>Request</h4>

<pre>
GET /partner/StatFlo/GraphedPerformanceMetricsReport_Breakdown?CompanyId={CompanyId}&PeriodID={PeriodID}&StartDate={StartDate}&StopDate={StopDate}&HideRebates={HideRebates}&PerformanceGroupID={PerformanceGroupID}&TopN={TopN}&TopCriteria={TopCriteria}&ByWho={ByWho}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>, for a list see Getting Partner Relationships
    </li>
    
    <li>
        <code>PeriodID</code> (<strong>Required</strong>)  - Identifier for a Period in RQ, or -1 if a StartDate and StopDate will be used
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin. If PeriodID is -1, this value will be ignored
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end. If PeriodID is -1, this value will be ignored
    </li>
    
    <li>
        <code>HideRebates</code> (<strong>Required</strong>)  - A flag to indicate if Rebates should be included in the report (1) or not (-1)
    </li>
    
    <li>
        <code>PerformanceGroupID</code> (<strong>Required</strong>)  - Identifier for a Performance Group in RQ
    </li>
    
    <li>
        <code>TopN</code> (<strong>Required</strong>)  - Gets the top X entries for the report, ordered by the value in TopCriteria. Use -1 to return all results
    </li>
    
    <li>
        <code>TopCriteria</code> (<strong>Required</strong>)  - Acceptable values include Quantity, Sales, Profit, Margin and Rate
    </li>
    
    <li>
        <code>ByWho</code> (<strong>Required</strong>)  - This value will aggregate the report data at the Company (1), Region (2), Division (3), Location (4) or Employee (5) level
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-graphed-performance-metrix-breakdown-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-graphed-performance-metrix-breakdown-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-graphed-performance-metrix-breakdown-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-graphed-performance-metrix-breakdown-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-graphed-performance-metrix-breakdown-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-graphed-performance-metrix-breakdown-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-graphed-performance-metrix-breakdown-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-graphed-performance-metrix-breakdown-report">
<pre id="http-code-getting-the-graphed-performance-metrix-breakdown-report"><code class="language-http">GET /partner/StatFlo/GraphedPerformanceMetricsReport_Breakdown?CompanyId=21090&PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&HideRebates=-1&PerformanceGroupID=1&TopN=10&TopCriteria=Quantity&ByWho=5&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-graphed-performance-metrix-breakdown-report">
<pre id="curl-code-getting-the-graphed-performance-metrix-breakdown-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/GraphedPerformanceMetricsReport_Breakdown?CompanyId=21090&PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&HideRebates=-1&PerformanceGroupID=1&TopN=10&TopCriteria=Quantity&ByWho=5&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-graphed-performance-metrix-breakdown-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-graphed-performance-metrix-breakdown-report"><code class="language-csharp">static IRestResponse GettingTheGraphedPerformanceMetrixBreakdownReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/GraphedPerformanceMetricsReport_Breakdown?CompanyId=21090&PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&HideRebates=-1&PerformanceGroupID=1&TopN=10&TopCriteria=Quantity&ByWho=5&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-graphed-performance-metrix-breakdown-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-graphed-performance-metrix-breakdown-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheGraphedPerformanceMetrixBreakdownReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/GraphedPerformanceMetricsReport_Breakdown?CompanyId=21090&PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&HideRebates=-1&PerformanceGroupID=1&TopN=10&TopCriteria=Quantity&ByWho=5&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-graphed-performance-metrix-breakdown-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-graphed-performance-metrix-breakdown-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/GraphedPerformanceMetricsReport_Breakdown?CompanyId=21090&PeriodID=1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&HideRebates=-1&PerformanceGroupID=1&TopN=10&TopCriteria=Quantity&ByWho=5&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#graphedperformancemetrixbreakdownreportdata'>GraphedPerformanceMetrixBreakdownReportData</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-graphed-performance-metrix-breakdown-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-graphed-performance-metrix-breakdown-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-graphed-performance-metrix-breakdown-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-graphed-performance-metrix-breakdown-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-graphed-performance-metrix-breakdown-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-graphed-performance-metrix-breakdown-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-graphed-performance-metrix-breakdown-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "ID": 1,
        "Name": "84 West",
        "GroupInvoiceCount": 839,
        "IsAttachmentRate": false,
        "Margin": -1691.5747,
        "MarginTarget": 0,
        "Profit": -45860859.08,
        "ProfitTarget": 0,
        "Quantity": 530,
        "QuantityTarget": 0,
        "Sales": 27111.34,
        "SalesTarget": 0,
        "TotalInvoiceCount": 2772
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-graphed-performance-metrix-breakdown-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "ID": 1,
            "Name": "84 West",
            "GroupInvoiceCount": 839,
            "IsAttachmentRate": false,
            "Margin": -1691.5747,
            "MarginTarget": 0,
            "Profit": -45860859.08,
            "ProfitTarget": 0,
            "Quantity": 530,
            "QuantityTarget": 0,
            "Sales": 27111.34,
            "SalesTarget": 0,
            "TotalInvoiceCount": 2772
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-graphed-performance-metrix-breakdown-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>1</ID>
    <Name>84 West</Name>
    <GroupInvoiceCount>839</GroupInvoiceCount>
    <IsAttachmentRate>false</IsAttachmentRate>
    <Margin>-1691.5747</Margin>
    <MarginTarget>0</MarginTarget>
    <Profit>-45860859.08</Profit>
    <ProfitTarget>0</ProfitTarget>
    <Quantity>530</Quantity>
    <QuantityTarget>0</QuantityTarget>
    <Sales>27111.34</Sales>
    <SalesTarget>0</SalesTarget>
    <TotalInvoiceCount>2772</TotalInvoiceCount>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-graphed-performance-metrix-breakdown-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ID>1</ID>
    <Name>84 West</Name>
    <GroupInvoiceCount>839</GroupInvoiceCount>
    <IsAttachmentRate>false</IsAttachmentRate>
    <Margin>-1691.5747</Margin>
    <MarginTarget>0</MarginTarget>
    <Profit>-45860859.08</Profit>
    <ProfitTarget>0</ProfitTarget>
    <Quantity>530</Quantity>
    <QuantityTarget>0</QuantityTarget>
    <Sales>27111.34</Sales>
    <SalesTarget>0</SalesTarget>
    <TotalInvoiceCount>2772</TotalInvoiceCount>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-graphed-performance-metrix-breakdown-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ID,Name,GroupInvoiceCount,IsAttachmentRate,Margin,MarginTarget,Profit,ProfitTarget,Quantity,QuantityTarget,Sales,SalesTarget,TotalInvoiceCount
1,84 West,839,false,-1691.5747,0,-45860859.08,0,530,0,27111.34,0,2772</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-graphed-performance-metrix-breakdown-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-location-master-list-report' class='clickable-header top-level-header'>Getting the Location Master List Report</h3>

For more information, see {{support_LocationMasterListReport}}.   


<h4>Request</h4>

<pre>
GET /partner/StatFlo/LocationMasterListReport?CompanyId={CompanyId}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>, for a list see Getting Partner Relationships
    </li>
    
    <li>
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-location-master-list-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-location-master-list-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-location-master-list-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-location-master-list-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-location-master-list-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-location-master-list-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-location-master-list-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-location-master-list-report">
<pre id="http-code-getting-the-location-master-list-report"><code class="language-http">GET /partner/StatFlo/LocationMasterListReport?CompanyId=21090
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-location-master-list-report">
<pre id="curl-code-getting-the-location-master-list-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/LocationMasterListReport?CompanyId=21090"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-location-master-list-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-location-master-list-report"><code class="language-csharp">static IRestResponse GettingTheLocationMasterListReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/LocationMasterListReport?CompanyId=21090");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-location-master-list-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-location-master-list-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheLocationMasterListReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/LocationMasterListReport?CompanyId=21090");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-location-master-list-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-location-master-list-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/LocationMasterListReport?CompanyId=21090', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#locationmasterlistreportdata'>LocationMasterListReportData</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-location-master-list-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-location-master-list-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-location-master-list-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-location-master-list-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-location-master-list-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-location-master-list-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-location-master-list-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Abbreviation": "LIT22",
        "Address": "4970 Hillside Avenue",
        "AddressVerified": "Not Verified",
        "AdjustDST": false,
        "BankDetails": "CashSmart",
        "CashPolicy": "Single-Drawer",
        "ChannelName": "Alabama",
        "City": "Kansas",
        "Comment_on_OE": false,
        "Country": "United States",
        "DepositTaken": 0,
        "Disabled": 1,
        "DistrictName": "Smithton",
        "EmailAddress": "abarea@kentel.com",
        "FaxNumber": "5555555555",
        "GeneralLocationNotes": "note",
        "GLCode": "-MILLH",
        "HideCustomerAddress": false,
        "InsuranceAmount": 0,
        "InsuranceCompany": "Safefair",
        "LandlordName": "Jim Jones",
        "LandlordNotes": "sample note",
        "Latitude": 50.443559,
        "LeaseEndDate": "2014-12-24T00:00:00",
        "LeaseNotes": "note",
        "LeaseStartDate": "2014-11-26T00:00:00",
        "LocationCode": "500",
        "LocationEntityID": 48540,
        "Longitude": -104.612034,
        "ManagerCommissionable": false,
        "ManagerEmployeeID": 233,
        "MaxCashDrawer": 0,
        "OtherCharges": 0,
        "PAW_on_OE": false,
        "Phone_on_OE": true,
        "PhoneNumber": "4353424234",
        "PropertyTaxes": 0,
        "RegionName": "Abarea",
        "RelocationDate": "2016-02-26T00:00:00",
        "Rent": 0,
        "SaleInvoiceComment": "Sale Invoice Comments",
        "Serial_on_OE": false,
        "SquareFootage": 0,
        "StaffLevel": 12,
        "StateProv": "AL",
        "StoreID": 1187,
        "StoreName": "Dufferin Mall",
        "StoreType": "Retail Store",
        "Taxes": "GOODS AND SERVICES TAX (GST)",
        "TimeZone": "(GMT-06:00) Saskatchewan",
        "UseLocationEmail": false,
        "ZipPostal": "90210"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-location-master-list-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Abbreviation": "LIT22",
            "Address": "4970 Hillside Avenue",
            "AddressVerified": "Not Verified",
            "AdjustDST": false,
            "BankDetails": "CashSmart",
            "CashPolicy": "Single-Drawer",
            "ChannelName": "Alabama",
            "City": "Kansas",
            "Comment_on_OE": false,
            "Country": "United States",
            "DepositTaken": 0,
            "Disabled": 1,
            "DistrictName": "Smithton",
            "EmailAddress": "abarea@kentel.com",
            "FaxNumber": "5555555555",
            "GeneralLocationNotes": "note",
            "GLCode": "-MILLH",
            "HideCustomerAddress": false,
            "InsuranceAmount": 0,
            "InsuranceCompany": "Safefair",
            "LandlordName": "Jim Jones",
            "LandlordNotes": "sample note",
            "Latitude": 50.443559,
            "LeaseEndDate": "2014-12-24T00:00:00",
            "LeaseNotes": "note",
            "LeaseStartDate": "2014-11-26T00:00:00",
            "LocationCode": "500",
            "LocationEntityID": 48540,
            "Longitude": -104.612034,
            "ManagerCommissionable": false,
            "ManagerEmployeeID": 233,
            "MaxCashDrawer": 0,
            "OtherCharges": 0,
            "PAW_on_OE": false,
            "Phone_on_OE": true,
            "PhoneNumber": "4353424234",
            "PropertyTaxes": 0,
            "RegionName": "Abarea",
            "RelocationDate": "2016-02-26T00:00:00",
            "Rent": 0,
            "SaleInvoiceComment": "Sale Invoice Comments",
            "Serial_on_OE": false,
            "SquareFootage": 0,
            "StaffLevel": 12,
            "StateProv": "AL",
            "StoreID": 1187,
            "StoreName": "Dufferin Mall",
            "StoreType": "Retail Store",
            "Taxes": "GOODS AND SERVICES TAX (GST)",
            "TimeZone": "(GMT-06:00) Saskatchewan",
            "UseLocationEmail": false,
            "ZipPostal": "90210"
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-location-master-list-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Abbreviation>LIT22</Abbreviation>
    <Address>4970 Hillside Avenue</Address>
    <AddressVerified>Not Verified</AddressVerified>
    <AdjustDST>false</AdjustDST>
    <BankDetails>CashSmart</BankDetails>
    <CashPolicy>Single-Drawer</CashPolicy>
    <ChannelName>Alabama</ChannelName>
    <City>Kansas</City>
    <Comment_on_OE>false</Comment_on_OE>
    <Country>United States</Country>
    <DepositTaken>0</DepositTaken>
    <Disabled>1</Disabled>
    <DistrictName>Smithton</DistrictName>
    <EmailAddress>abarea@kentel.com</EmailAddress>
    <FaxNumber>5555555555</FaxNumber>
    <GeneralLocationNotes>note</GeneralLocationNotes>
    <GLCode>-MILLH</GLCode>
    <HideCustomerAddress>false</HideCustomerAddress>
    <InsuranceAmount>0</InsuranceAmount>
    <InsuranceCompany>Safefair</InsuranceCompany>
    <LandlordName>Jim Jones</LandlordName>
    <LandlordNotes>sample note</LandlordNotes>
    <Latitude>50.443559</Latitude>
    <LeaseEndDate>2014-12-24T00:00:00</LeaseEndDate>
    <LeaseNotes>note</LeaseNotes>
    <LeaseStartDate>2014-11-26T00:00:00</LeaseStartDate>
    <LocationCode>500</LocationCode>
    <LocationEntityID>48540</LocationEntityID>
    <Longitude>-104.612034</Longitude>
    <ManagerCommissionable>false</ManagerCommissionable>
    <ManagerEmployeeID>233</ManagerEmployeeID>
    <MaxCashDrawer>0</MaxCashDrawer>
    <OtherCharges>0</OtherCharges>
    <PAW_on_OE>false</PAW_on_OE>
    <Phone_on_OE>true</Phone_on_OE>
    <PhoneNumber>4353424234</PhoneNumber>
    <PropertyTaxes>0</PropertyTaxes>
    <RegionName>Abarea</RegionName>
    <RelocationDate>2016-02-26T00:00:00</RelocationDate>
    <Rent>0</Rent>
    <SaleInvoiceComment>Sale Invoice Comments</SaleInvoiceComment>
    <Serial_on_OE>false</Serial_on_OE>
    <SquareFootage>0</SquareFootage>
    <StaffLevel>12</StaffLevel>
    <StateProv>AL</StateProv>
    <StoreID>1187</StoreID>
    <StoreName>Dufferin Mall</StoreName>
    <StoreType>Retail Store</StoreType>
    <Taxes>GOODS AND SERVICES TAX (GST)</Taxes>
    <TimeZone>(GMT-06:00) Saskatchewan</TimeZone>
    <UseLocationEmail>false</UseLocationEmail>
    <ZipPostal>90210</ZipPostal>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-location-master-list-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Abbreviation>LIT22</Abbreviation>
    <Address>4970 Hillside Avenue</Address>
    <AddressVerified>Not Verified</AddressVerified>
    <AdjustDST>false</AdjustDST>
    <BankDetails>CashSmart</BankDetails>
    <CashPolicy>Single-Drawer</CashPolicy>
    <ChannelName>Alabama</ChannelName>
    <City>Kansas</City>
    <Comment_on_OE>false</Comment_on_OE>
    <Country>United States</Country>
    <DepositTaken>0</DepositTaken>
    <Disabled>1</Disabled>
    <DistrictName>Smithton</DistrictName>
    <EmailAddress>abarea@kentel.com</EmailAddress>
    <FaxNumber>5555555555</FaxNumber>
    <GeneralLocationNotes>note</GeneralLocationNotes>
    <GLCode>-MILLH</GLCode>
    <HideCustomerAddress>false</HideCustomerAddress>
    <InsuranceAmount>0</InsuranceAmount>
    <InsuranceCompany>Safefair</InsuranceCompany>
    <LandlordName>Jim Jones</LandlordName>
    <LandlordNotes>sample note</LandlordNotes>
    <Latitude>50.443559</Latitude>
    <LeaseEndDate>2014-12-24T00:00:00</LeaseEndDate>
    <LeaseNotes>note</LeaseNotes>
    <LeaseStartDate>2014-11-26T00:00:00</LeaseStartDate>
    <LocationCode>500</LocationCode>
    <LocationEntityID>48540</LocationEntityID>
    <Longitude>-104.612034</Longitude>
    <ManagerCommissionable>false</ManagerCommissionable>
    <ManagerEmployeeID>233</ManagerEmployeeID>
    <MaxCashDrawer>0</MaxCashDrawer>
    <OtherCharges>0</OtherCharges>
    <PAW_on_OE>false</PAW_on_OE>
    <Phone_on_OE>true</Phone_on_OE>
    <PhoneNumber>4353424234</PhoneNumber>
    <PropertyTaxes>0</PropertyTaxes>
    <RegionName>Abarea</RegionName>
    <RelocationDate>2016-02-26T00:00:00</RelocationDate>
    <Rent>0</Rent>
    <SaleInvoiceComment>Sale Invoice Comments</SaleInvoiceComment>
    <Serial_on_OE>false</Serial_on_OE>
    <SquareFootage>0</SquareFootage>
    <StaffLevel>12</StaffLevel>
    <StateProv>AL</StateProv>
    <StoreID>1187</StoreID>
    <StoreName>Dufferin Mall</StoreName>
    <StoreType>Retail Store</StoreType>
    <Taxes>GOODS AND SERVICES TAX (GST)</Taxes>
    <TimeZone>(GMT-06:00) Saskatchewan</TimeZone>
    <UseLocationEmail>false</UseLocationEmail>
    <ZipPostal>90210</ZipPostal>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-location-master-list-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Abbreviation,Address,AddressVerified,AdjustDST,BankDetails,CashPolicy,ChannelName,City,Comment_on_OE,Country,DepositTaken,Disabled,DistrictName,EmailAddress,FaxNumber,GeneralLocationNotes,GLCode,HideCustomerAddress,InsuranceAmount,InsuranceCompany,LandlordName,LandlordNotes,Latitude,LeaseEndDate,LeaseNotes,LeaseStartDate,LocationCode,LocationEntityID,Longitude,ManagerCommissionable,ManagerEmployeeID,MaxCashDrawer,OtherCharges,PAW_on_OE,Phone_on_OE,PhoneNumber,PropertyTaxes,RegionName,RelocationDate,Rent,SaleInvoiceComment,Serial_on_OE,SquareFootage,StaffLevel,StateProv,StoreID,StoreName,StoreType,Taxes,TimeZone,UseLocationEmail,ZipPostal
LIT22,4970 Hillside Avenue,Not Verified,false,CashSmart,Single-Drawer,Alabama,Kansas,false,United States,0,1,Smithton,abarea@kentel.com,5555555555,note,-MILLH,false,0,Safefair,Jim Jones,sample note,50.443559,2014-12-24T00:00:00,note,2014-11-26T00:00:00,500,48540,-104.612034,false,233,0,0,false,true,4353424234,0,Abarea,2016-02-26T00:00:00,0,Sale Invoice Comments,false,0,12,AL,1187,Dufferin Mall,Retail Store,GOODS AND SERVICES TAX (GST),(GMT-06:00) Saskatchewan,false,90210</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-location-master-list-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-product-detail-report-for-a-company' class='clickable-header top-level-header'>Getting the Product Detail Report for a Company</h3>

For more information, see {{support_ProductDetailReport}}.

Note that this report has multiple responses, depending on the ReportPart specified.

| Report Part | Response |
|:------------|:---------|
| 1 | <a href='http://developers.iqmetrix.com/api/StatFlo-Reports/#productdetailreportdata'>ProductDetailReportData</a> |
| 2 | <a href='http://developers.iqmetrix.com/api/StatFlo-Reports/#productdetailreporttaxdetaildata'>ProductDetailReportTaxDetailData</a> |
| 3 | <a href='http://developers.iqmetrix.com/api/StatFlo-Reports/#productdetailreporttaxcolumndata'>ProductDetailReportTaxColumnData</a> |


<h4>Request</h4>

<pre>
GET /partner/StatFlo/ProductDetailReport?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&SearchMethod={SearchMethod}&CategoryNumber={CategoryNumber}&ReportPart={ReportPart}&ManufacturerID={ManufacturerID}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&ProductIdentifier={ProductIdentifier}&InvoiceIDByStore={InvoiceIDByStore}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>, for a list see Getting Partner Relationships
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
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>ReportPart</code> (<strong>Required</strong>)  - Acceptable values include 1 to return the default report, 2 for the tax detail report and 3 for tax column data
    </li>
    
    <li>
        <code>ManufacturerID</code> (<strong>Required</strong>)  - Identifier for a Manufacture in RQ. Use -1 for all Manufacturers. For a complete list see <a href="#getting-a-list-of-manufacturers-in-rq">Getting a List of Manufacturers in RQ</a>
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
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
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-product-detail-report-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-product-detail-report-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-product-detail-report-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-product-detail-report-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-product-detail-report-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-product-detail-report-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-product-detail-report-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-product-detail-report-for-a-company">
<pre id="http-code-getting-the-product-detail-report-for-a-company"><code class="language-http">GET /partner/StatFlo/ProductDetailReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=3&CategoryNumber=10&ReportPart=1&ManufacturerID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-product-detail-report-for-a-company">
<pre id="curl-code-getting-the-product-detail-report-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/ProductDetailReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=3&CategoryNumber=10&ReportPart=1&ManufacturerID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-product-detail-report-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-product-detail-report-for-a-company"><code class="language-csharp">static IRestResponse GettingTheProductDetailReportForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/ProductDetailReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=3&CategoryNumber=10&ReportPart=1&ManufacturerID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-product-detail-report-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-product-detail-report-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheProductDetailReportForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/ProductDetailReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=3&CategoryNumber=10&ReportPart=1&ManufacturerID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-product-detail-report-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-product-detail-report-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/ProductDetailReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=3&CategoryNumber=10&ReportPart=1&ManufacturerID=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&InvoiceIDByStore=77224IN3&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#productdetailreportdata'>ProductDetailReportData</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-product-detail-report-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-product-detail-report-for-a-company" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-product-detail-report-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-product-detail-report-for-a-company" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-product-detail-report-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-product-detail-report-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-product-detail-report-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "Activation_RowID": "d3d65281-5201-4927-9bac-6f3a47ddf56b",
        "AdjustedUnitPrice": 25,
        "BillingAccountNumber": "",
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
        "EmployeeID": 4,
        "GlobalProductID": 5179,
        "InvoicedAt": "100: My Network LLC - Anchorage",
        "InvoicedAt_StoreID": 1,
        "InvoicedBy": "100: My Network LLC - Anchorage",
        "InvoicedBy_StoreID": 1,
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
        "TenderedBy_EmployeeID": 277,
        "TotalCost": 0,
        "TotalDiscount": 424.95,
        "TotalPrice": 25,
        "UnitCost": 0,
        "UnitPrice": 25,
        "VendorName": "",
        "VendorSKU": ""
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-product-detail-report-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "Activation_RowID": "d3d65281-5201-4927-9bac-6f3a47ddf56b",
            "AdjustedUnitPrice": 25,
            "BillingAccountNumber": "",
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
            "EmployeeID": 4,
            "GlobalProductID": 5179,
            "InvoicedAt": "100: My Network LLC - Anchorage",
            "InvoicedAt_StoreID": 1,
            "InvoicedBy": "100: My Network LLC - Anchorage",
            "InvoicedBy_StoreID": 1,
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
            "TenderedBy_EmployeeID": 277,
            "TotalCost": 0,
            "TotalDiscount": 424.95,
            "TotalPrice": 25,
            "UnitCost": 0,
            "UnitPrice": 25,
            "VendorName": "",
            "VendorSKU": ""
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-product-detail-report-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Activation_RowID>d3d65281-5201-4927-9bac-6f3a47ddf56b</Activation_RowID>
    <AdjustedUnitPrice>25</AdjustedUnitPrice>
    <BillingAccountNumber></BillingAccountNumber>
    <CarrierPrice>null</CarrierPrice>
    <CategoryPath>>> Phones >> Galaxies</CategoryPath>
    <ChannelName>English Channel</ChannelName>
    <Comments></Comments>
    <ContractNumber>12345</ContractNumber>
    <CustomerID>131149</CustomerID>
    <CustomerName>Bob Jones</CustomerName>
    <DateCreated>2016-05-13T12:18:08.723</DateCreated>
    <DistrictName>Westminster</DistrictName>
    <EmployeeName>iQmetrix User</EmployeeName>
    <EmployeeID>4</EmployeeID>
    <GlobalProductID>5179</GlobalProductID>
    <InvoicedAt>100: My Network LLC - Anchorage</InvoicedAt>
    <InvoicedAt_StoreID>1</InvoicedAt_StoreID>
    <InvoicedBy>100: My Network LLC - Anchorage</InvoicedBy>
    <InvoicedBy_StoreID>1</InvoicedBy_StoreID>
    <InvoiceIDByStore>77224IN3</InvoiceIDByStore>
    <IsOrderServiceDropShipProduct>null</IsOrderServiceDropShipProduct>
    <IsOrderServiceShippingProduct>null</IsOrderServiceShippingProduct>
    <ListPrice>449.95</ListPrice>
    <OriginalUnitPrice>25</OriginalUnitPrice>
    <Priority>1</Priority>
    <ProductCouponDiscount>0</ProductCouponDiscount>
    <ProductIdentifier>ASHCSA000120</ProductIdentifier>
    <ProductName>Samsung Galaxy Rugby LTE</ProductName>
    <Quantity>1</Quantity>
    <Refund>0</Refund>
    <RegionName>London</RegionName>
    <RetailerCatalogID>null</RetailerCatalogID>
    <SaleInvoice_RowID>8c6537ae-75a5-4155-82b2-c8647ed05f3d</SaleInvoice_RowID>
    <SaleInvoiceID>128962</SaleInvoiceID>
    <SaleInvoiceProduct_RowID>0099b78f-ba02-4a91-afd4-2f7eb0fbbb06</SaleInvoiceProduct_RowID>
    <SerialNumber>1111111</SerialNumber>
    <SoldAsUsed>false</SoldAsUsed>
    <SpecialProductID>0</SpecialProductID>
    <StoreInStoreFlowIsEnabledForStore>false</StoreInStoreFlowIsEnabledForStore>
    <StoreInStoreGrossProfit>null</StoreInStoreGrossProfit>
    <StoreInStoreListPrice>null</StoreInStoreListPrice>
    <StoreInStorePrice>null</StoreInStorePrice>
    <StoreTypeName>Costco</StoreTypeName>
    <TenderedBy>iQmetrix User</TenderedBy>
    <TenderedBy_EmployeeID>277</TenderedBy_EmployeeID>
    <TotalCost>0</TotalCost>
    <TotalDiscount>424.95</TotalDiscount>
    <TotalPrice>25</TotalPrice>
    <UnitCost>0</UnitCost>
    <UnitPrice>25</UnitPrice>
    <VendorName></VendorName>
    <VendorSKU></VendorSKU>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-product-detail-report-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Activation_RowID>d3d65281-5201-4927-9bac-6f3a47ddf56b</Activation_RowID>
    <AdjustedUnitPrice>25</AdjustedUnitPrice>
    <BillingAccountNumber></BillingAccountNumber>
    <CarrierPrice>null</CarrierPrice>
    <CategoryPath>>> Phones >> Galaxies</CategoryPath>
    <ChannelName>English Channel</ChannelName>
    <Comments></Comments>
    <ContractNumber>12345</ContractNumber>
    <CustomerID>131149</CustomerID>
    <CustomerName>Bob Jones</CustomerName>
    <DateCreated>2016-05-13T12:18:08.723</DateCreated>
    <DistrictName>Westminster</DistrictName>
    <EmployeeName>iQmetrix User</EmployeeName>
    <EmployeeID>4</EmployeeID>
    <GlobalProductID>5179</GlobalProductID>
    <InvoicedAt>100: My Network LLC - Anchorage</InvoicedAt>
    <InvoicedAt_StoreID>1</InvoicedAt_StoreID>
    <InvoicedBy>100: My Network LLC - Anchorage</InvoicedBy>
    <InvoicedBy_StoreID>1</InvoicedBy_StoreID>
    <InvoiceIDByStore>77224IN3</InvoiceIDByStore>
    <IsOrderServiceDropShipProduct>null</IsOrderServiceDropShipProduct>
    <IsOrderServiceShippingProduct>null</IsOrderServiceShippingProduct>
    <ListPrice>449.95</ListPrice>
    <OriginalUnitPrice>25</OriginalUnitPrice>
    <Priority>1</Priority>
    <ProductCouponDiscount>0</ProductCouponDiscount>
    <ProductIdentifier>ASHCSA000120</ProductIdentifier>
    <ProductName>Samsung Galaxy Rugby LTE</ProductName>
    <Quantity>1</Quantity>
    <Refund>0</Refund>
    <RegionName>London</RegionName>
    <RetailerCatalogID>null</RetailerCatalogID>
    <SaleInvoice_RowID>8c6537ae-75a5-4155-82b2-c8647ed05f3d</SaleInvoice_RowID>
    <SaleInvoiceID>128962</SaleInvoiceID>
    <SaleInvoiceProduct_RowID>0099b78f-ba02-4a91-afd4-2f7eb0fbbb06</SaleInvoiceProduct_RowID>
    <SerialNumber>1111111</SerialNumber>
    <SoldAsUsed>false</SoldAsUsed>
    <SpecialProductID>0</SpecialProductID>
    <StoreInStoreFlowIsEnabledForStore>false</StoreInStoreFlowIsEnabledForStore>
    <StoreInStoreGrossProfit>null</StoreInStoreGrossProfit>
    <StoreInStoreListPrice>null</StoreInStoreListPrice>
    <StoreInStorePrice>null</StoreInStorePrice>
    <StoreTypeName>Costco</StoreTypeName>
    <TenderedBy>iQmetrix User</TenderedBy>
    <TenderedBy_EmployeeID>277</TenderedBy_EmployeeID>
    <TotalCost>0</TotalCost>
    <TotalDiscount>424.95</TotalDiscount>
    <TotalPrice>25</TotalPrice>
    <UnitCost>0</UnitCost>
    <UnitPrice>25</UnitPrice>
    <VendorName></VendorName>
    <VendorSKU></VendorSKU>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-product-detail-report-for-a-company">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Activation_RowID,AdjustedUnitPrice,BillingAccountNumber,CarrierPrice,CategoryPath,ChannelName,Comments,ContractNumber,CustomerID,CustomerName,DateCreated,DistrictName,EmployeeName,EmployeeID,GlobalProductID,InvoicedAt,InvoicedAt_StoreID,InvoicedBy,InvoicedBy_StoreID,InvoiceIDByStore,IsOrderServiceDropShipProduct,IsOrderServiceShippingProduct,ListPrice,OriginalUnitPrice,Priority,ProductCouponDiscount,ProductIdentifier,ProductName,Quantity,Refund,RegionName,RetailerCatalogID,SaleInvoice_RowID,SaleInvoiceID,SaleInvoiceProduct_RowID,SerialNumber,SoldAsUsed,SpecialProductID,StoreInStoreFlowIsEnabledForStore,StoreInStoreGrossProfit,StoreInStoreListPrice,StoreInStorePrice,StoreTypeName,TenderedBy,TenderedBy_EmployeeID,TotalCost,TotalDiscount,TotalPrice,UnitCost,UnitPrice,VendorName,VendorSKU
d3d65281-5201-4927-9bac-6f3a47ddf56b,25,,null,>> Phones >> Galaxies,English Channel,,12345,131149,Bob Jones,2016-05-13T12:18:08.723,Westminster,iQmetrix User,4,5179,100: My Network LLC - Anchorage,1,100: My Network LLC - Anchorage,1,77224IN3,null,null,449.95,25,1,0,ASHCSA000120,Samsung Galaxy Rugby LTE,1,0,London,null,8c6537ae-75a5-4155-82b2-c8647ed05f3d,128962,0099b78f-ba02-4a91-afd4-2f7eb0fbbb06,1111111,false,0,false,null,null,null,Costco,iQmetrix User,277,0,424.95,25,0,25,,</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-product-detail-report-for-a-company">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-vendor-rebate-history-report-for-a-company' class='clickable-header top-level-header'>Getting the Vendor Rebate History Report for a Company</h3>

For more information, see {{support_VendorRebateHistoryReport}}.    

<h4>Request</h4>

<pre>
GET /partner/StatFlo/VendorRebateHistoryReport?CompanyId={CompanyId}&StartDate={StartDate}&StopDate={StopDate}&SearchMethod={SearchMethod}&ApplyShowOnInvoice={ApplyShowOnInvoice}&ReconciledStatus={ReconciledStatus}&EmployeeIDOfReconcilers={EmployeeIDOfReconcilers}&VendorAccountID={VendorAccountID}&CategoryNumber={CategoryNumber}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&ProductIdentifier={ProductIdentifier}&LanguageCode={LanguageCode}&SerialNumber={SerialNumber}&JournalNumber={JournalNumber}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/company-tree/#company'>Company</a>, for a list see Getting Partner Relationships
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
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#categorynumber'>CategoryNumber</a>. For a complete list see <a href="#getting-category-numbers">Getting Category Numbers</a>
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#locationtype'>LocationType</a> to filter the report. For a complete list, see <a href="#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of <a href='http://developers.iqmetrix.com/api/RQ-Data-Connect/#rqcompanytreenode'>RQCompanyTreeNode</a> identifiers to filter the report. For a complete list, see <a href="#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
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
        <code>Auth</code> (Optional)  - Basic token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}
    </li>
    
    <li>
        <code>Response</code> (Optional)  - Default is JSON. For other methods of response, see {{ResponseOptions}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-vendor-rebate-history-report-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-vendor-rebate-history-report-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-vendor-rebate-history-report-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-vendor-rebate-history-report-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-vendor-rebate-history-report-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-vendor-rebate-history-report-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-vendor-rebate-history-report-for-a-company"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-vendor-rebate-history-report-for-a-company">
<pre id="http-code-getting-the-vendor-rebate-history-report-for-a-company"><code class="language-http">GET /partner/StatFlo/VendorRebateHistoryReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-vendor-rebate-history-report-for-a-company">
<pre id="curl-code-getting-the-vendor-rebate-history-report-for-a-company"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/VendorRebateHistoryReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-vendor-rebate-history-report-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-vendor-rebate-history-report-for-a-company"><code class="language-csharp">static IRestResponse GettingTheVendorRebateHistoryReportForACompany()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/VendorRebateHistoryReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-vendor-rebate-history-report-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-vendor-rebate-history-report-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheVendorRebateHistoryReportForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/VendorRebateHistoryReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-vendor-rebate-history-report-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-vendor-rebate-history-report-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/partner/StatFlo/VendorRebateHistoryReport?CompanyId=21090&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-06-06T07:00:00.000Z&SearchMethod=4&ApplyShowOnInvoice=0&ReconciledStatus=2&EmployeeIDOfReconcilers=-1&VendorAccountID=-1&CategoryNumber=10&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&ProductIdentifier=ASCLMO000001&LanguageCode=en-us&SerialNumber=990003427999221&JournalNumber=Feb 2015 Spiff', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#vendorrebatehistoryreportdata'>VendorRebateHistoryReportData</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-vendor-rebate-history-report-for-a-company" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-vendor-rebate-history-report-for-a-company" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-vendor-rebate-history-report-for-a-company" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-vendor-rebate-history-report-for-a-company" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-vendor-rebate-history-report-for-a-company" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-vendor-rebate-history-report-for-a-company" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-vendor-rebate-history-report-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
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
        "EmployeeID": 0,
        "EmployeeID1": 218,
        "EmployeeName": "",
        "EmployeeName1": "iQmetrix User",
        "ExtraField": "1234567890",
        "Flagged": "No",
        "GlobalProductID": 812,
        "InvoiceComments": "",
        "InvoicedAt": "Regina Store",
        "InvoicedAt_StoreID": 1,
        "InvoicedBy": "Regina Store",
        "InvoicedBy_StoreID": 1,
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
        "SerialNumber": "123000000000000",
        "SocCode": "123000000000000",
        "SocCode2": "",
        "SpecialIdentifier": "1",
        "SpecialIdentifier1": "",
        "TermCode": "",
        "TotalPrice": 0,
        "UnitPrice": 0,
        "VendorAccountName": "Verizon 2",
        "VendorName": "Verizon",
        "VendorNumber": "",
        "VendorSKU": ""
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-vendor-rebate-history-report-for-a-company">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
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
            "EmployeeID": 0,
            "EmployeeID1": 218,
            "EmployeeName": "",
            "EmployeeName1": "iQmetrix User",
            "ExtraField": "1234567890",
            "Flagged": "No",
            "GlobalProductID": 812,
            "InvoiceComments": "",
            "InvoicedAt": "Regina Store",
            "InvoicedAt_StoreID": 1,
            "InvoicedBy": "Regina Store",
            "InvoicedBy_StoreID": 1,
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
            "SerialNumber": "123000000000000",
            "SocCode": "123000000000000",
            "SocCode2": "",
            "SpecialIdentifier": "1",
            "SpecialIdentifier1": "",
            "TermCode": "",
            "TotalPrice": 0,
            "UnitPrice": 0,
            "VendorAccountName": "Verizon 2",
            "VendorName": "Verizon",
            "VendorNumber": "",
            "VendorSKU": ""
        }
    ],
    "Schema": [
        {
            "Column_Name": "ColumnName",
            "Type": "datatype",
            "SafeType": "safetype",
            "Length": 100
        }
    ]
}</code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-vendor-rebate-history-report-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ActivationAssociationNumber>2</ActivationAssociationNumber>
    <ActivationRowID>0d4652a7-a673-437a-817e-4641961ba3e6</ActivationRowID>
    <Adjusted>No</Adjusted>
    <AssociationNumber>3</AssociationNumber>
    <CarrierPrice>0</CarrierPrice>
    <ChannelName>English Channel</ChannelName>
    <ChargeBack>No</ChargeBack>
    <Collected>null</Collected>
    <Comments></Comments>
    <Comments2>null</Comments2>
    <ContractNumber>123456789</ContractNumber>
    <CustomerID1>130834</CustomerID1>
    <CustomerName1>Bob Jones</CustomerName1>
    <DateCreated>2016-01-04T14:33:15.737</DateCreated>
    <DateReconciled>null</DateReconciled>
    <DistrictName>District B2</DistrictName>
    <EmployeeID>0</EmployeeID>
    <EmployeeID1>218</EmployeeID1>
    <EmployeeName></EmployeeName>
    <EmployeeName1>iQmetrix User</EmployeeName1>
    <ExtraField>1234567890</ExtraField>
    <Flagged>No</Flagged>
    <GlobalProductID>812</GlobalProductID>
    <InvoiceComments></InvoiceComments>
    <InvoicedAt>Regina Store</InvoicedAt>
    <InvoicedAt_StoreID>1</InvoicedAt_StoreID>
    <InvoicedBy>Regina Store</InvoicedBy>
    <InvoicedBy_StoreID>1</InvoicedBy_StoreID>
    <InvoiceIDByStore>HJKIIIN2</InvoiceIDByStore>
    <InvoiceRowID>db8f28cf-5017-47f4-9ccf-b90cff32185d</InvoiceRowID>
    <JournalNumber></JournalNumber>
    <OriginalSaleDate>null</OriginalSaleDate>
    <OriginalSaleInvoiceID>null</OriginalSaleInvoiceID>
    <OriginalSaleInvoiceIDByStore>null</OriginalSaleInvoiceIDByStore>
    <PartialCB>0</PartialCB>
    <PortNumber></PortNumber>
    <Postal_code>56789</Postal_code>
    <ProductIdentifier>ACVZRB000001</ProductIdentifier>
    <ProductName>Verizon New Act_EquipmentRebate</ProductName>
    <ProductRowID>27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c</ProductRowID>
    <Quantity>1</Quantity>
    <RatePlan>Act $9.99 to $20.98</RatePlan>
    <RatePlan2></RatePlan2>
    <Reconciled>No</Reconciled>
    <RegionID>9</RegionID>
    <RegionName>Region B</RegionName>
    <RelatedCost>404</RelatedCost>
    <RelatedPrice>69.99</RelatedPrice>
    <RelatedProduct>Samsung Galaxy S4</RelatedProduct>
    <RelatedProductSerialNumbers>ACVZCB0026</RelatedProductSerialNumbers>
    <RelatedProductSKU>ACVZCB000244</RelatedProductSKU>
    <SaleInvoiceID>126526</SaleInvoiceID>
    <SerialNumber>123000000000000</SerialNumber>
    <SocCode>123000000000000</SocCode>
    <SocCode2></SocCode2>
    <SpecialIdentifier>1</SpecialIdentifier>
    <SpecialIdentifier1></SpecialIdentifier1>
    <TermCode></TermCode>
    <TotalPrice>0</TotalPrice>
    <UnitPrice>0</UnitPrice>
    <VendorAccountName>Verizon 2</VendorAccountName>
    <VendorName>Verizon</VendorName>
    <VendorNumber></VendorNumber>
    <VendorSKU></VendorSKU>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-vendor-rebate-history-report-for-a-company">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ActivationAssociationNumber>2</ActivationAssociationNumber>
    <ActivationRowID>0d4652a7-a673-437a-817e-4641961ba3e6</ActivationRowID>
    <Adjusted>No</Adjusted>
    <AssociationNumber>3</AssociationNumber>
    <CarrierPrice>0</CarrierPrice>
    <ChannelName>English Channel</ChannelName>
    <ChargeBack>No</ChargeBack>
    <Collected>null</Collected>
    <Comments></Comments>
    <Comments2>null</Comments2>
    <ContractNumber>123456789</ContractNumber>
    <CustomerID1>130834</CustomerID1>
    <CustomerName1>Bob Jones</CustomerName1>
    <DateCreated>2016-01-04T14:33:15.737</DateCreated>
    <DateReconciled>null</DateReconciled>
    <DistrictName>District B2</DistrictName>
    <EmployeeID>0</EmployeeID>
    <EmployeeID1>218</EmployeeID1>
    <EmployeeName></EmployeeName>
    <EmployeeName1>iQmetrix User</EmployeeName1>
    <ExtraField>1234567890</ExtraField>
    <Flagged>No</Flagged>
    <GlobalProductID>812</GlobalProductID>
    <InvoiceComments></InvoiceComments>
    <InvoicedAt>Regina Store</InvoicedAt>
    <InvoicedAt_StoreID>1</InvoicedAt_StoreID>
    <InvoicedBy>Regina Store</InvoicedBy>
    <InvoicedBy_StoreID>1</InvoicedBy_StoreID>
    <InvoiceIDByStore>HJKIIIN2</InvoiceIDByStore>
    <InvoiceRowID>db8f28cf-5017-47f4-9ccf-b90cff32185d</InvoiceRowID>
    <JournalNumber></JournalNumber>
    <OriginalSaleDate>null</OriginalSaleDate>
    <OriginalSaleInvoiceID>null</OriginalSaleInvoiceID>
    <OriginalSaleInvoiceIDByStore>null</OriginalSaleInvoiceIDByStore>
    <PartialCB>0</PartialCB>
    <PortNumber></PortNumber>
    <Postal_code>56789</Postal_code>
    <ProductIdentifier>ACVZRB000001</ProductIdentifier>
    <ProductName>Verizon New Act_EquipmentRebate</ProductName>
    <ProductRowID>27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c</ProductRowID>
    <Quantity>1</Quantity>
    <RatePlan>Act $9.99 to $20.98</RatePlan>
    <RatePlan2></RatePlan2>
    <Reconciled>No</Reconciled>
    <RegionID>9</RegionID>
    <RegionName>Region B</RegionName>
    <RelatedCost>404</RelatedCost>
    <RelatedPrice>69.99</RelatedPrice>
    <RelatedProduct>Samsung Galaxy S4</RelatedProduct>
    <RelatedProductSerialNumbers>ACVZCB0026</RelatedProductSerialNumbers>
    <RelatedProductSKU>ACVZCB000244</RelatedProductSKU>
    <SaleInvoiceID>126526</SaleInvoiceID>
    <SerialNumber>123000000000000</SerialNumber>
    <SocCode>123000000000000</SocCode>
    <SocCode2></SocCode2>
    <SpecialIdentifier>1</SpecialIdentifier>
    <SpecialIdentifier1></SpecialIdentifier1>
    <TermCode></TermCode>
    <TotalPrice>0</TotalPrice>
    <UnitPrice>0</UnitPrice>
    <VendorAccountName>Verizon 2</VendorAccountName>
    <VendorName>Verizon</VendorName>
    <VendorNumber></VendorNumber>
    <VendorSKU></VendorSKU>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-vendor-rebate-history-report-for-a-company">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ActivationAssociationNumber,ActivationRowID,Adjusted,AssociationNumber,CarrierPrice,ChannelName,ChargeBack,Collected,Comments,Comments2,ContractNumber,CustomerID1,CustomerName1,DateCreated,DateReconciled,DistrictName,EmployeeID,EmployeeID1,EmployeeName,EmployeeName1,ExtraField,Flagged,GlobalProductID,InvoiceComments,InvoicedAt,InvoicedAt_StoreID,InvoicedBy,InvoicedBy_StoreID,InvoiceIDByStore,InvoiceRowID,JournalNumber,OriginalSaleDate,OriginalSaleInvoiceID,OriginalSaleInvoiceIDByStore,PartialCB,PortNumber,Postal_code,ProductIdentifier,ProductName,ProductRowID,Quantity,RatePlan,RatePlan2,Reconciled,RegionID,RegionName,RelatedCost,RelatedPrice,RelatedProduct,RelatedProductSerialNumbers,RelatedProductSKU,SaleInvoiceID,SerialNumber,SocCode,SocCode2,SpecialIdentifier,SpecialIdentifier1,TermCode,TotalPrice,UnitPrice,VendorAccountName,VendorName,VendorNumber,VendorSKU
2,0d4652a7-a673-437a-817e-4641961ba3e6,No,3,0,English Channel,No,null,,null,123456789,130834,Bob Jones,2016-01-04T14:33:15.737,null,District B2,0,218,,iQmetrix User,1234567890,No,812,,Regina Store,1,Regina Store,1,HJKIIIN2,db8f28cf-5017-47f4-9ccf-b90cff32185d,,null,null,null,0,,56789,ACVZRB000001,Verizon New Act_EquipmentRebate,27be5c76-b0ba-4a34-ba7d-fa34aba0ab9c,1,Act $9.99 to $20.98,,No,9,Region B,404,69.99,Samsung Galaxy S4,ACVZCB0026,ACVZCB000244,126526,123000000000000,123000000000000,,1,,,0,0,Verizon 2,Verizon,,</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-vendor-rebate-history-report-for-a-company">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


    
    

    
    

    
    
<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Bad Request` | Ensure request body is formatted properly |
| `HTTP 401` | `Token is invalid` | Ensure Access Token is valid and has not expired | 
| `HTTP 403` | `Unauthorized` | Ensure Access Token is valid and user has appropriate security |
| `HTTP 404` | `Not Found` | Ensure URI is valid |
| `HTTP 429` | `Too Many Requests` | See [Rate Limiting](/api/#rate-limiting) |
| `HTTP 500` | `Unexpected Error` | See Message in response for more information |        

    
