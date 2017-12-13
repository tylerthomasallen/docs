## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/origin_08da80a1e1be4275-1508530733424.png)	***Adcash***
https://adcash.com

Integration Status |  ***active***

###  Description
Self-service or managed, advertiser or publisher, the Adcash ad network is focused on one aim: your success. Join for free today and maximize your earnings!

### Postbacks
Event | Postback
--- | ---
INSTALL | http://www.pixelhere.com/et/event.php?type=Installation&advertiser={advertiser}&cid={clickid}&zone_id={zoneid}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{advertiser} | ACCOUNT_CREDENTIAL |  | Advertiser ID |  | false | Advertiser ID {clickid} | CLICK_ID | [clickid] |  |  | false | Click ID {zoneid} | SECONDARY_PUBLISHER | [zoneid] |  | null | false | Zone ID

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




