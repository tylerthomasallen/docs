## Integrate Branch

- #### Configure Branch

    - Complete your [Branch Dashboard](https://dashboard.branch.io/settings/link)

        ![image](http://i.imgur.com/r057ie0.png)
        ![image](http://i.imgur.com/SdcICpL.png)

- #### Install Branch

    - Import the Branch SDK to your `build.gradle`

        ```java hl_lines="30 31 33 34 35 36"
        apply plugin: 'com.android.application'

        android {
            compileSdkVersion 25
            buildToolsVersion "25.0.2"
            defaultConfig {
                applicationId "com.eneff.branchandroid"
                minSdkVersion 15
                targetSdkVersion 25
                versionCode 1
                versionName "1.0"
                testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
            }
            buildTypes {
                release {
                    minifyEnabled false
                    proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
                }
            }
        }

        dependencies {
            compile fileTree(dir: 'libs', include: ['*.jar'])
            androidTestCompile('com.android.support.test.espresso:espresso-core:2.2.2', {
                exclude group: 'com.android.support', module: 'support-annotations'
            })
            compile 'com.android.support:appcompat-v7:25.2.0'
            compile 'com.android.support:design:25.2.0'
            
            // required
            compile 'io.branch.sdk.android:library:2.+'

            // optional
            compile 'com.android.support:customtabs:23.3.0' 
            compile 'com.google.android.gms:play-services:9.0.0'
            compile 'com.google.android.gms:play-services-appindexing:9.+'

            testCompile 'junit:junit:4.12'
        }
        ```

- #### Configure app

    - Add Branch to your `AndroidManifest.xml`

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
                        <data android:scheme="https" android:host="uobg-alternate.app.link" />
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

    - Add Branch to your `CustomApplicationClass.java`

        ```java hl_lines="4 11 12 14 15"
        package com.eneff.branchandroid;

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

    - Add Branch to your `MainActivity.java`

        ```java hl_lines="3 9 14 16 17 64 65 66 67 68 69 70 71 72 73 74 75 78 79 80 81"
        package com.eneff.branchandroid;

        import android.content.Intent;
        import android.os.Bundle;
        import android.support.design.widget.FloatingActionButton;
        import android.support.design.widget.Snackbar;
        import android.support.v7.app.AppCompatActivity;
        import android.support.v7.widget.Toolbar;
        import android.util.Log;
        import android.view.View;
        import android.view.Menu;
        import android.view.MenuItem;

        import org.json.JSONObject;

        import io.branch.referral.Branch;
        import io.branch.referral.BranchError;

        public class MainActivity extends AppCompatActivity {

            @Override
            protected void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.activity_main);
                Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
                setSupportActionBar(toolbar);

                FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
                fab.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                                .setAction("Action", null).show();
                    }
                });
            }

            @Override
            public boolean onCreateOptionsMenu(Menu menu) {
                // Inflate the menu; this adds items to the action bar if it is present.
                getMenuInflater().inflate(R.menu.menu_main, menu);
                return true;
            }

            @Override
            public boolean onOptionsItemSelected(MenuItem item) {
                // Handle action bar item clicks here. The action bar will
                // automatically handle clicks on the Home/Up button, so long
                // as you specify a parent activity in AndroidManifest.xml.
                int id = item.getItemId();

                //noinspection SimplifiableIfStatement
                if (id == R.id.action_settings) {
                    return true;
                }

                return super.onOptionsItemSelected(item);
            }

            @Override
            public void onStart() {
                super.onStart();

                // Branch Init
                Branch.getInstance().initSession(new Branch.BranchReferralInitListener() {
                    @Override
                    public void onInitFinished(JSONObject referringParams, BranchError error) {
                        if (error == null) {
                            Log.i("BRANCH SDK", referringParams.toString());
                        } else {
                            Log.i("BRANCH SDK", error.getMessage());
                        }
                    }
                }, this.getIntent().getData(), this);
            }

            @Override
            public void onNewIntent(Intent intent) {
                this.setIntent(intent);
            }

        }
        ```

- #### Test deep link

    - Create a deep link from the [Branch Dashboard](https://dashboard.branch.io/marketing)

    - Delete your app from the device

    - Compile your app to your device

    - Paste deep link in `Google Hangouts`

    - Click on the deep link to open your app

## Implement features

- #### Initialize Branch features

    - Loads Branch into your app

    - Must be called on `deviceready` and `resume`

        ```java

        ```

- #### Create content reference

    - The `Branch Universal Object` encapsulates the thing you want to share (content or user)

    - Uses the [Universal Object Properties](#universal-object-properties)

        ```java
        BranchUniversalObject buo = new BranchUniversalObject()
            .setCanonicalIdentifier("content/12345")
            .setTitle("My Content Title")
            .setContentDescription("My Content Description")
            .setContentImageUrl("https://lorempixel.com/400/400")
            .setContentIndexingMode(BranchUniversalObject.CONTENT_INDEX_MODE.PUBLIC)
            .addContentMetadata("custom_data", "123");
        ```

- #### Create deep link

    - Creates a deep link URL with encapsulated data

    - Needs a [Branch Universal Object](#create-content-reference)

    - Uses [Deep Link Properties](/pages/links/data/)

    - Validate with the [Branch Dashboard](https://dashboard.branch.io/liveview/links)

        ```java
        LinkProperties lp = new LinkProperties()
            .setChannel("facebook")
            .setFeature("sharing")
            .setCampaign("content 123 launch")
            .setStage("new user")
            .addControlParameter("$deeplink_path", "content/123")
            .addControlParameter("$desktop_url", "http://example.com/home")
            .addControlParameter("custom", "data")
            .addControlParameter("custom_random", Long.toString(Calendar.getInstance().getTimeInMillis()));

        buo.generateShortUrl(this, lp, new Branch.BranchLinkCreateListener() {
            @Override
            public void onLinkCreate(String url, BranchError error) {
                if (error == null) {
                    Log.i("MyApp", "got my Branch link to share: " + url);
                }
            }
        });
        ```

- #### Share deep link

    -  Will generate a Branch deep link and tag it with the channel the user selects

    - Needs a [Branch Universal Object](#create-content-reference)

    - Uses [Deep Link Properties](/pages/links/data/)

        ```java
        LinkProperties lp = new LinkProperties()
            .setChannel("facebook")
            .setFeature("sharing")
            .setCampaign("content 123 launch")
            .setStage("new user")
            .addControlParameter("$deeplink_path", "content/123")
            .addControlParameter("$desktop_url", "http://example.com/home")
            .addControlParameter("custom", "data")
            .addControlParameter("custom_random", Long.toString(Calendar.getInstance().getTimeInMillis()));

        ShareSheetStyle ss = new ShareSheetStyle(MainActivity.this, "Check this out!", "This stuff is awesome: ")
            .setCopyUrlStyle(ContextCompat.getDrawable(this, android.R.drawable.ic_menu_send), "Copy", "Added to clipboard")
            .setMoreOptionStyle(ContextCompat.getDrawable(this, android.R.drawable.ic_menu_search), "Show more")
            .addPreferredSharingOption(SharingHelper.SHARE_WITH.FACEBOOK)
            .addPreferredSharingOption(SharingHelper.SHARE_WITH.EMAIL)
            .addPreferredSharingOption(SharingHelper.SHARE_WITH.MESSAGE)
            .addPreferredSharingOption(SharingHelper.SHARE_WITH.HANGOUT)
            .setAsFullWidthStyle(true)
            .setSharingTitle("Share With");

        buo.showShareSheet(this, lp,  ss,  new Branch.BranchLinkShareListener() {
            @Override
            public void onShareLinkDialogLaunched() {
            }
            @Override
            public void onShareLinkDialogDismissed() {
            }
            @Override
            public void onLinkShareResponse(String sharedLink, String sharedChannel, BranchError error) {
            }
            @Override
            public void onChannelSelected(String channelName) {
            }
        });
        ```

- #### Read deep link

    - Retrieve Branch data from a deep link

    - Best practice to receive data from the `listener` (to prevent a race condition)

        ```java
        // listener (within Main Activity's onStart)
        Branch.getInstance().initSession(new Branch.BranchReferralInitListener() {
            @Override
            public void onInitFinished(JSONObject referringParams, BranchError error) {
                if (error == null) {
                    Log.i("BRANCH SDK", referringParams.toString());
                } else {
                    Log.i("BRANCH SDK", error.getMessage());
                }
            }
        }, this.getIntent().getData(), this);

        // latest
        JSONObject sessionParams = Branch.getInstance(getApplicationContext()).getLatestReferringParams();

        // first
        JSONObject installParams = Branch.getInstance(getApplicationContext()).getFirstReferringParams();
        ```

- #### Navigate to content
  
    - Do stuff with the Branch deep link data

        ```java
        //  listener (within Main Activity's onStart)
        Branch.getInstance().initSession(new Branch.BranchReferralInitListener() {
            @Override
            public void onInitFinished(JSONObject referringParams, BranchError error) {
                if (error == null) {
                    // option 1: log data
                    Log.i("BRANCH SDK", referringParams.toString());

                    // option 2: save data to be used later
                    SharedPreferences preferences = getApplicationContext().getSharedPreferences("MyPreferences", Context.MODE_PRIVATE);
                    SharedPreferences.Editor editor = preferences.edit();
                    editor.putString("branchData", referringParams.toString(2));
                    editor.commit();

                    // option 3: navigate to page
                    Intent intent = new Intent(getApplicationContext(), OtherActivity.class);
                    intent.putExtra("branchData", referringParams.toString(2));
                    startActivity(intent);

                    // option 4: display data
                    Toast.makeText(getApplicationContext(), referringParams.toString(2), Toast.LENGTH_LONG).show();
                } else {
                    Log.i("BRANCH SDK", error.getMessage());
                }
            }
        }, this.getIntent().getData(), this);
        ```

- #### Display content

    - List content on `Google Index Search`

    - Needs a [Branch Universal Object](#create-content-reference)

        ```java
        buo.listOnGoogleSearch(context);
        ```

    - Needs `build.gradle` library

        ```java
        compile 'com.google.android.gms:play-services-appindexing:9.+'
        ```

- #### Track content

    - Track how many times a piece of content is viewed

    - Needs a [Branch Universal Object](#create-content-reference)
    
    - Uses [Track content properties](#track-content-properties)

    - Validate with the [Branch Dashboard](https://dashboard.branch.io/liveview/content)

        ```java
        buo.userCompletedAction(BranchEvent.VIEW);
        ```

- #### Track users

    - Sets the identity of a user (email, ID, UUID, etc) for events, deep links, and referrals

    - `127` character max for user id
    
    - Validate with the [Branch Dashboard](https://dashboard.branch.io/liveview/identities)  

        ```java
        // login
        Branch.getInstance(getApplicationContext()).setIdentity("your_user_id");

        // logout
        Branch.getInstance(getApplicationContext()).logout();
        ```

- #### Track events

    - Registers a custom event
    
    - Events named `open`, `close`, `install`, and `referred session` are Branch restricted

    - `63` character max for event name

    - Best to [Track users](#track-users) before [Track events](#track-events) to associate a custom event to a user
    
    - Validate with the [Branch Dashboard](https://dashboard.branch.io/liveview/events)
        
        ```java
        // option 1
        Branch.getInstance(getApplicationContext()).userCompletedAction("your_custom_event");

        // option 2 with metadata
        Branch.getInstance(getApplicationContext()).userCompletedAction("your_custom_event", (JSONObject)appState);
        ```

- #### Track commerce

    - Registers a custom commerce event

    - Uses [Track commerce properties](#commerce-properties) for `Currency` and `Category` 
    
    - Validate with the [Branch Dashboard](https://dashboard.branch.io/liveview/commerce)

    - *Java*

        ```java
        CommerceEvent commerceEvent = new CommerceEvent();
        commerceEvent.setRevenue(1101.99);
        Branch.getInstance().sendCommerceEvent(commerceEvent, null, null);
        ```

    - *Kotlin*

        ```java
        val commerceEvent = CommerceEvent()
        commerceEvent.revenue = 1101.99
        Branch.getInstance().sendCommerceEvent(commerceEvent, null, null)
        ```

- #### Handle referrals

    - Referral points are obtained from events triggered by users from rules created on the [Branch Dashboard](https://dashboard.branch.io/referrals/rules)
    
    - Validate on the [Branch Dashboard](https://dashboard.branch.io/referrals/analytics)

    - Reward credits with the [Referral guide](/pages/analytics/referrals/)

    - Redeem credits

        ```java
        Branch.getInstance(getApplicationContext()).redeemRewards(5);
        ```

    - Load credits

        ```java
        Branch.getInstance(getApplicationContext()).loadRewards(new BranchReferralStateChangedListener() {
            @Override
            public void onStateChanged(boolean changed, Branch.BranchError error) {
                // changed boolean will indicate if the balance changed from what is currently in memory

                // will return the balance of the current user's credits
                int credits = branch.getCredits();
            }
        });
        ```

    - Load history

        ```java
        Branch.getInstance(getApplicationContext()).getCreditHistory(new BranchListResponseListener() {
            public void onReceivingResponse(JSONArray list, Branch.BranchError error) {
                if (error == null) {
                    // show the list in your app
                } else {
                    Log.i("MyApp", error.getMessage());
                }
            }
        });
        ```

## Troubleshoot issues

- #### Track content properties

    - Used for [Track content](#track-content)

        | Key | Value
        | --- | ---
        | BNCRegisterViewEvent | User viewed the object
        | BNCAddToWishlistEvent | User added the object to their wishlist
        | BNCAddToCartEvent | User added object to cart
        | BNCPurchaseInitiatedEvent | User started to check out
        | BNCPurchasedEvent | User purchased the item
        | BNCShareInitiatedEvent | User started to share the object
        | BNCShareCompletedEvent | User completed a share

- #### Universal object best practices
    
    - To make sure your analytics are correct, and your content is ranking on Spotlight effectively.
        - Do
            - Set the `canonicalIdentifier` to a unique, de-duped value across instances of the app
            - Ensure that the `title`, `contentDescription` and `imageUrl` properly represent the object
            - Initialize the Branch Universal Object and call userCompletedAction with the `BranchEvent.VIEW` on page load
            - Call showShareSheet and createShortLink later in the life cycle, when the user takes an action that needs a link
            - Call the additional object events (purchase, share completed, etc) when the corresponding user action is taken
        - Don't
            - Don't set the same `title`, `contentDescription` and `imageUrl` across all objects
            - Don't wait to initialize the object and register views until the user goes to share
            - Don't wait to initialize the object until you conveniently need a link
            - Don't create many objects at once and register views in a `for` loop.

- #### Using bnc.lt or a custom link domain
    
    - *bnc.lt link domain*
    
        ```xml
        <activity android:name="com.yourapp.your_activity">
            <!-- App Link your activity to Branch links-->
            <intent-filter android:autoVerify="true">
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                 <data android:scheme="https" android:host="bnc.lt" android:pathPrefix="/LVeu" /> 
                 <data android:scheme="https" android:host="bnc.lt" android:pathPrefix="/eVeu" /> 
            </intent-filter>
        </activity>
        ```

    - *custom link domain*

        ```xml
        <activity android:name="com.yourapp.your_activity">
            <!-- App Link your activity to Branch links-->
            <intent-filter android:autoVerify="true">
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                 <data android:scheme="https" android:host="your.app.com" android:pathPrefix="/LVeu" /> 
                 <data android:scheme="https" android:host="your.app.com" android:pathPrefix="/eVeu" /> 
            </intent-filter>
        </activity>
        ```

    - Change the following values to match your [Branch Dashboard](https://dashboard.branch.io/settings/link)

        - `/LVeu` (live)
        - `/eVeu` (test)
        - `your.app.com`
