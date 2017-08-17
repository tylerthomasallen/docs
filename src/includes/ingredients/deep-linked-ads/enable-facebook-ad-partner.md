#### Enable Facebook as an Ad Partner

If you haven't enabled Facebook as an Ad Partner on the Branch dashboard follow this section to do so.

1. Navigate to the [Partner Management tab](https://dashboard.branch.io/ads/partner-management){:target="_blank"}.
![Ads Partner Management](/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/ads-partner-management.png)
1. Search for **Facebook**.
![Find Facebook in Partner Manager](/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/find-facebook-partner.png)
1. In order for Branch to be able to properly deep link from Facebook ad campaigns, you must allow access to your Facebook app's information through usage of your **App ID** and **App Secret**.
	- First register your app with Facebook. If you haven't registered an app, see instructions [here](https://developers.facebook.com/docs/apps/register){:target="_blank"}.
1. Now log in to Facebook and navigate to [developers.facebook.com/apps](http://developers.facebook.com/apps){:target="_blank"} and select your app. You'll need both the **App ID** and **App Secret** values.
![Facebook Auth](/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/fb-auth-id-secret.png)
1. Go to the following [page](https://developers.facebook.com/tools/explorer/?method=GET&path=oauth%2Faccess_token%3Fclient_id%3D1234%26client_secret%3D5678%26grant_type%3Dclient_credentials&version=v2.10) to retrieve your app access token. Where it shows client_id, replace `1234` with your Facebook **App ID**. Where it shows client_secret, replace `5678` with your Facebook **App Secret**. Hit submit and copy the returned value of `access_token`.
![Facebook Access Token](/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/og-fb.png)
1. Return to the Branch Ad Partner Management Page and fill out the **OG App ID** and **App Access Token** fields which correspond to the Facebook **App ID** and the **access token** respectively.
![Facebook Auth](/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/branch-dash-fb-values.png)
1. Click the `Save and Enable` button in the lower right hand corner.
![Save and Enable Facebook in Partner Manager](/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/save-and-enable-facebook.png)
1. Facebook is now enabled as an ad partner.
1. Finally, to create a Facebook Ads link click the `Create Facebook Link` button in the top right hand corner.
![Create Facebook Ad Link](/img/ingredients/deep-linked-ads/enable-facebook-ad-partner/create-facebook-link.png)
