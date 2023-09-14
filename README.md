![TheUnnix](https://img.shields.io/badge/theunnix-%2312100E.svg?&style=for-the-badge&logo=shpetim&logoColor=white)
![SHPETIMALIU](https://img.shields.io/badge/SHPETIM-ALIU-%2312100E.svg?&style=for-the-badge&logo=shpetim&logoColor=white)

# Thread Clone

## Project Overview

This project includes a React-based web application that serves as a social media platform (Thread Clone). Users can create threads, comment on threads, like posts, follow other users, and view user profiles. The project is structured into several components and functionalities, each serving different purposes.

## Project Components

### Comment.jsx

The `Comment.jsx` component is responsible for rendering individual comments. It includes the following functionality:

- Retrieves information about the user associated with the comment's owner.
- Allows users to change their preferences for comments.
- Displays the user's profile picture, name, comment body, post time, and likes.
- Uses React components like `ReactTimeAgo` and `react-feather` icons to display time and the like button.

### Header.jsx

The `Header.jsx` component represents the application's header. It contains the page logo, the user's profile picture, the user's name, and a logout button (if a user is logged in). It also includes a link to the user's profile page.

### MainLayout.jsx

`MainLayout.jsx` is a structural component used to organize the application. It includes the header and supports the main content of the application.

### Thread.jsx

The `Thread.jsx` component displays individual thread posts. It includes the following functionality:

- Retrieves information about the user associated with the thread's owner.
- Allows users to delete their threads.
- Displays the thread owner's profile picture, name, thread body, post time, image (if included), likes, comments, and icons for liking, commenting, reposting, and sending the thread.

### AuthContext.jsx

`AuthContext.jsx` is a context component that manages user authentication and provides the following functionality:

- Manages user login and logout.
- Retrieves user information.
- Stores user data in context for use throughout the application.

### Feed.jsx

The `Feed.jsx` component is the main component of the application and includes the following functionality:

- Retrieves and displays threads from users the logged-in user is following.
- Allows users to create new threads with optional text and images.
- Provides the ability to like threads.

### Login.jsx

The `Login.jsx` component manages user login functionality and includes the following:

- The login form with fields for email and password.
- Allows users to log in and redirects them to the main page upon successful login.

### Profile.jsx

`Profile.jsx` is responsible for displaying user profiles and provides the following functionality:

- Retrieves and displays user information, including name, username, bio, followers, and a link (if provided).
- Allows users to follow or unfollow other users.
- Displays threads created by the profile user.

### ThreadPage.jsx

The `ThreadPage.jsx` component displays a single thread and its associated comments. It includes the following functionality:

- Retrieves and displays thread information, including the thread body and its owner.
- Allows users to comment on the thread.
- Displays comments and their user information.

## Project Setup

To set up and run the project, follow these steps:

1. Install the necessary dependencies using `npm install` or `yarn install`.
2. Start the development server with `npm run dev` or `yarn run dev`.
3. Access the application in your web browser at `http://localhost:5173`.

# Creating a Database in Appwrite.io

## Step 1: Create a Database Project

1. Log in to your Appwrite.io account.
2. In the dashboard panel, click on "Database" to access the database interface.
3. Click on "Projects" in the left sidebar menu.
4. Press the "Create a New Project" button.
5. Provide your project's name and click "Create Project."

## Step 2: Create the "DEVELOPMENT" Database

1. In the database's main panel, click on your newly created project.
2. Inside the project panel, click on "Databases" in the left sidebar.
3. Click the "Create a New Database" button.
4. Give your database a name, such as "DEVELOPMENT," and click "Create Database."

## Step 3: Add Collections and Attributes

1. threads
2. profiles
3. thread comment

### Collection "threads"

1. In the "DEVELOPMENT" database panel, click on "collections" in the left sidebar.
2. Click the "Add Collection" button.
3. Name the collection "threads" and click "Create Collection."
4. Add the following attributes to the "threads" collection:
   - "owner_id"
   - "body" (required)
   - "image"
   - "users_who_liked" (array)
   - "likes"

### Collection "profile"

1. Press the "Add Collection" button in the "DEVELOPMENT" database panel.
2. Name the collection "profile" and click "Create Collection."
3. Add the following attributes to the "profile" collection:
   - "followers"
   - "following"
   - "followers_count"
   - "following_count"
   - "profile_pic"
   - "username"
   - "user_id"
   - "liked_threads"
   - "bio"
     - "link"
     - "name"
   - Create an index in the "profile" collection:
     - KEY: "username"
     - TYPE: "unique"
     - ATTRIBUTES: "username"
     - ASC/DESC: "ASC"
     - Allow update permissions for users to query, read, update, and delete (CRUD).

### Collection "thread comment"

1. Press the "Add Collection" button in the "DEVELOPMENT" database panel.
2. Name the collection "thread comment" and click "Create Collection."
3. Add the following attributes to the "thread comment" collection:
   - "body"
   - "owner_id"
   - "thread_id"
   - "likes"
   - "users_who_liked"
   - Create an index in the "thread comment" collection:
     - KEY: "thread_id"
     - TYPE: "FULLTEXT"
     - ATTRIBUTES: "thread_id"
     - ASC/DESC: "DESC"

Now you have created a database in Appwrite.io with three collections: "threads," "profile," and "thread comment." Each collection has its attributes and indexes defined according to the requirements of your threadClone application. You can start using these collections to store and manipulate your data in the threadClone application.

## Project Dependencies

The project uses various dependencies, including React, React Router, appwrite, and additional packages for the interface and functionality. Install all the packages used by the project (package.json).

# Thread Clone 🇦🇱

## Përmbajtja e Projektit

Ky projekt përfshin një aplikacion web bazuar në React që shërben si një platformë media sociale (Thread Clone). Përdoruesit mund të krijojnë thread, të komentojnë në thread, të pëlqejnë postime, të ndjekin përdorues të tjerë dhe të shohin profilet e përdoruesve. Projekti është i strukturuar në disa komponentë dhe funksionalitete, secili me qëllime te ndryshme.

## Komponentët e Projektit

### Comment.jsx

Komponenti `Comment.jsx` është përgjegjës për paraqitjen e komenteve individuale. Përfshin funksionalitetin e mëposhtëm:

- Merr informacionin e përdoruesit të lidhur me pronarin e komentit.
- Lejon përdoruesit të ndryshojnë pëlqimet për komentet.
- Shfaq fotografin e profilit te perdoruesit të cilit komenton, emrin, trupin e komentit, kohën e postimit dhe pëlqimet.
- Përdor komponentë të React si `ReactTimeAgo` dhe ikonat `react-feather` për t'u shfaqur kohën dhe butonin e pëlqimit.

### Header.jsx

Komponenti `Header.jsx` paraqet headerin e aplikacionit. Përmban logon e faqes, fotografin e profilit te përdoruesit, emrin e përdoruesit dhe një buton për daljen (nëse një përdorues është i kyçur). Përfshin gjithashtu një lidhje për faqen e profilit të përdoruesit.

### MainLayout.jsx

`MainLayout.jsx` është një komponent i strukturës i përdorur për të organizuar aplikacionin. Përfshin headerin dhe mbështet përmbajtjen kryesore të aplikacionit.

### Thread.jsx

Komponenti `Thread.jsx` shfaq postimet individuale të thread. Përmban funksionalitetin e mëposhtëm:

- Merr informacionin e përdoruesit të lidhur me pronarin e thread.
- Lejon përdoruesit të fshijnë threads e tyre.
- Shfaq fotografin e profilit te pronarit të thredit, emrin, trupin e thredit, kohën e postimit, imazhin (nëse është përfshirë), pëlqimet, komentet dhe ikonat për të pëlqyer, komentuar, përsëritur dhe dërguar thredin.

### AuthContext.jsx

`AuthContext.jsx` është një komponent i kontekstit që menaxhon autentifikimin e përdoruesit dhe ofron funksionalitetin e mëposhtëm:

- Menaxhon hyrjen dhe daljen e përdoruesit.
- Merr informacionin e përdoruesit.
- Ruan të dhënat e përdoruesit në kontekst për përdoret në të gjithë aplikacionin.

### Feed.jsx

Komponenti `Feed.jsx` është komponenti kryesor i aplikacionit dhe përfshin funksionalitetin e mëposhtëm:

- Merr dhe shfaq thredet nga përdoruesit që i ka publikuar tek përdoruesi i kyçur qe po ndjek.
- Lejon përdoruesit të krijojnë thred të reja me tekst dhe imazhe opsionale.
- Siguron aftësinë për të pëlqyer thredet.

### Login.jsx

Komponenti `Login.jsx` menaxhon funksionalitetin e hyrjes së përdoruesit dhe përfshin mëposhtëm:

- Formën e hyrjes me fushat për email dhe fjalëkalim.
- Lejon përdoruesit të hyjnë dhe t'i ridrejtohen faqes kryesore pas hyrjes të suksesshme.

### Profile.jsx

`Profile.jsx` është përgjegjës për paraqitjen e profileve të përdoruesve dhe ofron funksionalitetin e mëposhtëm:

- Merr dhe shfaq informacionin e përdoruesit, duke përfshirë emrin, emrin e përdoruesit, bio, ndjekësit dhe një lidhje (nëse është dhënë).
- Lejon përdoruesit të ndjekin ose të mos ndjekin përdorues të tjerë.
- Shfaq threadet e krijuara nga përdoruesi i profilit.

### ThreadPage.jsx

Komponenti `ThreadPage.jsx` shfaq një thread të vetëm dhe komentet e lidhura. Përfshin funksionalitetin e mëposhtëm:

- Merr dhe shfaq informacionin e threadit, përfshirë trupin e threadit dhe pronarin e tij.
- Lejon përdoruesit të komentojnë në thread.
- Shfaq komentet dhe informacionin e tyre të përdoruesit.

## Vendosja e Projektit

Për të vendosur dhe ekzekutuar projektin, ndiqni këto hapa:

1. Instaloni mbajtjet e nevojshme duke përdorur `npm install` ose `yarn install`.
2. Nisni serverin e zhvillimit me `npm run dev` ose `yarn run dev`.
3. Hyni në aplikacion në shfletuesin tuaj të uebit në `http://localhost:5173`.

# Krijojm një Databaze në Appwrite.io

## Hapi 1: Krijoni një Projekt të Bazës së të Dhënave

1. Hyni në llogarinë tuaj në Appwrite.io.
2. Në panelin e kryesisë, klikoni në "Database" për të hyrë në ndërfaqen e bazës së të dhënave.
3. Klikoni në "Projects" në menunë anësore të majtë.
4. Shtypni butonin "Create a New Project".
5. Jepni emrin e projektit tuaj dhe shtypni "Create Project".

## Hapi 2: Krijoni Databazën "DEVELOPMENT"

1. Në panelin e kryesisë të bazës së të dhënave, klikoni në projektin tuaj të sapo krijuar.
2. Në panelin e projektit, klikoni në "Databases" në menunë anësore të majtë.
3. Shtypni butonin "Create a New Database".
4. Jepni emrin "DEVELOPMENT" ose qfardo emri qe deshironi për databazën dhe shtypni "Create Database".

## Hapi 3: Shtoni Koleksionet dhe Atributet

1. threads
2. profiles
3. thread comment

### Koleksioni "threads"

1. Në panelin e databazës "DEVELOPMENT", klikoni në "collections" në menunë anësore të majtë.
2. Klikoni butonin "Add Collection".
3. Jepni emrin "threads" për koleksionin dhe shtypni "Create Collection".
4. Shtoni atributet e mëposhtme në koleksionin "threads":
   - "owner_id"
   - "body" (të kërkuar)
   - "image"
   - "users_who_liked" (array)
   - "likes"

### Koleksioni "profile"

1. Shtypeni butonin "Add Collection" në panelin e databazës "DEVELOPMENT".
2. Jepni emrin "profile" për koleksionin dhe shtypni "Create Collection".
3. Shtoni atributet e mëposhtme në koleksionin "profile":
   - "followers"
   - "following"
   - "followers_count"
   - "following_count"
   - "profile_pic"
   - "username"
   - "user_id"
   - "liked_threads"
   - "bio"
     - "link"
     - "name"
   - Krijoni një indeks në koleksionin "profile":
     - KEY: "username"
     - TYPE: "unique"
     - ATTRIBUTES: "username"
     - ASC/DESC: "ASC"
     - Lejo lejen e azhurnimit për përdoruesit që të kërkojnë, lexojnë, ndryshojnë dhe fshijnë (CRUD).

### Koleksioni "thread comment"

1. Shtypeni butonin "Add Collection" në panelin e databazës "DEVELOPMENT".
2. Jepni emrin "thread comment" për koleksionin dhe shtypni "Create Collection".
3. Shtoni atributet e mëposhtme në koleksionin "thread comment":
   - "body"
   - "owner_id"
   - "thread_id"
   - "likes"
   - "users_who_liked"
   - Krijoni një indeks në koleksionin "thread comment":
     - KEY: "thread_id"
     - TYPE: "FULLTEXT"
     - ATTRIBUTES: "thread_id"
     - ASC/DESC: "DESC"

Tani keni krijuar një databazë në Appwrite.io me tre koleksione: "threads", "profile", dhe "thread comment". Çdo koleksion ka atributet dhe indekset e tyre të përcaktuara sipas kërkesave të aplikacionit ton. Ju mund të filloni të përdorni këto koleksione për të ruajtur dhe manipuluar të dhënat tuaja në aplikacionin threadClone.

## Depëndencat e Projektit

Projekti përdor depëndencat te ndryshëm, përfshirë React, React Router, appwrite dhe pako shtesë për ndërfaqen dhe funksionalitetin.
Instaloni te gjitha paketat qe perdor projekti (package.json)

![logo](https://www.vectorlogo.zone/logos/appwriteio/appwriteio-ar21.png)

PREVIEW OF WEBAPPS:
![Home page](https://theunnix.com/wp-content/uploads/2023/09/Screenshot-2023-09-13-at-10.03.50-PM.png)
![Profile](https://theunnix.com/wp-content/uploads/2023/09/Screenshot-2023-09-13-at-10.03.20-PM.png)
![KOMENTET](https://theunnix.com/wp-content/uploads/2023/09/Screenshot-2023-09-13-at-10.03.06-PM.png)

![THEUNNIX LOGO](https://theunnix.com/wp-content/uploads/2023/09/TheUnnix-Logo.svg)
