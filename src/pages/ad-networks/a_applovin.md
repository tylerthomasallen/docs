## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/u3eoOtkBNGx7x4W6nKLQSQ-AppLovin_Logo_Blue_White_Rectangle_WEB-1492637758109.png)	***Applovin***
https://www.applovin.com/

Integration Status |  ***active***

###  Description
AppLovin's marketing platform provides marketing automation and analytics for brands that want to reach new consumers on mobile.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://rt.applovin.com/pix?event=install&sub_event={sub_event}&package_name={package_name}&sdk_key={sdk_key}&platform={platform}&idfa={IDFA}&did={DID}&isclaimable={isclaimable}&dnt={dnt} OPEN | http://rt.applovin.com/pix?event=landing&sub_event={sub_event}&package_name={package_name}&sdk_key={sdk_key}&platform={platform}&idfa={IDFA}&did={DID}&isclaimable={isclaimable}&dnt={dnt}&revenue={revenue}&currency_code={currency_code} custom_event | http://rt.applovin.com/pix?event=checkout&sub_event={sub_event}&package_name={package_name}&sdk_key={sdk_key}&platform={platform}&idfa={IDFA}&did={DID}&isclaimable={isclaimable}&dnt={dnt}&revenue={revenue}&currency_code={currency_code} PURCHASE | http://rt.applovin.com/pix?event=checkout&sub_event={sub_event}&package_name={package_name}&sdk_key={sdk_key}&platform={platform}&idfa={IDFA}&did={DID}&isclaimable={isclaimable}&dnt={dnt}&revenue={revenue}&currency_code={currency_code}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{sub_event} | EVENT_NAME |  |  | null | false | Event Name {package_name} | CUSTOM_EVENT_METADATA |  |  | <@loop data=app.app_bundles val=\bundle\><#if user_data.os == bundle.os><#if bundle.os==\ANDROID\>${(bundle.android.package_name)!}<#elseif bundle.os == \IOS\>${(bundle.ios.bundle_id)!}</#if><@break/></#if></@loop> | false | Package_name / bundle id\ni.e. com.AppLovin.test {sdk_key} | ACCOUNT_CREDENTIAL |  | SDK Key | null | false | From account {platform} | OS |  |  | null | false | ios or android {IDFA} | OS_DEVICE_ID |  |  | null | false | ios_ifa or google_android_id {DID} | CLICK_ID | {DID} |  | null | false | applovin_id\nWe will pass this to you in your tracking link {isclaimable} | IS_CLAIMABLE |  |  | null | false | is_attributed_to_applovin\n1 or true = user will be claimed by applovin {dnt} | LIMIT_AD_TRACKING_ENABLED |  |  | null | false | is_ad_tracking_enabled\n1 or true = user will not be tracked\ndefault to false if unavailable {revenue} | PURCHASE_REVENUE |  |  | null | false | Revenue {currency_code} | PURCHASE_CURRENCY |  |  | null | false | Currency

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
S2S | true CLICK_AAID | {IDFA} CLICK_IDFA | {IDFA}



