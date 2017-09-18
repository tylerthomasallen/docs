# V2 Event

## Overview

With Branch's SDKs, it's always been possible to track events, including installs, opens, purchases, and more. We're introducing a new way to track events that make reporting and analytics a whole lot easier. We're standardizing the way you track "classes" of events. For example: all events related to a customer purchasing are bucketed into a purchase class, and all events related to users interacting with your in-app content are linked to a "content" class.

Find the event you're interested in tracking, and we'll show you the way to track through our SDKs.

## Setup

### Commerce Events

Commerce events describe events that relate to a customer interacting with your products and converting by purchasing. These are events like adding payment information, purchasing, viewing products, etc. If you have enabled Branch Universal Ads, these events will automatically map to certain Ad Partners.

#### Add to cart

Fire this event when your users add a product to their cart.

#### Add to wishlist

Fire this event when your users add your product to a wishlist.

#### View cart

Fire this event when a user views a cart.

#### Initiate purchase

Fire this event when a user begins a purchase, but doesn't complete. This is equivalent to when someone hits the 'checkout' button, but doesn't complete the act of purchasing. For that, see [#purchase](purchase).

#### Add payment info

Fire this event anytime someone adds payment information.

#### Purchase

Fire this event when a purchase occurs.

#### Spend credits

Fire this event any time someone applies credits or a promo code to a purchase.

### Content Events

Content events are events that occur when a user engages with your in-app content. For example, if you have in-app articles, you would want to track events related to when users search, view content, rate the content, and share. This can apply to a wide variety of content, like e-commerce events.

#### Search

Fire this event any time a user searches for content inside your app.

#### View item

Fire this event any time a user selects a single piece of content or item in your app.

#### View items

Fire this event

#### Rate

Fire this event when a user rates your content.

#### Share

Fire this event when a user shares your content.

### Lifecycle Events

Lifecycle events can be described as events a user takes in your app to continue progressing. These events can apply to game apps, as well as non game apps, for when a user completes a user profile, registration or tutorial.

#### Complete registration

Fire this event when a user successfully registers for an account.

#### Complete tutorial

Fire this event when a user completes any tutorial you provide.

#### Achieve level

Fire this event when a user reaches a certain stage in your app.

#### Unlock achievement

Fire this event when a user hits an achievement point in your app.
