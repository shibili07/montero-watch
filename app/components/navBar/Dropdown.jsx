import React from 'react';
import Image from 'next/image';
import userAvatar from '../../../public/images/Avatar.png';
import Link from 'next/link';

import {
  FiUser,
  FiSettings,
  FiBell,
  FiLogOut,
  FiChevronRight,
  FiX
} from 'react-icons/fi';

function Dropdown({ onClose }) {
  return (
    <div className="fixed md:absolute top-0 right-0 md:top-12 md:right-0 w-full md:w-[280px] h-screen md:h-auto md:rounded-xl bg-white shadow-2xl border border-neutral-200 md:p-5 p-4 z-[9999]">
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 md:top-3 md:right-3"
        onClick={onClose}
        aria-label="Close dropdown"
      >
        <FiX size={20} className="md:w-[18px] md:h-[18px]" />
      </button>

      {/* User Info */}
      <div className="flex items-center gap-3 mb-6 md:mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200 flex-shrink-0">
          <Image
            src={userAvatar}
            alt="User Avatar"
            width={48}
            height={48}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-neutral-900 truncate">
            Your name
          </p>
          <p className="text-xs text-neutral-500 truncate">
            yourname@gmail.com
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-neutral-200 mb-4" />

      {/* Menu */}
      <div className="space-y-2">
        <Link href="/profile" onClick={onClose}>
          <MenuItem
            icon={<FiUser size={20} className="md:w-[18px] md:h-[18px]" />}
            label="My Profile"
            right={<FiChevronRight size={18} className="md:w-[16px] md:h-[16px]" />}
          />
        </Link>

        <MenuItem
          icon={<FiSettings size={20} className="md:w-[18px] md:h-[18px]" />}
          label="Settings"
          right={<FiChevronRight size={18} className="md:w-[16px] md:h-[16px]" />}
        />

        <MenuItem
          icon={<FiBell size={20} className="md:w-[18px] md:h-[18px]" />}
          label="Notification"
          right={<span className="text-xs text-neutral-500">Allow</span>}
        />

        <MenuItem
          icon={<FiLogOut size={20} className="md:w-[18px] md:h-[16px]" />}
          label="Log Out"
          onClick={onClose}
        />
      </div>

      {/* Mobile-only backdrop effect */}
      <div 
        className="fixed inset-0  bg-opacity-20 -z-10 md:hidden" 
        onClick={onClose}
      />
    </div>
  );
}

function MenuItem({ icon, label, right, onClick }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick?.();
    }
  };

  return (
    <div 
      className="flex items-center justify-between px-2 py-3 md:py-2 rounded-md cursor-pointer hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="flex items-center gap-3 text-neutral-800">
        {icon}
        <span className="text-sm md:text-sm">{label}</span>
      </div>
      {right}
    </div>
  );
}

export default Dropdown;