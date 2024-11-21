namespace WBMT.Model
{
	public class Brand
	{
		public int BrandId { get; set; }
		public string BrandName { get; set; }

		// Foreign Key to Category
		//public int CategoryId { get; set; }
	//	public Category Category { get; set; }

		// Navigation property
	//	public ICollection<Product> Products { get; set; } = new List<Product>();
	}
}
