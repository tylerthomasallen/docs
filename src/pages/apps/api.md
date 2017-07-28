## Link

TODO: test curls
TODO: test links
TODO: remove confidential information
TODO: referrals

- #### Link Create 

    - Request

        ```json
        curl -XPOST -H 'Content-Type: application/json' -d '{
          "branch_key": "key_live_icCccJIpd7GlYY5oOmoEtpafuDiuyXhT",
          "channel": "facebook",
          "feature": "onboarding",
          "campaign": "new product",
          "stage": "new user",
          "tags": ["one", "two", "three"],
          "type": 2,
          "data": {
            "$canonical_identifier": "content/123",
            "$og_title": "Title 123",   
            "$og_description": "Description 123",
            "$og_image_url": "http://www.lorempixel.com/400/400/",
            "$deeplink_path": "content/123",
            "custom": true,
            "random": 123,
            "anything": "everything",
            "test": [1,2,3,4,5,6],
            "$marketing_title": "this link"
          }
        }' 'https://api.branch.io/v1/url'
        ```

    - Response

        ```json
        {
          "url": "https://eneff.app.link/7nOIRkPsHz"
        }
        ```

    - Parameters

        | Key | Value | Usage | Required
        | --- | :-: | --- | :-:
        | branch_key | `string` | From your [Branch Settings Dashboard](https://dashboard.branch.io/settings) | √
        | ... | ... | Parameters from [Configuring Links](/pages/links/data/) |

- #### Link Create Bulk 

    - Request

        ```json
        curl -XPOST https://api.branch.io/v1/url/bulk/key_live_icCccJIpd7GlYY5oOmoEtpafuDiuyXhT -d \
        '[
          {
            "channel": "facebook",
            "feature": "onboarding",
            "campaign": "new product",
            "stage": "new user",
            "tags": ["one", "two", "three"],
            "data": {
              "$canonical_identifier": "content/123",
              "$og_title": "Title from Deep Link",    
              "$og_description": "Description from Deep Link",
              "$og_image_url": "http://www.lorempixel.com/400/400/",
              "$desktop_url": "http://www.example.com",
              "custom_boolean": true,
              "custom_integer": 1243,
              "custom_string": "everything",
              "custom_array": [1,2,3,4,5,6],
              "custom_object": { "random": "dictionary" }
            }
          },
          {
            "channel": "google",
            "feature": "loon",
            "campaign": "lift off"
          }
        ]'
        ```

    - Response

        ```json
        [
          {
            "url":"https://eneff.app.link/HE7fprkxWE"
          },
          {
            "url":"https://eneff.app.link/YawoqrkxWE"
          }
        ]
        ```

    - Parameters

        | Key | Value | Usage | Required
        | --- | :-: | --- | :-:
        | branch_key | `string` | From your [Branch Settings Dashboard](https://dashboard.branch.io/settings) | √
        | ... | ... | Parameters from [Configuring Links](/pages/links/data/) |

- #### Link Read

    - Request

        ```json
        curl -XGET -H 'Content-Type: application/json' 'https://api.branch.io/v1/url?branch_key=key_live_icCccJIpd7GlYY5oOmoEtpafuDiuyXhT&url=https://eneff.app.link/7nOIRkPsHz'
        ```

    - Response

        ```json
        {  
           "campaign": "new product",
           "channel": "facebook",
           "feature": "onboarding",
           "stage": "new user",
           "tags":[  
              "one",
              "two",
              "three"
           ],
           "data": {  
              "$canonical_identifier": "content/123",
              "$deeplink_path": "content/123",
              "$og_description": "Description 123",
              "$og_image_url": "http://www.lorempixel.com/400/400/",
              "$og_title": "Title 123",
              "$one_time_use":false,
              "anything": "everything",
              "custom":true,
              "random":123,
              "~campaign": "new product",
              "~channel": "facebook",
              "~creation_source":0,
              "~feature": "onboarding",
              "~id": "345698114818429601",
              "~stage": "new user",
              "~tags":[  
                 "one",
                 "two",
                 "three"
              ],
              "url": "https://eneff.app.link/7nOIRkPsHz"
           },
           "type":0,
           "alias":null
        }
        ```

    - Parameters

        | Key | Value | Usage | Required
        | --- | :-: | --- | :-:
        | branch_key | `string` | From your [Branch Settings Dashboard](https://dashboard.branch.io/settings) | √
        | url | `string` | The deep link url | √

- #### Link Update

    - Request

          ```json
          curl -XPUT -H 'Content-Type: application/json' -d '{
            "branch_key": "key_live_icCccJIpd7GlYY5oOmoEtpafuDiuyXhT",
            "branch_secret": "secret_live_D3sN7UDL27glpNKZfGPt6BlmKD9txUBp",
            "channel": "twitter",    
            "data":{
              "name": "alex",
              "user_id": "12346",
              "$deeplink_path": "article/jan/123"
            }
          }' 'https://api.branch.io/v1/url?url=https://eneff.app.link/7nOIRkPsHz'
          ```

    - Response

          ```json
          {
            "campaign": "new product",
            "channel": "twitter",
            "feature": "onboarding",
            "stage": "new user",
            "tags": [
              "one",
              "two",
              "three"
            ],
            "data": {
              "$deeplink_path": "article/jan/123",
              "$one_time_use": false,
              "name": "alex",
              "user_id": "12346",
              "~campaign": "new product",
              "~channel": "facebook",
              "~creation_source": 0,
              "~feature": "onboarding",
              "~id": "345698114818429601",
              "~stage": "new user",
              "~tags": [
                "one",
                "two",
                "three"
              ],
              "url": "https://eneff.app.link/7nOIRkPsHz"
            },
            "type": 0,
            "alias": null
          }
          ```

    - Parameters

        | Key | Value | Usage | Required
        | --- | :-: | --- | :-:
        | branch_key | `string` | From your [Branch Settings Dashboard](https://dashboard.branch.io/settings) | √
        | branch_secret | `string` | From your [Branch Settings Dashboard](https://dashboard.branch.io/settings) | √
        | url | `string` | The deep link url | √

- #### Link Troubleshooting 

    - Must use your `branch_key` and `branch_secret` from your [Branch Settings Dashboard](https://dashboard.branch.io/settings)

    - `data` is overridden on [Link Update](#link-update), not appended

    - Bulk link creator is limited to `1000` links at a time

## Event

- #### Event Create

    - Request

        ```json
        curl -XPOST -H 'Content-Type: application/json' -d '{
          "branch_key": "key_live_icCccJIpd7GlYY5oOmoEtpafuDiuyXhT",
          "event": "clicked_on_this",
          "identity": "bob",
          "metadata": {
            "hello": "world",
            "custom_data": 12345
          }
        }' 'https://api.branch.io/v1/event'
        ```

    - Response

        ```json
        {}
        ```

    - Parameters

        | Key | Value | Usage | Required
        | --- | :-: | --- | :-:
        | branch_key | `string` | From your [Branch Settings Dashboard](https://dashboard.branch.io/settings) | √
        | event | `string` | Name of the custom event | √
        | identity | `string` | Unique user id, also known as the `Developer Id` on your [Branch Identity Dashboard](https://dashboard.branch.io/liveview/identities)
        | metadata | `{}` | Custom key-value pairs related to the event

## User

- #### User Create

    - Request
        
        ```json
        curl -XPOST -H 'Content-Type: application/json' -d '{
          "branch_key": "key_live_icCccJIpd7GlYY5oOmoEtpafuDiuyXhT",
          "identity": "bob",
          "identity_id": "222"
        }' 'https://api.branch.io/v1/profile'
        ```

    - Response

        ```json
        {
          "identity_id": 222,
          "link": "https:\/\/eneff.app.link\/?%24identity_id=222"
        }
        ```

    - Parameters

        | Key | Value | Usage | Required
        | --- | :-: | --- | :-:
        | branch_key | `string` | From your [Branch Settings Dashboard](https://dashboard.branch.io/settings) | √
        | identity | `string` | Unique user id, also known as the `Developer Id` on your [Branch Identity Dashboard](https://dashboard.branch.io/liveview/identities) | √
        | identity_id | `string` | Unique user id for Branch, also known as the `Branch Identity Id` on your [Branch Identity Dashboard](https://dashboard.branch.io/liveview/identities) | √

- #### User Read

    - Request

        ```json
        curl -XGET -H 'Content-Type: application/json' 'https://api.branch.io/v1/profile?branch_key=key_live_icCccJIpd7GlYY5oOmoEtpafuDiuyXhT&identity=bob'
        ```

        ```json
        curl -XGET -H 'Content-Type: application/json' 'https://api.branch.io/v1/profile?branch_key=key_live_icCccJIpd7GlYY5oOmoEtpafuDiuyXhT&identity_id=222'
        ```

    - Response
        
        ```json
        {
          "identity_id": 222,
          "identity": "bob",
          "link": "https://eneff.app.link/?%24identity_id=222"
        }
        ```

    - Parameters

        | Key | Value | Usage | Required
        | --- | :-: | --- | :-:
        | branch_key | `string` | From your [Branch Settings Dashboard](https://dashboard.branch.io/settings) | √
        | identity | `string` | Unique user id, also known as the `Developer Id` on your [Branch Identity Dashboard](https://dashboard.branch.io/liveview/identities) | √*
        | identity_id | `string` | Unique user id for Branch, also known as the `Branch Identity Id` on your [Branch Identity Dashboard](https://dashboard.branch.io/liveview/identities) | √*

        - `*` =  `identity` *OR* `identity_id` is required

## Referral

- #### Referral Update

- #### Referral Read

- #### Referral Create

## App 

- #### App Create

    - Request 

        ```json
        curl -XPOST -H 'Content-Type: application/json' -d '{
          "user_id": "293816316559643406",
          "app_name": "eneff_test_3",
          "dev_name": "Ethan Neff",
          "dev_email": "eneff@branch.io",

          "always_open_app": "1",

          "android_app": "2", 
          "android_url": "https://www.example.com/ios", 
          "android_uri_scheme": "branchtest://", 
          "android_package_name": "com.branch.test", 
          "android_app_links_enabled": "1",  
          "sha256_cert_fingerprints": ["14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5"], 

          "ios_app": "2", 
          "ios_url": "https://www.example.com/ios", 
          "ios_uri_scheme": "branchtest://", 
          "ios_store_country": "US", 
          "universal_linking_enabled": "1",   
          "ios_bundle_id": "com.branch.test", 
          "ios_team_id": "PW4Q8885U7", 

          "fire_url": "https://www.example.com/amazon", 
          "windows_phone_url": "https://www.example.com/windows", 
          "blackberry_url": "https://www.example.com/blackberry", 
          "web_url": "https://www.example.com/web", 

          "default_desktop_url": "https://www.example.com/desktop", 
          "text_message": "Download me! {{ link }}",

          "og_app_id": "branch 123", 
          "og_title": "branch test", 
          "og_description": "branch description", 
          "og_image_url": "http://lorempixel.com/400/400/", 

          "deepview_desktop": "branch_default", 
          "deepview_ios": "branch_default", 
          "deepview_android": "branch_default"
        }' 'https://api.branch.io/v1/app'
        ```

    - Response

        ```json
        {
          "id": "...",
          "app_key": "...",
          "creation_date": "2016-12-21T22:51:49.067Z",
          "app_name": "eneff_test_3",
          "origin": "API: creator id = 293816316559643406, creator email = eneff@branch.io",
          "dev_name": "Ethan Neff",
          "dev_email": "eneff@branch.io",
          "always_open_app": "1",
          "android_app": "2",
          "android_url": "https:\/\/www.example.com\/ios",
          "android_uri_scheme": "branchtest:\/\/",
          "android_package_name": "com.branch.test",
          "sha256_cert_fingerprints": [
            "14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5"
          ],
          "android_app_links_enabled": "1",
          "ios_app": "2",
          "ios_url": "https:\/\/www.example.com\/ios",
          "ios_uri_scheme": "branchtest:\/\/",
          "ios_store_country": "US",
          "ios_bundle_id": "com.branch.test",
          "ios_team_id": "PW4Q8885U7",
          "universal_linking_enabled": "1",
          "fire_url": "https:\/\/www.example.com\/amazon",
          "windows_phone_url": "https:\/\/www.example.com\/windows",
          "blackberry_url": "https:\/\/www.example.com\/blackberry",
          "web_url": "https:\/\/www.example.com\/web",
          "default_desktop_url": "https:\/\/www.example.com\/desktop",
          "short_url_domain": "",
          "default_short_url_domain": "jqk5.app.link",
          "alternate_short_url_domain": "jqk5-alternate.app.link",
          "text_message": "Download me! {{ link }}",
          "og_app_id": "branch 123",
          "og_title": "branch test",
          "og_image_url": "http:\/\/lorempixel.com\/400\/400\/",
          "og_description": "branch description",
          "branch_key": "...",
          "branch_secret": "...",
          "deepview_desktop": "branch_default",
          "deepview_ios": "branch_default",
          "deepview_android": "branch_default"
        }
        ```

    - Parameters

        | Key | Value | Usage | Required
        | --- | :-: | --- | :-:
        | user_id | `string` | The Dashboard User Id obtained from [Branch Account Dashboard](https://dashboard.branch.io/settings/account) | √
        | app_name | `string` | The name of the app | √
        | dev_name | `string` | The main contact developer name | √
        | dev_email | `string` | The main contact developer email. A email is sent on account creation | √
        | android_app | `string` | Whether an Android app is enabled. `0` or `1` indicating `true`
        | android_url | `string` | The url of the Android store, or package name (e.g. `com.android.myapp`). `android_app` must be set to `2`
        | android_uri_scheme | `string` | The Android URI scheme
        | android_package_name | `string` | The Android package name (e.g. `com.android.myapp`)
        | sha256_cert_fingerprints | `[string]` | The SHA256 fingerprints for App Links
        | android_app_links_enabled | `string` | Whether App Links are enabled. `0` or `1` indicating `true`
        | ios_app | `string` | Whether an iOS app is enabled, (`0` or `1` indicating `true`
        | ios_url | `string` | The url of iOS store, or app id (e.g. `id512451233`), or a fallback URL for iOS if present. `ios_app` must be set to `2`
        | ios_uri_scheme | `string` | The iOS URI scheme
        | ios_store_country | `string` | The country code of the app, defaults to `US`
        | ios_bundle_id | `string` | The iOS Bundle Id
        | ios_team_id | `string` | The iOS Team Id
        | universal_linking_enabled | `string` | Whether Universal Links should be enabled. `0` or `1` indicating `true`
        | fire_url | `string` | The redirect on Fire phone
        | windows_phone_url | `string` | The redirect on Windows phone
        | blackberry_url | `string` | The redirect on Blackberry phone
        | web_url | `string` | Backup website if URLs are `null`
        | default_desktop_url | `string` | The default desktop redirect, or `null` if set to hosted SMS
        | text_message | `string` | Text message to use for text-me feature, `{{ link }}` is required and will be replaced with a deep link
        | og_app_id | `string` | Open Graph app id
        | og_title | `string` | Open Graph title to be used with link
        | og_description | `string` | Open Graph description to be used with link
        | og_image_url | `string` | Open Graph image URL to be used with link
        | deepview_desktop | `string` | The current deepview selected for the desktop platform
        | deepview_ios | `string` | The current deepview selected for the iOS platform
        | deepview_android | `string` | The current deepview selected for the Android platform

- #### App Read

    - Request
        
        ```json
        curl -XGET -H 'Content-Type: application/json' 'https://api.branch.io/v1/app/key_live_icCccJIpd7GlYY5oOmoEtpafuDiuyXhT?branch_secret=...'
        ```

    - Response

        ```json
        {
          "id": "...",
          "app_key": "...",
          "creation_date": "2016-12-21T22:51:49.067Z",
          "app_name": "eneff_test_3",
          "origin": "API: creator id = 293816316559643406, creator email = eneff@branch.io",
          "dev_name": "Ethan Neff",
          "dev_email": "eneff@branch.io",
          "always_open_app": 1,
          "auto_fetch": null,
          "android_app": 2,
          "android_url": "https:\/\/www.example.com\/ios",
          "android_uri_scheme": "branchtest:\/\/",
          "android_package_name": "com.branch.test",
          "sha256_cert_fingerprints": [
            "14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5"
          ],
          "android_app_links_enabled": true,
          "ios_app": 2,
          "ios_url": "https:\/\/www.example.com\/ios",
          "ios_uri_scheme": "branchtest:\/\/",
          "ios_store_country": "US",
          "ios_bundle_id": "com.branch.test",
          "ios_team_id": "PW4Q8885U7",
          "universal_linking_enabled": true,
          "fire_url": "https:\/\/www.example.com\/amazon",
          "windows_phone_url": "https:\/\/www.example.com\/windows",
          "blackberry_url": "https:\/\/www.example.com\/blackberry",
          "web_url": "https:\/\/www.example.com\/web",
          "default_desktop_url": "https:\/\/www.example.com\/desktop",
          "short_url_domain": "",
          "default_short_url_domain": "jqk5.app.link",
          "alternate_short_url_domain": "jqk5-alternate.app.link",
          "text_message": "Download me! {{ link }}",
          "og_app_id": "branch 123",
          "og_title": "branch test",
          "og_image_url": "http:\/\/lorempixel.com\/400\/400\/",
          "og_description": "branch description",
          "branch_key": "...",
          "branch_secret": "...",
          "deepview_desktop": "branch_default",
          "deepview_ios": "branch_default",
          "deepview_android": "branch_default",
          "sitemap_enabled": null,
          "esp_config": null,
          "map_utm_params": null,
          "enterprise": false,
          "zuora_account_id": null,
          "android_cd_enabled": null,
          "android_cd_hashed": null,
          "ios_cd_enabled": null,
          "ios_cd_hashed": null
        }
        ```

    - Parameters

        | Key | Value | Usage | Required
        | --- | :-: | --- | :-:
        | branch_key | `string` | From your [Branch Settings Dashboard](https://dashboard.branch.io/settings) | √
        | branch_secret | `string` | From your [Branch Settings Dashboard](https://dashboard.branch.io/settings) | √

- #### App Update

    - Request
        
        ```json
        curl -XPUT -H 'Content-Type: application/json' -d '{
          "branch_secret": "...",  
          "dev_email": "eneff@branch.io",
          "og_description": "branch description updated"
        }' 'https://api.branch.io/v1/app/key_live_icCccJIpd7GlYY5oOmoEtpafuDiuyXhT'
        ```

    - Response
        
        ```json
        {
          "id": "...",
          "app_key": "...",
          "creation_date": "2016-12-21T21:36:44.613Z",
          "app_name": "eneff_test_3_updated",
          "origin": "API: creator id = 293816316559643406, creator email = eneff@branch.io",
          "dev_name": "Ethan Neff",
          "dev_email": "eneff@branch.io",
          "always_open_app": 1,
          "auto_fetch": null,
          "android_app": 2,
          "android_url": "https:\/\/www.example.com\/ios",
          "android_uri_scheme": "branchtest:\/\/",
          "android_package_name": "com.branch.test",
          "sha256_cert_fingerprints": [
            "14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5"
          ],
          "android_app_links_enabled": true,
          "ios_app": 2,
          "ios_url": "https:\/\/www.example.com\/ios",
          "ios_uri_scheme": "branchtest:\/\/",
          "ios_store_country": "US",
          "ios_bundle_id": "com.branch.test",
          "ios_team_id": "PW4Q8885U7",
          "universal_linking_enabled": true,
          "fire_url": "https:\/\/www.example.com\/amazon",
          "windows_phone_url": "https:\/\/www.example.com\/windows",
          "blackberry_url": "https:\/\/www.example.com\/blackberry",
          "web_url": "https:\/\/www.example.com\/web",
          "default_desktop_url": "https:\/\/www.example.com\/desktop",
          "short_url_domain": "",
          "default_short_url_domain": "nz02.app.link",
          "alternate_short_url_domain": "nz02-alternate.app.link",
          "text_message": "Download me! {{ link }}",
          "og_app_id": "branch 123",
          "og_title": "branch test",
          "og_image_url": "http:\/\/lorempixel.com\/400\/400\/",
          "og_description": "branch description updated",
          "branch_key": "...",
          "branch_secret": "...",
          "deepview_desktop": "branch_default",
          "deepview_ios": "branch_default",
          "deepview_android": "branch_default",
          "sitemap_enabled": null,
          "esp_config": null,
          "map_utm_params": null,
          "enterprise": false,
          "zuora_account_id": null,
          "android_cd_enabled": null,
          "android_cd_hashed": null,
          "ios_cd_enabled": null,
          "ios_cd_hashed": null
        }
        ```

    - Parameters

        | Key | Value | Usage | Required
        | --- | :-: | --- | :-:
        | branch_key | `string` | From your [Branch Settings Dashboard](https://dashboard.branch.io/settings) | √
        | branch_secret | `string` | From your [Branch Settings Dashboard](https://dashboard.branch.io/settings) | √
        | dev_email | `string` | The main contact developer email | √
        | ... | ... | Parameters from [App Create](#app-create) |

- #### App Troubleshooting
    
    - Must use your `branch_key` and `branch_secret` from your [Branch Settings Dashboard](https://dashboard.branch.io/settings)

    - You can get your `user_id` from the [Branch Account Dashboard](https://dashboard.branch.io/settings/account)

    - The API has a `255` character max

    - Replace the `...` in the examples with values from your [Branch Settings Dashboard](https://dashboard.branch.io/settings)
