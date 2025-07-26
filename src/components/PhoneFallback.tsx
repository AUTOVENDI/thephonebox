import React from 'react';
import { Smartphone } from 'lucide-react';

export function PhoneFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <Smartphone className="w-24 h-24 text-white mx-auto mb-4 animate-pulse" />
        <p className="text-white text-lg">Loading 3D Model...</p>
        <p className="text-gray-300 text-sm">Please wait</p>
      </div>
    </div>
  );
} 