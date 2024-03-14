
# Getting Started
*In your application's **Startup.cs** file, configure Http Support by adding the following to the **Startup** class **ConfigureServices** method:
```c#
// Configure and setup Http Support integration. Passing in the 'IConfiguration' instance.
services.AddHttpSupport(Configuration);

## Configuration
Add the following configurations to your _appsettings.json_ files (_Example_):

```json
"HttpSupport": {
    "BaseUrl": "http://localhost:5488",     // Specifies the Base Url to use when sending API requests 
    "HttpTimeout": "00:01:00",              // (Optional) Specified the HTTP client timeout to use for each call to . Defaults to '00:01:00' (1 minute)
}
```