using Microsoft.EntityFrameworkCore.Migrations;

namespace BackendBookAtUs.Migrations
{
    public partial class m2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PurchaseConfirmed_Products_ProductId",
                table: "PurchaseConfirmed");

            migrationBuilder.DropIndex(
                name: "IX_PurchaseConfirmed_ProductId",
                table: "PurchaseConfirmed");

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "PurchaseConfirmed",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "vendido",
                table: "Products",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "vendido",
                table: "Products");

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "PurchaseConfirmed",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseConfirmed_ProductId",
                table: "PurchaseConfirmed",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_PurchaseConfirmed_Products_ProductId",
                table: "PurchaseConfirmed",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "ProductId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
