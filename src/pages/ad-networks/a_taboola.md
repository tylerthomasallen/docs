## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/taboola_logo-new-large-1500341960275.png)	***Taboola***
https://www.taboola.com/

Integration Status |  ***active***

###  Description
Taboola is the world's leading content discovery platform, serving 360B recommendations to over 1B unique visitors each month on the web's most innovative publisher sites, including NBC, USA Today, The Weather Channel, Tribune and Fox Sports.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://trc.taboola.com/actions-handler/log/3/s2s-action?click-id={click_id}&partner-name=Branch custom_event | https://trc.taboola.com/actions-handler/log/3/s2s-action?click-id={click_id}&name={event_name}&revenue={revenue}&currency={currency}&partner-name=Branch"}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{click_id} | CLICK_ID | {click_id} |  |  | false |  {event_name} | EVENT_NAME |  |  |  | false |  {revenue} | PURCHASE_REVENUE |  |  |  | false |  {currency} | PURCHASE_CURRENCY |  |  |  | false | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CLICK_IDFA | {idfa} CLICK_AAID | {aaid}



