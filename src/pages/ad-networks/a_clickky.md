## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/LogoClickky-1508351211926.png)	***Clickky***
https://clickky.biz/

Integration Status |  ***active***

###  Description
Ð¡lickky is an full-stack platform for advertisers and publishers, which offers programmatic, performance and video solutions. Currently, Clickky focuses on the developing of its own SSP and RTB Marketplace.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://www.cpactions.com/api/v1.0/clk/track/proxy/pingback?uid={clickid} OPEN | http://cpactions.com/api/v1.0/clk/track/pingback/event?event={event_token}&uid={clickid} PURCHASE | http://cpactions.com/api/v1.0/clk/track/pingback/event?event={event_token}&uid={clickid} custom_event | http://cpactions.com/api/v1.0/clk/track/pingback/event?event={event_token}&uid={clickid}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{clickid} | CLICK_ID | {clickid} |  |  | false | ClickID {event_token} | EVENT_NAME |  |  |  | false | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
SECONDARY_PUBLISHER | {source_id}



