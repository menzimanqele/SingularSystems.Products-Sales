using Microsoft.Extensions.Configuration;
using SingularSystems.Common.HttpSupport.Extensions;
namespace SingularSystems.Api.Products.Extensions
{
    public static class ServiceCollectionExtensions
	{
        public const string MyCorsPolicy = "AllowedCors";
        public static void ConfigureServices(this IServiceCollection services, IConfiguration configuration)
		{
            // Register Swagger services
            services.AddSwaggerSupport();

            // Register the CORS policies
            services.AddCors(options =>
            {
                options.AddPolicy(name: MyCorsPolicy,
                    builder =>
                    {
                        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                    });
            });

            services.AddHttpSupport(configuration);
            services.AddHttpClient();
        }
	}
}

