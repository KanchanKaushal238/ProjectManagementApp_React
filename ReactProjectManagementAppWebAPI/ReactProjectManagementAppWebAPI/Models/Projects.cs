
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactProjectManagementAppWebAPI.Models
{
    public class Projects
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string dueDate { get; set; }
    }

}
