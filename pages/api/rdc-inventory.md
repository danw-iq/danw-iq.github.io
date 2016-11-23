---
title:  RQ Data Connect Inventory Reports
permalink: /api/RQ-Data-Connect-Inventory-Reports/
tags: []
keywords: 
audience: 
last_updated: 23-11-2016
summary: 
rouge: false
noPopUp: true
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}




## Overview


RQ Data Connect allows you to retrieve report data from your RQ database (v4.23 and up).

To get started, see [RQ Data Connect Guide](/guides/rq-data-connect/).

#### Note

For reports that provide optional URI parameters for filtering at different levels (ForWho/ForWhoIDs/LocationType/LocationTypeIDs), omitting these values will run the report at the default company level.

### Authentication

RQ Data Connect and Bridge support many different methods of authentication, see {{AuthenticationOptions}}.

Note that for all reports the {{AccessToken_Glossary}} should be mapped to an employee in RQ.

### Report List

For a complete list of reports in RQ Data Connect, see [Report List](/rq-data-connect/report-list).


## Endpoints

* Sandbox: <a href="https://rqdataconnectdemo.iqmetrix.net">https://rqdataconnectdemo.iqmetrix.net</a>
* Production: <a href="https://rqdataconnect.iqmetrix.net">https://rqdataconnect.iqmetrix.net</a>

## Resources

## AdjustmentHistoryInvoiceDetailReportData

| Name | Description |
|:-----|:------------|
| AdjustmentType (`TINYINT`) | Type: 0 = Not Set : 1 = Quantity : 2 = Unit Cost : 3 = New Product : 4 = Delete Product | 
| Comments (`VARCHAR (1000)`) | Comments - any comments entered regarding the adjustment; if the adjustment was done via the reconcile receiving invoices screen, it will be noted here automatically | 
| CountSheetID (`INT`) | Internal identifier for a Count Sheet in RQ | 
| CountSheetIDByStore (`VARCHAR (14)`) | Count Sheet # - if an adjustment is generated from an inventory count sheet it will be noted here | 
| DateCreated (`DateTime`) | Adjusted On - date and time the adjustment was made | 
| EmployeeName (`VARCHAR (51)`) | Created By - name of the employee who did the adjustment | 
| IsReceiving (`BIT`) | Is Adjustment from receiving Products or not (adjustments made either made through receiving, or manual adjustment) | 
| StoreName (`NVARCHAR (MAX)`) | Location - where the adjustment was made | 
| TotalInvoice (`MONEY`) | Total Invoice - total dollar amount of the adjustment invoice | 
| TransactionID (`INT`) | Internal RQ identifier | 
| TransactionIDByStore (`VARCHAR (14)`) | Transaction # - transaction number, including corrected purchase orders | 

## AdjustmentHistoryProductDetailReportData

| Name | Description |
|:-----|:------------|
| Comments (`VARCHAR (100)`) | Comments - any comments entered regarding the adjustment; if an adjustment was made via the reconcile receiving invoices screen, it will automatically be entered in comments | 
| CountSheetID (`INT`) | Internal identifier for a Count Sheet in RQ | 
| CountSheetIDByStore (`VARCHAR (14)`) | Count Sheet # - if an adjustment is generated from an inventory count sheet it will be noted here | 
| DateCreated (`DateTime`) | Adjusted On - date and time the adjustment was made | 
| EmployeeName (`VARCHAR (51)`) | Created By - name of the employee who did the adjustment | 
| IsReceiving (`BIT`) | Is Adjustment from receiving Products or not (adjustments made either made through receiving, or manual adjustment) | 
| ProductIdentifier (`VARCHAR (12)`) | Product SKU - RQ generated SKU for the product adjusted | 
| ProductName (`NVARCHAR (MAX)`) | Product Name - name of the product as it appears in inventory | 
| Quantity (`INT`) | Quantity - total quantity of the product adjusted | 
| ReasonCode (`NVARCHAR (MAX)`) | Reason Code - reason code selected from the drop down list at the time of adjustment | 
| SerialNumber (`VARCHAR (100)`) | Tracking # - tracking number, if there is one | 
| StoreName (`NVARCHAR (MAX)`) | Location - where the adjustment was made | 
| TotalCost (`MONEY`) | Total Cost - total cost for that product calculated as Quantity X Unit Cost | 
| TransactionID (`INT`) | Internal RQ identifier | 
| TransactionIDByStore (`VARCHAR (14)`) | Transaction # - transaction number, including corrected purchase orders | 
| UnitCost (`MONEY`) | Unit Cost - purchase cost per unit; weighted average cost for non-serialized products and true cost for serialized products | 
| VendorName (`NVARCHAR(MAX)`) | Name for a vendor in RQ | 
| VendorSKU (`VARCHAR(25)`) | Vendor SKU | 

## InventoryListingReportData

| Name | Description |
|:-----|:------------|
| BarCode (`VARCHAR (20)`) | Bar Code - any bar code(s) you have assigned to this product | 
| BinStatus (`VARCHAR(100)`) | Status - dependent on the Status setting in the search criteria but can be In Stock, On RMA, Transfer In, Transfer Out, On Order, On Loan or Non Sellable | 
| CategoryPath (`NVARCHAR (MAX)`) | Category - inventory category | 
| ChannelName (`NVARCHAR (MAX)`) | Channel - channel for the rows location | 
| DateEOL (`DateTime`) | EOL - date this product will be End of Life | 
| DiscontinuedDate (`DateTime`) | Discontinued Date - date that this product was, or will be, discontinued | 
| DistrictName (`NVARCHAR (MAX)`) | District - district for the rows location | 
| DoNotOrder (`BIT`) | Do Not Order - yes/no field noting whether this product has been marked Do Not Order | 
| IsUsed (`BIT`) | Used - this will show checked if the product is in a used status | 
| ManufacturerPartNumber (`VARCHAR (50)`) | Manufacturer SKU - SKU assigned by the manufacturer (can be anything user specifies, not necessarily from manufacturer) | 
| NoSale (`BIT`) | Do Not Sell - yes/no field noting whether this product has been marked Do Not Sell | 
| ProductIdentifier (`VARCHAR (12)`) | Product SKU - RQ generated SKU | 
| ProductName (`NVARCHAR (MAX)`) | Product Name - name of the product as it appears in the inventory | 
| Quantity (`INT`) | Quantity - total number in stock at the location | 
| RefundPeriodLength (`INT`) | Refund Period (days) - number of days that product can be refunded in | 
| RegionName (`NVARCHAR (MAX)`) | Region - region for the rows location | 
| SerialNumber (`VARCHAR(100)`) | Tracking # - any serial number attached to the particular product | 
| SpecialOrder (`BIT`) | Special Order - yes/no field noting this product as a Special Order | 
| StoreName (`NVARCHAR (MAX)`) | Location - where the product is in stock | 
| StoreTypeName (`NVARCHAR (MAX)`) | Location Type - location type where the product is in stock | 
| TotalCost (`MONEY`) | Total Cost - Quantity X Unit Cost | 
| UnitCost (`MONEY`) | Unit Cost - purchase cost per unit; weighted average cost for non-serialized products and true cost for serialized products | 
| VendorName (`NVARCHAR (MAX)`) | Vendor - vendor from whom the individual product was purchased | 
| VendorPartNumber (`VARCHAR (25)`) | Vendor SKU - SKU assigned by the vendor | 
| WarehouseLocation (`VARCHAR (100)`) | Warehouse Location - where the stock is located in the warehouse, if used | 
| WriteOff (`BIT`) | Write Off - yes/no field noting this product as a Write Off | 

## RMAHistoryInvoiceReportData

