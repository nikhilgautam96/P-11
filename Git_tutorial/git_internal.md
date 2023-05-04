# How Exactly git stores data internally :
    - git internally does a lot of optimization.
    - the objects are stored in compressed form.
    - it mainly stores data about the change & algorithmically shows us the file content with 
      that change.
    - even if we delete any files or folder in git repo, the objects in ".git" is not deleted
      cuz, we can anytime rollback to the previous change/version with this feature.
    - git is the quintessential real life example of software that uses data structures like {Hashin, trees, Linked list, etc}

### Code areas :-
    - Working Area : 
        . every code we write and save is in this area.
        . the files/changes which are not in ur staging area and maybe currently not hadled 
          by git are in working area.
        . these files are also called as untracked files sometimes (when the file has never been    tracked or handled by git).

    - Staging Area : 
        . "git add " command adds the saved files into the staging area.
        . file/changes which are surely going to be part of next commit.
        . It is the place where git knows what will change between the current and next commit.
        . "git ls-files"  -  shows all files and folders in the staging area.

    - Local Repository area : 
        . "git commit " commits the files from staging area to local repo.

### `git ls-files`  vs  `ls` :-

    - `git ls-files`  :  it shows all files in the staging area.
    - `ls`            :  it is a linux command that shows all files/folders in the local working directory.


### How git handles files
<details>
<summary>Details : </summary>

    - Files are represented by "blob Object".

    - internally git is a "<key,  value>" datastore.

    - [ key ] :
        . Hash of the data we want to store.
        . 40-digit hexadecimal value. 
        . SHA1 algorithm is used to generate the hash code.
        . for same value, this hash will be same.
            
    - [ value ] : 
        . actual data.
        . git stores the compressed data in a "blob" and some more metadata in the header.
            - ' blob ' :
                . "binary large object"     or     "big large object"
                . it is a data type to store very large piece of data inside an object.
                .  _____________________________________________________________________________
                  |  blob   (identifier like 'x' or 'y')  |           size of content           |
                  |_______________________________________|_____________________________________|
                  |                           '\0'  - 'delimeter'                               |
                  |_____________________________________________________________________________|
                  |                           content of the data                               |
                  |_____________________________________________________________________________|

**NOTE : all the above complex internal structure can be visualized inside the `" .git "` folder.**

### Visualization : 
    -       .git
            ├── HEAD
            ├── config
            ├── description
            ├── index
            ├── info
            │   └── exclude
            ├── objects
            │   ├── e6
            │   │   └── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
            │   ├── info
            │   └── pack
            └── refs
                ├── heads
                └── tags

    - inside the " objects " folder, in the tree above, we actually store the blobs.
    - folders are created inside the "objects" folder.
    - key (40 characters) : 
        . first 2 chars are used to name the directory/folder in which the data is stored.
            eg : " e6 "
        . remaining 38 chars are used to creating a file.
            eg : " 9de29bb2d1d6434b8b29ae775ad8c2e48c5391 "

**NOTE  : `inside git content is stored only once`**

