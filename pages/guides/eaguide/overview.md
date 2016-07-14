---
title: Endless Aisle Integration Guide
permalink: /guides/ea-guide/overview
tags: []
keywords: 
audience: 
last_updated: 
summary: 
rouge: false
---

{% include linkrefs.html %}

## Overview

The following document outlines APIs and requests in common integration scenarios between the iQmetrix Endless Aisle solution and external systems utilizing APIs.

## Who Is This Guide For? 

The intended audience for this guide are developers who are integrating an external system with Endless Aisle, such as...

* eCommerce Solutions such as Magento
* Content Management Systems such as Joomla
* Inventory Management Systems such as Netsuite
* Point of Sale Systems such as Lightspeed

## Onboarding Package

As part of the onboarding process, you will have received an onboarding package from the iQmetrix API team. This package provides you credentials and access details in order to perform the topics covered in this guide. 

Should you require information beyond the scope of this guide, or did not receive the onboarding package, contact {{contact_support}}.

## Environment

iQmetrix provides you with two environments: Sandbox and Production. 
Use the Sandbox environment to test your API and to perform end-to-end testing. After completing this stage proceed to the Production environment.

For more information on environments, see {{Environment}}.

The iQmetrix API supports `JSON` and `JSON + HAL`. See [Supported Response Formats](/api/getting-started) for more information.

## Before You Begin

In order to make authorized requests to iQmetrix APIs, you need an {{AccessToken_Glossary}}.

See the table below for different ways of getting an Access Token.

| If... | Then... |
|:------|:--------|
| You do not have an Access Token | See [Obtaining an Access Token](/api/authentication/#obtaining-an-access-token) |
| You have an Access Token, but it is close to expiring | See [Refreshing an Access Token](/api/authentication/#refreshing-an-access-token) |

The token is placed in the `Authorization` header of requests to iQmetrix APIs, prefixed by the word `Bearer`.

##### Example

    Authorization: Bearer (Access Token)

## Integration Areas

This guide is organized by functional areas of an external system that you may wish to integrate with Endless Aisle.

Feel free to skip to any section you are interested in:

{% include custom/series_eaguide_nav.html %}
