using BackendBookAtUs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BackendBookAtUs.Controllers
{
    public class PurchaseConfirmedController : ApiController
    {
        // POST: api/Purchase_Confirmed
        public void Post([FromBody]PurchaseConfirmed pc)
        {
            var repo = new PurchaseConfirmedRepository();
            repo.Save(pc);
        }

        // DELETE: api/Purchase_Confirmed/5
        public void Delete(int id)
        {
            var repo = new PurchaseConfirmedRepository();
            repo.Delete(id);
        }
    }
}
