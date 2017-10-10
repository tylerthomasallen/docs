### Flag your deep links

In order for your email service provider to know that the email link should open the app, add `deeplink="true"` to the HTML, for example:

```html
<a href="links.example.com" deeplink="true">Link to your app!</a>
```

This will also ensure that your links are converted to Branch links that will open the app on Android as well, with full tracking and attribution.

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
