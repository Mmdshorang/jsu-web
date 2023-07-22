# JSU Web Application
### [JSU website](https://jsu.ac.ir)

### Install git and gh
- #### Git installation:
    - #### [Direct download from the website](https://git-scm.com/downloads)
    - #### Using Chocolatey in Windows:
        ```
        choco install git
        ```
    - #### Using Winget in Windows:
        ```
        winget install -e --id Git.Git
        ```
- #### GH CLI installation (optional):

    - #### [Direct download from the website](https://cli.github.com/)

    - #### Using Chocolatey in Windows:
        ```
        choco install gh
        ```
    - #### Using Winget in Windows:
        ```
        winget install -e --id GitHub.cli
        ```

### Log into your Github account

- #### Using Github CLI:
    ```
    gh auth login
    ```
    - When prompted for your preferred protocol for Git operations, select HTTPS.
    - When asked if you would like to authenticate to Git with your GitHub credentials, enter Y.

- #### Without Github CLI (using GCM):
    - The next time you clone an HTTPS URL that requires authentication, Git will prompt you to log in using a browser window. 

- #### [Using a personal access token (not recommended)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

### Fork the project on your own github account:

![Fork Button](https://github.com/s-ras/jsu-web/blob/b998a1494a9efabf205a83eaf8165d59c5f97c99/assets/fork_button.png)

### Clone the project on your local device:
```
git clone https://github.com/[your-user-account]/jsu-web.git
```

### Install nodejs dependencies:
```
cd jsu-web
node install
```
### Create a new branch for your work:
```bash
git branch my-new-branch
git checkout my-new-branch
```
### ⚠️ Make sure to uphold the project structure to minimize merge conflicts.