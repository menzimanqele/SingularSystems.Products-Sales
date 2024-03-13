using System;
namespace SingularSystems.Products.Api.Extensions
{
	public static class SwaggerExtensions
	{
		public static void AddSwaggerSupport(this IServiceCollection services)
		{
			services.AddSwaggerGen(Base64FormattingOptions=>)

        }
	}
}

