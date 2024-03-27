using Microsoft.AspNetCore.Mvc;
using System.Net;
using System;

namespace ReactProjectManagementAppWebAPI.Constants
{
    public static class CommonUtil
    {
        public static JsonResult GetContentResult(object content, int? statusCode)
        {
            return new JsonResult(content)
            {
                StatusCode = statusCode > 0 && statusCode != null ? statusCode : Convert.ToInt32(HttpStatusCode.OK),
            };
        }
    }
}