### Explanation :
    - if we create a file,
       "test1.js"  ->  { console.log("Hi there!"); }
       next, adding this file to git repo will create a folder inside ".git -> object"
       now,
       if we create another file "test2.js" with same data { console.log("Hi there!"); }
       and
       adding this file to git repor will not create new folder inside the ".git -> object"
       bcz
       git does not store duplicate content.
        .git
        ├── HEAD
        ├── config
        ├── description
        ├── index
        ├── info
        │   └── exclude
        ├── objects
        │   ├── e6
        │   │   └── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
        │   ├── info
        │   └── pack
        └── refs
            ├── heads
            └── tags

    - if we create "test3.js" with content { console.log("I am Batman"); }
      and add this to repo, the tree will look like below.
        .git
        ├── HEAD
        ├── config
        ├── description
        ├── index
        ├── info
        │   └── exclude
        ├── objects
        │   ├── 10
        │   │   └── b20aa995a4e19d19cc3a5314802ac96f87696d
        │   ├── e6
        │   │   └── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
        │   ├── info
        │   └── pack
        └── refs
            ├── heads
            └── tags
    
    - now, if we change content of "test3.js" to { console.log("Hi there!"); }
        .git
        ├── HEAD
        ├── config
        ├── description
        ├── index
        ├── info
        │   └── exclude
        ├── objects
        │   ├── 10
        │   │   └── b20aa995a4e19d19cc3a5314802ac96f87696d
        │   ├── e6
        │   │   └── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
        │   ├── info
        │   └── pack
        └── refs
            ├── heads
            └── tags
        the tree will still look like this, but "test3.js" is now stored in,
               e6
               └── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391 
    - now if we create a new file say "test4.js" and content { console.log("I am Batman"); }
        it will be represented by 
               10
               └── b20aa995a4e19d19cc3a5314802ac96f87696d
</details>

### How git handles directories :
<details>
<summary>Details : </summary>

    - Tree :
        . Directories are represented by "Tree Object".
        . It stores information about directories and their content.
        . It contains pointers to other blobs and trees.
        eg :-
                                Tree 
                    ______________|____________
                   |                           |
                  blob                       Tree
                                 ______________|____________
                                |                           |
                               blob                        blob  

</details>

### How to check the content and type of a blob or tree object `git cat-file <flag> <hash>` : 
<details>
<summary>Details : </summary>

    - It is recommended to check the type and content of object in .git folder
      after commiting the change.
    - " git cat-file <flag> <hash (5-6 chars only)> "
    - <flag> :
        . ' -t ' = tells type of object,  
        . ' -p ' = prints content of object.

eg :- 
    `git cat-file -t 10b20`     = "blob"
    `git cat-file -p 10b20`     = "console.log("Hi there!");"

eg :-
    `git cat-file -t cbdf7`     = "blob"
    `git cat-file -p cbdf7`     = "console.log("I am Nikhil");"

eg :-
    `git cat-file -t e69de`     = "blob"
    `git cat-file -p e69de`     = ""

eg :-
    `git cat-file -t f95c7`     = "blob"
    `git cat-file -p f95c7`     = "console.log("Hi there");" 

</details>

