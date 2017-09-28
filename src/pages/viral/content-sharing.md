## Overview

When a Branch link is opened, either your app launches or users are taken to the App/Play store to download it. Deep links improve this process by routing users directly to specific content after your app launches. With Branch, this still works even if users have to stop and download the app first (a.k.a., "deferred deep links").

Deep links are an incredibly important part of delivering a high quality user experience. With deep links, you can take users to the exact thing they clicked on or even offer a customized onboarding experience.

## Option 1: Have Branch use your existing deep link routing

If your app already supports deep linking using URI paths, you can populate the `$deeplink_path`, `$ios_deeplink_path` or `$android_deeplink_path` link parameters with the URI path of the content to be displayed within the app. When the Branch SDK receives a link containing one of these parameters it will automatically load the specified URI path.

{% if page.android or page.mparticle_android %}

In your app's Manifest, add this meta-data key to the definition of the Activity you want to show when a link to content is opened:

{% highlight xml %}
<meta-data android:name="io.branch.sdk.auto_link_path" android:value="custom/path/*,another/path/" />
{% endhighlight %}

{% endif %}
{% if page.android or page.mparticle_android %}{% else %}

{% caution title="Incomplete support on iOS" %}
[Universal Links]({{base.url}}/getting-started/universal-app-links) and [Spotlight]({{base.url}}/features/spotlight-indexing) do not support deep linking via URI paths. If you use `$deeplink_path` or `$ios_deeplink_path`, you will need to implement some custom logic. [Click here for more information]({{base.url}}/getting-started/universal-app-links/advanced/ios/#how-to-handle-uri-paths-with-universal-links).
{% endcaution %}

{% endif %}

### How to insert custom deep link routes into a Branch link

All of the examples below create links that will cause Branch to display `myapp://content/1234` after launch.

{% example title="When creating links dynamically" %}

If you're creating a link by appending query parameters, just append the control parameters to the URL. Please make sure to URL encode everything, lest the link will break.

{% highlight javascript %}
"https://[branchsubdomain]?%24deeplink_path=content%2F1234"
{% endhighlight %}

{% endexample %}

{% example title="When using a mobile SDK" %}

When you create links via a mobile SDK, you simply need to set the control parameters.

{% if page.ios or page.mparticle_ios %}

{% tabs %}
{% tab objective-c %}
{% highlight objc %}
BranchLinkProperties *linkProperties = [[BranchLinkProperties alloc] init];
linkProperties.feature = @"sharing";
linkProperties.channel = @"facebook";
[linkProperties addControlParam:@"$deeplink_path" withValue:@"content/1234"];
{% endhighlight %}
{% endtab %}
{% tab swift %}
{% highlight swift %}
let linkProperties: BranchLinkProperties = BranchLinkProperties()
linkProperties.feature = "sharing"
linkProperties.channel = "facebook"
linkProperties.addControlParam("$deeplink_path", withValue: "content/1234")
{% endhighlight %}
{% endtab %}
{% endtabs %}

{% endif %}
<!--- /iOS -->


<!--- Android -->
{% if page.android or page.mparticle_android %}

{% highlight java %}
LinkProperties linkProperties = new LinkProperties()
               .setChannel("facebook")
               .setFeature("sharing")
               .addControlParameter("$deeplink_path", "content/1234");
{% endhighlight %}

{% endif %}

<!--- Cordova -->

{% if page.cordova %}

{% highlight js %}
// optional fields
var analytics = {
    channel: 'channel',
    feature: 'feature',
    campaign: 'campaign',
    stage: 'stage',
    tags: ['one', 'two', 'three']
};

// optional fields
var properties = {
    $fallback_url: 'http://www.example.com/fallback',
    $desktop_url: 'http://www.example.com/desktop',
    $android_url: 'http://www.example.com/android',
    $ios_url: 'http://www.example.com/ios',
    $ipad_url: 'http://www.example.com/ipad',
    $deeplink_path: 'content/123',
    more_custom: 'data',
    even_more_custom: true,
    this_is_custom: 321
};

branchUniversalObj.generateShortUrl(analytics, properties).then(function(res) {
    alert('Response: ' + JSON.stringify(res.url));
}).catch(function(err) {
    alert('Error: ' + JSON.stringify(err));
});
{% endhighlight %}
{% endif %}

<!--- Xamarin -->

{% if page.xamarin %}
{% highlight c# %}
BranchLinkProperties linkProperties = new BranchLinkProperties();
linkProperties.feature = "sharing";
linkProperties.channel = "facebook";
linkProperties.controlParams.Add("$deeplink_path", "content/1234");
{% endhighlight %}
{% endif %}

<!--- Unity -->

{% if page.unity %}

{% highlight objective-c %}
BranchLinkProperties linkProperties = new BranchLinkProperties();
linkProperties.feature = "sharing";
linkProperties.channel = "facebook";
linkProperties.controlParams.Add("$deeplink_path", "content/1234");
{% endhighlight %}

{% endif %}

<!--- Adobe -->

{% if page.adobe %}

{% highlight java %}
var dataToInclude:Object = {
	"article_id": "1234",
	"$deeplink_path": "content/1234"
};

branch.getShortUrl(tags, "sms", BranchConst.FEATURE_TAG_SHARE, JSON.stringify(dataToInclude));
{% endhighlight %}
{% endif %}

<!--- Titanium -->

{% if page.titanium %}

{% highlight js %}
branchUniversalObject.generateShortUrl({
  "feature" : "sample-feature",
  "alias" : "sample-alias",
  "channel" : "sample-channel",
  "stage" : "sample-stage",
}, {
  "$deeplink_path" : "content/1234",
});
{% endhighlight %}

{% endif %}

<!--- React -->

{% if page.react %}

{% highlight js %}
let linkProperties = {
  feature: 'share',
  channel: 'facebook'
}

let controlParams = {
  $desktop_url: 'http://desktop-url.com/monster/12345'
}

let {url} = await branchUniversalObject.generateShortUrl(linkProperties, controlParams)
{% endhighlight %}

{% endif %}

{% endexample %}

{% example title="When creating Quick Links on the Branch dashboard" %}

You can specify the control parameters for individual Quick Links by inserting the keys and values into the _Deep Link Data (Advanced)_ section.

{% image src='/img/pages/getting-started/deep-link-routing/deep-link_path.png' 3-quarters center alt='deeplink path' %}

{% endexample %}


## Option 2: Build custom routing inside the routing callback


## Option 3: Use Branch's easy config deep link routing