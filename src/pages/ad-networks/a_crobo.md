## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/crobo-1500662980708.png)	***crobo***
https://www.crobo.com/

Integration Status |  ***active***

###  Description
crobo is a unique blend of highly knowledgeable mobile experts, an extensive performance network as well as media buying and planning capabilities. Their longstanding experience in the industry makes them a trusted partner in mobile performance marketing for advertisers worldwide. crobo has developed the unique CIS technology (crobo Intelligence System), which is a platform developed to monitor media behavior and user activity levels, and optimize it through predictive targeting, audience segmentation and app-store trend analytics. The team consists of seventy international and highly motivated professionals from all around the world based in Berlin and San Francisco.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://tracking.crobo.com/aff_lsr?transaction_id={transaction_id}&adv_sub={device_ip}&adv_sub2={ios_ifa}&adv_sub3={google_advertiser_id}&adv_sub4={country}&adv_sub5={event_name} custom_event | http://tracking.crobo.com/aff_goal?a=lsr&transaction_id={transaction_id}&adv_sub={device_ip}&adv_sub2={ios_ifa}&adv_sub3={google_advertiser_id}&adv_sub4={country}&adv_sub5={event_name} OPEN | http://tracking.crobo.com/aff_goal?a=lsr&transaction_id={transaction_id}&adv_sub={device_ip}&adv_sub2={ios_ifa}&adv_sub3={google_advertiser_id}&adv_sub4={country}&adv_sub5={event_name}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{transaction_id} | CLICK_ID | {transaction_id} |  |  | false |  {device_ip} | IP_ADDRESS |  |  | null | false | null {ios_ifa} | IDFA |  |  | null | false | null {google_advertiser_id} | AAID |  |  | null | false | null {country} | COUNTRY |  |  | null | false | null {event_name} | EVENT_NAME |  |  | null | false | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
SECONDARY_PUBLISHER | {affiliate_id}



