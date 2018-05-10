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

            List<MSessionRequestRevision> sessionRequestRevisions2 = new List<MSessionRequestRevision>();
            MSessionRequestRevision sessionRequestRevision3 = new MSessionRequestRevision
            {
                VersionNumber = 0,
                Action = "Create",
                ActionBy = "lipan",
                ActionDate = DateTime.Parse("Aug 1, 2016")
            };
            MSessionRequestRevision sessionRequestRevision4 = new MSessionRequestRevision
            {
                VersionNumber = 1,
                Action = "Modify",
                ActionBy = "anthonyd",
                ActionDate = DateTime.Parse("Sep 1, 2016")
            };
            sessionRequestRevisions2.Add(sessionRequestRevision3);
            sessionRequestRevisions2.Add(sessionRequestRevision4);
            MSessionRequest sessionRequest1 = new MSessionRequest
            {
                SessionRequestID = 2135,
                SessionCode = "20173-136",
                Term = "20173",
                Status = "Waiting for Fee",
                Owner = "sebastianw",
                LateChange = false,
                OwnerChanged = true,
                Revisions = sessionRequestRevisions2
            };

            sessionRequests.Add(sessionRequest1);

            List<MSessionRequestRevision> sessionRequestRevisions3 = new List<MSessionRequestRevision>();
            MSessionRequestRevision sessionRequestRevision5 = new MSessionRequestRevision
            {
                VersionNumber = 0,
                Action = "Create",
                ActionBy = "lipan",
                ActionDate = DateTime.Parse("Aug 1, 2017")
            };
            MSessionRequestRevision sessionRequestRevision6 = new MSessionRequestRevision
            {
                VersionNumber = 1,
                Action = "Modify",
                ActionBy = "anthonyd",
                ActionDate = DateTime.Parse("Sep 1, 2017")
            };
            sessionRequestRevisions3.Add(sessionRequestRevision5);
            sessionRequestRevisions3.Add(sessionRequestRevision6);
            MSessionRequest sessionRequest2 = new MSessionRequest
            {
                SessionRequestID = 2137,
                SessionCode = "20183-136",
                Term = "20183",
                Status = "Cancelled",
                Owner = "lipan",
                LateChange = true,
                OwnerChanged = true,
                Revisions = sessionRequestRevisions3
            };

            sessionRequests.Add(sessionRequest2);

            return sessionRequests;
     }
    }
}