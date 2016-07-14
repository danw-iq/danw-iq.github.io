// npm install cheerio

var cheerio = require('cheerio');
var fs = require('fs');
var COUNTER = 0;
var requests = [];
 
fs.readFile('index.html', 'utf8', dataLoaded); 

function dataLoaded(err, data) {

    $ = cheerio.load(data);

    //Get list of REQUEST URLs with INDEX included!

    COUNTER = 0;

    $("pre code").each(function(index, section) {
       var code = $(section).text();

        if(code.indexOf("(Access Token)") == -1)
        {
            if(code.indexOf("PUT") > -1 || 
                code.indexOf("POST") > -1 || 
                code.indexOf("DELETE") > -1 ||
                code.indexOf("GET") > -1)
            {
                code = code.substring(code, code.indexOf('\n')).trim();
                var request = {};

                var peices = code.split(" ");

                request.method = peices[0];
                request.url = peices[1];

                requests[COUNTER] = request;

                COUNTER++;
            }
        }
    });

    //Get a list of EXAMPLE REQUEST FORMAT

    COUNTER = 0;

    $("h4+div").each(function(index, section) {
       var code = $(section).children("pre").text();

       code.replace("\"","'");

        if(code.indexOf("PUT") > -1 || 
            code.indexOf("POST") > -1 || 
            code.indexOf("DELETE") > -1)
        {
            requests[COUNTER].exampleRequestFormat = code.substring(code.indexOf('{')).trim();
        } 
        else 
        {
            requests[COUNTER].exampleRequestFormat = "";
        }

        COUNTER++;        
    });

    //Get a list of EXAMPLE REQUEST

    COUNTER = 0;

    $("h6+div").each(function(index, section) {
        var code = $(section).children("pre").text();

        code.replace("\"","'");

        if(code.indexOf("Authorization: Bearer (Access Token)") > -1) {

            if(code.indexOf("PUT") > -1 || 
            code.indexOf("POST") > -1 || 
            code.indexOf("DELETE") > -1)
            {
                requests[COUNTER].examplePostRequest = code.substring(code.indexOf('{')).trim();
            } 
            else 
            {
                requests[COUNTER].examplePostRequest = "";
            }

            COUNTER++;
        }     
    });

    COUNTER = 0;

    //Get a list of RESOURCE EXAMPLES

    $("pre code").each(function(index, section) {
       var code = $(section).text();

        if(code.indexOf("HTTP") > -1)
        {
            var httpCode = code.substring(code.indexOf("HTTP") + 5, code.indexOf("Content-Type")).trim();
            code.replace("\"","'");

            requests[COUNTER].exampleResource = code.substring(code.indexOf('\n')).trim();

            COUNTER++;
        }
    });


    //GET URI parameters

    COUNTER = 0;

    $("h4:contains(URI)+ul").each(function(index, section) {

        var params = [];

        $(section).children("li").each(function(j, li) {

            params.push($(li).text().trim().replace('\n', ''));
        });

        requests[COUNTER].uriParams = params;

        COUNTER++;

    });

    console.log("schemas:"); 

    $("table").each(function(i, table) {
       //each resource

        var isResource = $($(table).children("thead").children("tr").children("th")[1]).text() == "Data Type";

        if(isResource) {

            console.log("  - NAME: |");
            console.log("      {");
            console.log("        'type': 'object',");
            console.log("        '$schema': 'http://json-schema.org/draft-03/schema',");
            console.log("        'description': '?????',");
            console.log("        'properties': {");

            var numRows = $(table).children("tbody").children("tr").length;

            $(table).children("tbody").children("tr").each(function(j, row) {

                var name = $(row).children("td:first-child").text();
                var dataType = $(row).children("td:nth-child(2)").text();
                var description = $(row).children("td:nth-child(3)").text();            
                var example = $(row).children("td:nth-child(4)").text();

                var size;

                if(dataType.indexOf("(") > -1) { // string(200)
                    size = dataType.substring(dataType.indexOf("(")+1,dataType.length-1); // 200
                    dataType = "string"; // string
                }

                switch(dataType.toLowerCase()) {
                    case "guid":
                        TypeString = "'type': 'string', ";
                        break;
                    case "integer":
                        TypeString = "'type': 'integer', ";
                        break;                    
                    case "object":
                        TypeString = "'type': '????', ";
                        break; 
                    case "boolean":
                        TypeString = "'type': 'boolean', ";
                        break; 
                    case "string":
                        if(size) {
                            TypeString = "'type': 'string', ";
                        } else {
                            TypeString = "'type': 'string',  ";
                        }
                        break;                    
                    case "array":
                        TypeString = "'type': 'array', '$ref': '???'";

                        if(size) {
                        TypeString += " 'maximum': '"+ size +"', ";
                        }
                        break;
                    default:
                        TypeString = "'$ref': '????', ";              
                    }

                    var str = "'" + name + "': { " + TypeString + "'description': '" + description + "', " +  "'example': '" + example + "' }, ";

                console.log(prefixWithSpaces(str, "          "));
            });
            
            console.log("        }");
            console.log("      }");
        }
    });

    for(var i = 0; i < requests.length; i++) {

        var request = requests[i];
        var displayName;
        var collection;
        var url = request.url;
        var exampleResource = request.exampleResource;
        var examplePostRequest = request.examplePostRequest;
        var uriParams = request.uriParams;

        collection = isCollection(url);
        displayName = parseDisplayName(url);

        console.log("%s:", url);
        console.log("  displayName: %s", displayName);

        console.log("  uriParameters:");

        if(uriParams)
        {
            for(var j = 0; j < uriParams.length; j++)
            {
                var obj = parseUriParameter(uriParams[j]);
                console.log("    %s:", obj.name);
                console.log("      displayName: %s", obj.displayName);
                console.log("      type: %s", obj.type);
                console.log("      example: %s", obj.example);
                console.log("      description: %s", obj.description);
                console.log("      required: %s", obj.required);
            }
        }

        console.log("  type:");

        if(collection) {
                console.log("    collection:");
        } else {
                console.log("    singularEndpoint:");
        }

        console.log("      resource: %s", displayName);

        if(collection) {
            console.log("      resourceHal: %sHal", displayName);
            console.log("      examplePostRequest: | \n %s", prefixWithSpaces(examplePostRequest, "       "));   
            console.log("      exampleCollection: | \n %s", prefixWithSpaces(exampleResource, "       "));   
        }

        console.log("      exampleResource: | \n %s", prefixWithSpaces(exampleResource, "       "));
    }

}    

