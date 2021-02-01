using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Web;

namespace BackendBookAtUs.Models
{
    public class ProductsRepository
    {


        public string Nombre { get; set; }
        public string Categoria { get; set; }
        public double Precio { get; set; }
        public DateTime FechaAlta { get; set; }


    }
}