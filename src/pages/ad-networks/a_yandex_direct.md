## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/logotype-yandex-direct-1-380x233-1507587040365.png)	***Yandex Direct***
https://direct.yandex.ru/

Integration Status |  ***in-review***

###  Description
Ð¯Ð½Ð´ÐµÐºÑ.Ð”Ð¸Ñ€ÐµÐºÑ‚ â€” ÑÑ‚Ð¾ ÑÐ¸ÑÑ‚ÐµÐ¼Ð° Ñ€Ð°Ð·Ð¼ÐµÑ‰ÐµÐ½Ð¸Ñ Ð¿Ð¾Ð¸ÑÐºÐ¾Ð²Ð¾Ð¹ Ð¸ Ñ‚ÐµÐ¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ ÐºÐ¾Ð½Ñ‚ÐµÐºÑÑ‚Ð½Ð¾Ð¹ Ñ€ÐµÐºÐ»Ð°Ð¼Ñ‹. ÐžÐ½Ð° Ð¿Ð¾ÐºÐ°Ð·Ñ‹Ð²Ð°ÐµÑ‚ Ð²Ð°ÑˆÐ¸ Ð¾Ð±ÑŠÑÐ²Ð»ÐµÐ½Ð¸Ñ Ð»ÑŽÐ´ÑÐ¼, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ ÑƒÐ¶Ðµ Ð¸Ñ‰ÑƒÑ‚ Ð¿Ð¾Ñ…Ð¾Ð¶Ð¸Ðµ Ñ‚Ð¾Ð²Ð°Ñ€Ñ‹ Ð¸Ð»Ð¸ ÑƒÑÐ»ÑƒÐ³Ð¸ Ð½Ð° Ð¯Ð½Ð´ÐµÐºÑÐµ Ð¸ Ñ‚Ñ‹ÑÑÑ‡Ð°Ñ… Ð´Ñ€ÑƒÐ³Ð¸Ñ… ÑÐ°Ð¹Ñ‚Ð¾Ð².

### Postbacks
Event | Postback
--- | ---
INSTALL | http://postback.yandexadexchange.net/postback?reqid={LOGID}&google-ad-id={google_ad_id}&android-id={android_id}&idfa={ios_ifa}&package-name={package_name}&app-client-ip={session_device_ip}&[app-user-agent={session_user_agent}]"}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{LOGID} | CLICK_ID | {LOGID} |  | null | false | null {google_ad_id} | AAID |  |  | null | false | null {android_id} | ANDROID_ID |  |  | null | false | null {ios_ifa} | IDFA |  |  | null | false | null {package_name} | APP_NAME |  |  | null | false | null {session_device_ip} | IP_ADDRESS |  |  | null | false | null {session_user_agent} | USER_AGENT |  |  | null | false | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




