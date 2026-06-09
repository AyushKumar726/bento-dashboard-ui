import BentoCard from "./BentoCard.jsx";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-200">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Welcome Back, Ayush 👋
        </h1>

        <p className="text-gray-600 mt-2">
          SSC SmartVyapaar Analytics Dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Analytics */}
        <div className="lg:col-span-2 lg:row-span-2">
          <BentoCard title="Analytics">

            <p className="text-5xl font-bold text-blue-600">
              24,500
            </p>

            <p className="text-pink-500 mt-2">
              Total Visitors
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Today</p>
                <p className="text-2xl font-bold text-blue-600">
                  1,240
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Growth</p>
                <p className="text-2xl font-bold text-green-600">
                  +12%
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Weekly Performance</span>

                <span className="font-semibold text-green-600">
                  +8.4%
                </span>
              </div>

              <div className="flex items-end gap-3 h-24">
                <div className="w-8 h-10 bg-blue-300 rounded-t-lg hover:scale-110 transition-all duration-300"></div>
                <div className="w-8 h-16 bg-blue-400 rounded-t-lg hover:scale-110 transition-all duration-300"></div>
                <div className="w-8 h-14 bg-blue-500 rounded-t-lg hover:scale-110 transition-all duration-300"></div>
                <div className="w-8 h-20 bg-blue-600 rounded-t-lg hover:scale-110 transition-all duration-300"></div>
                <div className="w-8 h-[72px] bg-indigo-500 rounded-t-lg hover:scale-110 transition-all duration-300"></div>
                <div className="w-8 h-24 bg-indigo-600 rounded-t-lg hover:scale-110 transition-all duration-300"></div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Bounce Rate
                  </p>

                  <p className="font-bold text-red-500">
                    32%
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Avg Session
                  </p>

                  <p className="font-bold">
                    4m 12s
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Conversions
                  </p>

                  <p className="font-bold text-green-600">
                    8.7%
                  </p>
                </div>
              </div>
            </div>

          </BentoCard>
        </div>

        {/* Revenue */}
        <div className="lg:col-span-2">
          <BentoCard title="Revenue">

            <p className="text-5xl font-bold text-green-600">
              $45,670
            </p>

            <p className="text-gray-500 mt-2">
              This Month
            </p>

            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Revenue Goal</span>
                <span>91%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full w-[91%] hover:w-[94%] transition-all duration-300"></div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-gray-500">
                  Customers
                </p>

                <p className="font-bold">
                  1,248
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Orders
                </p>

                <p className="font-bold">
                  856
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Refunds
                </p>

                <p className="font-bold text-red-500">
                  12
                </p>
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Target
                </p>

                <p className="font-semibold">
                  $50K
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Progress
                </p>

                <p className="font-semibold text-green-600">
                  91%
                </p>
              </div>
            </div>

          </BentoCard>
        </div>

        {/* Activity */}
        <BentoCard title="Activity">

          <p className="text-4xl font-bold text-indigo-600">
            120
          </p>

          <p className="text-gray-500 mt-1">
            New Actions Today
          </p>

          <div className="mt-4 space-y-3">

            <div className="flex justify-between text-sm">
              <span>✅ Tasks Completed</span>
              <span className="font-semibold text-green-600">
                86
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span>🟠 Pending Reviews</span>
              <span className="font-semibold text-orange-500">
                24
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span>🎫 New Tickets</span>
              <span className="font-semibold text-blue-600">
                10
              </span>
            </div>

          </div>

          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1">
              <span>Daily Progress</span>
              <span>72%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-indigo-500 h-2 rounded-full w-[72%] hover:w-[76%] transition-all duration-300"></div>
            </div>
          </div>

        </BentoCard>

        {/* Notifications */}
        <BentoCard title="Notifications">

          <div className="flex items-center justify-between">
            <span className="text-gray-600">
              Unread Alerts
            </span>

            <span className="bg-red-500 text-white px-3 py-1 rounded-full">
              12
            </span>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <p>📩 New client message</p>
            <p>⚠️ System maintenance alert</p>
            <p>✅ Project approved</p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            5 new messages and 7 system alerts.
          </p>

        </BentoCard>

        {/* Team */}
        <BentoCard title="Team">

          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-full bg-blue-500 hover:scale-110 transition-all"></div>
            <div className="w-10 h-10 rounded-full bg-green-500 hover:scale-110 transition-all"></div>
            <div className="w-10 h-10 rounded-full bg-red-500 hover:scale-110 transition-all"></div>
            <div className="w-10 h-10 rounded-full bg-yellow-500 hover:scale-110 transition-all"></div>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Design Team</span>
              <span>3 Online</span>
            </div>

            <div className="flex justify-between">
              <span>Developers</span>
              <span>5 Online</span>
            </div>
          </div>

          <p className="mt-4 text-gray-600">
            8 Members Online
          </p>

          <div className="mt-2 text-sm text-green-600 font-medium">
            ● Active Now
          </div>

        </BentoCard>

        {/* Schedule */}
        <BentoCard title="Schedule">

          <p className="text-4xl font-bold text-orange-500">
            3
          </p>

          <p className="text-gray-500">
            Meetings Today
          </p>

          <div className="mt-4 p-3 bg-orange-50 rounded-xl">
            <p className="text-xs text-gray-500">
              Next Meeting
            </p>

            <p className="font-semibold">
              09:00 AM - Team Sync
            </p>
          </div>

          <div className="mt-4 text-sm space-y-1">
            <p>09:00 AM - Team Sync</p>
            <p>01:00 PM - Client Call</p>
            <p>04:00 PM - Review Meeting</p>
          </div>

        </BentoCard>

      </div>

      {/* Footer */}
      <div className="mt-10 text-center text-sm text-gray-500">
        Built with React + Tailwind CSS • SSC Frontend Internship Task
      </div>

    </div>
  );
}