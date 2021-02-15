using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Linq;

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

        internal User RetrieveId(string id)
        {
            using (BookAtUsContext context = new BookAtUsContext())
            {
                User user = context
                    .Users
                    .FirstOrDefault(u => u.UserId == id);
                return user;

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

        internal void Put(string id, User u)
        {
            BookAtUsContext context = new BookAtUsContext();
            User user = context.Users.FirstOrDefault(us => us.UserId == id);
            user.Name = u.Name;
            user.Surname = u.Surname;
            user.Avatar = u.Avatar;
            user.Password = Security.Encode(u.Password);
            user.Birth = u.Birth;
            context.SaveChanges();
        }

        internal void Put(string id, string password)
        {
            BookAtUsContext context = new BookAtUsContext();
            User user = context.Users.FirstOrDefault(us => us.UserId == id);
            user.Password = Security.Encode(password);
            context.SaveChanges();
        }
    }
}