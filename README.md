### dependencies 

```bash
python --version #Python 2.7.2
pip --version #pip 1.5.2
```

### install

```bash
pip install --upgrade pip
pip install mkdocs
```

### development

```bash
git clone git@github.com:ethanneff/branch-docs.git
cd branch-docs
mkdocs serve
open http://localhost:8000/
```

### production

```bash
mkdocs build --clean
git push origin master
```

### useful
- http://www.mkdocs.org/
- https://github.com/squidfunk/mkdocs-material
- https://github.com/facelessuser/PyMdown