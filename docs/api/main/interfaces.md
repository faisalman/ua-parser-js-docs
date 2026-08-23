[`← API Reference`](/api/main/overview)

# Interfaces

UAParser.js returns structured objects for each category of detected user-agent data.

| Interface | Description | Returned by |
| -- | -- | -- |
| [`IData`](/api/main/idata) | Base interface shared by `IBrowser`, `ICPU`, `IDevice`, `IEngine`, `IOS`, and `IResult`. | All result interfaces |
| [`IBrowser`](/api/main/ibrowser) | Browser name, version, major version, and type. | [`getBrowser()`](/api/main/get-browser) |
| [`ICPU`](/api/main/icpu) | CPU architecture. | [`getCPU()`](/api/main/get-cpu) |
| [`IDevice`](/api/main/idevice) | Device type, vendor, and model. | [`getDevice()`](/api/main/get-device) |
| [`IEngine`](/api/main/iengine) | Browser engine name and version. | [`getEngine()`](/api/main/get-engine) |
| [`IOS`](/api/main/ios) | Operating-system name and version. | [`getOS()`](/api/main/get-os) |
| [`IResult`](/api/main/iresult) | Complete parsed result containing all categories. | [`getResult()`](/api/main/get-result) |
