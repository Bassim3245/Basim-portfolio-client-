import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  DollarSign,
  Clock,
  Star,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

// Sample services data
const servicesData = [
  {
    id: 1,
    title: 'تطوير المواقع الإلكترونية',
    titleEn: 'Web Development',
    description: 'تطوير مواقع إلكترونية حديثة ومتجاوبة باستخدام أحدث التقنيات',
    icon: '🌐',
    price: 5000,
    duration: '4-6 أسابيع',
    features: [
      'تصميم متجاوب',
      'تحسين محركات البحث',
      'لوحة تحكم إدارية',
      'دعم فني لمدة سنة'
    ],
    active: true,
    orders: 15,
    rating: 4.8
  },
  {
    id: 2,
    title: 'تطوير تطبيقات الجوال',
    titleEn: 'Mobile App Development',
    description: 'تطوير تطبيقات جوال أصلية ومتعددة المنصات',
    icon: '📱',
    price: 8000,
    duration: '6-8 أسابيع',
    features: [
      'تطبيق iOS و Android',
      'واجهة مستخدم حديثة',
      'تكامل مع APIs',
      'نشر في المتاجر'
    ],
    active: true,
    orders: 8,
    rating: 4.9
  },
  {
    id: 3,
    title: 'تصميم الهوية البصرية',
    titleEn: 'Brand Identity Design',
    description: 'تصميم هوية بصرية متكاملة للشركات والمؤسسات',
    icon: '🎨',
    price: 2500,
    duration: '2-3 أسابيع',
    features: [
      'تصميم الشعار',
      'دليل الهوية البصرية',
      'تصميم المطبوعات',
      'ملفات قابلة للتعديل'
    ],
    active: false,
    orders: 12,
    rating: 4.7
  },
  {
    id: 4,
    title: 'التسويق الرقمي',
    titleEn: 'Digital Marketing',
    description: 'خدمات التسويق الرقمي وإدارة وسائل التواصل الاجتماعي',
    icon: '📈',
    price: 3000,
    duration: 'شهرياً',
    features: [
      'إدارة وسائل التواصل',
      'إعلانات مدفوعة',
      'تحليل الأداء',
      'تقارير شهرية'
    ],
    active: true,
    orders: 20,
    rating: 4.6
  }
];

export function Services() {
  const [services, setServices] = useState(servicesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'active' && service.active) ||
                         (statusFilter === 'inactive' && !service.active);
    return matchesSearch && matchesStatus;
  });

  const handleToggleStatus = (id) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, active: !service.active } : service
    ));
  };

  const handleDeleteService = (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذه الخدمة؟')) {
      setServices(services.filter(service => service.id !== id));
    }
  };

  const totalRevenue = services.reduce((sum, service) => sum + (service.price * service.orders), 0);
  const activeServices = services.filter(s => s.active).length;
  const totalOrders = services.reduce((sum, service) => sum + service.orders, 0);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            إدارة الخدمات
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            إدارة وتتبع جميع خدماتك
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          إضافة خدمة جديدة
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                إجمالي الخدمات
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {services.length}
              </p>
            </div>
            <div className="p-3 rounded-full bg-blue-500">
              <Star className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                الخدمات النشطة
              </p>
              <p className="text-3xl font-bold text-green-600">
                {activeServices}
              </p>
            </div>
            <div className="p-3 rounded-full bg-green-500">
              <ToggleRight className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                إجمالي الطلبات
              </p>
              <p className="text-3xl font-bold text-purple-600">
                {totalOrders}
              </p>
            </div>
            <div className="p-3 rounded-full bg-purple-500">
              <Clock className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                إجمالي الإيرادات
              </p>
              <p className="text-3xl font-bold text-yellow-600">
                {totalRevenue.toLocaleString()} ر.س
              </p>
            </div>
            <div className="p-3 rounded-full bg-yellow-500">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="البحث في الخدمات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              dir="rtl"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="all">جميع الخدمات</option>
            <option value="active">نشطة</option>
            <option value="inactive">غير نشطة</option>
          </select>
        </div>
      </Card>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            {/* Service Header */}
            <div className="p-6 pb-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{service.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        service.active 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                        {service.active ? 'نشطة' : 'غير نشطة'}
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleToggleStatus(service.id)}
                >
                  {service.active ? (
                    <ToggleRight className="h-5 w-5 text-green-600" />
                  ) : (
                    <ToggleLeft className="h-5 w-5 text-gray-400" />
                  )}
                </Button>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {service.description}
              </p>

              {/* Price and Duration */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-green-600">
                  <DollarSign className="h-4 w-4" />
                  <span className="font-bold">{service.price.toLocaleString()} ر.س</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{service.duration}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">
                  المميزات:
                </h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-sm text-gray-500 dark:text-gray-400">
                      +{service.features.length - 3} مميزات أخرى
                    </li>
                  )}
                </ul>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{service.rating}</span>
                </div>
                <span>{service.orders} طلب</span>
              </div>
            </div>

            {/* Actions */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleDeleteService(service.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <Button size="sm">
                  تعديل السعر
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredServices.length === 0 && (
        <Card className="p-12 text-center">
          <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <Star className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            لا توجد خدمات
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {searchTerm || statusFilter !== 'all' 
              ? 'لم يتم العثور على خدمات تطابق معايير البحث'
              : 'ابدأ بإضافة خدمتك الأولى'
            }
          </p>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            إضافة خدمة جديدة
          </Button>
        </Card>
      )}
    </div>
  );
}