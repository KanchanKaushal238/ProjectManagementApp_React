using ReactProjectManagementAppWebAPI.Models;
using System.Net;
using System;
using System.Threading.Tasks;
using ReactProjectManagementAppWebAPI.Constants;
using Newtonsoft.Json;
using MongoDB.Driver;

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


        /// <summary>Gets all project.</summary>
        /// <returns>All Projects</returns>
        public async Task<object> GetAllProject()
        {
            var projects = await mongoProjects.GetAllAsync();
            return CommonUtil.GetContentResult(projects, Convert.ToInt32(HttpStatusCode.BadRequest)); ;
        }

        /// <summary>Saves the project.</summary>
        /// <param name="project">The project details.</param>
        /// <returns>If Project is saved [true] else [false]</returns>
        public async Task<object> Post(Projects project)
        {
            try
            {
                if (project == null)
                    return CommonUtil.GetContentResult(JsonConvert.SerializeObject(""), Convert.ToInt32(HttpStatusCode.BadRequest));

                var addedProject = await mongoProjects.InsertAsync(project);
                return CommonUtil.GetContentResult(addedProject, Convert.ToInt32(HttpStatusCode.BadRequest)); ;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>Puts the specified identifier.</summary>
        /// <param name="projectId">The identifier.</param>
        /// <param name="projects">The value.</param>
        public async Task<object> UpdateProject(string projectId, Projects projects)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(projectId) && projects == null)
                    return CommonUtil.GetContentResult(false, Convert.ToInt32(HttpStatusCode.BadRequest));

                var project = await mongoProjects.GetByIdAsync(projectId);
                if (project == null)
                    return CommonUtil.GetContentResult(false, Convert.ToInt32(HttpStatusCode.BadRequest));
                else
                {
                    project.title = projects.title;
                    project.description = projects.description; 
                    project.dueDate = projects.dueDate;
                    var projectUpdated = await mongoProjects.UpdateByIdAsync(projects, projectId);

                    return CommonUtil.GetContentResult(projectUpdated, Convert.ToInt32(HttpStatusCode.BadRequest));
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>Deletes the specified identifier.</summary>
        /// <param name="projectId">The identifier.</param>
        public async Task<object> DeleteProject(string projectId)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(projectId))
                    return CommonUtil.GetContentResult(false, Convert.ToInt32(HttpStatusCode.BadRequest));

                var project = await mongoProjects.GetByIdAsync(projectId);
                if (project == null)
                    return CommonUtil.GetContentResult(false, Convert.ToInt32(HttpStatusCode.BadRequest));
                else
                {
                    var projectDeleted = await mongoProjects.DeleteByIdAsync(projectId);
                    return CommonUtil.GetContentResult(projectDeleted, Convert.ToInt32(HttpStatusCode.BadRequest));
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
