## ![image](https://cdn.branch.io/branch-assets/ad-partner-manager/criteo-logo-1495215687795.png)	***Criteo***
http://www.criteo.com

Integration Status |  ***submitted***

###  Description
Criteo's state-of-the-art technology transforms digital advertising into a personal experience that drives better results.

### Postbacks
Event | Postback
--- | ---
INSTALL | http://widget.<#if (user_data.country)! == \"CN\" || (user_data.country)! == \"MO\">cn<#elseif (user_data.geo_continent_code)! == \"AF\" || (user_data.geo_continent_code)! == \"EU\">eu<#elseif (user_data.geo_continent_code)! == \"AS\" || (user_data.geo_continent_code)! == \"OC\">as<#else>us</#if>.criteo.com/m/event?data=<@urlencode>{\"account\":{\"an\":<@json><@loop data=app.app_bundles val=\"bundle\"><#if user_data.os == bundle.os><#if bundle.os==\"ANDROID\">${(bundle.android.package_name)!}<#elseif bundle.os == \"IOS\">${(bundle.ios.bundle_id)! }</#if><@break/></#if></@loop></@json>,\"cn\":<@json>${(user_data.country)?lower_case}</@json>,\"ln\":<@json>${(user_data.language)?lower_case}</@json>},\"site_type\":\"<#if user_data.os == \"IOS\">aios<#else>aa</#if>\",\"id\": {\"<#if user_data.os == \"IOS\">idfa<#else>gaid</#if>\": <#if user_data.os == \"IOS\"><@jsonmap data=user_data.idfa /><#else><@jsonmap data=user_data.aaid /></#if>},\"events\":[{\"event\": \"viewHome\", \"ui_install\": 1},{\"event\": \"appLaunch\", \"first_launch\": true,\"install_attribution_payload\": <@jsonmap data=\"last_attributed_touch_data.~click_id\"/>\",\"install_is_attributed\": \"<#if last_attributed_touch_data.$3p == ad_network.machine_name>true<#else>false</#if>}\"],\"ip\": \"${(user_data.ip)!}\",\"version\": \"s2s_v1.0.0\"}</@urlencode> OPEN | http://widget.<#if (user_data.country)! == \"CN\" || (user_data.country)! == \"MO\">cn<#elseif (user_data.geo_continent_code)! == \"AF\" || (user_data.geo_continent_code)! == \"EU\">eu<#elseif (user_data.geo_continent_code)! == \"AS\" || (user_data.geo_continent_code)! == \"OC\">as<#else>us</#if>.criteo.com/m/event?data=<@urlencode>{\"account\":{\"an\":<@json><@loop data=app.app_bundles val=\"bundle\"><#if user_data.os == bundle.os><#if bundle.os==\"ANDROID\">${(bundle.android.package_name)!}<#elseif bundle.os == \"IOS\">${(bundle.ios.bundle_id)! }</#if><@break/></#if></@loop></@json>,\"cn\":<@json>${(user_data.country)?lower_case}</@json>,\"ln\":<@json>${(user_data.language)?lower_case}</@json>},\"site_type\":\"<#if user_data.os == \"IOS\">aios<#else>aa</#if>\",\"id\": {\"<#if user_data.os == \"IOS\">idfa<#else>gaid</#if>\": <#if user_data.os == \"IOS\"><@jsonmap data=user_data.idfa /><#else><@jsonmap data=user_data.aaid /></#if>},\"events\":[{\"event\": \"viewHome\", \"ci\":\"${(user_data.developer_identity)!}\"},{\"event\": \"appLaunch\"}],\"ip\": \"${(user_data.ip)!}\",\"version\": \"s2s_v1.0.0\"}</@urlencode> custom_event | http://widget.<#if (user_data.country)! == \"CN\" || (user_data.country)! == \"MO\">cn<#elseif (user_data.geo_continent_code)! == \"AF\" || (user_data.geo_continent_code)! == \"EU\">eu<#elseif (user_data.geo_continent_code)! == \"AS\" || (user_data.geo_continent_code)! == \"OC\">as<#else>us</#if>.criteo.com/m/event?data= PURCHASE | http://widget.<#if (user_data.country)! == \"CN\" || (user_data.country)! == \"MO\">cn<#elseif (user_data.geo_continent_code)! == \"AF\" || (user_data.geo_continent_code)! == \"EU\">eu<#elseif (user_data.geo_continent_code)! == \"AS\" || (user_data.geo_continent_code)! == \"OC\">as<#else>us</#if>.criteo.com/m/event?data=<@urlencode>{\"account\":{\"an\":<@json><@loop data=app.app_bundles val=\"bundle\"><#if user_data.os == bundle.os><#if bundle.os==\"ANDROID\">${(bundle.android.package_name)!}<#elseif bundle.os == \"IOS\">${(bundle.ios.bundle_id)! }</#if><@break/></#if></@loop></@json>,\"cn\":<@json>${(user_data.country)?lower_case}</@json>,\"ln\":<@json>${(user_data.language)?lower_case}</@json>},\"site_type\":\"<#if user_data.os == \"IOS\">aios<#else>aa</#if>\",\"id\": {\"<#if user_data.os == \"IOS\">idfa<#else>gaid</#if>\": <#if user_data.os == \"IOS\"><@jsonmap data=user_data.idfa /><#else><@jsonmap data=user_data.aaid /></#if>},\"events\":[{\"event\":\"trackTransaction\",\"dd\":<@json><#if last_attributed_touch_data.$3p == ad_network.machine_name>1<#else>0</#if></@json>,\"id\":\"${(event_data.transaction_id)!}\",\"currency\":\"${(event_data.currency)!}\",\"product\": [{<@loop data=content_items val='attributes'>\"id\":<@jsonmap data=attributes.dollar_sku />,\"price\":<@jsonmap data=attributes.dollar_price />,\"quantity\":<@jsonmap data=attributes.dollar_quantity />}<@sep>,</@sep></@loop>]}],\"ip\": \"${(user_data.ip)!}\",\"version\": \"s2s_v1.0.0\"}</@urlencode>"}

### Postback Parameters
Parameter name | Branch Parameter | Link Macro | Dashboard Label | Webhook Template | Required | Description
--- | --- | --- | --- | --- | --- | --- 


### Link-only Parameters
Branch Parameter | Link Macro
--- | ---




