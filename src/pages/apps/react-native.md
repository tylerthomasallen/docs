## Integrate Branch

- #### Configure Branch

    - Complete your [Branch Dashboard](https://dashboard.branch.io/settings/link)

        ![image](http://i.imgur.com/wazVu3U.png)
        ![image](http://i.imgur.com/9PEylbS.png)

- #### Install Branch

    - Option 1: Simple (iOS or Android)

		```
		npm install --save react-native-branch@2.0.0-beta.7
		react-native link react-native-branch
		```

	- Option 2: [CocoaPods](https://cocoapods.org/)

		```
		pod "React", path: "../node_modules/react-native"

		# The following line is necessary with use_frameworks! or RN >= 0.42.
		pod "Yoga", path: "../node_modules/react-native/ReactCommon/yoga"

		pod "react-native-branch", path: "../node_modules/react-native-branch"
		pod "Branch-SDK", path: "../node_modules/react-native-branch/ios"
		```

	- Option 3: [Carthage](https://github.com/Carthage/Carthage)

		```
		github "BranchMetrics/ios-branch-deep-linking"
		carthage update
		```


- #### Configure app

	- iOS

		- Configure bundle identifier

		    - Bundle Id matches [Branch Dashboard](https://dashboard.branch.io/settings/link)

		        ![image](http://i.imgur.com/BHAQIQf.png)

		- Configure associated domains

		    - Add [Branch Dashboard](https://dashboard.branch.io/settings/link) values

		        ![image](http://i.imgur.com/67t6hSY.png)

		- Configure entitlements

		    - Confirm entitlements are within target

		        ![image](http://i.imgur.com/vhwis7f.png)

		- Configure info.pList

		    - Add [Branch Dashboard](https://dashboard.branch.io/settings/link) values

		        ![image](http://i.imgur.com/PwXnHWz.png)

		- Confirm app prefix

		    - From your [Apple Developer Account](https://developer.apple.com/account/ios/identifier/bundle)

		        ![image](http://i.imgur.com/2EoN1i0.png)

	- Android

		- `Android Manifest.xml`

	        ```xml hl_lines="9 17 26 27 28 29 30 31 32 34 35 36 37 38 39 40 43 44 45 46 48 49 50 51 52 53"
	        <?xml version="1.0" encoding="utf-8"?>
	        <manifest xmlns:android="http://schemas.android.com/apk/res/android"
	            package="com.eneff.branchandroid">

	            <uses-permission android:name="android.permission.INTERNET" />

	            <application
	                android:allowBackup="true"
	                android:name="com.eneff.branchandroid.CustomApplicationClass"
	                android:icon="@mipmap/ic_launcher"
	                android:label="@string/app_name"
	                android:supportsRtl="true"
	                android:theme="@style/AppTheme">

	                <activity
	                    android:name=".MainActivity"
	                    android:launchMode="singleTask"
	                    android:label="@string/app_name"
	                    android:theme="@style/AppTheme.NoActionBar">

	                    <intent-filter>
	                        <action android:name="android.intent.action.MAIN" />
	                        <category android:name="android.intent.category.LAUNCHER" />
	                    </intent-filter>

	                    <!-- Branch URI Scheme -->
	                    <intent-filter>
	                        <data android:scheme="branchandroid" />
	                        <action android:name="android.intent.action.VIEW" />
	                        <category android:name="android.intent.category.DEFAULT" />
	                        <category android:name="android.intent.category.BROWSABLE" />
	                    </intent-filter>

	                    <!-- Branch App Links (optional) -->
	                    <intent-filter android:autoVerify="true">
	                        <action android:name="android.intent.action.VIEW" />
	                        <category android:name="android.intent.category.DEFAULT" />
	                        <category android:name="android.intent.category.BROWSABLE" />
	                        <data android:scheme="https" android:host="uobg.app.link" />
	                    </intent-filter>
	                </activity>

	                <!-- Branch init -->
	                <meta-data android:name="io.branch.sdk.BranchKey" android:value="key_live_gdzsepIaUf7wG3dEWb3aBkmcutm0PwJa" />
	                <meta-data android:name="io.branch.sdk.BranchKey.test" android:value="key_test_edwDakKcMeWzJ3hC3aZs9kniyuaWGCTa" />
	                <meta-data android:name="io.branch.sdk.TestMode" android:value="false" />

	                <!-- Branch install referrer tracking (optional) -->
	                <receiver android:name="io.branch.referral.InstallListener" android:exported="true">
	                    <intent-filter>
	                        <action android:name="com.android.vending.INSTALL_REFERRER" />
	                    </intent-filter>
	                </receiver>

	            </application>

	        </manifest>
	        ```

	    - Replace the following with values from your [Branch Dashboard](https://dashboard.branch.io/settings/link)
	        - `branchandroid`
	        - `uobg.app.link`
	        - `key_live_gdzsepIaUf7wG3dEWb3aBkmcutm0PwJa`
	        - `key_test_edwDakKcMeWzJ3hC3aZs9kniyuaWGCTa`

- #### Initialize Branch

	- Swift 3.0 `AppDelegate.swift`

		```swift hl_lines="3 4 5 10 11 12 13 14 15 16 17"
		// Initialize the Branch Session at the top of existing application:didFinishLaunchingWithOptions:
		func application(_ application: UIApplication, didFinishLaunchingWithOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
		    // Uncomment this line to use the test key instead of the live one.
		    // RNBranch.useTestInstance()
		    RNBranch.initSession(launchOptions: launchOptions, isReferrable: true) // <-- add this

		    //...
		}

		// Add the openURL and continueUserActivity functions
		func application(_ app: UIApplication, open url: URL, options: [UIApplicationOpenURLOptionsKey : Any] = [:]) -> Bool {
		    return RNBranch.branch.application(app, open: url, options: options)
		}

		func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([Any]?) -> Void) -> Bool {
		    return RNBranch.continue(userActivity)
		}
		```

	- Objective C `AppDelegate.m`

		```objc hl_lines="1 6 7 8 14 15 16 17 18 19 20 21 22 23"
		#import <react-native-branch/RNBranch.h> // at the top

		// Initialize the Branch Session at the top of existing application:didFinishLaunchingWithOptions:
		- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
		{
		    // Uncomment this line to use the test key instead of the live one.
		    // [RNBranch useTestInstance]
		    [RNBranch initSessionWithLaunchOptions:launchOptions isReferrable:YES]; // <-- add this

		    NSURL *jsCodeLocation;
		    //...
		}

		// Add the openURL and continueUserActivity functions
		- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
		{
		  return [RNBranch.branch application:app openURL:url options:options];
		}

		- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray *restorableObjects))restorationHandler {
		    return [RNBranch continueUserActivity:userActivity];
		}
		```

	- Android

		- `MainApplication.java`

			```java hl_lines="3 4 5 14 22"
			// ...

			// import Branch and RNBranch
			import io.branch.rnbranch.*;
			import io.branch.referral.Branch;

			//...

			// add RNBranchPackage to react-native package list
			@Override
			  protected List<ReactPackage> getPackages() {
			    return Arrays.<ReactPackage>asList(
			            new MainReactPackage(),
			            new RNBranchPackage(), // <-- add this

			// ...

			// add onCreate() override
			@Override
			public void onCreate() {
			  super.onCreate();
			  Branch.getAutoInstance(this);
			}
			```

			```java hl_lines="1 2 15 18 19 20 21"
			import io.branch.rnbranch.*; // <-- add this
			import android.content.Intent; // <-- and this

			public class MainActivity extends ReactActivity {

			    @Override
			    protected String getMainComponentName() {
			        return "base";
			    }

			    // Override onStart, onNewIntent:
			    @Override
			    protected void onStart() {
			        super.onStart();
			        RNBranchModule.initSession(this.getIntent().getData(), this);
			    }

			    @Override
			    public void onNewIntent(Intent intent) {
			        this.setIntent(intent);
			    }
			    // ...
			}
			```

		- `CustomApplicationClass.java`
			```java hl_lines="2 9 10 11 12 13"
			import android.app.Application;
			import io.branch.referral.Branch;

			public class CustomApplicationClass extends Application {
			    @Override
			    public void onCreate() {
			        super.onCreate();

			        // Branch logging for debugging
			        Branch.enableLogging();

			        // Branch object initialization
			        Branch.getAutoInstance(this);
			    }
			}
			```

- #### Test deep link iOS

    - Create a deep link from the [Branch Marketing Dashboard](https://dashboard.branch.io/marketing)

    - Delete your app from the device

    - Compile your app *(`cordova run ios` `phonegap run ios` `ionic run ios`)*

    - Paste deep link in `Apple Notes`

    - Long press on the deep link *(not 3D Touch)*

    - Click `Open in "APP_NAME"` to open your app *([example](http://i.imgur.com/VJVICXd.png))*

- #### Test deep link Android

    - Create a deep link from the [Branch Marketing Dashboard](https://dashboard.branch.io/marketing)

    - Delete your app from the device

    - Compile your app *(`cordova run android` `phonegap run android` `ionic run android`)*

    - Paste deep link in `Google Hangouts`

    - Click on the deep link to open your app


## Implement features

- #### Import Branch

	- `index.ios.js`/`index.android.js`

		```js
		import branch, {
		  AddToCartEvent,
		  AddToWishlistEvent,
		  PurchasedEvent,
		  PurchaseInitiatedEvent,
		  RegisterViewEvent,
		  ShareCompletedEvent,
		  ShareInitiatedEvent
		} from 'react-native-branch'
		```

- #### Create content reference

	- The `Branch Universal Object` encapsulates the thing you want to share

    ```js
    // only canonicalIdentifier is required
    let branchUniversalObject = await branch.createBranchUniversalObject('canonicalIdentifier', {
		automaticallyListOnSpotlight: true,
	    metadata: {prop1: 'test', prop2: 'abc'},
   	    title: 'Cool Content!',
		contentDescription: 'Cool Content Description'})
    ```

- #### Create deep link

	```js
	let linkProperties = {
	    feature: 'share',
	    channel: 'facebook'
	}

	let controlParams = {
	     $desktop_url: 'http://desktop-url.com/monster/12345'
	}

	let {url} = await branchUniversalObject.generateShortUrl(linkProperties, controlParams)
	```

- #### Share deep link

	```js
	let shareOptions = { messageHeader: 'Check this out', messageBody: 'No really, check this out!' }
	let linkProperties = { feature: 'share', channel: 'RNApp' }
	let controlParams = { $desktop_url: 'http://example.com/home', $ios_url: 'http://example.com/ios' }
	let {channel, completed, error} = await branchUniversalObject.showShareSheet(shareOptions, linkProperties, controlParams)
	```

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
