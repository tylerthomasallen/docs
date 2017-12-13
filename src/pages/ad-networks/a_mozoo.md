## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/Mozoo-Performance-1492710482008-1498430203032.png)	***Mozoo***
http://www.surikate.com/

Integration Status |  ***active***

###  Description
Mozoo helps brands, retailers and developers acquire and activate mobile customers, at scale

### Postbacks
Event | Postback
--- | ---
INSTALL | http://tracking.surikate.com/aff_lsr?offer_id={offer_id}&transaction_id={CLICK_ID} OPEN | http://tracking.surikate.com/aff_goal?a=lsr&offer_id={offer_id}&transaction_id={CLICK_ID}&goal_id={goal_id} custom_event | http://tracking.surikate.com/aff_goal?a=lsr&offer_id={offer_id}&transaction_id={CLICK_ID}&goal_id={goal_id}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{offer_id} | CUSTOM_LINK_MACRO | {offer_id} |  | ${(offer_id)!} | false | Offer ID  {CLICK_ID} | CLICK_ID | {CLICK_ID} |  | null | false | ClickID {goal_id} | CUSTOM_LINK_MACRO | {goal_id} |  | null | false | Goal ID

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




