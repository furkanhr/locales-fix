grep -Erho "t[(][\'\"]form[.]([[:alpha:]_]+).*[)]" ~/Workspace/lydia/src >> t_calls_with_form_keys.txt

# -E	Extended expression (\escape meta-characters to use as literals)
# -r	Search the given directory recursively
# -h	Never print the filenames of the occurences
# -o	Only print the matching part

# >>	Output to a file
