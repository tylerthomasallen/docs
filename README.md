### live

- [click here](https://branchmetrics.github.io/docs/)

### dependencies 

```bash
python --version #Python 2.7.2
pip --version #pip 1.5.2
```

### environment

```bash
git clone git@github.com:branchmetrics/docs.git
cd branch-docs
```

```bash
pip install --upgrade pip
pip install --editable lib/mkdocs
pip install pygments
pip install markdown-include
pip install mkdocs-material
```

### development

```bash
mkdocs serve
open http://localhost:8000/
```

### production

```bash
mkdocs gh-deploy
open https://branchmetrics.github.io/docs
```

### resources

- http://www.mkdocs.org/

- https://github.com/squidfunk/mkdocs-material

- https://github.com/facelessuser/pymdown-extensions


### additional

- modify mkdocs 
    - readme http://www.mkdocs.org/about/contributing/
    - update to repo `git subtree add --prefix lib/mkdocs https://github.com/mkdocs/mkdocs master --squash`
    - add locally `pip install --editable lib/mkdocs`
    - remove locally `sudo rm /usr/local/bin/mkdocs && rm /Library/Python/2.7/site-packages/mkdocs.egg-link`

- modify mkdocs material 
    - readme http://squidfunk.github.io/mkdocs-material/customization/#theme-development
    - update to repo `git subtree add --prefix lib/mkdocs-material https://github.com/squidfunk/mkdocs-material master --squash`

### best practices

- folders 

    - must be lowercase and hyphened

- content 

    - bullets and sections must have new line spacing in between

    - indention is 4 spaces