### `Commit` in git is a object :-
<details>
<summary>Details : </summary>

    - commit in git is alaso an object like tree and blob.
    - every commit points to a tree.
    - The commit object has data of the 
        1. author & commmiter,
        2. date of commit,
        3. message,
        4. Parent commit.
        
    -    before commit                                           after commit
    -   .git                                                    .git
        ├── HEAD                                                ├── COMMIT_EDITMSG
        ├── config                                              ├── HEAD
        ├── description                                         ├── config
        ├── index                                               ├── description
        ├── info                                                ├── index        
        │   └── exclude                                         ├── info                                
        ├── objects                                             |   └── exclude                    
        │   ├── 10                                              ├── logs               
        │   │   └── b20aa995a4e19d19cc3a5314802ac96f87696d      │   ├── HEAD                            
        │   ├── 4b                                              │   └── refs                    
        │   │   └── 0a5bc78e3be70b820bfc7249f7c0200ac5cd94      |       └── heads   
        │   ├── 9a                                              |            └── main        
        │   │   └── 455b676e4880aeee03043a3113e09eb8519cd7      ├── objects
        │   ├── cb                                              │   ├── 10
        │   │   └── df7e4bb92d146367826585642517dca6c890f8      │   │   └── b20aa995a4e19d19cc3a5314802ac96f87696d
        │   ├── d1                                              │   ├── 13                    
        │   │   └── ce06f644d2ca5ca7ecc124bc2879fc058ddfa1      │   │   └── eef8fc790f3fe70b9ccbda6ec41b81386322b0 
        │   ├── e6                                              │   ├── 4b 
        │   │   └── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391      │   │   └── 0a5bc78e3be70b820bfc7249f7c0200ac5cd94 
        │   ├── f9                                              │   ├── 7e 
        │   │   └── 5c728a57f81e55493290e35d0fa0fc0f185cc7      │   │   └── fb1a4176760219b281c527baa2ba692d2ac19a 
        │   ├── info                                            │   ├── 9a 
        │   └── pack                                            │   │   └── 455b676e4880aeee03043a3113e09eb8519cd7 
        └── refs                                                │   ├── bb 
            ├── heads                                           │   │   └── a717de1d23f6994853c15246c8f723a4f42914 
            └── tags                                            │   ├── cb 
                                                                │   │   └── df7e4bb92d146367826585642517dca6c890f8
                                                                │   ├── d1
                                                                │   │   └── ce06f644d2ca5ca7ecc124bc2879fc058ddfa1
                                                                │   ├── e6
                                                                │   │   └── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
                                                                │   ├── f2
                                                                │   │   └── c42ca21dfa420bb1de6b75fb2c06be3eb8bfdb
                                                                │   ├── f9
                                                                │   │   └── 5c728a57f81e55493290e35d0fa0fc0f185cc7
                                                                │   ├── info
                                                                │   └── pack
                                                                └── refs
                                                                    ├── heads
                                                                    │   └── main
                                                                    └── tags

    - git cat-file -t 13ee  =  "commit"
    - git cat-file -p 13ee  =  'point to the root directory (f2c4 ...)'
        tree f2c42ca21dfa420bb1de6b75fb2c06be3eb8bfdb
        author nikhil296 <nikhilgautam1729@gmail.com> 1679569570 +0530
        committer nikhil296 <nikhilgautam1729@gmail.com> 1679569570 +0530

        First Commit

    - git cat-file -t f2c4    =   "tree"
    - git cat-file -p f2c4
        040000 tree bba717de1d23f6994853c15246c8f723a4f42914	coding
        040000 tree 7efb1a4176760219b281c527baa2ba692d2ac19a	nothing
        100644 blob 10b20aa995a4e19d19cc3a5314802ac96f87696d	test.js
        100644 blob 10b20aa995a4e19d19cc3a5314802ac96f87696d	test1.js
        100644 blob cbdf7e4bb92d146367826585642517dca6c890f8	test2.js
        100644 blob f95c728a57f81e55493290e35d0fa0fc0f185cc7	test3.js
        100644 blob 10b20aa995a4e19d19cc3a5314802ac96f87696d	test4.js
        100644 blob e69de29bb2d1d6434b8b29ae775ad8c2e48c5391	test5.js

    - git cat-file -t 7efb     =   "tree"
    - git cat-file -p 7efb     =   "point to the 'nothing' directory"
        100644 blob d1ce06f644d2ca5ca7ecc124bc2879fc058ddfa1	index.js

    - git cat-file -t bba71     =   "tree"
    - git cat-file -p bba71     =   "points to the 'coding' directory"
        100644 blob 4b0a5bc78e3be70b820bfc7249f7c0200ac5cd94	testing.js
        100644 blob 9a455b676e4880aeee03043a3113e09eb8519cd7	testing2.js

    - now if we make another commit, then the second commit will point to the first commit (or parent commit).
    - eg :
        git cat-file -t 21f2    =   "commit"
        git cat-file -p 21f2    =   "points to the root directory(b7dbb (this is different from previous root as there were changes so new hash is generated)) and the parent ("first commit" - 13eef)
        tree b7dbbcd749ccfa86d7eb8b73af842ae20a2c76ae
        parent 13eef8fc790f3fe70b9ccbda6ec41b81386322b0
        author nikhil296 <nikhilgautam1729@gmail.com> 1679575224 +0530
        committer nikhil296 <nikhilgautam1729@gmail.com> 1679575224 +0530

        second commit
    
    - now same with the third commit.
    - eg :
        git cat-file -t 46c2    =   "commit"
        git cat-file -p 46c2
        tree d90abf9a73682138ed3cfa5c70a7ecd90d6ecd56                       - 'root directory'
        parent 21f26e22b7edb66b71a7811ae243c1bd03c01e94                     - 'second commit'
        author nikhil296 <nikhilgautam1729@gmail.com> 1679576754 +0530      
        committer nikhil296 <nikhilgautam1729@gmail.com> 1679576754 +0530

        third commit

