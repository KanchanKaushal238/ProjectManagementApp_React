using ReactProjectManagementAppWebAPI.Context;

namespace ReactProjectManagementAppWebAPI.Service
{
    /// <summary>
    /// This factory class is used to create instance of DB.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class Factory<T> where T : IDocument
    {
        /// <summary>
        /// This method is used to create instance of MongoBD based on IBaseRepository.
        /// </summary>
        /// <param name="dbSettings"></param>
        /// <returns></returns>
        public static IBaseRepository<T> getInstance(IReactDbModel dbSettings)
        {
            IBaseRepository<T> data = new MongoDbBaseRepository<T>(dbSettings);
            return data;
        }
    }
}
