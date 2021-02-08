using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BackendBookAtUs.Models
{
    public class Message
    {
        public Message()
        {

        }

        public Message(int messageId, string user, string body)
        {
            MessageId = messageId;
            User = user;
            Body = body;
            Date = DateTime.Now.ToString();
        }

        public int MessageId { get; set; }
        public string User { get; set; }
        public string Body { get; set; }
        public string Date { get; set; }
    }
}