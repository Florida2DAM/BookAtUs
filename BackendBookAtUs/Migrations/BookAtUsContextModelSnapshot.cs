﻿// <auto-generated />
using System;
using BackendBookAtUs.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BackendBookAtUs.Migrations
{
    [DbContext(typeof(BookAtUsContext))]
    partial class BookAtUsContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("BackendBookAtUs.Models.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("Category")
                        .HasColumnType("int");

                    b.Property<int>("Description")
                        .HasColumnType("int");

                    b.Property<double>("Price")
                        .HasColumnType("double");

                    b.Property<string>("ProprietaryUserId")
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.Property<double>("Title")
                        .HasColumnType("double");

                    b.Property<DateTime>("UploadDate")
                        .HasColumnType("datetime(6)");

                    b.HasKey("ProductId");

                    b.HasIndex("ProprietaryUserId");

                    b.ToTable("Productos");
                });

            modelBuilder.Entity("BackendBookAtUs.Models.User", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.Property<string>("Avatar")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<DateTime>("Birth")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("Buys")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int?>("ProductId")
                        .HasColumnType("int");

                    b.Property<int?>("ProductId1")
                        .HasColumnType("int");

                    b.Property<double>("Rating")
                        .HasColumnType("double");

                    b.Property<int>("Sells")
                        .HasColumnType("int");

                    b.Property<string>("Surname")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("UserId");

                    b.HasIndex("ProductId");

                    b.HasIndex("ProductId1");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("BackendBookAtUs.Models.Product", b =>
                {
                    b.HasOne("BackendBookAtUs.Models.User", "Proprietary")
                        .WithMany()
                        .HasForeignKey("ProprietaryUserId");
                });

            modelBuilder.Entity("BackendBookAtUs.Models.User", b =>
                {
                    b.HasOne("BackendBookAtUs.Models.Product", null)
                        .WithMany("Likes")
                        .HasForeignKey("ProductId");

                    b.HasOne("BackendBookAtUs.Models.Product", null)
                        .WithMany("Watched")
                        .HasForeignKey("ProductId1");
                });
#pragma warning restore 612, 618
        }
    }
}
