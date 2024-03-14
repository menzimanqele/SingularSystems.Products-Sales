using Microsoft.AspNetCore.Cors.Infrastructure;
using Serilog;
using SingularSystems.Api.Products.Extensions;

try
{
    var builder = WebApplication.CreateBuilder(args);
    const string MyCorsPolicy = "AllowedCors";

// Add services to the container.

builder.AddSerilogSupport();
    builder.Services.AddControllers();
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.ConfigureServices(builder.Configuration);


    builder.Services.AddCors(options =>
    {
        options.AddPolicy(name: MyCorsPolicy,
            builder =>
            {
                builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            });
    });


    var app = builder.Build();
    app.UseSwaggerMiddleware();
    app.UseHttpsRedirection();

    app.UseAuthorization();

    app.UseCors(MyCorsPolicy);

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


