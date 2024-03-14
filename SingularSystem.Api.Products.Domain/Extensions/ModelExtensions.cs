namespace SingularSystem.Api.Products.Domain.Extensions
{
    public static class CollectionExtensions
    {
        public static bool IsNullOrEmpty<T>(this ICollection<T> collection) => collection == null || !collection.Any();
    }
}

