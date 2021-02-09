﻿using Microsoft.Ajax.Utilities;
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
    public class ChatsRepository
    {
        internal List<ChatDTO> Retrieve()
        {
            using (BookAtUsContext context = new BookAtUsContext())
            {
                List<ChatDTO> chat = context.Chat.Select(p => ToDTO(p)).ToList();
                return chat;

            }
        }

        internal List<ChatDTO> RetrieveBuyers(string uname)
        {
            using (BookAtUsContext context = new BookAtUsContext())
            {
                List<ChatDTO> chat = context
                    .Chat
                    .Where(p => p.Buyer == uname)
                    .Select(p => ToDTO(p))
                    .ToList();
                return chat;

            }
        }

        internal List<ChatDTO> RetrieveSellers(string uname)
        {
            using (BookAtUsContext context = new BookAtUsContext())
            {
                List<ChatDTO> chat = context
                    .Chat
                    .Where(p => p.Seller == uname)
                    .Select(p => ToDTO(p))
                    .ToList();
                return chat;

            }
        }

        internal Chat Retrieve(ChatDTO chatDto)
        {
            using (BookAtUsContext context = new BookAtUsContext())
            {
                Chat chat = context
                    .Chat
                    .Where(p => p.ProductId == chatDto.ProductId)
                    .Where(s => s.Seller == chatDto.Seller)
                    .Where(b => b.Buyer == chatDto.Buyer)
                    .FirstOrDefault();
                return chat;

            }
        }

        internal bool Save(Chat chat)
        {
            try
            {
                BookAtUsContext context = new BookAtUsContext();
                context.Chat.Add(chat);
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
            return new ChatDTO(c.ChatId, c.ProductId, c.Buyer, c.Seller);
        }
    }
}