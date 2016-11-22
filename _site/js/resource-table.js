







function addFilters(env, versions) {




/** -------------------
 This function creates the resource table 
------------------- **/

    //obj = schema
    //name = API name
    //title = schema name
    env.addFilter('printResourceTable', function(obj, name, title) {

      var jsonObj = safeJsonParse(obj, "printResourceTable");
      var isExcluded = jsonObj.exclude;
      var schema = extractResource(title, name);
      var table = "";

      if(!isExcluded) {

        //Print name of table
        table += "## " + name + "\n\n";

        if(schema.description)
        {
          table += schema.description + "\n\n";
        }

        //table += "| Name | Data Type | Description | Example |\n|:-----|:----------|:------------|:--------|\n";
        table += "| Name | Description |\n|:-----|:------------|\n";

        var properties = getPropertyNames(schema, "printResourceTableProperties"); //[ "Id", "CustomerTypeId" ... ]

        if(properties) {
          table += printResourceTableProperties(schema, properties, "");
        }
        else {
          console.log("ERROR printResourceTable no properties to print!");
        }

      }

      return table;
    });



};