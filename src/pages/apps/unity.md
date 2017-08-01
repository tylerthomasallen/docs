## Integrate Branch

- #### Configure Branch

	- Complete your [Branch Dashboard](https://dashboard.branch.io/settings/link)

		![image](http://i.imgur.com/eTuQXyZ.png)

	- Customize your app.link domain:

		![image](http://i.imgur.com/XPF1i6Z.png)

- #### Get the Branch SDK

	- [Download the latest SDK version](https://s3-us-west-1.amazonaws.com/branchhost/BranchUnityWrapper.unitypackage) or clone our [open-source GitHub repository](https://github.com/BranchMetrics/unity-branch-deep-linking).

	- Import the **BranchUnityWrapper.unitypackage** into your project by clicking `Assets -> Import Package`.

- #### Configure app

	- Add the Branch prefab asset to the **first scene** of your Unity project 

	- ##### Update your Branch prefab

		![image](http://i.imgur.com/j0ODW8S.png)

		> Do not forget to click on the **Update iOS Wrapper** and the **Update Android Manifest** buttons once you are done.

	- ##### Prefab fields

		| 	Field name 	| Description |
		|:-----------------------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
		| **Simulate Fresh Installs** | This checkbox enables debug mode. This allows you to simulate fresh every time you uninstall and reinstall the app. Please make sure to uncheck this box before releasing your app. |
		| **Test Mode** | This checkbox picks the test key from your Branch prefab. If this box is unchecked, by default, your live Branch key is used.|
		| **Test Branch Key** | This is the test Branch key found on the [Link Settings page](https://dashboard.branch.io/link-settings) of your Test Branch app|
		| **Test Branch URI** | This is the test URI scheme that you have set for your app on the [Link Settings page](https://dashboard.branch.io/link-settings) for your Test Branch app|
		| **Test Android Path Prefix** | This field is only applicable if you are on the `bnc.lt` domain of your Test Branch app. You can find it underneath the field labeled SHA256 Cert Fingerprints on the [Link Settings page](https://dashboard.branch.io/link-settings) once you’ve enabled App Links. It will look something like this: `/WSuf` (the initial / character should be included).|
		| **Test App Links** | This field is applicable if you want to enable `APPLINKS` and `UNIVERSAL LINKS` for your domain. Please make sure to add the correct domain found on the bottom of the [Link Settings page](https://dashboard.branch.io/link-settings) of your Test Branch app. Add the -alternate domain to have your Branch links deeplink from your [Deepviews](https://branchmetrics.github.io/docs/pages/web/deep-views/) and [Journeys](https://branchmetrics.github.io/docs/pages/web/journeys/). If you are not using a `app.links` domain please write into [integrations@branch.io](mailto:integrations@branch.io)|
		| **Live Branch Key** | This is the Live Branch key found on the [Link Settings page](https://dashboard.branch.io/link-settings) of your Live Branch app|
		| **Live Branch URI** | This is the Live URI scheme that you have set for your app on the [Link Settings page](https://dashboard.branch.io/link-settings) for your Live Branch app|
		| **Live Android Path Prefix** | This field is only applicable if you are on the `bnc.lt` domain [Link Settings page](https://dashboard.branch.io/link-settings) for your Live Branch app. You can find it underneath the field labeled SHA256 Cert Fingerprints on the [Link Settings page](https://dashboard.branch.io/link-settings) once you’ve enabled App Links. It will look something like this: `/WSuf` (the initial / character should be included).|
		| **Live App Links** | This field is applicable if you want to enable `APPLINKS` and `UNIVERSAL LINKS` for your domain. Please make sure to add the correct domain found on the bottom of the [Link Settings page](https://dashboard.branch.io/link-settings) of your Live Branch app. Add the -alternate domain to have your Branch links deeplink from your [Deepviews](https://branchmetrics.github.io/docs/pages/web/deep-views/) and [Journeys](https://branchmetrics.github.io/docs/pages/web/journeys/). If you are not using a `app.links` domain please write into [integrations@branch.io](mailto:integrations@branch.io)|

		- Note for Android
		> 	Occasionally, Android will barf after you add our library due to generic issues unrelated to Branch. Please see this [Android troubleshooting section](https://branchmetrics.github.io/docs/pages/apps/android/#troubleshoot-issues)

- #### Initialize Branch

	- Add Branch to your `Monobehavior` script of your **first Scene**

		```csharp hl_lines="8 11 12 13 14 15 16 17 18 19 20 21 22 23"
		using UnityEngine;
		using System.Collections;

		public class Spin : MonoBehaviour {

			// Use this for initialization
			void Start () {
				Branch.initSession(CallbackWithBranchUniversalObject);
			}

			void CallbackWithBranchUniversalObject(BranchUniversalObject buo, 
													BranchLinkProperties linkProps, 
													string error) {
				if (error != null) {
					System.Console.WriteLine("Error : " 
											+ error);
				} else if (linkProperties.controlParams.Count > 0) {
					System.Console.WriteLine("Deeplink params : " 
											+ buo.ToJsonString() 
											+ linkProps.ToJsonString());
				}
			}

			// Update is called once per frame
			void Update () {
				//rotate 90 degress per second
				transform.Rotate(Vector3.up * Time.deltaTime*90);
			}
		}
		```

- #### Test deep link

	- [Create a Quick link](https://dashboard.branch.io/quick-links/qlc/define) on the Branch Dashboard

	- Delete your app from the device

	- Paste Quick link in `Google Hangouts (Android)` or `Notes (iOS)`

	- Click on the Quick link to open your app

	- Compile and download your app to your device

	- You should see deferred deep link data show in your app


## Implement features
- #### Create content reference
- #### Create deep link
- #### Share deep link
- #### Read deep link
- #### Navigate to content
- #### Display content
- #### Track content
- #### Track users
- #### Track events
- #### Track commerce
- #### Handle referrals

## Troubleshoot issues
- #### Recommendations
- #### Sample app
