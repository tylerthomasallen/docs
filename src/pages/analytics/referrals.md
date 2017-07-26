- #### Implementing

    - Referrer has his/her identity set.

    - Referrer creates a deep link.

    - Referrer shares the deep link.

    - Referee clicks on the deep link.

    - Referee has his/her identity set.

    - Referee triggers a custom event.

    - Catch the event in your Branch Rules Dashboard (https://dashboard.branch.io/referrals/rules) as a referral rule to assign referral points.

- #### Troubleshooting

    – The Referrer and Referee are connected by the deep link.

    – Referring points happen whenever the custom event occurs in the app which triggers the referral rule.

    – It is best to assign referring points on a custom event rather than Branch events (install and open) to prevent referral abuse.

    – Make sure you set the identity of both the referrer and referee to prevent anonymous users from showing up in your Branch Influencer's Dashboard (https://dashboard.branch.io/referrals/influencers)

    – Referrals are based on a session, not a device. If a user closes and opens the app before triggering the referral rule, then the referral points will not be delivered.

    – If your referrals are based on custom install event, then you will need to uninstall the app and simulate a Branch install to test referrals (https://dev.branch.io/getting-started/integration-testing/guide/ios/#use-debug-mode-to-simulate-fresh-installs)

    - A rule with All acting users will trigger credits event if a referral did not happen. To only reward credits on a referral, use Referring users or Referred acting users.
     
- #### Tracking referrals

    – Branch Influencer's Dashboard (https://dashboard.branch.io/referrals/influencers)

    – The Export Button in the Branch LiveView Dashboard (https://dashboard.branch.io/liveview/link_clicks)

    – Create a Webhook to send data to your server (https://dashboard.branch.io/webhook)

    – Request a whitelisting to our Data Export API (https://dev.branch.io/methods-endpoints/data-export-api/guide/)

- #### Querying referrals

    - Query the events export the custom referral event that triggered the referral rule

    - The developer identity of this event is your referee

    - The session referring developer identity is your referrer
