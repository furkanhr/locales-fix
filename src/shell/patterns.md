# Patterns

### Whole Key
```
/t[(]['"]form[.]([\w.]+)["'].*[)]/g
```

### Top-level key under `form`
```sh
# JavaScript
/t[(]['"]form[.]([\w]+)[\w.]*?["'].*[)]/g
# PCRE
t[(][\'\"]form[.]([[:alpha:]_]+)[[:alpha:].]*?[\"\'].*[)]
# PCRE -- Simplest
t[(][\'\"]form[.]([[:alpha:]_]+).*[)]
```

### All statics
```
/t[(]['"]form[.](.+)["'][,]\s*[{]\sdefault[:]\s*["'](.+)['"]\s*[}][)]/g
```

### With dynamics
```
/t[(]['"]form[.](.+)["'][,]\s*[{]\sdefault[:]\s*["'](.+)['"]([,]\svalues[:]\s*[{](.+)\s*[}])?\s*[}][)]/g
```


# Cases

```
1. t('form.account.label', { default: "Account" })
2. t("form.account", { default: "Account balbla hey's wo" })
3. t("form.accouasdfnt", { default: 'Account' })
4. t('form.accqwerqwount', { default: "Account" })
5. t('form.copy_of_field', { default: 'Copy of {name}', values: { name: object.name } })
6. t("form.copy_of_field", { default: "Copy of {name}", values: { name: object.name } })
```
