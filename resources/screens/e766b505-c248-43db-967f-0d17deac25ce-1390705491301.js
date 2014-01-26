jQuery("#simulation")
  .on("click", ".s-e766b505-c248-43db-967f-0d17deac25ce .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b8f2fa5c-1891-4df0-9529-2008138b7368"
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