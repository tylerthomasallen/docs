## ![image](https://s3-us-west-1.amazonaws.com/branch-cdn/branch-assets/ad-partner-manager/dc_newlogo.png)	***DoubleClick***
https://doubleclick.com

Integration Status |  ***active***

###  Description
Digital advertising with DoubleClick helps connect you to the right people in the right moments to improve your customer experience and your results.

### Postbacks
Event | Postback
--- | ---
INSTALL | https://ad.doubleclick.net/ddm/s2s/appactivity/src={src};cat={cat};type={type};ord={random} custom_event | https://ad.doubleclick.net/ddm/s2s/appactivity/src={src};cat={cat};type={type};ord={random}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{src} | CUSTOM_LINK_MACRO | {src} | ,ad_network_template |  t_url | CUSTOM_LINK_MACRO | {unescapedlpurl} | ,ad_network_template |  {cat} | CUSTOM_LINK_MACRO | {cat} | ,ad_network_template |  {type} | CUSTOM_LINK_MACRO | {type} | ,ad_network_template |  {random} | EVENT_ID | {ord} | ,ad_network_template |  {token} | ACCOUNT_CREDENTIAL |  | Server to Server Token,ad_network_template | 

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




