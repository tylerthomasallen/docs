## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/Drawbridge_Logo_2015-1493243116881.png)	***Drawbridge***
http://drawbridge.com

Integration Status |  ***active***

###  Description
Drawbridge is the leading anonymized cross-device identity company building technology that fundamentally changes the way brands connect with people.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://api.adsymptotic.com/api/s/trackconversion?_pid={pid}&_psign={psign}&_ifa={idfa}&_dpid={android_id}&_clip={ip_address}&_aid={appid}&_lbl=CT&_ua={device_ua}&_it={click_id}&_can_claim={_can_claim} custom_event | https://api.adsymptotic.com/api/s/trackconversion?_pid={pid}&_psign={psign}&_aid={appid}&_pc_ev_tp={_ev_tp}&_lbl=PC&_clip={ip_address}&_it={click_id}&_ifa={idfa}&_androidifa={adid}&_dpid={android_id}_pc_ev_wt=1&_pc_ev_dt={event_timestamp}&_can_claim={_can_claim}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{pid} | ACCOUNT_CREDENTIAL |  | Partner ID | null | false | Partner ID {psign} | ACCOUNT_CREDENTIAL |  | Partner Signature | null | false | Partner Signature {idfa} | IDFA | {idfa} |  | null | false | IDFA {android_id} | ANDROID_ID |  |  | null | false | Android ID {ip_address} | IP_ADDRESS |  |  | null | false | IP Address {appid} | OS_PACKAGE_NAME |  |  | null | false | Application ID {device_ua} | USER_AGENT |  |  | ${(device_ua)!} | false | Device User Agent {click_id} | CLICK_ID | {click_id} |  | null | false | Click ID {_can_claim} | IS_CLAIMABLE |  |  | null | false | null {_ev_tp} | EVENT_NAME |  |  | null | false | Event Name {adid} | AAID |  |  | null | false | AAID {event_timestamp} | EVENT_TIMESTAMP |  |  | null | false | Event time

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_AAID | {aaid} CLICK_IDFA | {idfa}



