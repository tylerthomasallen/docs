## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/a4g-logo-1493239709871.png)	***A4G***
http://a4g.com

Integration Status |  ***active***

###  Description
A4G is your network of choice specialized in browser and in app advertising. A4G gives you the option to advertise on a cpc, cpm and cpa basis

### Postbacks
Event | Postback
--- | ---
INSTALL | https://ads.ad4game.com/www/delivery/ti.php?trackerid={trackerid}&sid={servertracking} OPEN | https://ads.ad4game.com/www/delivery/ti.php?trackerid={trackerid}&sid={servertracking} custom_event | https://ads.ad4game.com/www/delivery/ti.php?trackerid={trackerid}&sid={servertracking} PURCHASE | https://ads.ad4game.com/www/delivery/ti.php?trackerid={trackerid}&sid={servertracking}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{trackerid} | CAMPAIGN_ID | {trackerid} |  | null | false | unique ID assigned to the campaign on our platform. {servertracking} | CLICK_ID | {servertracking} |  | null | false | ClickID

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




