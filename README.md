# Memory game

## Stack
Application is build by `webpack`, `babel` is responsible of transpiling code (including TS).\
Linting is provided by `eslint` + `prettier`.

## Scripts
**dev** - Start `webpack-dev-server` with hot module reloading.\
**build** - Create versioned application bundles inside of `dist` folder.\
**ts-lint** - Validate code with TypeScript.\
**lint** - Validate code with TypesScript and `eslint`.\
**lint:fix** - As above but with write access.\
**prettier** - Execute Prettier, with write access.\
**test** - Execute `jest`.\
**preversion** - Run code checks before version bump.\
**version** - Build application, bump application version and create commit.


## Code verification on commit
Before commit creation is allowed, code is validated by  `prettier` and `lint:fix` commands.\
If code is fixablem then possible code changes are added to staged files.


## Structure
Root folder contains internal project files.\
Application code is structured inside of `src` folder.

It is split into 4 main folders:

#### components
This folder contains only folders. Each folder should have same name, as component inside of it.\
Main component file should be named `[component].tsx`.\
Component dependencies should have been structured into separate files, with naming convention `[component].[purpose].[extension]`.\
Types should be keept inside `[component].types.ts` file.

#### constants
Any kind of constant which is imported in many places, should be keept out there.

#### routes
This folder contains only folders. Each folder should have same name as route component inside.\
Route component folder has to contain main file `[route].tsx`, and dynamic import file `[route].loadable.tsx` assigned to it.\
Types should be keept inside `[route].types.ts` file.

#### theme
Anything associated with app theming.

#### Additional folders

##### app
Contains main application component which is rendered to the DOM in `src/index.tsx` file.\
**Each `route` component has to be imported out there.**

##### utils
This folder might be created in case of need for project-wide util functions.