| Name | Description |
|:-----|:------------|
| ChannelName (`NVARCHAR (MAX)`) | Channel - channel for the rows location | 
| Comments (`VARCHAR (1000)`) | Comments - comments entered on the RMA form will be displayed here | 
| Committed (`BIT`) | Committed - indicates if the RMA is committed or non-committed | 
| Completed (`BIT`) | Completed - indicates if the RMA is completed | 
| CreditInvoiceNumber (`VARCHAR (20)`) | Credit Invoice # - number of the credit invoice from vendor used to provide an audit trail | 
| CustomerID (`INT`) | Identifier for a customer in RQ | 
| CustomerName (`VARCHAR (101)`) | Customer - it is possible to RMA a customer owned product (very rare); customer name will be recorded here | 
| DateCommitted (`DateTime`) | Committed On - date and time committed | 
| DateCreated (`DateTime`) | Created On - date and time the RMA was created | 
| DistrictName (`NVARCHAR (MAX)`) | District - district for the rows location | 
| EmployeeName (`VARCHAR (51)`) | Created By - name of the employee logged into RQ when the RMA was created | 
| ReceivingComments (`VARCHAR (1000)`) | Receiving Comments - comments entered during the RMA completion process will be displayed here | 
| RegionName (`NVARCHAR (MAX)`) | Region - region for the rows location | 
| RMANumber (`VARCHAR (15)`) | Vendor RMA # - RMA # provided by the vendor, should be noted to provide an audit trail. | 
| ShippedAway (`BIT`) | Shipped Away - indicates if the Shipped box on the RMA has been checked | 
| ShippingCost (`MONEY`) | Shipping Cost - total of the cost to return the product | 
| ShippingMethod (`VARCHAR (30)`) | Shipping Method - shipping company name will appear here | 
| StockBalanceID (`INT`) | Identifier in RQ | 
| StockBalanceIDByStore (`VARCHAR (14)`) | RMA # - RMA number assigned by RQ | 
| StoreName (`NVARCHAR (MAX)`) | Location - location that created the RMA | 
| TotalCost (`MONEY`) | Total Cost - total cost of items sent away on RMA | 
| TotalCostCredited (`MONEY`) | Total Cost Credited - amount credited by vendor for products on the RMA. It grabs the average cost under the product. | 
| VendorName (`NVARCHAR (MAX)`) | Vendor - vendor receiving the RMA | 
| WaybillNumber (`VARCHAR (50)`) | Way Bill # - tracking number provided by shipping company, e.g. UPS, Purolator, etc. | 

## RMAHistoryProductReportData

| Name | Description |
|:-----|:------------|
| ActionTaken (`TINYINT`) | Type - indicated the type of RMA: Credit, Replacement, Rejected or Repaired (1:Credit, 2:Replacement, 3:Rejected, 4:Repaired) | 
| ChannelName (`NVARCHAR (MAX)`) | Channel - channel for the rows location | 
| DateCreated (`DateTime`) | Created On - date and time the RMA was created | 
| DateReceived (`DateTime`) | Received On - date and time the RMA was received | 
| DateShipped (`DateTime`) | Shipped On - date and time the Shipped box was checked | 
| DistrictName (`NVARCHAR (MAX)`) | District - district for the rows location | 
| EmployeeName1 (`VARCHAR (51)`) | Shipped By - name of the employee logged into RQ when the RMA was shipped | 
| EmployeeName2 (`VARCHAR (51)`) | TransferHistoryInvoiceDetailReportData | 
| ProductIdentifier (`VARCHAR (12)`) | Product SKU - RQ generated SKU | 
| ProductName (`NVARCHAR (MAX)`) | Product Name - name of the product as it appears in the inventory | 
| Quantity (`INT`) | Quantity - total number of that product SKU on the purchase order | 
| RegionName (`NVARCHAR (MAX)`) | Region - region for the rows location | 
| RMANumber (`VARCHAR (15)`) | Vendor RMA # - RMA # provided by the vendor, should be noted to provide an audit trail | 
| SerialNumberAdded (`VARCHAR (100)`) | Tracking # Received - tracking number received as replacement | 
| SerialNumberRemoved (`VARCHAR (100)`) | Tracking # Shipped - tracking number shipped from inventory | 
| StockBalanceID (`INT`) | Identifier in RQ | 
| StockBalanceIDByStore (`VARCHAR (14)`) | RMA # - RMA number assigned by RQ | 
| StoreName (`NVARCHAR (MAX)`) | Location - location that created the RMA | 
| TotalCost (`MONEY`) | Total Cost - total cost of items sent away on RMA | 
| TotalCostCredited (`MONEY`) | Total Cost Credited - dollar amount credited by vendor for products on the RMA | 
| UnitCost (`MONEY`) | Unit Cost - purchase cost per unit sent away on RMA; weighted average cost for non-serialized products and true cost for serialized products | 
| UnitCostCredited (`MONEY`) | Unit Cost Credited - dollar amount of the credit granted by the vendor per unit | 
| VendorInvoiceNumber (`VARCHAR (20)`) | Vendor Invoice # - invoice number assigned by the vendor for the purchase order | 
| VendorName (`NVARCHAR (MAX)`) | RMA Vendor - vendor to whom the product was returned | 
| VendorPartNumber (`VARCHAR (25)`) | RMA Vendor SKU - SKU assigned by the RMA Vendor | 

## TransferHistoryInvoiceDetailReportData

| Name | Description |
|:-----|:------------|
| BillingStoreName (`NVARCHAR(MAX)`) | Bill To - location to be billed | 
| CancelledByID (`INT`) | Internal identifier in RQ | 
| CancelledByName (`VARCHAR (51)`) | Cancelled By - employee logged into RQ when the transfer was cancelled | 
| CancelledDate (`DateTime`) | Cancelled On - date and time the transfer was cancelled | 
| Committed (`BIT`) | Committed - indicates if the transfer has been committed or not | 
| Completed (`BIT`) | Completed - indicates if the transfer has been completed, i.e. received by the requesting location | 
| DateCommitted (`DateTime`) | Committed On - date and time the transfer was committed | 
| DateRequested (`DateTime`) | Requested On - date and time the product(s) were requested | 
| EstimatedArrivalDate (`DateTime`) | ETA - original estimate of date of delivery | 
| ReceivingChannelName (`NVARCHAR(MAX)`) | Received At Channel - channel that received the inventory | 
| ReceivingComments (`VARCHAR (500)`) | Receiving Comments - any commented entered at the time the transfer was received | 
| ReceivingDistrictName (`NVARCHAR(MAX)`) | Received At District - district that received the inventory | 
| ReceivingRegionName (`NVARCHAR(MAX)`) | Received At Region - region that received the inventory | 
| ReceivingStoreName (`NVARCHAR(MAX)`) | Received At - location that received the product(s) shipped from another location | 
| RequestingComments (`VARCHAR (500)`) | Requesting Comments - any comments entered at the time the transfer request was made | 
| RequestingEmployeeName (`VARCHAR (51)`) | Requested By - employee logged into RQ when the request was made | 
| ShippingChannelName (`NVARCHAR(MAX)`) | Shipped From Channel - channel that shipped the inventory | 
| ShippingComments (`VARCHAR (500)`) | Shipping Comments - any comments entered at the time the transfer was shipped | 
| ShippingCost (`MONEY`) | Shipping Cost - total cost to ship the product(s) | 
| ShippingDistrictName (`NVARCHAR(MAX)`) | Shipped From District - district that shipped the inventory | 
| ShippingMethod (`VARCHAR (30)`) | Shipping Method - selected at the time of shipping | 
| ShippingRegionName (`NVARCHAR(MAX)`) | Shipped From Region - region that shipped the inventory | 
| ShippingStoreName (`NVARCHAR(MAX)`) | Shipped From - location that shipped the product(s) to another location | 
| TotalInvoice (`MONEY`) | Total Invoice - total dollar amount of the cost of the product(s) on being transferred | 
| TransferID (`INT`) | Identifier for a transfer in RQ | 
| TransferIDByStore (`VARCHAR (14)`) | Transfer # - transfer number generated by RQ | 
| WaybillNumber (`VARCHAR (100)`) | Way Bill # - tracking number provided by shipping company, e.g. UPS, Purolator, etc. | 

