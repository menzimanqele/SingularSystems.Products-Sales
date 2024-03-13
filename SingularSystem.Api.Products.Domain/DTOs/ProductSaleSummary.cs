namespace SingularSystem.Api.Products.Domain.DTOs
{
    public class ProductSaleSummary
	{
		public int SaleId { get; set; }
		public int ProductSaleId { get; set; }
		public int SaleQty { get; set; }
		public DateTime SaleDate { get; set; }
	}
}
