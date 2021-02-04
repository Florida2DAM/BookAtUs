using BackendBookAtUs.Models;
using System.Web.Http.Cors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BackendBookAtUs.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UsersController : ApiController
    {
        // GET: api/Users
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Users/5
        public User Get(string username, string password)
        {
            UsersRepository repo = new UsersRepository();
            return repo.Retrieve(username, password);
        }

        // POST: api/Users
        public bool Post([FromBody]User user)
        {
            UsersRepository repo = new UsersRepository();
            return repo.Save(user);
        }

        // PUT: api/Users/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Users/5
        public bool Delete(string username)
        {
            UsersRepository repo = new UsersRepository();
            return repo.Delete(username);
        }
    }
}
