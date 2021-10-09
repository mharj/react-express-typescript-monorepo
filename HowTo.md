# How to build from scratch

## backend init and link (in package.json)
```powershell
git clone https://github.com/mharj/express-base-api-ts backend
rm backend/.git
rm backend/.devcontainer
npm init -y -w ./backend
npm i -w backend
```

## frontend init and link (in package.json)
```powershell
git clone https://github.com/mharj/react-typescript-base frontend
rm frontend/.git
rm frontend/.githooks
rm frontend/.devcontainer
npm init -y -w ./frontend
npm i -w frontend
```

## example "mharj-monorepo-shared" module building (module name must be unique and not conflict with global NPM registry)
```powershell
npm init -w packages/mharj-monorepo-shared
npm install i -D typescript @node/types -w mharj-monorepo-shared
```
(setup tsc watch and build)


check package scripts for example run commands