## TransferHistoryProductDetailReportData

| Name | Description |
|:-----|:------------|
| CancelledByID (`INT`) | Internal identifier in RQ | 
| CancelledByName (`VARCHAR (51)`) | Cancelled By - cancelling employee | 
| CancelledDate (`DateTime`) | Cancelled On - date the transfer was cancelled | 
| CategoryPath (`NVARCHAR(MAX)`) | Category - inventory category this product lives in | 
| DateReceived (`DateTime`) | Received On - date the item(s) were received on | 
| DateShipped (`DateTime`) | Shipped On - date the item(s) was shipped | 
| ProductIdentifier (`VARCHAR(12)`) | Product SKU - RQ generated SKU | 
| ProductName (`NVARCHAR(MAX)`) | Product Name - name of this product as it appears in inventory | 
| Quantity (`INT`) | Quantity - quantity of item transferred | 
| ReceivingChannelName (`NVARCHAR(MAX)`) | Received At Channel - channel that received the inventory | 
| ReceivingDistrictName (`NVARCHAR(MAX)`) | Received At District - district that received the inventory | 
| ReceivingEmployeeName (`VARCHAR (51)`) | Received By - employee who received the transfer | 
| ReceivingRegionName (`NVARCHAR(MAX)`) | Received At Region - region that received the inventory | 
| ReceivingStoreName (`NVARCHAR(MAX)`) | Received At - location that received the product(s) shipped from another location | 
| RequestingEmployeeName (`VARCHAR (51)`) | Requested By - employee who requested the transfer | 
| SerialNumber (`VARCHAR (100)`) | Tracking # - tracking # for the item shipped | 
| ShippingChannelName (`NVARCHAR(MAX)`) | Shipped From Channel - channel that shipped the inventory | 
| ShippingDistrictName (`NVARCHAR(MAX)`) | Shipped From District - district that shipped the inventory | 
| ShippingEmployeeName (`VARCHAR (51)`) | Shipped By - employee who shipped the transfer | 
| ShippingRegionName (`NVARCHAR(MAX)`) | Shipped From Region - region that shipped the inventory | 
| ShippingStoreName (`NVARCHAR(MAX)`) | Shipped From - location that shipped the product(s) to another location | 
| TotalCost (`MONEY`) | Total Cost - cost per item multiplied by how many of the item were transferred | 
| TransferID (`INT`) | Internal identifier in RQ | 
| TransferIDByStore (`VARCHAR(14)`) | Transfer # - transfer number generated by RQ | 
| UnitCost (`MONEY`) | Unit Cost - cost per item | 
| VendorName (`NVARCHAR(MAX)`) | Vendor - vendor the item was purchased from | 
| VendorPartNumber (`VARCHAR (25)`) | Vendor SKU - vendor SKU | 
| WaybillNumber (`VARCHAR (100)`) | Way Bill # - tracking number provided by shipping company, e.g. UPS, Purolator, etc. | 



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



<h3 id='getting-the-adjustment-history-invoice-detail-report' class='clickable-header top-level-header'>Getting the Adjustment History Invoice Detail Report</h3>

For more information, see {{support_AdjustmentHistoryReport}}.


<h4>Request</h4>

<pre>
GET /reports/adjustmenthistoryinvoicedetailreport?ReasonCode={ReasonCode}&StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&SerialNumber={SerialNumber}&ProductIdentifier={ProductIdentifier}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ReasonCode</code> (<strong>Required</strong>)  - Identifier for a {{ReasonCode}}. Use -1 to specify All Reason Codes. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-reason-codes">Getting Reason Codes</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A {{LocationType}} to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of {{RQCompanyTreeNode}} identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>SerialNumber</code> (Optional)  - Serial Number
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
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
    <li class="active"><a href="#http-getting-the-adjustment-history-invoice-detail-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-adjustment-history-invoice-detail-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-adjustment-history-invoice-detail-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-adjustment-history-invoice-detail-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-adjustment-history-invoice-detail-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-adjustment-history-invoice-detail-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-adjustment-history-invoice-detail-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-adjustment-history-invoice-detail-report">
<pre id="http-code-getting-the-adjustment-history-invoice-detail-report"><code class="language-http">GET /reports/adjustmenthistoryinvoicedetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&SerialNumber=990003427999221&ProductIdentifier=ASCLMO000001&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-adjustment-history-invoice-detail-report">
<pre id="curl-code-getting-the-adjustment-history-invoice-detail-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryinvoicedetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&SerialNumber=990003427999221&ProductIdentifier=ASCLMO000001&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-adjustment-history-invoice-detail-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-adjustment-history-invoice-detail-report"><code class="language-csharp">static IRestResponse GettingTheAdjustmentHistoryInvoiceDetailReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryinvoicedetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&SerialNumber=990003427999221&ProductIdentifier=ASCLMO000001&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

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
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryinvoicedetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&SerialNumber=990003427999221&ProductIdentifier=ASCLMO000001&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-adjustment-history-invoice-detail-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-adjustment-history-invoice-detail-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryinvoicedetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&SerialNumber=990003427999221&ProductIdentifier=ASCLMO000001&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#adjustmenthistoryinvoicedetailreportdata'>AdjustmentHistoryInvoiceDetailReportData</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-adjustment-history-invoice-detail-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-adjustment-history-invoice-detail-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-adjustment-history-invoice-detail-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-adjustment-history-invoice-detail-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-adjustment-history-invoice-detail-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-adjustment-history-invoice-detail-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-adjustment-history-invoice-detail-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
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
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-adjustment-history-invoice-detail-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-adjustment-history-invoice-detail-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <AdjustmentType>1</AdjustmentType>
    <Comments>Comment</Comments>
    <CountSheetID>1</CountSheetID>
    <CountSheetIDByStore>1</CountSheetIDByStore>
    <DateCreated>2015-12-16T07:39:39.49</DateCreated>
    <EmployeeName>iQmetrix User</EmployeeName>
    <IsReceiving>false</IsReceiving>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <TotalInvoice>0</TotalInvoice>
    <TransactionID>19240</TransactionID>
    <TransactionIDByStore>84WEAIA1187</TransactionIDByStore>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-adjustment-history-invoice-detail-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <AdjustmentType>1</AdjustmentType>
    <Comments>Comment</Comments>
    <CountSheetID>1</CountSheetID>
    <CountSheetIDByStore>1</CountSheetIDByStore>
    <DateCreated>2015-12-16T07:39:39.49</DateCreated>
    <EmployeeName>iQmetrix User</EmployeeName>
    <IsReceiving>false</IsReceiving>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <TotalInvoice>0</TotalInvoice>
    <TransactionID>19240</TransactionID>
    <TransactionIDByStore>84WEAIA1187</TransactionIDByStore>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-adjustment-history-invoice-detail-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>AdjustmentType,Comments,CountSheetID,CountSheetIDByStore,DateCreated,EmployeeName,IsReceiving,StoreName,TotalInvoice,TransactionID,TransactionIDByStore
1,Comment,1,1,2015-12-16T07:39:39.49,iQmetrix User,false,100: My Network LLC - Anchorage,0,19240,84WEAIA1187</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-adjustment-history-invoice-detail-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-adjustment-history-product-detail-report' class='clickable-header top-level-header'>Getting the Adjustment History Product Detail Report</h3>

