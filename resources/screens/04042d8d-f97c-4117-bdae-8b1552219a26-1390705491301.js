jQuery("#simulation")
  .on("click", ".s-04042d8d-f97c-4117-bdae-8b1552219a26 .click", function(event, data) {
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
    } else if(jFirer.is("#s-Text_cell_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cedca9eb-ba69-4de5-9a9f-3a27db586cce"
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