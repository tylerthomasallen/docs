## Integrate Branch

- #### Configure Branch

    - Complete your [Branch Dashboard](https://dashboard.branch.io/settings/link)

        ![image](http://i.imgur.com/r057ie0.png)
        ![image](http://i.imgur.com/SdcICpL.png)

- #### Install Branch

    - Import the Branch SDK to your `build.gradle`

        ```java hl_lines="32"
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
            
            compile 'com.mparticle:android-core:4.+'

            compile 'com.mparticle:android-branch-kit:4+'
        }
        ```

- #### Enable Branch on mParticle

    - Retrieve your Branch Key on the [App Settings](https://dashboard.branch.io/account-settings/app) page of the Branch dashboard.
    - From your [mParticle dashboard](https://app.mparticle.com/) navigate to the Services page. (The paper airplane icon on the left side)
    - Scroll down to the Branch tile, or enter Branch in the search bar.
    - Click on the Branch tile and then select "Activate a Platform".
    - Click on the Android icon, then toggle the status ON.
    - Enter your Branch key in the marked field and click "Save".

- #### Configure app

    - Add Branch to your `AndroidManifest.xml`

        ```xml hl_lines="9 17 26 27 28 29 30 31 32 34 35 36 37 38 39 40"
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

            </application>

        </manifest>
        ```

    - Replace the following with values from your [Branch Dashboard](https://dashboard.branch.io/settings/link)
        - `branchandroid`
        - `uobg.app.link`

- #### Handle Incoming Links

    Open the `Activity` for which you registered the `Intent Filter` in the previous section, and hook into the `onStart` lifecycle method by adding this override:

    ```java hl_lines="3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20"
    @Override
    public void onStart() {
      MParticle.getInstance().checkForDeepLink(new DeepLinkListener() {
        @Override
        public void onResult(DeepLinkResult result) {
          // Check for the existence of a given key in the link data and route accordingly.
          try {
            if ((result.getParameters().has("my_custom_key")) && (result.getParameters().get("my_custom_key").equals("custom value"))) {
              // Send user to intended path
            }
          } catch (JSONException e) {
          }
        }

        @Override
        public void onError(DeepLinkError error) {
          // If an error occurred, it will be surfaced via a DeepLinkError.
          Log.d("my log tag", error.toString());
        }
      });
    }
    ```

- #### Initialize Branch

    As with any kit, mParticle will automatically handle initializing Branch sessions. At this point you should start seeing your Branch session data - including installs, re-opens, and any custom events - in your Branch dashboard.

- #### Test deep link

    - Create a deep link from the [Branch Dashboard](https://dashboard.branch.io/marketing)

    - Delete your app from the device

    - Compile your app to your device

    - Paste deep link in `Google Hangouts`

    - Click on the deep link to open your app

## Implement features

- #### Create content reference

    ```java
    BranchUniversalObject branchUniversalObject = new BranchUniversalObject()
        // The identifier is what Branch will use to de-dupe the content across many different Universal Objects
       .setCanonicalIdentifier("item/12345")

       // The canonical URL for SEO purposes (optional)
       .setCanonicalUrl("https://branch.io/deepviews")

       // This is where you define the open graph structure and how the object will appear on Facebook or in a deepview
       .setTitle("My Content Title")
       .setContentDescription("My Content Description")
       .setContentImageUrl("https://example.com/mycontent-12345.png")

       // You use this to specify whether this content can be discovered publicly - default is public
       .setContentIndexingMode(BranchUniversalObject.CONTENT_INDEX_MODE.PUBLIC)

        // Here is where you can add custom keys/values to the deep link data
       .addContentMetadata("property1", "blue")
       .addContentMetadata("property2", "red");
    ```

- #### Create deep link

    ```java
    LinkProperties linkProperties = new LinkProperties()
       .setChannel("facebook")
       .setFeature("sharing")
       .addControlParameter("$desktop_url", "http://example.com/home")
       .addControlParameter("$ios_url", "http://example.com/ios");

    branchUniversalObject.generateShortUrl(this, linkProperties, new     BranchLinkCreateListener() {
        @Override
        public void onLinkCreate(String url, BranchError error) {
           if (error == null) {
               Log.i("MyApp", "got my Branch link to share: " + url);
           }
        }
    });                   
    ```

- #### Share deep link

    ```java
    ShareSheetStyle shareSheetStyle = new ShareSheetStyle(MainActivity.this, "Check this out!", "This stuff is awesome: ")
        .setCopyUrlStyle(getResources().getDrawable(android.R.drawable.ic_menu_send), "Copy", "Added to clipboard")
        .setMoreOptionStyle(getResources().getDrawable(android.R.drawable.ic_menu_search), "Show more")
        .addPreferredSharingOption(SharingHelper.SHARE_WITH.FACEBOOK)
        .addPreferredSharingOption(SharingHelper.SHARE_WITH.EMAIL)
        .setAsFullWidthStyle(true)
        .setSharingTitle("Share With");

    branchUniversalObject.showShareSheet(this, 
                                          linkProperties,
                                          shareSheetStyle,
                                           new Branch.BranchLinkShareListener() {
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
- #### Navigate to content
- #### Display content
- #### Track content
- #### Track users
    
    ```java
    Branch branch = Branch.getInstance(getApplicationContext());
    branch.setIdentity(your user id); // your user id should not exceed 127 characters
    ```

    ```java
    Branch.getInstance(getApplicationContext()).logout();
    ```

- #### Track events
    
    ```java
    Branch branch = Branch.getInstance(getApplicationContext());
    branch.userCompletedAction("your_custom_event");
    ```

    ```java
    Branch branch = Branch.getInstance(getApplicationContext());
    branch.userCompletedAction("your_custom_event", (JSONObject)appState); // same 63 characters max limit
    ```

- #### Track commerce
- #### Handle referrals

## Troubleshoot issues
- #### Recommendations
- #### Simulate an install
- #### Sample app
- #### Android instant app