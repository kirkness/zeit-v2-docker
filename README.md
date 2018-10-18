App runs fine locally with the following:

```sh
docker build -t "test" .
docker run test
```

Deploy to Zeit via `now` and the app will randomly close down and restart all within a fairly short space of time.

_Logs:_

```sh
2018-10-18T13:04:37.908Z  Assembling image
2018-10-18T13:04:50.367Z  Storing image (37.0M)
2018-10-18T13:05:01.078Z  2018-10-18T13:05:00: PM2 log: Launching in no daemon mode
2018-10-18T13:05:01.332Z  2018-10-18T13:05:01: PM2 log: App [Main:0] starting in -fork mode-
2018-10-18T13:05:01.345Z  2018-10-18T13:05:01: PM2 log: App [Main:0] online
2018-10-18T13:05:01.364Z  👋🏻 from the server
2018-10-18T13:05:01.327Z  𝚫 Discovered your application listening on port 4000
2018-10-18T13:05:01.332Z  2018-10-18T13:05:01: PM2 log: App [Main:0] starting in -fork mode-
2018-10-18T13:05:01.345Z  2018-10-18T13:05:01: PM2 log: App [Main:0] online
2018-10-18T13:05:01.364Z  👋🏻 from the server
2018-10-18T13:06:10.228Z  2018-10-18T13:06:10: PM2 log: Stopping app:Main id:0
2018-10-18T13:06:10.529Z  2018-10-18T13:06:10: PM2 log: App [Main:0] exited with code [0] via signal [SIGINT]
2018-10-18T13:06:10.542Z  2018-10-18T13:06:10: PM2 log: pid=12 msg=process killed
2018-10-18T13:06:10.557Z  2018-10-18T13:06:10: PM2 log: PM2 successfully stopped
2018-10-18T13:06:52.675Z  2018-10-18T13:06:52: PM2 log: Launching in no daemon mode
2018-10-18T13:06:52.688Z  2018-10-18T13:06:52: PM2 log: App [Main:0] starting in -fork mode-
2018-10-18T13:06:52.702Z  2018-10-18T13:06:52: PM2 log: App [Main:0] online
2018-10-18T13:06:52.889Z  👋🏻 from the server
2018-10-18T13:06:52.798Z  𝚫 Discovered your application listening on port 4000
2018-10-18T13:07:56.778Z  2018-10-18T13:07:56: PM2 log: Stopping app:Main id:0
2018-10-18T13:07:56.792Z  2018-10-18T13:07:56: PM2 log: App [Main:0] exited with code [0] via signal [SIGINT]
2018-10-18T13:07:56.807Z  2018-10-18T13:07:56: PM2 log: 0 application online, retry = 3
2018-10-18T13:07:56.821Z  2018-10-18T13:07:56: PM2 log: pid=12 msg=process killed
2018-10-18T13:07:57.028Z  2018-10-18T13:07:56: PM2 log: PM2 successfully stopped
```

Two factors that I've found cause it:

1. Being on cloud v2, i.e. running the same app on v1 is all good.
2. Using `CMD node app.js` rather than `pm2-runtime`.
