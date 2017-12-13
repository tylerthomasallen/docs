## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/my_com-1501129417628.png)	***myTarget***
https://target.my.com

Integration Status |  ***in-review***

###  Description
myTarget is an advertising platform provided by Mail.Ru Group. It includes all the major social networks on the Runet (Russian-speaking Internet) and services that reach more than 140 million people. myTarget mobile advertising will help you find your customers. As the largest source of mobile traffic on the Runet (Russian-speaking Internet), myTarget covers more than 90 million installed apps.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://analytics.partner.com?click_id={click_id}&idfa={idfa}&gaid={gaid} OPEN | https://analytics.partner.com?click_id={click_id}&idfa={idfa}&gaid={gaid} PURCHASE | https://analytics.partner.com?click_id={click_id}&idfa={idfa}&gaid={gaid} custom_event | https://analytics.partner.com?click_id={click_id}&idfa={idfa}&gaid={gaid}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{click_id} | CLICK_ID | {click_id} |  |  | false |  {idfa} | IDFA |  |  |  | false |  {gaid} | AAID |  |  |  | false | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_AAID | {gaid} CLICK_IDFA | {idfa} S2S | true



