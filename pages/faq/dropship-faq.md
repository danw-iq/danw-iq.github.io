---
title: Dropship FAQ
permalink: /faq/dropship-faq/
tags: []
keywords: 
audience: 
last_updated: 04-05-2016
summary: 
metadata: false
---
{% include linkrefs.html %}


<!-- Accordion styling for FAQs -->
<script src="{{ "js/jquery-ui.js" | prepend:site.pagefileurl }}"></script>
<link rel="stylesheet" href="{{ "css/jquery-ui.css" | prepend:site.pagefileurl }}">

<script>
  $(function() {
    $( ".accordion" ).accordion({
      heightStyle: "content",
      collapsible: true
    });
  });
</script>


Below are the most commonly asked questions from suppliers around the Dropship program. If you do not find a suitable answer to your question, contact the <a href="mailto:{{site.support_email}}?subject=Dropship Question">API Support Team</a>. 

### Product Subscriptions

<div class="accordion">
  
  <h3>How do I create more than one subscribable list?</h3>
  <div>
    <p>Suppliers have the ability to create more than one subscriable list through the APIs. See <a href="../../api/product-subscription/#creating-a-subscribable-list">Creating a Subscribable List</a> for reference.</p>
  </div>
  
  <h3>How are companies linked to subscribable lists?</h3>
  <div>
    <p>Each company is assigned to one or more <a href="../../api/product-subscription/">subscribable lists</a>. The products contained in each list are visible to the assigned companies.</p>
    
    <p>Optionally, you can provide more than one list to serve different groups of products to different retailers, such as based on the manufacturer or product line. For example, companies that belong to <code>Dan's Supplies - Apple</code> would only see Apple products from that list. See <a href="../../guides/dropship-onboarding-guide/#step-3---product-subscription">Product Subscription</a> for more info.</p>
  </div>


  <h3>How do I remove a product from my subscribable list?</h3>
  <div>
    <p>You have the ability to add and remove products from each of your subscribable lists when performing an update to the list. Each push you make overwrites the previous collection of products viewed by iQmetrix. See <a href="../../api/product-subscription/#updating-products-in-a-subscribable-list">Updating Products in a Subscribable List</a> for more info.</p>
  </div>

</div>

### Supplier Availability

<div class="accordion">
  
  <h3>How is availability handled?</h3>
  <div>
    <p>Availability is cached at iQmetrix before being displayed in RQ. Availability on a per supplier level and not at the retailer level. </p>
    
    <p>During a shipping options query, you should ensure that your API will reject the SKU should it not be available (e.g. throw an error).</p>
    
    <p>For example, attempt to put a threshold of 100 products set for dropship and sell the  remaining items by other means. Any items that have been removed from list would then no longer be dropshippable.</p>
  </div>
</div>


### Product Feed 

<div class="accordion">
  
  <h3>What is the relationship between Classification Tree and Master Product/Variations?</h3>
  <div>
    <p>A Classification Tree organizes all products in a hierarchal structure. Each product tree categorizes and classifies each product into a specific section. For example, a Bluetooth headset device would be under could be classified under '<strong>Accessories -> Headphones &amp; Speakers'</strong>.</p>
    
    <p>Each Master Product is a parent product, and variations would be the children of that parent. The children inherit the fields of the parent, but could vary based on any number of factors such as colour, dimensions, material, etc.</p>
    
    <p>A <a href="../../concepts/product-structure/">Master Product</a> would be classified under the {{ClassificationTree}}.</p>
  </div>
</div>

<br />
