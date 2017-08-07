
## Integrate Branch

- #### Configure Branch

    - Complete your [Branch Dashboard](https://dashboard.branch.io/settings/link)

        ![image](http://i.imgur.com/zaKY7Mh.png)

- #### Integrate App

    - TODO

- #### Initialize Branch

    ```html hl_lines="4 8 9 10 11 12 13"
    <!doctype html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title></title>
    </head>
    <body>
      <script>
        // load Branch
        (function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent".split(" "), 0);
        // init Branch
        branch.init('key_live_ndqptlgXNE4LHqIahH1WIpbiyFlb62J3');
      </script>
    </body>
    </html>
    ```

    - Change `key_live_nmEmfIlcPqjEsuDHIQZ8GdcpsFbXW3gG` to match your [Branch Dashboard](https://dashboard.branch.io/settings/link)

## Implement features

- #### Initialize Branch features

    - Loads Branch into your app

    - `branch.init()` is queued so all other Branch functions will always happen afterwards

        ```js
        branch.init('key_live_nmEmfIlcPqjEsuDHIQZ8GdcpsFbXW3gG', function(err,data) {
          console.log(data);
        });
        ```

- #### Create deep link

    - Creates a deep link URL with encapsulated data

    - Needs [Initialize Branch](#initialize-branch)

    - Uses [Deep Link Properties](/pages/links/data/)

    - Validate with the [Branch Dashboard](https://dashboard.branch.io/liveview/links)

        ```js
        var linkData = {
          campaign: 'content 123',
          channel: 'facebook',
          feature: 'dashboard',
          stage: 'new user',
          tags: [ 'tag1', 'tag2', 'tag3' ],
          alias: '',
          data: {
            'custom_bool': true,
            'custom_int': Date.now(),
            'custom_string': 'hello',
            '$og_title': 'Title',
            '$og_description': 'Description',
            '$og_image_url':'http://lorempixel.com/400/400'
          }
        };

        branch.link(linkData, function(err, link) {
          console.log(link);
        });
        ```

- #### Share deep link

    -  Will generate a Branch deep link and tag it with the channel the user selects

    - Uses [Deep Link Properties](/pages/links/data/)

        ```html
        <!-- shareable elements -->
        <button id='button'>deep link</button>
        <a id='anchor'>deep link</a>
        ```

        ```js
        // create link
        var linkData = {
          campaign: String(Date.now())
        };
        branch.link(linkData, function(err, link) {
          // share link
          document.getElementById('button').onclick = function() {
            window.open(link || err);
          };
          document.getElementById('anchor').href = link || err;
        });
        ```

- #### Read deep link

    - Make a deep link redirect to your website 

        ```
        https://a60f.app.link/mwSWBbPRjF?$fallback_url=https://example.com
        ```

    - Website will open with `_branch_match_id`

        ```
        https://example.com/?$fallback_url=https://example.com&_branch_match_id=418480444086051524
        ```

    - Read `_branch_match_id`

        ```js
        branch.init('key_live_nmEmfIlcPqjEsuDHIQZ8GdcpsFbXW3gG', function(err,data) {
          console.log(data);
        });
        ```

- #### Navigate to content
- #### Display content
- #### Track content
- #### Track users

    - Sets the identity of a user (email, ID, UUID, etc) for events, deep links, and referrals
    
    - Validate with the [Branch Dashboard](https://dashboard.branch.io/liveview/identities)  

        ```js
        branch.setIdentity('123456');
        ```

        ```js
        branch.setIdentity('123456', function (err,data) {

        });
        ```

    - Removes the identity of a user

        ```js
        branch.logout();
        ```

        ```js
        branch.logout(function(err){

        });
        ```

- #### Track events

    - Registers a custom event
    
    - Events named `open`, `close`, `install`, and `referred session` are Branch restricted

    - Best to [Track users](#track-users) before [Track events](#track-events) to associate a custom event to a user
    
    - Validate with the [Branch Dashboard](https://dashboard.branch.io/liveview/events)

        ```js        
        branch.track('signup');
        ```

        ```js
        branch.track('signup', { metadata: '123' });
        ```

        ```js
        branch.track('signup', { custom: '123' }, function (err){

        });
        ```

- #### Track commerce
- #### Handle referrals


## Troubleshoot issues

- #### Sample testing apps

    - https://cdn.branch.io/example.html
    - http://cdn.branch.io/branchster-angular

- #### Bower or Npm compatibility

    - Use `bower install branch-sdk` or `npm install branch-sdk`

- #### CommonJS and RequireJS compatibility

    - Add `require('branch')` or `define(['branch'], function(branch) { ... });`

- #### No Access-Control Error

    - Make sure the Branch key is the same within the deep link and website

        ```
        XMLHttpRequest cannot load https://api.branch.io/v1/open. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access. The response had HTTP status code 400.
        ```

