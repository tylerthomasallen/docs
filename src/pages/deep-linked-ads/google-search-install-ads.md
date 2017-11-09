---
title: Google Search App Install Ads
description: A guide to using Branch in Adwords Search Network App Install Campaigns.
path: tree/master/src/pages/deep-linked-ads
source: google-search-install-ads.md
---
# Google Search App Install Ads

## Overview

If you're running Google AdWords Search Mobile Install Campaigns, you'll find everything you need right here.

This documentation supports the following Google Campaign types:

Google Campaign | Campaign Type/Objective | Branch Ad Format
--- | --- | ---
Search Network | Mobile App Installs | App Only: Install

#### OS Support and Major Differences

Operating System | Supported by AdWords Search Install Ads? | Key Differences | Documentation
--- | --- | --- | ---
iOS | Yes | Uses tracking template, must redirect to iOS app store | [link](/pages/deep-linked-ads/google-search-install-ads/#ios)
Android | Yes | Uses Final URL with ValueTrack Parameters, no tracking template | [link](/pages/deep-linked-ads/google-search-install-ads/#android)

{! ingredients/deep-linked-ads/link-to-google-ads-overview.md !}

## Setup

!!! warning "Prerequisites"
	* [x] To track installs from Google Ads you should integrate the Branch SDK into your app.
	* [x] If you want to deep link from your ads directly to content, you should configure deep link routing.
	* [x] Ads is a premium product priced on Monthly Active Users. Sign up for the Ads product to enable this functionality.

{! ingredients/deep-linked-ads/enable-google-ad-partner.md !}

### iOS

#### Create an Ad Link

- Create a Branch Ad link from the [Partner Management page](https://dashboard.branch.io/ads/partner-management){:target="\_blank"}'s `Create Google Adwords Link` button under the Google Adwords Partner and select `App Install or Engagement`

![image](/img/pages/deep-linked-ads/reusable-images/create-link-install-engagement.png)

- Under the Define Section, pick a Link Name for later reference

- Configure the link with the Ad Format set to **App Only**, the Ad Partner set to **Google Adwords**, and the Secondary Ad Format set to **Google Search Install iOS**

![Create Ad Link](/img/pages/deep-linked-ads/google-search-install-ads/ios/ad-link-setup.png)

- Under the Configure Options tab, navigate to the Redirects sub section and ensure that the iOS redirect is set to the desired app being promoted by the ad campaign.

![Create Ad Link](/img/pages/deep-linked-ads/reusable-images/example-link-redirect.png)

- Under the Analytics Tags sub section additional tags can be set. It is recommended to fill in these fields as they can be used as filters in Branch's Ads Analytics view. To best connect your ad link with your Adwords Campaign, set the channel field to Google Adwords and set the campaign field to the same ad campaign name used in Adwords.

![Analytics Tags](/img/pages/deep-linked-ads/reusable-images/adwords-analytics-tags.png)


!!! tip "Setting Attribution Windows"
	You can specify the attribution windows for your links either at an overall account or per link level. Use these windows to accurately measure attribution data for your Branch links. Refer to [Changing attribution windows](/pages/deep-linked-ads/branch-universal-ads/#change-attribution-windows) for instructions.

#### Configure Adwords Ad

To set up a Search Network Mobile App Install Campaign on iOS, you will need to first create your campaign and then setup a tracking template on the ad. Adwords campaign creation documentation is available **[here](https://support.google.com/adwords/answer/6309969?hl=en){:target="_blank"}**.

#### Create Your Campaign

- Select `Search Network only` on Adwords

![image](/img/pages/deep-linked-ads/reusable-images/adwords-search-network.png)

- For the type of Search campaign select `Mobile app installs`

![Adwords Setup](/img/pages/deep-linked-ads/google-search-install-ads/adwords-search-install.png)

- Continue setting the campaign and ad group parameters

#### Ad Creation

- Grab your app's iTunes App Store URL and fill it into the **Final URL** field of your ad setup
- Expand the `Ad URL options`. and place your Branch Ad link from the first section in the **Tracking template** field. Ensure the copied link has the appropriate additional params (~campaign_id, ~ad_set_id, lpurl, etc.) which should be automatically generated on your Branch dashboard.

![Example Link](/img/pages/deep-linked-ads/google-search-install-ads/ios/full-branch-link.png)

![Example Adwords Config](/img/pages/deep-linked-ads/google-search-install-ads/ios/adwords-configuration.png)

!!! note ""
	Because the **Final URL** for your app install campaigns must match your app store domain, you cannot put a Branch link in that box. However, capturing installs and deep linking users through content is still possible due to the **Tracking template** configuration.

### Android

!!! warning "Android SDK v2.10.0"
	Ensure the application being promoted by the Ad campaign has the SDK version of **v2.10.0** or later. Starting at this version, accurate measurement of the Google Play link referrer is used which is required to support this Adwords campaign type.

#### Create an Ad Link

- Create a Branch Ad link from the [Partner Management page](https://dashboard.branch.io/ads/partner-management){:target="\_blank"}'s `Create Google Adwords Link` button under the Google Adwords Partner and select `App Install or Engagement`

![image](/img/pages/deep-linked-ads/reusable-images/create-link-install-engagement.png)

- Under the Define Section, pick a Link Name for later reference

- Configure the link with the Ad Format set to **App Only**, the Ad Partner set to **Google Adwords**, and the Secondary Ad Format set to **Google Search Install Android**, while leaving the Campaign field blank

![Create Ad Link](/img/pages/deep-linked-ads/google-search-install-ads/android/ad-link-setup.png)

- Under the Analytics Tags sub section additional tags can be set. It is recommended to fill in these fields as they can be used as filters in Branch's Ads Analytics view. To best connect your ad link with your Adwords Campaign, set the channel field to Google Adwords and set the campaign field to the same ad campaign name used in Adwords.

![Analytics Tags](/img/pages/deep-linked-ads/reusable-images/adwords-analytics-tags.png)


!!! tip "Setting Attribution Windows"
	You can specify the attribution windows for your links either at an overall account or per link level. Use these windows to accurately measure attribution data for your Branch links. Refer to [Changing attribution windows](/pages/deep-linked-ads/branch-universal-ads/#change-attribution-windows) for instructions.

#### Configure Adwords Ad

To set up a Search Network Mobile App Install Campaign on Android, you will need to first create your campaign and then setup a tracking template on the ad. Adwords campaign creation documentation is available **[here](https://support.google.com/adwords/answer/6309969?hl=en){:target="_blank"}**.

#### Create Your Campaign

- Select `Search Network only` on Adwords

![image](/img/pages/deep-linked-ads/reusable-images/adwords-search-network.png)

- For the type of Search campaign select `Mobile app installs`

![Adwords Setup](/img/pages/deep-linked-ads/google-search-install-ads/adwords-search-install.png)

- Continue setting the campaign and ad group parameters

#### Ad Creation

- Copy the final Branch Ad link generated from the previous section. Note: This link should begin with **https://play.google.com...** instead of the normal Branch link domain. Refer to the [Create A Branch Ad Link](/pages/deep-linked-ads/google-search-install-ads/#create-an-ad-link_1) section if the link is not in this format to ensure the link creation was setup properly.

![Example Link](/img/pages/deep-linked-ads/google-search-install-ads/android/full-branch-link.png)

- Paste this Ad link into the **Final URL** field

![Example Ad](/img/pages/deep-linked-ads/google-search-install-ads/android/adwords-configuration.png)

!!! note "Using the Final URL"
	Google Adwords current implementation of the Search Network Mobile App Install Campaign for Android **fails to support Tracking Templates** despite the option to set them up in the Ad creation process.

	Therefore, a unique Play Store link is used in this setup which corresponds to a Branch link. All install capturing and deep linking of content is still possible through this setup.

!!! caution "Limited Click Attribution"
	As of June 2017, due to the current Adwords Search Network Mobile App Install Campaign implementation, Branch's **Android Click attribution** is only measured when a user installs the mobile application.

{! ingredients/deep-linked-ads/view-ad-link-data.md !}

## Troubleshooting

{! ingredients/deep-linked-ads/adwords-valuetrack-info.md !}

#### FAQ / Debugging

**Q: Why is my advertisement being disapproved on Adwords?**

**A:** For App Install/Engagement Campaigns, sometimes your ad may be disapproved if the Branch link does not re-direct to Google Play or App Store when clicked on a desktop. Please ensure that for the Branch link you're using to track installs, Deepviews are disabled and a desktop redirect is set to either the App / Play store.

**Q: Why am I seeing inaccurate click attribution values for my Search Network Mobile App Install Campaign on Android?**

**A:** Google Adwords current implementation of the Search Network Mobile App Install Campaign for Android **fails to support Tracking Templates** despite the option to set them up in the Ad creation process.

Therefore, a unique Play Store link is used in this setup which corresponds to a Branch link. All install capturing and deep linking of content is still possible through this setup.
