using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;

namespace BackendBookAtUs.Models
{
    public class User
    {

        public User()
        {

        }

        public User(string name, string surname, string email, string avatar, DateTime birth)
        {
            Name = name;
            Surname = surname;
            UserId = email;
            Avatar = avatar;
            Birth = birth;
            Rating = 0;
            Sells = 0;
            Buys = 0;
        }

        public string Name { get; set; }
        public string Surname { get; set; }
        public string UserId { get; set; }
        public string Avatar { get; set; }
        public DateTime Birth { get; set; }
        public double Rating { get; set; }
        public int Sells { get; set; }
        public int Buys { get; set; }


    }
}