using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace BackendBookAtUs.Models
{
    public class PurchaseConfirmedRepository
    {
        internal bool Save(PurchaseConfirmed purchase)
        {
            try
            {
                BookAtUsContext context = new BookAtUsContext();
                purchase.Date_Purchase = DateTime.Now;
                context.PurchaseConfirmed.Add(purchase);
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

        internal bool Delete(int id)
        {
            try
            {
                using (BookAtUsContext context = new BookAtUsContext())
                {
                    PurchaseConfirmed purchase = context.PurchaseConfirmed.FirstOrDefault(p => p.idPurchase == id);
                    context.PurchaseConfirmed.Remove(purchase);
                    if (context.SaveChanges() >= 1)
                        return true;
                    else
                    {
                        Debug.WriteLine("Not saved change");
                        return false;
                    }
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