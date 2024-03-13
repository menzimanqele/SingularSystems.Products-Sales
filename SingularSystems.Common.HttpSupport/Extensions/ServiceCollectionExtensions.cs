using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SingularSystems.Common.HttpSupport.Services;
using SingularSystems.Common.HttpSupport.Services.Interfaces;

namespace SingularSystems.Common.HttpSupport.Extensions
{
    public static class ServiceCollectionExtensions
	{
		public static void AddHttpSupport(this IServiceCollection services, IConfiguration configuration)
		{
			services.AddTransient<IHttpService, HttpService>();
		}
	}
}

