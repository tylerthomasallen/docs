## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/manage_logo_trans_300x75-1505160375494.png)	***Manage***
https://www.manage.com/

Integration Status |  ***active***

###  Description
Manage, a leading mobile in-app advertising solution for brand and performance marketers

### Postbacks
Event | Postback
--- | ---
PURCHASE | https://t.manage.com/{MANAGE_EVENT_ID}?uh={click_id}&_uh_ifa={idfa}&_uh_gaid={gaid}&_uh_ip={device_ip}&txid={unix_conversion_timestamp}&tp=branch&can_claim={is_publisher_attributed}&_grev={revenue_amount} OPEN | https://t.manage.com/{MANAGE_EVENT_ID}?uh={click_id}&_uh_ifa={idfa}&_uh_gaid={gaid}&_uh_ip={device_ip}&txid={unix_conversion_timestamp}&tp=branch&can_claim={is_publisher_attributed} INSTALL | https://t.manage.com/{MANAGE_EVENT_ID}?uh={click_id}&_uh_ifa={idfa}&_uh_gaid={gaid}&_uh_ip={device_ip}&txid={unix_conversion_timestamp}&tp=branch&can_claim={is_publisher_attributed}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{MANAGE_EVENT_ID} | CUSTOM_EVENT_METADATA |  |  | <#if (user_data.os)! == \IOS\>iOS_Event_ID<#elseif (user_data.os)! == \ANDROID\>Android_Event_ID</#if> | false | null {click_id} | CLICK_ID | <click_id> |  |  | false |  {idfa} | IDFA |  |  |  | false |  {gaid} | AAID |  |  |  | false |  {device_ip} | IP_ADDRESS |  |  |  | false |  {unix_conversion_timestamp} | EVENT_TIMESTAMP |  |  |  | false |  {is_publisher_attributed} | IS_CLAIMABLE |  |  |  | false |  {revenue_amount} | PURCHASE_REVENUE |  |  |  | false | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




