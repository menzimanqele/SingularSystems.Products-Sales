using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using SingularSystems.Common.HttpSupport.Services.Interfaces;
using SingularSystems.Common.HttpSupport.Models;

namespace SingularSystems.Common.HttpSupport.Services
{
    public class HttpService : IHttpService
    {
        private readonly HttpClient _httpClient;
        private readonly ILogger<HttpService> _logger;

        public HttpService(HttpClient httpClient, IConfiguration configuration, ILogger<HttpService> logger)
        {

            var httpConfig = configuration.GetSection("HttpConig") as HttpConfigOptions;


            _logger = logger;
            _httpClient = httpClient;
            _httpClient.BaseAddress = new Uri(httpConfig.BaseUrl);
            _httpClient.Timeout = httpConfig.HttpTimeout;
        }

        public async Task<HttpResponseMessage> Request(string url, string requestType)
        {
            try
            {
                var request = getRequestType(requestType, url);
                var result = await _httpClient.SendAsync(request);

                return result;
            }
            catch (Exception exception)
            {
                _logger.LogError(exception, $"Unexpected error while making the request ", nameof(Request), exception.Message);
                throw;
            }


        }

        private HttpRequestMessage getRequestType(string requestType, string url) => requestType.ToLower() switch
        {

            "get" => new HttpRequestMessage(HttpMethod.Get, url),
            "post" => new HttpRequestMessage(HttpMethod.Post, url),
            _ => throw new ArgumentOutOfRangeException(nameof(requestType), $"Not expected value : {requestType}")
        };
    }
}

