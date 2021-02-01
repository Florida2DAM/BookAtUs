using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.WebPages;

namespace BackendBookAtUs.Models
{
    public class BookAtUsContext : DbContext
    {
        public DbSet<Product> Productos { get; set; }
        public DbSet<User> Usuarios { get; set; }

        public BookAtUsContext()
        {

        }

        public BookAtUsContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
                optionsBuilder.UseMySql("Server=127.0.0.1;Database=BookAtUs;Uid=root;Pwd=''; SslMode = none");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //modelBuilder.Entity<Usuario>().HasData("Book", "At Us", "BookAtUs@hotmail.com", "Avatar xD",DateTime.Now /*"2001-12-21".AsDateTime().Date*/);
          

        }

    }
}