For more information, see {{support_AdjustmentHistoryReport}}.


<h4>Request</h4>

<pre>
GET /reports/adjustmenthistoryproductdetailreport?ReasonCode={ReasonCode}&StartDate={StartDate}&StopDate={StopDate}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&ProductIdentifier={ProductIdentifier}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ReasonCode</code> (<strong>Required</strong>)  - Identifier for a {{ReasonCode}}. Use -1 to specify All Reason Codes. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-reason-codes">Getting Reason Codes</a>
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A {{LocationType}} to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of {{RQCompanyTreeNode}} identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
    </li>
    
    <li>
        <code>LanguageCode</code> (Optional)  - Language code, defaults to en-us. For a complete list, see <a href='/api/RQ-Data-Connect/#getting-language-codes'>Getting Language Codes</a>
    </li>
    
    <li>
        <code>ProductIdentifier</code> (Optional)  - Product SKU
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
    <li class="active"><a href="#http-getting-the-adjustment-history-product-detail-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-adjustment-history-product-detail-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-adjustment-history-product-detail-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-adjustment-history-product-detail-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-adjustment-history-product-detail-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-adjustment-history-product-detail-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-adjustment-history-product-detail-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-adjustment-history-product-detail-report">
<pre id="http-code-getting-the-adjustment-history-product-detail-report"><code class="language-http">GET /reports/adjustmenthistoryproductdetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&ProductIdentifier=ASCLMO000001
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-adjustment-history-product-detail-report">
<pre id="curl-code-getting-the-adjustment-history-product-detail-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryproductdetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&ProductIdentifier=ASCLMO000001"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-adjustment-history-product-detail-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-adjustment-history-product-detail-report"><code class="language-csharp">static IRestResponse GettingTheAdjustmentHistoryProductDetailReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryproductdetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&ProductIdentifier=ASCLMO000001");
    var request = new RestRequest(Method.GET);
     

    

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
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryproductdetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&ProductIdentifier=ASCLMO000001");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-adjustment-history-product-detail-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-adjustment-history-product-detail-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/adjustmenthistoryproductdetailreport?ReasonCode=-1&StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us&ProductIdentifier=ASCLMO000001', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#adjustmenthistoryproductdetailreportdata'>AdjustmentHistoryProductDetailReportData</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-adjustment-history-product-detail-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-adjustment-history-product-detail-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-adjustment-history-product-detail-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-adjustment-history-product-detail-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-adjustment-history-product-detail-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-adjustment-history-product-detail-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-adjustment-history-product-detail-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
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
        "SerialNumber": "123000000000000",
        "StoreName": "100: My Network LLC - Anchorage",
        "TotalCost": 0,
        "TransactionID": 19240,
        "TransactionIDByStore": "84WEAIA1187",
        "UnitCost": 0,
        "VendorName": "",
        "VendorSKU": ""
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-adjustment-history-product-detail-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
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
            "SerialNumber": "123000000000000",
            "StoreName": "100: My Network LLC - Anchorage",
            "TotalCost": 0,
            "TransactionID": 19240,
            "TransactionIDByStore": "84WEAIA1187",
            "UnitCost": 0,
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-adjustment-history-product-detail-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Comments>Comment</Comments>
    <CountSheetID>0</CountSheetID>
    <CountSheetIDByStore></CountSheetIDByStore>
    <DateCreated>2015-12-16T07:39:39.49</DateCreated>
    <EmployeeName>iQmetrix User</EmployeeName>
    <IsReceiving>false</IsReceiving>
    <ProductIdentifier>ASMAAP000017</ProductIdentifier>
    <ProductName>Samsung Galaxy S4</ProductName>
    <Quantity>5</Quantity>
    <ReasonCode>Unexplained Shrinkage</ReasonCode>
    <SerialNumber>123000000000000</SerialNumber>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <TotalCost>0</TotalCost>
    <TransactionID>19240</TransactionID>
    <TransactionIDByStore>84WEAIA1187</TransactionIDByStore>
    <UnitCost>0</UnitCost>
    <VendorName></VendorName>
    <VendorSKU></VendorSKU>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-adjustment-history-product-detail-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <Comments>Comment</Comments>
    <CountSheetID>0</CountSheetID>
    <CountSheetIDByStore></CountSheetIDByStore>
    <DateCreated>2015-12-16T07:39:39.49</DateCreated>
    <EmployeeName>iQmetrix User</EmployeeName>
    <IsReceiving>false</IsReceiving>
    <ProductIdentifier>ASMAAP000017</ProductIdentifier>
    <ProductName>Samsung Galaxy S4</ProductName>
    <Quantity>5</Quantity>
    <ReasonCode>Unexplained Shrinkage</ReasonCode>
    <SerialNumber>123000000000000</SerialNumber>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <TotalCost>0</TotalCost>
    <TransactionID>19240</TransactionID>
    <TransactionIDByStore>84WEAIA1187</TransactionIDByStore>
    <UnitCost>0</UnitCost>
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
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-adjustment-history-product-detail-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>Comments,CountSheetID,CountSheetIDByStore,DateCreated,EmployeeName,IsReceiving,ProductIdentifier,ProductName,Quantity,ReasonCode,SerialNumber,StoreName,TotalCost,TransactionID,TransactionIDByStore,UnitCost,VendorName,VendorSKU
Comment,0,,2015-12-16T07:39:39.49,iQmetrix User,false,ASMAAP000017,Samsung Galaxy S4,5,Unexplained Shrinkage,123000000000000,100: My Network LLC - Anchorage,0,19240,84WEAIA1187,0,,</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-adjustment-history-product-detail-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-inventory-listing-report' class='clickable-header top-level-header'>Getting the Inventory Listing Report</h3>

<a name="inventory-reports"></a>For more information, see {{support_InventoryListingReport}}.      


<h4>Request</h4>

<pre>
GET /reports/inventorylistingreport?CategoryNumber={CategoryNumber}&BinStatus={BinStatus}&QtyStatus={QtyStatus}&BlindInventory={BlindInventory}&DateAsOf={DateAsOf}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CategoryNumber</code> (<strong>Required</strong>)  - Identifier for a {{CategoryNumber}}. For a complete list see <a href="/api/RQ-Data-Connect/#getting-category-numbers">Getting Category Numbers</a>
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
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A {{LocationType}} to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of {{RQCompanyTreeNode}} identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
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
    <li class="active"><a href="#http-getting-the-inventory-listing-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-inventory-listing-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-inventory-listing-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-inventory-listing-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-inventory-listing-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-inventory-listing-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-inventory-listing-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-inventory-listing-report">
