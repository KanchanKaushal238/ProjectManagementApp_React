using MongoDB.Bson.Serialization.Attributes;

namespace ReactProjectManagementAppWebAPI.Models
{
    public class ProjectDTO
    {
        public string title { get; set; }
        public string description { get; set; } = string.Empty;
        public string dueDate { get; set; } = string.Empty;
    }
}
