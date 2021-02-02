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
using Microsoft.SqlServer.Server;

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

        internal User Retrieve(string id, string pwd)
        {
            using (BookAtUsContext context = new BookAtUsContext())
            {
                User users = context
                    .Users
                    .Where(s => s.UserId == id)
                    .Where(p => p.Password == Security.Encode(pwd))
                    .FirstOrDefault();
                return users;

            }
        }

        internal bool Delete(string username) 
        {
            try
            {
                BookAtUsContext context = new BookAtUsContext();
                User user = context
                        .Users
                        .FirstOrDefault(p => p.UserId == username);

                context.Users.Remove(user);
                if (context.SaveChanges() >= 1)
                    return true;
                else
                {
                    Debug.WriteLine("Not saved change");
                    return false;
                }          
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Error with catch: " + ex.Message);
                return false;
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
                {
                    Debug.WriteLine("Not saved change");
                    return false;
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Error with catch: " + ex.Message);
                return false;
            }
        }
    }
}