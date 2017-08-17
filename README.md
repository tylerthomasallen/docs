# Branch Docs

> Repository for Branch's public documentation [https://branchmetrics.github.io/docs/](https://branchmetrics.github.io/docs/)

## Environment

- #### Todo

  - [spreadsheet](https://docs.google.com/spreadsheets/d/11Sh4KuBl93ZRzT8F2R4O5SPskgTk2JpcEOKmszVaq5k/edit#gid=1507731216)

- #### Dependencies

    ```bash
    python --version #Python +2.7.2
    pip --version #pip +9.0.1
    ```

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

    - https://branchmetrics.github.io/docs/

## Contributing

- #### Best Practices
    - Educate with `working code examples`
    - `Bullet point` key points, procedures, and steps to promote progression
    - Use `shorter sentences with simpler words` (3rd grade) to prevent ambiguity 
    - Trigger action by `beginning each sentence with a verb`
    - Write in the viewpoint of the `user's wants`, not what Branch wants
    - Keep is simple (KISS) (`1 -> 2 -> 3`)
    - Don't repeat yourself (DRY) (`this can be found here`)

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

- #### Search
    - Hosted by [Algolia Docsearch](https://community.algolia.com/docsearch/)
    - Localhost scrapes production
    - Production is scraped once a day

- #### Code
    - Tabbed sections `*title*`, `code`, `*title*`, `code`

- #### Images
    - Content pages are kept in the `img/pages` 
    - Example images used in ingredients are kept in the `img/ingredients` 
    - with width `<img src="http://i.imgur.com/dyfhN0L.png" width="100px" />`
    - without width `![image](http://i.imgur.com/dyfhN0L.png)`

- #### Includes
    - For reusable snippet, use the format `{! path/file_name_here.md !}` where the base path begins at the includes directory.
    - Content snippets should be placed in the `ingredients` subdirectory. (E.g. `{! ingredients/content_snippet.md !}`)
    - Frequently updated content/code should be kept within the `includes`

## Additional

- #### Resources
    - http://www.mkdocs.org/
    - https://github.com/squidfunk/mkdocs-material
    - https://github.com/facelessuser/pymdown-extensions

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

  - The docs should load within `1400ms`. If it takes `5000ms`, please disable `Ghostery` and `Adblocker` (the docs have AB testing)
