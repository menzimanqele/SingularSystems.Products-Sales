using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SingularSystem.Api.Products.Domain.DTOs;
using SingularSystems.Common.HttpSupport.Services.Interfaces;

namespace SingularSystems.Api.Products.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        readonly HttpClient client = new HttpClient();
      //private readonly IHttpService _httpService;

      //  public ProductsController(IHttpService httpService)
      //  {
      //      _httpService = httpService;
      //  }
        /// <summary>
        /// Get a list of products
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetProductsAsync ()
        {
            // Call asynchronous network methods in a try/catch block to handle exceptions.
            try
            {
                //var newRes = await _httpService.Request("https://singularsystems-tech-assessment-sales-api2.azurewebsites.net/products", "get");
                using HttpResponseMessage response = await client.GetAsync("https://singularsystems-tech-assessment-sales-api2.azurewebsites.net/products");
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();

                var result = JsonConvert.DeserializeObject<List<ProductDto>>(responseBody);

                    
                return StatusCode(StatusCodes.Status200OK, result);
                // Above three lines can be replaced with new helper method below
                // string responseBody = await client.GetStringAsync(uri);


            }
            catch (HttpRequestException e)
            {
                Console.WriteLine("\nException Caught!");
                Console.WriteLine("Message :{0} ", e.Message);
            }

            return StatusCode(StatusCodes.Status200OK, new List<string> { "Menzi Manqele" });
        }
    }
}

