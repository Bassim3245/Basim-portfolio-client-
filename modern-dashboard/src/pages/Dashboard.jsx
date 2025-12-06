import React from 'react';
import { 
  FolderOpen, 
  Briefcase, 
  MessageSquare, 
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Calendar
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

// Sample data
const statsData = [
  {
    title: 'إجمالي المشاريع',
    value: '24',
    change: '+12%',
    changeType: 'positive',
    icon: FolderOpen,
    color: 'bg-blue-500'
  },
  {
    title: 'الخدمات النشطة',
    value: '8',
    change: '+5%',
    changeType: 'positive',
    icon: Briefcase,
    color: 'bg-green-500'
  },
  {
    title: 'الرسائل الجديدة',
    value: '12',
    change: '+8%',
    changeType: 'positive',
    icon: MessageSquare,
    color: 'bg-yellow-500'
  },
  {
    title: 'معدل النمو',
    value: '18%',
    change: '+3%',
    changeType: 'positive',
    icon: TrendingUp,
    color: 'bg-purple-500'
  }
];

const monthlyData = [
  { name: 'يناير', projects: 4, revenue: 2400 },
  { name: 'فبراير', projects: 3, revenue: 1398 },
  { name: 'مارس', projects: 6, revenue: 9800 },
  { name: 'أبريل', projects: 8, revenue: 3908 },
  { name: 'مايو', projects: 5, revenue: 4800 },
  { name: 'يونيو', projects: 7, revenue: 3800 },
];

const projectStatusData = [
  { name: 'مكتملة', value: 15, color: '#10B981' },
  { name: 'قيد التنفيذ', value: 6, color: '#F59E0B' },
  { name: 'مخطط لها', value: 3, color: '#6B7280' },
];

const recentActivities = [
  {
    id: 1,
    type: 'project',
    title: 'تم إنشاء مشروع جديد',
    description: 'موقع التجارة الإلكترونية',
    time: 'منذ ساعتين',
    icon: FolderOpen,
    color: 'text-blue-600'
  },
  {
    id: 2,
    type: 'message',
    title: 'رسالة جديدة من العميل',
    description: 'استفسار حول الخدمات',
    time: 'منذ 4 ساعات',
    icon: MessageSquare,
    color: 'text-green-600'
  },
  {
    id: 3,
    type: 'service',
    title: 'تم تحديث خدمة',
    description: 'تطوير تطبيقات الجوال',
    time: 'منذ يوم',
    icon: Briefcase,
    color: 'text-purple-600'
  }
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            لوحة التحكم
          </h1>
          <p className="text-muted-foreground mt-1">
            مرحباً بك في لوحة التحكم الخاصة بك
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            هذا الشهر
          </Button>
          <Button>
            <Activity className="h-4 w-4 mr-2" />
            تقرير مفصل
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-foreground mt-2">
                    {stat.value}
                  </p>
                  <p className={`text-sm mt-1 ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} من الشهر الماضي
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Projects Chart */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">
              المشاريع الشهرية
            </h3>
            <Button variant="ghost" size="sm">
              عرض التفاصيل
            </Button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="projects" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Project Status Pie Chart */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">
              حالة المشاريع
            </h3>
            <Button variant="ghost" size="sm">
              عرض الكل
            </Button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={projectStatusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {projectStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-4">
            {projectStatusData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-muted-foreground">
                  {item.name} ({item.value})
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activities and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">
              الأنشطة الأخيرة
            </h3>
            <Button variant="ghost" size="sm">
              عرض الكل
            </Button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent transition-colors">
                  <div className={`p-2 rounded-full bg-muted ${activity.color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">
                      {activity.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            إجراءات سريعة
          </h3>
          <div className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <FolderOpen className="h-4 w-4 mr-2" />
              إضافة مشروع جديد
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Briefcase className="h-4 w-4 mr-2" />
              إضافة خدمة جديدة
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MessageSquare className="h-4 w-4 mr-2" />
              عرض الرسائل
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="h-4 w-4 mr-2" />
              إدارة الفريق
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}