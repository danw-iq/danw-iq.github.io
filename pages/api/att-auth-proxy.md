---
title:  AT&T Auth Proxy
permalink: /api/att-auth-proxy/
tags: []
keywords: 
audience: 
last_updated: 29-11-2016
summary: 
rouge: false
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}


## Overview

Proxy for interacting with AT&T's CSP. 


## Endpoints


* Production: <a href="https://authproxyatt.iqmetrix.net/v1">https://authproxyatt.iqmetrix.net/v1</a>


## Resources

### MappingReferenceData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Mappings | Array[object] | Array, that consists of multiples of the following |  |
| Mappings.MyLoginsCspGroup | String | Alphabetic string that corresponds to the column 'MyLogins CSP Group' in the mapping spreadsheet | `CKPDEM` |
| Mappings.TrainingComplianceCspGroup | String | Alphabetic string that corresponds to the column 'Training Compliance CSP Group' in the mapping spreadsheet | `CKUNTM` |
| Mappings.RQSecurityRoleName | String | Alphabetic string that corresponds to the column 'Resulting Base RQ Profile' in the mapping spreadsheet | `Dealer Store Manager Basic` |
| Mappings.IsDealerSpecific | Boolean | A flag to indicate if the service will prepend the user's dealer specific prefix to the RQSecurityRoleName to find the matching security role | `false` |







## Requests



<h3 id='setting-a-prefix-for-a-user' class='clickable-header top-level-header'>Setting a Prefix for a User</h3>

The prefix will be prepended to the User's role with whitespace in the form `{SecurityRolePrefix} {rqSecurityRoleName}`.


<h4>Request</h4>

<pre>
PUT /users({UserId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for a <a href='http://developers.iqmetrix.com/api/user-manager/#user'>User</a>
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>UserName</code> (<strong>Required</strong>) </li><li><code>SecurityRolePrefix</code> (<strong>Required</strong>) - The prefix that will be pre-pended to the user's Hub security role</li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-setting-a-prefix-for-a-user" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-setting-a-prefix-for-a-user" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-setting-a-prefix-for-a-user" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-setting-a-prefix-for-a-user" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-setting-a-prefix-for-a-user" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-setting-a-prefix-for-a-user" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-setting-a-prefix-for-a-user"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-setting-a-prefix-for-a-user">
<pre id="http-code-setting-a-prefix-for-a-user"><code class="language-http">PUT /users(12321)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp">{
    "UserName": "sample@iqmetrix.com",
    "SecurityRolePrefix": "iQMetrix"
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-setting-a-prefix-for-a-user">
<pre id="curl-code-setting-a-prefix-for-a-user"><code class="language-http">curl -X PUT "https://authproxyatt.iqmetrix.net/v1/users(12321)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -d '{
    "UserName": "sample@iqmetrix.com",
    "SecurityRolePrefix": "iQMetrix"
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-setting-a-prefix-for-a-user">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-setting-a-prefix-for-a-user"><code class="language-csharp">static IRestResponse SettingAPrefixForAUser()
{
    var client = new RestClient("https://authproxyatt.iqmetrix.net/v1/users(12321)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

     request.AddParameter("application/json", "{\"UserName\":\"sample@iqmetrix.com\",\"SecurityRolePrefix\":\"iQMetrix\"}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-setting-a-prefix-for-a-user">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-setting-a-prefix-for-a-user"><code class="language-java">import org.apache.http.entity.StringEntity;
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
    <div role="tabpanel" class="tab-pane" id="ruby-setting-a-prefix-for-a-user">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-setting-a-prefix-for-a-user"><code class="language-ruby">require 'rest-client'

body = "{\"UserName\":\"sample@iqmetrix.com\",\"SecurityRolePrefix\":\"iQMetrix\"}";

response = RestClient.put 'https://authproxyatt.iqmetrix.net/v1/users(12321)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>UserName</code> (String) </li><li><code>SecurityRolePrefix</code> (String) - The prefix that will be pre-pended to the user's Hub security role</li></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "UserName": "sample@iqmetrix.com",
    "SecurityRolePrefix": "iQMetrix"
}</pre>

<h3 id='getting-the-security-role-mapping-reference-data' class='clickable-header top-level-header'>Getting the Security Role Mapping Reference Data</h3>



<h4>Request</h4>

<pre>
GET /cspGroupMappingReference
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code> - See <a href='/api/authentication/#obtaining-an-access-token'>Obtaining an Access Token</a></li><li><code>Accept: application/json</code></li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-security-role-mapping-reference-data" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-security-role-mapping-reference-data" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-security-role-mapping-reference-data" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-security-role-mapping-reference-data" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-security-role-mapping-reference-data" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-security-role-mapping-reference-data" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-security-role-mapping-reference-data"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-security-role-mapping-reference-data">
<pre id="http-code-getting-the-security-role-mapping-reference-data"><code class="language-http">GET /cspGroupMappingReference
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-security-role-mapping-reference-data">
<pre id="curl-code-getting-the-security-role-mapping-reference-data"><code class="language-http">curl -X GET "https://authproxyatt.iqmetrix.net/v1/cspGroupMappingReference" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-security-role-mapping-reference-data">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-security-role-mapping-reference-data"><code class="language-csharp">static IRestResponse GettingTheSecurityRoleMappingReferenceData()
{
    var client = new RestClient("https://authproxyatt.iqmetrix.net/v1/cspGroupMappingReference");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-security-role-mapping-reference-data">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-security-role-mapping-reference-data"><code class="language-java">
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
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-security-role-mapping-reference-data">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-security-role-mapping-reference-data"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://authproxyatt.iqmetrix.net/v1/cspGroupMappingReference', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#mappingreferencedata'>MappingReferenceData</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
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