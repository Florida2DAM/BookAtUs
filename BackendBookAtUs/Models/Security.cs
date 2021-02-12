using System;
using System.Collections.Generic;
using System.Drawing.Imaging;
using System.Linq;
using System.Net.Security;
using System.Web;

namespace BackendBookAtUs.Models
{
    public static class Security
    {
        public static string Encode(string rawString) 
        {
            return rawString.GetHashCode().ToString();
        }

        public static bool CheckPwdHash(int databaseHash, string clientPwd)
        {
            if (databaseHash.ToString() == Encode(clientPwd))
                return true;
            else
                return false;
        }
    }
}