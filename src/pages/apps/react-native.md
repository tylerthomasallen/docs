## Integrate Branch

- #### Configure Branch

    - Complete your [Branch Dashboard](https://dashboard.branch.io/settings/link)

        ![image](http://i.imgur.com/wazVu3U.png)
        ![image](http://i.imgur.com/9PEylbS.png)

- #### Install Branch

    - Install the module

        - *Yarn*
            ```bash
            yarn add react-native-branch
            ```

        - *NPM*
            ```bash
            npm install --save react-native-branch
            ```

    - (Optional) Add a branch.json file to the root of your app (next to package.json).
        You can configure the contents at any time, but it must be present when you
        run `react-native link` in order to be automatically included in your native
        projects. This allows you to configure certain behaviors that otherwise require
        native code changes. See https://rnbranch.app.link/branch-json for full details
        on the branch.json file.

    - In a pure React Native app using `react-native link`

        ```bash
        react-native link react-native-branch
        ```

    - In a native iOS app using the `React` pod

        This configuration is for native apps that include a React Native component as
        described in the [React Native docs](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html#configuring-cocoapods-dependencies).

        Add these lines to your `Podfile`:
        ```ruby
        pod 'react-native-branch', path: '../node_modules/react-native-branch'
        pod 'Branch-SDK', path: '../node_modules/react-native-branch/ios'
        ```

        Then run `pod install` to regenerate the `Pods` project with the new dependencies.
        Note that the location of `node_modules` relative to your `Podfile` may vary.

- #### Update from < 2.0.0

    - If also upgrading React Native, use `react-native-git-upgrade` to upgrade
        your React Native app to the latest version of React Native, if possible.

        ```bash
        npm install -g react-native-git-upgrade
        cd /path/to/myapp
        react-native-git-upgrade
        ```

    - Version 2.x includes the native SDKs in the NPM module. Please remove any installation
        of the native Branch SDK from Maven, CocoaPods, Carthage or by manually adding the framework (iOS).

    - Android:

        - In `android/app/build.gradle`:

        - Remove

        ```gradle
        compile 'io.branch.sdk.android:library:2.+'
        ```

    - iOS

        - Remove the Branch SDK depending on how you originally installed it.

        - Originally installed using CocoaPods:

            - Remove `pod "Branch"` from your `Podfile`.

            - If using the `React` pod from `node_modules`, add `pod "Branch-SDK", path: "../node_modules/react-native-branch/ios"`. (Note the different pod name.)

                ```ruby hl_lines="2"
                pod "react-native-branch", path: "../node_modules/react-native-branch"
                pod "Branch-SDK", path: "../node_modules/react-native-branch/ios"
                ```

            - `pod install`

            - To remove CocoaPods entirely from your project, in case you were only using it for Branch:

                ```bash
                pod deintegrate
                ```

        - Originally installed using Carthage:

            - Remove the `Branch.framework` from your project's dependencies.

            - Remove `Branch.framework` from the input and output paths of your `carthage copy-frameworks` build phase.

        - Originally installed manually:

            - Remove the `Branch.framework` from your project's dependencies.

        - If also updating from react-native < 0.40 (react-native-branch 0.9), replace `#import "RNBranch.h"` with:

            ```Objective-C hl_lines="2"
            #import <React/RCTRootView.h>
            #import <react-native-branch/RNBranch.h>
            ```

- #### Configure app

    - iOS

        - Configure bundle identifier

            - Bundle Id matches [Branch Dashboard](https://dashboard.branch.io/settings/link)

                ![image](http://i.imgur.com/BHAQIQf.png)

        - Configure associated domains

            - Add your link domains from your [Branch Dashboard](https://dashboard.branch.io/settings/link)
            - `-alternate` is needed for Universal Linking with the [Web SDK](/pages/web/integrate/) inside your Website
            - `test-` is needed if you need use a [test key](#use-test-key)
            - If you use a [custom link domain](/pages/dashboard/integrate/#change-link-domain), you will need to include your old link domain, your `-alternate` link domain, and your new link domain

                ![image](http://i.imgur.com/67t6hSY.png)

        - Configure entitlements

            - Confirm entitlements are within target

                ![image](http://i.imgur.com/vhwis7f.png)

        - Configure info.pList

            - Add [Branch Dashboard](https://dashboard.branch.io/account-settings/app) values

                - Add `branch_app_domain` with your live key domain
                - Add `branch_key` with your current Branch key
                - Add your URI scheme as `URL Types` -> `Item 0` -> `URL Schemes`

            ![image](http://i.imgur.com/PwXnHWz.png)

        - Confirm app prefix

            - From your [Apple Developer Account](https://developer.apple.com/account/ios/identifier/bundle)

                ![image](http://i.imgur.com/2EoN1i0.png)

    - Android

        - `AndroidManifest.xml`

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

        - Replace the following with values from your [Branch Dashboard](https://dashboard.branch.io/account-settings/app)
            - `branchandroid`
            - `uobg.app.link`
            - `key_live_gdzsepIaUf7wG3dEWb3aBkmcutm0PwJa`
            - `key_test_edwDakKcMeWzJ3hC3aZs9kniyuaWGCTa`

      - `android/app/proguard-rules.pro`
          ```proguard
          -dontwarn io.branch.**
          ```

- #### Initialize Branch

    - iOS

        If you are using Swift, add `#import <react-native-branch/RNBranch.h>` to your Bridging header if you have one.

        If you are using the `React` pod in a native app with `use_frameworks!`, you may simply use a Swift import in the AppDelegate.swift: `import react_native_branch`.

        - *Swift 3 & 4- AppDelegate.swift*

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

        - *Objective-C - AppDelegate.m*

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

            - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
                if (![RNBranch.branch application:application openURL:url sourceApplication:sourceApplication annotation:annotation]) {
                    // do other deep link routing for the Facebook SDK, Pinterest SDK, etc
                }
                return YES;
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
            import io.branch.rnbranch.RNBranchPackage;
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

        - `MainActivity.java`

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
                      RNBranchModule.initSession(getIntent().getData(), this);
                  }

                  @Override
                  public void onNewIntent(Intent intent) {
                      setIntent(intent);
                  }
                  // ...
            }
            ```

- #### Test deep link iOS

    - Create a deep link from the [Branch Marketing Dashboard](https://dashboard.branch.io/marketing)

    - Delete your app from the device

    - Compile your app with Xcode

    - Paste deep link in `Apple Notes`

    - Long press on the deep link *(not 3D Touch)*

    - Click `Open in "APP_NAME"` to open your app *([example](http://i.imgur.com/VJVICXd.png))*

- #### Test deep link Android

    - Create a deep link from the [Branch Marketing Dashboard](https://dashboard.branch.io/marketing)

    - Delete your app from the device

    - Compile your app with Android Studio

    - Paste deep link in `Google Hangouts`

    - Click on the deep link to open your app


## Implement features

- #### Import Branch

    - In any React Native source file that uses the Branch SDK. You can import
    only the symbols you are using.

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

    - The `Branch Universal Object` encapsulates the thing you want to share (content or user)

    - Uses the [Universal Object Properties](/pages/links/integrate/#universal-object)

    ```js
    // only canonicalIdentifier is required
    let branchUniversalObject = await branch.createBranchUniversalObject('canonicalIdentifier', {
        automaticallyListOnSpotlight: true,
        metadata: {prop1: 'test', prop2: 'abc'},
        title: 'Cool Content!',
        contentDescription: 'Cool Content Description'})
    ```

- #### Create deep link

    - Creates a deep link URL with encapsulated data

    - Needs a [Branch Universal Object](#create-content-reference)

    - Uses [Deep Link Properties](/pages/links/integrate/)

    - Validate with the [Branch Dashboard](https://dashboard.branch.io/liveview/links)

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

    -  Will generate a Branch deep link and tag it with the channel the user selects

    - Needs a [Branch Universal Object](#create-content-reference)

    - Uses [Deep Link Properties](/pages/links/integrate/)

    ```js
    let shareOptions = { messageHeader: 'Check this out', messageBody: 'No really, check this out!' }
    let linkProperties = { feature: 'share', channel: 'RNApp' }
    let controlParams = { $desktop_url: 'http://example.com/home', $ios_url: 'http://example.com/ios' }
    let {channel, completed, error} = await branchUniversalObject.showShareSheet(shareOptions, linkProperties, controlParams)
    ```

- #### Read deep link

    - Retrieve Branch data from a deep link

    - Best practice to receive data from the `listener` (to prevent a race condition)

    - Returns [deep link properties](/pages/links/integrate/#read-deep-links)

    - Listener

    ```js
    branch.subscribe(({ error, params }) => {
      if (error) {
        console.error('Error from Branch: ' + error)
        return
      }

      // params will never be null if error is null
    })

    let lastParams = await branch.getLatestReferringParams() // params from last open
    let installParams = await branch.getFirstReferringParams() // params from original install
    ```

- #### Navigate to content

    ```js
    branch.subscribe(({ error, params }) => {
      if (error) {
        console.error('Error from Branch: ' + error)
        return
      }

      // params will never be null if error is null

      if (params['+non_branch_link']) {
        const nonBranchUrl = params['+non_branch_link']
        // Route non-Branch URL if appropriate.
        return
      }

      if (!params['+clicked_branch_link']) {
        // Indicates initialization success and some other conditions.
        // No link was opened.
        return
      }

      // A Branch link was opened.
      // Route link based on data in params, e.g.

      // Get title and url for route
      const title = params.$og_title
      const url = params.$canonical_url
      const image = params.$og_image_url

      // Now push the view for this URL
      this.navigator.push({ title: title, url: url, image: image })
    })
    ```

- #### Display content

    - List content on iOS Spotlight

    - Needs a [Branch Universal Object](#create-content-reference)

    - Listing on Spotlight requires adding `CoreSpotlight.framework` to your Xcode project.

    - Recommended

    ```js
    let branchUniversalObject = await branch.createBranchUniversalObject('canonicalIdentifier', {
      automaticallyListOnSpotlight: true,
      // other properties
    })

    branchUniversalObject.userCompletedAction(RegisterViewEvent)
    ```

    - Alternate method

    ```js
    branchUniversalObject.listOnSpotlight()
    ```

- #### Track content

    - Track how many times a piece of content is viewed

    - Needs a [Branch Universal Object](#create-content-reference)

    - Uses [Track content properties](#track-content-properties)

    - Validate with the [Branch Dashboard](https://dashboard.branch.io/liveview/content)

    ```js
    import branch, { RegisterViewEvent } from 'react-native-branch'
    branchUniversalObject.userCompletedAction(RegisterViewEvent)
    ```

- #### Track users

    - Sets the identity of a user (email, ID, UUID, etc) for events, deep links, and referrals

    - Validate with the [Branch Dashboard](https://dashboard.branch.io/liveview/identities)

    ```js
    branch.setIdentity('theUserId')
    branch.logout()
    ```

- #### Track events

    - Track custom events

    - Events named `open`, `close`, `install`, and `referred session` are Branch restricted

    - `63` max event name length

    - Best to [Track users](#track-users) before [Track events](#track-events) to associate a custom event to a user

    - Validate with the [Branch Dashboard](https://dashboard.branch.io/liveview/events)

    ```js
    branchUniversalObject.userCompletedAction('Custom Action', { key: 'value' })
    ```

- #### Track content properties

    | Event | Description |
    | ----- | --- |
    | RegisterViewEvent | User viewed the object |
    | AddToWishlistEvent | User added the object to their wishlist |
    | AddToCartEvent | User added object to cart |
    | PurchaseInitiatedEvent | User started to check out |
    | PurchasedEvent | User purchased the item |
    | ShareInitiatedEvent | User started to share the object |
    | ShareCompletedEvent | User completed a share |


- #### Track commerce

    - Use the `branch.sendCommerceEvent` method to record commerce events

    ```js
    branch.sendCommerceEvent("20.00")
    branch.sendCommerceEvent(50, {key1: "value1", key2: "value2"})
    ```

- #### Handle referrals

    - Referral points are obtained from referral rules on the [Branch Dashboard](https://dashboard.branch.io/referrals/rules)

    - Validate on the [Branch Dashboard](https://dashboard.branch.io/referrals/analytics)

    - Reward credits

        -  [Referral guide](/pages/dashboard/analytics/#referrals)

    - Redeem rewards

        ```js
        let redeemResult = await branch.redeemRewards(amount, bucket)
        ```

    - Load rewards

        ```js
        let rewards = await branch.loadRewards()
        ```

    - Load history

        ```js
        let creditHistory = await branch.getCreditHistory()
        ```

- #### Track Apple Search Ads

    - Allows Branch to track Apple Search Ads deep linking analytics

    - Analytics from Apple's API have been slow which will make our analytics lower. Additionally, Apple's API does not send us all the data of an ad every time which will make ads tracked by us to show a generic campaign sometimes.

    - This requires an option to be set before the native SDK initializes, which
        happens before JS finishes loading. There are two options:

        1. Add `"delayInitToCheckForSearchAds": true` to your `branch.json` file:

            ```json
            {
                "delayInitToCheckForSearchAds": true
            }
            ```

        2. Modify your AppDelegate in Xcode. Insert the following before the call
            to `[RNBranch initSessionWithLaunchOptions:isReferrable:]`.

            - *Swift 3 & 4*

                ```swift
                Branch.getInstance().delayInitToCheckForSearchAds()
                ```

            - *Objective-C*

                ```objc
                [[Branch getInstance] delayInitToCheckForSearchAds];
                ```

    - Test with fake campaign params (do not test in production)

        1. Add `"appleSearchAdsDebugMode": true` to `branch.debug.json`. Do
            not set this parameter in `branch.json`, or it will be enabled in
            release builds.

            ```json
            {
                "delayInitToCheckForSearchAds": true,
                "appleSearchAdsDebugMode": true
            }
            ```

        2. Add the following call to your AppDelegate (before the `initSession`) call.
            Use conditional compilation or remove before releasing to production.

            - *Swift 3 & 4*

                ```swift
                #if DEBUG
                    Branch.getInstance().setAppleSearchAdsDebugMode()
                #endif
                ```

            - *Objective-C*

                ```objc
                #ifdef DEBUG
                    [[Branch getInstance] setAppleSearchAdsDebugMode];
                #endif
                ```

## Troubleshoot issues

- #### Use test key

    - Use the Branch `test key` instead of the `live key`.

    - In iOS, add before `initSession` [Initialize Branch](#initialize-branch).

    - In iOS, update `branch_key` in your `Info.plist` to a dictionary ([example](https://github.com/BranchMetrics/ios-branch-deep-linking/blob/master/Branch-TestBed/Branch-TestBed/Branch-TestBed-Info.plist#L58-L63)).

    - In Android, set `test mode` to `true`.

    - The `test key` of your app must match the `test key` of your deep link.

    - Use conditional compilation or remove before releasing to production.

        - *Swift 3 & 4*

            ```swift
            #if DEBUG
                RNBranch.useTestInstance()
            #endif
            ```

        - *Objective-C*

            ```objc
            #ifdef DEBUG
                [RNBranch useTestInstance];
            #endif
            ```

    - *Android:* Use this in a build type or product flavor or be sure to remove before
        releasing to production.

        ```
          <meta-data android:name="io.branch.sdk.TestMode" android:value="true" />
          ```

- #### Simulate an install

    **Do not test in production.**

    This requires a native method call that must be made before JS has loaded. There are two options.

    1. Use a `branch.json` file with your project. See https://rnbranch.app.link/branch-json for full details.
        Add `"debugMode": true` to `branch.debug.json`:

        ```json
        {
            "appleSearchAdsDebugMode": true,
            "debugMode": true,
            "delayInitToCheckForSearchAds": true
        }
        ```

        Do not add this setting to `branch.json`, or it will be enabled for release builds.

    2. Modify your native app code.

        **Android**

        Simulated installs may be enabled on Android by adding `<meta-data android:name="io.branch.sdk.TestMode" android:value="true"/>` to the `application` element of your Android manifest. Use this in a build type
        such as `debug` or a product flavor, or be sure to remove it from your manifest before releasing to prod.
        See https://docs.branch.io/pages/apps/android/#simulate-an-install for full details.

        Alternately, add `RNBranchModule.setDebug();` in your MainActivity before the call to `initSession`. Be sure to remove it
        before releasing to prod.

        ```java
            // Remove before prod release
            RNBranchModule.setDebug();
            RNBranchModule.initSession(getIntent().getData(), this);
        ```

        **iOS**

        Add `[RNBranch setDebug];` or `RNBranch.setDebug()` in your AppDelegate before the call to `initSession`.
        Use conditional compilation or remove before releasing to prod.

        - *Swift 3 & 4*

            ```Swift
            #if DEBUG
                RNBranch.setDebug()
            #endif
            RNBranch.initSession(launchOptions: launchOptions, isReferrable: true)
            ```

        - *Objective-C*

            ```Objective-C
            #ifdef DEBUG
                [RNBranch setDebug];
            #endif
            [RNBranch initSessionWithLaunchOptions:launchOptions isReferrable:YES];
            ```

- #### Using getLatestReferringParams to handle link opens

    The `getLatestReferringParams` method is essentially a synchronous method that retrieves the latest
    referring link parameters stored by the native SDK. However, React Native does not support synchronous
    calls to native code from JavaScript, so the method returns a promise. You must `await` the response
    or use `then` to receive the result. The same remarks apply to the `getFirstReferringParams` method.
    However, this is only a restriction of React Native. The purpose of `getLatestReferringParams` is to
    retrieve those parameters one time. The promise will only return one result. It will not continue
    to return results when links are opened or wait for a link to be opened. This method is not intended
    to notify the app when a link has been opened.

    To receive notification whenever a link is opened, _including at app launch_, call
    `branch.subscribe`. The callback to this method will return any initial link that launched the
    app and all subsequent link opens. There is no need to call `getLatestReferringParams` at app
    launch to check for an initial link. Use `branch.subscribe` to handle all link opens.

- #### General troubleshooting

    See the troubleshooting guide for each native SDK:

    - [iOS](https://docs.branch.io/pages/apps/ios/#troubleshoot-issues)
    - [Android](https://docs.branch.io/pages/apps/android/#troubleshoot-issues)

- #### Sample apps

    - [Examples](https://github.com/BranchMetrics/react-native-branch-deep-linking/tree/master/examples)  
    - [Tutorial](https://github.com/BranchMetrics/react-native-branch-deep-linking/tree/master/examples/webview_tutorial)
