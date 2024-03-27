using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactProjectManagementAppWebAPI.Service
{
    public interface IBaseRepository<TDocument>
    {
        IMongoCollection<TDocument> collection { get; set; }
    }
}
