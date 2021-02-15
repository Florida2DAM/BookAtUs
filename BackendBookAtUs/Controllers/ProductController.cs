using BackendBookAtUs.Models;
using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BackendBookAtUs.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ProductController : ApiController
    {
        public IEnumerable<Product> Get()
        {
            var repo = new ProductsRepository();
            List<Product> products = repo.Retrieve();
            return products;
        }

        [HttpGet]
        [Route("api/BookUser")]
        public IEnumerable<Product> GetU(string userid)
        {
            var repo = new ProductsRepository();
            List<Product> products = repo.RetrieveU(userid);
            return products;
        }

        // GET: api/Product
        public IEnumerable<Product> GetC(int category)
        {
            var repo = new ProductsRepository();
            List<Product> products = repo.RetrieveCategory(category);
            return products;
        }

        // GET: api/Product/5
        public Product Get(int id)
        {
            var repo = new ProductsRepository();
            Product product = repo.RetrieveId(id);
            return product;
        }

        // POST: api/Product
        public void Post([FromBody]Product p)
        {
            var repo = new ProductsRepository();
            repo.Save(p);
        }

        [Route("api/Put")]
        [HttpPut]
        // PUT: api/Product/5
        public void Put(int id, [FromBody]Product p)
        {
            var repo = new ProductsRepository();
            repo.Put(id, p);
        }

        [Route("api/book")]
        [HttpPut]
        public bool Put(int id)
        {
            var repo = new ProductsRepository();
            return  repo.SoldOutBook(id);
        }

        // DELETE: api/Product/5
        public void Delete(int id)
        {
            var repo = new ProductsRepository();
            repo.Delete(id);
        }
    }
}
