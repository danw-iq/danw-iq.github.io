---
title:  Security Roles
permalink: /api/security-roles/

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

Security Roles allow you to specify what {{Users}} are allowed to do.

The figure below shows how Security Roles interact with Resources in the [User Manager](/api/user-manager) and [Company Tree](/api/company-tree) APIs.

To learn more about Users, Security Roles and Permissions see {{UserManager_Concept}}.

<img src="{{ "/images/user-manager-uml.png" | prepend: site.url }}" style="height: 80%; width: 80%" />

{{note}}
Changes within the Security Roles API involve complex actions behind the scenes and <b>are not always immediate</b>.
{{end}}



# Endpoints


* Sandbox: <a href="https://usermanagerdemo.iqmetrix.net/v1">https://usermanagerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://usermanager.iqmetrix.net/v1">https://usermanager.iqmetrix.net/v1</a>



# Resources


## SecurityRole

A SecurityRole represents the relationship between a {{User}} and a set of Permissions. SecurityRoles allow you create custom groups that can hold Permissions

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| Name (`String`) | Name | 


## AssignedRole

An AssignedRole represents the relationship between a {{User}}, {{SecurityRole}} and Entity.

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| EntityId (`Integer`) | Identifier of a [CompanyTreeNode](/api/company-tree/#companytreenode) | 
| SecurityRoleId (`Integer`) | Identifier of a [SecurityRole](#securityrole) | 
| UserId (`Integer`) | Identifier of a [User](/api/usermanager/#user) | 


## Permission

Permissions are the building blocks of SecurityRoles and represent the ability to perform an action within iQmetrix APIs.

* Assigning a Permission to a Security Role always **grants** an action
* A Permission will never overrule another Permission
* When `IsAssignable` is set to `false`, the Permission is Restricted by iQmetrix. If you require access to a Restricted Permission, contact {{contact_support}}

| Name | Description |
|:-----|:------------|
| Id (`Integer`) | Identifier | 
| Name (`String`) | Descriptive name | 
| Category (`String`) | This field is used internally to group Permissions by how they impact the iQmetrix ecosystem | 
| Code (`String`) | Unique, system generated name used for sorting Permissions | 
| Description (`String`) | Describes the function of the Permission | 
| IsAssignable (`Boolean`) | A flag to indicate if this Permission is Restricted, see Notes above | 
| ParentPermissionId (`Integer`) | Identifier of a similar Permission, used for organizing Permissions into groups | 






# Requests



## Getting All Permissions for an Entity

This request will return all [Permissions](#permission) within the [SecurityRoles](#security-role) belonging to the specified Entity.


> Definition

```
GET /Entities({EntityId})/Permissions
```

> Example Request



```shell
curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Permissions" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllPermissionsForAnEntity() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Permissions");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Permissions', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>EntityId</code> (<strong>Required</strong>)  - Identifier of a {{CompanyTreeNode}}
    </li>
    </ul>



<h4>Response Parameters</h4>


 Array[<a href='#permission'>Permission</a>]

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">[
    {
        "Id": 101,
        "Name": "Edit Products",
        "Category": "Products",
        "Code": "editproducts",
        "Description": "Enables the user to create, update and archive their private products and retailer revisions.",
        "IsAssignable": true,
        "ParentPermissionId": 99
    }
]</pre>

## Creating a Security Role



> Definition

```
POST /Entities({EntityId})/SecurityRoles
```

> Example Request



```shell
curl -X POST "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Name": "Store Manager"
}'
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingASecurityRole() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Name\":\"Store Manager\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'

body = "{\"Name\":\"Store Manager\"}";

response = RestClient.post 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>EntityId</code> (<strong>Required</strong>)  - Identifier of a {{CompanyTreeNode}}
    </li>
    </ul>



#### Request Parameters

<ul><li><code>Name</code> (<strong>Required</strong>) - A descriptive name, must be unique within the Company</li></ul>

<h4>Response Parameters</h4>


 <a href='#securityrole'>SecurityRole</a>

> Example Response

<pre class="highlight json">
HTTP 201 Content-Type: application/json
</pre><pre class="highlight json">{
    "Id": 316,
    "Name": "Store Manager"
}</pre>

## Getting All Security Roles for an Entity



> Definition

```
GET /Entities({EntityId})/SecurityRoles
```

> Example Request



```shell
curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllSecurityRolesForAnEntity() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>EntityId</code> (<strong>Required</strong>)  - Identifier of a {{CompanyTreeNode}}
    </li>
    </ul>



<h4>Response Parameters</h4>


 Array[<a href='#securityrole'>SecurityRole</a>]

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">[
    {
        "Id": 316,
        "Name": "Store Manager"
    }
]</pre>

## Enabling a Permission for a Security Role



> Definition

```
PUT /Entities({EntityId})/SecurityRoles({SecurityRoleId})/Permissions({PermissionId})
```

> Example Request



```shell
curl -X PUT "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions(101)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse EnablingAPermissionForASecurityRole() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions(101)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.put 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions(101)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>EntityId</code> (<strong>Required</strong>)  - Identifier of a {{CompanyTreeNode}}
    </li>
    
    <li>
        <code>SecurityRoleId</code> (<strong>Required</strong>)  - Identifier of a SecurityRole
    </li>
    
    <li>
        <code>PermissionId</code> (<strong>Required</strong>)  - Identifier of a Permission
    </li>
    </ul>



<h4>Response Parameters</h4>



> Example Response

<pre class="highlight json">
HTTP 204 Content-Type: application/json
</pre>

## Disabling a Permission for a Security Role



> Definition

```
DELETE /Entities({EntityId})/SecurityRoles({SecurityRoleId})/Permissions({PermissionId})
```

> Example Request



```shell
curl -X DELETE "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions(101)" -H "Authorization: Bearer (Access Token)"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse DisablingAPermissionForASecurityRole() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions(101)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.delete 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions(101)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>EntityId</code> (<strong>Required</strong>)  - Identifier of a {{CompanyTreeNode}}
    </li>
    
    <li>
        <code>SecurityRoleId</code> (<strong>Required</strong>)  - Identifier of a SecurityRole
    </li>
    
    <li>
        <code>PermissionId</code> (<strong>Required</strong>)  - Identifier of a Permission
    </li>
    </ul>



<h4>Response Parameters</h4>



> Example Response

<pre class="highlight json">
HTTP 204 Content-Type: application/json
</pre>

## Getting Permissions for a Security Role



> Definition

```
GET /Entities({EntityId})/SecurityRoles({SecurityRoleId})/Permissions
```

> Example Request



```shell
curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingPermissionsForASecurityRole() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>EntityId</code> (<strong>Required</strong>)  - Identifier of a {{CompanyTreeNode}}
    </li>
    
    <li>
        <code>SecurityRoleId</code> (<strong>Required</strong>)  - Identifier of a SecurityRole
    </li>
    </ul>



<h4>Response Parameters</h4>


 Array[<a href='#permission'>Permission</a>]

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">[
    {
        "Id": 101,
        "Name": "Edit Products",
        "Category": "Products",
        "Code": "editproducts",
        "Description": "Enables the user to create, update and archive their private products and retailer revisions.",
        "IsAssignable": true,
        "ParentPermissionId": 99
    }
]</pre>

## Assigning a Security Role to a User

If the User is assigned a SecurityRole they already have, the result will be a `HTTP 200` with the {{AssignedRole}}, the same response as assigning a new SecurityRole to a User.

> Definition

```
POST /Users({UserId})/AssignedRoles
```

> Example Request



```shell
curl -X POST "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/AssignedRoles" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "EntityId": 14202,
    "SecurityRoleId": 316
}'
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse AssigningASecurityRoleToAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/AssignedRoles");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"EntityId\":14202,\"SecurityRoleId\":316}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'

body = "{\"EntityId\":14202,\"SecurityRoleId\":316}";

response = RestClient.post 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/AssignedRoles', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier of a User
    </li>
    </ul>



#### Request Parameters

<ul><li><code>EntityId</code> (<strong>Required</strong>) - Identifier of a {{CompanyTreeNode}}</li><li><code>SecurityRoleId</code> (<strong>Required</strong>) </li></ul>

<h4>Response Parameters</h4>


 <a href='#assignedrole'>AssignedRole</a>

> Example Response

<pre class="highlight json">
HTTP 201 Content-Type: application/json
</pre><pre class="highlight json">{
    "Id": 6548,
    "EntityId": 14202,
    "SecurityRoleId": 316,
    "UserId": 2576
}</pre>

## Getting Assigned Roles for a User



> Definition

```
GET /Users({UserId})/AssignedRoles
```

> Example Request



```shell
curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/AssignedRoles" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAssignedRolesForAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/AssignedRoles");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/AssignedRoles', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier of a User
    </li>
    </ul>



<h4>Response Parameters</h4>


 Array[<a href='#assignedrole'>AssignedRole</a>]

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">[
    {
        "Id": 6548,
        "EntityId": 14202,
        "SecurityRoleId": 316,
        "UserId": 2576
    }
]</pre>

