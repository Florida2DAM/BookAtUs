using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;

namespace BackendBookAtUs.Models
{
    public class Admin
    {

        public Admin()
        {

        }

        public Admin(string username, string password)
        {
            AdminId = username;
            Password = password;
        }

        public string AdminId { get; set; }
        public string Password { get; set; }

    }

    public class LoginAdmin
    {

        public string AdminId { get; set; }
        public string Password { get; set; }

        public LoginAdmin(string username, string password)
        {
            AdminId = username;
            Password = password;
        }
    }
}