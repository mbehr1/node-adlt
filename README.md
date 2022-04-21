# node-adlt

This is an npm module for using [adlt](https://github.com/mbehr1/adlt) in a Node project. It's used by VS Code Extension [dlt-logs](https://github.com/mbehr1/dlt-logs).

## How it works

- adlt is built in [adlt](https://github.com/mbehr1/adlt) and published to releases for each tag in that repo.
- In this module's postinstall task, it determines which platform it is being installed on and downloads the correct binary from adlt for the platform.
- The path to the adlt binary is exported as `adltPath`.
- This modules version reflects 1:1 the adlt version.

### Usage example

```js
const { adltPath } = require('node-adlt');

// child_process.spawn(adltPath, ...)
```

### Dev note

Runtime dependencies are not allowed in this project. This code runs on postinstall, and any dependencies would only be needed for postinstall, but they would have to be declared as `dependencies`, not `devDependencies`. Then if they were not cleaned up manually, they would end up being included in any project that uses this. I allow `https-proxy-agent` as an exception because we already ship that in VS Code, and `proxy-from-env` because it's very small and much easier to use it than reimplement it.

### GitHub API Limit note

You can produce an API key, set the GITHUB_TOKEN environment var to it, and vscode-ripgrep will use it when downloading from GitHub. This increases your API limit.

### License

This code/project is licensed under MIT license (as its mainly a copy+paste from microsoft/vscode-ripgrep repo/examples). But the adlt binary installed is licensed under CC-BY-NC-SA-4.0 so I reflect that here to avoid confusion on installing it in a node project.
