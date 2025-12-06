import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Star, 
  Code, 
  Palette, 
  Database, 
  Smartphone,
  Globe,
  TrendingUp
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

// Sample expertise data
const expertiseData = [
  {
    id: 1,
    name: 'React.js',
    nameAr: 'React.js',
    category: 'Frontend Development',
    categoryAr: 'تطوير الواجهات الأمامية',
    level: 'expert',
    yearsOfExperience: 5,
    icon: 'Code',
    description: 'مكتبة JavaScript لبناء واجهات المستخدم التفاعلية',
    projects: ['1', '2', '3'],
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Node.js',
    nameAr: 'Node.js',
    category: 'Backend Development',
    categoryAr: 'تطوير الخادم',
    level: 'advanced',
    yearsOfExperience: 4,
    icon: 'Database',
    description: 'بيئة تشغيل JavaScript للخادم',
    projects: ['1', '4'],
    color: 'bg-green-500'
  },
  {
    id: 3,
    name: 'UI/UX Design',
    nameAr: 'تصميم واجهات المستخدم',
    category: 'Design',
    categoryAr: 'التصميم',
    level: 'advanced',
    yearsOfExperience: 6,
    icon: 'Palette',
    description: 'تصميم تجربة وواجهة المستخدم',
    projects: ['2', '3', '5'],
    color: 'bg-purple-500'
  },
  {
    id: 4,
    name: 'React Native',
    nameAr: 'React Native',
    category: 'Mobile Development',
    categoryAr: 'تطوير تطبيقات الجوال',
    level: 'intermediate',
    yearsOfExperience: 3,
    icon: 'Smartphone',
    description: 'إطار عمل لتطوير تطبيقات الجوال',
    projects: ['2'],
    color: 'bg-indigo-500'
  },
  {
    id: 5,
    name: 'Digital Marketing',
    nameAr: 'التسويق الرقمي',
    category: 'Marketing',
    categoryAr: 'التسويق',
    level: 'intermediate',
    yearsOfExperience: 2,
    icon: 'TrendingUp',
    description: 'استراتيجيات التسويق الرقمي ووسائل التواصل',
    projects: ['4', '5'],
    color: 'bg-pink-500'
  },
  {
    id: 6,
    name: 'MongoDB',
    nameAr: 'MongoDB',
    category: 'Database',
    categoryAr: 'قواعد البيانات',
    level: 'advanced',
    yearsOfExperience: 4,
    icon: 'Database',
    description: 'قاعدة بيانات NoSQL مرنة وقابلة للتطوير',
    projects: ['1', '3'],
    color: 'bg-green-600'
  }
];

const levelLabels = {
  beginner: 'مبتدئ',
  intermediate: 'متوسط',
  advanced: 'متقدم',
  expert: 'خبير'
};

const levelColors = {
  beginner: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  intermediate: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  advanced: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  expert: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
};

const getIcon = (iconName) => {
  const icons = {
    Code,
    Palette,
    Database,
    Smartphone,
    Globe,
    TrendingUp
  };
  return icons[iconName] || Code;
};

export function Expertise() {
  const [expertise, setExpertise] = useState(expertiseData);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');

  const categories = [...new Set(expertise.map(item => item.categoryAr))];

  const filteredExpertise = expertise.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.nameAr.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.categoryAr === categoryFilter;
    const matchesLevel = levelFilter === 'all' || item.level === levelFilter;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const handleDeleteExpertise = (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذه الخبرة؟')) {
      setExpertise(expertise.filter(item => item.id !== id));
    }
  };

  const getExperienceStats = () => {
    const totalYears = expertise.reduce((sum, item) => sum + item.yearsOfExperience, 0);
    const avgYears = totalYears / expertise.length;
    const expertLevel = expertise.filter(item => item.level === 'expert').length;
    const totalProjects = expertise.reduce((sum, item) => sum + item.projects.length, 0);
    
    return { totalYears, avgYears: avgYears.toFixed(1), expertLevel, totalProjects };
  };

  const stats = getExperienceStats();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            إدارة الخبرات
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            إدارة وتتبع جميع خبراتك ومهاراتك
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          إضافة خبرة جديدة
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                إجمالي الخبرات
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {expertise.length}
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
                متوسط سنوات الخبرة
              </p>
              <p className="text-3xl font-bold text-green-600">
                {stats.avgYears}
              </p>
            </div>
            <div className="p-3 rounded-full bg-green-500">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                مستوى خبير
              </p>
              <p className="text-3xl font-bold text-purple-600">
                {stats.expertLevel}
              </p>
            </div>
            <div className="p-3 rounded-full bg-purple-500">
              <Star className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                المشاريع المرتبطة
              </p>
              <p className="text-3xl font-bold text-yellow-600">
                {stats.totalProjects}
              </p>
            </div>
            <div className="p-3 rounded-full bg-yellow-500">
              <Globe className="h-6 w-6 text-white" />
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
              placeholder="البحث في الخبرات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              dir="rtl"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="all">جميع الفئات</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="all">جميع المستويات</option>
              <option value="beginner">مبتدئ</option>
              <option value="intermediate">متوسط</option>
              <option value="advanced">متقدم</option>
              <option value="expert">خبير</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Expertise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExpertise.map((item) => {
          const IconComponent = getIcon(item.icon);
          return (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${item.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                        {item.nameAr}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.categoryAr}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Level and Experience */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[item.level]}`}>
                    {levelLabels[item.level]}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {item.yearsOfExperience} سنوات خبرة
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {item.description}
                </p>

                {/* Experience Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      مستوى الخبرة
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.yearsOfExperience}/10
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div 
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${Math.min((item.yearsOfExperience / 10) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Projects Count */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>المشاريع المرتبطة:</span>
                  <span className="font-medium">{item.projects.length} مشروع</span>
                </div>
              </div>

              {/* Actions */}
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDeleteExpertise(item.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button size="sm" variant="outline">
                    عرض المشاريع
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredExpertise.length === 0 && (
        <Card className="p-12 text-center">
          <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <Star className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            لا توجد خبرات
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {searchTerm || categoryFilter !== 'all' || levelFilter !== 'all'
              ? 'لم يتم العثور على خبرات تطابق معايير البحث'
              : 'ابدأ بإضافة خبرتك الأولى'
            }
          </p>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            إضافة خبرة جديدة
          </Button>
        </Card>
      )}

      {/* Skills Distribution Chart */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          توزيع المهارات حسب الفئة
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(category => {
            const categoryItems = expertise.filter(item => item.categoryAr === category);
            const avgLevel = categoryItems.reduce((sum, item) => {
              const levelValues = { beginner: 1, intermediate: 2, advanced: 3, expert: 4 };
              return sum + levelValues[item.level];
            }, 0) / categoryItems.length;
            
            return (
              <div key={category} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  {category}
                </h4>
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>{categoryItems.length} مهارة</span>
                  <span>متوسط: {avgLevel.toFixed(1)}/4</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2 dark:bg-gray-700">
                  <div 
                    className="h-2 rounded-full bg-blue-500"
                    style={{ width: `${(avgLevel / 4) * 100}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}