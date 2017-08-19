
## Analytical behavior
- Whenever a user `clicks` on a deep link and `opens` the app
- This triggers either an `install` or an `open`
    - `installs` represent Branch recognizing the app_id and device_id for the first time
    - `installs` represent new app users and the success rate of your Branch deep links
    - `installs` do **not** represent App Store downloads
    - `non-Branch installs` are installs outside of Branch deep link clicks
    - `opens` are non-installs
    - If a user uninstalls and reinstalls the app, this will be an `open` because Branch recognizes the device
    - If a user has the app and clicks a Branch deep link, this will be an `open` because the user is not new

## Dashboard

- #### Summary
- #### Journey Banners
- #### DeepView Previews
- #### Desktop SMS
- #### Ads
    - ##### Analytics
    - ##### Partner Management
    - ##### Links
- #### Emails
- #### Organic Search
- #### Referrals
- #### Quick links
- #### Data Integrations
- #### Webhooks
- #### Liveview
    - Used to validate the Branch links, clicks and events
    - Check [Analytical behavior](#analytics_1) for understanding of the Liveview data

- #### Cross-channel analytics
    - ##### Sources
    - ##### Content
    - [Dashboard Content](https://dashboard.branch.io/content) tracks the attribution per content
    - Updates every 1.5 hours
    - Content is tracked whenever deep links are shared (clicks which lead to open/installs)
    - Each content must be meaningful unique attributes
        - `$deeplink_path`
        - `$desktop_url`
        - `$canonical_identifier`
        - `$og_title` + `$og_description` + `$og_image_url`
        - (not all required. ordered by precedence)    
- #### Account settings

## Analytics

- #### Behavior
- #### Revenue
   
     - Track purchases and revenue generated in your app using [Commerce Event](#dialog-code)
     - Use Branch's [Liveview](#liveview) page to track each commerce event triggered in your app
     - [Liveview](#liveview) page is the best way to test the integration
     - Review the revenue data associated with each link using [Quick Links](#quick-links) tab
     - Segregate the revenue data based on analytics parameters such as campaign, feature, channel etc. in the [Sources](#sources) tab
       

## Setup and testing

- #### Link Settings
- #### Account settings

## Troubleshooting

- ####



## Channels and links

- #### Summary
- #### Journey Banners
- #### DeepView Preview
- #### Desktop SMS
- #### Ads
- #### Emails
- #### Organic Search
- #### Referrals

    - ##### Implementing

        - Referrer has their [identity set](#dialog-code)
        - Referrer `creates` a deep link
        - Referrer `shares` the deep link
        - Referee `clicks` on the deep link
        - Referee has their [identity set](#dialog-code
        - Referee triggers a [custom event](#dialog-code)
        - Catch the event as a [Reward rule](https://dashboard.branch.io/referrals/rules) to assign referral points

    - ##### Troubleshooting

        - The Referrer and Referee are connected by the deep link
        - Referring points happen whenever the custom event occurs in the app which triggers the referral rule
        - It is best to assign referring points on a `custom event` rather than Branch events (install and open) to prevent referral abuse
        - Make sure you set the identity of both the referrer and referee to prevent anonymous users from showing up in your [Referral analytics](https://dashboard.branch.io/referrals/analytics)
        - Referrals are based on a `session`, not a device. If a user closes and opens the app before triggering the referral rule, then the referral points will not be delivered
        - If your referrals are based on custom install event, then you will need to uninstall the app and [simulate a Branch install](#dialog-code) to test referrals
        - A [Reward rule](https://dashboard.branch.io/referrals/rules) with `All acting users` will trigger credits even if a referral did not happen. To only reward credits on a referral, use `Referring users` or `Referred acting users`

    - ##### Tracking
        - Use the [Referral analytics](https://dashboard.branch.io/referrals/analytics)
        - Use the [LiveView export](https://dashboard.branch.io/liveview/link_clicks) to get data as a .csv
        - Create a [Webhook] to send data to your server
        - Request a whitelisting to our [Data Export API]()

    - ##### Querying
        - Query the events export the custom referral event that triggered the referral rule
        - The developer identity of this event is your referee
        - The session referring developer identity is your referrer

- #### Quick Links
- #### Link Settings



- #### Revenue Analytics
    

## Setup and testing

- #### Data Integrations
- #### Webhooks
- #### Liveview
- #### Account settings

