ack \
-ho \
'(?<![\w])t[(]("|'"'"')(?!form)[\w]+' \
~/Workspace/lydia/src \
| sed "s/t[(][\'\"]\(.*\)/\1/g" \
> "$(pwd)/lydia-keys.txt"

# Command (ack)
#
# grep command is NOT same among platforms,
# internet can recommend using `ggrep` -- yes with double g --
# but that apparently didn't help us here. They don't support
# positive/negative look-ahead or look-behind features.
# So, what are we gonna do?
# Enter ACK!
# Note that, this command has some serious stuff going on with quotes,
# hence the hours I spend to escape those damn quots, I mean, look at that!?
# ("|'"'"')
# However, it gets the job done! So, suck it grep and ggrep!

# Flags
#
# -h	Never print the filenames of the occurences
# -o	Only print the matching part

# Pattern
#
# '(?<![\w])t[(]("|'"'"')(?!form)[\w]+'
# 
# Simply, bring me t() calls which is NOT beginning with `form` 
# Also, mind that negative look-behind (?<![\w])
# This prevents it from grabbing format("...") too
# And, lastly, please, please, just please
# do NOT try to use this with double quotes

# Replace
#
# sed "s/t[(][\'\"]\(.*\)/\1/g"
#
# Just, gimme the word, please!

# Output to a file
#
# > "$(pwd)/lydia-keys.txt"
