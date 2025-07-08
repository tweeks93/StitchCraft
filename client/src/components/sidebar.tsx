import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Package, 
  Type, 
  BarChart3, 
  Settings, 
  LogOut,
  PaintBucket
} from "lucide-react";
import type { User } from "@shared/schema";

interface SidebarProps {
  user?: User;
  onOpenAdmin: () => void;
}

export function Sidebar({ user, onOpenAdmin }: SidebarProps) {
  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64 bg-white border-r border-gray-200">
        {/* Logo and Brand */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <PaintBucket className="text-white text-sm" />
            </div>
            <span className="text-lg font-semibold text-gray-900">EmbroideryPro</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-2">
          <Button 
            variant="default" 
            className="w-full justify-start"
          >
            <Palette className="mr-3 h-4 w-4" />
            Design Studio
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-700 hover:bg-gray-50"
            onClick={onOpenAdmin}
          >
            <Package className="mr-3 h-4 w-4" />
            Orders
            <Badge variant="destructive" className="ml-auto">3</Badge>
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-700 hover:bg-gray-50"
          >
            <Type className="mr-3 h-4 w-4" />
            Font Library
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-700 hover:bg-gray-50"
            onClick={onOpenAdmin}
          >
            <BarChart3 className="mr-3 h-4 w-4" />
            Analytics
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-700 hover:bg-gray-50"
            onClick={onOpenAdmin}
          >
            <Settings className="mr-3 h-4 w-4" />
            Settings
          </Button>
        </nav>

        {/* User Profile */}
        <div className="flex-shrink-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <img 
              src={user?.profileImageUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"} 
              alt="User profile" 
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user?.firstName || user?.email || "User"}
              </p>
              <p className="text-xs text-gray-500">Business Owner</p>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleLogout}
              className="text-gray-400 hover:text-gray-500"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
