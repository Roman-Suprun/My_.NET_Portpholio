using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using MyPortpholio.Models;

namespace MyPortpholio.Controllers
{
    public class EmailController : Controller
    {
        // GET: Email

        public ActionResult EmailSuccess()
        {
            return View();
        }
        

        [HttpPost]
        public ActionResult Index(Emailmodel email_obj)
        {

            try
            {
                MailMessage mail = new MailMessage();
                mail.To.Add("Roman_Suprun@ex.ua");
                mail.From = new MailAddress("supra8771@gmail.com");
                mail.Subject = email_obj.EmailSubject;
                string Body = email_obj.Message;
                mail.Body = Body;

                mail.IsBodyHtml = true;

                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new System.Net.NetworkCredential("supra8771@gmail.com", "009100165641rrRRR");// Enter senders User name and password
                smtp.EnableSsl = true;
                smtp.Send(mail);

                return Redirect("/Email/EmailSuccess");
            }
            catch (Exception)
            {
                ViewBag.Status = "Problem while sending email, Please check details.";

            }

            return null;


        }
    }
}
