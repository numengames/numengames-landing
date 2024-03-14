# NumenGames - Landing Page

A website built with Astro website template & TailwindCSS.

## Installation

If you are reading this on github, you can click on the "Use this template" button above to create a new repository from astroship to your account. Then you can do a `git clone` to clone it to your local system.

Alternatively, you can clone the project directly from this repo to your local system.

### 1. Clone the repo

```bash
git clone https://github.com/surjithctly/astroship.git myProjectName
# or
git clone https://github.com/surjithctly/astroship.git .
```

The `.` will clone it to the current directory so make sure you are inside your project folder first.

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start development Server

```bash
pnpm dev
```

### Preview & Build

```bash
pnpm preview
pnpm build
```

### Other Commands

```bash
pnpm astro ...
pnpm astro add
pnpm astro --help
```

## Project Structure

Inside of your NumenGames project, you'll see the following folders and files:

```
/
├── public/
│   └── ...
├── src/
|   ├── assets/
│   │   └── ...
│   ├── components/
│   │   └── ...
│   ├── content/
│   │   └── ...
|   ├── layouts/
│   │   └── ...
│   └── pages/
│   |   └── ...
|   ├── utils/
│   │   └── ...
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## TailwindCSS

TailwindCSS is already configured in this repo, so you can start using it without any installation.
