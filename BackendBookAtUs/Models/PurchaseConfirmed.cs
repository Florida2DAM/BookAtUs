using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BackendBookAtUs.Models
{
    public class PurchaseConfirmed
    {


        public PurchaseConfirmed(string id_Buyer, string id_Seller, DateTime date_Purchase, int product)
        {
            Id_Buyer = id_Buyer;
            Id_Seller = id_Seller;
            Date_Purchase = date_Purchase;
            this.ProductId = product;
        }

        public PurchaseConfirmed()
        {
        }

        public PurchaseConfirmed(int purchaseId, string id_Buyer, string id_Seller, DateTime date_Purchase, int product)
        {
            PurchaseId = purchaseId;
            Id_Buyer = id_Buyer;
            Id_Seller = id_Seller;
            Date_Purchase = date_Purchase;
            this.ProductId = product;
        }
        [Key]
        public int PurchaseId { get; set; }
        public string Id_Buyer { get; set; }
        public string Id_Seller { get; set; }
        public DateTime Date_Purchase { get; set; }
        public int ProductId { get; set; }
    }
}