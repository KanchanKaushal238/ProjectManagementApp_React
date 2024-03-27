using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactProjectManagementAppWebAPI.Service
{
    public interface IReactDbModel
    {
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
