
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

export default function ProviderDashboard() {
  return (
    <Layout>
      <div id="provider-dashboard" className="bg-gray-50">
        <header id="header" className="bg-white border-b border-gray-200 fixed w-full z-50">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <img src="/logo.svg" alt="Irugoo" className="h-8" />
              <nav className="hidden md:flex space-x-6">
                <span className="text-blue-600 font-medium cursor-pointer">Dashboard</span>
                <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Listings</span>
                <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Bookings</span>
                <span className="text-gray-600 hover:text-blue-600 cursor-pointer">Messages</span>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <i className="fa-regular fa-bell text-xl"></i>
              </button>
              <div className="flex items-center space-x-3">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" className="w-10 h-10 rounded-full" alt="Profile" />
                <span className="font-medium">John's Hotel</span>
              </div>
            </div>
          </div>
        </header>
        <main className="pt-20 px-6 pb-8">
          <section id="business-overview" className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Total Revenue</h3>
                  <span className="text-gray-500">This Month</span>
                </div>
                <div className="flex items-end space-x-3">
                  <span className="text-3xl font-bold">$24,500</span>
                  <span className="text-green-500 flex items-center">
                    <i className="fa-solid fa-arrow-up mr-1"></i>12%
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
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="recent-bookings" className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
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
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" className="w-8 h-8 rounded-full mr-3" alt="Sarah" />
                        <span>Sarah Johnson</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">Deluxe Suite 401</td>
                    <td className="px-6 py-4">Jan 15, 2025</td>
                    <td className="px-6 py-4">Jan 18, 2025</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm">Confirmed</span>
                    </td>
                    <td className="px-6 py-4">$420</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" className="w-8 h-8 rounded-full mr-3" alt="Michael" />
                        <span>Michael Chen</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">Standard Room 203</td>
                    <td className="px-6 py-4">Jan 16, 2025</td>
                    <td className="px-6 py-4">Jan 17, 2025</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Checking In</span>
                    </td>
                    <td className="px-6 py-4">$180</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section id="quick-actions" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Quick Actions</h3>
              </div>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-colors">
                  <div className="flex items-center">
                    <i className="fa-solid fa-plus-circle text-blue-600 text-xl mr-3"></i>
                    <span>Add New Listing</span>
                  </div>
                  <i className="fa-solid fa-chevron-right text-gray-400"></i>
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-colors">
                  <div className="flex items-center">
                    <i className="fa-solid fa-calendar text-blue-600 text-xl mr-3"></i>
                    <span>Manage Calendar</span>
                  </div>
                  <i className="fa-solid fa-chevron-right text-gray-400"></i>
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-colors">
                  <div className="flex items-center">
                    <i className="fa-solid fa-message text-blue-600 text-xl mr-3"></i>
                    <span>Message Center</span>
                  </div>
                  <i className="fa-solid fa-chevron-right text-gray-400"></i>
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Recent Messages</h3>
                <span className="text-sm text-blue-600 cursor-pointer">View All</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg" className="w-10 h-10 rounded-full" alt="Emma" />
                  <div>
                    <h4 className="font-medium">Emma Wilson</h4>
                    <p className="text-sm text-gray-500">Question about room service...</p>
                    <span className="text-xs text-gray-400">2 min ago</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" className="w-10 h-10 rounded-full" alt="David" />
                  <div>
                    <h4 className="font-medium">David Kim</h4>
                    <p className="text-sm text-gray-500">Requesting early check-in...</p>
                    <span className="text-xs text-gray-400">1 hour ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">System Updates</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-2">
                    <i className="fa-solid fa-info-circle text-blue-600 mr-2"></i>
                    <h4 className="font-medium">New Feature Available</h4>
                  </div>
                  <p className="text-sm text-gray-600">POS system update available with new features.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-center mb-2">
                    <i className="fa-solid fa-check-circle text-green-600 mr-2"></i>
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
