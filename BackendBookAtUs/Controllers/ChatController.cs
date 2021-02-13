﻿using BackendBookAtUs.Models;
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
        public List<Chat> Get()
        {
            ChatsRepository repo = new ChatsRepository();
            return repo.Retrieve();
        }

        // GET: api/Chat/5
        public Chat Get([FromBody]ChatDTO chat, bool accept)
        {
            if (accept)
            {
                ChatsRepository repo = new ChatsRepository();
                return repo.Retrieve(chat);
            }
            else
                return null;
        }

        public List<ChatDTO> Get(string username)
        {
            ChatsRepository repo = new ChatsRepository();
            return repo.Retrieve(username);
        }

        // POST: api/Chat
        public bool Post([FromBody]Chat chat)
        {
            ChatsRepository repo = new ChatsRepository();
            return repo.Save(chat);
        }

        // PUT: api/Chat/5
        public bool Put(int chatId, [FromBody]Message msg)
        {
            ChatsRepository repo = new ChatsRepository();
            return repo.Save(chatId, msg);
        }

        // DELETE: api/Chat/5
        public void Delete(int id)
        {
        }
    }
}