## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/1-e1466007909243-1495751845237.png)	***Spyke Media***
https://www.spykemedia.com

Integration Status |  ***in-review***

###  Description
Spyke Media is your full-service partner for Mobile Advertising. We assist you in all steps necessary to unleash your mobile marketing power.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://spykemedia.go2cloud.org/aff_lsr?source={affiliate_id}&aff_sub={transaction_id}&idfa={ios_ifa}&android_id={android_id}&security_token={security_token} OPEN | http://spykemedia.go2cloud.org/aff_lsr?source={affiliate_id}&aff_sub={transaction_id}&idfa={ios_ifa}&android_id={android_id}&security_token={security_token}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{affiliate_id} | CUSTOM_LINK_MACRO | {affiliate_id} |  | null | false | Affiliate ID {transaction_id} | EVENT_ID |  |  | null | false | Event ID {ios_ifa} | IDFA | {ios_ifa} |  | null | false | null {android_id} | AAID | {android_id} |  | null | false | null {security_token} | ACCOUNT_CREDENTIAL |  | Security Token |  | false | Security Token

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




