using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ReactProjectManagementAppWebAPI.Models;
using ReactProjectManagementAppWebAPI.Service;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactProjectManagementAppWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IHomeService _homeService;
        private readonly ILogger<HomeController> _logger;

        public HomeController(IHomeService homeService, ILogger<HomeController> logger)
        {
            _homeService = homeService;
            _logger = logger;
        }


        /// <summary>Tests the connection.</summary>
        /// <returns>Enumerable of Strings</returns>
        [HttpGet]
        public IEnumerable<string> TestConnection()
        {
            return new string[] { "Kanchan", "Kausal" };
        }


        /// <summary>Gets all projects.</summary>
        /// <returns>All Projects</returns>
        [HttpGet("GetAllProjects")]
        public async Task<object> GetAllProjects()
        {
            return await _homeService.GetAllProject();
        }


        /// <summary>Saves the project.</summary>
        /// <param name="projectDetails">The project details.</param>
        /// <returns>If Project is saved [true] else [false]</returns>
        [HttpPost("SaveProject")]
        public async Task<object> SaveProject([FromBody] ProjectDTO projectDetails)
        {
            Projects project = new Projects()
            {
                title = projectDetails.title,
                description = projectDetails.description,
                dueDate = projectDetails.dueDate
            };
            return await _homeService.Post(project);
        }


        /// <summary>Puts the specified identifier.</summary>
        /// <param name="id">The identifier.</param>
        /// <param name="value">The value.</param>
        [HttpPut("UpdateProject/{id}")]
        public async Task<object> UpdateProject(string id, [FromBody] ProjectDTO projectDetails)
        {
            return await _homeService.UpdateProject(id, new Projects()
            {
                title = projectDetails.title,
                description = projectDetails.description,
                dueDate = projectDetails.dueDate,
                projTasks = projectDetails.projTasks
            });
        }


        /// <summary>Deletes the specified identifier.</summary>
        /// <param name="id">The identifier.</param>
        [HttpDelete("DeleteProject/{id}")]
        public async Task<object> DeleteProject(string id)
        {
            return await _homeService.DeleteProject(id);
        }
    }
}
