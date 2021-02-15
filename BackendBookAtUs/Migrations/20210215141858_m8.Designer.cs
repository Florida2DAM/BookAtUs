﻿// <auto-generated />
using System;
using BackendBookAtUs.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BackendBookAtUs.Migrations
{
    [DbContext(typeof(BookAtUsContext))]
    [Migration("20210215141858_m8")]
    partial class m8
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("BackendBookAtUs.Models.Admin", b =>
                {
                    b.Property<string>("AdminId")
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.Property<string>("Password")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("AdminId");

                    b.ToTable("Admins");
                });

            modelBuilder.Entity("BackendBookAtUs.Models.Chat", b =>
                {
                    b.Property<int>("ChatId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Buyer")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("Product")
                        .HasColumnType("int");

                    b.Property<string>("Seller")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("ChatId");

                    b.ToTable("Chat");
                });

            modelBuilder.Entity("BackendBookAtUs.Models.Message", b =>
                {
                    b.Property<int>("MessageId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Body")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int?>("ChatId")
                        .HasColumnType("int");

                    b.Property<string>("Date")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("User")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("MessageId");

                    b.HasIndex("ChatId");

                    b.ToTable("Message");
                });

            modelBuilder.Entity("BackendBookAtUs.Models.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("Category")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<byte[]>("Image")
                        .HasColumnType("longblob");

                    b.Property<double>("Price")
                        .HasColumnType("double");

                    b.Property<bool>("Sold")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("Title")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<DateTime>("UploadDate")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("UserId")
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.HasKey("ProductId");

                    b.HasIndex("UserId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("BackendBookAtUs.Models.PurchaseConfirmed", b =>
                {
                    b.Property<int>("PurchaseId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("Date_Purchase")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Id_Buyer")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Id_Seller")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("ProductId")
                        .HasColumnType("int");

                    b.HasKey("PurchaseId");

                    b.ToTable("PurchaseConfirmed");
                });

            modelBuilder.Entity("BackendBookAtUs.Models.User", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("varchar(255) CHARACTER SET utf8mb4");

                    b.Property<byte[]>("Avatar")
                        .HasColumnType("longblob");

                    b.Property<string>("Birth")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("Buys")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Password")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<double>("Rating")
                        .HasColumnType("double");

                    b.Property<int>("Sells")
                        .HasColumnType("int");

                    b.Property<string>("Surname")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("BackendBookAtUs.Models.Message", b =>
                {
                    b.HasOne("BackendBookAtUs.Models.Chat", null)
                        .WithMany("Messages")
                        .HasForeignKey("ChatId");
                });

            modelBuilder.Entity("BackendBookAtUs.Models.Product", b =>
                {
                    b.HasOne("BackendBookAtUs.Models.User", "User")
                        .WithMany("Products")
                        .HasForeignKey("UserId");
                });
#pragma warning restore 612, 618
        }
    }
}
