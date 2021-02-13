using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing;
using System.Linq;
using System.Web;
using WebGrease;

namespace BackendBookAtUs.Models
{
    public class Product
    {
        public Product() 
        {
        
        }

        public Product(int productId, string title, string description, double price, int category, byte[] image, DateTime uploadDate, List<User> watched, List<User> likes, User User)
        {
            ProductId = productId;
            Title = title;
            Description = description;
            Price = price;
            Category = category;
            Image = image;
            UploadDate = uploadDate;
            Watched = watched;
            Likes = likes;
            Proprietary = User;
        }

        public Product(string title, string description, double price, int category)
        {
            Title = title;
            Description = description;
            Price = price;
            Category = category;
        }

        public int ProductId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public int Category { get; set; }
        public Byte[] Image { get; set; }
        public DateTime UploadDate { get; set; }
        public List<User> Watched { get; set; }
        public List<User> Likes { get; set; }

        public User Proprietary { get; set; }
    }
}