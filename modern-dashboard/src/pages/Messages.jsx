import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter,
  Mail,
  MailOpen,
  Star,
  Archive,
  Trash2,
  Reply,
  Forward,
  MoreVertical,
  Clock,
  User,
  Phone,
  MessageSquare,
  Send,
  Paperclip,
  Smile
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

// Sample messages data
const messagesData = [
  {
    id: 1,
    sender: 'أحمد محمد',
    email: 'ahmed@example.com',
    subject: 'استفسار حول خدمات تطوير المواقع',
    message: 'السلام عليكم، أرغب في الاستفسار عن خدمات تطوير المواقع الإلكترونية وأسعارها. هل يمكنكم تزويدي بعرض سعر مفصل؟',
    timestamp: '2024-01-15T10:30:00Z',
    isRead: false,
    isStarred: true,
    priority: 'high',
    category: 'inquiry',
    phone: '+966501234567',
    attachments: []
  },
  {
    id: 2,
    sender: 'فاطمة العلي',
    email: 'fatima@company.com',
    subject: 'طلب عرض سعر لتطبيق جوال',
    message: 'مرحباً، نحن شركة ناشئة ونحتاج لتطوير تطبيق جوال لخدماتنا. هل يمكنكم مساعدتنا؟',
    timestamp: '2024-01-15T09:15:00Z',
    isRead: true,
    isStarred: false,
    priority: 'medium',
    category: 'quote',
    phone: '+966502345678',
    attachments: ['requirements.pdf']
  },
  {
    id: 3,
    sender: 'محمد السعد',
    email: 'mohammed@tech.com',
    subject: 'شراكة في مشروع تقني',
    message: 'أهلاً وسهلاً، لدينا مشروع تقني ونبحث عن شريك تقني. هل أنتم مهتمون؟',
    timestamp: '2024-01-14T16:45:00Z',
    isRead: true,
    isStarred: true,
    priority: 'high',
    category: 'partnership',
    phone: '+966503456789',
    attachments: []
  },
  {
    id: 4,
    sender: 'سارة أحمد',
    email: 'sara@design.com',
    subject: 'استشارة في تصميم UI/UX',
    message: 'مساء الخير، أحتاج استشارة في تصميم واجهة المستخدم لموقعي الجديد.',
    timestamp: '2024-01-14T14:20:00Z',
    isRead: false,
    isStarred: false,
    priority: 'low',
    category: 'consultation',
    phone: '+966504567890',
    attachments: ['mockup.png', 'wireframe.pdf']
  },
  {
    id: 5,
    sender: 'خالد الرشيد',
    email: 'khalid@business.com',
    subject: 'متابعة مشروع سابق',
    message: 'السلام عليكم، أود متابعة حالة المشروع الذي طلبته الأسبوع الماضي.',
    timestamp: '2024-01-13T11:30:00Z',
    isRead: true,
    isStarred: false,
    priority: 'medium',
    category: 'followup',
    phone: '+966505678901',
    attachments: []
  }
];

const priorityLabels = {
  high: 'عالية',
  medium: 'متوسطة',
  low: 'منخفضة'
};

const priorityColors = {
  high: 'bg-destructive/10 text-destructive',
  medium: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  low: 'bg-green-500/10 text-green-600 dark:text-green-400'
};

const categoryLabels = {
  inquiry: 'استفسار',
  quote: 'طلب عرض سعر',
  partnership: 'شراكة',
  consultation: 'استشارة',
  followup: 'متابعة',
  support: 'دعم فني'
};

