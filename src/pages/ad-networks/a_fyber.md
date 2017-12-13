## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/fyber-logo-1493132211689.png)	***Fyber***
https://www.fyber.com/

Integration Status |  ***active***

###  Description
We solve the business challenge faced by freemium app and game developers, generating sustainable revenue streams through ad monetization.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://service.sponsorpay.com/installs/v2?appid={appid}&answer_received=0&ip={ip}&subid={subid}&google_ad_id={google_ad_id}&google_ad_id_limited_tracking_enabled={google_ad_id_limited_tracking_enabled}&apple_idfa={apple_idfa}&apple_idfa_tracking_enabled={apple_idfa_tracking_enabled} OPEN | http://service.sponsorpay.com/installs/v2?appid={appid}&answer_received=0&ip={ip}&subid={subid}&google_ad_id={google_ad_id}&google_ad_id_limited_tracking_enabled={google_ad_id_limited_tracking_enabled}&apple_idfa={apple_idfa}&apple_idfa_tracking_enabled={apple_idfa_tracking_enabled}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{appid} | ACCOUNT_CREDENTIAL |  | Application ID | null | false | This is the AppID that you have obtained from the campaign details in the Fyber advertiser control panel or has been given to you by your account manager.\t {ip} | IP_ADDRESS |  |  | null | false | IP address of the user (i.e. the external address of the device) {subid} | CLICK_ID | {subid} |  | null | false | click id that was passed in the click url.  {google_ad_id} | AAID | {google_ad_id} |  | null | false | AAID {google_ad_id_limited_tracking_enabled} | LIMIT_AD_TRACKING_ENABLED |  |  | null | false | Retrieves whether the user has limit ad tracking enabled or not. {apple_idfa} | IDFA | {apple_idfa} |  | null | false | IDFA {apple_idfa_tracking_enabled} | LIMIT_AD_TRACKING_ENABLED |  |  | null | false | Retrieves whether the user has limit ad tracking enabled or not.

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_AAID | {aaid} CLICK_IDFA | {idfa}



