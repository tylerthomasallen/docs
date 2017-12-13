## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/dataxu_logo_new-1510621012108.png)	***DataXu***
https://www.dataxu.com/

Integration Status |  ***in-review***

###  Description
A leader at providing marketing cloud services that help marketers better understand the customers they are targeting.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://tags.w55c.net/rs?id={PIXEL_ID}&aID={iOS_DEVICE_ID}&aGA={GOOGLE_AD_ID}&btid={BIDTRACKINGID} OPEN | https://tags.w55c.net/rs?id={PIXEL_ID}&aID={iOS_DEVICE_ID}&aGA={GOOGLE_AD_ID}&btid={BIDTRACKINGID} custom_event | https://tags.w55c.net/rs?id={PIXEL_ID}&aID={iOS_DEVICE_ID}&aGA={GOOGLE_AD_ID}&btid={BIDTRACKINGID}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{PIXEL_ID} | GOAL_ID |  |  |  | false | Pixel ID {iOS_DEVICE_ID} | IDFA |  |  |  | false | IDFA {GOOGLE_AD_ID} | AAID |  |  |  | false | AAID {BIDTRACKINGID} | CUSTOM_LINK_MACRO | [[[BIDTRACKINGID]]] |  |  | false | Dataxu ID

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_IDFA | [[[iOS_DEVICE_ID]]] CLICK_AAID | [[[GOOGLE_AD_ID]]]



