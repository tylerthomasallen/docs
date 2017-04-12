### dependencies 

```bash
python --version #Python 2.7.2
pip --version #pip 1.5.2
```

### install

```bash
git clone git@github.com:ethanneff/branch-docs.git
cd branch-docs
```

```bash
pip install --upgrade pip
pip install mkdocs
pip install markdown-fenced-code-tabs
```

### development

```bash
mkdocs serve
open http://localhost:8000/
```

### production

```bash
mkdocs gh-deploy
open https://ethanneff.github.io/branch-docs/
```

### resources
- http://www.mkdocs.org/
- https://github.com/squidfunk/mkdocs-material
- https://github.com/facelessuser/pymdown-extensions