---
title:  AT&T Auth Proxy
permalink: /api/att-auth-proxy/

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

Proxy for interacting with AT&T's CSP. 



# Endpoints


* Production: <a href="https://authproxyatt.iqmetrix.net/v1">https://authproxyatt.iqmetrix.net/v1</a>



# Resources


## MappingReferenceData

| Name | Description |
|:-----|:------------|
| Mappings (`Array[object]`) | Array, that consists of multiples of the following | 
| Mappings.MyLoginsCspGroup (`String`) | Alphabetic string that corresponds to the column 'MyLogins CSP Group' in the mapping spreadsheet | 
| Mappings.TrainingComplianceCspGroup (`String`) | Alphabetic string that corresponds to the column 'Training Compliance CSP Group' in the mapping spreadsheet | 
| Mappings.RQSecurityRoleName (`String`) | Alphabetic string that corresponds to the column 'Resulting Base RQ Profile' in the mapping spreadsheet | 
| Mappings.IsDealerSpecific (`Boolean`) | A flag to indicate if the service will prepend the user's dealer specific prefix to the RQSecurityRoleName to find the matching security role | 







# Requests



## Setting a Prefix for a User

The prefix will be prepended to the User's role with whitespace in the form `{SecurityRolePrefix} {rqSecurityRoleName}`.


> Definition

```
PUT /users({UserId})
```

> Example Request



```shell
curl -X PUT "https://authproxyatt.iqmetrix.net/v1/users(12321)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -d '{
    "UserName": "sample@iqmetrix.com",
    "SecurityRolePrefix": "iQMetrix"
}'
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse SettingAPrefixForAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://authproxyatt.iqmetrix.net/v1/users(12321)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    StringEntity body = new StringEntity("{\"UserName\":\"sample@iqmetrix.com\",\"SecurityRolePrefix\":\"iQMetrix\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'

body = "{\"UserName\":\"sample@iqmetrix.com\",\"SecurityRolePrefix\":\"iQMetrix\"}";

response = RestClient.put 'https://authproxyatt.iqmetrix.net/v1/users(12321)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>


#### URI Parameters
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for a {{User}}
    </li>
    </ul>



#### Request Parameters

<ul><li><code>UserName</code> (<strong>Required</strong>) </li><li><code>SecurityRolePrefix</code> (<strong>Required</strong>) - The prefix that will be pre-pended to the user's Hub security role</li></ul>

<h4>Response Parameters</h4>


 <ul><li><code>UserName</code> (String) </li><li><code>SecurityRolePrefix</code> (String) - The prefix that will be pre-pended to the user's Hub security role</li></ul>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
    "UserName": "sample@iqmetrix.com",
    "SecurityRolePrefix": "iQMetrix"
}</pre>

## Getting the Security Role Mapping Reference Data



> Definition

```
GET /cspGroupMappingReference
```

> Example Request



```shell
curl -X GET "https://authproxyatt.iqmetrix.net/v1/cspGroupMappingReference" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"
```

<div class="language-java highlighter-rouge">
<pre class="highlight"><code>
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheSecurityRoleMappingReferenceData() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://authproxyatt.iqmetrix.net/v1/cspGroupMappingReference");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
</div>

<pre class="highlight ruby"><code>require 'rest-client'



response = RestClient.get 'https://authproxyatt.iqmetrix.net/v1/cspGroupMappingReference', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>





<h4>Response Parameters</h4>


 <a href='#mappingreferencedata'>MappingReferenceData</a>

> Example Response

<pre class="highlight json">
HTTP 200 Content-Type: application/json
</pre><pre class="highlight json">{
  "Mappings": [
      {
          "MyLoginsCspGroup": "CKPDEM",
          "TrainingComplianceCspGroup": null,
          "RQSecurityRoleName": "Chief of Staff",
          "IsDealerSpecific": false
      },
      {
          "MyLoginsCspGroup": "CKPDEM",
          "TrainingComplianceCspGroup": "CKUNTM",
          "RQSecurityRoleName": "Dealer Store Manager Basic",
          "IsDealerSpecific": false
      },
      {
          "MyLoginsCspGroup": "CKPDPM",
          "TrainingComplianceCspGroup": null,
          "RQSecurityRoleName": "Dealer Principal",
          "IsDealerSpecific": false
      },
      {
          "MyLoginsCspGroup": "CKPDPM",
          "TrainingComplianceCspGroup": "CKUNTM",
          "RQSecurityRoleName": "Dealer Store Manager Basic",
          "IsDealerSpecific": false
      }
      ...
  ]                      
}
</pre>