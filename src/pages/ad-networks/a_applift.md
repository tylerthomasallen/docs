## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/applift_lg-bdbcf02abab90b0343354dc04fb1ff42ac2b6a9e15c34aa7177e49a7ae7864d9-1509989161261.png)	***Applift***
https://www.applift.com/

Integration Status |  ***active***

###  Description
AppLift is a leading mobile adtech company that empowers mobile app advertisers to take control of every stage of app marketing lifecycle.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://tracking.applift.com/aff_lsr?transaction_id={transaction_id}&adv_sub={device_id} custom_event | http://events.applift.com/v1/events?source=branch&pub_reference_id={transaction_id}&event_ref_id={event_id}&event_name={event_name}&event_value={event_value}&post=1 PURCHASE | http://events.applift.com/v1/events?source=branch&pub_reference_id={transaction_id}&event_ref_id={event_id}&event_name={event_name}&event_value={purchase}&post=1 OPEN | http://events.applift.com/v1/events?source=branch&pub_reference_id={transaction_id}&event_ref_id={event_id}&event_name={event_name}&event_value={event_value}&post=1"}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{transaction_id} | CLICK_ID | {transaction_id} |  |  | false |  {device_id} | OS_DEVICE_ID |  |  |  | false |  {event_id} | EVENT_ID |  |  |  | false |  {event_name} | EVENT_NAME |  |  |  | false |  {event_value} | CUSTOM_LINK_MACRO | {event_value} |  |  | false |  {purchase} | PURCHASE_REVENUE |  |  |  | false | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
SECONDARY_PUBLISHER | {affiliate_id} CLICK_IDFA | {ios_ifa} CLICK_AAID | {unid}



