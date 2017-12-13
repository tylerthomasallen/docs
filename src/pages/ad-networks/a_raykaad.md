## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/Logo-2-1509402724378.png)	***Raykaad***
https://www.raykaad.com/

Integration Status |  ***active***

###  Description
Raykaad is the biggest advertising network & agency in Iran who specializes in mobile/web advertising.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://api.raykaad.com/v1/third_party/{event_name}/?data={click_id} OPEN | https://api.raykaad.com/v1/third_party/{event_name}/?data={click_id} PURCHASE | https://api.raykaad.com/v1/third_party/{event_name}/?data={click_id} custom_event | https://api.raykaad.com/v1/third_party/{event_name}/?data={click_id}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{event_name} | EVENT_NAME |  |  |  | false | Event Name {click_id} | CLICK_ID | {click_id} |  |  | false | Click ID

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




