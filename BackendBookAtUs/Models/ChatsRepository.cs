using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Globalization;
using System.Web.WebPages;
using Microsoft.SqlServer.Server;

namespace BackendBookAtUs.Models
{
    public class ChatsRepository
    {
        internal List<Chat> Retrieve()
        {
            using (BookAtUsContext context = new BookAtUsContext())
            {
                List<Chat> chat = context
                    .Chat
                    .Include(p => p.Product)
                    .ToList();
                return chat;

            }
        }

        internal List<ChatDTO> Retrieve(string uname)
        {
            using (BookAtUsContext context = new BookAtUsContext())
            {
                List<ChatDTO> chat = context
                    .Chat
                    .Where(p => p.Buyer == uname || p.Seller == uname)
                    .Select(p => ToDTO(p))
                    .ToList();
                return chat;
            }
        }

        internal Chat Retrieve(int chatId)
        {
            using (BookAtUsContext context = new BookAtUsContext())
            {
                Chat chat = context
                    .Chat
                    .Where(p => p.ChatId == chatId)
                    .Include(c => c.Messages)
                    .FirstOrDefault();
                return chat;

            }
        }

        internal bool Save(Chat chat)
        {
            try
            {
                BookAtUsContext context = new BookAtUsContext();
                Chat chatCompare = context
                    .Chat
                    .Where(p => p.Product == chat.Product && p.Buyer == chat.Buyer && p.Seller == chat.Seller)
                    .FirstOrDefault();

                if (chatCompare == null)
                {
                    context.Chat.Add(chat);
                    if (context.SaveChanges() >= 1)
                        return true;
                    else
                    {
                        Debug.WriteLine("Not saved change");
                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Error with catch: xD " + ex.Message);
                return false;
            }
        }

        internal bool Save(int chatId, Message msg)
        {
            try
            {
                BookAtUsContext context = new BookAtUsContext();
                Chat chat = context
                   .Chat
                   .Where(p => p.ChatId == chatId)
                   .Include(c => c.Messages)
                   .FirstOrDefault();

                msg.Date = DateTime.Now.ToString();

                chat.Messages.Add(msg);

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
                Debug.WriteLine("Error with catch: " + ex.InnerException);
                return false;
            }
        }

        internal bool Delete(Chat chat)
        {
            try
            {
                BookAtUsContext context = new BookAtUsContext();
                context.Chat.Remove(chat);
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

        static public ChatDTO ToDTO(Chat c)
        {
            ProductsRepository repo = new ProductsRepository();
            Product p = repo.RetrieveId(c.Product);
            ChatDTO chat = new ChatDTO(c.ChatId, p.ProductId, c.Buyer, c.Seller, p.Title, p.Image);
            Debug.WriteLine(chat.ChatId);
            return chat;
        }
    }
}