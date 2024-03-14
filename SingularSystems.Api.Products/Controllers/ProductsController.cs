using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SingularSystem.Api.Products.Domain.DTOs;
using SingularSystem.Api.Products.Domain.Extensions;

namespace SingularSystems.Api.Products.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly HttpClient client = new HttpClient();
        private readonly IConfiguration _config;
        private readonly string _baseUrl;


        private readonly ILogger<ProductsController> _logger;
        public ProductsController(IConfiguration configuration, ILogger<ProductsController> logger)
        {
            _config = configuration;
            _logger = logger;
            if (_config == null) throw new NullReferenceException();
            _baseUrl = _config.GetSection("HttpConfigOptions").GetValue<string>("baseUrl");
        }
        /// <summary>
        /// Get a list of products
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetProductsAsync()
        {

            try
            {
                using HttpResponseMessage response = await client.GetAsync($"{_baseUrl}/products");
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();

                var result = JsonConvert.DeserializeObject<List<ProductDto>>(responseBody);

                if (!result.IsNullOrEmpty())
                {
                    return StatusCode(StatusCodes.Status200OK, result);
                }
                else
                {
                    return StatusCode(StatusCodes.Status204NoContent);
                }

            }
            catch (Exception exception)
            {
                _logger.Log(LogLevel.Error, "Error getting products on a rest request ", exception.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);

            }
        }


        [HttpGet("ProductSalesSummary")]
        public async Task<IActionResult> GetProductSalesSummaryAsync(int productId)
        {

            try
            {

                using HttpResponseMessage response = await client.GetAsync($"{_baseUrl}/product-sales?Id={productId}");
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();

                var result = JsonConvert.DeserializeObject<List<ProductSaleSummary>>(responseBody);
                if (!result.IsNullOrEmpty())
                {
                    return StatusCode(StatusCodes.Status200OK, result);
                }
                else
                {
                    return StatusCode(StatusCodes.Status204NoContent);
                }

            }
            catch (Exception exception)
            {
                _logger.Log(LogLevel.Error, "Error getting product sales summary on a rest request ", exception.Message);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

    }
}

