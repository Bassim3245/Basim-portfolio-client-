import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { cn } from '../../lib/utils';

export function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Function to handle mobile sidebar toggle
  const handleMobileSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to handle desktop sidebar toggle
  const handleDesktopSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Combined function for header button
  const handleSidebarToggle = () => {
    // On mobile: toggle open/close
    // On desktop: toggle collapse/expand
    if (window.innerWidth < 1024) {
      handleMobileSidebarToggle();
    } else {
      handleDesktopSidebarToggle();
    }
  };

  return (
    <div className="relative flex h-screen bg-background" dir="rtl">
      {/* Sidebar */}
      <div className={cn(
        "hidden lg:block transition-all duration-300 ease-in-out",
        sidebarCollapsed ? "lg:w-16" : "lg:w-72"
      )}>
        <Sidebar
          open={sidebarOpen}
          collapsed={sidebarCollapsed}
          onToggleCollapse={handleDesktopSidebarToggle}
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out">
        {/* Header */}
        <Header
          onMenuClick={handleMobileSidebarToggle}
          onDesktopToggle={handleDesktopSidebarToggle}
          sidebarCollapsed={sidebarCollapsed}
        />

        {/* Main Content Area */}
        <main className={cn(
          "flex-1 overflow-x-hidden overflow-y-auto bg-background",
          "transition-all duration-300 ease-in-out",
          // Add subtle scale effect when sidebar changes
          "transform-gpu"
        )}>
          <div className={cn(
            "container mx-auto px-6 py-8 transition-all duration-300 ease-in-out",
            // Adjust padding based on sidebar state for better spacing
            sidebarCollapsed ? "lg:px-8 lg:max-w-none" : "lg:px-6 lg:max-w-7xl",
            // Add smooth content transition
            "transform-gpu"
          )}>
            <div dir="ltr" className="transition-all duration-300 ease-in-out">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sidebar
          open={sidebarOpen}
          collapsed={false}
          onToggleCollapse={() => { }}
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}