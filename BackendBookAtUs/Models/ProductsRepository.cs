using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Web;
using System.Diagnostics;
using System.Data;
using Microsoft.AspNetCore.Cors;

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
                    .Where(p => p.vendido == false)
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

        /*internal Product Retrievebyuser(string user)
        {
            using (BookAtUsContext context = new BookAtUsContext())
            {
                Product product = context
                    .Products
                    .FirstOrDefault(p => p.ProductId == id);
                return product;

            }
        }*/

        internal List<Product> RetrieveCategory(int category)
        {
            using (BookAtUsContext context = new BookAtUsContext())
            {
                List<Product> product = context
                    .Products
                    .Where(p => p.Category == category)
                    .ToList();
                return product;

            }
        }

        internal bool Save(Product product)
        {
            try
            {
                BookAtUsContext context = new BookAtUsContext();
                product.UploadDate = DateTime.Now;
                User user = context.Users.FirstOrDefault(p => p.UserId == product.UserId);
                if (user == null)
                {
                    Debug.WriteLine("Not saved change");
                    return false;
                }
                else
                {
                    context.Products.Add(product);
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

        internal bool soldOutBook(int id)
        {
            using (BookAtUsContext context = new BookAtUsContext())
            {
                Product product = context.Products.FirstOrDefault(p => p.ProductId == id);
                product.vendido = true;
                if (context.SaveChanges() >= 1)
                    return true;
                else
                {
                    Debug.WriteLine("Not saved change");
                    return false;
                }
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