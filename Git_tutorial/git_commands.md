# Important Git Commands

### Begineer level commands
1. ***`git init`*** : it initializes a new git repository.
    - **repository** : it is a folder whose version is managed by git
                        where we can track all the changes.

2. ***`git add <filename1> <filename2>`*** : adds given untracked file to staging area for tracking. we can add as many files here as we want. To add all files at once ***`"git add ."`*** (not recommended, as it is not safe).

3. ***`git commit -m "<message>"`*** : commits changes from staging area and creates a new version
                                     based on your previous changes.

4. ***`git log`*** : shows the history of commits made with details about the commit.
```bash
    commit 2ceb18267ac626b4cc1e30974c5aa55ec5ee9c41 (HEAD -> main, origin/main)
    Author: nikhil296 <nikhilgautam1729@gmail.com>
    Date:   Mon Mar 20 23:25:50 2023 +0530

        update
```

5. ***`git status`*** : shows the status of files, ones in staging area, ones that are untracked.


Git Commands :  
    * NOTE - git commands are case sensitive.

    1. git version/ git --version
    2. git help
    3. git config : a convenience function that is used to set Git configuration values 
                    on a global or local project level.
            . git config --list :               lists all the configurations.
              git config --list --system :      lists config set at system level
              git config --list --global :      lists config set at global level
              git config --list --local :       lists config set at local level

                // System           | // Global          | // Local
                /usr/local/git/etc  | $home/.gitconfig   | .git/config

                System Git config controls settings for all users and all repositories 
                on your computer.
                Global Git config controls settings for the currently logged in user 
                and all his repositories.
                Local Git config controls settings for a specific repository.

                These 3 config files are executed in a cascading order. 
                First the "system", then "global" and finally the "local".

                That means that your local Git config will always overwrite settings set 
                in the Global or System configs.

            . git config --global user.name/user.email : sets the userName or email
    
    4. git init : 
            . It initializes our git repository.
            . Git repository : it is a folder, it's version is managed by git.

    5. git status : it tells the status of "Tracked" & "Untracked" files.
            ie. the files that are there in the working-area = "Untracked"
                the files in the staging-area = "Tracked"
    6. git add { .          (stages new files, modifications & deletions (on the 
                                    current directory and its subdirectories)), 
                <filename>  (adds specific file(s) to staging area), 
                -A          (stages all changes, (new, modified, deleted) files), 
                -u          (stages modifications and deletions, without new files)
                }
    After version 2.x :-
    Command	     New Files	 Modified Files	  Deleted Files	   Description
    git add -A	     ✔️	          ✔️	              ✔️	      Stage all (new, modified, 
                                                                    deleted) files
    git add .	     ✔️	          ✔️	              ✔️	      Stage all (new, modified, 
                                                                deleted) files in current folder
    git add -u	     ❌	         ✔️	                ✔️	        Stage modified and deleted 
                                                                files only

    7. git rm --cached <filename> : this command brings the mentioned file(s) from staging area 
                            to working area. ie - makes them "untracked/unstaged" again.
    
    8. git restore <filename> : This command discards the changes/modifications made in 
                working area and restores the code of mentioned file from the staging
                area in the working area. 
                ie. - if the file (say File1.txt) was already staged, after that we added some 
                    lines to it. then after restore whatever lines were there in the file 
                    when in the staging area those lines will be restored and new lines 
                    or changes made in working area that were not stages will be discarded. 
                    thus or file have nothing as "untracked" as all changes are same as 
                    in the staging area.
            NOTE : the file that is restored still remains in the staging area.
                    unlike what we see in "git rm --cached".
    
    9. git clone [url] :

    10. git pull {branch-name} : by default it pulls from the branch where the HEAD 
                    is pointing at now.
    11. git branch | git branch -r | git branch -a : They all list the branch names and point 
                                                to the current branch as hghlighted one.
        . git branch -M main :              renames the just created branch to "main"
        . git checkout {branchname} :       switches from current branch to mentioned branch.
        . git checkout -b {branchname} :    creates a new branch and swithes to that new branch.
        . git branch -d [localBranchName] :   delete branch locally.
        . git push origin --delete [remoteBranchName] : delete branch remotely.

    12. git merge {branchname} : merges the mentioned branch with current branch.
                NOTE : didn't work for me.
    13. git log : it gives the history all commits.
