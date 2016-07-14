---
title: Endless Aisle Integration Guide
permalink: /guides/ea-guide/corporate-hierarchy
tags: []
keywords: 
audience: 
last_updated: 
summary: 
rouge: false
series: "EA Guide Series"
weight: 1.0
---

{% include linkrefs.html %}

{% include custom/series_eaguide_nav.html %}

## Overview

**Corporate Hierarchy** describes how your {{Company}} is structured, and is represented by your {{CompanyTree_Concept}}.

Changes to your corporate hierarchy, such as those described in **Table 1**, should be pushed to Endless Aisle to ensure pricing and inventory are accurate.

**Table 1:** Methods for Updating Corporate Hierarchy

| Change | How to Modify |
|:-------|:--------------|
| Changing a store's address or hours | See [Updating a Location](#updating-a-location) |
| Creating a new store | See [Creating a Location](#creating-a-location) |
| Changing how stores are organized | See [Creating a Division](/api/company-tree/#creating-a-division) or <br/> [Creating a Group](/api/company-tree/#creating-a-group) or <br/> [Deleting a Group or Division](/api/company-tree/#deleting-a-group-or-division) | |

## Updating a Location

Updating a Location in Endless Aisle involves...

1. [Getting the Location Identifier](#getting-the-location-identifier)
2. [Updating the Location](#updating-the-location)

### Step 1 - Getting the Location Identifier

{{tip}}
If you already know the Identifier of the Location you want to update, you can skip this step
{{end}}

Before you can update a Location, you must get its Identifier. 

We can use [Getting All Locations for a Company](/api/company-tree/#getting-all-locations-for-a-company) to look for a Location in Chicago called Atrium Mall.

##### Example Request

```
GET https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations
Authorization: Bearer (Access Token)
Accept: application/json
```

##### Example Response

```
HTTP 200 Content-Type: application/json
[  
   {  
      "Id": 14213,
      "Name": "Avalon Mall",
      "Description": "",
      "Role": "Location",
      "LocationType": null,
      "LocationSubType": null,
      "Address": {  
         "AddressLine1": null,
         "AddressLine2": null,
         "City": "St. John's",
         "StateCode": "NL",
         "StateName": "Newfoundland and Labrador",
         "CountryCode": "CA",
         "CountryName": "Canada",
         "Zip": null
      },
      "Contacts": [...],
      "StorePhoneNumbers": [...],
      "Area": null,
      "StoreHours": {...},
      "Geography": null,
      "TimeZone": null,
      "Roles": [...],
      "SortName": "avalon mall",
      "Attributes": {...},
      "Relationships": [...],
      "CreatedUtc": "2015-11-20T19:10:30.445Z",
      "LastModifiedUtc": "2015-11-20T19:10:30.445Z",
      "CorrelationId": null,
      "ClientEntityId": null,
      "TypeId": null,
      "Logo": null,
      "Version": 1     
   },
   {  
      "Id": 14239,
      "Name": "Atrium Mall - Chicago",
      "Description": "",
      "Role": "Location",   
      "LocationType": null,
      "LocationSubType": null,
      "Address": {  
         "AddressLine1": "512 Broad Street",
         "AddressLine2": null,
         "City": "Chicago",
         "StateCode": "IL",
         "StateName": "Illinois",
         "CountryCode": "US",
         "CountryName": "United States",
         "Zip": null
      },
      "Contacts": [...],
      "StorePhoneNumbers": [...],
      "Area": null,
      "StoreHours": {...},
      "Geography": null,
      "TimeZone": null,
      "Roles": [...],
      "SortName": "atrium mall - chicago",
      "Attributes": {...},
      "Relationships": [...],
      "CreatedUtc": "2015-11-20T19:54:18.613Z",
      "LastModifiedUtc": "2016-04-19T19:12:29.19Z",
      "CorrelationId": null,
      "ClientEntityId": null,
      "TypeId": 95,
      "Logo": null,
      "Version": 1
   },   
   ...
]
```

From the response, you can see the `Id` of Atrium Mall is `14239`.

### Step 2 - Updating the Location

Now that you know the `Id`, you can update the Location's address using [Updating a Location](/api/company-tree/#updating-a-location). For this example, the new address will be 200 Atrium Street.

##### Example Request

```
PUT https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations(14239)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
  "Id": 14239,
  "Name": "Atrium Mall - Chicago",
  "Description": "",
  "Role": "Location",   
  "LocationType": null,
  "LocationSubType": null,
  "Address": {  
     "AddressLine1": "200 Atrium Street",
     "AddressLine2": null,
     "City": "Chicago",
     "StateCode": "IL",
     "StateName": "Illinois",
     "CountryCode": "US",
     "CountryName": "United States",
     "Zip": null
  },
  "Contacts": [...],
  "StorePhoneNumbers": [...],
  "Area": null,
  "StoreHours": {...},
  "Geography": null,
  "TimeZone": null,
  "Roles": [...],
  "SortName": "atrium mall - chicago",
  "Attributes": {...},
  "Relationships": [...],
  "CreatedUtc": "2015-11-20T19:54:18.613Z",
  "LastModifiedUtc": "2016-04-19T19:12:29.19Z",
  "CorrelationId": null,
  "ClientEntityId": null,
  "TypeId": 95,
  "Logo": null,
  "Version": 1
}
```

##### Example Response

```
HTTP 200 Content-Type: application/json
{
  "Id": 14239,
  "Name": "Atrium Mall - Chicago",
  "Description": "",
  "Role": "Location",   
  "LocationType": null,
  "LocationSubType": null,
  "Address": {  
     "AddressLine1": "200 Atrium Street",
     "AddressLine2": null,
     "City": "Chicago",
     "StateCode": "IL",
     "StateName": "Illinois",
     "CountryCode": "US",
     "CountryName": "United States",
     "Zip": null
  },
  "Contacts": [...],
  "StorePhoneNumbers": [...],
  "Area": null,
  "StoreHours": {...},
  "Geography": null,
  "TimeZone": null,
  "Roles": [...],
  "SortName": "atrium mall - chicago",
  "Attributes": {...},
  "Relationships": [...],
  "CreatedUtc": "2015-11-20T19:54:18.613Z",
  "LastModifiedUtc": "2016-04-19T19:12:29.19Z",
  "CorrelationId": null,
  "ClientEntityId": null,
  "TypeId": 95,
  "Logo": null,
  "Version": 2  
}
```

## Creating a Location

Creating a Location in Endless Aisle involves...

1. [Determining the Parent Id](#determining-the-parent-id)
2. [Creating the Location](#creating-the-location)

### Step 1 - Determining the Parent Id

Before you can create a Location, you must determine **where** you want the Location to exist in your {{CompanyTree_Concept}}.

You can use [Getting a Company Tree](/api/company-tree/#getting-a-company-tree) to see the existing Tree and decide where you want to add the Location.

In this example, the new Location will be in Calgary, which is in the province of Alberta.

##### Example Request

```
GET https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree
Authorization: Bearer (Access Token)
Accept: application/json
```

##### Example Response

```
HTTP 200 Content-Type: application/json
{
    "Id": 14146,
    "Name": "Kentel Corp",
    "Description": "Wireless accessories provider with store locations all across the globe.",
    "Role": "Company",
    "Nodes": [
      {
        "Id": 14148,
        "Name": "Canada",
        "Description": "",
        "Role": "Group",
        "ClientEntityId": null,
        "Nodes": [
          {
            "Id": 14158,
            "Name": "Mobile etc.",
            "Description": "",
            "Role": "Division",
            "ClientEntityId": null,
            "Nodes": [
              {
                "Id": 14169,
                "Name": "Alberta",
                "Description": "",
                "Role": "Group",
                "ClientEntityId": null,
                "Nodes": []                 
              },
              ...     
            ]          
          },
          ...
        ] 
      },
      ...   
    ]
}
```

From the response, you can see the `Id` of Alberta is `14169`.

### Step 2 - Creating The Location

Now that you know the Parent `Id`, you can create the Location using [Creating a Location](/api/company-tree/#creating-a-location). The new Location will be called Beacon Hill (Calgary) with an address of 2215 Rosehill Blvd.

##### Example Request

```
POST https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14169)/Locations
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
  "Name": "Beacon Hill (Calgary)",
  "Address": {
    "AddressLine1": "2215 Rosehill Blvd",
    "AddressLine2": null,
    "City": "Calgary",
    "StateCode": "AB",
    "StateName": "Alberta",
    "CountryCode": "CA",
    "CountryName": "Canada",
    "Zip": null
  },
  "Roles": [
    {
      "Name": "Location"
    }
  ]
}
```

##### Example Response

```
HTTP 201 Content-Type: application/json
{
  "Id": 14216,
  "Name": "Beacon Hill (Calgary)",
  "Description": "",
  "Role": "Location",
  "LocationType": null,
  "LocationSubType": null,
  "Address": {
    "AddressLine1": "2215 Rosehill Blvd",
    "AddressLine2": null,
    "City": "Calgary",
    "StateCode": "AB",
    "StateName": "Alberta",
    "CountryCode": "CA",
    "CountryName": "Canada",
    "Zip": null
  },
  "Contacts": [],
  "StorePhoneNumbers": [],
  "Area": null,
  "StoreHours": {
    "Monday": null,
    "Tuesday": null,
    "Wednesday": null,
    "Thursday": null,
    "Friday": null,
    "Saturday": null,
    "Sunday": null
  },
  "Geography": null,
  "TimeZone": null,
  "Roles": [
    {
      "Name": "Location"
    }
  ],
  "SortName": "beacon hill (calgary)",
  "Attributes": {},
  "Relationships": [
    {
      "Id": 6334,
      "Definition": 12,
      "Source": 14169,
      "Destination": 14216,
      "CreatedUtc": "2015-11-20T19:15:58.004Z",
      "Version": 1
    }
  ],
  "CreatedUtc": "2015-11-20T19:15:57.988Z",
  "LastModifiedUtc": "2015-11-20T19:16:41.056Z",
  "CorrelationId": null,
  "ClientEntityId": null,
  "TypeId": null,
  "Logo": null,
  "Version": 1
}
```