---
title: Google Adwords Conversions Setup
description: A guide to setting up App Conversion Events in Adwords with Branch links
path: tree/master/src/pages/deep-linked-ads
source: google-conversions.md
---
## Overview

If you're using Google Adwords with Branch links, setting up conversion events in Adwords will allow Branch to send app install conversion information to Adwords for verification. We recommend setting this up to help minimize discrepancies between Adwords and Branch conversion values.

Note: Conversions measured here are **app installs**, purchases and custom events.

{! ingredients/deep-linked-ads/link-to-google-ads-overview.md !}

## Setup

Setting up Adwords conversion events with Branch allows Branch to get direct confirmation from Google for which conversion events were driven by an Adwords advertisement and allows Adwords to collect accurate conversion data for your app.

!!! warning "Prerequisites"
	* [x] To track installs from Google Ads you should [integrate the Branch SDK](/pages/apps/ios/#integrate-branch) into your app.
	* [x] If you want to deep link from your ads directly to content, you should [configure deep link routing](/pages/deep-linking/routing/).
	* [x] Ads is a premium product priced on Monthly Active Users. Sign up for the Ads product to enable this functionality.

#### Conversions Setup

Set up Google as an Ad Partner and conversion tracking from Adwords on the Branch dashboard. If you already have Google enabled as an ad partner, continue with the _Enable Adwords Conversions_ instructions.

1. Navigate to the [Partner Management tab](https://dashboard.branch.io/ads/partner-management){:target="_blank"}.

	![Ads Partner Management](/img/ingredients/deep-linked-ads/enable-google-ad-partner/ads-partner-management.png)

1. Search for **Google AdWords**.

	![Find Google Adwords in Partner Manager](/img/ingredients/deep-linked-ads/enable-google-ad-partner/find-google-partner.png)

1. We will now fill in the conversion ID and Label fields.

#### Enable Adwords Conversions

1. Go to your [Adwords dashboard](https://adwords.google.com/cm/CampaignMgmt){:target="_blank"}.
1. In the top nav bar, click into `Tools` > `Conversions`.

	<img src="/img/pages/deep-linked-ads/google-conversions/adwords-tools-conversion.png" alt="Conversion Menu" class="center half">

1. Click `+ Add a Conversion` button.
1. Select `App` from the cards.

	<img src="/img/pages/deep-linked-ads/google-conversions/adwords-conversion-install.png" alt="Conversion Menu" class="center half">

1. Select `First opens and in-app actions`.
1. Select the appropriate platform (iOS or Android).
1. Select `App installs (first-open)` or `In-app actions`. Please note that iOS actions are only available for ads that show on the Display Network.

	<img src="/img/pages/deep-linked-ads/google-conversions/adwords-app-conversion-card.png" alt="Conversion IDs" class="center three-quarters">

1. Now fill out the conversion action page:
   * Give it a name like `Branch Android/iOS Conversion`
   * Under `Value` assign a value (or select “Don’t assign a value to this install”)
   * Under `Mobile app` input your application details
   * Select `Include in "Conversions"` to have the conversion events appear in your Adwords columns
1. Click `Save and continue`.
1. Select the option to have a server report conversions: `Set up a server-to-server conversion feed...`.
1. Note your `Conversion ID` & `Conversion label` as shown in the screenshot below.

	![Conversion IDs](/img/pages/deep-linked-ads/google-conversions/adwords-conversions.png)

1. Head to the [Branch Dashboard Adwords Settings](https://dashboard.branch.io/ads/partner-management/a_google_adwords?tab=settings){:target="_blank"}.
1. Paste in the `Conversion ID` and `Conversion label` from your Adwords dashboard into the appropriate fields for either iOS or Android. If you plan on using custom events, please add the conversion ID for your account into the `Purchase or Custom Event Conversion ID` field.
1. Click the `Save and Enable` button in the lower right hand corner.

	![Save and Enable Google Adwords in Partner Manager](/img/ingredients/deep-linked-ads/enable-google-ad-partner/save-and-enable-google.png)

1. Google AdWords is now enabled as an ad partner.
1. Click `Done` in your Adwords dashboard.

##### Purchase and custom event

1. To add Purchase and other custom event conversion in Google, first [enable the conversions in AdWords](/pages/deep-linked-ads/google-conversions/).

1. Under the Account Settings tab, ensure you have pasted in a *Conversion ID* into the `Purchase or Custom Event Conversion ID` field. This ID is actually the same across all the conversions set up in a single AdWords Account.

1. Then, navigate to the Postback Config tab and add your *Conversion Label* into the Goal ID field.

![AdWords Goal IDs](/img/pages/deep-linked-ads/google-conversions/aw-custom-goal-ids.png)

You're all setup to confirm app install conversions between Branch and Adwords!

!!! note "Conversion Windows"
	Adwords has a default 30 day conversion window for app install actions which can't be changed. To minimize discrepancies between Branch and Adwords conversion values, we recommend setting your Branch attribution window to the same value.
	Navigate to `Link Settings` > `Attribution Windows` and set the **Click to conversion event** to 30 days.

	**By default, the window is set to 30 days in the Branch dashboard.**

![Branch Conversion Window](/img/pages/deep-linked-ads/google-conversions/attribution-window.png)

## Troubleshooting

#### FAQ / Debugging

**Q: I'm getting discrepancy between conversion counts in Branch and Google Adwords**

**A:** While we should always expect around a 5% discrepancy due to time zone differences and the like, if you are seeing significant discrepancies, it could be an indication of a broader problem.

**Q: My campaign is reporting a number of conversions much higher than the number of conversions shown in the conversion table in Adwords**

**A:** When viewing a campaign, it shows the sum of all conversion events that apply to it. To view by conversion, navigate to `Segment` > `Conversions` > `Conversion name`, in order to clearly see the breakdown of your campaign's conversions.

<img src="/img/pages/deep-linked-ads/google-conversions/conversion-segment.png" alt="Adwords Conversion Segment" class="center">
