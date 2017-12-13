## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/Jampp-1492638822951.png)	***Jampp***
http://jampp.com

Integration Status |  ***active***

###  Description
Jampp is a performance marketing platform for acquiring and engaging app customers.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://tracking.jampp.com/postback?rnd={rnd}&app={app}&pubid={hash}&apple_ifa={apple_ifa}&google_advertising_id={google_advertising_id}&google_advertising_id_sha1={google_advertising_id_sha1}&google_advertising_id_md5={google_advertising_id_md5}&apple_ifa_sha1={apple_ifa_sha1}â€‹ OPEN | http://tracking.jampp.com/event?kind=app_open&rnd={rnd}&app={app}&pubid={hash}&apple_ifa={apple_ifa}&google_advertising_id={google_advertising_id}&google_advertising_id_sha1={google_advertising_id_sha1}&google_advertising_id_md5={google_advertising_id_md5}&apple_ifa_sha1={apple_ifa_sha1} PURCHASE | http://tracking.jampp.com/event?kind=purchased&rnd={rnd}&app={app}&pubid={hash}&apple_ifa={apple_ifa}&google_advertising_id={google_advertising_id}&google_advertising_id_sha1={google_advertising_id_sha1}&google_advertising_id_md5={google_advertising_id_md5}&apple_ifa_sha1={apple_ifa_sha1}&value={value} CLICK | http://42trck.com/click?pubid=1&action={action}&click_id={hash}&ip_address={ip_adress}&sub_site={sub_site}&device_id={device_id}&google_advertising_id={google_advertising_id}&apple_ifa={apple_ifa}&bannerid={banner_id}&response=json"}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{rnd} | EVENT_TIMESTAMP |  |  | null | false | Mandatory only for recurring eventsâ€‹. Random string or unix timestamp, used to\n\nde-duplicate recurring events. If not provided, this event is only tracked once. If provided, it\n\nmust not be longer than 64 ASCII characters {app} | CUSTOM_EVENT_METADATA |  |  | <@loop data=app.app_bundles val=\bundle\><#if user_data.os == bundle.os><#if bundle.os==\ANDROID\>${(bundle.android.package_name)!}<#elseif bundle.os == \IOS\>${(bundle.ios.itunes_id?substring(2))!}</#if><@break/></#if></@loop> | true | The bundle identifier of the app. Use the actual iTunes AppID for iOS\n\n(â€œ558055517â€ or â€œid558055517â€). Use the app's package name for Android\n\n(â€œcom.jampp.appdiariaâ€). {hash} | CLICK_ID | {hash} |  | null | false | null {apple_ifa} | IDFA | {apple_ifa} |  | null | false | Apple's advertiser identifier with iOS 6+. The ASIdentifierManager class in\n\niOS provides apps with access to an identifier that can be used only for serving\n\nadvertisements. {google_advertising_id} | AAID | {google_advertising_id} |  | null | false | Google-play-specific, user-resettable user ID. {google_advertising_id_sha1} | AAID_SHA1 |  |  | null | false | Google-play-specific, user-resettable user ID, hashed with SHA-1. {google_advertising_id_md5} | AAID_MD5 |  |  | null | false | Google-play-specific, user-resettable user ID, hashed with MD5. {apple_ifa_sha1} | IDFA_SHA1 |  |  | null | false | SHA1 hashed value of apple_ifa as described above. {value} | PURCHASE_REVENUE |  |  | null | false | null {action} | CUSTOM_LINK_MACRO | {action} |  | null | false | null {ip_adress} | IP_ADDRESS |  |  | null | false | null {sub_site} | CUSTOM_LINK_MACRO | {sub_site} |  | null | false | null {device_id} | OS_DEVICE_ID |  |  | null | false | null {banner_id} | CUSTOM_LINK_MACRO | {banner_id} |  | null | false | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_IDFA | {apple_ifa} CLICK_AAID | {google_advertising_id}



