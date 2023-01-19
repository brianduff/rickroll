# Rickroll

This is an experiment using Lit 2.0, mainly for learning purposes.

Start the server:
```
cd server
npm start
```

Start the client:
```
cd client
npm start
```

To see it in action. 

The code in the `material` branch uses Material Design 3 lit components from
https://github.com/material-components/material-web. These haven't been released
yet. In the meantime, to get this to work, you need to clone this repo in the same
directory that `lit-starter` is cloned to:

```
git clone https://github.com/material-components/material-web
cd material-web
npm run build
cd ../lit-starter
npm install
npm run build
```

You might also need to upgrade the version of lit being used in material-web to a
newer version (e.g. 2.6.0s)
