## Overview

With a push of a button you can send your Branch data to your Segment dashboard, helping you to understand the power of Branch as an acquisition pathway, export your data to your entire suite of analytics tools and build custom audiences upon Branch data.

This documentation explains how to send **Branch install events to Segment**. Segment calls this an Inbound Feed Integration. If you'd like to send Segment events to your Branch dashboard, please review the Branch/Segment SDK Kit integration documentation for [iOS](/pages/apps/Segment-ios/) and [Android](/pages/apps/Segment-android/). 

### How does it work?

Once the Branch SDK is integrated into an app, Branch can detect which links are leading to installs, re-opens, and users' actions. Enabling this integration and providing your Segment token will result in Branch automatically forwarding attributed installs to Segment, in the exact format Segment expects.

### What events does Branch send?

Branch will send **attributed installs**. Branch also sends all the data that is attached to the link that drove the attributed installs. This will allow you to analyze which campaigns, channels, etc. are helping you acquire and engage users. You can see the list of fields that we send to Segment [here](#what-branch-sends-to-Segment).

### What does it look like?

Branch events will appear as an attribution event in Segment.

Branch attribution events are mapped as follows:

Event Type = Custom Event
Custom Event Type = attribution
Event Name = attribution

![image](/img/pages/integrations/Segment/branch-Segment.png)

Additionally, individual events, such as those seen in Live View or visible when looking at People, will have Branch link data included. Here's an example:

![image](/img/pages/integrations/Segment/Segment-live-view.png)

## Setup

### Prerequisites
- This guide requires you to have already integrated the Branch mobile SDKs. 

### Retrieve Segment Token

Find your Segment Token and enter it into the Branch Dashboard.

1. Navigate to [https://app.Segment.com](https://app.Segment.com) and log into the Dashboard.
1. In the dashboard, navigate to [Setup > Inputs](https://app.Segment.com/setup/inputs). 
1. Click on **iOS** or **Android**.

![image](/img/pages/integrations/Segment/Segment-settings-inputs.png)

1. Copy your key and secret - you'll enter it into the Branch dashboard in a minute.

![image](/img/pages/integrations/Segment/Segment-keys.png)


### Configure Branch Dashboard

{! ingredients/data-integrations/enable-data-integrations.md !}

1. On the Branch Dashboard (dashboard.branch.io), navigate to the [Integrations page](https://dashboard.branch.io/integrations).
1. Search for Segment and click on the tile.
1. Enter your Segment Token and hit **Enable**.

![image](/img/pages/integrations/Segment/Segment-branch-settings.png)

!!! warning "Please test integration!"
    Branch is not responsible for inaccurate API keys.

**Additional Segment Resources:**

You can find additional information about the Branch and Segment integration in the Segment documentation.

## Advanced

### What Branch Sends to Segment

| Property Name | Value | Sourced from | Example | Req
| --- | --- | --- | --- | --- | ---
| event | Branch event | event name | [Branch] install | Y
| properties.distinct_id | Unique ID for device/user | [see section below](#why-we-recommend-passing-Segment-distinct-id) | AEBE52E7-03EE-455A-B3C4-E57283966239 | N
| properties.token | Segment Token | Branch Dashboard | eed14a8aaa8c8ef777b8e9cb30826399 | Y
| properties.time | Event creation date | event | 1461878903 | N
| properties.ANY-KEY (many) | The value associated with the key | event metadata or referring link data | ~channel: facebook | N


### Why We Recommend Passing Segment Distinct ID

Branch will automatically specify the Distinct ID requested by Segment, if any of the IDentifiers that Segment uses are available. On iOS, Branch will send the IDFA if present, or the identifierForVendor (IDFV) if present, otherwise it will omit Distinct ID. On Android Branch will send the Google Advertising ID if present, or the Android ID (hardware ID) if present, otherwise it will omit Distinct ID.

On iOS, the Segment SDK by default will use the IDFA if present, otherwise it will use the identifierForVendor (IDFV) (also known as the vendor ID or identifierForVendor). In rare cases where the identifierForVendor (IDFV) is not available, it will generate a random UUID. In order for IDFA to be available, please be sure you have included AdSupport.framework.

On Android, the Segment SDK by default does not use the Google Advertising ID or the Android ID (hardware ID). Instead, it generates a random UUID. This means that on Android, if you do not pass Branch the Segment Distinct ID, we cannot properly associate Branch-generated events with users as identified by Segment.

## Support

### Nuances with Multiple Devices and Segment Identities/Aliases

If you at any point change the Segment distinct id for a user as she’s using your app, you should invoke the same one line of code as above. This way, future calls from Branch to Segment use the updated distinct id.

Additionally, there is one scenario in which the event will be logged to Segment but not associated with the correct user. This is due to limitations with identities on Segment’s end.

**Here is an example scenario:**

The User has an iPhone and an iPad

iPhone has IDFA 1234XXXX-XXXX-XXXX-XXXXXXXXXXXX -- 1234 for short

iPad has IDFA 5678XXXX-XXXX-XXXX-XXXXXXXXXXXX -- 5678 for short

The User opens the app organically (not from a Branch link), and is automatically assigned the distinctId 1234 (this is the IDFA). Then the user finishes signing up, and alias() is called with value "User A", linking 1234 <> "User A". All is well so far.

The User then gets placed into a drip email campaign, targeted for re-engagement. She's checking her email on her iPad and clicks on a Branch link to the app. The app is opened. We send Segment a referred event with an automatically assigned distinctId 5678 (this is the IDFA). Then the user logs in, and identify() is called with value "User A". Identify() is called because we want the user to match across both devices with the same identity = User A. If we called alias() in this second case, then there would be two distinctIds (and in Segment’s logic, two different people) - one with distinctId 1234 and another with distinctId 5678. In order to merge them, we have to identify() the user on the second device. An unfortunate side effect of this logic is that actions before identify() are not associated with the same user, as there are briefly two distinctIds..

The referred event associated with 5678 is not associated with 1234 / "User A".

In order for any additional events on this device to be associated with "User A", the app should invoke the one line of code as recommended in the section [Pass Segment Distinct ID](#why-we-recommend-passing-Segment-distinct-id). Example:

```objc
[[Branch getInstance] setRequestMetadataKey:@"$Segment_distinct_id" value:@"User A"];
```

If there are ever workarounds for this, we will update this guide and notify our partners accordingly. [Here is more information](https://Segment.com/help/questions/articles/how-do-i-use-alias-and-identify) on how Segment manages identities.