<pre id="http-code-getting-the-inventory-listing-report"><code class="language-http">GET /reports/inventorylistingreport?CategoryNumber=10&BinStatus=1&QtyStatus=4&BlindInventory=0&DateAsOf=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-inventory-listing-report">
<pre id="curl-code-getting-the-inventory-listing-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/inventorylistingreport?CategoryNumber=10&BinStatus=1&QtyStatus=4&BlindInventory=0&DateAsOf=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-inventory-listing-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-inventory-listing-report"><code class="language-csharp">static IRestResponse GettingTheInventoryListingReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/inventorylistingreport?CategoryNumber=10&BinStatus=1&QtyStatus=4&BlindInventory=0&DateAsOf=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

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
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/inventorylistingreport?CategoryNumber=10&BinStatus=1&QtyStatus=4&BlindInventory=0&DateAsOf=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-inventory-listing-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-inventory-listing-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/inventorylistingreport?CategoryNumber=10&BinStatus=1&QtyStatus=4&BlindInventory=0&DateAsOf=2016-01-01T08:00:00.000Z&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#inventorylistingreportdata'>InventoryListingReportData</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-inventory-listing-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-inventory-listing-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-inventory-listing-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-inventory-listing-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-inventory-listing-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-inventory-listing-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-inventory-listing-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
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
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-inventory-listing-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-inventory-listing-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <BarCode></BarCode>
    <BinStatus>String_InStock</BinStatus>
    <CategoryPath>>> @ Activations (Price Sheets) >> AT&T Price Sheet >> Equipment</CategoryPath>
    <ChannelName>English Channel</ChannelName>
    <DateEOL>null</DateEOL>
    <DiscontinuedDate>null</DiscontinuedDate>
    <DistrictName>Westminster</DistrictName>
    <DoNotOrder>false</DoNotOrder>
    <IsUsed>false</IsUsed>
    <ManufacturerPartNumber></ManufacturerPartNumber>
    <NoSale>false</NoSale>
    <ProductIdentifier>AAATAP000093</ProductIdentifier>
    <ProductName>Apple iPhone 6 Plus 16GB Space Gray - AT&T</ProductName>
    <Quantity>1</Quantity>
    <RefundPeriodLength>null</RefundPeriodLength>
    <RegionName>London</RegionName>
    <SerialNumber>2342342341</SerialNumber>
    <SpecialOrder>false</SpecialOrder>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <StoreTypeName>Costco</StoreTypeName>
    <TotalCost>699</TotalCost>
    <UnitCost>699</UnitCost>
    <VendorName>Offwire</VendorName>
    <VendorPartNumber></VendorPartNumber>
    <WarehouseLocation></WarehouseLocation>
    <WriteOff>false</WriteOff>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-inventory-listing-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <BarCode></BarCode>
    <BinStatus>String_InStock</BinStatus>
    <CategoryPath>>> @ Activations (Price Sheets) >> AT&T Price Sheet >> Equipment</CategoryPath>
    <ChannelName>English Channel</ChannelName>
    <DateEOL>null</DateEOL>
    <DiscontinuedDate>null</DiscontinuedDate>
    <DistrictName>Westminster</DistrictName>
    <DoNotOrder>false</DoNotOrder>
    <IsUsed>false</IsUsed>
    <ManufacturerPartNumber></ManufacturerPartNumber>
    <NoSale>false</NoSale>
    <ProductIdentifier>AAATAP000093</ProductIdentifier>
    <ProductName>Apple iPhone 6 Plus 16GB Space Gray - AT&T</ProductName>
    <Quantity>1</Quantity>
    <RefundPeriodLength>null</RefundPeriodLength>
    <RegionName>London</RegionName>
    <SerialNumber>2342342341</SerialNumber>
    <SpecialOrder>false</SpecialOrder>
    <StoreName>100: My Network LLC - Anchorage</StoreName>
    <StoreTypeName>Costco</StoreTypeName>
    <TotalCost>699</TotalCost>
    <UnitCost>699</UnitCost>
    <VendorName>Offwire</VendorName>
    <VendorPartNumber></VendorPartNumber>
    <WarehouseLocation></WarehouseLocation>
    <WriteOff>false</WriteOff>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-inventory-listing-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>BarCode,BinStatus,CategoryPath,ChannelName,DateEOL,DiscontinuedDate,DistrictName,DoNotOrder,IsUsed,ManufacturerPartNumber,NoSale,ProductIdentifier,ProductName,Quantity,RefundPeriodLength,RegionName,SerialNumber,SpecialOrder,StoreName,StoreTypeName,TotalCost,UnitCost,VendorName,VendorPartNumber,WarehouseLocation,WriteOff
,String_InStock,>> @ Activations (Price Sheets) >> AT&T Price Sheet >> Equipment,English Channel,null,null,Westminster,false,false,,false,AAATAP000093,Apple iPhone 6 Plus 16GB Space Gray - AT&T,1,null,London,2342342341,false,100: My Network LLC - Anchorage,Costco,699,699,Offwire,,,false</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-inventory-listing-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-rma-history-invoice-report' class='clickable-header top-level-header'>Getting the RMA History Invoice Report</h3>

For more information, see {{support_RMAHistoryReport}}.


<h4>Request</h4>

<pre>
GET /reports/rmahistoryinvoicereport?StartDate={StartDate}&StopDate={StopDate}&VendorId={VendorId}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
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
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A {{LocationType}} to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of {{RQCompanyTreeNode}} identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
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
    <li class="active"><a href="#http-getting-the-rma-history-invoice-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-rma-history-invoice-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-rma-history-invoice-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-rma-history-invoice-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-rma-history-invoice-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-rma-history-invoice-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-rma-history-invoice-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-rma-history-invoice-report">
<pre id="http-code-getting-the-rma-history-invoice-report"><code class="language-http">GET /reports/rmahistoryinvoicereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorId=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-rma-history-invoice-report">
<pre id="curl-code-getting-the-rma-history-invoice-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryinvoicereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorId=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-rma-history-invoice-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-rma-history-invoice-report"><code class="language-csharp">static IRestResponse GettingTheRmaHistoryInvoiceReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryinvoicereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorId=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
    var request = new RestRequest(Method.GET);
     

    

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
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryinvoicereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorId=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-rma-history-invoice-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-rma-history-invoice-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryinvoicereport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorId=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#rmahistoryinvoicereportdata'>RMAHistoryInvoiceReportData</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-rma-history-invoice-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-rma-history-invoice-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-rma-history-invoice-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-rma-history-invoice-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-rma-history-invoice-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-rma-history-invoice-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-rma-history-invoice-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
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
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-rma-history-invoice-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-rma-history-invoice-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ChannelName>English Channel</ChannelName>
    <Comments>Phone missing from package delivered on invoice #87742</Comments>
    <Committed>true</Committed>
    <Completed>true</Completed>
    <CreditInvoiceNumber></CreditInvoiceNumber>
    <CustomerID>-1</CustomerID>
    <CustomerName></CustomerName>
    <DateCommitted>2011-03-02T17:10:11.78</DateCommitted>
    <DateCreated>2011-03-02T17:10:11.78</DateCreated>
    <DistrictName>Valley Area District</DistrictName>
    <EmployeeName>iQmetrix User</EmployeeName>
    <ReceivingComments>Received Credit on 2/22/11.</ReceivingComments>
    <RegionName>Region A</RegionName>
    <RMANumber>112482</RMANumber>
    <ShippedAway>true</ShippedAway>
    <ShippingCost>8.5</ShippingCost>
    <ShippingMethod>Regular</ShippingMethod>
    <StockBalanceID>1</StockBalanceID>
    <StockBalanceIDByStore>84WEASB1</StockBalanceIDByStore>
    <StoreName>84 West</StoreName>
    <TotalCost>460</TotalCost>
    <TotalCostCredited>459</TotalCostCredited>
    <VendorName>Reliance</VendorName>
    <WaybillNumber></WaybillNumber>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-rma-history-invoice-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ChannelName>English Channel</ChannelName>
    <Comments>Phone missing from package delivered on invoice #87742</Comments>
    <Committed>true</Committed>
    <Completed>true</Completed>
    <CreditInvoiceNumber></CreditInvoiceNumber>
    <CustomerID>-1</CustomerID>
    <CustomerName></CustomerName>
    <DateCommitted>2011-03-02T17:10:11.78</DateCommitted>
    <DateCreated>2011-03-02T17:10:11.78</DateCreated>
    <DistrictName>Valley Area District</DistrictName>
    <EmployeeName>iQmetrix User</EmployeeName>
    <ReceivingComments>Received Credit on 2/22/11.</ReceivingComments>
    <RegionName>Region A</RegionName>
    <RMANumber>112482</RMANumber>
    <ShippedAway>true</ShippedAway>
    <ShippingCost>8.5</ShippingCost>
    <ShippingMethod>Regular</ShippingMethod>
    <StockBalanceID>1</StockBalanceID>
    <StockBalanceIDByStore>84WEASB1</StockBalanceIDByStore>
    <StoreName>84 West</StoreName>
    <TotalCost>460</TotalCost>
    <TotalCostCredited>459</TotalCostCredited>
    <VendorName>Reliance</VendorName>
    <WaybillNumber></WaybillNumber>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-rma-history-invoice-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ChannelName,Comments,Committed,Completed,CreditInvoiceNumber,CustomerID,CustomerName,DateCommitted,DateCreated,DistrictName,EmployeeName,ReceivingComments,RegionName,RMANumber,ShippedAway,ShippingCost,ShippingMethod,StockBalanceID,StockBalanceIDByStore,StoreName,TotalCost,TotalCostCredited,VendorName,WaybillNumber
