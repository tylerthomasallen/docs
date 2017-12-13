## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/Taptica_Logo-black1_(2)-1492793216383.png)	***Taptica***
http://taptica.com

Integration Status |  ***active***

###  Description
Taptica provides data-focused marketing solutions that drive execution and powerful brand insight in mobile by leveraging video, social, native, and display to reach the most valuable users for every app, service, and brand.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://tracking.taptica.com/aff_lsr?tt_cid={tt_cid}&tt_appid={tt_appid}&tt_adv_id={tt_adv_id}&tt_adv_sub={tt_adv_sub}&tt_time={tt_time}&tt_idfa={tt_idfa}&tt_idfa_sha1={tt_idfa_sha1}&tt_idfa_md5={tt_idfa_md5}&tt_advertising_id={tt_advertising_id}&tt_advertising_id_sha1={tt_advertising_id_sha1}&tt_advertising_id_md5={tt_advertising_id_md5} OPEN | http://tracking.taptica.com/aff_goal?tt_cid={tt_cid}&tt_adv_id={tt_adv_id}&tt_goal=1&tt_adv_sub={tt_adv_sub}&tt_time={tt_time}&tt_idfa={tt_idfa}&tt_advertising_id={tt_advertising_id}&tt_appid={tt_appid} PURCHASE | http://tracking.taptica.com/aff_goal?tt_cid={tt_cid}&tt_adv_id={tt_adv_id}&tt_goal=4&tt_adv_sub={tt_adv_sub}&tt_time={tt_time}&tt_idfa={tt_idfa}&tt_advertising_id={tt_advertising_id}&tt_appid={tt_appid}&amount={purchase_amount} custom_event | http://tracking.taptica.com/aff_goal?tt_cid={tt_cid}&tt_adv_id={tt_adv_id}&tt_goal={goal_id}&tt_adv_sub={tt_adv_sub}&tt_time={tt_time}&tt_idfa={tt_idfa}&tt_advertising_id={tt_advertising_id}&tt_appid={tt_appid}&amount={purchase_amount}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{tt_cid} | CLICK_ID | {tt_cid} |  | null | false | null {tt_appid} | OS_PACKAGE_NAME |  |  | null | false | the application id as it appears in Google play or App store\t {tt_adv_id} | ACCOUNT_CREDENTIAL |  | Taptica Advertiser ID | null | false | Taptica internal unique advertiser id. {tt_adv_sub} | EVENT_ID |  |  | null | false | The advertiser unique conversion ID {tt_time} | EVENT_TIMESTAMP |  |  | null | false | The conversion time,as it's been recorded on the advertiser's side {tt_idfa} | IDFA | {tt_idfa} |  | null | false | Device IDFA or when you donâ€™t know what is the format of IDFA you have {tt_idfa_sha1} | IDFA_SHA1 |  |  | null | false | Device IDFA in SHA1 format {tt_idfa_md5} | IDFA_MD5 |  |  | null | false | Device IDFA in MD5 format {tt_advertising_id} | AAID | {tt_advertising_id} |  | null | false | Use for send Taptica Android advertising plain ID {tt_advertising_id_sha1} | AAID_SHA1 |  |  | null | false | Device Android advertising ID in SHA1 format {tt_advertising_id_md5} | AAID_MD5 |  |  | null | false | Device Android advertising ID in MD5 format {purchase_amount} | PURCHASE_REVENUE |  |  | null | false | post install event , purchase amount {goal_id} | GOAL_ID |  |  | null | false | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_AAID | {tt_advertising_id} CLICK_IDFA | {tt_idfa}



