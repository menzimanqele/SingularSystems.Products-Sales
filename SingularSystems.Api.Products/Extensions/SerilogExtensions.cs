using System;
using Serilog;
namespace SingularSystems.Api.Products.Extensions
{
	public static class SerilogExtensions
	{
		public static void AddSerilogSupport(this WebApplicationBuilder builder)
		{
            builder.Host.UseSerilog();
            builder.Host.UseSerilog((hostContext, services, configuration) => {
                configuration
                 .Enrich.WithEnvironmentName()
                 .MinimumLevel.Information()
                 .WriteTo.Console()
                 .WriteTo.File($"logs/{builder.Environment.ApplicationName}_.log", rollingInterval: RollingInterval.Minute)
                 .WriteTo.Console();
                //.CreateLogger();
            });

        }
    }
}

