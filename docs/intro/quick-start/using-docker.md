# [Quickstarts](/intro/quick-start/quick-start) : Using Docker

### Pull Image

```sh [docker]
$ docker pull faisalman/ua-parser-js
```

### Parse a Single User-Agent

```sh [Console ~vscode-icons:file-type-shell~]
docker run --rm faisalman/ua-parser-js "Flock/2.16 (Zenwalk 7.3; es_PR;)"
```

### Parse Multiple User-Agents

```sh [Console ~vscode-icons:file-type-shell~]
docker run --rm faisalman/ua-parser-js \
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)" \
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
```

### Batch Processing From File

```sh [Console ~vscode-icons:file-type-shell~]
docker run --rm \
    -v "$(pwd)":/data \
    faisalman/ua-parser-js \
    --input-file /data/log.txt \
    --output-file /data/log-result.json
```

::: tip
- `-v "$(pwd)":/data`: mounts your current directory to `/data` inside the container.
- `--input-file`: Text file with list of User-Agents (one per line).
- `--output-file`: JSON file for parsed results, if it's not provided, results are printed to the terminal.
:::