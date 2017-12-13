## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/thetradedeskdmp-1502822492413.png)	***The Trade Desk***
https://www.thetradedesk.com/

Integration Status |  ***active***

###  Description
The Trade Desk powers the most sophisticated buyers in advertising technology. Founded by the pioneers of real-time bidding, The Trade Desk has become the fastest growing demand-side platform in the industry by offering agencies, aggregators, and their advertisers best-in-class technology to manage display, mobile, and video advertising campaigns

### Postbacks
Event | Postback
--- | ---
PURCHASE | https://insight.adsrvr.org/track/upapp?provider=branch&adv={advertiser_id}&upid={event_tracker_id}&ref={event_id}&client_ip={ip_address}&idfa={idfa}&gps_adid={gps_adid}&v={revenue_float}&vf={currency}&ios_event_tracker_id={ios_event_tracker_id}&and_event_tracker_id={and_event_tracker_id} INSTALL | https://insight.adsrvr.org/track/upapp?provider=branch&adv={advertiser_id}&upid={event_tracker_id}&ref={event_id}&client_ip={ip_address}&idfa={idfa}&gps_adid={gps_adid}&ios_event_tracker_id={ios_event_tracker_id}&and_event_tracker_id={and_event_tracker_id} OPEN | https://insight.adsrvr.org/track/upapp?provider=branch&adv={advertiser_id}&upid={event_tracker_id}&ref={event_id}&client_ip={ip_address}&idfa={idfa}&gps_adid={gps_adid}&ios_event_tracker_id={ios_event_tracker_id}&and_event_tracker_id={and_event_tracker_id} custom_event | https://insight.adsrvr.org/track/upapp?provider=branch&adv={advertiser_id}&upid={event_tracker_id}&ref={event_id}&client_ip={ip_address}&idfa={idfa}&gps_adid={gps_adid}&v={revenue_float}&vf={currency}&ios_event_tracker_id={ios_event_tracker_id}&and_event_tracker_id={and_event_tracker_id}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{advertiser_id} | ACCOUNT_CREDENTIAL |  | Advertiser ID |  | false |  {event_tracker_id} | CUSTOM_EVENT_METADATA |  |  | <#if (user_data.os)! == \IOS\>${ad_network.credentials.ios_event_tracker_id}<#elseif (user_data.os)! == \ANDROID\>${ad_network.credentials.and_event_tracker_id}</#if> | false | <#if (user_data.os)! == \IOS\>${ad_network.credentials.ios_event_tracker_id}<#elseif (user_data.os)! == \ANDROID\>${ad_network.credentials.and_event_tracker_id}</#if> {event_id} | GOAL_ID |  |  | null | false | null {ip_address} | IP_ADDRESS |  |  |  | false |  {idfa} | IDFA |  |  |  | false |  {gps_adid} | AAID |  |  |  | false |  {revenue_float} | PURCHASE_REVENUE |  |  |  | false |  {currency} | PURCHASE_CURRENCY |  |  |  | false |  {ios_event_tracker_id} | ACCOUNT_CREDENTIAL |  | iOS Event Tracker ID | null | false | null {and_event_tracker_id} | ACCOUNT_CREDENTIAL |  | Android Event Tracker ID | null | false | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_IDFA | {idfa} CLICK_AAID | {gps_adid}



