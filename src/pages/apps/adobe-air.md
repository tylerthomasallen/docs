## Integrate Branch

- #### Configure Branch

    - Complete your [Branch Dashboard](https://dashboard.branch.io/settings/link)

        ![image](https://i.imgur.com/wazVu3U.png)
        ![image](https://i.imgur.com/9PEylbS.png)

- #### Configure app

    In your project’s `*-app.xml` file, insert the platform-specific snippet(s) below. Change `YOUR URI SCHEME` to the URI scheme you’ve selected.

    - *iOS*

        ```js
        <iPhone><InfoAdditions><![CDATA[
            <!-- other stuff -->
            <key>branch_key</key>
            <string>key_live_YOUR BRANCH KEY</string>
            <key>CFBundleURLTypes</key>
            <!-- Put your URI scheme below -->
            <array>
                <dict>
                    <key>CFBundleURLSchemes</key>
                    <array>
                        <string>YOUR URI SCHEME</string>
                    </array>
                </dict>
            </array>
        ]]></InfoAdditions></iPhone>
        ```

    - *Android*

        ```js
        <android><manifestAdditions><![CDATA[
            <!-- other stuff -->
            <application>
                <meta-data android:name="io.branch.sdk.BranchKey" android:value="key_live_YOUR BRANCH KEY" />
                <activity>
                    <intent-filter>
                        <data android:scheme="YOUR URI SCHEME" />
                        <action android:name="android.intent.action.VIEW" />
                        <category android:name="android.intent.category.DEFAULT" />
                        <category android:name="android.intent.category.BROWSABLE" />
                    </intent-filter>
                </activity>
                <activity android:name="io.branch.nativeExtensions.branch.BranchActivity" android:launchMode="singleTask" android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />
            </application>
        ]]></manifestAdditions></android>
        ```

- #### Initialize Branch

    In `Main.as`

    ```as3
    // Import
    import io.branch.nativeExtensions.branch.Branch;
    import io.branch.nativeExtensions.branch.BranchEvent;

    // Then create a Branch instance:
    var branch:Branch = new Branch();

    // Register two events before initializing the SDK:
    branch.addEventListener(BranchEvent.INIT_FAILED, initFailed);
    branch.addEventListener(BranchEvent.INIT_SUCCESSED, initSuccessed);

    private function initFailed(bEvt:BranchEvent):void {
        trace("BranchEvent.INIT_FAILED", bEvt.informations);
    }

    private function initSuccessed(bEvt:BranchEvent):void {
        trace("BranchEvent.INIT_SUCCESSED", bEvt.informations);

        // params are the deep linked params associated with the link that the user clicked before showing up
        // params will be empty if no data found
        var referringParams:Object = JSON.parse(bEvt.informations);

        //trace(referringParams.user);
    }

    // Initialize the SDK:
    branch.init();
    ```

    !!! warning
        Be sure to have the INIT_SUCCESSED event called, otherwise read the bEvt.informations from the INIT_FAILED event.

- #### Compiling ANE

    - To compile this ANE, you need to have [ANT](https://ant.apache.org/) installed on your (OS X) machine, and [Java 1.6](https://support.apple.com/kb/DL1572).

    - Clone the repository, and change the [build.config](https://github.com/BranchMetrics/Branch-AIR-ANE-SDK/blob/master/build/build.config) to match your computer settings with the path to your AIR SDK (you should have the latest one), to the Android SDK, and to a keystore (a certificate for Air, which may be a self-signed certificate created with adt).

    - Finally open a command line, `cd` in the directory and just call `ant`.

- #### Test deep link iOS

    - Create a deep link from the [Branch Dashboard](https://dashboard.branch.io/marketing)

    - Delete your app from the device

    - Compile your app

    - Paste deep link in `Apple Notes`

    - Long press on the deep link *(not 3D Touch)*

    - Click `Open in "APP_NAME"` to open your app *([example](https://i.imgur.com/VJVICXd.png))*

- #### Test deep link Android

    - Create a deep link from the [Branch Dashboard](https://dashboard.branch.io/marketing)

    - Delete your app from the device

    - Compile your app

    - Paste deep link in `Google Hangouts`

    - Click on the deep link to open your app

## Implement features

- #### Create deep link

    ```as3
    //be sure to add the event listeners:
    branch.addEventListener(BranchEvent.GET_SHORT_URL_FAILED, getShortUrlFailed);
    branch.addEventListener(BranchEvent.GET_SHORT_URL_SUCCESSED, getShortUrlSuccessed);

    private function getShortUrlSuccessed(bEvt:BranchEvent):void {
        trace("BranchEvent.GET_SHORT_URL_SUCCESSED", "my short url is: " + bEvt.informations);
    }

    private function getShortUrlFailed(bEvt:BranchEvent):void {
        trace("BranchEvent.GET_SHORT_URL_FAILED", bEvt.informations);
    }

    var dataToInclude:Object = {
      "article_id": "1234",
      "$og_title": "Hot off the presses!",
      "$og_image_url": "mysite.com/image.png",
      "$desktop_url": "mysite.com/article1234"
    };

    branch.getShortUrl(tags, "sms", BranchConst.FEATURE_TAG_SHARE, JSON.stringify(dataToInclude));
    ```

- #### Read deep link

    - Returns [deep link properties](/pages/links/integrate/#read-deep-links)

    - Install & Open

        ```as3
        var sessionParams:String = branch.getLatestReferringParams();
        var sessionParamsObj:Object = JSON.parse(sessionParams);
        ```

    - Install Only
        ```as3
        var installParams:String = branch.getFirstReferringParams();
        var installParamsObj:Object = JSON.parse(installParams);
        ```

- #### Track users

    ```as3
    branch.setIdentity("your user id");
    branch.logout();
    ```

- #### Handle referrals

    - Referral points are obtained from events triggered by users from rules created on the [Branch Dashboard](https://dashboard.branch.io/referrals/rules)

    - Validate on the [Branch Dashboard](https://dashboard.branch.io/referrals/analytics)

    - Reward credits with the [Referral guide](/pages/dashboard/analytics/#referrals)

    - Redeem credits

        ```as3
        branch.redeemRewards(5);
        ```

    - Load credits

        ```as3
        branch.getCredits();
        ```

    - Load history

        ```as3
        branch.getCreditsHistory();
        ```

## Troubleshoot issues

- #### Sample app

    You can find a full sample app in the main open source repo for the Air ANE. Visit the [Github page here](https://github.com/BranchMetrics/air-ane-branch-deep-linking).