using System.Web;
using hnd_agent_gui.Models;

namespace hnd_agent_gui.Models
{
    public class BookListProp
    {
        public int Id { get; set; }

        public string? Title { get; set; }

        public string? Author { get; set; }

        public IEnumerable<PropModel>? MyProp { get; set; }

    }
}