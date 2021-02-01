using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BackendBookAtUs.Migrations
{
    public partial class m1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Surname = table.Column<string>(nullable: true),
                    Avatar = table.Column<string>(nullable: true),
                    Birth = table.Column<DateTime>(nullable: false),
                    Rating = table.Column<double>(nullable: false),
                    Sells = table.Column<int>(nullable: false),
                    Buys = table.Column<int>(nullable: false),
                    ProductId = table.Column<int>(nullable: true),
                    ProductId1 = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Productos",
                columns: table => new
                {
                    ProductId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<double>(nullable: false),
                    Description = table.Column<int>(nullable: false),
                    Price = table.Column<double>(nullable: false),
                    Category = table.Column<int>(nullable: false),
                    UploadDate = table.Column<DateTime>(nullable: false),
                    ProprietaryUserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Productos", x => x.ProductId);
                    table.ForeignKey(
                        name: "FK_Productos_Usuarios_ProprietaryUserId",
                        column: x => x.ProprietaryUserId,
                        principalTable: "Usuarios",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Productos_ProprietaryUserId",
                table: "Productos",
                column: "ProprietaryUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Usuarios_ProductId",
                table: "Usuarios",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Usuarios_ProductId1",
                table: "Usuarios",
                column: "ProductId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Usuarios_Productos_ProductId",
                table: "Usuarios",
                column: "ProductId",
                principalTable: "Productos",
                principalColumn: "ProductId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Usuarios_Productos_ProductId1",
                table: "Usuarios",
                column: "ProductId1",
                principalTable: "Productos",
                principalColumn: "ProductId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Productos_Usuarios_ProprietaryUserId",
                table: "Productos");

            migrationBuilder.DropTable(
                name: "Usuarios");

            migrationBuilder.DropTable(
                name: "Productos");
        }
    }
}
