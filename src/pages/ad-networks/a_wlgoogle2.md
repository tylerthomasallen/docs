## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/goog-DONOTUSE-1505330517903.png)	***WLGoogle2***
http://google.com?everheardofit

Integration Status |  ***submitted***

###  Description
Using this to confirm how Google postbacks are uploaded via ad reviewer. Because Google has a custom config I can't just use the Google page.

### Postbacks
Event | Postback
--- | ---
PURCHASE | https://www.googleadservices.com/pagead/conversion/{account_conversion_id}/?label={goalid}&rdid={advertising_id}&idtype={idtype}&lat={lat}&bundleid={bundleID}&appversion={appversion}&osversion={osversion}&sdkversion=branch-sdk-{sdkversion}&value={revenue}&currency_code={currency}&gclid={gclid} custom_event | https://www.googleadservices.com/pagead/conversion/{account_conversion_id}/?label={goalid}&rdid={advertising_id}&idtype={idtype}&lat={lat}&bundleid={bundleID}&appversion={appversion}&osversion={osversion}&sdkversion=branch-sdk-{sdkversion}&value={revenue}&currency_code={currency}&gclid={gclid}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{account_conversion_id} | ACCOUNT_CREDENTIAL |  | Purchase or Custom Event Conversion ID |  | false |  {goalid} | GOAL_ID |  |  |  | false |  {advertising_id} | OS_DEVICE_ID |  |  |  | false |  {idtype} | CUSTOM_EVENT_METADATA |  |  | <#if (user_data.os)! == \IOS\ && (user_data.idfa)! != \\>idfa<#elseif (user_data.os)! == \IOS\>idfv<#elseif (user_data.os)! == \ANDROID\>advertisingid</#if> | false |  {lat} | LIMIT_AD_TRACKING_ENABLED |  |  |  | false |  {bundleID} | OS_PACKAGE_NAME |  |  |  | false |  {appversion} | APP_VERSION |  |  |  | false |  {osversion} | OS_VERSION |  |  |  | false |  {sdkversion} | CUSTOM_EVENT_METADATA |  |  | ${(user_data.sdk_version)!} | false |  {revenue} | PURCHASE_REVENUE |  |  |  | false |  {currency} | PURCHASE_CURRENCY |  |  |  | false |  {gclid} | CUSTOM_EVENT_METADATA |  |  | ${(last_attributed_touch_data.gclid)!} | false | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