</details>

### `git commit --amend ` to make minor changes to previous commit :-
<details>
<summary>Details : </summary>

    - Syntax : "    git commit --amend -m "mesaage"    ".
    - It is used when we want to make changes to previous commit.
    - Suppose we are told to complete 1 feature in 1 commit, and we made a commit
      but we forgot to add 1 line of code(say) then if we add this line and make anothr commit
      it will become 2 commits so instead we can add this new commit to previous one itself using
      " git ammend ".
    - In the commit history it will show only 1 commit that is the latest one, but
      in the internal (tree .git) we can see that a new commit object is created
      and also the old object remains for previous commit.
eg :

    .git
    .
    .
    .
    ├── objects
    │   ├── 0c
    │   │   └── 4784b363cbfc7c64ccb0c94bbc2b9caee8ce74
    │   ├── 76
    │   │   └── 85c301e57524e6456719c5137bd3b4a5d9b5ef
    │   ├── e2                                            // this is commit object "first commit"
    │   │   └── 911ed74569ac4e2bea90c995544eb3cd167488     
    │   ├── info
    │   └── pack
    .

    after doing second commit using "git --amend"

    .git
    .
    .
    .
    ├── objects
    │   ├── 0c
    │   │   └── 4784b363cbfc7c64ccb0c94bbc2b9caee8ce74
    │   ├── 76
    │   │   └── 85c301e57524e6456719c5137bd3b4a5d9b5ef
    │   ├── c0
    │   │   └── 8f3879528077ee9446810dd4b5ac898834d580
    │   ├── e2                                          // this is commit object "first commit"
    │   │   └── 911ed74569ac4e2bea90c995544eb3cd167488
    │   ├── f4
    │   │   └── ba1013b22cecaf5899b0e6646862a4a73e6a01
    │   ├── fd                                          // this is commit object "second commit"
    │   │   └── 4f2410fd558415150bf6e029f4d9202ae30067
    │   ├── info
    │   └── pack
    .
    
    * we can see there are 2 objects for 2 commits but doing " git log " we get;
        git log
            commit fd4f2410fd558415150bf6e029f4d9202ae30067 (HEAD -> main)
            Author: nikhil296 <nikhilgautam1729@gmail.com>
            Date:   Fri Mar 24 11:05:31 2023 +0530

                Second commit using amend
</details>

### `git log --oneline` : tells us where the head is pointing to 
<details> 
<summary>Details : </summary>

    - eg :-
        git log --oneline
        fd4f241 (HEAD -> main) Second commit using amend
    - HEAD alays points to the latest commits, but we can make it point to other commits as well.
    - whereever the HEAD points we can see that change in our project.
</details>

### `git rm ` vs `git restore ` :-
<details>
<summary>Details : </summary> 

- ***`git restore`*** : 

    - The "restore" command helps to unstage or even discard uncommited local changes.
    - To undo the effects of git add and unstage changes you have previously added to the staging area.
        - eg :
            - " git restore --staged <"fileName"> "
    - it will not undo the changes from file but it will just remove the changes from staging area and keep it 
        in working directory. to remove it again from working directory as well use below command.
    - To discard the local changes in a file, thereby restoring its last committed state.
        - eg :
            - " git restore <"fileName"> "
    - NOTE : git restore will not work in a newly created repository as you will have to make atleast 1 commit
                before using "restore", otherwise it gives error.    
        - error : " fatal: could not resolve HEAD "

