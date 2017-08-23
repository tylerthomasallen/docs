## Overview

The Branch partnership with [Appboy](https://www.appboy.com) provides a push-button way to deliver Branch installs and attributions to your Appboy dashboard. This allows you to analyze your users coming in from Branch deep linked campaigns.

**At this time, our integration only applies to the iOS platform.**

### How it works

We have built a custom integration to automatically send all Branch install data to Appboy without any extra work on your side (besides integrating both SDKs). Simply click a button, and you'll be good to go!

!!! protip "How do we differentiate Appboy and Branch installs?"
    We rely on a Branch link being clicked, which leads to an install. This sets an internal boolean that an install came from Branch.

## Setup

### Prerequisites

- This guide requires you to have already integrated the Branch mobile SDKs into your app.
- You also need to [sign up for an Appboy account](https://dashboard.appboy.com/developers/sign_up) and [install the Appboy SDK](https://documentation.appboy.com/).
- Ensure Appboy's SDK is [collecting the IDFA](https://documentation.appboy.com/iOS/#optional-idfa-collection).

### Get the Appboy API key

1. On the Appboy dashboard, navigate to the **App Settings** section, and click **3rd Party Integrations**.
1. From there, grab your API key (this will be the same for all attribution partners listed on the page).


### Configure the Branch Dashboard

1. On the Branch Dashboard (dashboard.branch.io), navigate to the [Integrations page](https://dashboard.branch.io/integrations).
1. Locate Appboy and choose **Enable**.
  * If you have not yet entered billing information, please do so now.
1. Enter your Appboy iOS API Key and hit **Save**.

![image](/img/pages/integrations/appboy/enable-appboy-integration.png)

## Advanced

### What Branch sends to Appboy

Branch Analytics Tag | Appboy Data Placeholder Tag
--- | ---
Campaign | campaign
Channel | adgroup
