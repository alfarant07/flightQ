import { MdFlightTakeoff, MdNotificationsActive, MdTrendingDown } from "react-icons/md";

const features = [
  { icon: <MdFlightTakeoff />, title: "Search flights", text: "Compare live fares between any two airports." },
  { icon: <MdNotificationsActive />, title: "Track a price", text: "Bookmark a flight and we'll watch it for you." },
  { icon: <MdTrendingDown />, title: "Get notified", text: "We email you when the price drops." },
];

const Welcome = () => (
  <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 bg-gray-50">
    <h1 className="text-4xl font-bold mb-3">Find your flight. Track the price.</h1>
    <p className="text-gray-600 max-w-xl mb-10">
      Search above to compare fares, then bookmark any flight to get an email when it gets cheaper.
    </p>
    <div className="grid gap-6 sm:grid-cols-3 max-w-4xl w-full">
      {features.map((f) => (
        <div key={f.title} className="bg-white rounded-2xl border p-6 flex flex-col items-center gap-2">
          <span className="text-3xl text-blue-500">{f.icon}</span>
          <h3 className="font-semibold">{f.title}</h3>
          <p className="text-sm text-gray-500">{f.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Welcome;
