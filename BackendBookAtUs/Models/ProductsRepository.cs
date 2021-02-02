using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Web;
using System.Diagnostics;

namespace BackendBookAtUs.Models
{
    public class ProductsRepository
    {
        internal List<Product> Retrieve()
        {
            using (BookAtUsContext context = new BookAtUsContext())
            {
                List<Product> products = context
                    .Products
                    .ToList();
                return products;
            }
        }

        internal Product RetrieveId(int id)
        {
            using (BookAtUsContext context = new BookAtUsContext())
            {
                Product product = context
                    .Products
                    .FirstOrDefault(p => p.ProductId == id);
                return product;

            }
        }

        internal List<Product> RetrieveCategory(int category)
        {
            using (BookAtUsContext context = new BookAtUsContext())
            {
                List<Product> product = context
                    .Products
                    .Where(p => p.Category == category).ToList();
                return product;

            }
        }

        internal bool Save(Product product)
        {
            try
            {
                BookAtUsContext context = new BookAtUsContext();
                product.UploadDate = DateTime.Now;
                context.Products.Add(product);
                if (context.SaveChanges() >= 1)
                    return true;
                else
                {
                    Debug.WriteLine("Not saved change");
                    return false;
                }

            }
            catch (Exception ex)
            {
                Debug.WriteLine("Error with catch: " + ex.Message);
                return false;
            }
        }

        internal bool Put(int id, Product product)
        {
            try
            {
                using (BookAtUsContext context = new BookAtUsContext())
                {
                    Product productnew = context.Products.FirstOrDefault(p => p.ProductId == id);
                    productnew.Title = product.Title;
                    productnew.Description = product.Description;
                    productnew.Category = product.Category;
                    productnew.Price = product.Price;
                    if (context.SaveChanges() >= 1)
                        return true;
                    else
                    {
                        Debug.WriteLine("Not saved change");
                        return false;
                    }
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Error with catch: " + ex.Message);
                return false;
            }
        }

        internal bool Delete(int id)
        {
            try
            {
                using (BookAtUsContext context = new BookAtUsContext())
                {
                    Product product = context.Products.FirstOrDefault(p => p.ProductId == id);
                    context.Products.Remove(product);
                    if (context.SaveChanges() >= 1)
                        return true;
                    else
                    {
                        Debug.WriteLine("Not saved change");
                        return false;
                    }
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Error with catch: " + ex.Message);
                return false;
            }
        }
    }
}