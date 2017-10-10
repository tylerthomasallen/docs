### Flag your deep links

For the email links that you would like to deep link to content, add `$deep_link=true` to the URL as a query parameter, for example:

```html
<a href="links.example.com?$deep_link=true" >Link to your app!</a>
```

This will ensure that your links are converted to Branch links that will open the app on iOS and Android, with full tracking and attribution.

### Flag your web-only links

With your email service provider, all email links will open the app by default. In order for your app to know that the email link should bounce to web after opening the app, add `$web_only=true` to your links as a query parameter, for example:

```html
<a href="links.example.com?$web_only=true" >Link to your app!</a>
```

!!! caution "Handle links for web-only content"
    Make sure you have completed the [technical setup steps](#handle-links-for-web-only-content) to handle web-only links within your app.

!!! protip "What happens to your links behind the scenes?"
    This is what a link looks like within your email template:

    ```html
    http://example.com/?foo=bar
    ```

    When a user clicks your link, Branch processes the link and converts it to something like this:

    ```html
    https://vza3.app.link/3p?%243p=e_xx&%24original_url=http%3A%2F%2Fexample.com%2F%3Ffoo%3Dbar
    ```

    Where `vza3.app.link` is your Branch domain.
