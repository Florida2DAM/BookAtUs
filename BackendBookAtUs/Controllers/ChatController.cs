using BackendBookAtUs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BackendBookAtUs.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ChatController : ApiController
    {
        // GET: api/Chat
        public bool Get()
        {
            return false;
        }

        // GET: api/Chat/5
        public Chat Get(ChatDTO chat)
        {
            ChatsRepository repo = new ChatsRepository();
            return repo.Retrieve(chat);
        }

        public List<ChatDTO> Get(bool type, string username)
        {
            ChatsRepository repo = new ChatsRepository();
            if (type)
                return repo.RetrieveBuyers(username);
            else
                return repo.RetrieveSellers(username);
        }

        // POST: api/Chat
        public bool Post([FromBody]Chat chat)
        {
            ChatsRepository repo = new ChatsRepository();
            return repo.Save(chat);
        }

        // PUT: api/Chat/5
        public void Put(int id, [FromBody]string value)
        {

        }

        // DELETE: api/Chat/5
        public void Delete(int id)
        {
        }
    }
}
