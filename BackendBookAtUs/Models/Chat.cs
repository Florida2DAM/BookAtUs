using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BackendBookAtUs.Models
{
    public class Chat
    {
        public Chat()
        {

        }

        public Chat(int chatId, int product, string buyer, string seller)
        {
            ProductId = product;
            Buyer = buyer;
            Seller = seller;
            Messages = new List<Message>();
        }
 
        public int ChatId { get; set; }
        public int ProductId { get; set; }
        public string Buyer { get; set; }
        public string Seller { get; set; }
        public List<Message> Messages { get; set; }

    }

    public class ChatDTO
    {
        public ChatDTO()
        {
             
        }

        public ChatDTO(int chatId, int productId, string buyer, string seller)
        {
            ChatId = chatId;
              
            Buyer = buyer;
            Seller = seller;
        }

        public int ChatId { get; set; }
        public int ProductId { get; set; }
        public string Buyer { get; set; }
        public string Seller { get; set; }
    }

}