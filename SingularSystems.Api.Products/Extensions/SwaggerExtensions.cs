using System;
using Microsoft.OpenApi.Models;

namespace SingularSystems.Api.Products.Extensions
{
    public static class SwaggerExtensions
    {
        public static void AddSwaggerSupport(this IServiceCollection services)
        {
            services.AddSwaggerGen(opt =>
            {
                opt.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "SingularSystems.Api.Products",
                    Version = "v1",
                    Description="Web Api for maintaining Products lookup data for Singular Systems "});
                opt.CustomSchemaIds(x => x.FullName);
            });
        }

        public static void UseSwaggerMiddleware(this IApplicationBuilder app)
        {
            app.UseSwagger();
            app.UseSwaggerUI(swag =>
            {
                swag.SwaggerEndpoint("v1/swagger.json", "SingularSystems.Api.Products");
            });
        }
    }
}

