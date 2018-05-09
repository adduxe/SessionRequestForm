using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SessionRequest.Models;

namespace SessionRequest.Controllers
{
    [Produces("application/json")]
    [Route("api/SessionRequest")]
    public class SessionRequestController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<MSessionRequest> GetSessionRequests()
        {
            List<MSessionRequest> sessionRequests = GetMockSessionRequests();
            return sessionRequests;
        }

        private List<MSessionRequest> GetMockSessionRequests()
     {
            List<MSessionRequest> sessionRequests = new List<MSessionRequest>();

            List<MSessionRequestRevision> sessionRequestRevisions = new List<MSessionRequestRevision>();
            MSessionRequestRevision sessionRequestRevision1 = new MSessionRequestRevision
            {
                VersionNumber = 0,
                Action = "Create",
                ActionBy = "lipan",
                ActionDate = DateTime.Parse("Aug 1, 2016")
            };
            MSessionRequestRevision sessionRequestRevision2 = new MSessionRequestRevision
            {
                VersionNumber = 1,
                Action = "Modify",
                ActionBy = "lipan",
                ActionDate = DateTime.Parse("Sep 1, 2016")
            };
            sessionRequestRevisions.Add(sessionRequestRevision1);
            sessionRequestRevisions.Add(sessionRequestRevision2);
            MSessionRequest sessionRequest = new MSessionRequest
            {
                SessionRequestID = 2134,
                SessionCode = "20172-136",
                Term = "20172",
                Status = "Waiting for Approval",
                Owner = "lipan",
                LateChange = false,
                OwnerChanged = true,
                Revisions = sessionRequestRevisions
            };

            sessionRequests.Add(sessionRequest);
            return sessionRequests;
     }
    }
}