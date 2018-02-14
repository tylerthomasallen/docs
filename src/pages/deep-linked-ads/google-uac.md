---
title: Google Universal App Campaigns
description: A guide to using Branch in Adwords Universal App Campaigns.
path: tree/master/src/pages/deep-linked-ads
source: google-uac.md
---
# Google Universal App Campaigns

## Overview

If you're running Universal App Campaigns, Branch can track attributions from Google and send across events.

Branch uses Google Adwords' server to server [App Conversion Confirmation](https://developers.google.com/app-conversion-tracking/api/) for attribution data which reports on conversion events. Therefore, we only collect **install (conversion) data**. Click data is not supported for this campaign type.

!!! warning "New AdWords UI"
    AdWords has rolled out a new user interface and functionality. If you are on the old AdWords experience, please switch to the new experience.

## Setup (New AdWords UI)

Follow the instructions list [here](/pages/deep-linked-ads/google-ads-overview/#oauth). Once this is complete, you can run Universal App Campaigns using the new interface.


!!! warning "Deep linking not supported with new integration"
    Unfortunately, because the new integration with Univeral App Campaigns is truly linkless, Branch cannot support deep linking from this campaign style.

### Data

With the new set up, here's how the data is mapped.

Google Data | Branch Data |
--- | --- |
Campaign ID | ~campaign_id |
Campaign Name | ~campaign  |
ad_type | ~ad_type |
network_type | ~channel
network_subtype | ~secondary_publisher

### Events

Branch currently supports the ability to send installs, opens, and purchases. In the near future, we will support the ability to send all custom events tracked through the Branch SDK. 

## Troubleshooting

#### FAQ / Debugging

**Q: I'm not seeing any click data for my campaign.**

**A:** Branch uses Google Adwords' server to server [App Conversion Confirmation](https://developers.google.com/app-conversion-tracking/api/legacy/confirm){:target="\_blank"} for attribution data which reports on conversion events. Therefore, we only collect **install (conversion) data**. Click data is not supported for this campaign type.

**Q: I'm getting discrepancy between conversion counts in Branch and Google Adwords**

**A:** While we should always expect around a 5% discrepancy due to time zone differences and the like, if you are seeing significant discrepancies, it could be an indication of a broader problem.

**Q: There's an issue with iOS 10 and Limit Ad Tracking**

**A:** In iOS 10, Apple broke the ability for app developers to collect the `IDFA` if the user had enabled `Limit Ad Tracking`. In this case, Branch and Google cannot compare notes to see who drove the install. This will account for about 15% discrepancy in counts across both platforms, where Branch's tracked installs will be lower.

**Q: I'm not seeing any data coming through for the Universal App Campaign?**

**A:** If you see absolutely 0 data coming through from your integration, it's possible that you're not collecting Google Advertising ID (GAID) on Android or IDFA on iOS.

- iOS: Add the AdSupport.framework.
- Android: Add Google Play Services so that we can collect GAID.

**Q: There seems to be a discrepancy between the Install and Opens values?**

**A:** One discrepancy root cause we've seen before is the scenario where Branch will classify an install as an 'open'. We remember the history of a particular user via their IDFA (in addition to using a few other methods) and will detect whether the user is actually a new user or a returning user who had previously uninstalled your app. Facebook doesn't do this.

We've seen Google classify 're-installs' as fresh installs, where Branch will correctly classify them as 're-opens'. If you're comparing the raw install numbers on Branch, and ignoring the 're-opens', it's possible you'll see a discrepancy. To check sum up the 'installs' and 'reopens' for the given link and compare it to Google's total installs.

If it's close, you know that this is the root cause.
