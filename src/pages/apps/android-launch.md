## Submitting to the Play Store

If you'd like Branch to collect the [Google Advertising ID](https://support.google.com/googleplay/android-developer/answer/6048248) for advertising or tracking purposes instead of the Android ID, you must add Google Play Services to your app prior to release. After you complete these steps, Branch will handle the rest!

1. Add `compile 'com.google.android.gms:play-services-ads:9+'` or greater version to the dependencies section of your `build.gradle` file. You might already have it.
1. Add the following line in your Proguard settings:

```xml
-keep class com.google.android.gms.ads.identifier.** { *; }
```

!!! note "Why does Branch use the GAID?"
    Branch uses the GAID to identify users across our entire partner network, greatly increasing match accuracy rate. You can read more about this on the [matching accuracy page](/pages/resources/matching/). You do not need to perform these steps if you elect **not** to import Play Services or the Ads framework.