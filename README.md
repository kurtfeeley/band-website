## Band Website

### Running the site locally
To run this site locally, you will need to install Node.js and Git.

To do so go to the [Node.js website](https://nodejs.org), and download the LTS version.

Once that is complete you will need Git. To download Git go to [their website](https://git-scm.com/)
and download the version for your computer.

Once you have those downloaded and installed do a quick check in your command line or terminal.

`npm --version` - This should give you a version number.

`git --version` - This should give you a version number.

If those commands gave you version numbers you are ready to go!

From your command line, in the directory you want to hold the project, execute the following commands.
* `git clone https://github.com/mmelvin0581/band-website`
* `npm install`
* `npm run start`

The 1st command grabs the repository from the web. The 2nd command installs the necessary packages
to run the website. The 3rd command runs the website locally and will open a browser window to
`http://localhost:3000`. If the window doesn't open automatically, after running `npm run start`,
click [this link.](http://localhost:3000)

### Editting the site
I started building this site in React.js because honestly once you know it, it sucks to build in
anything else.

If you would like to contribute code to the site, branch off of `master` and work on your own branch.
To do this, execute these commands in the project directory:
* `git pull` - This gets you the latest code from the repository
* `git checkout -b <branch-name>` - Replacing `<branch-name>` with the name you'd like your branch to be called.
* After you make your additions, in the terminal: `git add .` - This adds all the changes in the current directory,
don't forget the `.`.
* Then: `git commit -m "a short description of your changes"` - You must use have the quotes.

You are free to edit the code! To push your branch to the GitHub repository:
* `git push --set-upstream origin <branch-name>` - For the first push, after that it's just `git push`

When you are ready for me to merge your code:
* Navigate to the [repository on GitHub](https://github.com/mmelvin0581/band-website)
* Select New Pull Request
* For the first dropdown, select `master`, from the second select your branch.
* Hit the big green Create Pull Request button

Please email me at *mmelvin0581@gmail.com* or hit me up in the slack channel if you have any questions.

### Media Sources
- Adobe Spark
- Matt Collamer, Unsplash Photo, unsplash.com 
- Martin Garrix - Animals (Official Video), youtube.com
- David Guetta & Showtek - Bad ft.Vassy (Lyrics Video), youtube.com
- Swedish House Mafia - Don't You Worry Child ft. John Martin, youtube.com
- Zyper Visuals Demo Reel 2014, youtube.com
- EDDIE N MARCO at SNOW GLOW, youtube.com
- HARD ROCK SOFA at REPUBLIC, youtube.com
- BINGO PLAYERS AT WILD KNIGHT, youtube.com
