# Demo target
# "$(pwd)/example-target"

grep \
-Erho \
"t[(][\'\"]form[.][[:alpha:]_]+" \
~/Workspace/lydia/src \
| sed "s/.*form[.]\(.*\)/\1/g" \
> "$(pwd)/form-keys.txt"

# Flags
# -E	Extended expression (\escape meta-characters to use as literals)
# -r	Search the given directory recursively
# -h	Never print the filenames of the occurences
# -o	Only print the matching part

# Pattern
# t[(][\'\"]form[.]([[:alpha:]_]+)
# Find all the t() function calls that takes any key under the form directory
# and group the top-level key right after 'form'
# e.g. 'form.account' -> account
# e.g. 'form.foo.bar' -> foo
# e.g. 'form.foo_bar.baz' -> foo_bar

# Target
# ~/Workspace/lydia/src \

# Replace
# sed "s/.*form[.]\(.*\).*/\1/g" \
# strip out anything but top-level key

# Output to a file
# > "$(pwd)/src/shell/keysUnderForm.txt"
