# Using Command Line

Parse user-agent from command line without installing `ua-parser-js` by using [`npx`](https://docs.npmjs.com/cli/v10/commands/npx)

```sh
$ npx ua-parser-js "[INSERT-USER-AGENT-HERE]"
```

## Code Example

```py
# print to console
npx ua-parser-js "Flock/2.16 (Zenwalk 7.3; es_PR;)"

''' # console output:
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
```

```sh
# save the result as a file
npx ua-parser-js "Flock/2.16 (Zenwalk 7.3; es_PR;)" > result.txt
```