---
title:  RQ Data Connect Utilities
permalink: /api/RQ-Data-Connect-Utilities/
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






## Requests



<h3 id='getting-the-employee-master-list-report' class='clickable-header top-level-header'>Getting the Employee Master List Report</h3>

For more information, see {{support_EmployeeMasterListReport}}.


<h4>Request</h4>

<pre>
GET /reports/employeemasterlistreport?EnabledStatus={EnabledStatus}&ForWho={ForWho}&ForWhoIDs={ForWhoIDs}&LocationType={LocationType}&LocationTypeIDs={LocationTypeIDs}&Auth={Auth}&Response={Response}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> (Optional) - Bearer token used for authentication. For other methods of authentication, see {{AuthenticationOptions}}</li><li><code>Accept-Encoding: gzip</code> (Optional) - Compression algorithm. For other methods of compression, see {{CompressionOptions}}</li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>EnabledStatus</code> (<strong>Required</strong>)  - Select employees with a status of Disabled (0), Enabled (1) or Any Status (2)
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
<pre id="http-code-getting-the-employee-master-list-report"><code class="language-http">GET /reports/employeemasterlistreport?EnabledStatus=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-employee-master-list-report">
<pre id="curl-code-getting-the-employee-master-list-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/employeemasterlistreport?EnabledStatus=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-employee-master-list-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-employee-master-list-report"><code class="language-csharp">static IRestResponse GettingTheEmployeeMasterListReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/employeemasterlistreport?EnabledStatus=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
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
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/employeemasterlistreport?EnabledStatus=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-employee-master-list-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-employee-master-list-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/employeemasterlistreport?EnabledStatus=1&ForWho=1&ForWhoIDs=6679&LocationType=Store&LocationTypeIDs=1,2', {
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
        
    


<h3 id='getting-the-location-master-list-report' class='clickable-header top-level-header'>Getting the Location Master List Report</h3>

For more information, see {{LocationMasterListReport}}.


<h4>Request</h4>

<pre>
GET /reports/locationmasterlistreport?Auth={Auth}&Response={Response}
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
    <li class="active"><a href="#http-getting-the-location-master-list-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-location-master-list-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-location-master-list-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-location-master-list-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-location-master-list-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-location-master-list-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-location-master-list-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-location-master-list-report">
<pre id="http-code-getting-the-location-master-list-report"><code class="language-http">GET /reports/locationmasterlistreport
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-location-master-list-report">
<pre id="curl-code-getting-the-location-master-list-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/locationmasterlistreport"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-location-master-list-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-location-master-list-report"><code class="language-csharp">static IRestResponse GettingTheLocationMasterListReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/locationmasterlistreport");
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
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/locationmasterlistreport");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-location-master-list-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-location-master-list-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/locationmasterlistreport', {
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
        
    


<h3 id='getting-the-location-tree-report' class='clickable-header top-level-header'>Getting the Location Tree Report</h3>

This report will return an entry for every store in the company specifying the parents of the store up the company tree (District, Region, Channel).

<h4>Request</h4>

<pre>
GET /reports/locationtreereport?Auth={Auth}&Response={Response}
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
    <li class="active"><a href="#http-getting-the-location-tree-report" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-location-tree-report" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-location-tree-report" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-location-tree-report" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-location-tree-report" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-location-tree-report" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-location-tree-report"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-location-tree-report">
<pre id="http-code-getting-the-location-tree-report"><code class="language-http">GET /reports/locationtreereport
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-location-tree-report">
<pre id="curl-code-getting-the-location-tree-report"><code class="language-http">curl -X GET "https://rqdataconnectdemo.iqmetrix.net/reports/locationtreereport"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-location-tree-report">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-location-tree-report"><code class="language-csharp">static IRestResponse GettingTheLocationTreeReport()
{
    var client = new RestClient("https://rqdataconnectdemo.iqmetrix.net/reports/locationtreereport");
    var request = new RestRequest(Method.GET);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-location-tree-report">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-location-tree-report"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheLocationTreeReport() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://rqdataconnectdemo.iqmetrix.net/reports/locationtreereport");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-location-tree-report">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-location-tree-report"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://rqdataconnectdemo.iqmetrix.net/reports/locationtreereport', {
    } 

puts response</code></pre>
    </div>
