## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/aai_logo_med_trans_black-1509989746768.png)	***AdAction Interactive***
https://www.adaction.mobi/

Integration Status |  ***active***

###  Description
AdAction Interactive is the premier mobile app marketing ad network that delivers over 6 million monthly installs for elite agencies and Fortune 100 companies.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://tracking.adactioninteractive.com/aff_lsr?transaction_id={transaction_id}&security_token={client_security_token} OPEN | http://tracking.adactioninteractive.com/aff_goal?a=lsr&goal_id={goal_id}&transaction_id={event_id}&security_token={client_security_token} PURCHASE | http://tracking.adactioninteractive.com/aff_goal?a=lsr&goal_id={goal_id}&transaction_id={event_id}&security_token={client_security_token} custom_event | http://tracking.adactioninteractive.com/aff_goal?a=lsr&goal_id={goal_id}&transaction_id={event_id}&security_token={client_security_token}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{transaction_id} | CLICK_ID | {transaction_id} |  | null | false | null {client_security_token} | ACCOUNT_CREDENTIAL |  | Client Security Token |  | false |  {goal_id} | GOAL_ID |  |  |  | false |  {event_id} | EVENT_ID |  |  |  | false | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_IDFA | {ios_ifa} CLICK_AAID | {android_id} PLACEMENT | {source} SECONDARY_PUBLISHER | {affiliate_id} ANDROID_ID | {google_aid} CREATIVE_NAME | {aff_sub5}



