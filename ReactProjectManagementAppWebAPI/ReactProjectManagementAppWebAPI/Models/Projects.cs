using MongoDB.Bson.Serialization.Attributes;
using ReactProjectManagementAppWebAPI.Context;
using ReactProjectManagementAppWebAPI.Service;
using System.Collections.Generic;

namespace ReactProjectManagementAppWebAPI.Models
{
    [BsonCollection("Projects")]
    public class Projects : Document
    {
        [BsonRequired]
        public string title { get; set; }
        public string description { get; set; } = string.Empty;
        public string dueDate { get; set; } = string.Empty;
        public List<string> projTasks { get; set; } = new List<string>();
    }

}