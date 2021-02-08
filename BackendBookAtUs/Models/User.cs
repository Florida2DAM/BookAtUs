using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Net.Http;
using System.Web;

namespace BackendBookAtUs.Models
{
    public class User
    {

        public User()
        {

        }

        public User(string name, string surname, string userId, Byte[] avatar, string birth, string password)
        {
            Name = name;
            Surname = surname;
            UserId = userId;
            Avatar = avatar;
            Birth = birth;
            Password = password;
            Rating = 0;
            Sells = 0;
            Buys = 0;
        }

        public string Name { get; set; }
        public string Surname { get; set; }
        public string UserId { get; set; }
        public Byte[] Avatar { get; set; }
        public string Password { get; set; }
        public string Birth { get; set; }
        public double Rating { get; set; }
        public int Sells { get; set; }
        public int Buys { get; set; }
    }
}