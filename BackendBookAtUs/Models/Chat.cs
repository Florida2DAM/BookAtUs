using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace BackendBookAtUs.Models
{
    public class Chat
    {
        public Chat()
        {

        }

        public Chat(int productId, string buyer, string seller)
        { 
            Debug.WriteLine("Hay: " + productId + " " + buyer + " " + seller);
            Product = productId;
            Buyer = buyer;
            Seller = seller;
            Messages = new List<Message>();

        }

        public int ChatId { get; set; }
        public int Product { get; set; }
        public string Buyer { get; set; }
        public string Seller { get; set; }
        public List<Message> Messages { get; set; }

    }

    public class ChatDTO
    {
        public ChatDTO()
        {

        }

        public ChatDTO(int chatId, int productId, string buyer, string seller, string productName, Byte[] productImage)
        {
            ChatId = chatId;
            ProductId = productId;
            Buyer = buyer;
            Seller = seller;
            ProductName = productName;
            ProductImage = productImage;
        }

        public int ChatId { get; set; }
        public int ProductId { get; set; }
        public string Buyer { get; set; }
        public string Seller { get; set; }
        public string ProductName { get; set; }
        public Byte[] ProductImage { get; set; }
    }
}