export function Messages() {
  const [messages, setMessages] = useState(messagesData);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [replyText, setReplyText] = useState('');
  const [showCompose, setShowCompose] = useState(false);

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || 
                         (filterStatus === 'unread' && !message.isRead) ||
                         (filterStatus === 'read' && message.isRead) ||
                         (filterStatus === 'starred' && message.isStarred);
    const matchesPriority = filterPriority === 'all' || message.priority === filterPriority;
    const matchesCategory = filterCategory === 'all' || message.category === filterCategory;
    
    return matchesSearch && matchesStatus && matchesPriority && matchesCategory;
  });

  const handleMarkAsRead = (id) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, isRead: true } : msg
    ));
  };

  const handleToggleStar = (id) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, isStarred: !msg.isStarred } : msg
    ));
  };

  const handleDeleteMessage = (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذه الرسالة؟')) {
      setMessages(messages.filter(msg => msg.id !== id));
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage(null);
      }
    }
  };

  const handleSendReply = () => {
    if (replyText.trim() && selectedMessage) {
      // Here you would typically send the reply to your backend
      console.log('Sending reply:', replyText);
      setReplyText('');
      alert('تم إرسال الرد بنجاح!');
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      return 'اليوم';
    } else if (diffDays === 2) {
      return 'أمس';
    } else if (diffDays <= 7) {
      return `منذ ${diffDays} أيام`;
    } else {
      return date.toLocaleDateString('ar-SA');
    }
  };

  const getMessageStats = () => {
    const unreadCount = messages.filter(msg => !msg.isRead).length;
    const starredCount = messages.filter(msg => msg.isStarred).length;
    const highPriorityCount = messages.filter(msg => msg.priority === 'high').length;
    const todayCount = messages.filter(msg => {
      const today = new Date().toDateString();
      const msgDate = new Date(msg.timestamp).toDateString();
      return today === msgDate;
    }).length;
    
    return { unreadCount, starredCount, highPriorityCount, todayCount };
  };

  const stats = getMessageStats();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            إدارة الرسائل
          </h1>
          <p className="text-muted-foreground mt-1">
            إدارة جميع الرسائل والاستفسارات الواردة
          </p>
        </div>
        <Button 
          onClick={() => setShowCompose(true)}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          رسالة جديدة
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                الرسائل غير المقروءة
              </p>
              <p className="text-3xl font-bold text-primary">
                {stats.unreadCount}
              </p>
            </div>
            <div className="p-3 rounded-full bg-primary">
              <Mail className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                الرسائل المميزة
              </p>
              <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                {stats.starredCount}
              </p>
            </div>
            <div className="p-3 rounded-full bg-yellow-500">
              <Star className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                أولوية عالية
              </p>
              <p className="text-3xl font-bold text-destructive">
                {stats.highPriorityCount}
              </p>
            </div>
            <div className="p-3 rounded-full bg-destructive">
              <MessageSquare className="h-6 w-6 text-destructive-foreground" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                رسائل اليوم
              </p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                {stats.todayCount}
              </p>
            </div>
            <div className="p-3 rounded-full bg-green-500">
              <Clock className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1">
          <Card className="h-[600px] flex flex-col">
            {/* Search and Filters */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="البحث في الرسائل..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  dir="rtl"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="all">الكل</option>
                  <option value="unread">غير مقروءة</option>
                  <option value="read">مقروءة</option>
                  <option value="starred">مميزة</option>
                </select>
                
                <select
                  value={filterPriority}
                  onChange={(e) => setFilterPriority(e.target.value)}
                  className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="all">كل الأولويات</option>
                  <option value="high">عالية</option>
                  <option value="medium">متوسطة</option>
                  <option value="low">منخفضة</option>
                </select>
              </div>
            </div>

            {/* Messages List */}
            <div className="flex-1 overflow-y-auto">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => {
                    setSelectedMessage(message);
                    if (!message.isRead) {
                      handleMarkAsRead(message.id);
                    }
                  }}
                  className={`p-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                    selectedMessage?.id === message.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                  } ${
                    !message.isRead ? 'bg-blue-25 dark:bg-blue-950/30' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {!message.isRead && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        )}
                        <User className="h-4 w-4 text-gray-400" />
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white text-sm">
                        {message.sender}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleStar(message.id);
                        }}
                        className={`p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
                          message.isStarred ? 'text-yellow-500' : 'text-gray-400'
                        }`}
                      >
                        <Star className="h-4 w-4" fill={message.isStarred ? 'currentColor' : 'none'} />
                      </button>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {formatDate(message.timestamp)}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1 truncate">
                    {message.subject}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-xs line-clamp-2">
                    {message.message}
                  </p>
                  
                  <div className="flex items-center justify-between mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[message.priority]}`}>
                      {priorityLabels[message.priority]}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {categoryLabels[message.category]}
                    </span>
                  </div>
                </div>
              ))}
              
              {filteredMessages.length === 0 && (
                <div className="p-8 text-center">
                  <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    لا توجد رسائل تطابق معايير البحث
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2">
          {selectedMessage ? (
            <Card className="h-[600px] flex flex-col">
              {/* Message Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedMessage.subject}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{selectedMessage.sender}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>{selectedMessage.email}</span>
                      </div>
                      {selectedMessage.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          <span>{selectedMessage.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Reply className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Forward className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Archive className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDeleteMessage(selectedMessage.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${priorityColors[selectedMessage.priority]}`}>
                    {priorityLabels[selectedMessage.priority]}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                    {categoryLabels[selectedMessage.category]}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(selectedMessage.timestamp).toLocaleString('ar-SA')}
                  </span>
                </div>
              </div>

              {/* Message Content */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedMessage.message}
                  </p>
                </div>
                
                {selectedMessage.attachments.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                      المرفقات ({selectedMessage.attachments.length})
                    </h4>
                    <div className="space-y-2">
                      {selectedMessage.attachments.map((attachment, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <Paperclip className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {attachment}
                          </span>
                          <Button variant="ghost" size="sm" className="mr-auto">
                            تحميل
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Reply Section */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="space-y-4">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="اكتب ردك هنا..."
                    className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none"
                    dir="rtl"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Paperclip className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Smile className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button 
                      onClick={handleSendReply}
                      disabled={!replyText.trim()}
                      className="flex items-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      إرسال الرد
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="h-[600px] flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  اختر رسالة لعرضها
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  اختر رسالة من القائمة لعرض تفاصيلها والرد عليها
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}