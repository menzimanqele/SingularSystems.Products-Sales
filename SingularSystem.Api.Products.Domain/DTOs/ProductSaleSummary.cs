namespace SingularSystem.Api.Products.Domain.DTOs
{
    public class ProductSaleSummary
	{
		public int SaleId { get; set; }
		public int SaleQty { get; set; }
		public decimal SalePrice { get; set; }
		public DateTime SaleDate { get; set; }
	}
}
