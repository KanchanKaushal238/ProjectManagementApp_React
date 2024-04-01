using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactProjectManagementAppWebAPI.Models
{
    public class TaskDTO
    {
        [BindProperty]
        public string? Id { get; set; }
        [BindProperty]
        public string TaskDetails { get; set; }

    }
}
