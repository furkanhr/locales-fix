ack \
-ho \
't[(]("|'"'"')(?!form)[\w]+' \
~/Workspace/lydia/src \
| sed "s/t[(][\'\"]\(.*\)/\1/g" \
> "$(pwd)/lydia-keys.txt"

# Flags
# -h	Never print the filenames of the occurences
# -o	Only print the matching part
