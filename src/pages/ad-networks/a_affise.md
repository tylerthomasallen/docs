## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/affisee-1513141472946.png)	***Affise***
https://affise.com/

Integration Status |  ***active***

###  Description
Affise is a Traffic Tracking Platform for creating your own Affiliate Network. It supports Advertisers, Agencies, and Networks needing a customizable product to manage their direct publisher relationships.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://offers.wisebits.affise.com/postback?clickid={click_id}&ios_idfa={idfa}&android_id={aaid} OPEN | http://offers.wisebits.affise.com/postback?clickid={click_id}&ios_idfa={idfa}&android_id={aaid}&goal={event_name} PURCHASE | http://offers.wisebits.affise.com/postback?clickid={click_id}&ios_idfa={idfa}&android_id={aaid}&goal={event_name} custom_event | http://offers.wisebits.affise.com/postback?clickid={click_id}&ios_idfa={idfa}&android_id={aaid}&goal={event_name}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{click_id} | CLICK_ID | {click_id} |  |  | false | Click ID {idfa} | IDFA |  |  |  | false | IDFA {aaid} | AAID |  |  |  | false | AAID {event_name} | EVENT_NAME |  |  |  | false | Event Name

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




