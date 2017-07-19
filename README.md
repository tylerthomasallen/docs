This is the repository for the Branch's new documentation portal. You can find the live version at https://branchmetrics.github.io/docs/.

# Installation

To build the documentation on your local machine, follow the steps below.

> ### Prerequisite Dependencies
> ```bash
> python --version #Python 2.7.2
> pip --version #pip 1.5.2
> ```

### 1. Clone the repo
In your shell, navigate to the location you want to store the documentation site. Next run:

```bash
git clone git@github.com:branchmetrics/docs.git
cd docs
```

### 2. Install Dependencies
Next install the required packages by running:

```bash
pip install --upgrade pip
pip install --editable lib/mkdocs
pip install pygments
pip install markdown-include
pip install mkdocs-material
```

# Running the project

To generate the static site files and serve them, open a shell window and navigate to the docs directory and run:

```bash
mkdocs serve
```

Now open http://localhost:8000](http://localhost:8000) in your web browser to view your local development site. Any local changes that get saved will automatically be built and served to this site as long as `mkdocs serve` is running.

# Deploying to Production

Run the commands below to deploy the repo. By default it pushes to the `gh-pages` branch to be served over Github Pages.

```bash
mkdocs gh-deploy
```

Now open https://branchmetrics.github.io/docs to view the live site.

# Guidelines for writing

This is the documentation for the docs. It describes how the site works, what is supported, and best practices to make collaboration easier.

### Includes

Small snippets of reused and/or frequently updated content/code should be kept within the `includes` directory. Content snippets should be placed in the `ingredients` subdirectory.

To insert a reusable snippet, use the format `{! file_name_here.md !}`.

### Images

Example images used directly in content pages are kept in the `img/pages` directory, filed into folders by section and page name to match the `pages` directory.

Example images used in ingredients are kept in the `img/ingredients` directory, filed into folders ingredient name to match the `ingredients` directory.

***Note:*** *if an image is reused in multiple places, please create multiple copies to avoid cross-linking!*

### Best Practices

- Folders

    - must be lowercase and hyphened

- Content

    - bullets and sections must have new line spacing in between

    - indention is 4 spaces

# Resources

- http://www.mkdocs.org/

- https://github.com/squidfunk/mkdocs-material

- https://github.com/facelessuser/pymdown-extensions


### Additional

- modify mkdocs
    - readme http://www.mkdocs.org/about/contributing/
    - update to repo `git subtree add --prefix lib/mkdocs https://github.com/mkdocs/mkdocs master --squash`
    - add locally `pip install --editable lib/mkdocs`
    - remove locally `sudo rm /usr/local/bin/mkdocs && rm /Library/Python/2.7/site-packages/mkdocs.egg-link`

- modify mkdocs material
    - readme http://squidfunk.github.io/mkdocs-material/customization/#theme-development
    - update to repo `git subtree add --prefix lib/mkdocs-material https://github.com/squidfunk/mkdocs-material master --squash`
