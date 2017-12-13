## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/logo_propellerads32-1508798759717.png)	***Propeller Ads***
https://propellerads.com/

Integration Status |  ***active***

###  Description
Propeller Ads is a full and self-service advertising network providing comprehensive and industry leading ad-serving and optimization technologies for online marketers and web publishers.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://ad.propellerads.com/conversion.php?aid={aid}&pid=&tid={tid}&visitor_id={SUBID}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{aid} | ACCOUNT_CREDENTIAL |  | Advertiser ID |  | false |  {tid} | ACCOUNT_CREDENTIAL |  | Tracker ID |  | false |  {SUBID} | CLICK_ID | ${SUBID} |  |  | false | Click ID

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




