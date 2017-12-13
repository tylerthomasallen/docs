## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/CT_black-logo-1499387856654.png)	***CleverTap***
https://clevertap.com/

Integration Status |  ***in-review***

###  Description
CleverTap's industry-first features such as live-user segments help you uncover key insights and drive users to perform the next best action.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://api.clevertap.com/branch?account_id={account_id}&account_token={account_token}&account_passcode={account_passcode}&event={event}&event_timestamp={event_timestamp}&identity={identity}&os={os}&os_version={os_version}&ip={ip}&utm_campaign={utm_campaign}&utm_source={utm_source}&utm_source={utm_medium}&reinstall={reinstall}&google_advertising_id={google_advertising_id}&idfa={idfa} OPEN | https://api.clevertap.com/branch?account_id={account_id}&account_token={account_token}&account_passcode={account_passcode}&event={event}&event_timestamp={event_timestamp}&identity={identity}&os={os}&os_version={os_version}&ip={ip}&utm_campaign={utm_campaign}&utm_source={utm_source}&utm_source={utm_medium}&reinstall={reinstall}&google_advertising_id={google_advertising_id}&idfa={idfa} PURCHASE | https://api.clevertap.com/branch?account_id={account_id}&account_token={account_token}&account_passcode={account_passcode}&event={event}&event_timestamp={event_timestamp}&identity={identity}&os={os}&os_version={os_version}&ip={ip}&utm_campaign={utm_campaign}&utm_source={utm_source}&utm_source={utm_medium}&reinstall={reinstall}&google_advertising_id={google_advertising_id}&idfa={idfa} custom_event | https://api.clevertap.com/branch?account_id={account_id}&account_token={account_token}&account_passcode={account_passcode}&event={event}&event_timestamp={event_timestamp}&identity={identity}&os={os}&os_version={os_version}&ip={ip}&utm_campaign={utm_campaign}&utm_source={utm_source}&utm_source={utm_medium}&reinstall={reinstall}&google_advertising_id={google_advertising_id}&idfa={idfa}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{account_id} | ACCOUNT_CREDENTIAL |  | CleverTap Account ID |  | false | CleverTap Account ID {account_token} | ACCOUNT_CREDENTIAL |  | CleverTap Token |  | false | CleverTap Token {account_passcode} | ACCOUNT_CREDENTIAL |  | CleverTap Passcode |  | false | CleverTap Passcode {event} | EVENT_NAME |  |  |  | false | Install event type {event_timestamp} | EVENT_TIMESTAMP |  |  |  | false | Event Timestamp {identity} | CUSTOM_EVENT_METADATA |  |  | ${(custom_data.identity)!} | false | User Identity {os} | OS |  |  |  | false | OS {os_version} | OS_VERSION |  |  |  | false | OS Version {ip} | IP_ADDRESS |  |  |  | false | IP Adress {utm_campaign} | CUSTOM_LINK_MACRO | {utm_campaign} |  |  | false |  {utm_source} | CUSTOM_LINK_MACRO | {utm_source} |  |  | false |  {utm_medium} | CUSTOM_LINK_MACRO | {utm_medium} |  |  | false |  {reinstall} | CUSTOM_LINK_MACRO | {reinstall} |  |  | false |  {google_advertising_id} | AAID |  |  |  | false |  {idfa} | IDFA |  |  |  | false | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_AAID | {google_advertising_id} CLICK_IDFA | {idfa}



