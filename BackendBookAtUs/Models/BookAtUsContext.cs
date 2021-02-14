using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;
using System.Web.WebPages;

namespace BackendBookAtUs.Models
{
    public class BookAtUsContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<PurchaseConfirmed> PurchaseConfirmed { get; set; }
        public DbSet<Chat> Chat { get; set; }

        public BookAtUsContext()
        {

        }

        public BookAtUsContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
                optionsBuilder.UseMySql("Server=MYSQL5042.site4now.net;Database=db_a6f307_bookatu; Uid=a6f307_bookatu;Pwd='Florida_2020';SslMode = none");
                //optionsBuilder.UseMySql("Server=localhost;Database=bookatus2; Uid=root;Pwd='';SslMode = none");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }
    }
}