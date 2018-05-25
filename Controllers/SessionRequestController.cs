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
            List<MSessionRequest> sessionRequests = GetMockSessionRequests().OrderByDescending(x => x.SessionRequestID).ToList();
            return sessionRequests;
        }

        [HttpGet("[action]")]
        public IEnumerable<MSessionRequest> GetPendingSessionRequests()
        {
            List<MSessionRequest> sessionRequests = GetMockSessionRequests();

            List<string> pendingStatuses = new List<string>
            {
                "Waiting for Approval",
                "Waiting for Fee",
                "Waiting for Rate"
            };

            List<MSessionRequest> filtedSR = sessionRequests.Where(x => pendingStatuses.Contains(x.Status))
                                                            .OrderByDescending(x => x.SessionRequestID)
                                                            .ToList();

            return filtedSR;
        }

        [HttpGet("[action]")]
        public IEnumerable<MSessionRequestRevision> GetSessionRequestRevisions(int srId)
        {
            Dictionary<int, List<MSessionRequestRevision>> srrMap = getMockSessionRequestRevisions();
            List<MSessionRequestRevision> revisions = new List<MSessionRequestRevision>();

            if (srrMap.ContainsKey(srId))
            {
                srrMap.TryGetValue(srId, out revisions);
            }

            return revisions;
        }
        private List<MSessionRequest> GetMockSessionRequests()
        {
            List<MSessionRequest> sessionRequests = new List<MSessionRequest>();
            MSessionRequest sessionRequest = new MSessionRequest
            {
                SessionRequestID = 2134,
                SessionCode = "20172-136",
                Term = "20172",
                Status = "Waiting for Approval",
                Owner = "lipan",
                LateChange = false,
                OwnerChanged = true
            };

            sessionRequests.Add(sessionRequest);

            MSessionRequest sessionRequest1 = new MSessionRequest
            {
                SessionRequestID = 2135,
                SessionCode = "20173-136",
                Term = "20173",
                Status = "Waiting for Fee",
                Owner = "sebastianw",
                LateChange = false,
                OwnerChanged = true
            };
            sessionRequests.Add(sessionRequest1);

            MSessionRequest sessionRequest2 = new MSessionRequest
            {
                SessionRequestID = 2137,
                SessionCode = "20183-136",
                Term = "20183",
                Status = "Cancelled",
                Owner = "lipan",
                LateChange = true,
                OwnerChanged = true
            };

            sessionRequests.Add(sessionRequest2);

            MSessionRequest sessionRequest3 = new MSessionRequest
            {
                SessionRequestID = 2138,
                SessionCode = "20171-136",
                Term = "20171",
                Status = "Denied",
                Owner = "lipan",
                LateChange = false,
                OwnerChanged = false
            };

            sessionRequests.Add(sessionRequest3);

            MSessionRequest sessionRequest6 = new MSessionRequest
            {
                SessionRequestID = 2145,
                SessionCode = "20164-123",
                Term = "20164",
                Status = "Waiting for Approval",
                Owner = "sebastianw",
                LateChange = false,
                OwnerChanged = true
            };

            sessionRequests.Add(sessionRequest6);

            MSessionRequest sessionRequest7 = new MSessionRequest
            {
                SessionRequestID = 2146,
                SessionCode = "20174-111",
                Term = "20174",
                Status = "Waiting for Rate",
                Owner = "anthonyd",
                LateChange = false,
                OwnerChanged = true
            };

            sessionRequests.Add(sessionRequest7);

            return sessionRequests;
        }
 
        private Dictionary<int, List<MSessionRequestRevision>> getMockSessionRequestRevisions()
        {
            Dictionary<int, List<MSessionRequestRevision>> srrMap = new Dictionary<int, List<MSessionRequestRevision>>();
            
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

            srrMap.Add(2134, sessionRequestRevisions);

            List<MSessionRequestRevision> sessionRequestRevisions2 = new List<MSessionRequestRevision>();
            MSessionRequestRevision sessionRequestRevision3 = new MSessionRequestRevision
            {
                VersionNumber = 0,
                Action = "Create",
                ActionBy = "sebastianw",
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
            srrMap.Add(2135, sessionRequestRevisions2);

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
            srrMap.Add(2137, sessionRequestRevisions3);

            List<MSessionRequestRevision> sessionRequestRevisions4 = new List<MSessionRequestRevision>();
            MSessionRequestRevision sessionRequestRevision7 = new MSessionRequestRevision
            {
                VersionNumber = 0,
                Action = "Create",
                ActionBy = "lipan",
                ActionDate = DateTime.Parse("Aug 1, 2017")
            };
            MSessionRequestRevision sessionRequestRevision8 = new MSessionRequestRevision
            {
                VersionNumber = 1,
                Action = "Modify",
                ActionBy = "anthonyd",
                ActionDate = DateTime.Parse("Sep 1, 2017")
            };
            sessionRequestRevisions4.Add(sessionRequestRevision7);
            sessionRequestRevisions4.Add(sessionRequestRevision8);
            srrMap.Add(2138, sessionRequestRevisions4);
           
            List<MSessionRequestRevision> sessionRequestRevisions9 = new List<MSessionRequestRevision>();
            MSessionRequestRevision sessionRequestRevision9 = new MSessionRequestRevision
            {
                VersionNumber = 0,
                Action = "Create",
                ActionBy = "sebastianw",
                ActionDate = DateTime.Parse("Aug 1, 2016")
            };
            MSessionRequestRevision sessionRequestRevision10 = new MSessionRequestRevision
            {
                VersionNumber = 1,
                Action = "Modify",
                ActionBy = "anthonyd",
                ActionDate = DateTime.Parse("Sep 1, 2016")
            };
            sessionRequestRevisions9.Add(sessionRequestRevision9);
            sessionRequestRevisions9.Add(sessionRequestRevision10);
            srrMap.Add(2145, sessionRequestRevisions9);

            List<MSessionRequestRevision> sessionRequestRevisions10 = new List<MSessionRequestRevision>();
            MSessionRequestRevision sessionRequestRevision11 = new MSessionRequestRevision
            {
                VersionNumber = 0,
                Action = "Create",
                ActionBy = "anthonyd",
                ActionDate = DateTime.Parse("Dec 1, 2016")
            };
            MSessionRequestRevision sessionRequestRevision12 = new MSessionRequestRevision
            {
                VersionNumber = 1,
                Action = "Modify",
                ActionBy = "anthonyd",
                ActionDate = DateTime.Parse("Jan 1, 2017")
            };
            sessionRequestRevisions10.Add(sessionRequestRevision12);
            sessionRequestRevisions10.Add(sessionRequestRevision11);
            srrMap.Add(2146, sessionRequestRevisions10);
          
            return srrMap;
        }
        private List<MSessionRequest> GetMockSessionRequestsold()
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
                OwnerChanged = true
                //Revisions = sessionRequestRevisions
            };

            sessionRequests.Add(sessionRequest);

            List<MSessionRequestRevision> sessionRequestRevisions2 = new List<MSessionRequestRevision>();
            MSessionRequestRevision sessionRequestRevision3 = new MSessionRequestRevision
            {
                VersionNumber = 0,
                Action = "Create",
                ActionBy = "sebastianw",
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
                OwnerChanged = true
                //Revisions = sessionRequestRevisions2
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
                OwnerChanged = true
                //Revisions = sessionRequestRevisions3
            };

            sessionRequests.Add(sessionRequest2);

            List<MSessionRequestRevision> sessionRequestRevisions4 = new List<MSessionRequestRevision>();
            MSessionRequestRevision sessionRequestRevision7 = new MSessionRequestRevision
            {
                VersionNumber = 0,
                Action = "Create",
                ActionBy = "lipan",
                ActionDate = DateTime.Parse("Aug 1, 2017")
            };
            MSessionRequestRevision sessionRequestRevision8 = new MSessionRequestRevision
            {
                VersionNumber = 1,
                Action = "Modify",
                ActionBy = "anthonyd",
                ActionDate = DateTime.Parse("Sep 1, 2017")
            };
            sessionRequestRevisions4.Add(sessionRequestRevision7);
            sessionRequestRevisions4.Add(sessionRequestRevision8);
            MSessionRequest sessionRequest3 = new MSessionRequest
            {
                SessionRequestID = 2138,
                SessionCode = "20171-136",
                Term = "20171",
                Status = "Denied",
                Owner = "lipan",
                LateChange = false,
                OwnerChanged = false
                //Revisions = sessionRequestRevisions4
            };

            sessionRequests.Add(sessionRequest3);

            List<MSessionRequestRevision> sessionRequestRevisions9 = new List<MSessionRequestRevision>();
            MSessionRequestRevision sessionRequestRevision9 = new MSessionRequestRevision
            {
                VersionNumber = 0,
                Action = "Create",
                ActionBy = "sebastianw",
                ActionDate = DateTime.Parse("Aug 1, 2016")
            };
            MSessionRequestRevision sessionRequestRevision10 = new MSessionRequestRevision
            {
                VersionNumber = 1,
                Action = "Modify",
                ActionBy = "anthonyd",
                ActionDate = DateTime.Parse("Sep 1, 2016")
            };
            sessionRequestRevisions9.Add(sessionRequestRevision9);
            sessionRequestRevisions9.Add(sessionRequestRevision10);
            MSessionRequest sessionRequest6 = new MSessionRequest
            {
                SessionRequestID = 2145,
                SessionCode = "20164-123",
                Term = "20164",
                Status = "Waiting for Approval",
                Owner = "sebastianw",
                LateChange = false,
                OwnerChanged = true
                //Revisions = sessionRequestRevisions9
            };

            sessionRequests.Add(sessionRequest6);

            List<MSessionRequestRevision> sessionRequestRevisions10 = new List<MSessionRequestRevision>();
            MSessionRequestRevision sessionRequestRevision11 = new MSessionRequestRevision
            {
                VersionNumber = 0,
                Action = "Create",
                ActionBy = "anthonyd",
                ActionDate = DateTime.Parse("Dec 1, 2016")
            };
            MSessionRequestRevision sessionRequestRevision12 = new MSessionRequestRevision
            {
                VersionNumber = 1,
                Action = "Modify",
                ActionBy = "anthonyd",
                ActionDate = DateTime.Parse("Jan 1, 2017")
            };
            sessionRequestRevisions10.Add(sessionRequestRevision12);
            sessionRequestRevisions10.Add(sessionRequestRevision11);
            MSessionRequest sessionRequest7 = new MSessionRequest
            {
                SessionRequestID = 2146,
                SessionCode = "20174-111",
                Term = "20174",
                Status = "Waiting for Rate",
                Owner = "anthonyd",
                LateChange = false,
                OwnerChanged = true
                //Revisions = sessionRequestRevisions10
            };

            sessionRequests.Add(sessionRequest7);

            return sessionRequests;
     }
    }
}