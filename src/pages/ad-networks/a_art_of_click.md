## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/aoc-1492793027029.png)	***Art of Click***
http://www.artofclick.com/

Integration Status |  ***submitted***

###  Description
Art of Click is the finest ad network that gets results

### Postbacks
Event | Postback
--- | ---
CLICK | http://foo.bar?click_id={clickid}&xyz={foobar}&accountid={accountid}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{clickid} | CLICK_ID | {clickid} |  |  {foobar} | CUSTOM_EVENT_METADATA | null,dashboard_label | null,webhook_template | {% if user_data.os == \IOS\ %}foo{% endif %} {accountid} | ACCOUNT_CREDENTIAL | null,dashboard_label | Account ID | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---
CAMPAIGN | [campaign]