</div>
<h4>Response</h4>


    
        


    
<p><ul><li><code>StoreID</code> (INT) </li><li><code>StoreName</code> (NVARCHAR(MAX)) </li><li><code>DistrictID</code> (INT) </li><li><code>DistrictName</code> (NVARCHAR(MAX)) </li><li><code>RegionID</code> (INT) </li><li><code>RegionName</code> (NVARCHAR(MAX)) </li><li><code>ChannelID</code> (INT) </li><li><code>ChannelName</code> (NVARCHAR(MAX)) </li></ul></p>           
    

    

    

    

    

    


<ul class="nav nav-tabs">
    
        <li class="active">
            <a href="#applicationjson-getting-the-location-tree-report" data-toggle="tab">application/json</a>
        </li>
    
        <li>
            <a href="#applicationJsonDataTable-getting-the-location-tree-report" data-toggle="tab">application/json (DataTable)</a>
        </li>
    
        <li>
            <a href="#textxml-getting-the-location-tree-report" data-toggle="tab">text/xml</a>
        </li>
    
        <li>
            <a href="#textXmlDataTable-getting-the-location-tree-report" data-toggle="tab">text/xml (Data Table)</a>
        </li>
    
        <li>
            <a href="#textcsv-getting-the-location-tree-report" data-toggle="tab">text/csv</a>
        </li>
    
        <li>
            <a href="#applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-location-tree-report" data-toggle="tab">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</a>
        </li>
    
</ul>

<div class="tab-content"> 
    
        <div role="tabpanel" class="tab-pane active" id="applicationjson-getting-the-location-tree-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the <code>Auth</code> URI parameter</p>
<pre><code class="language-csharp">[
    {
        "StoreID": 1188,
        "StoreName": "Altera Kiosk",
        "DistrictID": 16,
        "DistrictName": "First District",
        "RegionID": 5,
        "RegionName": "First Region",
        "ChannelID": 4,
        "ChannelName": "First Channel"
    }
]</code></pre>      
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationJsonDataTable-getting-the-location-tree-report">
             
<pre>HTTP 200 Content-Type: application/json</pre>
<p>This is the default result obtained by omitting the URI parameter <code>Auth=JsonDataTable</code>. This response type wraps the data in a "Records" array and adds a "Schema" array, which contains information about each column in the report.
</p>
<pre><code class="language-csharp">{
    "Records": [
        {
            "StoreID": 1188,
            "StoreName": "Altera Kiosk",
            "DistrictID": 16,
            "DistrictName": "First District",
            "RegionID": 5,
            "RegionName": "First Region",
            "ChannelID": 4,
            "ChannelName": "First Channel"
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
    
        <div role="tabpanel" class="tab-pane " id="textxml-getting-the-location-tree-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Xml</code></p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <StoreID>1188</StoreID>
    <StoreName>Altera Kiosk</StoreName>
    <DistrictID>16</DistrictID>
    <DistrictName>First District</DistrictName>
    <RegionID>5</RegionID>
    <RegionName>First Region</RegionName>
    <ChannelID>4</ChannelID>
    <ChannelName>First Channel</ChannelName>
  </Record>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textXmlDataTable-getting-the-location-tree-report">
            
<pre>HTTP 200 Content-Type: text/xml</pre>
<p>This result is obtained by using the URL parameter <code>Auth=XmlDataTable</code>. This response type appends to the bottom of the request a summary of information about each column in the report.
</p>
<pre><code class="language-xml"><script><Table>
  <Record>
    <StoreID>1188</StoreID>
    <StoreName>Altera Kiosk</StoreName>
    <DistrictID>16</DistrictID>
    <DistrictName>First District</DistrictName>
    <RegionID>5</RegionID>
    <RegionName>First Region</RegionName>
    <ChannelID>4</ChannelID>
    <ChannelName>First Channel</ChannelName>
  </Record>
  <Schema>
    <Column_Name>ColumnName</Column_Name>
    <Type>datatybe</Type>
    <SafeType>safetype</SafeType>
    <Length>100</Length>
  </Schema>
</Table></script></code></pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="textcsv-getting-the-location-tree-report">
            
<pre>HTTP 200 Content-Type: text/csv</pre>
<p>This result is obtained by using the URL parameter <code>Auth=Csv</code></p>
<pre>StoreID,StoreName,DistrictID,DistrictName,RegionID,RegionName,ChannelID,ChannelName
1188,Altera Kiosk,16,First District,5,First Region,4,First Channel</pre>
            
        </div>
    
        <div role="tabpanel" class="tab-pane " id="applicationvndopenxmlformats-officedocumentspreadsheetmlsheet-getting-the-location-tree-report">
            
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

    
