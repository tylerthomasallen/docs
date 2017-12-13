## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/101621-d00d811d71b53bd93856f5358489baca-1492635797381.png)	***IronSource***
http://www.ironsrc.com

Integration Status |  ***active***

###  Description
ironSource builds discovery, engagement, monetization and analytics tools for app developers, device manufacturers, mobile carriers, and advertisers.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://postback.supersonicads.com/userActivity/install?src=branch&ifa={ifa}&idfa={DeviceIds[IFA]}&aaid={DeviceIds[AID]}&lat={lat}&appId={appId}&advertiserId={advertiserId}&password={password}&dynamicParameter={dynamicParameter} OPEN | http://postback.supersonicads.com/userActivity/appOpen?src=branch&ifa={ifa}&idfa={DeviceIds[IFA]}&aaid={DeviceIds[AID]}&lat={lat}&appId={appId}&advertiserId={advertiserId}&password={password}&dynamicParameter={dynamicParameter} custom_event | http://postback.supersonicads.com/userActivity/inAppPurchase?src=branch&ifa={ifa}&idfa={DeviceIds[IFA]}&aaid={DeviceIds[AID]}&lat={lat}&appId={appId}&advertiserId={advertiserId}&password={password}&dynamicParameter={dynamicParameter}&currency={currency}&amount={amount}&numOfItems={numOfItems}&itemName={itemName}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{ifa} | OS_DEVICE_ID |  |  | null | false | IDFA or GAID of the install device {DeviceIds[IFA]} | IDFA |  |  | null | false | Apple's device ID for advertiser {DeviceIds[AID]} | AAID |  |  | null | false | Android's device ID for advertiser {lat} | LIMIT_AD_TRACKING_ENABLED |  |  | null | false | Limit Ad Tracking status of the install device {appId} | OS_PACKAGE_NAME |  |  | null | false | bundle ID of the installed app {advertiserId} | ACCOUNT_CREDENTIAL |  | Advertiser ID | null | false | Advertiser ID provided in the UI {password} | ACCOUNT_CREDENTIAL |  | Password | null | false | Password provided in the UI {dynamicParameter} | CLICK_ID | {DynamicParameter} |  | null | false | click_id value from the Click {currency} | PURCHASE_CURRENCY |  |  | null | false | Currency {amount} | PURCHASE_REVENUE |  |  | null | false | Purchase Amount {numOfItems} | CUSTOM_EVENT_METADATA |  |  | ${(event.custom_data.numOfItems)!} | false |  {itemName} | CUSTOM_EVENT_METADATA |  |  | ${(event.custom_data.itemName)!} | false | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
SECONDARY_PUBLISHER | ${ApplicationId}_{SubID} CLICK_AAID | {DeviceIds[AID]} CLICK_IDFA | {DeviceIds[IFA]}



