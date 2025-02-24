
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { 
  Bell, 
  ArrowUpRight, 
  ChevronRight,
  Calendar,
  MessageSquare,
  PlusCircle,
  Star,
  InfoIcon,
  CheckCircle
} from 'lucide-react';

interface BookingType {
  guest: {
    name: string;
    avatar: string;
  };
  room: string;
  checkIn: string;
  checkOut: string;
  status: 'Confirmed' | 'Checking In';
  amount: string;
}

interface MessageType {
  user: {
    name: string;
    avatar: string;
  };
  message: string;
  time: string;
}

const recentBookings: BookingType[] = [
  {
    guest: {
      name: "Sarah Johnson",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
    },
    room: "Deluxe Suite 401",
    checkIn: "Jan 15, 2025",
    checkOut: "Jan 18, 2025",
    status: "Confirmed",
    amount: "$420"
  },
  {
    guest: {
      name: "Michael Chen",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
    },
    room: "Standard Room 203",
    checkIn: "Jan 16, 2025",
    checkOut: "Jan 17, 2025",
    status: "Checking In",
    amount: "$180"
  }
];

const recentMessages: MessageType[] = [
  {
    user: {
      name: "Emma Wilson",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"
    },
    message: "Question about room service...",
    time: "2 min ago"
  },
  {
    user: {
      name: "David Kim",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
    },
    message: "Requesting early check-in...",
    time: "1 hour ago"
  }
];

export default function ProviderDashboard() {
  return (
    <Layout>
      <div className="bg-gray-50">
        <main className="pt-20 px-6 pb-8">
          {/* Business Overview Section */}
          <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Total Revenue</h3>
                  <span className="text-gray-500">This Month</span>
                </div>
                <div className="flex items-end space-x-3">
                  <span className="text-3xl font-bold">$24,500</span>
                  <span className="text-green-500 flex items-center">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    12%
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Active Bookings</h3>
                  <span className="text-gray-500">Today</span>
                </div>
                <div className="flex items-end space-x-3">
                  <span className="text-3xl font-bold">18</span>
                  <span className="text-blue-600">Active Now</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Reviews</h3>
                  <span className="text-gray-500">Overall</span>
                </div>
                <div className="flex items-end space-x-3">
                  <span className="text-3xl font-bold">4.8</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Bookings Section */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Recent Bookings</h2>
                <button className="text-blue-600 hover:text-blue-700">View All</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Guest</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Room</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Check In</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Check Out</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentBookings.map((booking, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img src={booking.guest.avatar} className="w-8 h-8 rounded-full mr-3" alt={booking.guest.name} />
                          <span>{booking.guest.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">{booking.room}</td>
                      <td className="px-6 py-4">{booking.checkIn}</td>
                      <td className="px-6 py-4">{booking.checkOut}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-sm ${
                          booking.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">{booking.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Quick Actions Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Quick Actions</h3>
              </div>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-colors">
                  <div className="flex items-center">
                    <PlusCircle className="text-blue-600 w-5 h-5 mr-3" />
                    <span>Add New Listing</span>
                  </div>
                  <ChevronRight className="text-gray-400 w-5 h-5" />
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-colors">
                  <div className="flex items-center">
                    <Calendar className="text-blue-600 w-5 h-5 mr-3" />
                    <span>Manage Calendar</span>
                  </div>
                  <ChevronRight className="text-gray-400 w-5 h-5" />
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-colors">
                  <div className="flex items-center">
                    <MessageSquare className="text-blue-600 w-5 h-5 mr-3" />
                    <span>Message Center</span>
                  </div>
                  <ChevronRight className="text-gray-400 w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Recent Messages */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Recent Messages</h3>
                <span className="text-sm text-blue-600 cursor-pointer">View All</span>
              </div>
              <div className="space-y-4">
                {recentMessages.map((message, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <img src={message.user.avatar} className="w-10 h-10 rounded-full" alt={message.user.name} />
                    <div>
                      <h4 className="font-medium">{message.user.name}</h4>
                      <p className="text-sm text-gray-500">{message.message}</p>
                      <span className="text-xs text-gray-400">{message.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Updates */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">System Updates</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-2">
                    <InfoIcon className="text-blue-600 w-5 h-5 mr-2" />
                    <h4 className="font-medium">New Feature Available</h4>
                  </div>
                  <p className="text-sm text-gray-600">POS system update available with new features.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="text-green-600 w-5 h-5 mr-2" />
                    <h4 className="font-medium">System Status</h4>
                  </div>
                  <p className="text-sm text-gray-600">All systems operating normally</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
