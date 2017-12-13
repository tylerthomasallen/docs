## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/youappi-1502235001895.png)	***YouAppi***
http://www.youappi.com/

Integration Status |  ***active***

###  Description
YouAppi is a fully managed solution for premium mobile brands, providing one single point to streamline their mobile media buying. YouAppiâ€™s OneRun platform combines the power of machine learning with our proprietary predictive algorithms, and cohort technology, to analyze the mobile content consumption patterns of over 1.5B users, converting data into profitable users. YouAppi was founded in late 2011 with headquarters in San Francisco and offices in New York, Berlin, London, Beijing, Indonesia, Tokyo, Korea, Russia and Israel. For more information, please visit www.YouAppi.com.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://service.youappi.com/tracking/report?params={params}&trackertoken={trackertoken}&click_ts={click_ts}&install_ts={install_ts}install_ip={install_ip}&deviceadid={deviceadid}&deviceidfa={deviceidfa}&country={country}&bundle_id={bundle_id}&google_ref=youappi_referrer&user_agent={user_agent}&tracker=branch custom_event | https://service.youappi.com/tracking/event?params={params}&trackertoken={trackertoken}&eventid={eventid}&eventvalue={eventvalue}&deviceadid={deviceadid}&deviceidfa={deviceidfa}&click_ts={click_ts}&install_ts={install_ts}&event_ts={event_ts}&event_ip={event_ip}&country={country}&bundle_id={bundle_id}&google_ref=youappi_referrer&user_agent={user_agent}&tracker=branch"}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{params} | CLICK_ID | <params> |  |  | false | ClickID {trackertoken} | CUSTOM_LINK_MACRO | <trackertoken> |  | null | false | null {click_ts} | EVENT_TIMESTAMP |  |  |  | false |  {install_ts} | EVENT_TIMESTAMP |  |  |  | false |  {install_ip} | IP_ADDRESS |  |  |  | false |  {deviceadid} | AAID |  |  |  | false |  {deviceidfa} | IDFA |  |  |  | false |  {country} | COUNTRY |  |  |  | false |  {bundle_id} | OS_PACKAGE_NAME |  |  |  | false |  {user_agent} | USER_AGENT |  |  |  | false |  {eventid} | EVENT_ID |  |  | null | false | null {eventvalue} | PURCHASE_REVENUE |  |  |  | false |  {event_ts} | EVENT_TIMESTAMP |  |  |  | false |  {event_ip} | IP_ADDRESS |  |  |  | false | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_AAID | <ANDROID_ID> CLICK_IDFA | <IDFA>



