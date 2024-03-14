namespace SingularSystems.Common.HttpSupport.Services.Interfaces
{
    public interface IHttpService
	{
        /// <summary>
        /// Handles http requests 
        /// </summary>
        /// <param name="url"></param>
        /// <param name="requestType"></param>
        /// <returns>HttpResponseMessage</returns>
        Task<HttpResponseMessage> Request(string url, string requestType);
	}
}

