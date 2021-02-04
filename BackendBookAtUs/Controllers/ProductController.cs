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
    public class ProductController : ApiController
    {
        // GET: api/Product
        public IEnumerable<Product> GetC(int category)
        {
            var repo = new ProductsRepository();
            List<Product> products = repo.RetrieveCategory(category);
            return products;
        }


        public IEnumerable<ProductoDTO> GetImagen()
        {
            var repo = new ProductsRepository();
            List<ProductoDTO> products = repo.RetrieveDTO();
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

        // PUT: api/Product/5
        public void Put(int id, [FromBody]Product p)
        {
            var repo = new ProductsRepository();
            repo.Put(id, p);
        }

        // DELETE: api/Product/5
        public void Delete(int id)
        {
            var repo = new ProductsRepository();
            repo.Delete(id);
        }
    }
}
