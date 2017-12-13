## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/impact-radius-logo-1493166999679.png)	***Impact Radius***
http://impactradius.com

Integration Status |  ***active***

###  Description
Impact Radius' digital marketing platform enables significant improvement in the return on global advertising spend for brands and agencies.

### Postbacks
Event | Postback
--- | ---
OPEN | https://{Account_SID}{Authorization_Token}api.impactradius.com/Advertisers/IRCB6WWtJcDz10569cEfKYe3f7eGAdHst1/AppEvents/?AppId={AppId}&AppPackage={AppPackage}&AppName={AppName}&Event=OPEN&EventDate=NOW&AndroidId={andorid_id}&AppleIfa={AppleIfa}&GoogAid={GoogAId}&AppInstallRef={AppInstallRef}&DeviceOs={DeviceOs}&DeviceVer={DeviceVer}&IpAddressCarrier={IpAddressCarrier}&ClickId={ClickId}&Oid={Event_id} INSTALL | https://{Account_SID}{Authorization_Token}api.impactradius.com/Advertisers/IRCB6WWtJcDz10569cEfKYe3f7eGAdHst1/AppEvents/?AppId={AppId}&AppPackage={AppPackage}&AppName={AppName}&Event=INSTALL&EventDate=NOW&AndroidId={andorid_id}&AppleIfa={AppleIfa}&GoogAid={GoogAId}&AppInstallRef={AppInstallRef}&DeviceOs={DeviceOs}&DeviceVer={DeviceVer}&IpAddressCarrier={IpAddressCarrier}&ClickId={ClickId}&Oid={Event_id}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 
{Account_SID} | ACCOUNT_CREDENTIAL |  | Account SID | null | false | null {Authorization_Token} | ACCOUNT_CREDENTIAL |  | Authorization Token | null | false | Authorization_Token {AppId} | CUSTOM_LINK_MACRO | {AppId} |  | null | false | Application ID {AppPackage} | ANDROID_PACKAGE_NAME |  |  | null | false | Package name {AppName} | APP_NAME |  |  | null | false | Application Name {andorid_id} | ANDROID_ID |  |  | null | false | Android ID {AppleIfa} | IDFA | {AppleIfa} |  | null | false | IDFA {GoogAId} | AAID |  |  | null | false | null {AppInstallRef} | CUSTOM_LINK_MACRO | {AppInstallRef} |  | ${(AppInstallRef)!} | false | AppInstallRef {DeviceOs} | OS |  |  | null | false | OS {DeviceVer} | OS_VERSION |  |  | null | false | OS Version {IpAddressCarrier} | IP_ADDRESS |  |  | null | false | IP Address {ClickId} | CLICK_ID | {ClickId} |  | null | false | Click ID {Event_id} | EVENT_ID |  |  | null | false | null

### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




