import BentoCard from "./BentoCard.jsx";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <h1 className="text-4xl font-bold mb-8">
        Bento Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>


        <BentoCard title="Analytics">
            <p className="text-5xl font-bold text-blue-600">
                24,500
            </p>
            <p className="text-pink-500 mt-2">
                Total Visitors
            </p>

            <div className="mt-4 h-24 bg-blue-100 rounded-xl"></div>
            <div className="mt-4 flex items-end gap-2 h-24">
                <div className="w-6 h-10 bg-blue-400 rounded"></div>
                <div className="w-6 h-16 bg-blue-500 rounded"></div>
                <div className="w-6 h-14 bg-blue-400 rounded"></div>
                <div className="w-6 h-20 bg-blue-600 rounded"></div>
                <div className="w-6 h-18 bg-blue-500 rounded"></div>
            </div>
        </BentoCard>

        <div className="lg:col-span-2">
          <BentoCard title="Revenue">
            <p className="text-3xl font-bold text-green-600">$45,670</p>
            <p>This Month</p>
          </BentoCard>
        </div>

        <BentoCard title="Activity">
          <p>120 New Actions</p>
        </BentoCard>

        <BentoCard title="Notifications">
            <div className="flex items-center justify-between">
                <span>Unread Alerts</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full">
                12
                </span>
            </div>
        </BentoCard>

        <BentoCard title="Team">
            <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                <div className="w-10 h-10 rounded-full bg-green-500"></div>
                <div className="w-10 h-10 rounded-full bg-purple-500"></div>
                <div className="w-10 h-10 rounded-full bg-orange-500"></div>
            </div>

            <p className="mt-4 text-gray-600">
                8 Members Online
            </p>
        </BentoCard>

        <BentoCard title="Schedule">
          <p>3 Meetings Today</p>
        </BentoCard>

      </div>
    </div>
  );
}