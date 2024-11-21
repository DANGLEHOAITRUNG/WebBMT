using Microsoft.EntityFrameworkCore;
using WBMT.Model;

namespace WBMT.Data
{
	public class WBMTContext : DbContext
	{
		public WBMTContext(DbContextOptions<WBMTContext> options) : base(options) { }

		public DbSet<Category> Categories { get; set; }
		public DbSet<Brand> Brands { get; set; }
		public DbSet<Product> Products { get; set; }
		public DbSet<ProductCT> Productcts { get; set; }
	}
}
