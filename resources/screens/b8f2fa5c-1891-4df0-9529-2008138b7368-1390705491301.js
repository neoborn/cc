jQuery("#simulation")
  .on("click", ".s-b8f2fa5c-1891-4df0-9529-2008138b7368 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_87")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/04042d8d-f97c-4117-bdae-8b1552219a26"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });