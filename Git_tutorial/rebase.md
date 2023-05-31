## `git config pull.rebase` :-
- The `git config pull.rebase` command is used to configure the default behavior of the git pull command with regard to rebasing.

- When you run git pull, it performs two actions: `git fetch` followed by either `git merge` or `git rebase` depending on the configuration. By default, git pull uses git merge to incorporate the changes from the remote branch into the current branch.

- Setting git config pull.rebase to true changes the default behavior, causing git pull to use git rebase instead of git merge when incorporating the remote changes.

- Rebase is an alternative way to integrate changes that moves or reapplies the local commits on top of the updated remote branch, resulting in a linear commit history.

- To enable rebasing by default for git pull, you can run the following command:
    - ***`git config --global pull.rebase true`***
    - With this configuration, every time you run git pull, it will perform a rebase instead of a merge.