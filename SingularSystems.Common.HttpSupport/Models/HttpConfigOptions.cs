using System;
namespace SingularSystems.Common.HttpSupport.Models
{
	public class HttpConfigOptions
	{
		public  string HttpConfig = "HttpConfig";
		public string BaseUrl { get; set; } = string.Empty;
		public TimeSpan HttpTimeout { get; set; } = TimeSpan.FromSeconds(30);
	
	}
}

