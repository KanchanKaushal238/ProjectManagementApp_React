using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace ReactProjectManagementAppWebAPI.Models
{
    public class ProjectDTO
    {
        [BindProperty]
        public string title { get; set; }
        [BindProperty]
        public string description { get; set; } = string.Empty;
        [BindProperty]
        public string dueDate { get; set; } = string.Empty;

        [BindProperty]
        public List<string> projTasks { get; set; } = new List<string>();
    }
}
