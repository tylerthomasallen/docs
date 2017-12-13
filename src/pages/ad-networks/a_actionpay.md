## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/unnamed-1502390560857.png)	***Actionpay***
https://actionpay.net/ru-en/?

Integration Status |  ***active***

###  Description
Actionpay is a global pay per action company that focuses on growing revenue for advertisers and publishers. Our technology exceeds industry standards. Actionpay creates a marketplace for optimal delivery of quality offers and traffic by partnering with valuable advertisers and top performing publishers.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://apypx.com/partner/branch/?apclick={click_id}&apsource={source_id}&apid={device_id}&advsub1={user_agent}&advsub2={os_version}&advsub3={app_version}&advsub4={country} custom_event | http://apypx.com/partner/branch/?apclick={click_id}&apsource={source_id}&apid={device_id}_{transaction_id}&price={purchase_amount}&event={apoffer}_{os}_{event_name}&advsub1={user_agent}&advsub2={os_version}&advsub3={app_version}&advsub4={country}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{click_id} | CLICK_ID | {click_id} |  |  | false |  {source_id} | CUSTOM_LINK_MACRO | {source_id} |  |  | false |  {device_id} | OS_DEVICE_ID |  |  |  | false |  {user_agent} | USER_AGENT |  |  |  | false |  {os_version} | OS_VERSION |  |  |  | false |  {app_version} | APP_VERSION |  |  |  | false |  {country} | COUNTRY |  |  |  | false |  {transaction_id} | EVENT_ID |  |  |  | false |  {purchase_amount} | PURCHASE_REVENUE |  |  |  | false |  {apoffer} | CUSTOM_LINK_MACRO | {apoffer} |  |  | false |  {os} | OS |  |  |  | false |  {event_name} | EVENT_NAME |  |  |  | false | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