English Channel,Phone missing from package delivered on invoice #87742,true,true,,-1,,2011-03-02T17:10:11.78,2011-03-02T17:10:11.78,Valley Area District,iQmetrix User,Received Credit on 2/22/11.,Region A,112482,true,8.5,Regular,1,84WEASB1,84 West,460,459,Reliance,</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-rma-history-invoice-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-rma-history-product-report' class='clickable-header top-level-header'>Getting the RMA History Product Report</h3>

For more information, see {{support_RMAHistoryReport}}.      


<h4>Request</h4>

<pre>
GET /reports/rmahistoryproductreport?StartDate={StartDate}&StopDate={StopDate}&VendorId={VendorId}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
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
        <code>ForWho</code> (Optional)  - Identifier for a level at which to perform the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>. If <strong>LocationType</strong> is provided, this value is ignored
    </li>
    
    <li>
        <code>ForWhoIDs</code> (Optional)  - A comma seperated list of identifiers to filter the report. For a list of identifiers, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>. If <strong>LocationTypeIDs</strong> is provided, this value is ignored. To ignore filtering use -1
    </li>
    
    <li>
        <code>LocationType</code> (Optional)  - A {{LocationType}} to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-types">Getting Location Types</a>. If this value is provided, <strong>ForWho</strong> is ignored
    </li>
    
    <li>
        <code>LocationTypeIDs</code> (Optional)  - A comma seperated list of {{RQCompanyTreeNode}} identifiers to filter the report. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-location-ids">Getting Location Ids</a>. To ignore filtering, use -1 or *. If this value is provided, <strong>ForWhoIDs</strong> is ignored
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
    <li class="active"><a href="#http-getting-the-rma-history-product-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-rma-history-product-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-rma-history-product-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-rma-history-product-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-rma-history-product-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-rma-history-product-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-rma-history-product-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-rma-history-product-report">
<pre id="http-code-getting-the-rma-history-product-report"><code class="language-http">GET /reports/rmahistoryproductreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorId=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-rma-history-product-report">
<pre id="curl-code-getting-the-rma-history-product-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryproductreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorId=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-rma-history-product-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-rma-history-product-report"><code class="language-csharp">static IRestResponse GettingTheRmaHistoryProductReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryproductreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorId=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
    var request = new RestRequest(Method.GET);
     

    

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
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryproductreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorId=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-rma-history-product-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-rma-history-product-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/rmahistoryproductreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&VendorId=-1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#rmahistoryproductreportdata'>RMAHistoryProductReportData</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-rma-history-product-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-rma-history-product-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-rma-history-product-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-rma-history-product-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-rma-history-product-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-rma-history-product-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-rma-history-product-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
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
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-rma-history-product-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-rma-history-product-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ActionTaken>1</ActionTaken>
    <ChannelName>English Channel</ChannelName>
    <DateCreated>2011-03-02T17:10:11.78</DateCreated>
    <DateReceived>2011-03-02T17:18:44.913</DateReceived>
    <DateShipped>2011-03-02T17:10:12.17</DateShipped>
    <DistrictName>Valley Area District</DistrictName>
    <EmployeeName1>iQmetrix User</EmployeeName1>
    <EmployeeName2>iQmetrix User</EmployeeName2>
    <ProductIdentifier>ACPHUT000163</ProductIdentifier>
    <ProductName>HTC Droid Incredible</ProductName>
    <Quantity>1</Quantity>
    <RegionName>Region A</RegionName>
    <RMANumber>112482</RMANumber>
    <SerialNumberAdded></SerialNumberAdded>
    <SerialNumberRemoved>A1000017AB0E93</SerialNumberRemoved>
    <StockBalanceID>1</StockBalanceID>
    <StockBalanceIDByStore>84WEASB1</StockBalanceIDByStore>
    <StoreName>84 West</StoreName>
    <TotalCost>460</TotalCost>
    <TotalCostCredited>459</TotalCostCredited>
    <UnitCost>460</UnitCost>
    <UnitCostCredited>459</UnitCostCredited>
    <VendorInvoiceNumber></VendorInvoiceNumber>
    <VendorName>Reliance</VendorName>
    <VendorPartNumber></VendorPartNumber>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-rma-history-product-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <ActionTaken>1</ActionTaken>
    <ChannelName>English Channel</ChannelName>
    <DateCreated>2011-03-02T17:10:11.78</DateCreated>
    <DateReceived>2011-03-02T17:18:44.913</DateReceived>
    <DateShipped>2011-03-02T17:10:12.17</DateShipped>
    <DistrictName>Valley Area District</DistrictName>
    <EmployeeName1>iQmetrix User</EmployeeName1>
    <EmployeeName2>iQmetrix User</EmployeeName2>
    <ProductIdentifier>ACPHUT000163</ProductIdentifier>
    <ProductName>HTC Droid Incredible</ProductName>
    <Quantity>1</Quantity>
    <RegionName>Region A</RegionName>
    <RMANumber>112482</RMANumber>
    <SerialNumberAdded></SerialNumberAdded>
    <SerialNumberRemoved>A1000017AB0E93</SerialNumberRemoved>
    <StockBalanceID>1</StockBalanceID>
    <StockBalanceIDByStore>84WEASB1</StockBalanceIDByStore>
    <StoreName>84 West</StoreName>
    <TotalCost>460</TotalCost>
    <TotalCostCredited>459</TotalCostCredited>
    <UnitCost>460</UnitCost>
    <UnitCostCredited>459</UnitCostCredited>
    <VendorInvoiceNumber></VendorInvoiceNumber>
    <VendorName>Reliance</VendorName>
    <VendorPartNumber></VendorPartNumber>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-rma-history-product-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>ActionTaken,ChannelName,DateCreated,DateReceived,DateShipped,DistrictName,EmployeeName1,EmployeeName2,ProductIdentifier,ProductName,Quantity,RegionName,RMANumber,SerialNumberAdded,SerialNumberRemoved,StockBalanceID,StockBalanceIDByStore,StoreName,TotalCost,TotalCostCredited,UnitCost,UnitCostCredited,VendorInvoiceNumber,VendorName,VendorPartNumber
1,English Channel,2011-03-02T17:10:11.78,2011-03-02T17:18:44.913,2011-03-02T17:10:12.17,Valley Area District,iQmetrix User,iQmetrix User,ACPHUT000163,HTC Droid Incredible,1,Region A,112482,,A1000017AB0E93,1,84WEASB1,84 West,460,459,460,459,,Reliance,</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-rma-history-product-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-transfer-history-invoice-detail-report' class='clickable-header top-level-header'>Getting the Transfer History Invoice Detail Report</h3>

For more information, see {{support_TransferHistoryReport}}.


