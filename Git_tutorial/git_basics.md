### Version control System :-
    . "Version Control Managemet Tool"  sometimes also known as "Source Control Managemet Tool"
    . Version :
         - a particular state of a product. (eg :- version 1.0.1, etc).
         - when we create and launch a software we actually launch an initial version of 
           the software, then we go on making changes or enhancement
           (with some features added/removed) in that software thus releaseing more 
           updated versions.
           eg : 1.10.5
                1.10.6, and so on.
    . VCS : 
         - it is a tool to manage versions or changes in a software.
         - it helps us to "track changes".
         - it helps us to "manage versions and their rollback (previous versions)".
         - It helps us in "comparing changes in versions".
         - It helps us to "log(keep a record of what changes we are making) the changes".
         - It helps us in "Collaborations".
         examples :
              Git, Mercurial, etc.
### Git :-
    Features :
        1. Open Source.
        2. Easily maintains code Integrity.
        3. Secure   (All changes we make in our code are secure).
        4. Flexibility  (many support and other gui s/w are there for git).
    Installation :
        - MacOs : "brew install git"
    - "Version Control System (VCS)" : a category of software tools that helps in recording 
            changes made to files by keeping a track of modifications done in the code.
    - a popular VCS, created by "Linus Torvald" in 2005 and has been maintained 
        by "Junio Hamano".
    - Used for :-
        . Tracking code changes.
        . Tracking who made changes like history of the file.
        . Coding collaborations.
    - Types of VCS :-
        . Centralised Version Control System. {eg - CVS, SubVersion, Perforce}
        . Distributed Version Control System. {eg - Git, Mercurial, Darcs, Bazaar, etc}

### There are 2 types of GIT softwares :-
    - Git Server : it is a remote repository. {eg - github, gitlab, etc}
    - Git Client : the application that runs in our local system. {eg. gitbash, gitcmd, git GUI, etc}

### Git Architecture :-
    . There are 3 stages involved, 
    . "git init" command creates these stages in ur workspace.
        - Working Area : every code we write and save is in this area.
        - Staging Area : "git add " command adds the saves files into the staging area.
        - Local Repository : "git commit " commits the files from staging area to local repo.
    
    . "git push" pushes the code to the remote repo.
    . "git pull" puls remote repo changes and adds it to ur local working area.

### Git vs GitHub :
    - Git is a version control system that lets you manage and keep track of your 
        source code history. 
    - GitHub is a cloud-based hosting service that lets you manage Git repositories.
    
| Git | GitHub/GitLab/Bitbucket |
| --- | --- |
| Software | Service |
| Installed locally | Web hosted |
| VCS to manage source code history | Service for managing git repositories    |