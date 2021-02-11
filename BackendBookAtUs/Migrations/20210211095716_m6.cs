using Microsoft.EntityFrameworkCore.Migrations;

namespace BackendBookAtUs.Migrations
{
    public partial class m6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "Chat",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Chat_Products_ProductId",
                table: "Chat");

            migrationBuilder.DropIndex(
                name: "IX_Chat_ProductId",
                table: "Chat");

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "Chat",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }
    }
}