<h4>Request</h4>

<pre>
GET /reports/transferhistoryinvoicedetailreport?StartDate={StartDate}&StopDate={StopDate}&ShippedForWho={ShippedLocationTypeId}&ShippedForWhoIDs={ShippedRQCompanyTreeNodeIds}&ReceivedForWho={ReceivedLocationTypeId}&ReceivedForWhoIDs={ReceivedRQCompanyTreeNodeIds}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>ShippedLocationTypeId</code> (<strong>Required</strong>)  - Identifier for a level at which the transfer originated from. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>
    </li>
    
    <li>
        <code>ShippedRQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of identifiers to specify where the transfer originated from. To ignore this and specify All nodes, use -1. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>ReceivedLocationTypeId</code> (<strong>Required</strong>)  - Identifier for a level at which the transfer was sent. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>
    </li>
    
    <li>
        <code>ReceivedRQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of identifiers to specify where the transfer was sent. To ignore this and specify All nodes, use -1. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
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
    <li class="active"><a href="#http-getting-the-transfer-history-invoice-detail-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-transfer-history-invoice-detail-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-transfer-history-invoice-detail-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-transfer-history-invoice-detail-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-transfer-history-invoice-detail-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-transfer-history-invoice-detail-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-transfer-history-invoice-detail-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-transfer-history-invoice-detail-report">
<pre id="http-code-getting-the-transfer-history-invoice-detail-report"><code class="language-http">GET /reports/transferhistoryinvoicedetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-transfer-history-invoice-detail-report">
<pre id="curl-code-getting-the-transfer-history-invoice-detail-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryinvoicedetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-transfer-history-invoice-detail-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-transfer-history-invoice-detail-report"><code class="language-csharp">static IRestResponse GettingTheTransferHistoryInvoiceDetailReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryinvoicedetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

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
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryinvoicedetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-transfer-history-invoice-detail-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-transfer-history-invoice-detail-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryinvoicedetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#transferhistoryinvoicedetailreportdata'>TransferHistoryInvoiceDetailReportData</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-transfer-history-invoice-detail-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-transfer-history-invoice-detail-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-transfer-history-invoice-detail-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-transfer-history-invoice-detail-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-transfer-history-invoice-detail-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-transfer-history-invoice-detail-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-transfer-history-invoice-detail-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
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
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-transfer-history-invoice-detail-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-transfer-history-invoice-detail-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <BillingStoreName>100: My Network LLC - Anchorage</BillingStoreName>
    <CancelledByID>null</CancelledByID>
    <CancelledByName>null</CancelledByName>
    <CancelledDate>null</CancelledDate>
    <Committed>true</Committed>
    <Completed>true</Completed>
    <DateCommitted>2016-04-19T14:57:20.32</DateCommitted>
    <DateRequested>2016-04-19T14:57:20.32</DateRequested>
    <EstimatedArrivalDate>2016-04-20T00:00:00</EstimatedArrivalDate>
    <ReceivingChannelName>English Channel</ReceivingChannelName>
    <ReceivingComments></ReceivingComments>
    <ReceivingDistrictName>Westminster</ReceivingDistrictName>
    <ReceivingRegionName>London</ReceivingRegionName>
    <ReceivingStoreName>100: My Network LLC - Anchorage</ReceivingStoreName>
    <RequestingComments></RequestingComments>
    <RequestingEmployeeName>iQmetrix User</RequestingEmployeeName>
    <ShippingChannelName>English Channel</ShippingChannelName>
    <ShippingComments></ShippingComments>
    <ShippingCost>0</ShippingCost>
    <ShippingDistrictName>Valley Area District</ShippingDistrictName>
    <ShippingMethod>Regular</ShippingMethod>
    <ShippingRegionName>Region A</ShippingRegionName>
    <ShippingStoreName>84 West</ShippingStoreName>
    <TotalInvoice>500</TotalInvoice>
    <TransferID>4326</TransferID>
    <TransferIDByStore>77224TR1</TransferIDByStore>
    <WaybillNumber>53454354</WaybillNumber>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-transfer-history-invoice-detail-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <BillingStoreName>100: My Network LLC - Anchorage</BillingStoreName>
    <CancelledByID>null</CancelledByID>
    <CancelledByName>null</CancelledByName>
    <CancelledDate>null</CancelledDate>
    <Committed>true</Committed>
    <Completed>true</Completed>
    <DateCommitted>2016-04-19T14:57:20.32</DateCommitted>
    <DateRequested>2016-04-19T14:57:20.32</DateRequested>
    <EstimatedArrivalDate>2016-04-20T00:00:00</EstimatedArrivalDate>
    <ReceivingChannelName>English Channel</ReceivingChannelName>
    <ReceivingComments></ReceivingComments>
    <ReceivingDistrictName>Westminster</ReceivingDistrictName>
    <ReceivingRegionName>London</ReceivingRegionName>
    <ReceivingStoreName>100: My Network LLC - Anchorage</ReceivingStoreName>
    <RequestingComments></RequestingComments>
    <RequestingEmployeeName>iQmetrix User</RequestingEmployeeName>
    <ShippingChannelName>English Channel</ShippingChannelName>
    <ShippingComments></ShippingComments>
    <ShippingCost>0</ShippingCost>
    <ShippingDistrictName>Valley Area District</ShippingDistrictName>
    <ShippingMethod>Regular</ShippingMethod>
    <ShippingRegionName>Region A</ShippingRegionName>
    <ShippingStoreName>84 West</ShippingStoreName>
    <TotalInvoice>500</TotalInvoice>
    <TransferID>4326</TransferID>
    <TransferIDByStore>77224TR1</TransferIDByStore>
    <WaybillNumber>53454354</WaybillNumber>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-transfer-history-invoice-detail-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>BillingStoreName,CancelledByID,CancelledByName,CancelledDate,Committed,Completed,DateCommitted,DateRequested,EstimatedArrivalDate,ReceivingChannelName,ReceivingComments,ReceivingDistrictName,ReceivingRegionName,ReceivingStoreName,RequestingComments,RequestingEmployeeName,ShippingChannelName,ShippingComments,ShippingCost,ShippingDistrictName,ShippingMethod,ShippingRegionName,ShippingStoreName,TotalInvoice,TransferID,TransferIDByStore,WaybillNumber
100: My Network LLC - Anchorage,null,null,null,true,true,2016-04-19T14:57:20.32,2016-04-19T14:57:20.32,2016-04-20T00:00:00,English Channel,,Westminster,London,100: My Network LLC - Anchorage,,iQmetrix User,English Channel,,0,Valley Area District,Regular,Region A,84 West,500,4326,77224TR1,53454354</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-transfer-history-invoice-detail-report">
            
<pre>HTTP 200 Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Excel</code></p>
<pre>content-disposition: attachment;filename=reportname-2016-07-11.xlsx
Binary *.xlsx file</pre>
            
        </div>
                
</div>
        
    


<h3 id='getting-the-transfer-history-product-detail-report' class='clickable-header top-level-header'>Getting the Transfer History Product Detail Report</h3>

For more information, see {{support_TransferHistoryReport}}.

<h4>Request</h4>

