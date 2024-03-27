using ReactProjectManagementAppWebAPI.Models;
using System.Threading.Tasks;

namespace ReactProjectManagementAppWebAPI.Service
{
    public interface IHomeService
    {
        Task<object> Post(Projects project);
    }
}
