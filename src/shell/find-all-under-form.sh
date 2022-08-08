grep \
-Erho \
"t[(][\'\"]form[.]([[:alpha:]_]+).*[)]" \
~/Workspace/lydia/src >> t_calls_with_form_keys.txt

# Flags
# -E	Extended expression (\escape meta-characters to use as literals)
# -r	Search the given directory recursively
# -h	Never print the filenames of the occurences
# -o	Only print the matching part

# Pattern
# Find all the t() function calls that takes any key under the form directory
# and group the top-level key right after 'form'
# e.g. 'form.account' -> account
# e.g. 'form.foo.bar' -> foo

# Target
# Output to a file
