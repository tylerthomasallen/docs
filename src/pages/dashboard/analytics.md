
## Dashboard pages

- #### Summary
- #### Journey Banners
    - View more information in [Journey app banners](/pages/web/journeys/)
    - View more information in [Journey Amp banners](/pages/web/amp-journeys/)
- #### DeepView Preview
    - View more information in [Deepviews](/pages/web/deep-views/)
- #### Desktop SMS
    - View more information in [Text me the app](/pages/web/text-me-the-app/)
- #### Ads
- #### Emails
- #### Organic Search
- #### Referrals

    - ##### Implementing

        - Referrer has their [identity set](#dialog-code)
        - Referrer `creates` a deep link
        - Referrer `shares` the deep link
        - Referee `clicks` on the deep link
        - Referee has their [identity set](#dialog-code)
        - Referee triggers a [custom event](#dialog-code)
        - The custom event triggers a [Reward rule](https://dashboard.branch.io/referrals/rules) to assign referral points

    - ##### Troubleshooting

        - The Referrer and Referee are connected by the `deep link`
        - Referring points happen whenever the `custom event` occurs in the app which triggers the `referral rule`
        - It is best to assign referring points on a `custom event` rather than Branch events (install and open) to prevent referral abuse
        - Make sure you set the identity of both the referrer and referee to prevent anonymous users from showing up in your [Referral analytics](https://dashboard.branch.io/referrals/analytics)
        - Referrals are based on a `session`, not a device. If a user closes and opens the app before triggering the referral rule, then the referral points will not be delivered
        - If your referrals are based on custom install event, then you will need to uninstall the app and [simulate a Branch install](#dialog-code) to test referrals
        - A [Reward rule](https://dashboard.branch.io/referrals/rules) with `All acting users` will trigger credits even if a referral did not happen. To only reward credits on a referral, use `Referring users` or `Referred acting users`

    - ##### Tracking
        - Use the [Referral analytics](https://dashboard.branch.io/referrals/analytics)
        - Use the [LiveView export](https://dashboard.branch.io/liveview/link_clicks) to get data as a `.csv`
        - Create a [Webhook](/pages/exports/webhooks) to send data to your server
        - Request a whitelisting to our [Data Export API](/pages/exports/api)

    - ##### Querying
        - Query the events export the custom referral event that triggered the referral rule
        - The `developer identity` of this event is your referee
        - The `session referring developer identity` is your referrer

- #### Quick Links
- #### Link Settings
    - View more information in [Setup your dashboard](/pages/dashboard/setup/)
- #### Sources
- #### Content
    - [Dashboard Content](https://dashboard.branch.io/content) tracks the attribution per content
    - Updates every 1.5 hours
    - Content is tracked whenever deep links are shared (clicks which lead to open/installs)
    - Each content must be meaningful unique attributes
        - `$deeplink_path`
        - `$desktop_url`
        - `$canonical_identifier`
        - `$og_title` + `$og_description` + `$og_image_url`
        - (not all required. ordered by precedence)

- #### Data Integrations
- #### Webhooks
    - View more information in [Export webhooks](/pages/exports/webhooks/)
- #### Liveview
- #### Account settings
    - View more information in [Setup your dashboard](/pages/dashboard/setup/)

## Troubleshoot issues

- #### Analytical behavior
    + Whenever a user `clicks` on a deep link and `opens` the app
    + This triggers either an `install` or an `open`
        + `installs` represent Branch recognizing the app_id and device_id for the first time
        + `installs` represent new app users and the success rate of your Branch deep links
        + `installs` do **not** represent App Store downloads
        + `non-Branch installs` are installs outside of Branch deep link clicks
        + `opens` are non-installs
        + If a user uninstalls and reinstalls the app, this will be an `open` because Branch recognizes the device
        + If a user has the app and clicks a Branch deep link, this will be an `open` because the user is not new

- #### Revenue analytics

- #### User value attribution

- #### Growth attribution

- #### Matching success
