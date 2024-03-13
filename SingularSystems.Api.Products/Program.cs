using Serilog;
using SingularSystems.Api.Products.Extensions;

try
{
    var builder = WebApplication.CreateBuilder(args);

    // Add services to the container.

    builder.AddSerilogSupport();
    builder.Services.AddControllers();
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.ConfigureServices(builder.Configuration);
    //builder.Services.AddSwaggerSupport();

    var app = builder.Build();
    app.UseSwaggerMiddleware();
    app.UseHttpsRedirection();

    app.UseAuthorization();

    app.MapControllers();
    Log.Information("Host is starting ");
    app.Run();

}
catch (Exception exception)
{
    Console.WriteLine(exception.Message);
    Log.Fatal(exception, "Error starting application! '{ErrorMessage}",exception.Message);
}
finally
{
    Log.CloseAndFlush();
}


