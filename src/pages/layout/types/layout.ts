import React from 'react';

export interface NavigationItem {
  segment: string;
  title: string;
  icon: React.ReactNode;
}

export interface MainLayoutProps {
  children?: React.ReactNode;
}

export interface ToolpadRouter {
  pathname: string;
  searchParams: URLSearchParams;
  navigate: (to: string | URL) => void;
}
