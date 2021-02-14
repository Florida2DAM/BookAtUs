using Microsoft.EntityFrameworkCore.Migrations;

namespace BackendBookAtUs.Migrations
{
    public partial class m7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Chat_Products_ProductId",
                table: "Chat");

            migrationBuilder.DropIndex(
                name: "IX_Chat_ProductId",
                table: "Chat");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "Chat");

            migrationBuilder.AddColumn<int>(
                name: "Product",
                table: "Chat",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Product",
                table: "Chat");

            migrationBuilder.AddColumn<int>(
                name: "ProductId",
                table: "Chat",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Chat_ProductId",
                table: "Chat",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_Chat_Products_ProductId",
                table: "Chat",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "ProductId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
