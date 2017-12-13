## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/aai_logo_med_trans_black-1509989746768.png)	***AdAction Interactive***
https://www.adaction.mobi/

Integration Status |  ***active***

###  Description
AdAction Interactive is the premier mobile app marketing ad network that delivers over 6 million monthly installs for elite agencies and Fortune 100 companies.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://tracking.adactioninteractive.com/aff_lsr?transaction_id={transaction_id}&security_token={client_security_token}
OPEN | http://tracking.adactioninteractive.com/aff_goal?a=lsr&goal_id={goal_id}&transaction_id={event_id}&security_token={client_security_token}
PURCHASE | http://tracking.adactioninteractive.com/aff_goal?a=lsr&goal_id={goal_id}&transaction_id={event_id}&security_token={client_security_token}
custom_event | http://tracking.adactioninteractive.com/aff_goal?a=lsr&goal_id={goal_id}&transaction_id={event_id}&security_token={client_security_token}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{transaction_id}
branch_parameter | CLICK_ID
link_macro | {transaction_id}
dashboard_label | 
webhook_template | null | false | null
{client_security_token}
branch_parameter | ACCOUNT_CREDENTIAL
link_macro | 
dashboard_label | Client Security Token
webhook_template | 
required | false | 
{goal_id}
branch_parameter | GOAL_ID
link_macro | 
dashboard_label | 
webhook_template | 
required | false | 
{event_id}
branch_parameter | EVENT_ID
link_macro | 
dashboard_label | 
webhook_template | 
required | false | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_IDFA
link_macro | {ios_ifa}
CLICK_AAID
link_macro | {android_id}
PLACEMENT
link_macro | {source}
SECONDARY_PUBLISHER
link_macro | {affiliate_id}
ANDROID_ID
link_macro | {google_aid}
CREATIVE_NAME
link_macro | {aff_sub5}