- ***`git rm`*** :

    - Remove files from both staging and working directory :-
        - git rm <"fileName">
        - git rm -r <"folder" (removes all files in that folder)> / <"file"> / <"."(to remove all files in root folder at once)>
    - Remove files from only staging & not from local working directory :-
        - git rm --cached <"fileName">  :  to remove 1 or multiple file
            - eg :-
                - git rm --cached test1.js test3.js
                - git rm --cached test1.js
        - git rm --cached -r <"folder"> / <"file"> / <".">  :  to remove folders
            - eg :-
                - git rm --cached -r folder1 folder2 test2.js
                - git rm --cached -r .

</details>

### `git add -p ` :-
<details>
<summary>Details : </summary>

    - It is an interactive way to add changes to staging area.
    - it opens an interactive tool where it shows all the changes and we can keep or discard the piece of "hunk".
    - "hunk" : the lines changed are together called as hunk.

</details>

### `git checkout -b <branchName>` :-
    - This creates a new branch from an existing branch.
    - The new branch has all the changes of the parent branch until that commit (till where the HEAD points to in parent branch).
    - any changes made to this new branch is totally isolated from other branched or even the parent branch unless 
      we merge it to some other branch.

### `git checkout <branchName>` :-
    - This switches from one branch to another without creating a new one.
    - before checking out from any branch it is must for us to commit our changes in that branch.

### `git push origin <branchName>` :-
    - to push changes from local repo to remote("origin") repo's specified branch.
    - before checking out from any branch it is must for us to commit our changes in that branch.

### `git push --set-upstream origin <branchName>` :-
    - when we are making the very first push from any branch into the remote repo, we have to set an upstream.
    - to avoid doing that every time with every new branch or repo, we can use below command.

### `git push` :-
    - to push changes from local repo to remote("origin") repo's specified branch.
    - this command works only after we have set an upstream.
    - we can set upstream and push using above command or tell git to set upstream automatically
    - git will then set upstream branch name as the local working branch name automatically every time we do the 1st push
      from a new branch.

### `git config --global --add --bool push.autoSetupRemote true` :-
    - This command push the current branch and set the remote as upstream automatically every time we push.
    - The "--global" flag means this will apply to all git commands on your machine (regardless of which repo it is),
      you can omit the flag to make it specific to a single repo on your machine.

### `git merge` :-
    - this command is used to merge changes of one branch to another branch.
    - it is a combination of    { git add  +  git commit }

    1. To merge from "feature_1" branch to "main" branch :-
        - first checkout to "main" branch if not already.
        - " git merge feature_1 "  :  this will open up an interactive commnadline to enter a message for merge commit.
    
    2. Conflicts in merging :-
        - if we encounter any conflicts during merging we will have to manually remove the conflicts first.
        -  then do - "git add"  &  "git commit" on it.
        - this will merge the "feature_1" changes into "main".

### `git clone` :-
    1. To clone a Git repository from remote repo :
        - eg :-
           git clone https://github.com/username/repo.git

    2. To clone a Git repository from a specific branch :
        -  you can use the -b flag followed by the branch name. 
        - Here's an example:
            git clone -b branch-name https://github.com/username/repo.git

### `git branch -d <branch name>`   or    `git branch -D <branch name>` :-
#### to delete any branch from local
    - we can delete any local branch by using above command.
        eg :-
            git branch -d <branch_name>
    - usually to delete branch we need to switch from the branch we want to delete to another branch.
    - If the branch has unmerged changes, you can use the following command to force the deletion:
        eg :- 
            git branch -D <branch_name>

    - suppose we want to delete "demo" branch & we are in "feature_1" branch, so to delete "demo" we will have to
      make sure the "demo" branch is succesfully merged to "feature_1".

    - if we created new branch "demo" from "main" (say) and now if we made any changes in "demo" branch,
      again we will have to merge it to "main" to delete it from "main" or any other branch that we are currently in.