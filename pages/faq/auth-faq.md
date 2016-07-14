---
title: Authentication FAQ
permalink: /faq/auth-faq/
tags: []
keywords: 
audience: 
last_updated: 05-05-2016
summary: 
metadata: false
---
{% include linkrefs.html %}


<!-- Accordion styling for FAQs -->
<script src="{{ "js/jquery-ui.js" | prepend:site.pagefileurl }}"></script>
<link rel="stylesheet" href="{{ "css/jquery-ui.css" | prepend:site.pagefileurl }}">

<script>
  $(function() {
    $( "#accordion" ).accordion({
      heightStyle: "content",
      collapsible: true
    });
  });
</script>

Below are the most commonly asked questions from clients around authentication. If you do not find a suitable answer to your question, contact the <a href="mailto:{{site.support_email}}?subject=Authentication Question">API Support Team</a>. 

<div id="accordion">
  
  <h3>What is the difference between user credentials and an Access Token?</h3>
  <div>
    <p>iQmetrix APIs uses <a href="../../api/glossary/#oauth">OAuth2</a> for authentication. In this flow, your application sends the end-user credentials (username-password), along with a <code>client_id</code> and <code>client_secret</code> to request an access token.</p>

    <p>The end-user credentials are specific to a user account and provide an extra layer of security. The iQmetrix platform verifies your credentials and sends the Access Token in the response. An Access Token acts as a session ID that your application uses when making requests to the iQmetrix APIs.</p>
  </div>
  
  <h3>I think my Access Token or Client Secret may have been compromised.</h3>
  <div>
    <p>It is important to keep your Access Token and client credentials protected. If another user were to acquire your Access Token or client secret, then they could have the ability to call iQmerix APIs as if they were you. For example, an individual with your Access Token could see the employee profiles for your company.</p>

      <p>If you think that your token has been compromised, you should <a href="../../api/authentication/#refreshing-an-access-token">refresh your Access Token</a>. Refreshing your token will set the previous one as invalid. Please be aware that if you were to instead obtain a new Access Token, then the previous token would still be valid.</p>

      <p>If you think that your client secret has been compromised, you should contact <a href="mailto:support@iqmetrix.com?subject=Reset Client Secret">iQmetrix Support</a> to reset your client secret.</p>
  </div>
  
  <h3>I received an <em> invalid token</em> when trying to use your APIs.</h3>
  <div>
    <p>There are multiple reasons as to why an <code>invalid token</code> could occur when requesting data from an API. The <code>invalid token</code> error returns in a HTTP 401 Unauthorized response in plain text format.</p>
      <p>The most common occurences and remedies for an <code>invalid token</code> are below: </p>
      <dl>
        <dt>The access token has expired</dt>
          <dd>If your Access Token has expired, then you must <a href="/api/authentication/#refreshing-an-access-token">refresh the token</a></dd>
        <dt>The request is in the wrong environment</dt>
          <dd>When testing your application in the sandbox environment, please remember to obtain a separate access token for the Production environment.</dd>
        <dt>The wrong access token was used (from a different client)</dt>
          <dd>Ensure that the access token used to access an API belongs to the correct end-user account.</dd>
        <dt>The access token was incorrect</dt>
          <dd>Ensure that the correct access token was entered and is in the correct format (e.g. <code>Bearer 3dae10c05e894011b5b3ae15972ffbf4</code> )</dd>
      </dl>
  </div>
  
  <h3>When trying to get a token, I see: <em>The authorization grant type ' ' is not supported by the authorization server</em>.</h3>
  <div>
    <p>Please verify that the media (content) type is set to <code>application/x-www-form-urlencoded</code>, and that the request parameters are in the <strong>body</strong> of the request; not in the header.</p>
  </div>

  <h3>My end-user account is locked out when obtaining an Access Token. Who do I contact?</h3>
  <div>
    <p>If the end-user credentials used to obtain an access token are currently locked, contact your company administrator to unlock that end-user account.</p>
  </div>
</div>

<br />