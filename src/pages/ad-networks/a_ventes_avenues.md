## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/logo-1495753718180.png)	***Ventes Avenues***
http://ventesavenues.in

Integration Status |  ***active***

###  Description
Ventes works with a wide array of Digital Business across areas including Social Analytics, Creative and Community Networks, M-Commerce, Rural and CSR.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://notify.moca-tech.net/callback/notify?tag=branch&message_id={CLID}&active={moca_click_id}&install_utc={install_utc}&click_utc={CLICK_UTC}&gaid={AIFA}&idfa={IDFA}&device_model={DEVICE_MODEL}&installer_source={INSTALLER_SOURCE} OPEN | http://notify.moca-tech.net/callback/event?active={moca_click_id}&eventName=12&eventValue=Open&{testvalue} custom_event | http://notify.moca-tech.net/callback/event?active={moca_click_id}&eventName=3&eventValue=Purchase&amount={AMOUNT}&cy={CURRENCY}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{CLID} | CUSTOM_EVENT_METADATA |  |  | ${(last_attributed_touch_data.~id)!} | false | Branch ClickID {moca_click_id} | CLICK_ID | {moca_click_id} |  |  | false | Click ID {install_utc} | EVENT_TIMESTAMP |  |  | null | false | Install TimeStamp {CLICK_UTC} | EVENT_TIMESTAMP |  |  | null | false | Event TimeStamp {AIFA} | AAID | {AIFA} |  | null | false | AAID {IDFA} | IDFA | {IDFA} |  | null | false | IDF {DEVICE_MODEL} | DEVICE_MODEL |  |  | null | false | Device Model {INSTALLER_SOURCE} | CUSTOM_LINK_MACRO | {INSTALLER_SOURCE} |  | {INSTALLER_SOURCE} | false | Installer Source {testvalue} | CUSTOM_LINK_MACRO | {testvalue1} |  | null | false | null {AMOUNT} | PURCHASE_REVENUE |  |  |  | false | Amount {CURRENCY} | PURCHASE_CURRENCY |  |  |  | false | Currency

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