<pre>
GET /reports/transferhistoryproductdetailreport?StartDate={StartDate}&StopDate={StopDate}&ShippedForWho={ShippedLocationTypeId}&ShippedForWhoIDs={ShippedRQCompanyTreeNodeIds}&ReceivedForWho={ReceivedLocationTypeId}&ReceivedForWhoIDs={ReceivedRQCompanyTreeNodeIds}&LanguageCode={LanguageCode}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which report will begin
    </li>
    
    <li>
        <code>StopDate</code> (<strong>Required</strong>)  - Date at which report will end
    </li>
    
    <li>
        <code>ShippedLocationTypeId</code> (<strong>Required</strong>)  - Identifier for a level at which the transfer originated from. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>
    </li>
    
    <li>
        <code>ShippedRQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of identifiers to specify where the transfer originated from. To ignore this and specify All nodes, use -1. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
    </li>
    
    <li>
        <code>ReceivedLocationTypeId</code> (<strong>Required</strong>)  - Identifier for a level at which the transfer was sent. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-report-levels-in-rq">Getting Report Levels in RQ</a>
    </li>
    
    <li>
        <code>ReceivedRQCompanyTreeNodeIds</code> (<strong>Required</strong>)  - A comma seperated list of identifiers to specify where the transfer was sent. To ignore this and specify All nodes, use -1. For a complete list, see <a href="/api/RQ-Data-Connect/#getting-nodes-by-location-type">Getting Nodes By Location Type</a>
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
    <li class="active"><a href="#http-getting-the-transfer-history-product-detail-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-transfer-history-product-detail-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-transfer-history-product-detail-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-transfer-history-product-detail-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-transfer-history-product-detail-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-transfer-history-product-detail-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-transfer-history-product-detail-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-transfer-history-product-detail-report">
<pre id="http-code-getting-the-transfer-history-product-detail-report"><code class="language-http">GET /reports/transferhistoryproductdetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-transfer-history-product-detail-report">
<pre id="curl-code-getting-the-transfer-history-product-detail-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryproductdetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-transfer-history-product-detail-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-transfer-history-product-detail-report"><code class="language-csharp">static IRestResponse GettingTheTransferHistoryProductDetailReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryproductdetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us");
    var request = new RestRequest(Method.GET);
     

    

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
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryproductdetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-transfer-history-product-detail-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-transfer-history-product-detail-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/transferhistoryproductdetailreport?StartDate=1970-01-01T08:00:00.000Z&StopDate=2016-01-01T08:00:00.000Z&ShippedForWho=1&ShippedForWhoIDs=6679&ReceivedForWho=1&ReceivedForWhoIDs=6679&LanguageCode=en-us', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p>Array[<a href='#transferhistoryproductdetailreportdata'>TransferHistoryProductDetailReportData</a>]</p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-transfer-history-product-detail-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-transfer-history-product-detail-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-transfer-history-product-detail-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-transfer-history-product-detail-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-transfer-history-product-detail-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-transfer-history-product-detail-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-transfer-history-product-detail-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
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
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-transfer-history-product-detail-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-transfer-history-product-detail-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CancelledByID>null</CancelledByID>
    <CancelledByName>null</CancelledByName>
    <CancelledDate>null</CancelledDate>
    <CategoryPath>>> Phones >> Galaxies</CategoryPath>
    <DateReceived>2011-06-02T10:04:51.59</DateReceived>
    <DateShipped>2011-06-02T09:41:08.027</DateShipped>
    <ProductIdentifier>ASBORI000028</ProductIdentifier>
    <ProductName>BG Curve2 Posh PK</ProductName>
    <Quantity>1</Quantity>
    <ReceivingChannelName>English Channel</ReceivingChannelName>
    <ReceivingDistrictName>Westminster</ReceivingDistrictName>
    <ReceivingEmployeeName>Courtney Noon</ReceivingEmployeeName>
    <ReceivingRegionName>London</ReceivingRegionName>
    <ReceivingStoreName>100: My Network LLC - Anchorage</ReceivingStoreName>
    <RequestingEmployeeName>iQmetrix User</RequestingEmployeeName>
    <SerialNumber></SerialNumber>
    <ShippingChannelName>English Channel</ShippingChannelName>
    <ShippingDistrictName>Valley Area District</ShippingDistrictName>
    <ShippingEmployeeName>Courtney Noon</ShippingEmployeeName>
    <ShippingRegionName>Region A</ShippingRegionName>
    <ShippingStoreName>84 West</ShippingStoreName>
    <TotalCost>9.6705</TotalCost>
    <TransferID>718</TransferID>
    <TransferIDByStore>WIREGTR73</TransferIDByStore>
    <UnitCost>9.6705</UnitCost>
    <VendorName>LTD Wireless</VendorName>
    <VendorPartNumber>bgcrv2poshpk</VendorPartNumber>
    <WaybillNumber>53454354</WaybillNumber>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-transfer-history-product-detail-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <CancelledByID>null</CancelledByID>
    <CancelledByName>null</CancelledByName>
    <CancelledDate>null</CancelledDate>
    <CategoryPath>>> Phones >> Galaxies</CategoryPath>
    <DateReceived>2011-06-02T10:04:51.59</DateReceived>
    <DateShipped>2011-06-02T09:41:08.027</DateShipped>
    <ProductIdentifier>ASBORI000028</ProductIdentifier>
    <ProductName>BG Curve2 Posh PK</ProductName>
    <Quantity>1</Quantity>
    <ReceivingChannelName>English Channel</ReceivingChannelName>
    <ReceivingDistrictName>Westminster</ReceivingDistrictName>
    <ReceivingEmployeeName>Courtney Noon</ReceivingEmployeeName>
    <ReceivingRegionName>London</ReceivingRegionName>
    <ReceivingStoreName>100: My Network LLC - Anchorage</ReceivingStoreName>
    <RequestingEmployeeName>iQmetrix User</RequestingEmployeeName>
    <SerialNumber></SerialNumber>
    <ShippingChannelName>English Channel</ShippingChannelName>
    <ShippingDistrictName>Valley Area District</ShippingDistrictName>
    <ShippingEmployeeName>Courtney Noon</ShippingEmployeeName>
    <ShippingRegionName>Region A</ShippingRegionName>
    <ShippingStoreName>84 West</ShippingStoreName>
    <TotalCost>9.6705</TotalCost>
    <TransferID>718</TransferID>
    <TransferIDByStore>WIREGTR73</TransferIDByStore>
    <UnitCost>9.6705</UnitCost>
    <VendorName>LTD Wireless</VendorName>
    <VendorPartNumber>bgcrv2poshpk</VendorPartNumber>
    <WaybillNumber>53454354</WaybillNumber>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-transfer-history-product-detail-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>CancelledByID,CancelledByName,CancelledDate,CategoryPath,DateReceived,DateShipped,ProductIdentifier,ProductName,Quantity,ReceivingChannelName,ReceivingDistrictName,ReceivingEmployeeName,ReceivingRegionName,ReceivingStoreName,RequestingEmployeeName,SerialNumber,ShippingChannelName,ShippingDistrictName,ShippingEmployeeName,ShippingRegionName,ShippingStoreName,TotalCost,TransferID,TransferIDByStore,UnitCost,VendorName,VendorPartNumber,WaybillNumber
null,null,null,>> Phones >> Galaxies,2011-06-02T10:04:51.59,2011-06-02T09:41:08.027,ASBORI000028,BG Curve2 Posh PK,1,English Channel,Westminster,Courtney Noon,London,100: My Network LLC - Anchorage,iQmetrix User,,English Channel,Valley Area District,Courtney Noon,Region A,84 West,9.6705,718,WIREGTR73,9.6705,LTD Wireless,bgcrv2poshpk,53454354</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-transfer-history-product-detail-report">
            
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
| `HTTP 401` | `Tokan is invalid` | Ensure Access Token is valid and has not expired |
| `HTTP 403` | `Unauthorized` | Ensure Access Token is valid and user has appropriate security |
| `HTTP 404` | `Not Found` | Ensure URI is valid |
| `HTTP 429` | `Too Many Requests` | See [Rate Limiting](/api/#rate-limiting) |
| `HTTP 500` | `Unexpected Error` | See Message in response for more information |                 

    
