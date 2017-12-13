## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/ad4screen-1504724050417.png)	***Ad4Screen***
http://www.ad4screen.com/en/

Integration Status |  ***active***

###  Description
Ad4Screen is a marketing and advertising pioneer on Mobile Net (Smartphones, Tabletsâ€¦). Founded in 2010 and crowdfunding by OTC Agregator, a big French Insurance Company (MMA) and Web contractors (Business Interactive Founders as WCube, Betclic, Boncoin or Poweo), Ad4Screen helps companies to set up performant Mobile advertising campaigns and to increase App User engagement, retention and conversion.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://bo.ad4screen.a4.tf/postback?clickid={sub1}&ios_idfa={ios_idfa}&android_id={android_id} OPEN | http://bo.ad4screen.a4.tf/postback?clickid={sub1}&ios_idfa={ios_idfa}&android_id={android_id}&status=5&goal=2 custom_event | http://bo.ad4screen.a4.tf/postback?sub1={sub1}&ios_idfa={ios_idfa}&android_id={android_id}&status=5&goal=3"}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{sub1} | CLICK_ID | {sub1} |  | null | false | null {ios_idfa} | IDFA |  |  | null | false | null {android_id} | ANDROID_ID |  |  | null | false | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_AAID | {sub4} CLICK_IDFA | {sub4}



