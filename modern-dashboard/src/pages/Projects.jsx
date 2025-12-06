import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  ExternalLink,
  Calendar,
  User,
  Tag
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

// Sample projects data
const projectsData = [
  {
    id: 1,
    title: 'موقع التجارة الإلكترونية',
    titleEn: 'E-commerce Website',
    description: 'متجر إلكتروني متكامل للبيع أونلاين',
    client: 'شركة التقنية المتقدمة',
    status: 'completed',
    startDate: '2024-01-15',
    endDate: '2024-03-20',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/api/placeholder/400/250',
    projectUrl: 'https://example.com',
    featured: true
  },
  {
    id: 2,
    title: 'تطبيق إدارة المهام',
    titleEn: 'Task Management App',
    description: 'تطبيق لإدارة المهام والمشاريع للفرق',
    client: 'شركة الإبداع',
    status: 'in-progress',
    startDate: '2024-02-01',
    endDate: null,
    technologies: ['React Native', 'Firebase', 'Redux'],
    image: '/api/placeholder/400/250',
    projectUrl: null,
    featured: false
  },
  {
    id: 3,
    title: 'نظام إدارة المحتوى',
    titleEn: 'Content Management System',
    description: 'نظام إدارة محتوى مخصص للمواقع',
    client: 'مؤسسة الرقمية',
    status: 'planned',
    startDate: '2024-04-01',
    endDate: null,
    technologies: ['Next.js', 'PostgreSQL', 'Prisma'],
    image: '/api/placeholder/400/250',
    projectUrl: null,
    featured: true
  }
];

const statusOptions = [
  { value: 'all', label: 'جميع المشاريع' },
  { value: 'completed', label: 'مكتملة' },
  { value: 'in-progress', label: 'قيد التنفيذ' },
  { value: 'planned', label: 'مخطط لها' }
];

const getStatusColor = (status) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'in-progress':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'planned':
      return 'bg-muted text-muted-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const getStatusLabel = (status) => {
  switch (status) {
    case 'completed':
      return 'مكتمل';
    case 'in-progress':
      return 'قيد التنفيذ';
    case 'planned':
      return 'مخطط له';
    default:
      return status;
  }
};

export function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDeleteProject = (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
      setProjects(projects.filter(project => project.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            إدارة المشاريع
          </h1>
          <p className="text-muted-foreground mt-1">
            إدارة وتتبع جميع مشاريعك
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          إضافة مشروع جديد
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="البحث في المشاريع..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
              dir="rtl"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
            >
              {statusOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              المزيد من الفلاتر
            </Button>
          </div>
        </div>
      </Card>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            {/* Project Image */}
            <div className="relative h-48 bg-muted">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 right-4">
                {project.featured && (
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    مميز
                  </span>
                )}
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {project.client}
                </p>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Status and Date */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {getStatusLabel(project.status)}
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(project.startDate).toLocaleDateString('ar-SA')}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-muted-foreground text-xs px-2 py-1">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
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
                    onClick={() => handleDeleteProject(project.id)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                {project.projectUrl && (
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <Card className="p-12 text-center">
          <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
            <Tag className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">
            لا توجد مشاريع
          </h3>
          <p className="text-muted-foreground mb-6">
            {searchTerm || statusFilter !== 'all' 
              ? 'لم يتم العثور على مشاريع تطابق معايير البحث'
              : 'ابدأ بإضافة مشروعك الأول'
            }
          </p>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            إضافة مشروع جديد
          </Button>
        </Card>
      )}

      {/* Projects Summary */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">
              {projects.length}
            </div>
            <div className="text-sm text-muted-foreground">
              إجمالي المشاريع
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {projects.filter(p => p.status === 'completed').length}
            </div>
            <div className="text-sm text-muted-foreground">
              مشاريع مكتملة
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {projects.filter(p => p.status === 'in-progress').length}
            </div>
            <div className="text-sm text-muted-foreground">
              قيد التنفيذ
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-muted-foreground">
              {projects.filter(p => p.status === 'planned').length}
            </div>
            <div className="text-sm text-muted-foreground">
              مخطط لها
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}