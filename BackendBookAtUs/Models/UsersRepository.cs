using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Globalization;
using System.Web.WebPages;
using BackendBookAtUs.Common;

namespace BackendBookAtUs.Models
{
    public class UsersRepository
    {
        internal List<User> Retrieve()
        {
            using (BookAtUsContext context = new BookAtUsContext())
            {
                List<User> users = context
                    .Users
                    .ToList();
                return users;

            }

        }

        internal bool Save(User user)
        {
            try
            {
                BookAtUsContext context = new BookAtUsContext();
                user.Password = Security.Encode(user.Password);
                context.Users.Add(user);
                if (context.SaveChanges() >= 1)
                    return true;
                else
                    Debug.WriteLine("Not saved change");
                    return false;
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Error with catch: " + ex.Message);
                return false;
            }
        }
    }
}