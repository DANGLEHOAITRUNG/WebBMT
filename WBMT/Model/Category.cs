﻿namespace WBMT.Model
{
	public class Category
	{
		public int CategoryId { get; set; }
		public string CategoryName { get; set; }
		public string Description { get; set; }

		// Navigation property
		//public ICollection<Product> Products { get; set; } = new List<Product>();
	}
}