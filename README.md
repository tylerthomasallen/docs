# Branch Docs

> Repository for Branch's public documentation [https://docs.branch.io](https://docs.branch.io)

## Goal

- #### Get partners up and running as fast as possible
    - Educate with `a single best path` (do not list all the override methods)
    - Educate with `working code examples`
    - `Bullet point` key points, procedures, and steps to promote progression
    - Use `shorter sentences with simpler words` (3rd grade) to prevent ambiguity
    - Trigger action by `beginning each sentence with a verb`
    - Write in the viewpoint of the `user's wants`, not what Branch wants
    - Keep is simple (KISS) (`1 -> 2 -> 3`)
    - Don't repeat yourself (DRY) (`this can be found here`)
- #### Answer any question a partner will have
    - Make sure you answer `why`, `what`, `how` (example) with each section

## Environment

- #### Code

    ```bash
    git clone git@github.com:branchmetrics/docs.git
    cd docs
    ```

- #### Extensions

    ```bash
    pip install --upgrade pip
    pip install --editable lib/mkdocs
    pip install pygments
    pip install pymdown-extensions
    pip install markdown-include
    pip install mkdocs-material
    ```

- #### Develop

    ```bash
    mkdocs serve
    ```

- #### Deploy

    - Merge pull request into `master`

- #### Production

    - https://docs.branch.io

## Contributing

- #### Folders
    - Must be lowercase and hyphened

- #### Content
    - Bullets and sections must have new line spacing in between
    - Indention is 4 spaces
    - Search works best when content is not duplicated
    - Only add periods if more than one sentence

- #### Style
    - Titles `# Title`
    - Sections `## Section`
    - Category `- #### Section`
    - Content `    - content`

- #### Code Tabs
    - Tabbed sections `*title*`, `code`, `*title*`, `code`

- #### Code Modals  
    - `Complete [Integrate your app](#dialog-code?ios=create-deep-link&android=install-branch)`
    - `Complete [Integrate your app](#dialog-code)`
    - `ios`, `android`, `adobe`, `cordova`, `mparticleAndroid`, `mparticleIos`, `titanium`, `reactNative`, `unity`, `xamarin`

- #### Images
    - Content pages are kept in the `img/pages` 
    - Example images used in ingredients are kept in the `img/ingredients` 
    - `![image](http://i.imgur.com/dyfhN0L.png)`

- #### Search
    - Hosted by [Algolia Docsearch](https://community.algolia.com/docsearch/)
    - Localhost scrapes production
    - Production is scraped once a day

## Additional

- #### Resources
    - framework http://www.mkdocs.org/
    - design https://github.com/squidfunk/mkdocs-material
    - extensions https://github.com/facelessuser/pymdown-extensions
    - docsearch config https://github.com/algolia/docsearch-configs/commit/04e17eb6e8bb1fdb1239ec6d9cec4ae14295813b

- #### Mkdocs Local Deploy

    - not recommended

      ```bash
      mkdocs gh-deploy
      ```

- ####  Mkdocs Locally
    - readme http://www.mkdocs.org/about/contributing/
    - update to repo `git subtree add --prefix lib/mkdocs https://github.com/mkdocs/mkdocs master --squash`
    - add locally `pip install --editable lib/mkdocs`
    - remove locally `sudo rm /usr/local/bin/mkdocs && rm /Library/Python/2.7/site-packages/mkdocs.egg-link`

- #### Mkdocs-Material Locally
    - readme http://squidfunk.github.io/mkdocs-material/customization/#theme-development
    - update to repo `git subtree add --prefix lib/mkdocs-material https://github.com/squidfunk/mkdocs-material master --squash`
    - test live update in `/materials` 
    - prod code in `/src`
        - `cd lib/mkdocs-material` 
        - `yarn install` 
        - `yarn build` (will build `/material` but fail on `/site` -> okay)
    -  updated files
        - `lib/mkdocs-material/src/partials/footer.html`
        - `lib/mkdocs-material/src/partials/header.html`
        - `lib/mkdocs-material/src/partials/nav.html`
        - `lib/mkdocs-material/src/base.html`
        - `lib/mkdocs-material/src/assets/javascripts/application.js`

- #### Slow page render

  - The docs should load within `1400ms`. If it takes `5000ms`, please disable `Ghostery` (Google Analytics) and `Adblocker` (the docs have AB testing)

- #### Missing search
    - Some ad blockers prevent the search from appearing
