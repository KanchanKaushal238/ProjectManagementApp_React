using ReactProjectManagementAppWebAPI.Models;
using System.Net;
using System;
using System.Threading.Tasks;
using ReactProjectManagementAppWebAPI.Constants;
using Newtonsoft.Json;

namespace ReactProjectManagementAppWebAPI.Service
{
    public class HomeService : IHomeService
    {
        /// <summary>
        /// This is instance of mongo base reposity
        /// </summary>
        private readonly IBaseRepository<Projects> mongoProjects;
        public HomeService(IReactDbModel dbSettings) 
        {
            mongoProjects = Factory<Projects>.getInstance(dbSettings);
        }

        public async Task<object> Post(Projects project)
        {
            if (project == null)
                return CommonUtil.GetContentResult(JsonConvert.SerializeObject(""), Convert.ToInt32(HttpStatusCode.BadRequest));

            var addedProject = await mongoProjects.InsertAsync(project);
            return CommonUtil.GetContentResult(JsonConvert.SerializeObject(addedProject), Convert.ToInt32(HttpStatusCode.BadRequest)); ;
        }
    }
}
