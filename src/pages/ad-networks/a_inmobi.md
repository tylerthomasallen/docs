## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/logo-color-1492715152194.png)	***InMobi***
http://inmobi.com

Integration Status |  ***active***

###  Description
At InMobi, our vision is to improve users' lives by enabling them to get the most value from mobile devices.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://advertiser.inmobiapis.com/tpce/v1/events/download?ida={ida}&gpId={gpId}&um5={um5}&o1={o1}&uidMap={uidMap}&impId={impId}&isLastClick={isLastClick}&attributed={attributed}&propertyId={propertyId}&trackingPartner=branch&requestId={requestId}&eventName={eventName}&eventTime={eventTime}&purchaseTime={purchaseTime}&purchaseValue={purchaseValue}&purchaseCurrency={purchaseCurrency}&userAgent={userAgent}&ipAddress={ipAddress}&dnt={dnt}&ios_pid={ios_pid}&and_pid={and_pid} PURCHASE | http://advertiser.inmobiapis.com/tpce/v1/events/purchase?ida={ida}&gpId={gpId}&um5={um5}&o1={o1}&uidMap={uidMap}&impId={impId}&isLastClick={isLastClick}&attributed={attributed}&propertyId={propertyId}&trackingPartner=branch&requestId={requestId}&eventName={eventName}&eventTime={eventTime}&purchaseTime={purchaseTime}&purchaseValue={purchaseValue}&purchaseCurrency={purchaseCurrency}&userAgent={userAgent}&ipAddress={ipAddress}&dnt={dnt}&ios_pid={ios_pid}&and_pid={and_pid} custom_event | http://advertiser.inmobiapis.com/tpce/v1/events/custom?ida={ida}&gpId={gpId}&um5={um5}&o1={o1}&uidMap={uidMap}&impId={impId}&isLastClick={isLastClick}&attributed={attributed}&propertyId={propertyId}&trackingPartner=branch&requestId={requestId}&eventName={eventName}&eventTime={eventTime}&purchaseTime={purchaseTime}&purchaseValue={purchaseValue}&purchaseCurrency={purchaseCurrency}&userAgent={userAgent}&ipAddress={ipAddress}&dnt={dnt}&ios_pid={ios_pid}&and_pid={and_pid}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{ida} | IDFA | {ida} |  | null | false | The iOS identifier for the device. Will be empty for Android postbacks. {gpId} | AAID | {gpId} |  | null | false | Google play advertiser ID. Will be empty for iOS postbacks. {um5} | AAID_MD5 |  |  | null | false | md5 of ANDROID_ID. Will be empty for iOS postbacks. {o1} | IDFA_SHA1 |  |  | null | false | sha1 of ANDROID_ID. Will be empty for iOS postbacks. {uidMap} | OS_DEVICE_ID |  |  | null | false | For POST request; JSON map of device/advertising IDs {impId} | CLICK_ID | {impId} |  | null | false | Click identifier sent by InMobi on click. {isLastClick} | CUSTOM_EVENT_METADATA |  |  | ${(isLastClick)!} | false | 1 or 0. Was impId last click impid or last install impId. {attributed} | IS_CLAIMABLE |  |  | null | false | Contains values â€œ1â€ and â€œ0â€. â€œ1â€ for installs attributed to InMobi. â€œ0â€ for installs not\n\nattributed to InMobi (organic and other channels). Same for both iOS and Android. {propertyId} | CUSTOM_EVENT_METADATA |  |  | <#if (user_data.os)! == \IOS\>${ad_network.credentials.ios_pid}<#elseif (user_data.os)! == \ANDROID\>${ad_network.credentials.and_pid}</#if> | false | <#if (user_data.os)! == \IOS\>${ad_network.credentials.propertyId?keep_before(\/\)}<#elseif (user_data.os)! == \ANDROID\>${ad_network.credentials.propertyId?keep_after(\/\)}</#if> {requestId} | EVENT_ID |  |  | null | false | This is a unique ID for every purchase. Used by InMobi for de-duplication in case of system\n\nerrors causing repeated purchase pingbacks. {eventName} | EVENT_NAME |  |  | null | false | Custom event name {eventTime} | EVENT_TIMESTAMP |  |  | null | false | Timestamp in milliseconds. {purchaseTime} | EVENT_TIMESTAMP |  |  | null | false |  Timestamp in epoch {purchaseValue} | PURCHASE_REVENUE |  |  | null | false | This is the actual IAP value. {purchaseCurrency} | PURCHASE_CURRENCY |  |  | null | false | This is the 3 character currency in which the purchase value is sent across. {userAgent} | USER_AGENT |  |  | ${(userAgent)!} | false | UserAgent of the device when the app was opened first time. {ipAddress} | IP_ADDRESS |  |  | null | false | IP address of the device when the app was opened first time. {dnt} | LIMIT_AD_TRACKING_ENABLED |  |  | null | false | Only for iOS to check if the user has switched on Limit Ad Tracking option on the device. Will be\n\nblank for android. {ios_pid} | ACCOUNT_CREDENTIAL |  | iOS Property ID  | null | false |  {and_pid} | ACCOUNT_CREDENTIAL |  | Android Property ID | null | false | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_IDFA | {ida} CLICK_AAID | {gpId}



