iOS 13.x debug :
```
2022-11-12 12:38:59.009105-0800 App[99687:13750481] FBSDKLog: Request <#1182>:
  URL:	https://graph.facebook.com/v14.0/{{HIDDEN_APP_ID}}/activities
  Method:	POST
  UserAgent:	FBiOSSDK.14.1.0
  MIME:	application/json
  Attachments:	
    include_headers:	false
    advertiser_id_collection_enabled:	1
    event:	CUSTOM_APP_EVENTS
    application_tracking_enabled:	1
    advertiser_id:	00000000-0000-0000-0000-000000000000
    ud:	{}
    sdk:	ios
    custom_events:	[{"0_auth_logger_id":"DCB9FCBE-F290-43D3-B753-FF18D1C2A819","3_method":"sfvc_auth","_inBackground":"1","1_timestamp_ms":1668285517167,"_ui":"Capacitor.CAPBridgeViewController","7_logging_token":"","_logTime":1668285517,"4_error_code":"","_implicitlyLogged":"1","6_extras":"{}","2_result":"success","_eventName":"fb_mobile_login_heartbeat","5_error_message":""}]
    format:	json
    extinfo:	["i2","org.codeconsole.testevents","1","1.0","13.7","x86_64","en_US","PST","NoCarrier",375,812,"3.00",10,926,354,"America\/Los_Angeles"]
    url_schemes:	["fb{{HIDDEN_APP_ID}}"]
    advertiser_tracking_enabled:	1
    access_token:	{{HIDDEN_ACCESS_TOKEN}}
    anon_id:	XZBADCE632-EECF-4526-A0D8-8FBD0E8B9FC8
2022-11-12 12:38:59.009714-0800 App[99687:13750481] FBSDKLog: Request <#1182>:
  URL:	https://graph.facebook.com/v14.0/{{HIDDEN_APP_ID}}/activities
  Method:	POST
  UserAgent:	FBiOSSDK.14.1.0
  MIME:	application/json
2022-11-12 12:38:59.017131-0800 App[99687:13750481] [ProcessSuspension] 0x600002182c70 - WKProcessAssertionBackgroundTaskManager: Ignored request to start a new background task because the application is already in the background
2022-11-12 12:38:59.018107-0800 App[99687:13750481] [ProcessSuspension] 0x600002182c70 - WKProcessAssertionBackgroundTaskManager: Ignored request to start a new background task because the application is already in the background
2022-11-12 12:38:59.066116-0800 App[99687:13750481] FBSDKLog: FBSDKAppEvents: Recording event @ 1668285539.000000: {
    "_eventName" = applicationWillEnterForeground;
    "_inBackground" = 1;
    "_logTime" = 1668285539;
    "_ui" = "Capacitor.CAPBridgeViewController";
}
2022-11-12 12:38:59.077899-0800 App[99687:13750481] FBSDKLog: Request <#1186>:
  URL:	https://graph.facebook.com/v14.0/{{HIDDEN_APP_ID}}/activities
  Method:	POST
  UserAgent:	FBiOSSDK.14.1.0
  MIME:	application/json
  Attachments:	
    include_headers:	false
    advertiser_id_collection_enabled:	1
    event:	CUSTOM_APP_EVENTS
    application_tracking_enabled:	1
    advertiser_id:	00000000-0000-0000-0000-000000000000
    ud:	{}
    sdk:	ios
    custom_events:	[{"_eventName":"applicationWillEnterForeground","_logTime":1668285539,"_inBackground":"1","_ui":"Capacitor.CAPBridgeViewController"}]
    format:	json
    extinfo:	["i2","org.codeconsole.testevents","1","1.0","13.7","x86_64","en_US","PST","NoCarrier",375,812,"3.00",10,926,354,"America\/Los_Angeles"]
    url_schemes:	["fb{{HIDDEN_APP_ID}}"]
    advertiser_tracking_enabled:	1
    access_token:	{{HIDDEN_ACCESS_TOKEN}}
    anon_id:	XZBADCE632-EECF-4526-A0D8-8FBD0E8B9FC8
2022-11-12 12:38:59.078514-0800 App[99687:13750481] FBSDKLog: Request <#1186>:
  URL:	https://graph.facebook.com/v14.0/{{HIDDEN_APP_ID}}/activities
  Method:	POST
  UserAgent:	FBiOSSDK.14.1.0
  MIME:	application/json
2022-11-12 12:38:59.567584-0800 App[99687:13752543] FBSDKLog: FBSDKGraphRequestConnection <#1189>:
  Duration: 558 msec
Response Size: 0 kB
  MIME type: application/json
2022-11-12 12:38:59.567901-0800 App[99687:13750481] FBSDKLog: Response <#1182>
Duration: 558 msec
Size: 16 kB
Response Body:
(
        {
        body =         {
            success = 1;
        };
        code = 200;
    }
)
2022-11-12 12:38:59.568119-0800 App[99687:13750481] FBSDKLog: FBSDKAppEvents: Flushed @ 1668285539.000000, 1 events due to 'Timer' - {
    "advertiser_id" = "00000000-0000-0000-0000-000000000000";
    "advertiser_id_collection_enabled" = 1;
    "advertiser_tracking_enabled" = 1;
    "anon_id" = "XZBADCE632-EECF-4526-A0D8-8FBD0E8B9FC8";
    "application_tracking_enabled" = 1;
    "custom_events" = "[{\"0_auth_logger_id\":\"DCB9FCBE-F290-43D3-B753-FF18D1C2A819\",\"3_method\":\"sfvc_auth\",\"_inBackground\":\"1\",\"1_timestamp_ms\":1668285517167,\"_ui\":\"Capacitor.CAPBridgeViewController\",\"7_logging_token\":\"\",\"_logTime\":1668285517,\"4_error_code\":\"\",\"_implicitlyLogged\":\"1\",\"6_extras\":\"{}\",\"2_result\":\"success\",\"_eventName\":\"fb_mobile_login_heartbeat\",\"5_error_message\":\"\"}]";
    event = "CUSTOM_APP_EVENTS";
    extinfo = "[\"i2\",\"org.codeconsole.testevents\",\"1\",\"1.0\",\"13.7\",\"x86_64\",\"en_US\",\"PST\",\"NoCarrier\",375,812,\"3.00\",10,926,354,\"America\\/Los_Angeles\"]";
    ud = "{}";
    "url_schemes" = "[\"fb{{HIDDEN_APP_ID}}\"]";
}
Events: [
  {
    "event" : {
      "0_auth_logger_id" : "DCB9FCBE-F290-43D3-B753-FF18D1C2A819",
      "3_method" : "sfvc_auth",
      "_inBackground" : "1",
      "1_timestamp_ms" : 1668285517167,
      "_ui" : "Capacitor.CAPBridgeViewController",
      "7_logging_token" : "",
      "_logTime" : 1668285517,
      "4_error_code" : "",
      "_implicitlyLogged" : "1",
      "6_extras" : "{}",
      "2_result" : "success",
      "_eventName" : "fb_mobile_login_heartbeat",
      "5_error_message" : ""
    },
    "isImplicit" : true
  }
]
Flush Result : Success
2022-11-12 12:38:59.572461-0800 App[99687:13752546] FBSDKLog: FBSDKGraphRequestConnection <#1192>:
  Duration: 494 msec
Response Size: 0 kB
  MIME type: application/json
2022-11-12 12:38:59.572716-0800 App[99687:13750481] FBSDKLog: Response <#1186>
Duration: 494 msec
Size: 16 kB
Response Body:
(
        {
        body =         {
            success = 1;
        };
        code = 200;
    }
)
2022-11-12 12:38:59.573044-0800 App[99687:13750481] FBSDKLog: FBSDKAppEvents: Flushed @ 1668285539.000000, 1 events due to 'Explicit' - {
    "advertiser_id" = "00000000-0000-0000-0000-000000000000";
    "advertiser_id_collection_enabled" = 1;
    "advertiser_tracking_enabled" = 1;
    "anon_id" = "XZBADCE632-EECF-4526-A0D8-8FBD0E8B9FC8";
    "application_tracking_enabled" = 1;
    "custom_events" = "[{\"_eventName\":\"applicationWillEnterForeground\",\"_logTime\":1668285539,\"_inBackground\":\"1\",\"_ui\":\"Capacitor.CAPBridgeViewController\"}]";
    event = "CUSTOM_APP_EVENTS";
    extinfo = "[\"i2\",\"org.codeconsole.testevents\",\"1\",\"1.0\",\"13.7\",\"x86_64\",\"en_US\",\"PST\",\"NoCarrier\",375,812,\"3.00\",10,926,354,\"America\\/Los_Angeles\"]";
    ud = "{}";
    "url_schemes" = "[\"fb{{HIDDEN_APP_ID}}\"]";
}
Events: [
  {
    "event" : {
      "_eventName" : "applicationWillEnterForeground",
      "_logTime" : 1668285539,
      "_inBackground" : "1",
      "_ui" : "Capacitor.CAPBridgeViewController"
    },
    "isImplicit" : false
  }
]
Flush Result : Success
```
