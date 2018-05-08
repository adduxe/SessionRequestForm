using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SessionRequest.Models
{
    public class MSessionRequest
    {
        public int SessionRequestID { get; set; }
        public string SessionCode { get; set; }
        public string Term { get; set; }
        public string Status { get; set; }
        public string Owner { get; set; }
        public bool LateChange { get; set; }
        public bool OwnerChanged { get; set; }
        public List<MSessionRequestRevision> Revisions { get; set; }
    }
}
