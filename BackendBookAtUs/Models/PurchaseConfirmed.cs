using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BackendBookAtUs.Models
{
    public class PurchaseConfirmed
    {


        public PurchaseConfirmed(string id_Buyer, string id_Seller, DateTime date_Purchase, Product product)
        {
            Id_Buyer = id_Buyer;
            Id_Seller = id_Seller;
            Date_Purchase = date_Purchase;
            this.product = product;
        }

        public PurchaseConfirmed()
        {
        }

        public PurchaseConfirmed(int purchaseId, string id_Buyer, string id_Seller, DateTime date_Purchase, Product product)
        {
            PurchaseId = purchaseId;
            Id_Buyer = id_Buyer;
            Id_Seller = id_Seller;
            Date_Purchase = date_Purchase;
            this.product = product;
        }
        [Key]
        public int PurchaseId { get; set; }
        public string Id_Buyer { get; set; }
        public string Id_Seller { get; set; }
        public DateTime Date_Purchase { get; set; }
        public Product product { get; set; }
    }
}