jQuery("#simulation")
  .on("click", ".s-cedca9eb-ba69-4de5-9a9f-3a27db586cce .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_2")) {
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
                    "target": "screens/0d467985-dd7e-4070-9dba-470de0d56ab9"
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