function parseDisplayName(url) {
    var displayName;

    var tokens = url.split("/");
    displayName = tokens[tokens.length - 1];

    if (displayName.indexOf("?") > -1) {
        displayName = displayName.substring(0,displayName.indexOf("?"));
    }
    else if(displayName.indexOf("(") > -1) {
        displayName = displayName.substring(0,displayName.indexOf("(")); 
    }

    if(displayName.charAt(displayName.length-2) == 'e' && displayName.charAt(displayName.length-1) == 's')
    {
        displayName = displayName.substring(0, displayName.length-2);
    }
    else if(displayName.charAt(displayName.length-1) == 's') 
    {
        displayName = displayName.substring(0, displayName.length-1);
    }

    return displayName.toLowerCase();
}

function isCollection(url) {
    var tokens = url.split("/");

    return (tokens[tokens.length - 1].indexOf('{') == -1) || (tokens[tokens.length - 1].indexOf('$filter=') > -1);
}

function parseUriParameter(param) {

    var tokens = param.split("-");

    var name = tokens[0].split(" ")[0].trim();
    var reqOpt = tokens[0].split(" ")[1].trim().replace("(", "").replace(")","") == "Required";
    var description 

    if(tokens.length > 1) {
        description = tokens[1].trim();
        description.replace("\n", " ");
    }

    var param = {};

    param.name = name;
    param.required = reqOpt;
    param.description = description;
    param.example = "";
    param.type = "string";
    param.displayName = name;

    return param;
}

function prefixWithSpaces(example, padding) {

    var lines = "";

    if(example != null)
    {
        lines = example.split("\n");

        for (var i = 0; i < lines.length; i++) {
            lines[i] = padding + lines[i];
        }

        lines = lines.join("\n");
    }

    return lines;
}