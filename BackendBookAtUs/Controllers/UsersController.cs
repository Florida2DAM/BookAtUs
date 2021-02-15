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
        public List<User> Get()
        {
            UsersRepository repo = new UsersRepository();
            return repo.Retrieve();
        }

        // GET: api/Users/5
        public User Get(string id)
        {
            UsersRepository repo = new UsersRepository();
            return repo.RetrieveId(id);
        }

        // POST: api/Users
        [Route("api/insertUser")]
        [HttpPost]
        public bool Post([FromBody] User user)
        {
            UsersRepository repo = new UsersRepository();
            return repo.Save(user);
        }

        [Route("api/Login")]
        [HttpPost]
        public Response UserLogin([FromBody] Login login)
        {
            BookAtUsContext context = new BookAtUsContext();
            var log = context.Users.Where(x => x.UserId.Equals(login.Email) && x.Password == Security.Encode(login.Password)).FirstOrDefault();
            if (log == null)
            {
                return new Response { Status = "Invalid", Message = "Invalid User." };
            }
            else
            {
                return new Response { Status = "Success", Message = "Login Successfully" };
            }

        }

        [Route("api/LoginAdmin")]
        [HttpPut]
        public void Put(string id, [FromBody] User u)
        {
            var repo = new UsersRepository();
            repo.Put(id, u);
        }

        [Route("api/LoginAdmin")]
        [HttpGet]
        public void getLoginAdmin(string id, [FromBody] User u)
        {
            var repo = new UsersRepository();
            repo.Put(id, u);
        }

        [Route("api/ChangePassword")]
        [HttpPut]
        public void Put(string id, string password)
        {
            var repo = new UsersRepository();
            repo.Put(id, password);
        }

        // DELETE: api/Users/5
        public bool Delete(string username)
        {
            UsersRepository repo = new UsersRepository();
            return repo.Delete(username);
        }
    }
}
