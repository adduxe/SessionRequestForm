"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockSessionRequests = [
    {
        "sessionRequestID": 2134,
        "sessionCode": "20172-136",
        "term": "20172",
        "status": "Waiting for Approval",
        "owner": "lipan",
        "lateChange": false,
        "ownerChanged": true,
        "revisions": [
            {
                "versionNumber": 0,
                "actionBy": "lipan",
                "action": "create",
                "actionDate": new Date(2016, 8, 20)
            }
        ]
    },
    {
        "sessionRequestID": 2135,
        "sessionCode": "20173-321",
        "term": "20173",
        "status": "Waiting for Fee",
        "owner": "lipan",
        "lateChange": false,
        "ownerChanged": true,
        "revisions": [{
                "versionNumber": 0,
                "actionBy": "lipan",
                "action": "create",
                "actionDate": new Date(2016, 10, 20)
            },
            {
                "versionNumber": 1,
                "actionBy": "anthonyd",
                "action": "modify",
                "actionDate": new Date(2016, 10, 20)
            }]
    },
    {
        "sessionRequestID": 2136,
        "sessionCode": "20174-321",
        "term": "20174",
        "status": "Approved",
        "owner": "Sebastian",
        "lateChange": true,
        "ownerChanged": true,
        "revisions": [{
                "versionNumber": 0,
                "actionBy": "Sebastian",
                "action": "create",
                "actionDate": new Date(2017, 1, 20)
            },
            {
                "versionNumber": 1,
                "actionBy": "anthonyd",
                "action": "modify",
                "actionDate": new Date(2017, 3, 20)
            }]
    }
];
//# sourceMappingURL=sessionrequests.js.map