## Unassigning a Security Role from a User



> Definition

```
DELETE /Users({UserId})/AssignedRoles({SecurityRoleId})
```

> Example Request



```shell
curl -X DELETE "https://usermanagerdemo.iqmetrix.net/v1/Users(2572)/AssignedRoles(316)" -H "Authorization: Bearer (Access Token)"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UnassigningASecurityRoleFromAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://usermanagerdemo.iqmetrix.net/v1/Users(2572)/AssignedRoles(316)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.delete 'https://usermanagerdemo.iqmetrix.net/v1/Users(2572)/AssignedRoles(316)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier of a User
    </li>
    
    <li>
        <code>SecurityRoleId</code> (<strong>Required</strong>)  - Identifier of a SecurityRole
    </li>
    </ul>



<h4>Response Parameters</h4>



> Example Response

<pre class="highlight json">
HTTP 204 Content-Type: application/json
</pre>

# Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `The field {x} is a required field `<br/>`but was not found in the request` | Ensure all required parameters are included |
| `HTTP 400` | `Expected {x} to contain {y}`<br/>` but found {z}` | Ensure parameters that are in both Request URI and body match |
| `HTTP 404` | `{x} not found` | Ensure URI parameters are correct | 
| `HTTP 409` | `The SecurityRole name {x} `<br/>`already exists for entity {y}` | SecurityRole names must be unique across the Company |

