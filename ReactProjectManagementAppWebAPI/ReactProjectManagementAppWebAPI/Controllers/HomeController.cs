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

        // GET: api/<HomeController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<HomeController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<HomeController>
        [HttpPost("SaveProject")]
        public async Task<object> SaveProject([FromBody] ProjectDTO projectDetails)
        {
            //return new
            //{
            //    title = projectDetails.title,
            //    description = projectDetails.description,
            //    dueDate = projectDetails.dueDate
            //};
            Projects project = new Projects()
            {
                title = projectDetails.title,
                description = projectDetails.description,
                dueDate = projectDetails.dueDate
            };
            return await _homeService.Post(project);
        }

        // PUT api/<HomeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<HomeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
