# [Quickstarts](/intro/quick-start/quick-start) : Using Command Line

You can use [npx🡭](https://docs.npmjs.com/cli/v10/commands/npx) to run UAParser.js right from the command line:

```sh [npm]
$ npx ua-parser-js "<INSERT-USER-AGENT-HERE>"
```

## Code Example

```sh [Console ~vscode-icons:file-type-shell~]
# example command input:
npx ua-parser-js "Flock/2.16 (Zenwalk 7.3; es_PR;)"

# console output:
[
    {
        "ua": "Flock/2.16 (Zenwalk 7.3; es_PR;)",
        "browser": {
            "name": "Flock",
            "version": "2.16",
            "major": "2"
        },
        "cpu": {},
        "device": {},
        "engine": {},
        "os": {
            "name": "Zenwalk",
            "version": "7.3"
        }
    }
]

# let's save the result into a log file:
npx ua-parser-js "Flock/2.16 (Zenwalk 7.3; es_PR;)" >> log.txt
```