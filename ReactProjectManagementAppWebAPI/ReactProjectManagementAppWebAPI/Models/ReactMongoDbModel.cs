using ReactProjectManagementAppWebAPI.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactProjectManagementAppWebAPI.Models
{
    public class ReactMongoDbModel : IReactDbModel
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;
    }
}
