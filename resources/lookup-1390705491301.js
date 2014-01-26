(function(window, undefined) {
  var dictionary = {
    "e766b505-c248-43db-967f-0d17deac25ce": "home-camera2",
    "04042d8d-f97c-4117-bdae-8b1552219a26": "select-people",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "home-camera",
    "cedca9eb-ba69-4de5-9a9f-3a27db586cce": "select-sam",
    "b8f2fa5c-1891-4df0-9529-2008138b7368": "tag-image",
    "0d467985-dd7e-4070-9dba-470de0d56ab9": "share-photos",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);