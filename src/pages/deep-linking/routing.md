## Overview

When a Branch link is opened, either your app launches or users are taken to the App/Play store to download it. Deep links improve this process by routing users directly to specific content after your app launches. With Branch, this still works even if users have to stop and download the app first (a.k.a., "deferred deep links").

Deep links are an incredibly important part of delivering a high quality user experience. With deep links, you can take users to the exact thing they clicked on or even offer a customized onboarding experience.

## Option 1: Let Branch use your existing deep link routing

If your app already supports deep linking using URI paths, you can populate the `$deeplink_path`, `$ios_deeplink_path` or `$android_deeplink_path` link parameters with the URI path of the content to be displayed within the app. When the Branch SDK receives a link containing one of these parameters it will automatically load the specified URI path.

!!! warning "Incomplete support on iOS"
	[Universal Links](/pages/deep-linking/universal-links/) and [Spotlight](/pages/organic-search/spotlight/) do not support deep linking via URI paths. If you use `$deeplink_path` or `$ios_deeplink_path`, you will need to implement some custom logic. [Click here for more information](#how-to-handle-uri-paths-with-universal-links).


### How to insert custom deep link routes into a Branch link

All of the examples below create links that will cause Branch to display `myapp://content/1234` after launch.

!!! example "When creating links dynamically"

	If you're creating a link by appending query parameters, just append the control parameters to the URL. Please make sure to URL encode everything, lest the link will break.

	```js
	"https://[branchsubdomain]?%24deeplink_path=content%2F1234"
	```

!!! example "When using a mobile SDK"

	- *iOS - Objective C*

		```obj-c
		BranchLinkProperties *linkProperties = [[BranchLinkProperties alloc] init];
		linkProperties.feature = @"sharing";
		linkProperties.channel = @"facebook";
		[linkProperties addControlParam:@"$deeplink_path" withValue:@"content/1234"];
		```

	- *iOS - Swift*

		```swift
		let linkProperties: BranchLinkProperties = BranchLinkProperties()
		linkProperties.feature = "sharing"
		linkProperties.channel = "facebook"
		linkProperties.addControlParam("$deeplink_path", withValue: "content/1234")
		```

	- *Android*

		```java
		LinkProperties linkProperties = new LinkProperties()
		               .setChannel("facebook")
		               .setFeature("sharing")
		               .addControlParameter("$deeplink_path", "content/1234");
		```

!!! example "When creating Quick Links on the Branch dashboard"

	You can specify the control parameters for individual Quick Links by inserting the keys and values into the _Deep Link Data (Advanced)_ section.

	![image](/img/pages/deep-linking/routing/deep-link_path.png)


### How to handle URI paths with Universal Links or App Links

Because Universal Links, Spotlight and Android App Links do not use URI schemes for deep link routing. If you populate `$deeplink_path`, `$ios_deeplink_path` or `$android_deeplink_path` with a URI path, you will need to a bit of additional work to ensure that Branch links route according to your original schema.

1. Call initSession as described in [the app configuration steps](#dialog-code?ios=initialize-branch&android=initialize-branch&adobe=initialize-branch&cordova=initialize-branch&mparticleAndroid=initialize-branch&mparticleIos=initialize-branch&titanium=initialize-branch&reactNative=initialize-branch&unity=initialize-branch&xamarin=initialize-branch)
1. In the callback function, add some custom code to read the appropriate `$deeplink_path` parameter in the `params` 
1. Use this value to call your existing routing logic to route users to the correct place in your app

## Option 2: Build custom routing inside the routing callback

- *iOS - Objective C*

Inside the `andRegisterDeepLinkHandler` callback in your AppDelegate, you will want to examine the params dictionary to determine whether the user opened a link to content. Below is an example assuming that the links correspond to pictures.

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

  // initialize the session, setup a deep link handler
  [[Branch getInstance] initSessionWithLaunchOptions:launchOptions
                          andRegisterDeepLinkHandler:^(NSDictionary *params, NSError *error) {

    // start setting up the view controller hierarchy
    UINavigationController *navC = (UINavigationController *)self.window.rootViewController;
    UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"Main" bundle:nil];
    UIViewController *nextVC;

    // If the key 'pictureId' is present in the deep link dictionary
    // then load the picture screen with the appropriate picture
    NSString *pictureId = [params objectForKey:@"pictureId"];
    if (pictureId) {
      nextVC = [storyboard instantiateViewControllerWithIdentifier:@"PicVC"];
      [nextVC setNextPictureId:pictureId];
    } else {
      nextVC = [storyboard instantiateViewControllerWithIdentifier:@"MainVC"];
    }

    // navigate!
    [navC setViewControllers:@[nextVC] animated:YES];
  }];

  return YES;
}
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    let branch: Branch = Branch.getInstance()
		branch.initSession(launchOptions: launchOptions, andRegisterDeepLinkHandler: {params, error in
        // If the key 'pictureId' is present in the deep link dictionary
        if error == nil && params["+clicked_branch_link"] != nil && params["pictureId"] != nil {
            print("clicked picture link!")
            // load the view to show the picture
        } else {
            // load your normal view
        }
    })
    return true
}
{% endhighlight %}
{% endtab %}
{% endtabs %}
{% endif %}

{% if page.android %}

Inside `onStart` in the Activity that initializes Branch, you will want to examine the dictionary passed in the callback to see if the user opened a link to content. Below is an example assuming that the links correspond to pictures.

{% highlight java %}

@Override
public void onStart() {
    super.onStart();

    Branch branch = Branch.getInstance();

    // If NOT using automatic session management
    // Branch branch = Branch.getInstance(getApplicationContext());

    branch.initSession(new BranchReferralInitListener(){
        @Override
        public void onInitFinished(JSONObject referringParams, Branch.BranchError error) {
            if (error == null) {
                // params are the deep linked params associated with the link that the user clicked before showing up
                // params will be empty if no data found
                String pictureID = referringParams.optString("picture_id", "");
                if (pictureID.equals("")) {
                    startActivity(new Intent(this, HomeActivity.class));
                }
                else {
                    Intent i = new Intent(this, ViewerActivity.class);
                    i.putExtra("picture_id", pictureID);
                    startActivity(i);
                }
            } else {
                Log.e("MyApp", error.getMessage());
            }
        }
    }, this.getIntent().getData(), this);
}
{% endhighlight %}

{% endif %}

## Option 3: Use Branch's easy config deep link routing