## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/feedmob-logo_highres-teal_2-1510161910168.png)	***FeedMob***
http://feedmob.com/

Integration Status |  ***in-review***

###  Description
FeedMob is a performance first, mobile advertising platform that specializes in honest, post-install KPI driven mobile user acquisition at scale.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://tracking.feedmob.com/api/v1/vendor/conversion?CONVERSION_ID={click_id}&FEEDMOB_PUBLISHER_ID={FEEDMOB_PUBLISHER_ID}&APP_ID={secondary_publisher}&ACTION=I&FEEDMOB_COUNTRY={country}&DEVICE_PLATFORM_ID={platform_id}&FEEDMOB_DEVICE_IP={client_ip}&FEEDMOB_DEVICE_MODEL={device_model}&FEEDMOB_INSTALL_AT={event_timestamp}&FEEDMOB_TRACKING_ID=54a14c9b6c47&FEEDMOB_CONVERSION_AT={event_timestamp}&FEEDMOB_USER_AGENT={user_agent}&FEEDMOB_ATTRIBUTED={is_attributed}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{click_id} | CLICK_ID | {click_id} |  |  | false |  {FEEDMOB_PUBLISHER_ID} | ACCOUNT_CREDENTIAL |  | Publisher ID |  | false |  {secondary_publisher} | OS_PACKAGE_NAME |  |  |  | false |  {country} | COUNTRY |  |  |  | false |  {platform_id} | OS_DEVICE_ID |  |  |  | false |  {client_ip} | IP_ADDRESS |  |  |  | false |  {device_model} | DEVICE_MODEL |  |  |  | false |  {event_timestamp} | EVENT_TIMESTAMP |  |  |  | false |  {event_timestamp} | EVENT_TIMESTAMP |  |  |  | false |  {user_agent} | USER_AGENT |  |  |  | false |  {is_attributed} | IS_CLAIMABLE |  |  |  | false | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




