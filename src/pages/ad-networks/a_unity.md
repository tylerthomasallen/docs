## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/unity-1493071825773.png)	***Unity***
http://unity3d.com

Integration Status |  ***active***

###  Description
Monetize your entire player base and reach new audiences with video ads.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://postback.unityads.unity3d.com/games/{game_id}/install?advertisingTrackingId={advertisingTrackingId}&advertisingTrackingIdMD5={advertisingTrackingIdMD5}&attributed={attributed}&source_game_id={source_game_id}&cpi={cpi}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{game_id} | CUSTOM_LINK_MACRO | {game_id} |  | null | false | null {advertisingTrackingId} | OS_DEVICE_ID |  |  | null | false | IDFA/AAID {advertisingTrackingIdMD5} | OS_DEVICE_ID_MD5 |  |  | null | false | IDFA/AAID MD5 {attributed} | IS_CLAIMABLE |  |  | null | false | ag (1 or 0) denoting whether this install is attributed to Unity Ads and can be charged.  {source_game_id} | CUSTOM_LINK_MACRO | {source_game_id} |  | null | false | null {cpi} | CUSTOM_LINK_MACRO | {cpi} |  | null | false | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_IDFA | {idfa} OS | {os} S2S | true



