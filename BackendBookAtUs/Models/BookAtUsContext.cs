﻿using Microsoft.EntityFrameworkCore;
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
            User user = new User("Book", "At Us", "BookAtUs@hotmail.com", "Avatar xD", "2001-12-21".AsDateTime().Date, "Florida_2020");
            modelBuilder.Entity<User>().HasData(user);
        }

    }
}