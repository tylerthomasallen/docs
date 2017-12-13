## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/geistMBlackRedLogo-1498181264812.png)	***GeistM***
http://geistm.com

Integration Status |  ***active***

###  Description
The #1 MarTech Platform

### Postbacks
Event | Postback
--- | ---
INSTALL | https://i.geistm.com/x/{pixel_name}?gdpid={gdpid}&utm_campaign={utm_campaign}&campaignId={campaignId} PURCHASE | https://i.geistm.com/x/{pixel_name}?gdpid={gdpid}&utm_campaign={utm_campaign}&campaignId={campaignId} custom_event | https://i.geistm.com/x/{pixel_name}?gdpid={gdpid}&utm_campaign={utm_campaign}&campaignId={campaignId} OPEN | https://i.geistm.com/x/{pixel_name}?gdpid={gdpid}&utm_campaign={utm_campaign}&campaignId={campaignId}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{pixel_name} | CUSTOM_LINK_MACRO | {pixel_name} |  |  | false | Pixels are declared in Blackfire as part of the client profile. {gdpid} | CUSTOM_LINK_MACRO | {gdpid} |  |  | false | The id of the user/browser that triggered the event.  {utm_campaign} | CUSTOM_LINK_MACRO | {utm_campaign} |  |  | false | The name of a campaign declared in Blackfire and relevant to this event {campaignId} | CUSTOM_LINK_MACRO | {campaignId} |  | null | false | CampaingID

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




