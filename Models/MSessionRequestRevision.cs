using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SessionRequest.Models
{
    public class MSessionRequestRevision
    {
        public int VersionNumber { get; set; }
        public string ActionBy { get; set; }
        public string Action { get; set; }
        public DateTime ActionDate { get; set; }
    }
}
