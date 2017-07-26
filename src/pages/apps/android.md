## Integrate Branch

- #### Configure Branch

    - Complete your [Branch Dashboard](https://dashboard.branch.io/settings/link)

        ![image](http://i.imgur.com/r057ie0.png)
        ![image](http://i.imgur.com/SdcICpL.png)

- #### Install Branch

    - Import the Branch SDK to your `build.gradle`

        ```java hl_lines="29"
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
            compile 'io.branch.sdk.android:library:2.+'
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
                    // Branch Link Data
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
- #### Optional app config
- #### Simulate an install
- #### Sample app
- #### Universal Object properties
- #### Commerce properties
- #### Cordova dependencies
- #### Display console logs
- #### Update the Branch SDK
- #### Incompatible plugins
- #### Cordova errors