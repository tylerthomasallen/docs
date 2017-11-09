---
title: Google Display App Install Ads
description: A guide to using Branch in Adwords Display Network App Install Campaigns.
path: tree/master/src/pages/deep-linked-ads
source: google-display-install-ads.md
---
# Google Search App Install Ads

## Overview

If you're running Google AdWords Display Mobile Install Campaigns, you'll find everything you need right here.

This documentation supports the following Google Campaign types:

Google Campaign | Campaign Type/Objective | Branch Ad Format
--- | --- | ---
Display Network | Mobile App Installs | App Only: Install

#### OS Support and Major Differences

Operating System | Supported by AdWords Display Install Ads? | Key Differences | Documentation
--- | --- | --- | ---
iOS | Yes | Uses tracking template, must redirect to iOS app store | [link](/pages/deep-linked-ads/google-display-install-ads/#ios)
Android | Yes | Uses tracking template, must redirect to Google Play store | [link](/pages/deep-linked-ads/google-display-install-ads/#android)

{! ingredients/deep-linked-ads/link-to-google-ads-overview.md !}

## Setup

!!! warning "Prerequisites"
	* [x] To track installs from Google Ads you should [integrate the Branch SDK](/pages/apps/ios/#integrate-branch) into your app.
	* [x] If you want to deep link from your ads directly to content, you should [configure deep link routing](/pages/deep-linking/routing/).
	* [x] Ads is a premium product priced on Monthly Active Users. Sign up for the Ads product to enable this functionality.

{! ingredients/deep-linked-ads/enable-google-ad-partner.md !}

### iOS

#### Create a Branch Ad Link

1. Create a Branch Ad link from the [Partner Management page](https://dashboard.branch.io/ads/partner-management){:target="_blank"}'s `Create Google Adwords Link` button under the Google Adwords Partner and select `App Install or Engagement`
<img src="/img/pages/deep-linked-ads/reusable-images/create-link-install-engagement.png" alt="Link Creation" class="three-quarters center">
1. Under the Define Section, pick a Link Name for later reference
1. Configure the link with the Ad Format set to **App Only**, the Ad Partner set to **Google Adwords**, and the Secondary Ad Format set to **Google Display Install iOS**.
![Create Ad Link](/img/pages/deep-linked-ads/google-display-install-ads/ios/ad-link-setup.png)
1. Under the Configure Options tab, navigate to the Redirects sub section and ensure that the iOS redirect is set to the desired app being promoted by the ad campaign.
![Create Ad Link](/img/pages/deep-linked-ads/reusable-images/example-link-redirect.png)
1. Under the Analytics Tags sub section additional tags can be set. It is recommended to fill in these fields as they can be used as filters in Branch's Ads Analytics view. To best connect your ad link with your Adwords Campaign, set the channel field to Google Adwords and set the campaign field to the same ad campaign name used in Adwords.
![Analytics Tags](/img/pages/deep-linked-ads/reusable-images/adwords-analytics-tags.png)

!!! note "Optional: Deep Link Data"
	You can use this configuration section to specify custom link parameters that will be deep linked into the app after install. These could include a coupon code or a page identifier to route the user. Visit the [Deep Link Routing](/pages/deep-linking/routing/) page to learn more.

!!! tip "Setting Attribution Windows"
	You can specify the attribution windows for your links either at an overall account or per link level. Use these windows to accurately measure attribution data for your Branch links. Refer to [Changing attribution windows](/pages/deep-linked-ads/branch-universal-ads/#change-attribution-windows) for instructions.

#### Configure an Ad

To set up a Display Network Mobile App Install Campaign on iOS, you will need to first create your campaign and then setup a tracking template on the ad. Adwords campaign creation documentation is available **[here](https://support.google.com/adwords/answer/6309958?hl=en){:target="_blank"}**.

#### Create Your Campaign

1. Select `Display Network only` on Adwords
<img src="/img/pages/deep-linked-ads/reusable-images/adwords-display-network.png" alt="Adwords Network" class="half center">
1. For the type of Display campaign select `Install your mobile app`
![Adwords Setup](/img/pages/deep-linked-ads/google-display-install-ads/adwords-display-install.png)
1. Continue setting the campaign and ad group parameters

#### Ad Creation

1. Grab your app's iTunes App Store URL and fill it into the **Final URL** field of the ad setup.
1. Expand the `Ad URL options` and place your Branch Ad link from the first section in the **Tracking template** box. Ensure the copied link has the appropriate additional params (~campaign_id, ~ad_set_id, lpurl, etc.) which should be automatically generated on your Branch dashboard.

![Example Link](/img/pages/deep-linked-ads/google-display-install-ads/ios/full-branch-link.png)

![Example Adwords Config](/img/pages/deep-linked-ads/google-display-install-ads/ios/adwords-configuration.png)

!!! note ""
	Because the **Final URL** for your app install campaigns must match your app store domain, you cannot put a Branch link in that box. However, capturing installs and deep linking users through content is still possible due to the **Tracking template** configuration.

### Android

#### Create a Branch Ad Link

1. Create a Branch Ad link from the [Partner Management page](https://dashboard.branch.io/ads/partner-management){:target="_blank"}'s `Create Google Adwords Link` button under the Google Adwords Partner and select `App Install or Engagement`
<img src="/img/pages/deep-linked-ads/reusable-images/create-link-install-engagement.png" alt="Link Creation" class="three-quarters center">
1. Under the Define Section, pick a Link Name for later reference
1. Configure the link with the Ad Format set to **App Only**, the Ad Partner set to **Google Adwords**, and the Secondary Ad Format set to **Google Display Install Android**.
![Create Ad Link](/img/pages/deep-linked-ads/google-display-install-ads/android/ad-link-setup.png)
1. Under the Configure Options tab, navigate to the Redirects sub section and ensure that the Android redirect is set to the desired app being promoted by the ad campaign.
![Create Ad Link](/img/pages/deep-linked-ads/reusable-images/example-link-redirect.png)
1. Under the Analytics Tags sub section additional tags can be set. It is recommended to fill in these fields as they can be used as filters in Branch's Ads Analytics view. To best connect your ad link with your Adwords Campaign, set the channel field to Google Adwords and set the campaign field to the same ad campaign name used in Adwords.
![Analytics Tags](/img/pages/deep-linked-ads/reusable-images/adwords-analytics-tags.png)

!!! note "Optional: Deep Link Data"
	You can use this configuration section to specify custom link parameters that will be deep linked into the app after install. These could include a coupon code or a page identifier to route the user. Visit the [Deep Link Routing](/pages/deep-linking/routing/) page to learn more.

!!! tip "Setting Attribution Windows"
	You can specify the attribution windows for your links either at an overall account or per link level. Use these windows to accurately measure attribution data for your Branch links. Refer to [Changing attribution windows](/pages/deep-linked-ads/branch-universal-ads/#change-attribution-windows) for instructions.

#### Configure an Ad

To set up a Display Network Mobile App Install Campaign on Android, you will need to first create your campaign and then setup a tracking template on the ad. Adwords campaign creation documentation is available **[here](https://support.google.com/adwords/answer/6309958?hl=en){:target="_blank"}**.

#### Create Your Campaign

1. Select `Display Network only` on Adwords
<img src="/img/pages/deep-linked-ads/reusable-images/adwords-display-network.png" alt="Adwords Network" class="half center">
1. For the type of Display campaign select `Install your mobile app`
![Adwords Setup](/img/pages/deep-linked-ads/google-display-install-ads/adwords-display-install.png)
1. Continue setting the campaign and ad group parameters

#### Ad Creation

1. Grab your app's Google Play Store URL and fill it into the **Final URL** field of your ad setup
1. Expand the `Ad URL options`. and place your Branch Ad link from the first section in the **Tracking template** box. Ensure the copied link has the appropriate additional params (~campaign_id, ~ad_set_id, lpurl, etc.) which should be automatically generated on your Branch dashboard.

![Example Link](/img/pages/deep-linked-ads/google-display-install-ads/android/full-branch-link.png)

![Example Adwords Config](/img/pages/deep-linked-ads/google-display-install-ads/android/adwords-configuration.png)

!!! note ""
	Because the **Final URL** for your app install campaigns must match your app store domain, you cannot put a Branch link in that box. However, capturing installs and deep linking users through content is still possible due to the **Tracking template** configuration.

{! ingredients/deep-linked-ads/view-ad-link-data.md !}

## Troubleshooting

{! ingredients/deep-linked-ads/adwords-valuetrack-info.md !}

#### FAQ / Debugging

**Q: Why is my advertisement being disapproved on Adwords?**

**A:** For App Install/Engagement Campaigns, sometimes your ad may be disapproved if the Branch link does not re-direct to Google Play or App Store when clicked on a desktop. Please ensure that for the Branch link you're using to track installs, Deepviews are disabled and a desktop redirect is set to either the App / Play store.
